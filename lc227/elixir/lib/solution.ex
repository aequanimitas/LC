defmodule Solution do
  @moduledoc """
  Documentation for `Solution`.
  """
  @operators "+/*-"

  def calculate(<<>>), do: 0
  def calculate(str), do: calculate(str, {0, 0, 0, "+"})

  def calculate(<<c::binary-size(1)>>, {total_acc, prev, current, s}) do
    current = maybe_int_or_character(c, current)
    {total_acc, prev} = maybe_eval?(s, total_acc, prev, current)
    total_acc + prev
  end

  def calculate(<<c::binary-size(1), rest::binary>>, {total_acc, prev, current, s}) do
    current = maybe_int_or_character(c, current)
    if not parseable_int?(c) and String.contains?(@operators, c) do
      {total_acc, prev} = maybe_eval?(s, total_acc, prev, current)
      calculate(rest, {total_acc, prev, 0, c})
    else
      calculate(rest, {total_acc, prev, current, s})
    end
  end

  def parseable_int?(<<c::binary-size(1)>>) do
    case Integer.parse(c) do
      {_, ""} -> true
      _ -> false
    end
  end

  @doc """
  If the `chr` (character) can be coerced to an `integer`, return the its value as int, else return
  provided default value
  """
  @spec maybe_int_or_character(String.t(), any) :: integer | any
  def maybe_int_or_character(<<c::binary-size(1)>>, default) do
    case Integer.parse(c) do
      {_, ""} ->
        {idx, _} = :binary.match("0123456789", c)

        # why * 10?
        (default * 10) + idx

      _ ->
        default
    end
  end

  @doc """
  If the `chr` is an operator OR the counter has reached the limit. This is a complicated
  function lol
  """
  @spec can_be_evaluated?(<<_::1>>, non_neg_integer, non_neg_integer) :: boolean
  def can_be_evaluated?(<<c::binary-size(1)>>, counter, limit) do
    case Integer.parse(c) do
      {_, ""} ->
        counter == limit

      _ ->
        (String.contains?(@operators, c)) or counter == limit
    end
  end

  @doc """
  if `chr` is a mathematical operator, this means we can eval, else, return the values
  """
  @spec maybe_eval?(<<_::1>>, non_neg_integer, non_neg_integer, non_neg_integer) :: {non_neg_integer, non_neg_integer}
  def maybe_eval?(<<>>, i1, i2, _i3), do: {i1, i2}
  def maybe_eval?(<<c::binary-size(1)>>, i1, i2, i3) do
    case c do
      "+" ->
        {i1 + i2, i3}

      "-" ->
        # negate
        {i1 + i2, -i3}

      "*" ->
        {i1, i2 * i3}

      "/" ->
        {i1, div(i2, i3)}
    end
  end
end

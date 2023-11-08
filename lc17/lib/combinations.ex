defmodule Combinations do
  @moduledoc """
  Documentation for `Combinations`.
  """

  @keypad %{
    "2" => "abc",
    "3" => "def",
    "4" => "ghi",
    "5" => "jkl",
    "6" => "mno",
    "7" => "pqrs",
    "8" => "tuv",
    "9" => "wxyz"
  }

  @spec letter_combinations(digits :: String.t()) :: [String.t()]
  def letter_combinations(<<>>), do: []

  def letter_combinations(digits) do
    [head | rest] = collect(digits, [])

    if Enum.empty?(rest) do
      String.graphemes(head)
    else
      Enum.reduce(rest, head, fn x, acc ->
        x1(acc, x, [])
      end)
    end
  end

  def collect(<<>>, acc), do: Enum.reverse(acc)

  def collect(<<key::binary-size(1), rest::binary>>, acc) do
    case @keypad do
      %{^key => chars} ->
        collect(rest, [chars | acc])

      _ ->
        collect(rest, acc)
    end
  end

  def x1(<<a::binary-size(1)>>, <<b::binary-size(1)>>, acc), do: [a <> b | acc]

  def x1(<<a::binary-size(1)>>, <<b::binary-size(1), rest::binary>>, acc),
    do: x1(a, rest, [a <> b | acc])

  def x1(<<a::binary-size(1), rest::binary>>, <<b::binary-size(1)>>, acc),
    do: x1(rest, b, [a <> b | acc])

  def x1(<<a::binary-size(1), r1::binary>>, <<b::binary-size(1), r2::binary>>, acc) do
    x1(r1, r2, x1(r1, b, x1(a, r2, [a <> b | acc])))
  end

  def x1([], _, acc), do: acc
  def x1([h | t] = x, <<a::binary-size(1), rest::binary>> = z, acc), do: x1(t, z, x2(z, h, acc))

  defp x2(<<a::binary-size(1)>>, s, acc), do: [s <> a | acc]
  defp x2(<<a::binary-size(1), rest::binary>>, s, acc) do
    x2(rest, s, [s <> a | acc])
  end
end

defmodule Solution do
  @moduledoc """
  Documentation for `Solution`.
  """

  @spec word_pattern(pattern :: String.t(), s :: String.t()) :: boolean
  def word_pattern(pattern, s) do
    st = String.split(s, " ", trim: true)

    if String.length(pattern) > length(st) do
      false
    else
      m = word_pattern(pattern, {%{}, %{}}, st)
      pt = String.split(pattern, "", trim: true)
      str = word_pattern(pt, m, "")

      str == s
    end
  end

  def word_pattern([], _map, acc), do: acc
  def word_pattern([key | rest], {m1, m2} = map, acc) do
    case m1 do
      %{^key => value} ->
        case m2 do
          %{^value => ^key} ->
            acc = if acc == "", do: value, else: acc <> " " <> value
            word_pattern(rest, map, acc)

          _ ->
            word_pattern(rest, map, acc)
        end

      _ ->
        word_pattern(rest, map, acc)
    end
  end

  def word_pattern(<<>>, map, _), do: map

  def word_pattern(<<k1::binary-size(1), rest::binary>>, {m1, m2} = m, [k2 | t]) do
    case m do
      {%{^k1 => _}, %{^k2 => _}} ->
        word_pattern(rest, m, t)

      {%{^k1 => _}, _} ->
        word_pattern(rest, m, t)

      {_, %{^k2 => _}} ->
        word_pattern(rest, m, t)

      _ ->
        m = {Map.put(m1, k1, k2), Map.put(m2, k2, k1)}
        word_pattern(rest, m, t)
    end
  end
end

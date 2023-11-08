defmodule Lc3 do
  @moduledoc """
  Documentation for `Lc3`.
  """

  @spec length_of_longest_substring(s :: String.t) :: integer
  def length_of_longest_substring(s), do: solution(s, %{}, 0, 0, 0)

  def solution(<<>>, _ht, _counter, x0, x1) when x0 > x1, do: x0
  def solution(<<>>, _ht, _counter, _x0, x1), do: x1

  def solution(<<key::binary-size(1), rest::binary>>, ht, counter, x0, x1) do
    case ht do
      %{^key => idx} ->
        x1 = if x0 <= x1, do: x1, else: x0
        # - delete keys whose values are STRICTLY less than INDEX
        # - we update the key with the current counter
        ht =
          ht
          |> Enum.filter(fn {_, v} -> not(v < idx) end)
          |> Enum.into(%{})
          |> Map.update(key, counter, fn _ -> counter end)

        solution(rest, ht, counter + 1, map_size(ht), x1)

      _ ->
        solution(rest, Map.put(ht, key, counter), counter + 1, x0 + 1, x1)
    end
  end
end

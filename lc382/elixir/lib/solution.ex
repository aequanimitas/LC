defmodule Solution do
  @moduledoc """
  Documentation for `Lc387`.
  """


  @spec first_uniq_char(s :: String.t) :: integer
  def first_uniq_char(<<>>), do: -1
  def first_uniq_char(s), do: first_uniq_char(s, %{}, 0)

  def first_uniq_char(<<>>, m, _c) do
    res =
      m
      |> Enum.filter(fn {_k, v} -> elem(v, 1) == 1 end)
      |> Enum.map(& elem(elem(&1, 1), 0))
      |> Enum.sort()

    if Enum.empty?(res), do: -1, else: hd(res)
  end

  def first_uniq_char(<<a::binary-size(1), rest::binary>>, m, c) do
    case m do
      %{^a => {_idx, _count}} ->
        first_uniq_char(rest, Map.update(m, a, {c, 1}, fn {_i, count} -> {c, count + 1} end), c + 1)

      _ ->
        first_uniq_char(rest, Map.put(m, a, {c, 1}), c + 1)
    end
  end
end

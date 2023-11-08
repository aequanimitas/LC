defmodule Lc242 do
  @moduledoc """
  Documentation for `Lc242`.
  """

  def is_anagram(s, t) do
    [a, b] =
      [s, t]
      |> Enum.map(fn x ->
        x
        |> String.graphemes()
        |> map([])
        |> merge_sort()
      end)

    a == b
  end

  def map([], acc), do: acc
  def map([h | x], acc) do
    map(x, [[h] | acc])
  end

  def merge_sort([a | []]), do: [a]

  def merge_sort(lst) do
    len = length(lst)
    {a, b} = Enum.split(lst, div(len, 2))
    a = merge_sort(a)
    b = merge_sort(b)
    merge(a, b, [])
  end

  def merge(a, [], acc), do: Enum.reverse(acc) ++ a
  def merge([], a, acc), do: Enum.reverse(acc) ++ a

  def merge([x | r1] = a, [y | r2] = b, acc) do
    if x <= y do
      merge(r1, b, [x | acc])
    else
      merge(a, r2, [y | acc])
    end
  end
end

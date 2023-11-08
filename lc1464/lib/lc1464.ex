defmodule Lc1464 do
  @moduledoc """
  Documentation for `Lc1464`.
  """
  def max_product(nums) do
    n = nums |> Enum.map(& [&1]) |> merge_sort() |> reverse()

    [x, y | _] = n
    ((x - 1) * (y - 1))
  end

  def merge_sort([a | []]), do: a
  def merge_sort(lst) do
    {a, b} = Enum.split(lst, div(length(lst), 2))
    a = merge_sort(a)
    b = merge_sort(b)
    merge(a, b, [])
  end

  def merge([], b, acc), do: reverse(acc) ++ b
  def merge(a, [], acc), do: reverse(acc) ++ a

  def merge([x1 | y1] = a, [x2 | y2] = b, acc) do
    if x1 <= x2, do: merge(y1, b, [x1 | acc]), else: merge(y2, a, [x2 | acc])
  end

  def reverse(lst), do: reverse(lst, [])

  def reverse([], acc), do: acc
  def reverse([a | b], acc), do: reverse(b, [a | acc])
end

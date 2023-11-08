defmodule Lc316 do
  @moduledoc """
  Documentation for `Lc316`.
  """

  @spec remove_duplicate_letters(s :: String.t) :: String.t
  def remove_duplicate_letters(s) do
    String.graphemes(s)
    |> dop(%{}, 0)
    #|> merge_sort()
    #|> Enum.join()
  end

  def dop([], a1, a2), do: {a1, a2}
  def dop([s | rest], a1, a2) do
    case a1 do
      %{^s => v} -> dop(rest, Map.put(a1, s, [a2 | v]), a2 + 1)
      %{} -> dop(rest, Map.put(a1, s, [a2]), a2 + 1)
    end
  end

  def merge_sort([a | []]), do: [a]
  def merge_sort(lst) do
    len = length(lst)
    {a, b} = Enum.split(lst, div(len, 2))
    a = merge_sort(a)
    b = merge_sort(b)
    merge(a, b, [])
  end

  def merge(x, [], acc), do: :lists.reverse(acc) ++ x
  def merge([], x, acc), do: :lists.reverse(acc) ++ x
  def merge([a0 | a1] = x, [b0 | b1] = y, acc) do
    if a0 < b0, do: merge(a1, y, [a0 | acc]), else: merge(x, b1, [b0 | acc])
  end
end

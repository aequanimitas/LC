defmodule Lc34 do
  @moduledoc """
  Documentation for `Lc34`.
  """
  @spec search_range(nums :: [integer], target :: integer) :: [integer]
  def search_range([], _), do: [-1, -1]

  def search_range([a | []], elem) do
    if a == elem, do: [0, 0], else: [-1, -1]
  end

  def search_range(nums, target) do
    # TODO
    # - split list
    len = length(nums)
    mid = div(len, 2)
    {a, b} = Enum.split(nums, mid)
    a = do_search(a, target, 0, [])
    b = do_search(b, target, mid, [])

    cond do
      Enum.empty?(a) and Enum.empty?(b) ->
        [-1, -1]

      Enum.empty?(a) ->
        db(b)

      Enum.empty?(b) ->
        db(a)

      true ->
        [x0 | _] = Enum.reverse(a)
        [y0 | _] = b
        [x0, y0]
    end
    |> Enum.sort()
  end

  defp db([a | []]), do: [a, a]

  defp db(a) do
    [x0 | _] = a
    [y0 | _] = Enum.reverse(a)
    [x0, y0]
  end

  defp do_search([], _, _, acc), do: acc
  defp do_search([h | []], e, count, acc), do: if(h == e, do: [count | acc], else: acc)

  defp do_search([h | rest], e, count, acc) do
    acc = if h == e, do: [count | acc], else: acc
    do_search(rest, e, count + 1, acc)
  end
end

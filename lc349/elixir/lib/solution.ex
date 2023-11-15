defmodule Solution do
  @moduledoc """
  Documentation for `Solution`.
  """

  @spec intersection(nums1 :: [integer], nums2 :: [integer]) :: [integer]
  def intersection([], _), do: []
  def intersection(_, []), do: []

  def intersection(nums1, nums2) do
    table = nums1 |> Enum.map(& {&1, nil}) |> Enum.into(%{})
    intersection2(nums2, table, [])
  end

  def intersection2([], _map, acc), do: acc
  def intersection2([k | rest], map, acc) do
    case map do
      %{^k => nil} ->
        intersection2(rest, Map.put(map, k, 1), [k | acc])

      _ ->
        intersection2(rest, map, acc)
    end
  end
end

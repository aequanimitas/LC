defmodule Solution do
  @moduledoc """
  Documentation for `Solution`.
  """

  @spec two_sum(nums :: [integer], target :: integer) :: [integer]
  def two_sum(nums, target), do: two_sum(nums, target, 0, %{}, [])

  def two_sum([], _target, _counter, %{}, acc), do: acc
  def two_sum([h | t], target, counter, map, acc) do
    key = target - h

    case map do
      %{^key => i} -> [i, counter]

      _ ->
        two_sum(t, target, counter + 1, Map.put(map, h, counter), acc)
    end
  end
end

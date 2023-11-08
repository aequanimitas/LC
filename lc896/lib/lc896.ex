defmodule Lc896 do
  @moduledoc """
  Documentation for `Lc896`.
  """

  @spec is_monotonic(nums :: [integer]) :: boolean
  def is_monotonic(nums), do: monotonic?(nums, nil, true, true)

  defp monotonic?([], _, b1, b2), do: b1 or b2
  defp monotonic?([current | rest], nil, b1, b2), do: monotonic?(rest, current, b1, b2)
  defp monotonic?([current | rest], prev, b1, b2) do
    cond do
      # NOTE:
      # so this is for descending order since on the first iteration
      # - we pushed the first element to the accumulator
      # - we compare if
      #   - the next is less than the previous head which is in the accumulator
      current < prev ->
        monotonic?(rest, current, b1, false)

      # NOTE:
      # so this is for ascending / increasing order
      # - we pushed the first element to the accumulator
      # - we compare if
      #   - the next is greater than the previous head which is in the accumulator
      current > prev ->
        monotonic?(rest, current, false, b2)

      true ->
        monotonic?(rest, current, b1, b2)
    end
  end
end

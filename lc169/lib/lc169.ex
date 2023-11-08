defmodule Lc169 do
  @moduledoc """
  Documentation for `Lc169`.
  """

  @spec majority_element(nums :: [integer]) :: integer
  def majority_element(nums), do: do_majority(nums, %{}, nil)

  defp do_majority([], _, {e, _}), do: e
  defp do_majority([h | []], _, nil), do: h
  defp do_majority([h | rest], m, nil), do: do_majority(rest, Map.put(m, h, 1), {h, 1})

  defp do_majority([h | []], m, {x, y}) do
    case m do
      %{^h => v} ->
        if v + 1 > y, do: h, else: x

      _ ->
        x
    end
  end

  defp do_majority([h | rest], m, {x, y} = z) do
    case m do
      %{^h => v} ->
        z = if v > y, do: {h, v + 1}, esle: z
        do_majority(rest, Map.update(m, h, 1, &(&1 + 1)), z)

      _ ->
        do_majority(rest, Map.put(m, h, 1), z)
    end
  end
end

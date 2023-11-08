defmodule Lc2011 do
  @moduledoc """
  Documentation for `Lc2011`.
  """

  @spec final_value_after_operations(operations :: [String.t]) :: integer
  def final_value_after_operations(operations), do: do_fin(operations, 0)

  defp do_fin([], count), do: count
  defp do_fin(["++X" | rest], count), do: do_fin(rest, count + 1)
  defp do_fin(["X++" | rest], count), do: do_fin(rest, count + 1)
  defp do_fin(["--X" | rest], count), do: do_fin(rest, count - 1)
  defp do_fin(["X--" | rest], count), do: do_fin(rest, count - 1)
end

defmodule Solution do
  @spec add_to_array_form(num :: [integer], k :: integer) :: [integer]
  def add_to_array_form(num, k) do
    x = do_add(num, k, 0)
    to_list(x, [])
  end

  defp to_list(num, acc) when num >= 10, do: to_list(div(num, 10), [rem(num, 10) | acc])
  defp to_list(num, acc), do: [num | acc]

  defp do_add([], k, acc), do: acc + k
  defp do_add([d | tail], k, acc), do: do_add(tail, k, acc * 10 + d)
end

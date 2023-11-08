defmodule Lc21Test do
  use ExUnit.Case

  test "ok" do
    a = [1,2,4] |> :lists.reverse() |> Lc21.to_node()
    b = [1,3,4] |> :lists.reverse() |> Lc21.to_node()

    Lc21.merge_two_lists(a, b) |> IO.inspect
  end
end

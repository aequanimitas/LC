defmodule Lc148Test do
  use ExUnit.Case

  test "ok" do
    x = [-1,5,3,4,0]
    x
    |> :lists.reverse()
    |> Lc148.to_node()
    |> Lc148.sort_list()
    |> IO.inspect
  end
end

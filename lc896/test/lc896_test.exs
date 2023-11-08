defmodule Lc896Test do
  use ExUnit.Case
  doctest Lc896

  test "greets the world" do
    Lc896.is_monotonic([1,2,2,3]) |> IO.inspect
    Lc896.is_monotonic([6,5,4,4]) |> IO.inspect
    Lc896.is_monotonic([1,3,2]) |> IO.inspect
    Lc896.is_monotonic([4,5,6,3,4]) |> IO.inspect
  end
end

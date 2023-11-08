defmodule Lc61Test do
  use ExUnit.Case

  test "greets the world" do
    #assert Lc61.hello() == :world
    x = [1,2,3,4,5] |> Lc61.lc()
    k = 2

    assert [3,4,5,1,2] == Lc61.rotate_right(x, k) |> IO.inspect
  end

  test "x" do
    x = [0,1,2] |> Lc61.lc()
    #k = 4
    k = 4

    Lc61.rotate_right(x, k) |> IO.inspect
  end

  test "x1" do
    x = [1,2,3] |> Lc61.lc()
    # So:
    # - if `k` exceeds length of `x`, we need to lower it down
    #k = 4
    k = 2_000_000_000
    #k = 3

    Lc61.rotate_right(x, k) |> IO.inspect
  end

  test "find_min" do
    # length
    x = 3

    k = 4

    Lc61.find_min(x, k) |> IO.inspect
  end
end

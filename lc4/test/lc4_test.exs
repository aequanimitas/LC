defmodule Lc4Test do
  use ExUnit.Case
  doctest Lc4

  alias Lc4.Stack

  test "greets the world" do
    #x = Stack.ms([1,2], [3, 4])
    #assert x == [1,2,3,4]

    assert 2.0 == Lc4.find_median_sorted_arrays([1, 2], [3]) |> IO.inspect
    assert 2.5 == Lc4.find_median_sorted_arrays([1, 2], [3, 4]) |> IO.inspect
    assert 2.0 == Lc4.P2.find_median_sorted_arrays([1, 2], [3]) |> IO.inspect

    [1,3,5,7,8]
    |> Lc4.find_median_sorted_arrays([2,4,6])
    |> IO.inspect

    [1]
    |> Lc4.find_median_sorted_arrays([2,3,4,5,6,7,8,9,10])
    |> IO.inspect
  end
end

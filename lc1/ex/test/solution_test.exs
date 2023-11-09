defmodule SolutionTest do
  use ExUnit.Case

  test "ok" do
    lst = [2,7,11,15]
    v = 9
    assert Solution.two_sum(lst, v) == [0,1]

    lst = [3,2,4]
    v = 6
    assert Solution.two_sum(lst, v) == [1, 2]

    lst = [3,3]
    v = 6
    assert Solution.two_sum(lst, v) == [0,1]
  end
end

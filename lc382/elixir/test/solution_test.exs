defmodule SolutionTest do
  use ExUnit.Case
  doctest Solution

  test "greets the world" do
    s = "leetcode"
    assert 0 == Solution.first_uniq_char(s)

    s = "loveleetcode"
    assert Solution.first_uniq_char(s, %{}, 0) == 2

    s = "aabb"
    assert Solution.first_uniq_char(s, %{}, 0) == -1
  end
end

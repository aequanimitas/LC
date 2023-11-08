defmodule Lc34Test do
  use ExUnit.Case

  test "[]" do
    nums = []
    x = 99
    assert Lc34.search_range(nums, x) == [-1, -1]
  end

  test "[5,7,7,8,8,10] 8" do
    nums = [5, 7, 7, 8, 8, 10]
    x = 8
    assert Lc34.search_range(nums, x) == [3, 4]
  end

  test "[5,7,7,8,8,10] 6" do
    nums = [5, 7, 7, 8, 8, 10]
    x = 6
    assert Lc34.search_range(nums, x) == [-1, -1]
  end

  test "[1], 1" do
    nums = [1]
    x = 1
    assert Lc34.search_range(nums, x) == [0, 0]
  end

  test "[2, 2], 2" do
    nums = [2, 2]
    x = 2
    assert Lc34.search_range(nums, x) == [0, 1]
  end

  test "[1, 3], 1" do
    nums = [1, 3]
    x = 1
    assert Lc34.search_range(nums, x) == [0, 0]
  end

  test "[3, 3, 3], 3" do
    nums = [3, 3, 3]
    x = 3
    assert Lc34.search_range(nums, x) == [0, 2]
  end

  test "[1,4], 4" do
    nums = [1, 4]
    x = 4
    assert Lc34.search_range(nums, x) == [1, 1]
  end

  test "[1,2,2,3,4,4,4], 4" do
    nums = [1, 2, 2, 3, 4, 4, 4]
    x = 4
    assert Lc34.search_range(nums, x) == [4, 6]
  end
end

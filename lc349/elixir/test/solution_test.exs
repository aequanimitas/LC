defmodule SolutionTest do
  use ExUnit.Case
  doctest Solution

  test "ok" do
    nums1 = [1,2,2,1]
    nums2 = [2,2]
    assert Solution.intersection(nums1, nums2) == [2]

    nums1 = [4,9,5]
    nums2 = [9,4,9,8,4]
    assert Solution.intersection(nums1, nums2) == [4, 9]
  end

  test "failing" do
    nums1 = [4,7,9,7,6,7]
    nums2 = [5,0,0,6,1,6,2,2,4]
    assert Solution.intersection(nums1, nums2) == [6,4]
  end
end

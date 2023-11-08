defmodule Lc169Test do
  use ExUnit.Case
  doctest Lc169

  test "0" do
    x = [3, 2, 3]
    assert Lc169.majority_element(x) == 3
  end

  test "1" do
    x = [2, 2, 1, 1, 1, 2, 2]
    assert Lc169.majority_element(x) == 2
  end

  test "2" do
    x = [6, 5, 5]
    assert Lc169.majority_element(x) == 5
  end

  test "3" do
    x = [6, 6, 6, 7, 7]
    assert Lc169.majority_element(x) == 6
  end

  test "4" do
    x = [2, 2, 3, 3, 3, 3, 2]
    assert Lc169.majority_element(x) == 3
  end
end

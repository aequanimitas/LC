defmodule Lc3Test do
  use ExUnit.Case

  test "greets the world" do
    a = "abcabcbb"
    <<a::binary-size(1), rest::binary>> = a
    assert "a" == a
    assert "bcabcbb" == rest
  end

  test "abcabcbb" do
    a = "abcabcbb"
    assert 3 == Lc3.solution(a, %{}, 0, 0, 0)
  end

  test "bbbbb" do
    a = "bbbbb"
    assert 1 == Lc3.solution(a, %{}, 0, 0, 0)
  end

  test "pwwkew" do
    a = "pwwkew"
    assert 3 == Lc3.solution(a, %{}, 0, 0, 0)
  end

  test "space" do
    a = " "
    assert 1 == Lc3.solution(a, %{}, 0, 0, 0)
  end

  test "dvdf" do
    a = "dvdf"
    assert 3 == Lc3.solution(a, %{}, 0, 0, 0)
  end

  test "ckilbkd" do
    a = "ckilbkd"
    assert 5 == Lc3.solution(a, %{}, 0, 0, 0)
  end
end

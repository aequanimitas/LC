defmodule Lc387Test do
  use ExUnit.Case
  doctest Lc387

  test "greets the world" do
    s = "leetcode"
    assert 0 == Lc387.first_uniq_char(s)

    s = "loveleetcode"
    assert Lc387.first_uniq_char(s, %{}, 0) == 2

    s = "aabb"
    assert Lc387.first_uniq_char(s, %{}, 0) == -1
  end
end

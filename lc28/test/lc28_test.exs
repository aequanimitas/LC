defmodule Lc28Test do
  use ExUnit.Case

  test "0" do
    haystack = "sadbutsad"
    needle = "sad"

    Lc28.str_str(haystack, needle)
  end

  test "1" do
    haystack = "leetcode"
    needle = "leeto"

    Lc28.str_str(haystack, needle)
  end

  test "2" do
    haystack = "a"
    needle = "a"

    Lc28.str_str(haystack, needle) |> IO.inspect
  end

  test "3" do
    haystack = "aaa"
    needle = "aaaa"

    Lc28.str_str(haystack, needle) |> IO.inspect
  end
end

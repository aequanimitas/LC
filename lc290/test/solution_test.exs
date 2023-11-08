defmodule SolutionTest do
  use ExUnit.Case
  doctest Solution

  test "greets the world" do
    pattern = "abba"
    s = "dog cat cat dog"
    assert Solution.word_pattern(pattern, s)

    pattern = "abba"
    s = "dog cat cat fish"
    refute Solution.word_pattern(pattern, s)

    pattern = "aaaa"
    s = "dog cat cat dog"
    refute Solution.word_pattern(pattern, s)

    pattern = "abba"
    s = "dog dog dog dog"
    refute Solution.word_pattern(pattern, s)

    pattern = "aba"
    s = "cat cat cat dog"
    refute Solution.word_pattern(pattern, s)

    # so for this one, if the pattern length > possible composite keys, return false
    pattern = "jquery"
    s = "jquery"
    refute Solution.word_pattern(pattern, s)

    #Solution.word_pattern(pattern, {%{}, %{}}, String.split(s, " ", trim: true))
  end
end

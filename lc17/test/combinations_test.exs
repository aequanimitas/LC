defmodule CombinationsTest do
  use ExUnit.Case
  doctest Combinations

  test "empty" do
    assert Enum.empty?(Combinations.letter_combinations(""))
  end

  test "23" do
    y = Combinations.letter_combinations("23")
    z = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
    assert eq?(y, z)
  end

  test "234" do
    y = Combinations.letter_combinations("234")
    z = ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]
    assert eq?(y, z)

    y = Combinations.letter_combinations("2345")
  end

  test "single" do
    y = Combinations.letter_combinations("2")
    z = ["a", "b", "c"]
    assert eq?(y, z)
  end

  test "x1" do
    assert Combinations.x1("a", "d", []) == ["ad"]
    assert Combinations.x1("a", "de", []) == ["ae", "ad"]
    assert eq?(Combinations.x1("a", "def", []), ["af", "ae", "ad"])
    assert eq?(Combinations.x1("b", "de", []), ["bd", "be"])
    assert eq?(Combinations.x1("ab", "d", []), ["bd", "ad"])
    assert eq?(Combinations.x1("ab", "de", []), ["ad", "ae", "bd", "be"])

    assert eq?(Combinations.x1("abc", "def", []), [
             "ad",
             "ae",
             "af",
             "bd",
             "be",
             "bf",
             "cd",
             "ce",
             "cf"
           ])
  end

  defp eq?(x1, x2), do: Enum.sort(x1) == Enum.sort(x2)
end

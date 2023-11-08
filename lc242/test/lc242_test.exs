defmodule Lc242Test do
  use ExUnit.Case

  test "ok" do
    Lc242.is_anagram("anagram", "nagaram") |> IO.inspect

    #[x, y]
      ["anagram", "nagaram"]
      |> Enum.map(fn x ->
        x
        |> String.graphemes()
      end)
      |> Enum.map(& &1 |> Lc242.merge_sort())
      |> IO.inspect
  end

  test "1" do
    #"anagram"
    "anagram"
    |> String.graphemes()
    |> Enum.map(& [&1])
    |> Lc242.merge_sort()
    |> IO.inspect
  end
end

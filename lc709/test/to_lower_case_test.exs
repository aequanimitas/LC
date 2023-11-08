defmodule ToLowerCaseTest do
  use ExUnit.Case
  doctest ToLowerCase

  test "greets the world" do
    s = "Hello"
    assert "hello" == ToLowerCase.to_lower_case(s)

    s = "here"
    assert "here" == ToLowerCase.to_lower_case(s)

    s = ""
    assert "" == ToLowerCase.to_lower_case(s)

    s = "LOVELY"
    assert "lovely" == ToLowerCase.to_lower_case(s)
  end

  test "map" do
    ?A..?Z
    |> Enum.map(& [&1])
    |> Enum.reduce(%{}, fn [d | []] = c, acc ->
      Map.put(acc, List.to_string(c), List.to_string([d + 32]))
    end)
  end
end

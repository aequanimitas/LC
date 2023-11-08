defmodule Lc316Test do
  use ExUnit.Case

  test "greets the world" do
    #s = "bcadc"
    #Lc316.remove_duplicate_letters(s) |> IO.inspect

    s = "cbacdcbc"
    Lc316.remove_duplicate_letters(s) |> IO.inspect
  end
end

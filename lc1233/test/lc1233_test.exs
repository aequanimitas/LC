defmodule Lc1233Test do
  use ExUnit.Case

  test "greets the world" do
    folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
    #folder = ["/a", "/a/b"]

    #folder = ["/a", "/a/b"]
    x = folder |> Enum.map(& Lc1233.sanitize(String.graphemes(&1), ""))
    os = Lc1233.remove_subfolders(folder) |> IO.inspect

    # Enum.filter(x, & !Lc1233.OS.subdir?(os, &1)) |> IO.inspect
  end

  test "1" do
    folder = ["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]
    #Lc1233.remove_subfolders(folder)
  end
end

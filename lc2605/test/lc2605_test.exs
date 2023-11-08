defmodule Lc2605Test do
  use ExUnit.Case

  test "greets the world" do
    #a = [4,1,3]
    #b = [5,7]

    #Lc2605.min_number(a, b)

    a = [3,5,2,6]
    b = [3,1,7]
    Lc2605.min_number(a, b) |> IO.inspect
  end
end

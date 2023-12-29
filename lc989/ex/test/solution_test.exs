defmodule SolutionTest do
  use ExUnit.Case
  doctest Solution

  test "ok" do
    num = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3]
    k = 516
    IO.inspect Solution.add_to_array_form(num, k)

    num = [2,1,5]
    k = 806
    IO.inspect Solution.add_to_array_form(num, k)
  end
end

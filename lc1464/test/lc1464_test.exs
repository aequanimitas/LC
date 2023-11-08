defmodule Lc1464Test do
  use ExUnit.Case
  doctest Lc1464

  test "greets the world" do
    [3,4,5,2]
    |> Lc1464.max_product()
    |> IO.inspect
  end
end

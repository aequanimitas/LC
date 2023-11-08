defmodule Lc2Test do
  use ExUnit.Case

  alias Lc2.ListNode

  test "greets the world" do
    #a = %ListNode{next: %ListNode{next: %ListNode{next: nil, val: 3}, val: 4}, val: 2}
    #b = %ListNode{next: %ListNode{next: %ListNode{next: nil, val: 4}, val: 6}, val: 5}

    #Lc2.add_two_numbers(a, b) |> IO.inspect

    #a = %ListNode{val: 0}
    #b = %ListNode{val: 0}

    #Lc2.add_two_numbers(a, b) |> IO.inspect

    #a = %ListNode{val: 0}
    #b = %ListNode{val: 0}

    #Lc2.add_two_numbers(a, b) |> IO.inspect

    a = List.duplicate(9, 7) |> Lc2.to_node(nil)
    b = List.duplicate(9, 4) |> Lc2.to_node(nil)

    Lc2.add_two_numbers(a, b) |> IO.inspect
  end
end

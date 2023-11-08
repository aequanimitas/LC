defmodule Lc19Test do
  use ExUnit.Case

  alias Lc19.ListNode

  test "[1, 2]" do
    x = %ListNode{
      next: %ListNode{
        val: 2
      },
      val: 1
    }
    assert Lc19.remove_nth_from_end(x, 1) |> IO.inspect
  end

  test "[1, 2, 3, 4, 5]" do
    x = %ListNode{
      next: %ListNode{
        next: %ListNode{next: %ListNode{next: %ListNode{next: nil, val: 5}, val: 4}, val: 3},
        val: 2
      },
      val: 1
    }
    Lc19.count(x)
    #assert Lc19.remove_nth_from_end(x, 2) |> IO.inspect
  end
end

defmodule Lc21 do
  @moduledoc """
  Documentation for `Lc21`.
  """

  # Definition for singly-linked list.
  # so the input will be like this, and we need to convert on tests
  defmodule ListNode do
    @type t :: %__MODULE__{
      val: integer,
      next: t() | nil
    }
    defstruct val: 0, next: nil
  end

  @spec merge_two_lists(list1 :: ListNode.t | nil, list2 :: ListNode.t | nil) :: ListNode.t | nil
  def merge_two_lists(nil, %ListNode{} = node), do: node
  def merge_two_lists(%ListNode{} = node, nil), do: node

  def merge_two_lists(%ListNode{val: v1, next: nd1} = n1, %ListNode{val: v2, next: nd2} = n2) do
    if v1 <= v2 do
      %{n1 | next: merge_two_lists(nd1, n2)}
    else
      %{n2 | next: merge_two_lists(nd2, n1)}
    end
  end

  def merge_two_lists(_, _), do: nil
end

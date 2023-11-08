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
  def merge_two_lists(list1, list2) do
    list1
    |> do_merge_two_lists(list2, [])
    |> to_node()
  end

  defp do_merge_two_lists(nil, nil, lst), do: lst
  defp do_merge_two_lists(%ListNode{val: v} = n1, nil, lst), do: do_merge_two_lists(n1.next, nil, [v | lst])
  defp do_merge_two_lists(nil, %ListNode{val: v} = n2, lst), do: do_merge_two_lists(nil, n2.next, [v | lst])

  defp do_merge_two_lists(%ListNode{val: v1} = n1, %ListNode{val: v2} = n2, lst) when v1 > v2, do:
    if v1 > v2 do
      do_merge_two_lists(n1, n2.next, [v2 | lst])
    else
      do_merge_two_lists(n1.next, n2, [v1 | lst])
    end
  end

  @doc """
  Converts a list to ListNode
  """
  def to_node(list) do
    list
    |> Enum.reduce(nil,fn i, node ->
      # TODO (hta)
      # - if we reverse, we can start at the innermost struct!
      if is_nil(node) do
        %ListNode{val: i}
      else
        %ListNode{val: i, next: node}
      end
    end)
  end
end

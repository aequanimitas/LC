defmodule Lc19 do
  @moduledoc """
  Documentation for `Lc19`.
  """

  # Definition for singly-linked list.

  defmodule ListNode do
    @type t :: %__MODULE__{
            val: integer,
            next: ListNode.t() | nil
          }
    defstruct val: 0, next: nil
  end

  @spec remove_nth_from_end(head :: ListNode.t() | nil, n :: integer) :: ListNode.t() | nil
  def remove_nth_from_end(nil, _), do: nil

  def remove_nth_from_end(head, n) do
    count = count(head)
    do_remove(head, count, n, [])
  end

  defp do_remove(nil, _counter, _limit, acc) do
    to_node(acc)
  end

  defp do_remove(%ListNode{next: next, val: val} = l, counter, limit, acc) do
    if counter == limit do
      do_remove(next, counter - 1, limit, acc)
    else
      do_remove(next, counter - 1, limit, [val | acc])
    end
  end

  def to_node(list) do
    list
    |> Enum.reduce(nil, fn i, node ->
      if is_nil(node) do
        %ListNode{val: i}
      else
        %ListNode{val: i, next: node}
      end
    end)
  end

  def count(%ListNode{} = l), do: do_count(l, 0)
  defp do_count(nil, counter), do: counter
  defp do_count(%ListNode{next: next}, counter), do: do_count(next, counter + 1)
end

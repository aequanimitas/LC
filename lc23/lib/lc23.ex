defmodule Lc23 do
  @moduledoc """
  Documentation for `Lc23`.
  """
  defmodule ListNode do
    @type t :: %__MODULE__{
      val: integer,
      next: ListNode.t() | nil
    }
    defstruct val: 0, next: nil
  end

  @spec merge_k_lists(lists :: [ListNode.t | nil]) :: ListNode.t | nil
  def merge_k_lists([]), do: nil
  def merge_k_lists([x | y]), do: Enum.reduce(y, x, & merge(&2, &1))

  def merge(nil, %ListNode{} = node), do: node
  def merge(%ListNode{} = node, nil), do: node

  def merge(%ListNode{} = n1, %ListNode{} = n2) do
    if n1.val <= n2.val do
      %{n1 | next: merge(n1.next, n2)}
    else
      %{n2 | next: merge(n2.next, n1)}
    end
  end
  def merge(_, _), do: nil
end

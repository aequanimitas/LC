defmodule Lc148 do
  @moduledoc """
  Documentation for `Lc148`.
  """
  defmodule ListNode do
    @type t :: %__MODULE__{
      val: integer,
      next: ListNode.t() | nil
    }
    defstruct val: 0, next: nil
  end

  @spec sort_list(head :: ListNode.t | nil) :: ListNode.t | nil
  def sort_list(%ListNode{} = node) do
    node
    |> collect()
    |> merge_sort()
    # we need to reverse as we're only pushing in list head
    |> :lists.reverse()
    |> to_node()
  end

  def sort_list(_), do: nil

  def collect(%ListNode{} = node), do: collect(node, [])

  def collect(%ListNode{next: nil, val: val}, acc), do: [val | acc]
  def collect(%ListNode{next: next, val: val}, acc), do: collect(next, [val | acc])

  def merge_sort([]), do: []
  def merge_sort([a | []]), do: [a]

  def merge_sort(lst) when is_list(lst) do
    len = length(lst)
    {a, b} = Enum.split(lst, div(len, 2))
    a = merge_sort(a)
    b = merge_sort(b)
    merge(a, b, [])
  end

  def merge([], b, acc), do: reverse(acc) ++ b
  def merge(a, [], acc), do: reverse(acc) ++ a

  def merge([a1 | a_rest] = a, [b1 | b_rest] = b, acc) do
    if a1 <= b1 do
      merge(a_rest, b, [a1 | acc])
    else
      merge(a, b_rest, [b1 | acc])
    end
  end

  def reverse(lst), do: reverse(lst, [])
  def reverse([], acc), do: acc
  def reverse([h | t], acc), do: reverse(t, [h | acc])
  
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

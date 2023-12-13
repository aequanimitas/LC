defmodule Lc206 do
  @moduledoc """
  Documentation for `Lc206`.
  """
  defmodule ListNode do
    @type t :: %__MODULE__{
      val: integer,
      next: ListNode.t() | nil
    }
    defstruct val: 0, next: nil
  end

  @spec reverse_list(head :: ListNode.t | nil) :: ListNode.t | nil
  def reverse_list(head), do: do_reverse(head, [])

  defp do_reverse(nil, acc), do: to_node(Enum.reverse(acc))

  defp do_reverse(%ListNode{next: next, val: val}, acc), do: do_reverse(next, [val | acc])

  defp to_node(list) do
    Enum.reduce(list, nil, fn l, node ->
      if is_nil(node) do
        %ListNode{val: l}
      else
        %ListNode{val: l, next: node}
      end
    end)
  end
end

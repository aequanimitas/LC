defmodule Lc2 do
  @moduledoc """
  Documentation for `Lc2`.
  """

  defmodule ListNode do
    @type t :: %__MODULE__{
      val: integer,
      next: ListNode.t() | nil
    }
    defstruct val: 0, next: nil
  end

  @doc """
  Linked list in reverse order
  """
  @spec add_two_numbers(l1 :: ListNode.t | nil, l2 :: ListNode.t | nil) :: ListNode.t | nil
  def add_two_numbers(l1, l2) do
    do_add(l1, l2, "", "")
  end

  defp do_add(nil, nil, x, y) do
    x = String.to_integer(x)
    y = String.to_integer(y)

    "#{x + y}"
    |> String.graphemes()
    |> Enum.map(& String.to_integer(&1))
    |> to_node(nil)
  end

  def to_node([], %ListNode{} = node), do: node
  def to_node([x | rest], nil), do: to_node(rest, %ListNode{val: x})
  def to_node([x | rest], %ListNode{} = prev_node) do
    to_node(rest, %ListNode{val: x, next: prev_node})
  end

  defp do_add(%ListNode{val: x2, next: next}, nil, x, y) do
    do_add(next, nil, "#{x2}" <> x, y)
  end

  defp do_add(nil, %ListNode{val: x2, next: next}, x, y) do
    do_add(nil, next, x, "#{x2}" <> y)
  end

  defp do_add(%ListNode{val: x1, next: n1}, %ListNode{val: x2, next: n2}, x1acc, x2acc) do
    do_add(n1, n2, "#{x1}" <> x1acc, "#{x2}" <> x2acc)
  end

  defmodule P2 do
  end
end

defmodule Lc61 do
  @moduledoc """
  Documentation for `Lc61`.
  """
  defmodule ListNode do
    @type t :: %__MODULE__{
      val: integer,
      next: ListNode.t() | nil
    }
    defstruct val: 0, next: nil
  end

  @spec rotate_right(head :: ListNode.t | nil, k :: integer) :: ListNode.t | nil
  def rotate_right(nil, _), do: nil
  def rotate_right(head, k) do
    count = count(head, 0)
    k = find_min(count, k)

    head
    |> collect([])
    |> rotate([], k)
    |> Enum.reverse()
    |> to_node()
  end

  # ahh this is in the accumulator
  # - collect values first
  # - recurse collected until `k` is `0`
  #   - decrement `k`

  defp collect(nil, []), do: nil
  defp collect(nil, acc), do: acc

  defp collect(%ListNode{next: next, val: val}, acc), do: collect(next, [val | acc])

  defp rotate(nil, acc, _), do: acc
  defp rotate(rest, acc, 0), do: List.flatten(acc, Enum.reverse(rest))
  defp rotate([], acc, k), do: rotate(Enum.reverse(acc), [], k)
  defp rotate([h | rest], acc, k), do: rotate(rest, [h | acc], k - 1)

  def to_node(list) do
    Enum.reduce(list, nil, fn l, node ->
      if is_nil(node) do
        %ListNode{val: l}
      else
        %ListNode{val: l, next: node}
      end
    end)
  end

  def lc(lst), do: lst |> Enum.reverse() |> to_node()

  def find_min(x, y) when x == y, do: y
  def find_min(x, y) when x > y, do: y
  # def find_min(x, y) when x < y, do: find_min(x, y - x)
  def find_min(x, y) when x < y, do: rem(y, x)#find_min(x, y - x)

  def count(nil, c), do: c
  def count(%ListNode{next: next}, c), do: count(next, c + 1)
end

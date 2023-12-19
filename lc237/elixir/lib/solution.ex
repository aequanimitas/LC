defmodule Solution do
  @moduledoc """
  Documentation for `Solution`.
  """

  defmodule ListNode do
    @type t :: %__MODULE__{
      val: integer,
      next: ListNode.t() | nil
    }
    defstruct val: 0, next: nil
  end

  def delete_duplicates(head), do: delete_duplicates(head, %{})

  def delete_duplicates(nil, map) do
    map |> Map.keys() |> Enum.sort() |> Enum.reverse() |> to_node()
  end

  def delete_duplicates(%{val: val, next: next}, map) do
    case map do
      %{^val => _} ->
        delete_duplicates(next, map)

      _ ->
        delete_duplicates(next, Map.put(map, val, nil))
    end
  end

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

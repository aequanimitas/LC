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

    def merge(nil, %__MODULE__{} = node), do: node
    def merge(%__MODULE__{} = node, nil), do: node

    def merge(%__MODULE__{val: v1, next: nd1} = n1, %__MODULE__{val: v2, next: nd2} = n2) do
      if v1 <= v2 do
        %{n1 | next: merge(nd1, n2)}
      else
        %{n2 | next: merge(nd2, n1)}
      end
    end
  end

end

defmodule Lc4 do
  @moduledoc """
  Documentation for `Lc4`.
  """
  defmodule Stack do

    defstruct [
      values: {nil, []},
      count: 0
    ]

    alias __MODULE__, as: T

    def push(%T{values: {nil, []}, count: count} = t, value) do
      %{t | values: {value, []}, count: count + 1}
    end

    # default is min stack
    def push(%T{values: {root, rest}, count: count} = t, value) do
      if root < value do
        %{t | values: {root, [value | rest]}, count: count + 1}
      else
        %{t | values: {value, [root | rest]}, count: count + 1}
      end
    end

    def pop(%T{values: {_, values}, count: count} = t) do
      [root | values] = merge_sort(values)
      %{t | values: {root, values}, count: count - 1}
    end

    def size(%T{count: count}), do: count
    def root(%T{values: {root, _}}), do: root

    def ms(a, b) do
      merge_sort(a ++ b)
    end

    def merge_sort([a | []]), do: [a]
    def merge_sort(lst) do
      len = length(lst)
      {a, b} = Enum.split(lst, div(len, 2))
      a = merge_sort(a)
      b = merge_sort(b)
      merge(a, b, [])
    end

    def merge([], a, acc), do: :lists.reverse(acc) ++ a
    def merge(a, [], acc), do: :lists.reverse(acc) ++ a
    def merge([x0 | x1] = x, [y0 | y1] = y, acc) do
      if x0 < y0 do
        merge(x1, y, [x0 | acc])
      else
        merge(x, y1, [y0 | acc])
      end
    end
  end

  alias __MODULE__, as: T

  defstruct [:min, :max]

  def init(), do: %T{max: %T.Stack{}, min: %T.Stack{}}

  @spec find_median_sorted_arrays(nums1 :: [integer], nums2 :: [integer]) :: float
  def find_median_sorted_arrays(nums1, nums2) do
    nums = Stack.ms(nums1, nums2)
    #nums = Enum.sort(nums1 ++ nums2)

    find_med(init(), nums)
  end

  # TODO:
  # - for each number, do:
  # - if T.max size is 0
  #
  defp find_med(%T{min: min, max: max} = t, []) do
    if Stack.size(min) == Stack.size(max) do
      (-Stack.root(max) / 2.0) + (Stack.root(min) / 2.0)
    else
      (-Stack.root(max) / 1.0)
    end
  end

  defp find_med(%T{max: max, min: min} = t, [h | rest]) do
    %{max: max, min: min} = t =
      if Stack.size(max) == 0 or -Stack.root(max) >= h do
        %{t | max: Stack.push(max, -h)}
      else
        %{t | min: Stack.push(min, h)}
      end

    t = cond do
      Stack.size(max) > Stack.size(min) + 1 ->
        mv = Stack.root(max)
        %{t | max: Stack.pop(max), min: Stack.push(min, -mv)}

      Stack.size(max) < Stack.size(min) ->
        mv = Stack.root(min)
        %{t | max: Stack.push(max, -mv), min: Stack.pop(min)}

      true ->
        t
    end

    find_med(t, rest)
  end

  defmodule P2 do
    @doc """
    Fastest and gist of the problem
    """
    def find_median_sorted_arrays(nums1, nums2) do
      # so this is still slower since we're merging two lists
      # via `List` instead of concatenating
      # a = Enum.sort(List.flatten(nums1, nums2)) |> :array.from_list()
      a =
        if length(nums1) > length(nums2) do
          # ++ complexity is based on first arg
          Enum.sort(nums2 ++ nums1)
        else
          Enum.sort(nums1 ++ nums2)
        end
        |> :array.from_list()

      cond do
        :array.size(a) == 1 ->
          :array.get(0, a)

        rem(:array.size(a), 2) == 0 ->
          start_index = trunc(:array.size(a) / 2 - 1)
          (:array.get(start_index, a) + :array.get(start_index + 1, a)) / 2

        true ->
          start_index = div(:array.size(a), 2)
          :array.get(start_index, a)
      end
    end
  end
end

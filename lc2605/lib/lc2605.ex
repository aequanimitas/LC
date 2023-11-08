defmodule Lc2605 do
  @moduledoc """
  Documentation for `Lc2605`.
  """

  @spec min_number(nums1 :: [integer], nums2 :: [integer]) :: integer
  def min_number(nums1, nums2) do
    a = hip({nil, []}, nums1)
    b = hip({nil, []}, nums2)

    if a == b, do: a, else: String.to_integer("#{a}#{b}")
  end

  def hip({x, _}, []), do: x
  def hip({nil, []}, [x1 | y1], [x2, y2]) do
    hip({x, []}, y)
  end

  def hip({a, q}, [x | y]) do
    if a < x do
      hip({a, [x | q]}, y)
    else
      hip({x, [a | q]}, y)
    end
  end
end

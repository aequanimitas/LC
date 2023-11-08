defmodule Lc28 do
  @moduledoc """
  Documentation for `Lc28`.
  """

  @spec str_str(haystack :: String.t, needle :: String.t) :: integer
  def str_str(haystack, needle) do
    do_find(String.graphemes(haystack), String.graphemes(needle), 0)
  end

  defp do_find(haystack, needle, idx) when length(haystack) < length(needle), do: -1
  defp do_find(haystack, needle, idx) when length(haystack) == length(needle) do
    if haystack == needle do
      idx
    else
      -1
    end
  end

  defp do_find(haystack, needle, idx) do
    {h, _rest} = Enum.split(haystack, length(needle))

    # terminate early if possible
    if h == needle do
      idx
    else
      [_ | rest] = haystack
      do_find(rest, needle, idx + 1)
    end
  end
end

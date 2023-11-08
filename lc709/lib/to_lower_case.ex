defmodule ToLowerCase do
  @moduledoc """
  Documentation for `ToLowerCase`.
  """

  @spec to_lower_case(s :: String.t) :: String.t
  def to_lower_case(<<>>), do: <<>>
  def to_lower_case(s), do: to_lower(s, z(), "")

  def to_lower(<<>>, _m, acc), do: acc
  def to_lower(<<a::binary-size(1), rest::binary>>, m, acc) do
    case m do
      %{^a => v} ->
        to_lower(rest, m, acc <> v)

      _ ->
        to_lower(rest, m, acc <> a)
    end
  end

  def z() do
    ?A..?Z
    |> Enum.map(& [&1])
    |> Enum.reduce(%{}, fn [d | []] = c, acc ->
      Map.put(acc, List.to_string(c), List.to_string([d + 32]))
    end)
  end
end

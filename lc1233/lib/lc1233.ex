defmodule Lc1233 do
  @moduledoc """
  Documentation for `Lc1233`.
  """
  defmodule Directory do
    alias __MODULE__, as: T
    defstruct directories: %{}, depth: nil
    def init(), do: %Directory{}

    def add(%T{} = dir, [], depth), do: %{dir | depth: depth}

    def add(%T{directories: directories} = dir, [head | rest], depth) do
      directory =
        if Map.has_key?(directories, head) do
          Map.get(directories, head)
        else
          %{init() | depth: depth + 1}
        end

      %{dir | directories: Map.put(directories, head, add(directory, rest, depth + 1))}
    end
  end

  defmodule OS do
    alias __MODULE__, as: T
    defstruct root: %Directory{}

    def init(), do: %T{}

    def add(%T{root: dir} = os, word),
      do: %{os | root: Directory.add(dir, String.graphemes(word), -1)}
  end

  @spec remove_subfolders(folder :: [String.t()]) :: [String.t()]
  def remove_subfolders(folder) do
    # - split string with delimiter "/", trim: true

    folder
    |> Enum.map(&sanitize(String.graphemes(&1), ""))
    |> Enum.reduce(OS.init(), &OS.add(&2, &1))
  end

  def sanitize([x0 | []], acc) when x0 == "/", do: acc
  def sanitize([x0 | []], acc), do: acc <> x0
  def sanitize([x0 | x1], acc) when x0 == "/", do: sanitize(x1, acc)
  def sanitize([x0 | x1], acc), do: sanitize(x1, acc <> x0)
end

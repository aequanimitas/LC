defmodule LRUCacheTest do
  use ExUnit.Case

  alias LRUCache, as: T

  test "greets the world" do
    T.init_(2)
    pid = Process.whereis(T.H)
    :sys.get_state(pid) |> IO.inspect
    assert Process.alive?(pid)

    T.put(1, 1)
    :sys.get_state(pid) |> IO.inspect
    assert T.get(1) == 1
    ##:sys.get_state(pid) |> IO.inspect

    T.put(2, 2)
    #:sys.get_state(pid) |> IO.inspect

    assert T.get(1) == 1
    #:sys.get_state(pid) |> IO.inspect

    T.put(3, 3)
    assert T.get(2) == -1
  end

  test "1" do
    # ["LRUCache","put","get","put","get","get"]
    # [[1],[2,1],[2],[3,2],[2],[3]]

    T.init_(1)
    pid = Process.whereis(T.H)
    %{cache: cache} = :sys.get_state(pid)
    assert Enum.empty?(cache)

    T.put(2, 1)
    %{cache: cache} = :sys.get_state(pid)
    assert T.get(2) == 1

    T.put(3, 2)
    ##%{cache: cache} = :sys.get_state(pid)
    ##IO.inspect cache
    assert T.get(3) == 2
    assert T.get(2) == -1
    ##:sys.get_state(pid) |> IO.inspect

    assert T.get(2) == -1
    ##:sys.get_state(pid) |> IO.inspect
  end
end

defmodule LRUCache do
  use GenServer

  @spec init_(capacity :: integer) :: any
  def init_(capacity), do: GenServer.start_link(__MODULE__, capacity, name: Module.concat(__MODULE__, H))

  def init(capacity), do: {:ok, %{capacity: capacity, oc: capacity, cache: []}}

  def put(key, value), do: GenServer.call(__MODULE__.H, {:put, key, value})
  def get(key), do: GenServer.call(__MODULE__.H, {:get, key})

  def handle_call({:put, key, value}, _from, %{capacity: capacity, oc: oc, cache: cache} = state) do
    if capacity == 0 do
      cache =
        # because there's 4,4 that's not supposed to be there
        if oc > length(cache) do
          [_ | rest] = Enum.reverse(cache)
          rest
        else
          cache
        end

      case List.keyfind(cache, key, 0) do
        nil ->
          [_ | rest] = cache
          cache = List.keystore(rest, key, 0, {key, value})
          {:reply, :ok, %{state | cache: cache}}

        _ ->
          cache =
            cache
            |> List.keydelete(key, 0)
            |> List.keystore(key, 0, {key, value})

          {:reply, :ok, %{state | cache: cache}}
      end
    else
      cache = List.keystore(cache, key, 0, {key, value})
      {:reply, :ok, %{state | capacity: capacity - 1, cache: cache}}
    end
  end

  def handle_call({:get, key}, _from, %{capacity: capacity, cache: cache} = state) do
    {cache, val} =
      case List.keyfind(cache, key, 0) do
        nil ->
          {cache, -1}

        {_, value} ->
          cache =
            cache
            |> List.keydelete(key, 0)
            |> List.keystore(key, 0, {key, value})

          {cache, value}
      end
      |> IO.inspect

    {:reply, val, %{state | cache: cache}}
  end
end

defmodule Solution do
  @spec is_subsequence(s :: String.t(), t :: String.t()) :: boolean
  def is_subsequence(<<>>, <<>>), do: true

  def is_subsequence(sequence, pattern),
    do: subsequence?(pattern, sequence, 0, String.length(sequence))

  def subsequence?(<<>>, _, c1, c2), do: c1 == c2
  def subsequence?(_, <<>>, c1, c2), do: c1 == c2

  def subsequence?(
    <<x0::binary-size(1), x1::binary>>,
    <<y0::binary-size(1), y1::binary>> = y,
    counter,
    c2
  ) do
    if x0 == y0 do
      subsequence?(x1, y1, counter + 1, c2)
    else
      subsequence?(x1, y, counter, c2)
    end
  end
end

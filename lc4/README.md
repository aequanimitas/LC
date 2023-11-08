# Lc4

Given two sorted arrays `nums1` and `nums2` of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`


Example 1:

```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

Example 2:

```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```


Constraints:

- `nums1.length == m`

- `nums2.length == n`

- `0 <= m <= 1000`

- `0 <= n <= 1000`

- `1 <= m + n <= 2000`

- `-106 <= nums1[i], nums2[i] <= 106`


**TODO:**
- do a `merge_sort` first
`Stack` module that can acts a min stack or max stack
- `push`
- `pop`

Monday, 23 October, 2023 06:38:56 PM PST
- Lol this is slow


Fastest is:

```
defmodule Solution do
  @spec find_median_sorted_arrays(nums1 :: [integer], nums2 :: [integer]) :: float
  def find_median_sorted_arrays(nums1, nums2) do
    list = Enum.sort(nums1 ++ nums2)

    cond do
        length(list) === 1 ->
            Enum.at(list, 0)

        rem(length(list), 2) === 0 ->
            start_index = trunc(length(list) / 2 - 1)
            (Enum.at(list, start_index) + Enum.at(list, start_index + 1)) / 2

        true ->
            start_index = div(length(list), 2)
            Enum.at(list, start_index)
    end
  end
end
```

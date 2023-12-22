import unittest
from package.solution import Solution

class TestSolution(unittest.TestCase):
    def test_singleNumber(self):
        s = Solution()
        self.assertEqual(s.singleNumber([2,2,1]), 1)
        self.assertEqual(s.singleNumber([4,1,2,1,2]), 4)
        self.assertEqual(s.singleNumber([1]), 1)

if __name__ == '__main__':
    unittest.main()

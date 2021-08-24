class Solution {
    public int leastBricks(List<List<Integer>> wall) {
        if (validate(wall)) {
            return 0;
        }
        
        int max = 0;
        Map<Integer, Integer> map = new HashMap<>();
        // build map, and maintain max
        for (List<Integer> row : wall) {
            int x = 0;
            for (int i = 0; i < row.size() - 1; i++) {
                x += row.get(i);
                map.putIfAbsent(x, 0);
                map.put(x, map.get(x) + 1);
                max = Math.max(max, map.get(x));
            }
        }
        return wall.size() - max;
    }
​
    private boolean validate(List<List<Integer>> wall) {
        return wall == null || wall.size() == 0 || wall.get(0) == null || wall.get(0).size() == 0;
    }
}

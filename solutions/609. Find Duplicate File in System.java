class Solution {
    public List<List<String>> findDuplicate(String[] paths) {
         List<List<String>> ans = new ArrayList<>();
        if (paths == null || paths.length == 0) {
            return ans;
        }
        Map<String, List<String>> hashmap = new HashMap<>();
        for (String item : paths) {
            String[] parts = item.split(" ");
            for (int i = 1; i < parts.length; i++) {
                int index = parts[i].indexOf('(');
                String content = parts[i].substring(index + 1, parts[i].length() - 1);
                String path = parts[0] + "/" + parts[i].substring(0, index);
                if (hashmap.containsKey(content)) {
                    hashmap.get(content).add(path);
                } else {
                    List<String> temp = new ArrayList<>();
                    temp.add(path);
                    hashmap.put(content, temp);
                }
            }
        }
        for (Map.Entry<String, List<String>> entry : hashmap.entrySet()) {
            List<String> value = entry.getValue();
            if (value.size() > 1) {
                List<String> temp = new ArrayList<>();
                for (String cur : value) {
                    temp.add(cur);
                }
                ans.add(temp);
            }
        }
        return ans;
    }
​
        
    
}

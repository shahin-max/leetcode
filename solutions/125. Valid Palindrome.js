/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  const inner = (n, a, b) => a <= n && n <= b
  const code = c => {
    const n = c.charCodeAt()
    if (inner(n - 48, 0, 9)) return n - 48
    if (inner(n - 65, 0, 25)) return n - 65 + 10
    if (inner(n - 97, 0, 25)) return n - 97 + 10
    return -1
  }
  const isAN = c => inner(code(c), 0, 35)
​
  let i = 0, j = s.length - 1
  while (i < j) {
    if (!isAN(s[i])) i++
    else if (!isAN(s[j])) j--
    else {
      if (code(s[i]) !== code(s[j])) return false
      i++
      j--
    }
  }
​
  return true
}
​
//console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))

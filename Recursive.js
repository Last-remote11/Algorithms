// 재귀는 읽기 쉽고(??) 간결하다는 장점이 있지만
// 재귀에 익숙하지 않은 사람이 이해하기 어렵고 공간을 많이 잡아먹는다는 단점이 있다.

// 모든 재귀함수는 반복문으로 대체될 수 있다.  그렇다면 재귀를 왜 사용할까?

// 자료구조의 깊이가 어느정도인지 알 수 없을 때, 예컨데 tree에서 모든 아이템을 찾아내거나 할 때 사용하면 좋다.
// 정렬 알고리즘에서도 재귀를 자주 쓴다.

const factorialRecursive = (n) => {
    if (n === 0) {
      return 1
    }
  
    if (n > 1) {
      return n = n * factorialRecursive(n-1)
    } else {
      return n
    }
  }
  
  
  const factorialIterative = (n) => {
  
    let ans = n
    if (n === 0) {
      return 1
    } else {
      while (n > 1) {
        ans = ans*(n-1)
        n--
      }
      return ans
    }
  }
  
  
  // console.log(factorialRecursive(5))
  // console.log(factorialIterative(1))
  
  
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 .
  
  // 피보나치 수열 문제에서 그냥 반복문을 사용하면 복잡도가 O(n) 이지만 
  // 재귀를 사용하면 O(n^2)이 되어버린다.
  const fibonacciIterative = (n) => {
    let list = [0, 1]
    while (list.length-1 < n) {
      list.push(list[list.length-2] + list[list.length-1])
    }
    return list[n]
  }
  console.log(fibonacciIterative(10))
  
  
  const fibonacciRecursive = (n) => {
    if (n < 2) {
      return n
    }
    return fibonacciRecursive(n-2) + fibonacciRecursive(n-1)
  }
  
  console.log(fibonacciRecursive(10))
  
  
  
  // 재귀를 이용한 단어 뒤집기
  const reverse = (string) => {
    if (string.length === 0) {
      return ''
    }
    return string[string.length - 1] + reverse(string.slice(0, string.length-1))
  }
  
  console.log(reverse('hi hello'))
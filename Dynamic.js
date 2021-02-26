// dynamic programming 은 쉽게 말해 답을 구하기 쉽게 하기 위해 답을 재활용하는 것을 뜻한다.
// cashing : 값을 나중에 다시 쓰기 위해 저장해두는것
// memoization : cashing 중 하나

const add80 = (number) => {
  console.log('2 hours later')
  return number+80
}

// add80(5)
// add80(5)
// add80(5)

// 어차피 같은 답이 나오는데도 계산을 여러번 하게 됨

let cashe = {}
const memoizedAdd80 = (number) => {
  if (number in cashe) {
    return cashe[number]
  } else {
    console.log('2 hours later')
    cashe[number] = number + 80
    return cashe[number]
  }
}

// 간단한 예로 입력값과 계산 결과를 해시테이블의 key와 value안에 넣어두면 좋다.

// memoizedAdd80(5)
// memoizedAdd80(5)
// memoizedAdd80(5)

// 글로벌값을 가져오는 단점을 개선하려면 다음과 같이 하면 된다
// 이를 closure 라 함

const memoizedAdd80_2 = () => {
  let cashe = {}
  return function(number) {
    if (number in cashe) {
      return cashe[number]
    } else {
      console.log('2 hours later')
      cashe[number] = number + 80
      return cashe[number]
    }
  }
}

const memoized = memoizedAdd80_2()

memoized(5)
memoized(5)
memoized(5)


// dynamic programming 의 가장 적절한 예중 하나인 피보나치수열 문제

const dynamicFibo = () => {
  let cashe = [0, 1]
  return function(n) {
    if (cashe[n]) {
      return cashe[n]
    } else {
      while (!cashe[n]) {
        cashe.push(cashe[cashe.length-2] + cashe[cashe.length-1])
      }
      return cashe[n]
    }
  }
}

const recursiveFibo = (n) => {
  if (n === 0) {
    return n
  }
  if (n === 1) {
    return 1
  }
  return recursiveFibo(n-1) + recursiveFibo(n-2)
}

const ans = dynamicFibo()
console.log(ans(13))

console.log(recursiveFibo(40))
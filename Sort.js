// 정렬은 다루어야 할 데이터가 거대해질 때 중요해진다
// 데이터가 클수록 특정 데이터에 액세스할 때 정렬되어있지 않다면 무지막지하게 오래 걸릴 것이다.

// 자바스크립트의 sort()는 우리가 원하는대로 정렬을 해주지 않을 수도 있음


const numbers = [29, 7, 31, 4, 51]

// console.log(numbers.sort())
// [ 29, 31, 4, 51, 7 ]

const array = [4,1,2,5,26,23,41,432,25,1,5,35,2,51,35,13,41,41,24,124,12,432,52,35,13,613,61,325,67,2,72,723]


// O(n^2)

const bubleSort = (array) => {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j+1]) {
        let small = array[j+1]
        let large = array[j]
        array[j+1] = large
        array[j] = small
      }
    }
  }
  return array
}

// O(n^2)

const selectionSort = (array) => {

  for (var i = 0; i < array.length; i++) {
    let smallest = i
    let temp = array[i]
    for (var j = i+1; j < array.length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j
      }
    }
    array[i] = array[smallest]
    array[j] = temp
  }
  return array
}

// console.log(selectionSort(array))


// 삽입 정렬은 데이터가 이미 어느정도 정렬되어있다는 가정 하에서 가장 빠를 수도 있다.
// O(n^2)

function insertionSort(array) {
  const length = array.length;
	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) {
      array.unshift(array.splice(i,1)[0]);
    } else {
      if (array[i] < array[i-1]) {
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j-1] && array[i] < array[j]) {
            array.splice(j,0,array.splice(i,1)[0]);
          }
        }
      }
    }
	}
}

// insertionSort(array);
// console.log(array);



// O(n log n)인 머지소트

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  const length = array.length
  // Split Array in into right and left
  const left = array.slice(0, Math.floor(length/2))
  const right = array.slice(Math.floor(length/2), length)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  let ans = []
  let leftIdx = 0
  let rightIdx = 0

  while (leftIdx < left.length && rightIdx < right.length) {
    
    if (left[leftIdx] > right[rightIdx]) {
      ans.push(right[rightIdx])
      rightIdx++
    } else  {
      ans.push(left[leftIdx])
      leftIdx++
    }
  }
  return ans.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

console.log(mergeSort(array))
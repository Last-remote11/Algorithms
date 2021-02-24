// 정렬은 다루어야 할 데이터가 거대해질 때 중요해진다
// 데이터가 클수록 특정 데이터에 액세스할 때 정렬되어있지 않다면 무지막지하게 오래 걸릴 것이다.

// 자바스크립트의 sort()는 우리가 원하는대로 정렬을 해주지 않을 수도 있음


const numbers = [29, 7, 31, 4, 51]

// console.log(numbers.sort())
// [ 29, 31, 4, 51, 7 ]

const array = [4,1,2,5,26,23,41,432,25,1,5,35,2,51,35,13,41,41,24,124,12,432,52,35,13,613,61,325,67,2,72,723]


// O(n^2)
// 버블 소트와 선택 소트는 실생활에서 거의 쓰이지 않는다...
// 정렬을 처음 배울때나 씀


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


// 삽입 정렬은 데이터가 수가 아주 적거나 이미 어느 정도 정렬되었다면 최고의 정렬 알고리즘이 될 수 있다.
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
// 후술할 퀵소트에 비해 평균적으로 느리지만 안정적이다.

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  const length = array.length
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



// 퀵소트도 O(n log(n)) 이지만 평균적으로 머지 소트나 기타 정렬보다 빠르다.
// 공간 복잡도도 log(n) 으로 머지 소트보다 부담이 덜하다
// 하지만 최악의 상황일 때 시간복잡도가 O(n^2) 까지 늘어날 수 있다는 단점이 있다

function quickSort(array, left, right){
  const len = array.length; 
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    
    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
   
function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);


// 직접 비교하여 정렬하는 방법은 수학적으로 n log(n) 보다 간단해질 수 없다는게 증명되었다.
// 하지만 제한적인 경우 간접적 비교를 통해 n log(n)의 벽을 뛰어넘는 알고리즘이 존재한다
// radix sort와 counter sort가 이에 해당한다.
// 얘네들은 자료들이 특정 범위 안의 정수들일 때 제 힘을 발휘한다.

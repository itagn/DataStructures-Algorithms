/**
 *  author: caidong
 *  createdOn: 2017/10/17
 *  desc: 堆排序
 */

let len
function buildMaxHeap(arr) {     //建立大顶堆
  len = arr.length
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i)
  }
}
function heapify(arr, i) {     //堆调整
  let left = 2 * i + 1, right = 2 * i + 2, largest = i
  if (left < len && arr[left] > arr[largest]) largest = left
  if (right < len && arr[right] > arr[largest]) largest = right
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]
    heapify(arr, largest)
  }
}
function heapSort(arr) {
  buildMaxHeap(arr)
  for (let i = arr.length-1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]]
    len--
    heapify(arr, 0)
  }
  return arr
}
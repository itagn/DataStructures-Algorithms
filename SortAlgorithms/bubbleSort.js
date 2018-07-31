/**
 *  author: caidong
 *  createdOn: 2017/10/17
 *  desc: 冒泡排序
 */

function bubbleSort (arr = []) {
  if (arr.length<=1) return arr
  for(let i = arr.length-1; i >= 0; i--) {
    for (let j = 0; j < i; j ++) {
      if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
			}
    }
  }
  return arr
}

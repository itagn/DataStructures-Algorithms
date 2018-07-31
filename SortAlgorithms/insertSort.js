/**
 *  author: caidong
 *  createdOn: 2017/10/23
 *  desc: 直接插入排序
 */

function insertSort (arr = [], jump = 1) {
  if (arr.length<=1) return arr
  for (let i = 1; i < arr.length; i+=jump) {
    const tmp = arr[i]
    let j = i
    while (arr[j - jump] > tmp && j > 0) {
      arr[j] = arr[j - jump]
      j -= jump
    }
    arr[j] = tmp
  }
  return arr
}

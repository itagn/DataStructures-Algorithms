/**
 *  author: caidong
 *  createdOn: 2017/11/16
 *  desc: 希尔排序（插入排序升级版）
 */

const gps = [5, 3, 1]
function shellSort (arr) {
  for (let g = 0; g < gps.length; g++) {
    for (let i = 1; i < arr.length; i += gps[g]) {
      const tmp = arr[i]
      let j = i
      while (arr[j - gps[g]] >= tmp && j > 0) {
        arr[j] = arr[j - gps[g]]
        j -= gps[g]
      }
      arr[j] = tmp
    }
  }
  return arr
}

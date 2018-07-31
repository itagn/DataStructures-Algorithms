/**
 *  author: caidong
 *  createdOn: 2017/10/23
 *  desc: 快速排序
 */


 //  “阮一峰”版
function quickSort (arr) {
	if (arr.length > 1) { 
		const centerNum = arr.splice((arr.length / 2 | 0), 1)
		let left = [], right = []
		for(let i = 0; i < arr.length; i++){
			if(arr[i] < centerNum) left.push(arr[i])
			else right.push(arr[i])
		}
		return quickSort(left).concat(centerNum, quickSort(right))
	} else {
		return arr
	}
}

// 《数据机构预算法JavaScript描述》版
function quickSort (arr) {
	if (arr.length > 1) {
		let first = arr[0]
		let prev = [], next = []
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < first) prev.push(arr[i])
			else next.push(arr[i])
		}
		return quickSort(prev).concat(first, quickSort(next))
	} else {
		return arr
	}
}

// 一行代码版
const quickSort = (arr = []) => arr.length < 1 ? arr : [
    ...quickSort(arr.filter((val, i) => i !== 0 && val <= arr[0])),
    arr[0],
    ...quickSort(arr.filter(val => val > arr[0])),
]

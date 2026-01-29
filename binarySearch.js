function binarySearch(arr, target){
    let low = 0;
    let high = arr.length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(arr[mid] == target){
            return mid;
        } else if(arr[mid] < target){
            low = mid + 1;
        } else{
            high = mid - 1;
        }
    }
    return -1;
}

let arr = [2, 5, 6, 8, 9, 10, 4];
let target = 10;

let result = binarySearch(arr, target);
console.log(result);
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    if (array.length === 1) {
        return array
    }
    // Split Array in into right and left
    let middleIndex = Math.floor(array.length / 2);
    let left = array.slice(0, middleIndex);
    let right = array.slice(middleIndex);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    let merged = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex !== left.length || rightIndex !== right.length) {
        if (rightIndex >= right.length || (leftIndex < left.length && left[leftIndex] <= right[rightIndex])) {
            merged[leftIndex + rightIndex] = left[leftIndex];
            leftIndex++;
        } else {
            merged[leftIndex + rightIndex] = right[rightIndex];
            rightIndex++;
        }
    }

    return merged;
}


const answer = mergeSort(numbers);
console.log(answer);
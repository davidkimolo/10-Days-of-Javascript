'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    // for (let i = 0; i < nums.length; i++){

    //     elements = nums[i]
    // }
    let new_nums = nums.sort();
    let new_nums_set = new Set(new_nums);
    let the_nums = [new_nums_set]

    // for (let i = 0; i < the_nums.length; i++)
    // {
    //     let latest_element = the_nums[i];
    // }
    
    return the_nums[1];
}

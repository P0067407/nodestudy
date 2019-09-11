var twoSum = function(nums, target) {
  let arr = nums;
  let arrs = new Array()
  for(let i =  0; i < arr.length - 1; i++){
      for(let j = 0; j < arr.length; j++){
          if ( arr[i] + arr[j] === target) {
              arrs.push(i, j)
              console.log(arrs)
              return arrs
          }
      }
  }
}
nums = [2, 7, 11, 15], target = 13

twoSum(nums,target)
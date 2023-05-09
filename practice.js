// each function creates sorted variables by calling findLargest().
function multiplyBiggerNumByTwo(num1, num2) {
  let [smallNum, bigNum] = findLargest(num1, num2);
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let [smallNum, bigNum] = findLargest(num1, num2);
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let [smallNum, bigNum] = findLargest(sum1, sum2);
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let [smallDog, bigDog] = findLargest(weight1, weight2);
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

// findLargest returns a sorted array with the smallest number first.
function findLargest(num1, num2){
  let sortedNums = []
  if (num1 > num2){
     sortedNums.push(num2);
     sortedNums.push(num1);
  } else {
    sortedNums.push(num1);
    sortedNums.push(num2);
  }
  return sortedNums;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};

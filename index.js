/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var nums1Lenght = nums1.length;
  var nums2Lenght = nums2.length;
  
  // Se os dois arrays estiverem vazios, retorna 0
  if (nums1Lenght === 0 && nums2Lenght === 0) {
      return 0;
  }
  
  // Se o primeiro array está vazio, retorna a mediana do segundo array
  if (nums1Lenght === 0) {
      if (nums2Lenght % 2 !== 0){
          return nums2[Math.floor(nums2Lenght / 2)] + nums2[Math.floor(nums2Lenght / 2) + 1];
      } else {
          return nums2[nums2Lenght / 2];
      }
  }
  
  // Se o segundo array está vazio, retorna a mediana do primeiro array
  if (nums2Lenght === 0) {
      if (nums1Lenght % 2 !== 0){
          return nums1[Math.floor(nums1Lenght / 2)] + nums1[Math.floor(nums1Lenght / 2) + 1];
      } else {
          return nums1[nums1Lenght / 2];
      }
  }
  
  // Calculando Mediana dos dois arrays.
  
  let i = 0, j = 0;
  var completeArray = [];
  
  while(i < nums1Lenght && j < nums2Lenght) {
      if (nums1[i] < nums2[j]) {
        completeArray.push(nums1[i]);
          i++;
      } else {                  
        completeArray.push(nums2[j]);
          j++;
      } 
  }

  // if (i === nums1Lenght){
  //   let remainingArray = nums2.slice(j);
  //   remainingArray.map(i => completeArray.push(i));
  // } else {
  //   let remainingArray = nums.slice(j);
  //   remainingArray.map(i => completeArray.push(i));
  // }
  
  completeArray.concat(nums1.slice(i)).concat(nums2.slice(j));
  console.log();
  return completeArray;

  // let size = nums1Lenght + nums2Lenght;

  // Caso não tenha divisão por 2 completeArray[(completeArray.length - 1) / 2]

  if (size % 2 === 0){
    let position = (size / 2) - 0.5;
    let middle1 = completeArray[position];
    console.log(middle1);
    let middle2 = completeArray[(size / 2) + 0.5];
    console.log(middle2);
    return (middle1 + middle2) / 2;
  } else {
    return completeArray[size / 2];
  }

};

console.log(findMedianSortedArrays([1,4,9,15,48,76],[2,3,12,35,8,64,49,74]));
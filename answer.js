var findMedianSortedArrays = function(nums1, nums2) {
  var nums1Lenght = nums1.length;
  var nums2Lenght = nums2.length;
  
  // Se os dois arrays estiverem vazios, retorna 0
  if (nums1Lenght === 0 && nums2Lenght === 0) {
      return 0;
  }
  
  // Se o primeiro array está vazio, retorna a mediana do segundo array
  if (nums1Lenght === 0) {
    if(nums2Lenght === 1) {
      return nums2[0];
    } 
    else if (nums2Lenght % 2 === 0){
      let result = 0;
      // Somar o valor a esquerda do meio do array com o valor da direita e dividir por 2
      result += nums2[Math.floor((nums2Lenght - 1) / 2)];
      result += nums2[Math.ceil((nums2Lenght - 1) / 2)];
      return result / 2;
    } 
    else {
      return nums2[(nums2Lenght - 1) / 2];
    }
  }
  
  // Se o segundo array está vazio, retorna a mediana do primeiro array
  if (nums2Lenght === 0) {
    if (nums1Lenght === 1) {
      return nums1[0];
    } 
    else if (nums1Lenght % 2 === 0){
      let result = 0;
      // Somar o valor a esquerda do meio do array com o valor da direita e dividir por 2
      result += nums1[Math.floor((nums1Lenght - 1) / 2)];
      result += nums1[Math.ceil((nums1Lenght - 1) / 2)];
      return result / 2;
    } 
    else {
      return nums1[(nums1Lenght - 1) / 2];
    }
  }
  
  // Calculando Mediana dos dois arrays.
  
  let i = 0, j = 0;
  var completeArray = [];
  
  while(i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
        completeArray.push(nums1[i]);
          i++;
      } else {                  
        completeArray.push(nums2[j]);
          j++;
      } 
  }

  let remainingFirstArray = nums1.slice(i); // O que restou do primeiro Array
  let remainingSecondArray = nums2.slice(j); // O que restou do segundo array

  if(remainingFirstArray.length) {
    remainingFirstArray.map(number => completeArray.push(number));
  } else if (remainingSecondArray.length) {
    remainingSecondArray.map(number => completeArray.push(number));
  }

  if (completeArray.length % 2 === 0){
    let result = 0;
    // Somar o valor a esquerda do meio do array com o valor da direita e dividir por 2
    result += completeArray[Math.floor((completeArray.length - 1) / 2)];
    result += completeArray[Math.ceil((completeArray.length - 1) / 2)];
    return result / 2;
  } else {
    return completeArray[(completeArray.length - 1) / 2];
  }

};

console.log('Resposta: ' + findMedianSortedArrays([1,2], [3,4]));
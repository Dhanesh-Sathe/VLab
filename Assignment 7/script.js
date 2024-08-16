function calculateSeriesSum() {
    const seriesType = document.getElementById("series-type").value;
    const firstTerm = parseFloat(document.getElementById("first-term").value);
    const commonDiff = parseFloat(document.getElementById("common-diff").value);
    const commonRatio = parseFloat(document.getElementById("common-ratio").value);
    const numTerms = parseInt(document.getElementById("num-terms").value);
  
    if (isNaN(firstTerm) || isNaN(numTerms) || numTerms <= 0) {
      document.getElementById("series-sum").textContent = "Invalid input. Please enter valid numbers.";
      return;
    }
  
    let sum;
    if (seriesType === "ap") {
      if (isNaN(commonDiff)) {
        document.getElementById("series-sum").textContent = "Invalid input. Please enter the common difference.";
        return;
      }
      const lastTerm = firstTerm + (numTerms - 1) * commonDiff;
      sum = (numTerms * (firstTerm + lastTerm)) / 2;
    } else if (seriesType === "gp") {
      if (isNaN(commonRatio)) {
        document.getElementById("series-sum").textContent = "Invalid input. Please enter the common ratio.";
        return;
      }
      sum = firstTerm * ((1 - Math.pow(commonRatio, numTerms)) / (1 - commonRatio));
    } else {
      document.getElementById("series-sum").textContent = "Invalid series type. Please select either AP or GP.";
      return;
    }
  
    document.getElementById("series-sum").textContent = `The sum of the series is: ${sum}`;
  }



  function binarySearch() {
    const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const target = parseInt(document.getElementById("target").value);
  
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        document.getElementById("binary-search-result").textContent = `Target element ${target} found at index ${mid}`;
        return;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    document.getElementById("binary-search-result").textContent = `Target element ${target} not found in the array`;
  }


//   function multiplyMatrices() {
//     const matrix1 = [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9]
//     ];
  
//     const matrix2 = [
//       [9, 8, 7],
//       [6, 5, 4],
//       [3, 2, 1]
//     ];
  
//     const result = [];
  
//     for (let i = 0; i < matrix1.length; i++) {
//       result[i] = [];
//       for (let j = 0; j < matrix2[0].length; j++) {
//         let sum = 0;
//         for (let k = 0; k < matrix1[0].length; k++) {
//           sum += matrix1[i][k] * matrix2[k][j];
//         }
//         result[i][j] = sum;
//       }
//     }
  
//     let output = "Result:\n";
//     for (let i = 0; i < result.length; i++) {
//       output += `[${result[i].join(", ")}]\n`;
//     }
  
//     document.getElementById("matrix-multiplication-result").textContent = output;
//   }


//   function findMaxSubarraySum() {
//     const arr = [5, 4, -5, 7, 8];
//     let maxSum = arr[0];
//     let currentSum = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       currentSum = Math.max(arr[i], currentSum + arr[i]);
//       maxSum = Math.max(maxSum, currentSum);
//     }
  
//     document.getElementById("max-subarray-sum").textContent = `The maximum subarray sum is: ${maxSum}`;
//   }

function multiplyMatrices() {
    const matrix1Rows = parseInt(document.getElementById("matrix1-rows").value);
    const matrix1Cols = parseInt(document.getElementById("matrix1-cols").value);
    const matrix2Rows = parseInt(document.getElementById("matrix2-rows").value);
    const matrix2Cols = parseInt(document.getElementById("matrix2-cols").value);
  
    if (isNaN(matrix1Rows) || isNaN(matrix1Cols) || isNaN(matrix2Rows) || isNaN(matrix2Cols)) {
      document.getElementById("matrix-multiplication-result").textContent = "Invalid input. Please enter valid matrix dimensions.";
      return;
    }
  
    if (matrix1Cols !== matrix2Rows) {
      document.getElementById("matrix-multiplication-result").textContent = "Matrix dimensions are incompatible for multiplication.";
      return;
    }
  
    const matrix1Input = document.getElementById("matrix1-input").value.trim().split(/\s+/);
    const matrix2Input = document.getElementById("matrix2-input").value.trim().split(/\s+/);
  
    if (matrix1Input.length !== matrix1Rows * matrix1Cols || matrix2Input.length !== matrix2Rows * matrix2Cols) {
      document.getElementById("matrix-multiplication-result").textContent = "Invalid input. Please enter the correct number of matrix elements.";
      return;
    }
  
    const matrix1 = [];
    const matrix2 = [];
  
    for (let i = 0; i < matrix1Rows; i++) {
      matrix1[i] = [];
      for (let j = 0; j < matrix1Cols; j++) {
        matrix1[i][j] = parseFloat(matrix1Input[i * matrix1Cols + j]);
      }
    }
  
    for (let i = 0; i < matrix2Rows; i++) {
      matrix2[i] = [];
      for (let j = 0; j < matrix2Cols; j++) {
        matrix2[i][j] = parseFloat(matrix2Input[i * matrix2Cols + j]);
      }
    }
  
    const result = [];
  
    for (let i = 0; i < matrix1Rows; i++) {
      result[i] = [];
      for (let j = 0; j < matrix2Cols; j++) {
        let sum = 0;
        for (let k = 0; k < matrix1Cols; k++) {
          sum += matrix1[i][k] * matrix2[k][j];
        }
        result[i][j] = sum;
      }
    }
  
    let output = "Result:\n";
    for (let i = 0; i < result.length; i++) {
      output += `[${result[i].join(", ")}]\n`;
    }
  
    document.getElementById("matrix-multiplication-result").textContent = output;
  }
  
  function findMaxSubarraySum() {
    const arr = document.getElementById("array-input").value.trim().split(/\s+/).map(Number);
  
    if (arr.length === 0) {
      document.getElementById("max-subarray-sum").textContent = "Invalid input. Please enter array elements.";
      return;
    }
  
    let maxSum = arr[0];
    let currentSum = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      currentSum = Math.max(arr[i], currentSum + arr[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
  
    document.getElementById("max-subarray-sum").textContent = `The maximum subarray sum is: ${maxSum}`;
  }
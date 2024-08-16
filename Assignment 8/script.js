var inputStringElement = document.getElementById('inputString');
var outputElement = document.getElementById('output');
function calculateLength() {
    var inputString = inputStringElement.value;
    var length = inputString.length;
    outputElement.textContent = "Length: ".concat(length);
}
function concatenateStrings() {
    var inputString = inputStringElement.value;
    var concatenatedString = prompt('Enter a string to concatenate:') || '';
    var result = inputString.concat(concatenatedString);
    outputElement.textContent = "Concatenated String: ".concat(result);
}
function getCharAt() {
    var inputString = inputStringElement.value;
    var index = parseInt(prompt('Enter an index:') || '');
    if (!isNaN(index)) {
        var char = inputString.charAt(index);
        outputElement.textContent = "Character at index ".concat(index, ": ").concat(char);
    }
    else {
        outputElement.textContent = 'Invalid input: Please enter a valid index.';
    }
}
function getCharCodeAt() {
    var inputString = inputStringElement.value;
    var index = parseInt(prompt('Enter an index:') || '');
    if (!isNaN(index)) {
        var charCode = inputString.charCodeAt(index);
        outputElement.textContent = "Character code at index ".concat(index, ": ").concat(charCode);
    }
    else {
        outputElement.textContent = 'Invalid input: Please enter a valid index.';
    }
}
function getSubstring() {
    var inputString = inputStringElement.value;
    var start = parseInt(prompt('Enter the start index:') || '');
    var end = parseInt(prompt('Enter the end index:') || '');
    if (!isNaN(start) && !isNaN(end)) {
        var substring = inputString.substr(start, end - start);
        outputElement.textContent = "Substring: ".concat(substring);
    }
    else {
        outputElement.textContent = 'Invalid input: Please enter valid start and end indices.';
    }
}
function getSlice() {
    var inputString = inputStringElement.value;
    var start = parseInt(prompt('Enter the start index:') || '');
    var end = parseInt(prompt('Enter the end index:') || '');
    if (!isNaN(start) && !isNaN(end)) {
        var slice = inputString.slice(start, end);
        outputElement.textContent = "Slice: ".concat(slice);
    }
    else {
        outputElement.textContent = 'Invalid input: Please enter valid start and end indices.';
    }
}
function getIndexOf() {
    var inputString = inputStringElement.value;
    var searchString = prompt('Enter a string to search for:') || '';
    var index = inputString.indexOf(searchString);
    outputElement.textContent = "Index of \"".concat(searchString, "\": ").concat(index);
}
function replaceString() {
    var inputString = inputStringElement.value;
    var searchString = prompt('Enter a string to search for:') || '';
    var replacementString = prompt('Enter a replacement string:') || '';
    var result = inputString.replace(searchString, replacementString);
    outputElement.textContent = "Replaced String: ".concat(result);
}

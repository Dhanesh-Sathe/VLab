const inputStringElement: HTMLTextAreaElement = document.getElementById('inputString') as HTMLTextAreaElement;
const outputElement: HTMLParagraphElement = document.getElementById('output') as HTMLParagraphElement;

function calculateLength(): void {
    const inputString: string = inputStringElement.value;
    const length: number = inputString.length;
    outputElement.textContent = `Length: ${length}`;
}

function concatenateStrings(): void {
    const inputString: string = inputStringElement.value;
    const concatenatedString: string = prompt('Enter a string to concatenate:') || '';
    const result: string = inputString.concat(concatenatedString);
    outputElement.textContent = `Concatenated String: ${result}`;
}

function getCharAt(): void {
    const inputString: string = inputStringElement.value;
    const index: number = parseInt(prompt('Enter an index:') || '');
    if (!isNaN(index)) {
        const char: string = inputString.charAt(index);
        outputElement.textContent = `Character at index ${index}: ${char}`;
    } else {
        outputElement.textContent = 'Invalid input: Please enter a valid index.';
    }
}

function getCharCodeAt(): void {
    const inputString: string = inputStringElement.value;
    const index: number = parseInt(prompt('Enter an index:') || '');
    if (!isNaN(index)) {
        const charCode: number = inputString.charCodeAt(index);
        outputElement.textContent = `Character code at index ${index}: ${charCode}`;
    } else {
        outputElement.textContent = 'Invalid input: Please enter a valid index.';
    }
}

function getSubstring(): void {
    const inputString: string = inputStringElement.value;
    const start: number = parseInt(prompt('Enter the start index:') || '');
    const end: number = parseInt(prompt('Enter the end index:') || '');
    if (!isNaN(start) && !isNaN(end)) {
        const substring: string = inputString.substr(start, end - start);
        outputElement.textContent = `Substring: ${substring}`;
    } else {
        outputElement.textContent = 'Invalid input: Please enter valid start and end indices.';
    }
}

function getSlice(): void {
    const inputString: string = inputStringElement.value;
    const start: number = parseInt(prompt('Enter the start index:') || '');
    const end: number = parseInt(prompt('Enter the end index:') || '');
    if (!isNaN(start) && !isNaN(end)) {
        const slice: string = inputString.slice(start, end);
        outputElement.textContent = `Slice: ${slice}`;
    } else {
        outputElement.textContent = 'Invalid input: Please enter valid start and end indices.';
    }
}

function getIndexOf(): void {
    const inputString: string = inputStringElement.value;
    const searchString: string = prompt('Enter a string to search for:') || '';
    const index: number = inputString.indexOf(searchString);
    outputElement.textContent = `Index of "${searchString}": ${index}`;
}

function replaceString(): void {
    const inputString: string = inputStringElement.value;
    const searchString: string = prompt('Enter a string to search for:') || '';
    const replacementString: string = prompt('Enter a replacement string:') || '';
    const result: string = inputString.replace(searchString, replacementString);
    outputElement.textContent = `Replaced String: ${result}`;
}
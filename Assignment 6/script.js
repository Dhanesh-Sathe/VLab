function calculateTriangleArea() {
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        document.getElementById("triangle-area").textContent = "Invalid input. Please enter positive numbers for base and height.";
    } else {
        const area = 0.5 * base * height;
        document.getElementById("triangle-area").textContent = `The area of the triangle is: ${area}`;
    }
}

function calculateCircleArea() {
    const radius = parseFloat(document.getElementById("radius").value);

    if (isNaN(radius) || radius <= 0) {
        document.getElementById("circle-area").textContent = "Invalid input. Please enter a positive number for the radius.";
    } else {
        const area = Math.PI * radius ** 2;
        document.getElementById("circle-area").textContent = `The area of the circle is: ${area}`;
    }
}

function findVowels() {
    const str = document.getElementById("input-string").value;
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelsFound = "";

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            vowelsFound += char;
        }
    }

    if (vowelsFound === "") {
        document.getElementById("vowels").textContent = "No vowels found in the string.";
    } else {
        document.getElementById("vowels").textContent = `The vowels found in the string are: ${vowelsFound}`;
    }
}

function calculateSimpleInterest() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        document.getElementById("simple-interest").textContent = "Invalid input. Please enter positive numbers for principal, rate, and time.";
    } else {
        const interest = (principal * rate * time) / 100;
        document.getElementById("simple-interest").textContent = `The simple interest is: ${interest}`;
    }
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function checkPrime() {
    const num = parseInt(document.getElementById("prime-number").value);

    if (isNaN(num) || num < 0) {
        document.getElementById("prime-result").textContent = "Invalid input. Please enter a positive integer.";
    } else if (isPrime(num)) {
        document.getElementById("prime-result").textContent = `${num} is a prime number.`;
    } else {
        document.getElementById("prime-result").textContent = `${num} is not a prime number.`;
    }
}

function calculateFactorial() {
    const num = parseInt(document.getElementById("factorial-number").value);

    if (isNaN(num) || num < 0) {
        document.getElementById("factorial-result").textContent = "Invalid input. Please enter a non-negative integer.";
    } else {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        document.getElementById("factorial-result").textContent = `The factorial of ${num} is: ${factorial}`;
    }
}
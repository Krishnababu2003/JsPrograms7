// Part 1: Array Higher-Order Methods:-

    // 1. Create an array of 10 numbers and use forEach() to print each number.
    var arr1 = [1,2,3,4,5,6,7,8,9,10];
    arr1.forEach(function(num){
        console.log(num);
    }) //Output:- 1 2 3 4 5 6 7 8 9 10
    
    // 2. Create an array of numbers and use map() to create a new array where every number is multiplied by 5.
    var arr2 = [1,2,3,4,5,6,7,8,9,10];
    var result = arr2.map(num1=>num1*5);
    console.log(result); //Output:- [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    
    // 3. Given an array of numbers, use filter() to get only numbers greater than 20.
    var numbers = [10, 25, 15, 30, 40, 5];
    var result = numbers.filter(num => num > 20);
    console.log(result); //Output:- [25, 30, 40]

    // 4. Create an employee array containing name and salary. Use filter() to display employees whose salary is less than or equal to ₹300,000.
    var employees = [
    { name: "Ravi", salary: 250000 },
    { name: "Krishna", salary: 400000 },
    { name: "Sita", salary: 300000 },
    { name: "Ram", salary: 200000 }
    ];
    var result = employees.filter(emp => emp.salary <= 300000);
    console.log(result); //Output:- 0: {name: 'Ravi', salary: 250000}
                              //    1: {name: 'Sita', salary: 300000}
                              //    2: {name: "Ravi", salary: 250000}
    // 5. Using the same employee array, use find() to get the first employee whose salary is greater than ₹200,000.
    var employees = [
    { name: "Ravi", salary: 250000 },
    { name: "Krishna", salary: 400000 },
    { name: "Sita", salary: 300000 }
    ];
    var result = employees.find(emp => emp.salary > 200000);
    console.log(result); //Output:- {name: "Ravi", salary: 250000}

    // 6. Use reduce() to calculate the total of all numbers in an array.
    var numbers = [10, 20, 30, 40, 50];
    var total = numbers.reduce((sum, num) => sum + num, 0);
    console.log("Total:", total); //Output:- Total: 150

    // 7. Create an array of numbers and use some() to check whether at least one number is even.
    var numbers = [1, 3, 5, 8, 9];
    var result = numbers.some(num => num % 2 === 0);
    console.log(result); //Output:- true

    // 8. Use every() to check whether all numbers in an array are greater than zero.
    var numbers = [10, 20, 30, 40, 50];
    var result = numbers.every(num => num > 0);
    console.log(result); //Output:- true

    // 9. Given an array of numbers, sort them in ascending order using the sort callback.
    var numbers = [50, 10, 40, 20, 30];
    numbers.sort((a, b) => a - b);
    console.log(numbers); //Output:- [10, 20, 30, 40, 50]

    // 10. Given an array of numbers, sort them in descending order using sort() and (a, b) => b - a.
    var numbers = [50, 10, 40, 20, 30];
    numbers.sort((a, b) => b - a);
    console.log(numbers); //Output:- [50, 40, 30, 20, 10]

// Part 2: String Methods:-

    // 11. Create a string "javascript" and print the character at index 4 using charAt().
    var str = "javascript";
    console.log(str.charAt(4)); //Output:- s

    // 12. Find the character code at index 2 using charCodeAt().
    var str = "javascript";
    console.log(str.charCodeAt(2)); //Output:- 118

    // 13. Create a string with spaces at the beginning and end. Remove the extra spaces using trim().
    var str = "   Hello JavaScript   ";
    console.log(str.trim()); //Output:- Hello JavaScript

    // 14. Convert a string to uppercase and lowercase using the appropriate methods.
    var str = "JavaScript Programming";
    console.log(str.toUpperCase()); //Output:- JAVASCRIPT PROGRAMMING
    console.log(str.toLowerCase()); //Output:- javascript programming

    // 15. Check whether a string contains "script" using includes().
    var str = "javascript programming";
    console.log(str.includes("script")); //Output:- true

    // 16. Check whether a string starts with "Java" and ends with "Script" using the appropriate methods.
    var str = "JavaScript";
    console.log(str.startsWith("Java")); //Output:- true
    console.log(str.endsWith("Script")); //Output:- true

    // 17. Replace every occurrence of "java" with "python" in a string using replaceAll().
    var str = "java is easy and java is popular";
    var result = str.replaceAll("java", "python");
    console.log(result); //Output:- python is easy and python is popular

    // 18. Split the string "html-css-javascript-react" into an array using split().
    var str = "html-css-javascript-react";
    var result = str.split("-");
    console.log(result); //Output:- ['html', 'css', 'javascript', 'react']

    // 19. Convert an array of names into a single string using join() with a comma separator.
    var names = ["Ravi", "Krishna", "Sita", "Ram"];
    var result = names.join(", ");
    console.log(result); //Output:- Ravi, Krishna, Sita, Ram

    // 20. Create a string and extract a portion of it using slice().
    var str = "JavaScript Programming";
    var result = str.slice(0, 10);
    console.log(result); //Output:- JavaScript

// Part 3: Date Methods:-

    // 21. Create a Date object and print the current year, month, date, and day.
    var today = new Date();
    console.log("Year:", today.getFullYear()); //Output:- Year: 2026
    console.log("Month:", today.getMonth() + 1); //Output:- Month: 10
    console.log("Date:", today.getDate()); //Output:- Date: 28
    console.log("Day:", today.getDay()); //Output:- Day: 3

    // 22. Create an array containing all 12 month names. Use getMonth() to display the current month name.
    var months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
    ];
    var today = new Date();
    console.log("Current Month:", months[today.getMonth()]); //Output:- Current Month: October

    // 23. Print the current hours, minutes, and seconds using the appropriate date methods.
    var today = new Date();
    console.log("Hours:", today.getHours()); //Output:- Hours: 15
    console.log("Minutes:", today.getMinutes()); //Output:- Minutes: 33
    console.log("Seconds:", today.getSeconds()); //Output:- Seconds: 33
 
    // 24. Create a date object and change its year to 2003, month to January, and date to 30 using the setter methods.
    var date = new Date();
    date.setFullYear(2003);
    date.setMonth(0);
    date.setDate(30);
    console.log(date); //Output:- Thu Jan 30 2003 15:34:20 GMT+0530 (India Standard Time)

// Part 4: Asynchronous JavaScript:-
    
    // 25. Use setTimeout() to print "Welcome to JavaScript" after 3 seconds.
    setTimeout(function() {
    console.log("Welcome to JavaScript"); //Output:-
    }, 3000); 

    // 26. Use setInterval() to print "Learning JavaScript" every 2 seconds.
    setInterval(function() {
    console.log("Learning JavaScript"); //Output:-
    }, 2000);

    // 27. Stop the interval created in Task 26 after 8 seconds using clearInterval().
    var interval = setInterval(function() {
    console.log("Learning JavaScript");
    }, 2000);
    setTimeout(function() {
        clearInterval(interval);
        console.log("Interval stopped");
    }, 8000);

    // 28. Create three functions named one(), two(), and three(). Call them in this order: one(), setTimeout(two, 0), and three(). Observe the output order.
    function one() {
    console.log("One");
    }   
    function two() {
        console.log("Two");
    }
    function three() {
        console.log("Three");
    }
    one(); //Output:- Execution 1
    setTimeout(two, 0); //Output:- Execution 3
    three(); //Output:- Execution 2

// Part 5: Promises and API Fetching:-

    // 29. Create a Promise that resolves with the message "Login successful" and display the result using .then().
    var login = new Promise(function(resolve, reject) {
    resolve("Login successful");
    });
    login.then(function(message) {
        console.log(message); //Output:- Login successful

    });

    // 30. Create a Promise that rejects with the message "Invalid password" and handle the error using .catch().
    var login = new Promise(function(resolve, reject) {
    reject("Invalid password");
    });
    login.catch(function(error) {
        console.log(error); //Output:- Invalid password
    });

    // 31. Create a Promise and use .finally() to print "Process completed" regardless of whether it resolves or rejects.
    var process = new Promise(function(resolve, reject) {
    resolve("Process successful");
    });
    process
        .then(message => console.log(message))
        .catch(error => console.log(error))
        .finally(() => console.log("Process completed"));
    
    // 32. Fetch product data from the Fake Store API:
    // https://fakestoreapi.com/products
    // Convert the response to JSON and print all product titles using forEach().
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            console.log(product.title);
        });
    })
    .catch(error => console.warn(error))
    .finally(() => console.log("API call completed"));

    // 33. Fetch the same API and print the title, price, and category of every product.
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("-------------------");
        });
    });

    // 34. Handle API errors using .catch() and display the error message using console.warn().
    fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then(products => {
        console.log(products);
    })
    .catch(error => {
        console.warn("Error:", error.message);
    });

    // 35. Use .finally() to print "API call completed" after the fetch process.
    fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("API request failed");
        }

        return response.json();
    })
    .then(products => {
        console.log(products);
    })
    .catch(error => {
        console.warn(error.message);
    })
    .finally(() => {
        console.log("API call completed");
    });

// Part 6: Real-Time Mini Tasks:-

    // 36. Employee salary report: Create an array of employee objects. Use filter() to select employees earning less than ₹300,000, then use forEach() to print their names and salaries.
    var employees = [
    { name: "Ravi", salary: 250000 },
    { name: "Krishna", salary: 450000 },
    { name: "Sita", salary: 180000 },
    { name: "Ram", salary: 300000 }
    ];
    var result = employees.filter(emp => emp.salary < 300000);
    result.forEach(emp => {
        console.log("Name:", emp.name);
        console.log("Salary: ₹" + emp.salary);
    });

    // 37. Product price calculator: Fetch products from the Fake Store API and use map() to create a new array containing only product titles and prices.
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        let result = products.map(product => ({
            title: product.title,
            price: product.price
        }));

        console.log(result);
    })
    .catch(error => console.warn(error))
    .finally(() => console.log("API call completed"));

    // 38. Product search: Fetch products and use filter() to display products belonging to a category you choose.
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        let result = products.filter(
            product => product.category === "electronics"
        );

        console.log(result);
    })
    .catch(error => console.warn(error))
    .finally(() => console.log("Search completed"));

    // 39. Number analysis: Given an array of numbers, use map(), filter(), reduce(), some(), and every() to perform different calculations and checks.
    var numbers = [10, 20, 30, 40, 50];

    // map(): multiply every number by 2
    var doubled = numbers.map(num => num * 2);
    console.log("Doubled:", doubled);

    // filter(): get numbers greater than 25
    var filtered = numbers.filter(num => num > 25);
    console.log("Greater than 25:", filtered);

    // reduce(): calculate total
    var total = numbers.reduce((sum, num) => sum + num, 0);
    console.log("Total:", total);

    // some(): check whether any number is even
    var hasEven = numbers.some(num => num % 2 === 0);
    console.log("Has even number:", hasEven);

    // every(): check whether all numbers are positive
    var allPositive = numbers.every(num => num > 0);
    console.log("All positive:", allPositive);

    // 40. Product listing: Fetch the Fake Store API data, convert the response to JSON, and print the title, price, and category of each product. Handle errors with .catch() and print a completion message with .finally().
    fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Unable to fetch product data");
        }

        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("--------------------------");
        });
    })
    .catch(error => {
        console.warn("Error:", error.message);
    })
    .finally(() => {
        console.log("API call completed");
    });
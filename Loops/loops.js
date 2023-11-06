//for loop to print number until 10
for (let i = 0; i <= 10; i++){
    //console.log(i);
}

for (let i = 0; i <= 10; i++){
    if (i % 2 === 0) {
        //console.log(i);        
    } else {
        //console.log(`${i} is odd number`)
    }
}

//Even numbers
for (let i = 0; i <= 10; i += 2){
    //console.log(i)
}

//print odd numbers
for (let i = 1; i <= 20; i += 2){
    //console.log(i)
}

//print a string for 6 times
for (let i = 0; i <= 6; i++){
   // console.log('Da ba dee da ba daa')
}


//print number divisible by 5

for (let i = 25; i >= 0; i--){
    if (i % 5 === 0) {
        //console.log(i);
    }
}

for (let i = 25; i >= 0; i -= 5){
    //console.log(i)
}

//print the square of initial value

for (let i = 5; i <= 1000; i *= i) {
    console.log(i)
};
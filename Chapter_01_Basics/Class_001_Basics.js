let result;

function add(a, b) {
    return a + b;
}

// hot code this code will got interpreter then it wiil go  profile then turbo fan meand compiler 
for (let i = 0; i < 10000; i++) {
    result = add(i, 1);
    console.log(result);
}
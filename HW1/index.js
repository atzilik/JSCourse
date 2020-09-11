function hw1(start, end){
    for (let i=start; i<end; i++)
    {
        if (isDiv3(i))
            console.log(`${i} Fizz`);
        if (isDiv5(i))
            console.log(`${i} Buzz`);
        if (isDiv3(i) && isDiv5(i))
            console.log(`${i} FizzBuzz`);
    }
}

function isDiv3(number)
{
    return !(number % 3);
}

function isDiv5(number)
{
    return !(number % 5);
}

hw1(1,100);

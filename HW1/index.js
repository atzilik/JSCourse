function hw1(start, end){
    for (let i=start; i<end; i++)
    {
        if (IsDiv3(i))
            console.log(`${i} Fizz`);
        if (IsDiv5(i))
            console.log(`${i} buzz`);
        if (IsDiv3(i) && IsDiv5(i))
            console.log(`${i} FizzBuzz`);
    }
}

function IsDiv3(number)
{
    return !(number % 3);
}

function IsDiv5(number)
{
    return !(number % 5);
}

hw1(1,100);


function delay(number) {
    return new Promise((resolve, reject) => {
        setTimeout( function() {
          if(number > 10) {
            resolve(`Success! ${number} is greater than 10...`);
            }
          else{
            reject(`Failed! ${number} is smaller than 10...`);
            } 
        }, 500);
      });
    }



    async function timeOutMessage()
    {
        const res = await delay(9).then(
          result => console.log(result),
          error => console.log(error)
        );
    }

timeOutMessage();

function delay(milliseconds, number) {
    return new Promise((resolve, reject) => {
        setTimeout( function() {
          if(number > 10) {
            resolve(`Success! ${number} is greater than 10...`);
            return true;
            }
          else{
            reject(`Failed! ${number} is smaller than 10...`);
              return false;
            
            } 
        }, milliseconds);
      });
    }



    async function timeOutMessage()
    {
        const res = await delay(500, 12).then(result=>{
            console.log(result);
          },
         error => console.log(error)
        );
    }

timeOutMessage();
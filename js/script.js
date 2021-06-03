// Scrivi un programma che stampi i numeri da 1 a 100,
//  ma per i multipli di 3 stampi anche "Fizz" di fianco al numero
//   e per i multipli di 5 stampi "Buzz". Per i numeri che sono 
//   sia multipli di 3 che di 5 stampi "FizzBuzz". 


// apro il ciclo for
     for(var i = 0; i < 101; i++){
   
    //    per i multipli sia di 5 che di 3 stampo fizzBuzz
       if(i % 5 == 0 && i % 3 == 0  ){
        console.log( i + ' ' + 'FizzBuzz')

        // per i multipli solo di 3 stampo fizz
       }else if(i % 3 == 0){
        console.log(i + ' ' + 'Fizz'); 

        // per i multipli di 5 stampo Buzz
      } else if( i % 5 == 0){
        console.log(i + ' ' + 'Buzz')

        // e per i restanti semplicemente la i
      }else{
          console.log(i)
      }

    }
      
    

    

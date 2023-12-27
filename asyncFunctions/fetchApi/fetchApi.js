/**
 fetch("https://swapi.dev/api/people/1")
   .then((res) => {
     console.log("Resolved!!!", res);
     return res.json();
   })
   .then((data) => {
     console.log("DONE!!!", data);
     return fetch("https://swapi.dev/api/people/2");
   })
   .then((res) => {
     console.log(" Second request Resolved!!!", res);
     return res.json();
   })
   .then((data) => {
     console.log(data);
   })
   .catch((e) => {
     console.log("Error!!!!");
   }); 
 
 */

// write it in sync Async method

const loadStarWarsDetails = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1");
    const data = await res.json();
    console.log(data);

    const res2 = await fetch("https://swapi.dev/api/people/2");
    const data2 = await res2.json();
    console.log(data2);

    
    const res3 = await fetch("https://swapi.dev/api/people/3");
    const data3 = await res3.json();
    console.log(data3);

    } catch (e) {
        console.log('Error!!!!', e)
}
}

loadStarWarsDetails();
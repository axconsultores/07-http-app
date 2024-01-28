
const VerData = ( quota ) => {
    console.log ('data=' , quota);
}

let i=0;

/**
 * @returns {Promise<object>}
 */
const fetchQuota = async() => {
    const res    =  await fetch ('https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10]');
    const data   =  await res.json();  
  return data[i++];

}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const  Breakingbad = async( element)=>  {
    let data2;

    document.querySelector('#app-title').innerHTML ='Breadkingbad APP';
    element.innerHTML = 'Loading...';

  
    
    const quotaLabel = document.createElement('blockquote');  
    const authoLabel = document.createElement('h3');
    const nextQuotaButton = document.createElement('button');
    nextQuotaButton.innerHTML ='Next Quota';

    nextQuotaButton.addEventListener('click', async()=> {
        element.innerHTML = 'Loading...';
        await fetchQuota().then(renderQuote);
        
    });

    
    const renderQuote = (data)=> {
      
       setTimeout(() => {
        quotaLabel.innerHTML = data.name;
        authoLabel.innerHTML = data.species;
        element.replaceChildren(quotaLabel, authoLabel, nextQuotaButton);
       }, 500);
      
        
    }


   // const data = await fetchQuota().then(a =>{     
   //     renderQuote(a);      
   // });

   fetchQuota().then(renderQuote);
    


   

}



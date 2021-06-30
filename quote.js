document.addEventListener('DOMContentLoaded',function(){
    //connection to json file 
    const getdata =async()=>{
        const response=await fetch("quote.json");

        if(response.status !==200){
            throw new Error('cannot fetch');
        }
        const data=await response.json();
        return data;  
    };
    /*
    //to check data /err
    getdata()
    .then(data => console.log("Resolved",data))
    .catch(err => console.log('rejected',err.message));
    */

    //typing
    const intro=["I Can Display Random Quote","Press Display To Get Quote"];
    let Count=0;  //for sentence
    let Index=0; //for letter in sentence
    let currentintro="";
    let letter="";
    
    (function type(){
        if(Count===intro.length){
            Count=0;
        }
        currentintro=intro[Count];
        letter=currentintro.slice(0,++Index);

        document.querySelector(".type").textContent=letter;
        if(letter.length===currentintro.length){
            Count++;
            Index=0;
        }
        setTimeout(type,500);
    })();

    //Display Button
    const click=document.querySelector("button");

    click.addEventListener("click",function(e){

        getdata().then(function(data){
            const random=Math.floor(Math.random()*data.length);
            let display ;
            display =` <h4 class="author">Author - ${data[random].author}</h4>
            <blockquote class="quote">"${data[random].quote}"</blockquote>`;
            document.getElementById('show').innerHTML=display;
        });
    });

 
});


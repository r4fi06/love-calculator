const triggerLove = () =>{
    
    // validation 
    let firstSpouse = document.getElementById('firstSpouse').value;
    let secondSpouse = document.getElementById('secondSpouse').value;
    
    if(firstSpouse == ""){
        alert("enter name");
    }else if(firstSpouse.length <= 2){
        alert("boom");
    }else if(!isNaN(firstSpouse)){
        alert ("boom")
    }else if(secondSpouse == ""){
        alert("enter name");
    }else if(secondSpouse.length <= 2){
        alert("boom");
    }else if(!isNaN(secondSpouse)){
        alert ("boom")
    }
    else{
        // result 
        let myLove = Math.random()*100;
        myLove = Math.floor(myLove);
        document.getElementById('loveValue').innerHTML = "Your love percentage is " + myLove +"%";
    }
    
    
    
    


    
}


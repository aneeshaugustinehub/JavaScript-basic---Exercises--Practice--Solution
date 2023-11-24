for(i=0;i<1600; i++){
    if (i%3 === 0 && i%5 === 0){
        console.log("fisbus");
    } 
    else if (i%3 === 0){
        console.log("fiz");
    }
    else if (i%5 === 0){
        console.log("bus");
    }
    else{
        console.log(i);

    }
}
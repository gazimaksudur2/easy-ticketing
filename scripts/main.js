document.addEventListener('click',function(event){
    let li = event.target.classList;
    // console.log(li);
    // console.log(event.target.id," ",(event.target.id).length);
    if(li.contains('btn') && ((event.target.id).length === 2)){
        let seatID = getID(event.target);
        console.log(seatID);
        const element = getByid(seatID);
        
        selects(element,seatID);
    }else if(event.target.id === 'apply'){
        couponCheck(event.target);
    }
    
});
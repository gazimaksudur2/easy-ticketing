let availableSeats = 40,collectedSeat = 0,totalFare=0;
let newCoupon, coupleCoupon, grandTotal;
newCoupon = true;
coupleCoupon = true;
let selectedID = [];

const avails = getByid('avail');
const filled = getByid('filled');
const tabl = getByid('table');
const fare = getByid('total-fare');
const discount = getByid('discount');
const grand = getByid('grand-total');
const couponInp = getByid('coupon-code');

function getID(targ){
    return (targ.id);
}

function getByid(id){
    const val = document.getElementById(id);
    return val;
}

function deselects(ele){
    ele.classList.remove('bg-green-400');
}

function selects(ele,id){
    if(selectedID.length>= 4){
        alert("You reached of your maximum ability of allocation.");
        return;
    }
    ele.classList.add('bg-green-400');
    selectedID.push(id);
    filled.innerText = selectedID.length;
    avails.innerText = (40-selectedID.length);
    totalFare = selectedID.length*550;
    fare.innerText = totalFare;
    grand.innerText = totalFare;


    createAppend(id);
    // if(selectedID.length>4){
    //     // console.log(selectedID.shift());
    //     const val = selectedID[0];
    //     selectedID.shift();
    //     const el = getByid(val);
    //     deselects(el);
    // }
}

function couponCheck(ele){
    let coupon = couponInp.value;
    console.log(coupon);
    if(coupon === 'Couple 20'&& coupleCoupon){
        totalFare = (selectedID.length*550)*0.8;
        fare.classList.add('strikethrough')
        grand.innerText = totalFare;
    }else if(coupon === 'NEW15'&& newCoupon){
        totalFare = (selectedID.length*550)*0.85;
        fare.innerText = totalFare;
        grand.innerText = totalFare;
    }else{
        alert('You entered invalid couponID');
        return null;
    }
}

function createAppend(id){
    const tbdy = tabl.getElementsByTagName('tbody')[0];
    const newRow = tbdy.insertRow(tbdy.rows.length - 1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerText = (id.toString()).toUpperCase();
    cell2.innerText = 'Business';
    cell3.innerText = 550;
}
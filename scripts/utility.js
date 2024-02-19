let availableSeats = 40,
  collectedSeat = 0,
  totalFare = 0;
let newCoupon, coupleCoupon, grandTotal;
newCoupon = true;
coupleCoupon = true;
let selectedID = [];

const avails = getByid("avail");
const filled = getByid("filled");
const tabl = getByid("table");
const fare = getByid("total-fare");
const discount = getByid("discount");
const grand = getByid("grand-total");
const couponInp = getByid("coupon-code");
const discountDiv = getByid("discount-div");
const coupModal = getByid("coupon-modal");
const couponDiv = getByid('apply-coupon-div');
const couponApply = getByid("apply");

function getID(targ) {
  return targ.id;
}

function getByid(id) {
  const val = document.getElementById(id);
  return val;
}

function scrollToID(id) {
  let section2 = document.getElementById(id);
  section2.scrollIntoView({ behavior: "smooth" });
}

function deselects(ele) {
  ele.classList.remove("bg-green-400");
}

function selects(ele, id) {
  if (collectedSeat >= 4) {
    alert("You reached of your maximum ability of allocation.");
    return;
  }
  ele.classList.add("bg-green-400");
  selectedID.push(id);
  filled.innerText = selectedID.length;
  avails.innerText = 40 - selectedID.length;
  totalFare = selectedID.length * 550;
  fare.innerText = totalFare;
  grand.innerText = totalFare;
  collectedSeat++;

  createAppend(id);
  // if(selectedID.length>4){
  //     // console.log(selectedID.shift());
  //     const val = selectedID[0];
  //     selectedID.shift();
  //     const el = getByid(val);
  //     deselects(el);
  // }
}

function couponCheck() {
  let coupon = couponInp.value;
  let message;
  let discountedPrice = 0;
  couponInp.ariaPlaceholder = "Your Coupon";
  couponInp.value = "";
  console.log(coupon);
  if (coupon === "Couple 20") {
    if(!coupleCoupon){
        message = "You have already used this coupon. Best wishes for next offer.";
        // coupModal.innerText = "You have already used this coupon. Best wishes for next offer.";
    }
    totalFare = selectedID.length * 550 * 0.8;
    discountedPrice = selectedID.length * 550 * 0.2;
    coupleCoupon = false;
    message = "You have successfully achieved Coupon 20 discount";
    // coupModal.innerText = "You have successfully achieved Coupon 20 discount";
} else if (coupon === "NEW15") {
    if(!newCoupon){
        message = "You have already used this coupon. Best wishes for next offer.";
        // coupModal.innerText = "You have already used this coupon. Best wishes for next offer.";
    }
    totalFare = selectedID.length * 550 * 0.85;
    discountedPrice = selectedID.length * 550 * 0.15;
    newCoupon = false;
    message = "You have successfully achieved NEW15 discount";
    // coupModal.innerText = "You have successfully achieved NEW15 discount";
}else if (collectedSeat === 0) {
    message = "You didn't selected any seat. Please select your seat at first.";
    // coupModal.innerText = "You didn't selected any seat. Please select your seat at first.";
    return;
} else {
      message = "You entered invalid couponID. Press Ok before 10s otherwise this page will be stuck up.";
    // coupModal.innerText = "You entered invalid couponID. Press Ok before 10s otherwise this page will be stuck up.";
    alert(message);
    return null;
  }
  fare.classList.add("line-through", "text-red-400", 'text-3xl', 'font-semibold');
  grand.innerText = totalFare;
  discount.innerText = discountedPrice;
  discountDiv.classList.remove("hidden");
  couponDiv.classList.add("hidden");
//   setTimeout(() => {
//     couponDiv.classList.add("hidden");
//   }, 10000);
//   try{
//     couponDiv.classList.add("hidden");
//   }catch(error){
//     console.log('error message is : ',error);
//   }
    alert(message);
}

function createAppend(id) {
  const tbdy = tabl.getElementsByTagName("tbody")[0];
  const newRow = tbdy.insertRow(tbdy.rows.length - 1);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  cell1.innerText = id.toString().toUpperCase();
  cell2.innerText = "Business";
  cell3.innerText = 550;
}

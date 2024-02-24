couponInp.addEventListener("input", function () {
  let inputValue = couponInp.value;
  console.log(inputValue);
  if ((inputValue.length > 0)&&collectedSeat>3) {
    couponApply.removeAttribute("disabled");
  } else {
    couponApply.setAttribute("disabled", "");
  }
});

couponInp.addEventListener("focus", function () {
  couponApply.classList.add("scale-y-[115%]");
});
couponInp.addEventListener("blur", function () {
  if (couponApply.classList.contains("scale-y-[115%]")) {
    couponApply.classList.remove("scale-y-[115%]");
  }
});

phon.addEventListener("input", function () {
    let inputValue = phon.value;
    console.log(inputValue);
    if ((inputValue.length > 9) && collectedSeat>0) {
      confirmBook.removeAttribute("disabled");
    } else {
      confirmBook.setAttribute("disabled", "");
    }
  });

document.addEventListener("click", function (event) {
  let li = event.target.classList;
  // console.log(li);
  // console.log(event.target.id," ",(event.target.id).length);
  if (li.contains("btn") && event.target.id.length === 2) {
    let seatID = getID(event.target);
    console.log(seatID);
    const element = getByid(seatID);
    selects(element, seatID);
  } else if (event.target.id === "apply") {
    couponCheck();
  } else if (event.target.id === "bus-btn") {
    scrollToID("bus-section");
  } else if (event.target.id === "scroll-btn") {
    scrollToID("book-section");
  }

  if(collectedSeat>3){
    couponInp.removeAttribute("disabled");
  }else {
    couponInp.setAttribute("disabled", "");
  }
});

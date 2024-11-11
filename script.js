let NameInput = document.getElementById("NameInput");
let confirmButton = document.getElementById("confirmButton");
let CardNumber = document.getElementById("CardNumber");
let WrongFormat = document.getElementById("WrongFormat");
let DateInput1 = document.getElementById("DateInput1");
let DateInput2 = document.getElementById("DateInput2");
let blank = document.getElementById("blank");
let input4 = document.getElementById("input4");
let blank2 = document.getElementById("blank2");
let CVC = document.getElementById("CVC");
let cardNumbers = document.getElementById("cardNumbers");
let NameinputTextcontent = document.getElementById("NameinputTextcontent");
let DateTextcontent = document.getElementById("DateTextcontent");
let DateTextcontent2 = document.getElementById("DateTextcontent2");
let none = document.getElementById("none");
let completeConteiner = document.getElementById("completeConteiner");
confirmButton.addEventListener("click", function () {
  let allValid = true;

  NameInput.value = NameInput.value.replace(/[^a-zA-Z\s]/g, "");
  if (NameInput.value === "") {
    NameInput.style.border = "1px solid rgba(255, 80, 80, 1)";
    allValid = false;
  } else {
    NameInput.style.border = "";
  }

  if (CardNumber.value.length !== 16) {
    CardNumber.style.border = "1px solid rgba(255, 80, 80, 1)";
    WrongFormat.style.display = "block";
    allValid = false;
  } else {
    CardNumber.style.border = "";
    WrongFormat.style.display = "none";
  }

  if (DateInput1.value.length !== 2) {
    DateInput1.style.border = "1px solid rgba(255, 80, 80, 1)";
    blank.style.display = "block";
    allValid = false;
  } else {
    DateInput1.style.border = "";
    blank.style.display = "none";
  }

  if (DateInput2.value.length !== 2) {
    DateInput2.style.border = "1px solid rgba(255, 80, 80, 1)";
    blank.style.display = "block";
    allValid = false;
  } else {
    DateInput2.style.border = "";
    blank.style.display = "none";
  }

  if (input4.value.length !== 3) {
    input4.style.border = "1px solid rgba(255, 80, 80, 1)";
    blank2.style.display = "block";
    allValid = false;
  } else {
    input4.style.border = "";
    blank2.style.display = "none";
  }

  if (allValid) {
    NameinputTextcontent.textContent = NameInput.value;
    cardNumbers.textContent = CardNumber.value;
    DateTextcontent.textContent = DateInput1.value;
    DateTextcontent2.textContent = DateInput2.value;
    CVC.textContent = input4.value;

    none.style.display = "none";
    completeConteiner.style.display = "block";
  }

  valid = allValid;
});

NameInput.addEventListener("input", function () {
  NameinputTextcontent.textContent = NameInput.value.replace(
    /[^a-zA-Z\s]/g,
    ""
  );
});

CardNumber.addEventListener("input", function () {
  if (CardNumber.value.length <= 16) {
    cardNumbers.textContent = CardNumber.value;
  } else {
    alert("Card Number length is sixteen");
  }
});

DateInput1.addEventListener("input", function () {
  if (DateInput1.value.length <= 2) {
    DateTextcontent.textContent = DateInput1.value;
  }
});

DateInput2.addEventListener("input", function () {
  if (DateInput2.value.length <= 2) {
    DateTextcontent2.textContent = DateInput2.value;
  }
});

input4.addEventListener("input", function () {
  if (input4.value.length <= 3) {
    CVC.textContent = input4.value;
  }
});

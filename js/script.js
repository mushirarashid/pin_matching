function setElement(elementId, value) {
  let idName = document.getElementById(elementId);
  idName.value = value;
  idName.innerText = value;
}

function generatePin() {
  let randomPin = Math.round(Math.random() * 10000);
  let randomString = randomPin + "";
  if (randomString.length === 4) {
    return randomPin;
  } else {
    return generatePin();
  }
}

document.getElementById("pin_btn").addEventListener("click", function () {
  let returnPin = generatePin();
  setElement("pin_inputField", returnPin);
});

// ============ calculator
document
  .getElementById("calculator")
  .addEventListener("click", function (even) {
    const clickNow = even.target.innerText;
    const input_field = document.getElementById("calculator_input");
    const previousInputFieldNumber = input_field.value;
    if (isNaN(clickNow)) {
      if (clickNow === "C") {
        input_field.value = "";
      } else if (clickNow === "<") {
        const makeArray = previousInputFieldNumber.split("");
        makeArray.pop();
        const joinNumber = makeArray.join("");

        setElement("calculator_input", joinNumber);
      }
    } else {
      const addNewNumberBeside = previousInputFieldNumber + clickNow;
      setElement("calculator_input", addNewNumberBeside);
    }
  });

document.getElementById("pin_submit").addEventListener("click", function () {
  const displaypin = document.getElementById("pin_inputField");
  const displaypinValue = displaypin.value;

  const typePin = document.getElementById("calculator_input");

  const typePinValue = typePin.value;

  const pinMatch = document.getElementById("match");

  const notmatch = document.getElementById("notMatch");
  if (displaypinValue === typePinValue) {
    pinMatch.style.display = "block";
    notmatch.style.display = "none";
  } else {
    notmatch.style.display = "block";
    pinMatch.style.display = "none";
  }
});

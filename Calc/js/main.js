// Grab the input class and pass it into a variable
const screen = document.getElementById('screen');
const clearAll = document.getElementById('clear');
const evaluateBtn = document.getElementById('equal');
const buttonList = document.querySelectorAll('.op, .num');

const Calc = {
  clearCalc: function () {
    screen.value = "";
  },
  evaluateCalc: function () {
    //evaluateBtn.textContent = eval(screen.value),
    screen.value = eval(screen.value);

  },
  buttonCalc: function () {
    // sort through button items
    for (let i = 0; i < buttonList.length; i++) {
      buttonList[i].onclick = Calc.buttonVal;
      console.log(buttonList[i]);

    }
  },
  buttonVal: function () {
    screen.value += screen.textContent;
  }
}

// Clear all string items in the input 
clearAll.addEventListener("click", Calc.clearCalc);
evaluateBtn.addEventListener("click", Calc.evaluateCalc);
//buttonList.addEventListener("click", Calc.buttonVal)


// Let multiple string items appear on the input field


Array.from(buttonList).forEach(function (element) {
  element.addEventListener('click', function () {
    buttonList.onclick = Calc.buttonVal;
    console.log(this.textContent);
    screen.value += this.textContent;
  })
});
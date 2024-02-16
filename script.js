const butt = document.querySelector("#button");
console.log(butt);

const elem = document.getElementById("romannumeral");

butt.onclick = convertToRoman;

const inputElement = document.querySelector("#inputbox");

function convertToRoman() {
  let num = inputElement.value;

  if (num > 3999) {
    elem.innerHTML = "Please enter a number between 1 and 3999";
  } else if (num < 4000) {

    const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let correspondingNumeral = [];

    for (let i = 0; i < 13; i++) {
      while (num >= arabicNumerals[i]) {
        correspondingNumeral.push(romanNumerals[i])
        num -= arabicNumerals[i];
      }

    }
    const romnum = correspondingNumeral.join('');
    elem.innerText = romnum;
  }
}

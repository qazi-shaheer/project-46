// let marks = document.getElementById("marks");
// let btn = document.getElementById("check");
// let result = document.getElementById("result");
// btn.addEventListener("click", function () {
//     if (marks.value === "") {
//         result.innerHTML = "please enter your marks"
//     }
//     else {
//         let score = Number(marks.value);
//         if (score >= 80) {
//             result.innerHTML = "Excelent";
//         }
//         else if (score >= 60) {
//             result.innerHTML = "Good";
//         }
//         else if (score >= 35) {
//             result.innerHTML = "Pass";
//         }
//         else {
//             result.innerHTML = "Fail"
//         }
//     }
// })
let btn2 = document.getElementById("generate");
let checkResult = document.getElementById("result");
btn2.addEventListener("click", function () {
    let number = Math.floor(Math.random() * 100) + 1;
    if (number > 50) {
        checkResult.innerHTML = number + " + Highest Number";
    } else {
        checkResult.innerHTML = number + " - Low Number";
    }
})
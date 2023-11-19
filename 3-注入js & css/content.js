console.log("from localTest-3 的 js 文件")
console.log(document.getElementById("J_Search"))
// document.getElementById("J_Search").onclick = function() {
//     alert("我被点击了")
// }

// h3 class = xxx
var getTities = document.getElementsByClassName("LC20lb MBeuO DKV0Md");

for(let i = 0; i < getTities.length; i++) {
    console.log(getTities[i].innerText)
}
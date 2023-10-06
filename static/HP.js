
var targetDivs = document.querySelectorAll(".hpquestion");
var answerDivs = document.querySelectorAll(".hpanswer");
targetDivs.forEach(function(targetDiv) {
    var parentDiv = targetDiv.parentElement; // 获取目标 div 的父级
    var previousDiv = parentDiv.previousElementSibling; // 获取父级的前一个兄弟 div
    var previousDivHeight = previousDiv.clientHeight;
    // 设置目标 div 的高度为前一个兄弟 div 的三分之一
    console.log(previousDiv);
    targetDiv.style.maxHeight = (previousDivHeight / 3) + "px";

});
answerDivs.forEach(function(answerDiv) {
    var parentDiv = answerDiv.parentElement; // 获取目标 div 的父级
    var previousDiv = parentDiv.previousElementSibling; // 获取父级的前一个兄弟 div
    var previousDivHeight = previousDiv.clientHeight;
    // 设置目标 div 的高度为前一个兄弟 div 的三分之一
    console.log(previousDiv);
    answerDiv.style.maxHeight = (previousDivHeight*2/3-answerDiv.previousElementSibling.previousElementSibling.clientHeight) + "px";

});
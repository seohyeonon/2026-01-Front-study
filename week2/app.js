const number = document.getElementById("counting-num")
const incButton = document.getElementById("increase")
const decButton = document.getElementById("decrease")
const resetButton = document.getElementById("reset")


let count = 0;
number.textContent = count;

function increaseCount(){
    count++;//count = count + 1
    number.textContent = count;// 숫자 변화 반영
    }

function decreaseCount(){
    count--;//count = count -1
    number.textContent =  count;// 숫자 변화 반영
    }

function resetCount(){
    count = 0;// count 초기화
    number.textContent = count;// 숫자 변화 반영
    }

incButton.addEventListener("click", increaseCount);
decButton.addEventListener("click", decreaseCount);
resetButton.addEventListener("click", resetCount);

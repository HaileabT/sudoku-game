let box = document.querySelectorAll(".box");
let gameArray = new Array(9);
for (let i = 0; i<9; i++){
    gameArray[i] = new Array(9);
}

for (let i = 0; i<81; i++){
        box[i].addEventListener("input", () =>{
            if (isNaN(box[i].value)){
                box[i].value = '';
            }
            if (box[i].value.length > 1){
                box[i].value = box[i].value.slice(0, 1);
            }
            gameArray[Math.floor(i / 9)][i%9] = box[i].value;
        })
}
let boxes=document.querySelectorAll(".box");
let resetb=document.querySelector("#reset");
let msg=document.querySelector("#msg");
let msgcontainer= document.querySelector(".msgcontainer");

let turn = true;

const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [6,4,2],
    [1,4,7],
    [2,5,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) //PLAYER O
        {
            box.innerText="O";
            turn=false;
        }
        else //PLAYER X
        {
            box.innerText="X";
            turn=true;
        }
        box.disabled= true;
        checkwinner();
    });
});


const checkwinner = () => {
    for (let p of win) {
        let pos1val = boxes[p[0]].innerText;
        let pos2val = boxes[p[1]].innerText;
        let pos3val = boxes[p[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showwinner(pos1val);
                return; // winner found, exit early
            }
        }
    }

    // If all boxes are filled and no winner was found
    let isDraw = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false;
        }
    });

    if (isDraw) {
        showDraw();
    }
};


const showDraw = () => {
    msg.innerText = "It's a Draw!";
    msgcontainer.classList.remove("hide");
};
 


const showwinner = (winner) =>
{
    msg.innerHTML=`CONGRATULATIONS THE WINNER IS ${winner} `;
    msgcontainer.classList.remove("hide");
    disableboxes();
    

};

const resetgame = () =>{
    turn = true;
    enableboxes();
    msgcontainer.classList.add("hide");

}

const disableboxes = () => {
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableboxes = () => {
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";      //MAKING THE BOXES EMPTY AGAIN
    }
}

resetb.addEventListener("click", resetgame);
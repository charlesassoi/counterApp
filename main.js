let c=0, ci=0, cd=0;
const count=document.getElementById("count");
const incCount=document.getElementById("incCount");
const decCount=document.getElementById("decCount");

function update(){
    count.textContent=c;
    incCount.textContent=ci;
    decCount.textContent=cd;
}

function inc(){
    c++;
    ci=(ci>=10)?0:ci+1;
    update();
}

function dec(){
    c--;
    cd=(cd>=10)?0:cd+1;
    update();
}
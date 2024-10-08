let value;
let computer;
let s;
let countwin=0,countloss=0,counttie=0;
console.log(computer);
function Rock() {
    computer=Math.floor(Math.random()*3)+1;
    value=2;
    if (computer==1) {
        countloss++;
        s=`Win:${countwin}  Loss:${countloss} Tie:${counttie}`
        document.getElementById("result").innerHTML=s;
        document.getElementById("outcome").innerHTML=`You <img src="../img/rock-emoji.png" alt="" id="yourresult" width="50px"> <img src="../img/paper-emoji.png" alt="" id="computeresult" width="50px"> Computer`
    }
    else if (computer==3) {
        countwin++;
        s=`Win:${countwin}  Loss:${countloss} Tie:${counttie}`
        document.getElementById("result").innerHTML=s;
        document.getElementById("outcome").innerHTML=`You <img src="../img/rock-emoji.png" alt="" id="yourresult" width="50px"> <img src="../img/scissors-emoji.png" alt="" id="computeresult" width="50px"> Computer`
    } 
    else{
        counttie++;
        s=`Win:${countwin}  Loss:${countloss} Tie:${counttie}`
        document.getElementById("result").innerHTML=s;
        document.getElementById("outcome").innerHTML=`You <img src="../img/rock-emoji.png" alt="" id="yourresult" width="50px"> <img src="../img/rock-emoji.png" alt="" id="computeresult" width="50px"> Computer`    
    }
}
function Paper() {
    computer=Math.floor(Math.random()*3)+1;
    value=1;
    if (computer==3) {
        countloss++;
        s=`Win:${countwin}  Loss:${countloss} Tie:${counttie}`
        document.getElementById("result").innerHTML=s;
        document.getElementById("outcome").innerHTML=`You <img src="../img/paper-emoji.png" alt="" id="yourresult" width="50px"> <img src="../img/scissors-emoji.png" alt="" id="computeresult" width="50px"> Computer`
    }
    else if (computer==2) {
        countwin++;
        s=`Win:${countwin}  Loss:${countloss} Tie:${counttie}`
        document.getElementById("result").innerHTML=s;
        document.getElementById("outcome").innerHTML=`You <img src="../img/paper-emoji.png" alt="" id="yourresult" width="50px"> <img src="../img/rock-emoji.png" alt="" id="computeresult" width="50px"> Computer`
    } 
    else{
        counttie++;
        s=`Win:${countwin}  Loss:${countloss} Tie:${counttie}`
        document.getElementById("result").innerHTML=s;
        document.getElementById("outcome").innerHTML=`You <img src="../img/paper-emoji.png" alt="" id="yourresult" width="50px"> <img src="../img/paper-emoji.png" alt="" id="computeresult" width="50px"> Computer`    
    }
}
function Scissor() {
    computer=Math.floor(Math.random()*3)+1;
    value=3;
    if (computer==2) {
        countloss++;
        s=`Win:${countwin}  Loss:${countloss} Tie:${counttie}`
        document.getElementById("result").innerHTML=s;
        document.getElementById("outcome").innerHTML=`You <img src="../img/scissors-emoji.png" alt="" id="yourresult" width="50px"> <img src="../img/rock-emoji.png" alt="" id="computeresult" width="50px"> Computer`
    }
    else if (computer==1) {
        countwin++;
        s=`Win:${countwin}  Loss:${countloss} Tie:${counttie}`
        document.getElementById("result").innerHTML=s;
        document.getElementById("outcome").innerHTML=`You <img src="../img/scissors-emoji.png" alt="" id="yourresult" width="50px"> <img src="../img/paper-emoji.png" alt="" id="computeresult" width="50px"> Computer`
    } 
    else{
        counttie++;
        s=`Win:${countwin}  Loss:${countloss} Tie:${counttie}`
        document.getElementById("result").innerHTML=s;
        document.getElementById("outcome").innerHTML=`You <img src="../img/scissors-emoji.png" alt="" id="yourresult" width="50px"> <img src="../img/scissors-emoji.png" alt="" id="computeresult" width="50px"> Computer`    
    }
}
function Reset() {
    counttie=0;
    countloss=0;
    countwin=0;
    s=`Win:${countwin}  Loss:${countloss} Tie:${counttie}`
    document.getElementById("result").innerHTML=s;
}
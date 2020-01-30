let res = document.getElementById("res");

function button0() {
    res.innerHTML += 0;
}

let clickZ = document.getElementById("btn0");
clickZ.addEventListener('click',button0, false);

function button1() {
    res.innerHTML += 1;
}
let clickO = document.getElementById("btn1");
clickO.addEventListener('click',button1, false);

function buttonClr() {
    res.innerHTML = '';
}let clickC = document.getElementById("btnClr");
    clickC.addEventListener('click',buttonClr, false);

function buttonSum() {
    res.innerHTML += '+';    
}
let clickS = document.getElementById("btnSum");
clickS.addEventListener('click',buttonSum, false);

function buttonSub() {
    res.innerHTML += '-';    
}
let clickSu = document.getElementById("btnSub");
    clickSu.addEventListener('click',buttonSub, false);

function buttonMul() {
    res.innerHTML += '*';    
}
let clickM = document.getElementById("btnMul");
    clickM.addEventListener('click',buttonMul, false);

function buttonDiv() {
    res.innerHTML += '/';    
}
let clickD = document.getElementById("btnDiv");
    clickD.addEventListener('click',buttonDiv, false);

function buttonEql() {
    const oReg = /[^\+|\-|\*|\/]/;
    const nReg = /\+|\-|\*|\//;
    let o = res.innerText.split(oReg);
    let eFlag =
    nReg.test(o[o.length - 1]) ||
    o.some((o, i) => (i === 0 && nReg.test(o)) || o.length > 1);

    if(!eFlag) {
        const n = res.innerText.split(nReg).map(n => parseInt(n, 2));
        o = o.filter(e => nReg.test(e)).map((e, i) => n[i] + e)
        o.push(n[n.length - 1]);
        o = o.toString().replace(/,/g, '');

        res.innerText = eval(o).toString(2);
    } else {
        mathError();
    }
}
let clickE = document.getElementById("btnEql");
    clickE.addEventListener('click',buttonEql, false);

function mathError() {
    throw "Math Error!";
}
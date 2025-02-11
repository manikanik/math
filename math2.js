const aa = document.getElementById('aa');
const ab = document.getElementById('ab');
const ac = document.getElementById('ac');
const ad = document.getElementById('ad');
const ae = document.getElementById('ae');

const pa = document.getElementById('pa');
const pb = document.getElementById('pb');
const pc = document.getElementById('pc');
const pd = document.getElementById('pd');
const pe = document.getElementById('pe');

// a
let av1 = 'a';
let av2 = 'b';
let ax1 = 5;
let ax2 = 6;
let aop = '+'
let aopO = '';

if(aop === '+'){
    aopO = '-';
}else{
    aopO = '+';
}
// a

// p
let v1 = 'x';
let x1 = 3;
let op = '+';
let opO = '';

if(op === '+'){
    opO = '-';
}else{
    opO = '+';
}
// p

let c = '\\textcolor{limegreen}{\\implies}';
let d = '\\textcolor{blue}{\\therefore}';
let e = '\\textcolor{#a15be2}{=}';


function gga(){
    let xx1 = x1*x1 - 2;
    let xx2 = x1*x1 + 2;
    let xxx = 0;

    if(op == '+'){
        xxx = xx1;
    }else{
        xxx = xx2;
    }

    pa.innerHTML = `\\(Given,\\)<br><br>
                    \\(${v1}${op}\\frac{1}{${v1}}${e} ${x1}\\)<br><br>
                    \\(${c} \\left(${v1}${op}\\frac{1}{${v1}}\\right)^2${e}${x1}^2 \\)<br><br>
                    \\(${c} (${v1})^2+(\\frac{1}{${v1}})^2${op}2.${v1}.\\frac{1}{${v1}}${e}${x1*x1} \\)<br><br>
                    \\(${c} ${v1}^2+\\frac{1}{${v1}^2}${op}2${e}${x1*x1} \\)<br><br>
                    \\(${c} ${v1}^2+\\frac{1}{${v1}^2}${e}${x1*x1}${opO}2 \\)<br><br>
                    \\(${d} ${v1}^2+\\frac{1}{${v1}^2}${e}${xxx} \\)`;
}

function ggb(){
    let xx1 = x1*x1*x1 - 3*x1;
    let xx2 = x1*x1*x1 + 3*x1;
    let xxx = 0;

    if(op == '+'){
        xxx = xx1;
    }else{
        xxx = xx2;
    }

    pb.innerHTML = `\\(Given, \\)<br><br>
                    \\(${v1}${op}\\frac{1}{${v1}}${e}${x1} \\)<br><br>
                    \\(${c} (${v1}${op}\\frac{1}{${v1}})^3${e}(${x1})^3 \\)<br><br>
                    \\(${c} (${v1})^3${op}(\\frac{1}{${v1}})^3${op}3.${v1}.\\frac{1}{${v1}}(${v1}${op}\\frac{1}{${v1}})
                    ${e}${x1*x1*x1} \\)<br><br>
                    \\(${c} ${v1}^3${op}\\frac{1}{${v1}^3}${op}3.1.${x1}${e}${x1*x1*x1}\\)<br><br>
                    \\(${c} ${v1}^3${op}\\frac{1}{${v1}^3}${e}${x1*x1*x1}${opO}${3*x1} \\)<br><br>
                    \\(${d} ${v1}^3${op}\\frac{1}{${v1}^3}${e}${xxx} \\)`;
}

function ggc(){
    let xx1 = x1*x1 - 2;
    let xx2 = x1*x1 + 2;
    let xxx = 0;

    if(op == '+'){
        xxx = xx1;
    }else{
        xxx = xx2;
    }

    pc.innerHTML = `\\(Given,\\)<br><br>
                    \\(${v1}${op}\\frac{1}{${v1}}${e} ${x1}\\)<br><br>
                    \\(${c} (${v1}${op}\\frac{1}{${v1}})^2${e}${x1}^2 \\)<br><br>
                    \\(${c} (${v1})^2+(\\frac{1}{${v1}})^2${op}2.${v1}.\\frac{1}{${v1}} ${e} ${x1*x1} \\)<br><br>
                    \\(${c} ${v1}^2+\\frac{1}{${v1}^2}${op}2${e}${x1*x1} \\)<br><br>
                    \\(${c} ${v1}^2+\\frac{1}{${v1}^2}${e}${x1*x1}${opO}2 \\)<br><br>
                    \\(${c} ${v1}^2+\\frac{1}{${v1}^2}${e}${xxx} \\)<br><br>
                    \\(${c} (${v1}^2+\\frac{1}{${v1}^2})^2${e}${xxx}^2 \\)<br><br>
                    \\(${c} (${v1}^2)^2+(\\frac{1}{${v1}^2})^2+2.${v1}^2.\\frac{1}{${v1}^2}
                    ${e}${xxx*xxx} \\)<br><br>
                    \\(${c} ${v1}^4+\\frac{1}{${v1}^4}+2${e}${xxx*xxx} \\)<br><br>
                    \\(${c} ${v1}^4+\\frac{1}{${v1}^4}${e}${xxx*xxx}-2 \\)<br><br>
                    \\(${d} ${v1}^4+\\frac{1}{${v1}^4}${e}${xxx*xxx-2} \\)`;
}

function ggd(){
    let xx1 = x1*x1 - 2;
    let xx2 = x1*x1 + 2;
    let xxx = 0;
    let yy1 = x1*x1*x1 - 3*x1;
    let yy2 = x1*x1*x1 + 3*x1;
    let yyy = 0;

    if(op == '+'){
        xxx = xx1;
        yyy = yy1;
    }else{
        xxx = xx2;
        yyy = yy2;
    }

    pd.innerHTML = `Given,<br>
                    \\(${v1}${op}\\frac{1}{${v1}}${e}${x1} \\)<br><br>
                    \\(${c} (${v1}${op}\\frac{1}{${v1}})^2${e}${x1}^2 \\)<br><br>
                    \\(${c} (${v1})^2+(\\frac{1}{${v1}})^2${op}2.${v1}.\\frac{1}{${v1}}${e}${x1*x1} \\)<br><br>
                    \\(${c} ${v1}^2+\\frac{1}{${v1}^2}${op}2${e}${x1*x1} \\)<br><br>
                    \\(${c} ${v1}^2+\\frac{1}{${v1}^2}${e}${x1*x1}${opO}2 \\)<br><br>
                    \\(${c} ${v1}^2+\\frac{1}{${v1}^2}${e}${xxx} \\)<br><br>
                    Again,<br>
                    \\(${v1}${op}\\frac{1}{${v1}}${e}${x1} \\)<br><br>
                    \\(${c} (${v1}${op}\\frac{1}{${v1}})^3${e}${x1}^3 \\)<br><br>
                    \\(${c} (${v1})^3${op}(\\frac{1}{${v1}})^3${op}3.${v1}.\\frac{1}{${v1}}(${v1}${op}\\frac{1}{${v1}})${e}
                    ${x1*x1*x1} \\)<br><br>
                    \\(${c} ${v1}^3${op}\\frac{1}{${v1}^3}${op}3.${x1}${e}${x1*x1*x1} \\)<br><br>
                    \\(${c} ${v1}^3${op}\\frac{1}{${v1}^3}${e}${x1*x1*x1}${opO}${3*x1} \\)<br><br>
                    \\(${c} ${v1}^3${op}\\frac{1}{${v1}^3}${e}${yyy} \\)<br><br>
                    Now,<br>
                    \\((${v1}^3${op}\\frac{1}{${v1}^3})(${v1}^2+\\frac{1}{${v1}^2})${e}${yyy}.${xxx} \\)<br><br>
                    \\(${c} ${v1}^5+${v1}^3.\\frac{1}{${v1}^2}${op}\\frac{1}{${v1}^3}.${v1}^2
                    ${op}\\frac{1}{${v1}^5}${e}${yyy*xxx} \\)<br><br>
                    \\(${c} ${v1}^5${op}\\frac{1}{${v1}^5}+${v1}${op}\\frac{1}{${v1}}${e}${yyy*xxx} \\)<br><br>
                    \\(${c} ${v1}^5${op}\\frac{1}{${v1}^5}+${x1}${e}${yyy*xxx} \\)<br><br>
                    \\(${c} ${v1}^5${op}\\frac{1}{${v1}^5}${e}${yyy*xxx}-${x1} \\)<br><br>
                    \\(${d} ${v1}^5${op}\\frac{1}{${v1}^5}${e}${yyy*xxx-x1} \\)`;
}

function gge(){
    let xx1 = x1*x1 - 2;
    let xx2 = x1*x1 + 2;
    let xxx = 0;

    if(op == '+'){
        xxx = xx1;
    }else{
        xxx = xx2;
    }

    pe.innerHTML = `\\(Given,\\)<br><br>
                    \\(${v1}${op}\\frac{1}{${v1}}${e} ${x1}\\)<br><br>
                    \\(${c} (${v1}${op}\\frac{1}{${v1}})^2${e}${x1}^2 \\)<br><br>
                    \\(${c} (${v1})^2+(\\frac{1}{${v1}})^2${op}2.${v1}.\\frac{1}{${v1}} ${e} ${x1*x1} \\)<br><br>
                    \\(${c} ${v1}^2+\\frac{1}{${v1}^2}${op}2${e}${x1*x1} \\)<br><br>
                    \\(${c} ${v1}^2+\\frac{1}{${v1}^2}${e}${x1*x1}${opO}2 \\)<br><br>
                    \\(${c} ${v1}^2+\\frac{1}{${v1}^2}${e}${xxx} \\)<br><br>
                    \\(${c} (${v1}^2+\\frac{1}{${v1}^2})^3${e}${xxx}^3 \\)<br><br>
                    \\(${c} (${v1}^2)^3+(\\frac{1}{${v1}^2})^3+3.${v1}^2.\\frac{1}{${v1}^2}.
                    (${v1}^2+\\frac{1}{${v1}^2})${e}${xxx*xxx*xxx} \\)<br><br>
                    \\(${c} ${v1}^6+\\frac{1}{${v1}^6}+3.${xxx}${e}${xxx*xxx*xxx} \\)<br><br>
                    \\(${c} ${v1}^6+\\frac{1}{${v1}^6}${e}${xxx*xxx*xxx}-${3*xxx} \\)<br><br>
                    \\(${d} ${v1}^6+\\frac{1}{${v1}^6}${e}${xxx*xxx*xxx-3*xxx} \\)<br><br>
                    `;
}

function ffa(){
    let axx1 = ax1*ax1;
    let axxx = 0;

    if(op === '+'){
        axxx = axx1 - 2*ax2;
    }else{
        axxx = axx1 + 2*ax2;
    }

    aa.innerHTML = `\\(Given,\\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1}\\;and\\; ${av1}${av2}${e}${ax2} \\)<br>
                    \\(Here, \\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1} \\)<br>
                    \\(${c}(${av1}${aop}${av2})^2${e}(${ax1})^2 \\)<br>
                    \\(${c}(${av1})^2+(${av2})^2${aop}2.${av1}.${av2}${e}${axx1} \\)<br>
                    \\(${c}${av1}^2+${av2}^2${aop}2.${ax2}${e}${axx1} \\)<br>
                    \\(${c}${av1}^2+${av2}^2${e}${axx1}${aopO}${2*ax2} \\)<br>
                    \\(${d}${av1}^2+${av2}^2${e}${axxx} \\)<br>
                    `;
}

function ffb(){
    let axx1 = ax1*ax1*ax1;
    let axxx = 0;

    if(op === '+'){
        axxx = axx1 - 3*ax1*ax2;
    }else{
        axxx = axx1 + 3*ax1*ax2;
    }

    ab.innerHTML = `\\(Given, \\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1}\\;and\\; ${av1}${av2}${e}${ax2} \\)<br>
                    \\(Here, \\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1} \\)<br>
                    \\(${c}(${av1}${aop}${av2})^3${e}(${ax1})^3 \\)<br>
                    \\(${c}(${av1})^3${aop}(${av2})^3${aop}3.${av1}.${av2}.(${av1}${aop}${av2})${e}${axx1} \\)<br>
                    \\(${c}${av1}^3${aop}${av2}^3${aop}3.${ax2}.${ax1}${e}${axx1} \\)<br>
                    \\(${c}${av1}^3${aop}${av2}^3${e}${axx1}${aopO}${3*ax1*ax2} \\)<br>
                    \\(${d}${av1}^3${aop}${av2}^3${e}${axxx} \\)<br>`;
}

function ffc(){
    let axx1 = ax1*ax1;
    let axxx = 0;

    if(op === '+'){
        axxx = axx1 - 2*ax2;
    }else{
        axxx = axx1 + 2*ax2;
    }

    ac.innerHTML = `\\(Given,\\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1}\\;and\\; ${av1}${av2}${e}${ax2} \\)<br>
                    \\(Here, \\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1} \\)<br>
                    \\(${c}(${av1}${aop}${av2})^2${e}(${ax1})^2 \\)<br>
                    \\(${c}(${av1})^2+(${av2})^2${aop}2.${av1}.${av2}${e}${axx1} \\)<br>
                    \\(${c}${av1}^2+${av2}^2${aop}2.${ax2}${e}${axx1} \\)<br>
                    \\(${c}${av1}^2+${av2}^2${e}${axx1}${aopO}${2*ax2} \\)<br>
                    \\(${c}${av1}^2+${av2}^2${e}${axxx} \\)<br>
                    \\(${c}(${av1}^2+${av2}^2)^2${e}${axxx}^2 \\)<br>
                    \\(${c}(${av1}^2)^2+(${av1}^2)^2+2.${av1}^2.${av2}^2${e}${axxx*axxx} \\)<br>
                    \\(${c}${av1}^4+${av1}^4+2.(${av1}${av2})^2${e}${axxx*axxx} \\)<br>
                    \\(${c}${av1}^4+${av1}^4+2.(${ax2})^2${e}${axxx*axxx} \\)<br>
                    \\(${c}${av1}^4+${av1}^4${e}${axxx*axxx}-${2*ax2*ax2} \\)<br>
                    \\(${d}${av1}^4+${av1}^4${e}${axxx*axxx - 2*ax2*ax2} \\)<br>
                    `;
}

function ffd(){
    let axx1 = ax1*ax1;
    let ayy1 = ax1*ax1*ax1;
    let axxx = 0;
    let ayyy = 0;

    if(op === '+'){
        axxx = axx1 - 2*ax2;
        ayyy = ayy1 - 3*ax2*ax1;
    }else{
        axxx = axx1 + 2*ax2;
        ayyy = ayy1 + 3*ax2*ax1;
    }

    ad.innerHTML = `\\(Given,\\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1}\\;and\\; ${av1}${av2}${e}${ax2} \\)<br>
                    \\(Here, \\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1} \\)<br>
                    \\(${c}(${av1}${aop}${av2})^2${e}(${ax1})^2 \\)<br>
                    \\(${c}(${av1})^2+(${av2})^2${aop}2.${av1}.${av2}${e}${axx1} \\)<br>
                    \\(${c}${av1}^2+${av2}^2${aop}2.${ax2}${e}${axx1} \\)<br>
                    \\(${c}${av1}^2+${av2}^2${e}${axx1}${aopO}${2*ax2} \\)<br>
                    \\(${c}${av1}^2+${av2}^2${e}${axxx} \\)<br>
                    \\(Again, \\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1} \\)<br>
                    \\(${c}(${av1}${aop}${av2})^3${e}(${ax1})^3 \\)<br>
                    \\(${c}(${av1})^3${aop}(${av2})^3${aop}3.${av1}.${av2}.(${av1}${aop}${av2})${e}${ayy1} \\)<br>
                    \\(${c}${av1}^3${aop}${av2}^3${aop}3.${ax2}.${ax1}${e}${ayy1} \\)<br>
                    \\(${c}${av1}^3${aop}${av2}^3${e}${ayy1}${aopO}${3*ax1*ax2} \\)<br>
                    \\(${c}${av1}^3${aop}${av2}^3${e}${ayyy} \\)<br>
                    \\(Now, \\)<br>
                    \\((${av1}^3${aop}${av2}^3)(${av1}^2+${av2}^2)${e}${ayyy}.${axxx} \\)<br>
                    \\(${c}${av1}^5+${av1}^3.${av2}^2${op}${av1}^2.${av2}^3${op}${av2}^5${e}${ayyy*axxx} \\)<br>
                    \\(${c}${av1}^5${op}${av2}^5+${av1}^2.${av2}^2(${av1}${aop}${av2})${e}${ayyy*axxx} \\)<br>
                    \\(${c}${av1}^5${op}${av2}^5+(${av1}${av2})^2(${av1}${aop}${av2})${e}${ayyy*axxx} \\)<br>
                    \\(${c}${av1}^5${op}${av2}^5+(${ax2})^2.(${ax1})${e}${ayyy*axxx} \\)<br>
                    \\(${c}${av1}^5${op}${av2}^5${e}${ayyy*axxx}-${ax2*ax2*ax1} \\)<br>
                    \\(${d}${av1}^5${op}${av2}^5${e}${ayyy*axxx-ax2*ax2*ax1} \\)<br>
                    `;
}

function ffe(){
    let axx1 = ax1*ax1;
    let axxx = 0;

    if(op === '+'){
        axxx = axx1 - 2*ax2;
    }else{
        axxx = axx1 + 2*ax2;
    }

    ae.innerHTML = `\\(Given,\\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1}\\;and\\; ${av1}${av2}${e}${ax2} \\)<br>
                    \\(Here, \\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1} \\)<br>
                    \\(${c}(${av1}${aop}${av2})^2${e}(${ax1})^2 \\)<br>
                    \\(${c}(${av1})^2+(${av2})^2${aop}2.${av1}.${av2}${e}${axx1} \\)<br>
                    \\(${c}${av1}^2+${av2}^2${aop}2.${ax2}${e}${axx1} \\)<br>
                    \\(${c}${av1}^2+${av2}^2${e}${axx1}${aopO}${2*ax2} \\)<br>
                    \\(${c}${av1}^2+${av2}^2${e}${axxx} \\)<br>
                    \\(${c}(${av1}^2+${av2}^2)^3${e}(${axxx})^3 \\)<br>
                    \\(${c}(${av1}^2)^3+(${av2}^2)^3+3.${av1}^2.${av2}^2.(${av1}^2+${av2}^2)
                       ${e}${axxx*axxx*axxx} \\)<br>
                    \\(${c}${av1}^6+${av2}^6+3.(${av1}${av2})^2.(${av1}^2+${av2}^2)
                       ${e}${axxx*axxx*axxx} \\)<br>
                    \\(${c}${av1}^6+${av2}^6+3.(${ax2})^2.${axxx}${e}${axxx*axxx*axxx} \\)<br>
                    \\(${c}${av1}^6+${av2}^6${e}${axxx*axxx*axxx}-${3*ax2*ax2*axxx} \\)<br>
                    \\(${d}${av1}^6+${av2}^6${e}${axxx*axxx*axxx-3*ax2*ax2*axxx} \\)<br>
                    `;
}

gga();

ggb();

ggc();

ggd();

gge();

ffa();

ffb();

ffc();

ffd();

ffe();

// let power = 6;

// if(power === 2){
//     gga();
// }else if(power === 3){
//     ggb();
// }else if(power === 4){
//     ggc();
// }else if(power === 5){
//     ggd();
// }else if(power === 6){
//     gge();
// }else{
//     aa.innerHTML = 'Out of range. Enter valid number.';
// }

renderMathInElement(document.body, {
    delimiters: [
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true }
    ]
  });
  

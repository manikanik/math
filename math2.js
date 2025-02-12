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
let av1 = 'x';
let av2 = 'y';
let ax1 = 7;
let ax2 = 12;
let aop = '+'
let aopO = '';

if(aop === '+'){
    aopO = '-';
}else{
    aopO = '+';
}
// a

// p
let v1 = 'y';
let v2 = `\\frac{1}{${v1}}`;
let v22 = `\\frac{1}{${v1}^2}`;
let v23 = `\\frac{1}{${v1}^3}`;
let v24 = `\\frac{1}{${v1}^4}`;
let v25 = `\\frac{1}{${v1}^5}`;
let v26 = `\\frac{1}{${v1}^6}`;

let x1 = 5;
let op = '-';
let opO = '';

if(op === '+'){
    opO = '-';
}else{
    opO = '+';
}
// p

let c = `\\textcolor{limegreen}{\\implies}`;
let d = `\\textcolor{blue}{\\therefore}`;
let e = `\\textcolor{#a15be2}{=}`;
let tx1 = `\\textcolor{#076e5d}{\\text{@\\;}}`;
let and = `\\textcolor{#8f5810}{\\text{\\;and\\;}}`;
let given = `\\textcolor{#8f5810}{\\text{Given:}}`;
let here = `\\textcolor{#8f5810}{\\text{Here,}}`;
let again = `\\textcolor{#8f5810}{\\text{Again,}}`;
let now = `\\textcolor{#8f5810}{Now,}`;

function gga(){
    let xx1 = x1*x1 - 2;
    let xx2 = x1*x1 + 2;
    let xxx = 0;

    if(op == '+'){
        xxx = xx1;
    }else{
        xxx = xx2;
    }

    pa.innerHTML = `\\(${tx1}${v1}${op}${v2}${e}${x1};${v1}^2+${v22}${e}? \\)<br>
                    \\(${given}\\)<br>
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

    pb.innerHTML = `\\(${tx1}${v1}${op}${v2}${e}${x1};${v1}^3${op}${v23}${e}? \\)<br>
                    \\(${given}\\)<br>
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

    pc.innerHTML = `\\(${tx1}${v1}${op}${v2}${e}${x1};${v1}^4+${v24}${e}? \\)<br>
                    \\(${given}\\)<br>
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

    pd.innerHTML = `\\(${tx1}${v1}${op}${v2}${e}${x1};${v1}^5${op}${v25}${e}? \\)<br>
                    \\(${given}\\)<br>
                    \\(${v1}${op}\\frac{1}{${v1}}${e}${x1} \\)<br><br>
                    \\(${c} (${v1}${op}\\frac{1}{${v1}})^2${e}${x1}^2 \\)<br><br>
                    \\(${c} (${v1})^2+(\\frac{1}{${v1}})^2${op}2.${v1}.\\frac{1}{${v1}}${e}${x1*x1} \\)<br><br>
                    \\(${c} ${v1}^2+\\frac{1}{${v1}^2}${op}2${e}${x1*x1} \\)<br><br>
                    \\(${c} ${v1}^2+\\frac{1}{${v1}^2}${e}${x1*x1}${opO}2 \\)<br><br>
                    \\(${c} ${v1}^2+\\frac{1}{${v1}^2}${e}${xxx} \\)<br><br>
                    \\(${again} \\)<br>
                    \\(${v1}${op}\\frac{1}{${v1}}${e}${x1} \\)<br><br>
                    \\(${c} (${v1}${op}\\frac{1}{${v1}})^3${e}${x1}^3 \\)<br><br>
                    \\(${c} (${v1})^3${op}(\\frac{1}{${v1}})^3${op}3.${v1}.\\frac{1}{${v1}}(${v1}${op}\\frac{1}{${v1}})${e}
                    ${x1*x1*x1} \\)<br><br>
                    \\(${c} ${v1}^3${op}\\frac{1}{${v1}^3}${op}3.${x1}${e}${x1*x1*x1} \\)<br><br>
                    \\(${c} ${v1}^3${op}\\frac{1}{${v1}^3}${e}${x1*x1*x1}${opO}${3*x1} \\)<br><br>
                    \\(${c} ${v1}^3${op}\\frac{1}{${v1}^3}${e}${yyy} \\)<br><br>
                    \\(${now} \\)<br>
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

    pe.innerHTML = `\\(${tx1}${v1}${op}${v2}${e}${x1};${v1}^6+${v26}${e}? \\)<br>
                    \\(${given}\\)<br>
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

    if(aop === '+'){
        axxx = axx1 - 2*ax2;
    }else{
        axxx = axx1 + 2*ax2;
    }

    aa.innerHTML = `\\(${tx1}${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2};
                       ${av1}^2+${av2}^2${e}? \\)<br>
                    \\(${given} \\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2} \\)<br>
                    \\(${here} \\)<br>
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

    if(aop === '+'){
        axxx = axx1 - 3*ax1*ax2;
    }else{
        axxx = axx1 + 3*ax1*ax2;
    }

    ab.innerHTML = `\\(${tx1}${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2};
                       ${av1}^3${aop}${av2}^3${e}? \\)<br>
                    \\(${given} \\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2} \\)<br>
                    \\(${here} \\)<br>
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

    if(aop === '+'){
        axxx = axx1 - 2*ax2;
    }else{
        axxx = axx1 + 2*ax2;
    }

    ac.innerHTML = `\\(${tx1}${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2};
                       ${av1}^4+${av2}^4${e}? \\)<br>
                    \\(${given} \\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2} \\)<br>
                    \\(${here} \\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1} \\)<br>
                    \\(${c}(${av1}${aop}${av2})^2${e}(${ax1})^2 \\)<br>
                    \\(${c}(${av1})^2+(${av2})^2${aop}2.${av1}.${av2}${e}${axx1} \\)<br>
                    \\(${c}${av1}^2+${av2}^2${aop}2.${ax2}${e}${axx1} \\)<br>
                    \\(${c}${av1}^2+${av2}^2${e}${axx1}${aopO}${2*ax2} \\)<br>
                    \\(${c}${av1}^2+${av2}^2${e}${axxx} \\)<br>
                    \\(${c}(${av1}^2+${av2}^2)^2${e}${axxx}^2 \\)<br>
                    \\(${c}(${av1}^2)^2+(${av2}^2)^2+2.${av1}^2.${av2}^2${e}${axxx*axxx} \\)<br>
                    \\(${c}${av1}^4+${av2}^4+2.(${av1}${av2})^2${e}${axxx*axxx} \\)<br>
                    \\(${c}${av1}^4+${av2}^4+2.(${ax2})^2${e}${axxx*axxx} \\)<br>
                    \\(${c}${av1}^4+${av2}^4${e}${axxx*axxx}-${2*ax2*ax2} \\)<br>
                    \\(${d}${av1}^4+${av2}^4${e}${axxx*axxx - 2*ax2*ax2} \\)<br>
                    `;
}

function ffd(){
    let axx1 = ax1*ax1;
    let ayy1 = ax1*ax1*ax1;
    let axxx = 0;
    let ayyy = 0;

    if(aop === '+'){
        axxx = axx1 - 2*ax2;
        ayyy = ayy1 - 3*ax2*ax1;
    }else{
        axxx = axx1 + 2*ax2;
        ayyy = ayy1 + 3*ax2*ax1;
    }

    ad.innerHTML = `\\(${tx1}${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2};
                       ${av1}^5${aop}${av2}^5${e}? \\)<br>
                    \\(${given} \\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2} \\)<br>
                    \\(${here} \\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1} \\)<br>
                    \\(${c}(${av1}${aop}${av2})^2${e}(${ax1})^2 \\)<br>
                    \\(${c}(${av1})^2+(${av2})^2${aop}2.${av1}.${av2}${e}${axx1} \\)<br>
                    \\(${c}${av1}^2+${av2}^2${aop}2.${ax2}${e}${axx1} \\)<br>
                    \\(${c}${av1}^2+${av2}^2${e}${axx1}${aopO}${2*ax2} \\)<br>
                    \\(${c}${av1}^2+${av2}^2${e}${axxx} \\)<br>
                    \\(${again} \\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1} \\)<br>
                    \\(${c}(${av1}${aop}${av2})^3${e}(${ax1})^3 \\)<br>
                    \\(${c}(${av1})^3${aop}(${av2})^3${aop}3.${av1}.${av2}.(${av1}${aop}${av2})${e}${ayy1} \\)<br>
                    \\(${c}${av1}^3${aop}${av2}^3${aop}3.${ax2}.${ax1}${e}${ayy1} \\)<br>
                    \\(${c}${av1}^3${aop}${av2}^3${e}${ayy1}${aopO}${3*ax1*ax2} \\)<br>
                    \\(${c}${av1}^3${aop}${av2}^3${e}${ayyy} \\)<br>
                    \\(${now} \\)<br>
                    \\((${av1}^3${aop}${av2}^3)(${av1}^2+${av2}^2)${e}${ayyy}.${axxx} \\)<br>
                    \\(${c}${av1}^5+${av1}^3.${av2}^2${aop}${av1}^2.${av2}^3${aop}${av2}^5${e}${ayyy*axxx} \\)<br>
                    \\(${c}${av1}^5${aop}${av2}^5+${av1}^2.${av2}^2(${av1}${aop}${av2})${e}${ayyy*axxx} \\)<br>
                    \\(${c}${av1}^5${aop}${av2}^5+(${av1}${av2})^2(${av1}${aop}${av2})${e}${ayyy*axxx} \\)<br>
                    \\(${c}${av1}^5${aop}${av2}^5+(${ax2})^2.(${ax1})${e}${ayyy*axxx} \\)<br>
                    \\(${c}${av1}^5${aop}${av2}^5${e}${ayyy*axxx}-${ax2*ax2*ax1} \\)<br>
                    \\(${d}${av1}^5${aop}${av2}^5${e}${ayyy*axxx-ax2*ax2*ax1} \\)<br>
                    `;
}

function ffe(){
    let axx1 = ax1*ax1;
    let axxx = 0;

    if(aop === '+'){
        axxx = axx1 - 2*ax2;
    }else{
        axxx = axx1 + 2*ax2;
    }

    ae.innerHTML = `\\(${tx1}${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2};
                       ${av1}^6+${av2}^6${e}? \\)<br>
                    \\(${given} \\)<br>
                    \\(${av1}${aop}${av2}${e}${ax1}${and}${av1}${av2}${e}${ax2} \\)<br>
                    \\(${here} \\)<br>
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

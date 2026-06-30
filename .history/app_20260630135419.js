```js id="7nqk4v"
/*
=========================================
TREE ENGINE
=========================================
*/

const treeRoot =
document.getElementById(
"treeRoot"
);

const viewport =
document.getElementById(
"treeViewport"
);

const svg =
document.getElementById(
"connections"
);

let scale = 1;

let offsetX = 100;

let offsetY = 60;

let dragging = false;

let dragStart = null;

let expanded =
new Set([
"mtalisi"
]);



/* ------------------ */

function init(){

render();

attachEvents();

}

window.onload =
init;



/*
=========================================
RENDER
=========================================
*/

function render(){

treeRoot.innerHTML="";

svg.innerHTML="";

drawNode(
"mtalisi",
0,
0,
null
);

applyTransform();

}



/*
=========================================
DRAW PERSON
=========================================
*/

function drawNode(
id,
depth,
order,
parent
){

const person =
getPerson(
id
);

if(!person)
return;

const x =
depth*
350;

const y =
order*
220;

const node =
document.createElement(
"div"
);

node.className=
`
person
absolute
w-[240px]
rounded-xl
border
bg-white
shadow
p-4
cursor-pointer
`;

node.style.left=
`${x}px`;

node.style.top=
`${y}px`;

const houseColor={
house1:
"border-red-500",

house2:
"border-blue-500",

house3:
"border-emerald-500",

house4:
"border-amber-500",

root:
"border-heritage-700"
};

node.classList.add(
houseColor[
person.house
]||
"border-stone-300"
);

let badge=
"";

if(
person.status===
"late"
){

badge=
`
<div
class="text-xs text-stone-500"
>
🕊️ Late
</div>
`;

}

node.innerHTML=
`
<div
class="font-bold text-lg"
>
${person.name}
</div>

<div
class="text-xs text-stone-500"
>
Generation
${person.generation}
</div>

${badge}

<div
class="mt-3 flex gap-2"
>

<button
class="expand px-2 py-1 rounded bg-stone-100"
>
${
expanded.has(id)
?
"−"
:
"+"
}
</button>

</div>
`;

treeRoot.appendChild(
node
);

node.onclick=
(
e
)=>{

if(
e.target
.classList
.contains(
"expand"
)
){

toggle(
id
);

return;

}

showProfile(
id
);

};



if(parent){

drawLine(
parent,
node
);

}



if(
expanded.has(
id
)
){

const kids=
getChildren(
id
);

kids.forEach(
(
c,
i
)=>{

drawNode(
c.id,
depth+1,
order+i,
node
);

}
);

}

}



/*
=========================================
CONNECTORS
=========================================
*/

function drawLine(
parentNode,
childNode
){

setTimeout(
()=>{

const p=
parentNode
.getBoundingClientRect();

const c=
childNode
.getBoundingClientRect();

const s=
viewport
.getBoundingClientRect();

const x1=
p.right-
s.left;

const y1=
p.top+
60-
s.top;

const x2=
c.left-
s.left;

const y2=
c.top+
60-
s.top;

const line=
document
.createElementNS(
"http://www.w3.org/2000/svg",
"path"
);

line.setAttribute(
"d",
`
M ${x1}
${y1}

C
${x1+80}
${y1},

${x2-80}
${y2},

${x2}
${y2}
`
);

line.setAttribute(
"class",
"connector"
);

svg.appendChild(
line
);

},
50
);

}



/*
=========================================
PROFILE
=========================================
*/

function showProfile(
id
){

const p=
getPerson(
id
);

document
.getElementById(
"memberName"
)
.innerText=
p.name;

document
.getElementById(
"memberGeneration"
)
.innerText=
`Generation ${p.generation}`;

document
.getElementById(
"memberFather"
)
.innerText=
p.father||
"—";

document
.getElementById(
"memberMother"
)
.innerText=
p.mother||
"—";

const spouseArea=
document
.getElementById(
"memberSpouses"
);

spouseArea.innerHTML=
"";

(
p.spouses||
[]
)
.forEach(
s=>{

const div=
document
.createElement(
"div"
);

div.className=
"rounded p-2 bg-stone-100";

div.innerHTML=
`
<div>
${s.name}
</div>

<div
class="
text-xs
text-stone-500
"
>
${s.children.length}
children
</div>
`;

spouseArea
.appendChild(
div
);

}
);

const children=
document
.getElementById(
"memberChildren"
);

children.innerHTML=
"";

getChildren(
id
)
.forEach(
c=>{

const chip=
document
.createElement(
"button"
);

chip.className=
`
px-3
py-1
rounded-full
bg-heritage-100
`;

chip.innerText=
c.name;

chip.onclick=
()=>{

showProfile(
c.id
);

};

children
.appendChild(
chip
);

});

}



/*
=========================================
EXPAND
=========================================
*/

function toggle(
id
){

if(
expanded.has(
id
)
){

expanded.delete(
id
);

}else{

expanded.add(
id
);

}

render();

}



/*
=========================================
ZOOM
=========================================
*/

function applyTransform(){

treeRoot.style.transform=
`
translate(
${offsetX}px,
${offsetY}px
)
scale(
${scale}
)
`;

svg.style.transform=
treeRoot
.style
.transform;

}

document
.querySelectorAll(
".zoomBtn"
)
.forEach(
btn=>{

btn.onclick=
()=>{

if(
btn.dataset.zoom
==="in"
){

scale+=
0.1;

}else{

scale-=
0.1;

}

if(
scale<
0.3
)
scale=
0.3;

applyTransform();

};

});



/*
=========================================
PAN
=========================================
*/

viewport
.onmousedown=
(
e
)=>{

dragging=
true;

dragStart={

x:
e.clientX,

y:
e.clientY

};

};

window
.onmouseup=
()=>{

dragging=
false;

};

window
.onmousemove=
(
e
)=>{

if(
!dragging
)
return;

offsetX+=
e.clientX-
dragStart.x;

offsetY+=
e.clientY-
dragStart.y;

dragStart={

x:
e.clientX,

y:
e.clientY

};

applyTransform();

};



/*
=========================================
SEARCH
=========================================
*/

document
.getElementById(
"searchInput"
)
.oninput=
(
e
)=>{

const q=
e.target
.value
.toLowerCase();

document
.querySelectorAll(
".person"
)
.forEach(
n=>{

n.style.opacity=
n.innerText
.toLowerCase()
.includes(
q
)
?
1
:
0.2;

});

};



/*
=========================================
FIT
=========================================
*/

document
.getElementById(
"fitBtn"
)
.onclick=
()=>{

scale=1;

offsetX=80;

offsetY=50;

applyTransform();

};



/*
=========================================
EXPAND
ALL
=========================================
*/

document
.getElementById(
"expandBtn"
)
.onclick=
()=>{

Object
.keys(
family
)
.forEach(
id=>
expanded
.add(
id
)
);

render();

};



document
.getElementById(
"collapseBtn"
)
.onclick=
()=>{

expanded=
new Set(
[
"mtalisi"
]
);

render();

};
```

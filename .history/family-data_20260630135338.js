```js id="cz4my1"
/*
=================================================
INZALO KAMTALISI
FAMILY DATA
=================================================
*/

const family = {

mtalisi:{
id:"mtalisi",
name:"Mtalisi",
generation:1,
house:"root",
father:null,
mother:null,
spouses:[
{
name:"Ma Moyo (Makhumalo)",
children:[
"msindo",
"gumi",
"khukhuzana",
"hlanya",
"bhenga"
]
},
{
name:"MaMoyo (Mnawakhe)",
children:[
"baleni",
"emeli",
"phawuli"
]
},
{
name:"Ma Dube",
children:[
"makhohliso",
"ganda",
"nani",
"marry",
"sosi",
"ntombana"
]
},
{
name:"Malele",
children:[
"philemon"
]
}
]
},



/* ==========================
HOUSE 1
========================== */

msindo:{
id:"msindo",
name:"Msindo",
generation:2,
house:"house1",
father:"mtalisi",
mother:"Ma Moyo (Makhumalo)",

spouses:[
{
name:"Ma Sibanda",
children:[
"rita",
"dorothy",
"robert",
"ebbie"
]
},
{
name:"Sofi",
children:[
"nehemiah",
"jabu"
]
}
]
},

gumi:{
id:"gumi",
name:"Gumi",
generation:2,
house:"house1",
father:"mtalisi",
mother:"Ma Moyo (Makhumalo)",
spouses:[]
},

khukhuzana:{
id:"khukhuzana",
name:"Khukhuzana",
generation:2,
house:"house1",
father:"mtalisi",
mother:"Ma Moyo (Makhumalo)",
spouses:[]
},

hlanya:{
id:"hlanya",
name:"Hlanya",
generation:2,
house:"house1",
father:"mtalisi",
mother:"Ma Moyo (Makhumalo)",

spouses:[
{
name:"Lezzie",
children:[
"henry",
"harvey",
"playford"
]
}
]
},

bhenga:{
id:"bhenga",
name:"Bhenga",
generation:2,
house:"house1",
father:"mtalisi",
mother:"Ma Moyo (Makhumalo)",
spouses:[]
},



/* ==========================
HOUSE 2
========================== */

baleni:{
id:"baleni",
name:"Baleni",
generation:2,
house:"house2",
father:"mtalisi",
mother:"Mnawakhe",

spouses:[
{
name:"Ma Ngwenya",
children:[
"mgoli",
"bhoyi"
]
}
]
},

emeli:{
id:"emeli",
name:"Emeli",
generation:2,
house:"house2",
father:"mtalisi",
mother:"Mnawakhe",
spouses:[]
},

phawuli:{
id:"phawuli",
name:"Phawuli",
generation:2,
house:"house2",
father:"mtalisi",
mother:"Mnawakhe",

spouses:[
{
name:"MaDongola",
children:[
"sikhangezile",
"nkosana"
]
}
]
},



/* ==========================
HOUSE 3
========================== */

ganda:{
id:"ganda",
name:"Ganda",
generation:2,
house:"house3",
father:"mtalisi",
mother:"Ma Dube",

spouses:[
{
name:"Ma Dube",
children:[
"zale",
"rebecca",
"thiwe"
]
}
]
},

nani:{
id:"nani",
name:"Nani",
generation:2,
house:"house3",
father:"mtalisi",
mother:"Ma Dube",

spouses:[
{
name:"Monica",
children:[
"gladmore",
"gladys"
]
}
]
},



/* ==========================
HOUSE 4
========================== */

philemon:{
id:"philemon",
name:"Philemon",
generation:2,
house:"house4",
father:"mtalisi",
mother:"Malele",

spouses:[
{
name:"Ma Sibanda",
children:[
"hopewell",
"irine",
"danford"
]
},
{
name:"Ma Dube",
children:[
"brighton",
"xolani"
]
}
]
},



/* ==========================
GENERATION 3
========================== */

rita:{
id:"rita",
name:"Rita",
generation:3,
father:"msindo",
mother:"Ma Sibanda",
spouses:[]
},

dorothy:{
id:"dorothy",
name:"Dorothy",
generation:3,
father:"msindo",
mother:"Ma Sibanda",
spouses:[]
},

robert:{
id:"robert",
name:"Robert",
generation:3,
father:"msindo",
mother:"Ma Sibanda",
spouses:[]
},

ebbie:{
id:"ebbie",
name:"Ebbie",
generation:3,
father:"msindo",
mother:"Ma Sibanda",
spouses:[]
},

nehemiah:{
id:"nehemiah",
name:"Nehemiah",
generation:3,
father:"msindo",
mother:"Sofi",
spouses:[]
},

jabu:{
id:"jabu",
name:"Jabu",
generation:3,
father:"msindo",
mother:"Sofi",
spouses:[]
},

henry:{
id:"henry",
name:"Henry",
generation:3,
father:"hlanya",
mother:"Lezzie",
spouses:[]
},

harvey:{
id:"harvey",
name:"Harvey",
generation:3,
father:"hlanya",
mother:"Lezzie",
spouses:[]
},

playford:{
id:"playford",
name:"Playford",
generation:3,
father:"hlanya",
mother:"Lezzie",
spouses:[]
},

mgoli:{
id:"mgoli",
name:"Mgoli",
generation:3,
father:"baleni",
mother:"Ma Ngwenya",
spouses:[]
},

bhoyi:{
id:"bhoyi",
name:"Bhoyi",
generation:3,
father:"baleni",
mother:"Ma Ngwenya",
spouses:[]
},

sikhangezile:{
id:"sikhangezile",
name:"Sikhangezile",
generation:3,
father:"phawuli",
mother:"MaDongola",
spouses:[]
},

nkosana:{
id:"nkosana",
name:"Nkosana",
generation:3,
father:"phawuli",
mother:"MaDongola",
spouses:[]
},

zale:{
id:"zale",
name:"Zale",
generation:3,
father:"ganda",
mother:"Ma Dube",
spouses:[]
},

rebecca:{
id:"rebecca",
name:"Rebecca",
generation:3,
father:"ganda",
mother:"Ma Dube",
spouses:[]
},

thiwe:{
id:"thiwe",
name:"Thiwe",
generation:3,
father:"ganda",
mother:"Ma Dube",
status:"late",
spouses:[]
},

gladmore:{
id:"gladmore",
name:"Gladmore",
generation:3,
father:"nani",
mother:"Monica",
spouses:[]
},

gladys:{
id:"gladys",
name:"Gladys",
generation:3,
father:"nani",
mother:"Monica",
status:"late",
spouses:[]
},

hopewell:{
id:"hopewell",
name:"Hopewell",
generation:3,
father:"philemon",
mother:"Ma Sibanda",
spouses:[]
},

irine:{
id:"irine",
name:"Irine",
generation:3,
father:"philemon",
mother:"Ma Sibanda",
spouses:[]
},

danford:{
id:"danford",
name:"Danford",
generation:3,
father:"philemon",
mother:"Ma Sibanda",
spouses:[]
},

brighton:{
id:"brighton",
name:"Brighton",
generation:3,
father:"philemon",
mother:"Ma Dube",
spouses:[]
},

xolani:{
id:"xolani",
name:"Xolani",
generation:3,
father:"philemon",
mother:"Ma Dube",
spouses:[]
}

};



function getPerson(id){
return family[id];
}

function getChildren(id){

const p=family[id];

if(!p||!p.spouses)
return [];

return p.spouses
.flatMap(
s=>s.children
)
.map(
c=>family[c]
)
.filter(Boolean);

}

function getSpouses(id){

return (
family[id]
?.spouses
||[]
);

}

function generations(){

return Object.values(
family
).reduce((acc,p)=>{

if(
!acc[p.generation]
)
acc[p.generation]=[];

acc[p.generation]
.push(
p
);

return acc;

},{});

}
```

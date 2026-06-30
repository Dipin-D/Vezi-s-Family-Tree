```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta
name="viewport"
content="width=device-width, initial-scale=1.0"
/>

<title>Inzalo KaMtalisi • Family Tree</title>

<script src="https://cdn.tailwindcss.com"></script>

<script>
tailwind.config = {
theme:{
extend:{
colors:{
heritage:{
50:"#fcfaf6",
100:"#f7f3e9",
200:"#eadcc5",
300:"#d6ba91",
400:"#c28d57",
500:"#a96d39",
600:"#875228",
700:"#6a3f1f",
800:"#4f3018",
900:"#311c10"
},
house1:"#991b1b",
house2:"#1e40af",
house3:"#047857",
house4:"#b45309"
}
}
}
}
</script>

<style>

html,
body{
height:100%;
overflow:hidden;
}

.tree-grid{
background-image:
linear-gradient(#f4f4f4 1px, transparent 1px),
linear-gradient(90deg,#f4f4f4 1px,transparent 1px);

background-size:
40px 40px;
}

.person{
transition:.2s;
}

.person:hover{
transform:translateY(-2px);
}

.connector{
stroke:#d7c8b4;
stroke-width:2;
fill:none;
}

.selected{
outline:4px solid #c28d57;
}

.scroll-hidden::-webkit-scrollbar{
display:none;
}

</style>
</head>

<body class="bg-heritage-50">

<!-- HEADER -->

<header
class="h-20
bg-heritage-900
text-white
border-b
border-heritage-700
flex
items-center
justify-between
px-8"
>

<div>

<div class="uppercase text-xs tracking-[4px] text-heritage-300">
Family Archive
</div>

<h1
class="text-3xl
font-bold
font-serif"
>
INZALO KAMTALISI
</h1>

</div>

<div class="flex gap-3">

<button
id="fitBtn"
class="px-4 py-2 rounded bg-heritage-700"
>
Fit
</button>

<button
id="expandBtn"
class="px-4 py-2 rounded bg-heritage-700"
>
Expand
</button>

<button
id="collapseBtn"
class="px-4 py-2 rounded bg-heritage-700"
>
Collapse
</button>

</div>

</header>



<!-- TOOLBAR -->

<section
class="
h-16
bg-white
border-b
flex
items-center
gap-4
px-6
"
>

<input
id="searchInput"
placeholder="Search family members..."
class="
flex-1
max-w-xl
border
rounded-lg
px-4
py-2
"
/>

<select
id="houseFilter"
class="
border
rounded-lg
px-3
py-2
"
>

<option value="all">
All Houses
</option>

<option value="house1">
House 1
</option>

<option value="house2">
House 2
</option>

<option value="house3">
House 3
</option>

<option value="house4">
House 4
</option>

</select>

<div
class="
flex
gap-2
"
>

<button
data-zoom="in"
class="zoomBtn px-4 py-2 rounded bg-heritage-100"
>
＋
</button>

<button
data-zoom="out"
class="zoomBtn px-4 py-2 rounded bg-heritage-100"
>
－
</button>

</div>

</section>



<!-- MAIN -->

<main
class="
h-[calc(100vh-144px)]
grid
grid-cols-[1fr_380px]
"
>

<!-- TREE AREA -->

<section
id="treeArea"
class="
relative
overflow-hidden
tree-grid
"
>

<div
id="treeViewport"
class="
absolute
inset-0
cursor-grab
"
>

<svg
id="connections"
class="
absolute
inset-0
w-full
h-full
pointer-events-none
"
>
</svg>

<div
id="treeRoot"
class="
absolute
left-0
top-0
origin-top-left
"
>
</div>

</div>

</section>



<!-- SIDE PANEL -->

<aside
class="
bg-white
border-l
flex
flex-col
"
>

<div
class="
p-6
border-b
"
>

<div
class="
uppercase
text-xs
tracking-[2px]
text-stone-500
"
>
Member Profile
</div>

<h2
id="memberName"
class="
text-3xl
font-bold
mt-2
"
>
Select Member
</h2>

<div
id="memberGeneration"
class="
text-sm
text-stone-500
"
>
—
</div>

</div>



<div
class="
flex-1
overflow-y-auto
p-6
space-y-6
scroll-hidden
"
>

<div>

<div class="text-xs uppercase text-stone-500">
Father
</div>

<div id="memberFather">
—
</div>

</div>



<div>

<div class="text-xs uppercase text-stone-500">
Mother
</div>

<div id="memberMother">
—
</div>

</div>



<div>

<div class="text-xs uppercase text-stone-500">
Spouses
</div>

<div
id="memberSpouses"
class="space-y-2"
>
—
</div>

</div>



<div>

<div class="text-xs uppercase text-stone-500">
Children
</div>

<div
id="memberChildren"
class="
flex
flex-wrap
gap-2
"
>
—
</div>

</div>



<div>

<div class="text-xs uppercase text-stone-500">
Notes
</div>

<textarea
id="notes"
class="
w-full
h-32
border
rounded-lg
p-3
"
></textarea>

</div>

</div>

</aside>

</main>



<!-- FOOTER -->

<footer
class="
hidden
"
>
Family Explorer
</footer>



<script src="family-data.js"></script>

<script src="app.js"></script>

</body>
</html>
```

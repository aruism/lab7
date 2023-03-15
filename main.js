
console.log(document);

let title = document.createElement("title");
title.innerText = "Lab7";
document.head.appendChild(title);
//Deleting Hello World h1 tag
let helloworld = document.querySelector("h1"); 
helloworld.remove();

//Adding Lab7 h1 tag
let h1 = document.createElement("h1");
h1.style.color = "blue";
h1.innerText = "Lab7 Assignment";
document.body.appendChild(h1);

//Function to Add hr
function add_hr(){
    let hr = document.createElement("hr");
    document.body.appendChild(hr);
}
add_hr();

//Function to Add Task h2 tag
function add_h2(inner){
    let h2 = document.createElement("h2");
    h2.innerText = inner;
    h2.style.color = "red";
    document.body.appendChild(h2);
}
add_h2("Task");

//Function to add Paragraphs
function add_p(inner){
    let p1 = document.createElement("p");
    p1.innerHTML = inner;
    document.body.appendChild(p1);
}
add_p("In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:");

//Function to Add ul
function add_ul1(){
    let ul = document.createElement("ul");
    document.body.appendChild(ul);
    li_even("find elements in the DOM (<b>5 points</b>);",ul);
    li_odd("create/add/remove elements (<b>5 points</b>);",ul);
    li_even("change content of the elements (<b>5 points</b>);",ul);
    li_odd("change styles of the elements (<b>5 points</b>);",ul);
    li_even("change attributes of the elements (<b>5 points</b>);",ul);
    li_odd("change classes of the elements (<b>5 points</b>).",ul);
}
add_ul1();

//Function to add even list elements
function li_even(inner, ul){
    let li = document.createElement("li");
    li.innerHTML = inner;
    li.setAttribute('class','even');
    ul.appendChild(li);
}

//Function to add odd list elements
function li_odd(inner, ul){
    let li = document.createElement("li");
    li.innerHTML = inner;
    li.setAttribute('class','odd');
    ul.appendChild(li);
}

add_p(" ");
add_hr();
add_h2("Submission");
add_p("To submit your work, follow these instructions:");


function add_ul2(){
    let ul = document.createElement("ul");
    document.body.appendChild(ul);
    li_even("Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).",ul);
    li_odd("Clone this repository to your local machine and work inside it.",ul);
    li_even("Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with \"Hello, World!\" message (<b>1 point</b>).",ul);
    li_odd("Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).",ul);
    li_even("Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).",ul);
    li_odd("Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).",ul);
    li_even("After you finish your work, submit it to the Github (<b>2 points</b>).",ul);
}
add_ul2();
add_hr();

//Changing Styles of Li
const even = document.querySelectorAll("li.even");
for (let i = 0; i < even.length; i++) {
  even[i].style.color = "green";
}

const odd = document.querySelectorAll("li.odd");
for (let i = 0; i < odd.length; i++) {
  odd[i].style.color = "purple";
}



console.log(document);
    
const courses = [

{code:"WDD130",name:"Web Fundamentals",credits:2,completed:true},
{code:"WDD131",name:"Dynamic Web Fundamentals",credits:2,completed:true},
{code:"WDD231",name:"Web Frontend Development",credits:2,completed:false},
{code:"CSE110",name:"Programming Building Blocks",credits:2,completed:true},
{code:"CSE111",name:"Programming with Functions",credits:2,completed:false}

];

const container = document.querySelector("#courses");
const creditSpan = document.querySelector("#credits");

function displayCourses(courseList){

container.innerHTML="";

courseList.forEach(course => {

let card=document.createElement("div");

card.classList.add("course");

if(course.completed){
card.classList.add("completed");
}

card.textContent=`${course.code} - ${course.name}`;

container.appendChild(card);

});

const totalCredits = courseList.reduce((sum,c)=>sum + c.credits,0);

creditSpan.textContent = totalCredits;

}

displayCourses(courses);

document.querySelector("#all").addEventListener("click",()=>{
displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click",()=>{
displayCourses(courses.filter(course => course.code.includes("WDD")));
});

document.querySelector("#cse").addEventListener("click",()=>{
displayCourses(courses.filter(course => course.code.includes("CSE")));
});
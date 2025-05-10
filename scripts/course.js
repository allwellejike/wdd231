const courses = [
    {code: "CSE 110",type: "CSE", credits: 3},
    {code: "WDD 130",type: "WDD", credits: 3},
    {code: "CSE 111",type: "CSE", credits: 3},
    {code: "CSE 210",type: "CSE", credits: 4},
    {code: "WDD 131",type: "WDD", credits: 3},
    {code: "WDD 231",type: "WDD", credits: 3},
];

function displayCourses(filter) {
    const courseList =
    document.getElementById("course-list");
    const totalCredits =
    document.getElementById("totalCredits");

    let filtered = courses;

    if (filter !== "all") {
        filtered = courses.filter(course=> course.type === filter);

    }

    let html = '';
    let credits= 0;

    filtered.forEach(course=>{
        html += <button 
        class="course-btn $
        {course.type}">${course.code}</button>;
        credits+= course.credits;
    });

    courseList.innerHTML = html;
    totalCredits.textContent = credits;
}

function filterCourses(type) {
    displayCourses(type);
}

//On page load
window.addEventListener("DOMContentLoaded",()=>{
    displayCourses("all");
});

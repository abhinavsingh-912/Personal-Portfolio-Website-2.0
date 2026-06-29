// Dark Mode Toggle

const themeBtn =
document.getElementById("themeBtn");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }

});


// Show / Hide Content

function toggleContent(){

    const content =
    document.getElementById("aboutContent");

    if(content.style.display === "none"){
        content.style.display = "block";
    }else{
        content.style.display = "none";
    }
}


// Image Slider

const images = [
    "image1.jpeg",
    "image2.jpeg",
    "image3.jpeg"
];

let currentIndex = 0;

function nextImage(){

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    document.getElementById("slider").src =
    images[currentIndex];
}

function prevImage(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    document.getElementById("slider").src =
    images[currentIndex];
}


// To-Do List

function addTask(){

    const input =
    document.getElementById("taskInput");

    const taskText =
    input.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const li =
    document.createElement("li");

    li.innerHTML =
    `${taskText}
    <button onclick="this.parentElement.remove()">
    Remove
    </button>`;

    document.getElementById("taskList")
    .appendChild(li);

    input.value = "";
}


// Contact Form Validation

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const message =
    document.getElementById("message").value.trim();

    if(name === ""){
        document.getElementById("nameError").textContent =
        "Name is required";
        valid = false;
    }

    if(!email.includes("@")){
        document.getElementById("emailError").textContent =
        "Enter a valid email";
        valid = false;
    }

    if(message.length < 10){
        document.getElementById("messageError").textContent =
        "Message should be at least 10 characters";
        valid = false;
    }

    if(valid){

        document.getElementById("successMessage")
        .textContent =
        "Message Sent Successfully!";

        this.reset();
    }

});
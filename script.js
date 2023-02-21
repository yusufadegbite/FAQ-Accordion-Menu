var item1 = document.querySelector(".first");
var item2 = document.querySelector(".second");
var item3 = document.querySelector(".third");
var item4 = document.querySelector(".fourth");
var item5 = document.querySelector(".fifth");


item1.addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.getElementById("option1");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
    var rotate = document.getElementById("arrow1");
    if (rotate.style.transform === "rotate(180deg)") {
        rotate.style.transform = "rotate(0deg)";
    } else {
        rotate.style.transform = "rotate(180deg)";
    }
});

item2.addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.getElementById("option2");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
    var rotate = document.getElementById("arrow2");
    if (rotate.style.transform === "rotate(180deg)") {
        rotate.style.transform = "rotate(0deg)";
    } else {
        rotate.style.transform = "rotate(180deg)";
    }
});

item3.addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.getElementById("option3");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
    var rotate = document.getElementById("arrow3");
    if (rotate.style.transform === "rotate(180deg)") {
        rotate.style.transform = "rotate(0deg)";
    } else {
        rotate.style.transform = "rotate(180deg)";
    }
});

item4.addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.getElementById("option4");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
    var rotate = document.getElementById("arrow4");
    if (rotate.style.transform === "rotate(180deg)") {
        rotate.style.transform = "rotate(0deg)";
    } else {
        rotate.style.transform = "rotate(180deg)";
    }
});

item5.addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.getElementById("option5");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
    var rotate = document.getElementById("arrow5");
    if (rotate.style.transform === "rotate(180deg)") {
        rotate.style.transform = "rotate(0deg)";
    } else {
        rotate.style.transform = "rotate(180deg)";
    }
});



// ======================================================
// QUIZLAND ADVENTURE
// SCRIPT.JS
// ======================================================

// ---------- HOME ----------
const homeScreen = document.getElementById("homeScreen");
const profileScreen = document.getElementById("profileScreen");
const menuScreen = document.getElementById("menuScreen");

// ---------- BUTTONS ----------
const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");
const backHome = document.getElementById("backHome");

const settingsBtn = document.getElementById("settingsBtn");
const settingsModal = document.getElementById("settingsModal");
const closeModal = document.querySelector(".close");
const fullscreenToggle = document.getElementById("fullscreenToggle");
const notificationBox = document.getElementById("notificationBox");

// ---------- STUDENT ----------
const studentName = document.getElementById("studentName");

// ---------- AVATARS ----------
const avatars = document.querySelectorAll(".avatar-card");

// ---------- LESSON ----------
const lessonScreen = document.getElementById("lessonScreen");
const lessonButtons = document.querySelectorAll(".lesson-btn");
const progressFill = document.getElementById("progressFill");
const lessonTitle = document.getElementById("lessonTitle");
const lessonImage = document.getElementById("lessonImage");
const lessonLetter = document.getElementById("lessonLetter");
const lessonWord = document.getElementById("lessonWord");
const lessonFeedback = document.getElementById("lessonFeedback");
const voiceBtn = document.getElementById("voiceBtn");
const previousLesson = document.getElementById("previousLesson");
const nextLesson = document.getElementById("nextLesson");
const lessonHomeBtn = document.getElementById("lessonHomeBtn");

let selectedAvatar = null;

// ======================================================
// SCREEN NAVIGATION
// ======================================================

function hideAllScreens() {

    document.querySelectorAll(".screen").forEach(screen => {

        screen.classList.remove("active");

    });

}

function showScreen(screen) {

    hideAllScreens();

    screen.classList.add("active");

}

// ======================================================
// START BUTTON
// ======================================================

startBtn.addEventListener("click", () => {

    showScreen(profileScreen);

});

// ======================================================
// CONTINUE BUTTON
// ======================================================

continueBtn.addEventListener("click", () => {

    const name = studentName.value.trim();

    if (name === "") {

        alert("Please enter your name.");

        studentName.focus();

        return;

    }

    localStorage.setItem("studentName", name);

    if (selectedAvatar !== null) {

        localStorage.setItem("avatar", selectedAvatar);

    }

    showScreen(menuScreen);

    setTimeout(() => {

        showNotification("Welcome, " + name + "! Let's start learning!");

    }, 300);

});

// ======================================================
// BACK HOME
// ======================================================

backHome.addEventListener("click", () => {

    showScreen(homeScreen);

});

// ======================================================
// SETTINGS
// ======================================================

settingsBtn.addEventListener("click", () => {

    settingsModal.style.display = "flex";

});

closeModal.addEventListener("click", () => {

    settingsModal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === settingsModal) {

        settingsModal.style.display = "none";

    }

});


// FULLSCREENNNNNNNNNNN


function updateFullscreenCheckbox() {

    if (fullscreenToggle) {

        fullscreenToggle.checked = !!document.fullscreenElement;

    }

}

function setFullscreen(enabled) {

    if (!fullscreenToggle) return;

    if (enabled) {

        if (!document.fullscreenElement) {

            document.documentElement.requestFullscreen().catch((err) => {

                console.warn("Fullscreen request failed:", err);

                fullscreenToggle.checked = false;

                localStorage.setItem("fullscreenEnabled", "false");

            });

        }

    } else {

        if (document.fullscreenElement) {

            document.exitFullscreen().catch((err) => {

                console.warn("Fullscreen exit failed:", err);

            });

        }

    }

}

if (fullscreenToggle) {

    fullscreenToggle.addEventListener("change", () => {

        const enabled = fullscreenToggle.checked;

        localStorage.setItem("fullscreenEnabled", enabled ? "true" : "false");

        setFullscreen(enabled);

    });

}

window.addEventListener("fullscreenchange", updateFullscreenCheckbox);

function showNotification(message, duration = 2800) {

    if (!notificationBox) return;

    notificationBox.textContent = message;

    notificationBox.classList.add("show");

    notificationBox.classList.remove("hidden");

    clearTimeout(notificationBox.hideTimer);

    notificationBox.hideTimer = setTimeout(() => {

        notificationBox.classList.remove("show");

        notificationBox.classList.add("hidden");

    }, duration);

}

if (notificationBox) {

    notificationBox.addEventListener("click", () => {

        notificationBox.classList.remove("show");

        notificationBox.classList.add("hidden");

    });

}

// ======================================================
// AVATAR SELECTION
// ======================================================

avatars.forEach((avatar, index) => {

    avatar.addEventListener("click", () => {

        avatars.forEach(a => {

            a.style.border = "4px solid transparent";

        });

        avatar.style.border = "4px solid #ffb703";

        selectedAvatar = index + 1;

    });

});



// ======================================================
// LOAD SAVED DATA
// ======================================================

window.onload = () => {

    const savedName = localStorage.getItem("studentName");

    if (savedName) {

        studentName.value = savedName;

    }

    const savedAvatar = localStorage.getItem("avatar");

    if (savedAvatar) {

        avatars[savedAvatar - 1].style.border = "4px solid #ffb703";

        selectedAvatar = savedAvatar;

    }

    const savedFullscreen = localStorage.getItem("fullscreenEnabled") === "true";

    if (fullscreenToggle) {

        fullscreenToggle.checked = savedFullscreen;

    }

};

// ======================================================
// SIMPLE BUTTON ANIMATION
// ======================================================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mousedown", () => {

        button.style.transform = "scale(0.95)";

    });

    button.addEventListener("mouseup", () => {

        button.style.transform = "scale(1)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

// ======================================================
// END OF PART 1
// ======================================================

// ======================================================
// PART 2 - UNIVERSAL LESSON ENGINE
// Supports Alphabet, Numbers, Colors and Shapes
// ======================================================

// -------------------------------
// LESSON DATA
// -------------------------------

const lessons = {

    alphabet: [
        {title:"Alphabet Lesson",letter:"A",word:"Apple",image:"images/alphabet/apple.png"},
        {title:"Alphabet Lesson",letter:"B",word:"Ball",image:"images/alphabet/ball.png"},
        {title:"Alphabet Lesson",letter:"C",word:"Cat",image:"images/alphabet/cat.png"},
        {title:"Alphabet Lesson",letter:"D",word:"Dog",image:"images/alphabet/dog.png"},
        {title:"Alphabet Lesson",letter:"E",word:"Elephant",image:"images/alphabet/elephant.png"},
        {title:"Alphabet Lesson",letter:"F",word:"Fish",image:"images/alphabet/fish.png"},
        {title:"Alphabet Lesson",letter:"G",word:"Grapes",image:"images/alphabet/grapes.png"},
        {title:"Alphabet Lesson",letter:"H",word:"Hat",image:"images/alphabet/hat.png"},
        {title:"Alphabet Lesson",letter:"I",word:"Ice Cream",image:"images/alphabet/icecream.png"},
        {title:"Alphabet Lesson",letter:"J",word:"Juice",image:"images/alphabet/juice.png"},
        {title:"Alphabet Lesson",letter:"K",word:"Kite",image:"images/alphabet/kite.png"},
        {title:"Alphabet Lesson",letter:"L",word:"Lion",image:"images/alphabet/lion.png"},
        {title:"Alphabet Lesson",letter:"M",word:"Monkey",image:"images/alphabet/monkey.png"},
        {title:"Alphabet Lesson",letter:"N",word:"Nest",image:"images/alphabet/nest.png"},
        {title:"Alphabet Lesson",letter:"O",word:"Orange",image:"images/alphabet/orange.png"},
        {title:"Alphabet Lesson",letter:"P",word:"Pig",image:"images/alphabet/pig.png"},
        {title:"Alphabet Lesson",letter:"Q",word:"Queen",image:"images/alphabet/queen.png"},
        {title:"Alphabet Lesson",letter:"R",word:"Rabbit",image:"images/alphabet/rabbit.png"},
        {title:"Alphabet Lesson",letter:"S",word:"Sun",image:"images/alphabet/sun.png"},
        {title:"Alphabet Lesson",letter:"T",word:"Tiger",image:"images/alphabet/tiger.png"},
        {title:"Alphabet Lesson",letter:"U",word:"Umbrella",image:"images/alphabet/umbrella.png"},
        {title:"Alphabet Lesson",letter:"V",word:"Van",image:"images/alphabet/van.png"},
        {title:"Alphabet Lesson",letter:"W",word:"Whale",image:"images/alphabet/whale.png"},
        {title:"Alphabet Lesson",letter:"X",word:"Xylophone",image:"images/alphabet/xylophone.png"},
        {title:"Alphabet Lesson",letter:"Y",word:"Yo-Yo",image:"images/alphabet/yoyo.png"},
        {title:"Alphabet Lesson",letter:"Z",word:"Zebra",image:"images/alphabet/zebra.png"}
    ],

    numbers: [
        {title:"Numbers Lesson",letter:"1",word:"One",image:"images/numbers/1.png"},
        {title:"Numbers Lesson",letter:"2",word:"Two",image:"images/numbers/2.png"},
        {title:"Numbers Lesson",letter:"3",word:"Three",image:"images/numbers/3.png"},
        {title:"Numbers Lesson",letter:"4",word:"Four",image:"images/numbers/4.png"},
        {title:"Numbers Lesson",letter:"5",word:"Five",image:"images/numbers/5.png"},
        {title:"Numbers Lesson",letter:"6",word:"Six",image:"images/numbers/6.png"},
        {title:"Numbers Lesson",letter:"7",word:"Seven",image:"images/numbers/7.png"},
        {title:"Numbers Lesson",letter:"8",word:"Eight",image:"images/numbers/8.png"},
        {title:"Numbers Lesson",letter:"9",word:"Nine",image:"images/numbers/9.png"},
        {title:"Numbers Lesson",letter:"10",word:"Ten",image:"images/numbers/10.png"}
    ],

    colors: [
        {title:"Colors Lesson",letter:"🟥",word:"Red",image:"images/colors/red.png"},
        {title:"Colors Lesson",letter:"🟦",word:"Blue",image:"images/colors/blue.png"},
        {title:"Colors Lesson",letter:"🟨",word:"Yellow",image:"images/colors/yellow.png"},
        {title:"Colors Lesson",letter:"🟩",word:"Green",image:"images/colors/green.png"},
        {title:"Colors Lesson",letter:"🟧",word:"Orange",image:"images/colors/orange.png"},
        {title:"Colors Lesson",letter:"🟪",word:"Purple",image:"images/colors/purple.png"},
        {title:"Colors Lesson",letter:"⚫",word:"Black",image:"images/colors/black.png"},
        {title:"Colors Lesson",letter:"⚪",word:"White",image:"images/colors/white.png"},
        {title:"Colors Lesson",letter:"🟫",word:"Brown",image:"images/colors/brown.png"},
        {title:"Colors Lesson",letter:"🌸",word:"Pink",image:"images/colors/pink.png"}
    ],

    shapes: [
        {title:"Shapes Lesson",letter:"⬤",word:"Circle",image:"images/shapes/circle.png"},
        {title:"Shapes Lesson",letter:"■",word:"Square",image:"images/shapes/square.png"},
        {title:"Shapes Lesson",letter:"▲",word:"Triangle",image:"images/shapes/triangle.png"},
        {title:"Shapes Lesson",letter:"▭",word:"Rectangle",image:"images/shapes/rectangle.png"},
        {title:"Shapes Lesson",letter:"⭐",word:"Star",image:"images/shapes/star.png"},
        {title:"Shapes Lesson",letter:"❤️",word:"Heart",image:"images/shapes/heart.png"},
        {title:"Shapes Lesson",letter:"⬟",word:"Pentagon",image:"images/shapes/pentagon.png"},
        {title:"Shapes Lesson",letter:"⬢",word:"Hexagon",image:"images/shapes/hexagon.png"},
        {title:"Shapes Lesson",letter:"💎",word:"Diamond",image:"images/shapes/diamond.png"},
        {title:"Shapes Lesson",letter:"🥚",word:"Oval",image:"images/shapes/oval.png"}
    ]

};

// -------------------------------
// ENGINE
// -------------------------------

let currentCategory = "alphabet";
let currentLesson = 0;

function loadLesson() {

    const lesson = lessons[currentCategory][currentLesson];

    lessonTitle.textContent = lesson.title;
    lessonLetter.textContent = lesson.letter;
    lessonWord.textContent = lesson.word;
    lessonImage.src = lesson.image;

    const progress =
        ((currentLesson + 1) /
        lessons[currentCategory].length) * 100;

    progressFill.style.width = progress + "%";

    if (lessonFeedback) {
        lessonFeedback.textContent =
            "Lesson " + (currentLesson + 1) + " of " +
            lessons[currentCategory].length + " — " +
            lesson.word + ".";
    }
}

function openLesson(category){

    currentCategory = category;
    currentLesson = 0;

    loadLesson();

    showScreen(lessonScreen);
}

// -------------------------------
// MENU BUTTONS
// -------------------------------

lessonButtons[0].onclick = () => openLesson("alphabet");
lessonButtons[1].onclick = () => openLesson("numbers");
lessonButtons[2].onclick = () => openLesson("colors");
lessonButtons[3].onclick = () => openLesson("shapes");

// -------------------------------
// NEXT
// -------------------------------

nextLesson.onclick = () => {

    if(currentLesson < lessons[currentCategory].length - 1){

        currentLesson++;
        loadLesson();

    }else{

        speechSynthesis.cancel();

        alert("🎉 You finished the " +
              currentCategory +
              " lesson!");

        // Part 3 will open the quiz here.
        showScreen(menuScreen);

    }

};

// -------------------------------
// PREVIOUS
// -------------------------------

previousLesson.onclick = () => {

    if(currentLesson > 0){

        currentLesson--;
        loadLesson();

    }

};

// -------------------------------
// SPEAK
// -------------------------------

voiceBtn.onclick = () => {

    speechSynthesis.cancel();

    const lesson = lessons[currentCategory][currentLesson];

    const speech = new SpeechSynthesisUtterance(
        lesson.letter + " is " + lesson.word
    );

    speech.rate = 0.8;
    speech.pitch = 1.1;

    speechSynthesis.speak(speech);

};

// -------------------------------
// BACK TO MENU
// -------------------------------

lessonHomeBtn.onclick = () => {

    speechSynthesis.cancel();
    showScreen(menuScreen);

};

// ======================================================
// PART 2D-1
// Lesson Improvements
// ======================================================

// -------------------------------
// Update Navigation Buttons
// -------------------------------

function updateLessonButtons() {

    // Disable Previous on first lesson
    previousLesson.disabled = (currentLesson === 0);

    // Change Next -> Finish
    if (currentLesson === lessons[currentCategory].length - 1) {

        nextLesson.innerHTML = "Finish ✔";

    } else {

        nextLesson.innerHTML = "Next ➜";

    }

}

// -------------------------------
// Improve loadLesson()
// -------------------------------

const originalLoadLesson = loadLesson;

loadLesson = function () {

    lessonContainerAnimation();

    originalLoadLesson();

    updateLessonButtons();

}

// -------------------------------
// Fade Animation
// -------------------------------

function lessonContainerAnimation() {

    lessonImage.classList.remove("fade");
    lessonLetter.classList.remove("fade");
    lessonWord.classList.remove("fade");

    void lessonImage.offsetWidth;

    lessonImage.classList.add("fade");
    lessonLetter.classList.add("fade");
    lessonWord.classList.add("fade");

}

// -------------------------------
// Image Fallback
// -------------------------------

lessonImage.onerror = function () {

    lessonImage.src = "images/no-image.png";

};

// -------------------------------
// Better Voice
// -------------------------------

voiceBtn.onclick = () => {

    speechSynthesis.cancel();

    const lesson = lessons[currentCategory][currentLesson];

    let sentence = "";

    switch (currentCategory) {

        case "alphabet":

            sentence =
                lesson.letter +
                " is for " +
                lesson.word;

            break;

        case "numbers":

            sentence =
                "Number " +
                lesson.letter +
                ". " +
                lesson.word;

            break;

        case "colors":

            sentence =
                "This color is " +
                lesson.word;

            break;

        case "shapes":

            sentence =
                "This shape is a " +
                lesson.word;

            break;

    }

    const speech = new SpeechSynthesisUtterance(sentence);

    speech.rate = 0.8;
    speech.pitch = 1.1;
    speech.volume = 1;

    speechSynthesis.speak(speech);

};

// -------------------------------
// Keyboard Support
// -------------------------------

document.addEventListener("keydown", (event) => {

    if (!lessonScreen.classList.contains("active")) return;

    switch (event.key) {

        case "ArrowRight":

            nextLesson.click();

            break;

        case "ArrowLeft":

            previousLesson.click();

            break;

        case " ":

            event.preventDefault();

            voiceBtn.click();

            break;

    }

});

// -------------------------------
// Welcome Voice
// -------------------------------

function welcomeLessonVoice() {

    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(

        "Welcome! Let's start learning."

    );

    speech.rate = 0.9;
    speech.pitch = 1.2;

    speechSynthesis.speak(speech);

}

// -------------------------------
// Replace openLesson()
// -------------------------------

const oldOpenLesson = openLesson;

openLesson = function(category){

    oldOpenLesson(category);

    updateLessonButtons();

    setTimeout(() => {

        welcomeLessonVoice();

    },300);

};

// -------------------------------
// Auto Stop Voice
// -------------------------------

window.addEventListener("beforeunload",()=>{

    speechSynthesis.cancel();

});

// ======================================================
// END PART 2D-1
// ======================================================


// ======================================================
// PART 2D-2
// Lesson Completion & Quiz Transition
// ======================================================

// -------------------------------
// Quiz Screen
// -------------------------------

const quizScreen = document.getElementById("quizScreen");

// Current category for quiz
let quizCategory = "";

// -------------------------------
// Save Lesson Progress
// -------------------------------

function saveLessonProgress() {

    let progress = JSON.parse(localStorage.getItem("lessonProgress")) || {};

    progress[currentCategory] = true;

    localStorage.setItem(
        "lessonProgress",
        JSON.stringify(progress)
    );

}

// -------------------------------
// Student Progress
// -------------------------------

function saveStudentProgress() {

    let completed =
        Number(localStorage.getItem("completedLessons")) || 0;

    completed++;

    localStorage.setItem(
        "completedLessons",
        completed
    );

}

// -------------------------------
// Finish Lesson
// -------------------------------

function finishLesson() {

    speechSynthesis.cancel();

    saveLessonProgress();

    saveStudentProgress();

    quizCategory = currentCategory;

    setTimeout(() => {

        showScreen(quizScreen);

        initializeQuiz();

    },400);

}

// -------------------------------
// Replace Next Button
// -------------------------------

nextLesson.onclick = () => {

    if(currentLesson < lessons[currentCategory].length - 1){

        currentLesson++;

        loadLesson();

        return;

    }

    finishLesson();

};

// -------------------------------
// Quiz Placeholder
// -------------------------------

function initializeQuiz(){

    document.getElementById("quizTitle").textContent =
        currentCategory.charAt(0).toUpperCase() +
        currentCategory.slice(1) +
        " Quiz";

    document.getElementById("quizQuestion").textContent =
        "Loading Quiz...";

    document.getElementById("currentScore").textContent = "0";

    document.getElementById("questionNumber").textContent =
        "Question 1";

    document.getElementById("quizFeedback").textContent = "";

    document.getElementById("quizProgressFill").style.width = "0%";

}

// -------------------------------
// Congratulation Voice
// -------------------------------

function congratulateStudent(){

    speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(

            "Great job! Let's answer the quiz."

        );

    speech.rate = .9;
    speech.pitch = 1.2;

    speechSynthesis.speak(speech);

}

// -------------------------------
// Speak before Quiz
// -------------------------------

const oldFinishLesson = finishLesson;

finishLesson = function(){

    congratulateStudent();

    setTimeout(()=>{

        oldFinishLesson();

    },1800);

};

// -------------------------------
// Show Progress in Console
// -------------------------------

function showProgress(){

    const progress =
        JSON.parse(
            localStorage.getItem("lessonProgress")
        ) || {};

    console.log(progress);

}

showProgress();

// -------------------------------
// Continue Learning
// -------------------------------

function completedCategories(){

    const progress =
        JSON.parse(
            localStorage.getItem("lessonProgress")
        ) || {};

    return Object.keys(progress).length;

}

// -------------------------------
// Optional Welcome Back
// -------------------------------

window.addEventListener("load",()=>{

    const total = completedCategories();

    if(total > 0){

        console.log(
            "Completed Categories:",
            total
        );

    }

});

// ======================================================
// END OF PART 2
// ======================================================






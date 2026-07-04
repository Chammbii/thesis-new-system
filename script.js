


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
const teacherBtn = document.getElementById("teacherBtn");
const teacherScreen = document.getElementById("teacherScreen");
const teacherLoginForm = document.getElementById("teacherLoginForm");
const teacherEmail = document.getElementById("teacherEmail");
const teacherPassword = document.getElementById("teacherPassword");
const teacherConfirmPassword = document.getElementById("teacherConfirmPassword");
const teacherFullName = document.getElementById("teacherFullName");
const teacherError = document.getElementById("teacherError");
const teacherBackHome = document.getElementById("teacherBackHome");
const teacherToggleMode = document.getElementById("teacherToggleMode");
const teacherFormTitle = document.getElementById("teacherFormTitle");
const teacherFormSubtitle = document.getElementById("teacherFormSubtitle");
const teacherSwitchText = document.getElementById("teacherSwitchText");
const teacherSubmitBtn = document.getElementById("teacherSubmitBtn");
const teacherDashboard = document.getElementById("teacherDashboard");
const teacherNameDisplay = document.getElementById("teacherNameDisplay");
const teacherCompletedLessons = document.getElementById("teacherCompletedLessons");
const teacherProgressCategories = document.getElementById("teacherProgressCategories");
const teacherLogoutBtn = document.getElementById("teacherLogoutBtn");
const teacherDashboardHomeBtn = document.getElementById("teacherDashboardHomeBtn");

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
// TEACHER LOGIN BUTTON
// ======================================================

let teacherMode = "login";
let currentTeacherUsername = "Teacher";

teacherBtn.addEventListener("click", () => {

    setTeacherMode("login");
    showScreen(teacherScreen);
    clearTeacherError();
    teacherLoginForm.reset();

});

teacherBackHome.addEventListener("click", () => {

    showScreen(homeScreen);
    clearTeacherError();
    setTeacherMode("login");

});

teacherToggleMode.addEventListener("click", () => {

    setTeacherMode(teacherMode === "login" ? "register" : "login");
    clearTeacherError();
    teacherLoginForm.reset();

});

teacherLoginForm.addEventListener("submit", (event) => {

    event.preventDefault();
    if (teacherMode === "login") {
        handleTeacherLogin();
    } else {
        handleTeacherRegister();
    }

});

teacherLogoutBtn.addEventListener("click", () => {

    currentTeacherUsername = "Teacher";
    showScreen(homeScreen);
    showNotification("Teacher logged out successfully.");

});

teacherDashboardHomeBtn.addEventListener("click", () => {

    currentTeacherUsername = "Teacher";
    showScreen(homeScreen);
    showNotification("Returned to home.");

});

function clearTeacherError(){
    if (teacherError) {
        teacherError.textContent = "";
    }
}

function setTeacherMode(mode){
    teacherMode = mode;

    const isRegister = mode === "register";

    teacherFormTitle.textContent = isRegister ? "Teacher Register" : "Teacher Login";
    teacherFormSubtitle.textContent = isRegister
        ? "Create a new account to manage lessons."
        : "Enter your teacher credentials to access the dashboard.";
    teacherSubmitBtn.textContent = isRegister ? "Register" : "Login";
    teacherSwitchText.textContent = isRegister
        ? "Already have an account?"
        : "Don't have an account?";
    teacherToggleMode.textContent = isRegister ? "Login" : "Register";

    teacherConfirmPassword.classList.toggle("teacher-hidden", !isRegister);
    teacherFullName.classList.toggle("teacher-hidden", !isRegister);
}

function getTeacherUsers(){
    const raw = localStorage.getItem("teacherUsers");
    try {
        return raw ? JSON.parse(raw) : {};
    } catch (error) {
        return {};
    }
}

function saveTeacherUsers(users){
    localStorage.setItem("teacherUsers", JSON.stringify(users));
}

function handleTeacherRegister(){
    const email = teacherEmail.value.trim().toLowerCase();
    const password = teacherPassword.value;
    const confirmPassword = teacherConfirmPassword.value;
    const fullName = teacherFullName.value.trim();

    if (!email || !password || !confirmPassword || !fullName) {
        setTeacherError("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        setTeacherError("Passwords do not match.");
        return;
    }

    const users = getTeacherUsers();
    const userKey = email;

    if (users[userKey]) {
        setTeacherError("This email is already registered.");
        return;
    }

    users[userKey] = {
        email: email,
        fullName: fullName,
        password: password
    };

    saveTeacherUsers(users);
    setTeacherMode("login");
    showScreen(teacherScreen);
    teacherEmail.value = email;
    teacherPassword.value = "";
    teacherConfirmPassword.value = "";
    teacherFullName.value = "";
    teacherEmail.focus();
    showNotification("Registration successful. Please login with your new email.");
}

function handleTeacherLogin(){
    const email = teacherEmail.value.trim().toLowerCase();
    const password = teacherPassword.value;

    if (!email || !password) {
        setTeacherError("Please enter both email and password.");
        return;
    }

    const users = getTeacherUsers();
    const user = users[email];

    if (!user || user.password !== password) {
        setTeacherError("Invalid email or password.");
        return;
    }

    currentTeacherUsername = user.fullName || user.email;
    showTeacherDashboard();
    showNotification("Welcome back, " + currentTeacherUsername + "!");
}

function setTeacherError(message){
    if (teacherError) {
        teacherError.textContent = message;
    }
}

function showTeacherDashboard(){
    showScreen(teacherDashboard);
    teacherNameDisplay.textContent = currentTeacherUsername;
    teacherCompletedLessons.textContent =
        Number(localStorage.getItem("completedLessons")) || 0;
    const progress = JSON.parse(localStorage.getItem("lessonProgress")) || {};
    teacherProgressCategories.textContent =
        Object.keys(progress).length;
}

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
        {title:"Numbers Lesson",letter:"",word:"One",image:"num001.png"},
        {title:"Numbers Lesson",letter:"",word:"Two",image:"num002.png"},
        {title:"Numbers Lesson",letter:"",word:"Three",image:"num003.png"},
        {title:"Numbers Lesson",letter:"",word:"Four",image:"num004.png"},
        {title:"Numbers Lesson",letter:"",word:"Five",image:"num005.png"},
        {title:"Numbers Lesson",letter:"",word:"Six",image:"num006.png"},
        {title:"Numbers Lesson",letter:"",word:"Seven",image:"num007.png"},
        {title:"Numbers Lesson",letter:"",word:"Eight",image:"num008.png"},
        {title:"Numbers Lesson",letter:"",word:"Nine",image:"num009.png"},
        {title:"Numbers Lesson",letter:"",word:"Ten",image:"num010.png"}
    ],

    colors: [
        {title:"Colors Lesson",letter:"",word:"Red",image:"col001.png"},
        {title:"Colors Lesson",letter:"",word:"Blue",image:"col002.png"},
        {title:"Colors Lesson",letter:"",word:"Yellow",image:"col003.png"},
        {title:"Colors Lesson",letter:"",word:"Green",image:"col004.png"},
        {title:"Colors Lesson",letter:"",word:"Orange",image:"col005.png"},
        {title:"Colors Lesson",letter:"",word:"Purple",image:"col006.png"},
        {title:"Colors Lesson",letter:"",word:"Black",image:"col007.png"},
        {title:"Colors Lesson",letter:"",word:"White",image:"col008.png"},
        {title:"Colors Lesson",letter:"",word:"Brown",image:"col009.png"},
        {title:"Colors Lesson",letter:"",word:"Pink",image:"col010.png"}
    ],

    shapes: [
        {title:"Shapes Lesson",letter:"",word:"Circle",image:"sha001.png"},
        {title:"Shapes Lesson",letter:"",word:"Square",image:"sha002.png"},
        {title:"Shapes Lesson",letter:"",word:"Triangle",image:"sha003.png"},
        {title:"Shapes Lesson",letter:"",word:"Rectangle",image:"sha004.png"},
        {title:"Shapes Lesson",letter:"",word:"Star",image:"sha005.png"},
        {title:"Shapes Lesson",letter:"",word:"Heart",image:"sha006.png"},
        {title:"Shapes Lesson",letter:"",word:"Pentagon",image:"sha007.png"},
        {title:"Shapes Lesson",letter:"",word:"Hexagon",image:"sha008.png"},
        {title:"Shapes Lesson",letter:"",word:"Diamond",image:"sha009.png"},
        {title:"Shapes Lesson",letter:"",word:"Oval",image:"sha010.png"}
    ]

};

// -------------------------------
// ENGINE
// -------------------------------

let currentCategory = "alphabet";
let currentLesson = 0;

function getLessonSpeechText() {
    const lesson = lessons[currentCategory][currentLesson];

    switch (currentCategory) {
        case "alphabet":
            return `${lesson.letter} is for ${lesson.word}.`;
        case "numbers":
            return `This number is ${lesson.word}.`;
        case "colors":
            return `This color is ${lesson.word}.`;
        case "shapes":
            return `This shape is a ${lesson.word}.`;
        default:
            return lesson.word;
    }
}

function updateLessonSubtitle() {
    if (!lessonFeedback) return;

    lessonFeedback.innerHTML =
        `<span class="lesson-info">Lesson ${currentLesson + 1} of ${lessons[currentCategory].length}</span>`;
}

function speakLessonText() {
    speechSynthesis.cancel();

    const speechText = getLessonSpeechText();
    const speech = new SpeechSynthesisUtterance(speechText);

    speech.rate = 0.8;
    speech.pitch = 1.1;
    speech.volume = 1;

    speechSynthesis.speak(speech);
    showNotification(speechText, 2600);
}

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

    updateLessonSubtitle();
    speakLessonText();
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
    speakLessonText();
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
const quizTitle = document.getElementById("quizTitle");
const currentScoreEl = document.getElementById("currentScore");
const questionNumberEl = document.getElementById("questionNumber");
const quizQuestionEl = document.getElementById("quizQuestion");
const quizFeedbackEl = document.getElementById("quizFeedback");
const quizProgressFillEl = document.getElementById("quizProgressFill");
const quizVoiceBtn = document.getElementById("quizVoiceBtn");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const answerButtons = document.querySelectorAll(".answer-card");

// Current category for quiz
let quizCategory = "";
let quizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let quizComplete = false;
const QUIZ_QUESTION_COUNT = 8;

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

    quizCategory = currentCategory;
    quizScore = 0;
    currentQuizIndex = 0;
    quizAnswered = false;
    quizComplete = false;
    quizQuestions = generateQuizQuestions(quizCategory);

    quizTitle.textContent =
        quizCategory.charAt(0).toUpperCase() +
        quizCategory.slice(1) +
        " Quiz";

    currentScoreEl.textContent = "0";
    quizFeedbackEl.textContent = "";
    quizProgressFillEl.style.width = "0%";

    loadQuizQuestion();
}

function generateQuizQuestions(category){

    const items = lessons[category];
    const pool = [...items];
    const questionCount = Math.min(QUIZ_QUESTION_COUNT, pool.length);

    const shuffled = pool
        .map(item => ({item, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(entry => entry.item)
        .slice(0, questionCount);

    return shuffled.map(item => ({
        prompt: `Which one is ${item.word}?`,
        correct: item.word,
        choices: buildQuizChoices(item.word, items)
    }));
}

function buildQuizChoices(correctWord, items){

    const distractors = items
        .map(item => item.word)
        .filter(word => word !== correctWord);

    const choices = [correctWord];
    const shuffled = distractors
        .map(word => ({word, sort: Math.random()}))
        .sort((a,b) => a.sort - b.sort)
        .map(entry => entry.word);

    while(choices.length < 4 && shuffled.length){
        choices.push(shuffled.shift());
    }

    return choices
        .sort(() => Math.random() - 0.5);
}

function loadQuizQuestion(){

    const question = quizQuestions[currentQuizIndex];

    quizQuestionEl.textContent = question.prompt;
    questionNumberEl.textContent =
        `Question ${currentQuizIndex + 1} of ${quizQuestions.length}`;
    currentScoreEl.textContent = String(quizScore);
    quizProgressFillEl.style.width =
        `${Math.round((currentQuizIndex / quizQuestions.length) * 100)}%`;
    quizFeedbackEl.textContent = "";
    nextQuestionBtn.disabled = true;
    nextQuestionBtn.textContent =
        currentQuizIndex === quizQuestions.length - 1
            ? "Finish Quiz"
            : "Next Question ➜";

    answerButtons.forEach((button, index) => {
        button.disabled = false;
        button.classList.remove("correct", "wrong");
        button.textContent = question.choices[index] || "";
        button.dataset.choice = question.choices[index] || "";
    });

}

function selectQuizAnswer(button){

    if (quizAnswered || quizComplete) return;

    quizAnswered = true;

    const selected = button.dataset.choice;
    const correct = quizQuestions[currentQuizIndex].correct;
    const isCorrect = selected === correct;

    if (isCorrect) {
        button.classList.add("correct");
        quizFeedbackEl.textContent = "Correct!";
        quizScore++;
    } else {
        button.classList.add("wrong");
        quizFeedbackEl.textContent = `Oops! The correct answer is ${correct}.`;
        answerButtons.forEach(btn => {
            if (btn.dataset.choice === correct) {
                btn.classList.add("correct");
            }
        });
    }

    answerButtons.forEach(btn => btn.disabled = true);
    currentScoreEl.textContent = String(quizScore);
    nextQuestionBtn.disabled = false;
}

function finishQuiz(){

    quizComplete = true;
    quizProgressFillEl.style.width = "100%";
    quizQuestionEl.textContent = "Quiz Complete!";
    questionNumberEl.textContent =
        `Final Score: ${quizScore} / ${quizQuestions.length}`;
    quizFeedbackEl.textContent =
        `Great work, ${localStorage.getItem("studentName") || "Student"}!`;
    currentScoreEl.textContent = String(quizScore);
    nextQuestionBtn.textContent = "Back to Menu";
    nextQuestionBtn.disabled = false;
    answerButtons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove("correct", "wrong");
    });
}

quizVoiceBtn.onclick = () => {
    if (!quizQuestions.length) return;

    const text = `Question ${currentQuizIndex + 1}. ${quizQuestions[currentQuizIndex].prompt}`;
    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 0.9;
    speech.pitch = 1.1;
    speech.volume = 1;

    speechSynthesis.speak(speech);
};

nextQuestionBtn.onclick = () => {

    if (quizComplete) {
        showScreen(menuScreen);
        return;
    }

    if (!quizAnswered) {
        showNotification("Please select an answer before continuing.");
        return;
    }

    if (currentQuizIndex < quizQuestions.length - 1) {
        currentQuizIndex++;
        quizAnswered = false;
        loadQuizQuestion();
        return;
    }

    finishQuiz();
};

answerButtons.forEach(button => {
    button.addEventListener("click", () => selectQuizAnswer(button));
});

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






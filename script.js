


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
const teacherDashboardRefreshBtn = document.getElementById("teacherDashboardRefreshBtn");
const teacherStudentProgressTable = document.getElementById("teacherStudentProgressTable");
const teacherStudentCount = document.getElementById("teacherStudentCount");
const teacherTotalStars = document.getElementById("teacherTotalStars");
const teacherProgressChart = document.getElementById("teacherProgressChart");
const teacherStarsChart = document.getElementById("teacherStarsChart");
const teacherDailyStarsChart = document.getElementById("teacherDailyStarsChart");
const teacherQuizHistoryTable = document.getElementById("teacherQuizHistoryTable");
const quizHistorySubtitle = document.getElementById("quizHistorySubtitle");
let selectedHistoryStudent = null;
let sessionStarsGained = 0;

const settingsBtn = document.getElementById("settingsBtn");
const settingsModal = document.getElementById("settingsModal");
const closeModal = document.getElementById("settingsCloseBtn") || document.querySelector("#settingsModal .close");
const settingsDoneBtn = document.getElementById("settingsDoneBtn");
const floatingSettingsBtn = document.getElementById("floatingSettingsBtn");
const quizStarScoreEl = document.getElementById("quizStarScore");
const quizStarCountEl = document.getElementById("quizStarCount");
const fullscreenToggle = document.getElementById("fullscreenToggle");
const bgMusicToggle = document.getElementById("bgMusicToggle");
const bgMusicVolume = document.getElementById("bgMusicVolume");
const bgMusicVolumeValue = document.getElementById("bgMusicVolumeValue");
const sfxToggle = document.getElementById("sfxToggle");
const sfxVolume = document.getElementById("sfxVolume");
const sfxVolumeValue = document.getElementById("sfxVolumeValue");
const voiceNarrationToggle = document.getElementById("voiceNarrationToggle");
const notificationBox = document.getElementById("notificationBox");
const bgMusicElement = document.getElementById("bgMusic");
const popSound = document.getElementById("popSound");
const bgAudio = bgMusicElement || null;

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
const lessonSpeakBtn = document.getElementById("lessonSpeakBtn");
const lessonVoiceStatus = document.getElementById("lessonVoiceStatus");
const previousLesson = document.getElementById("previousLesson");
const nextLesson = document.getElementById("nextLesson");
const lessonHomeBtn = document.getElementById("lessonHomeBtn");
const languageModal = document.getElementById("languageModal");
const langEnBtn = document.getElementById("langEnBtn");
const langTlBtn = document.getElementById("langTlBtn");
const langCancelBtn = document.getElementById("langCancelBtn");

let selectedAvatar = null;
let quizStars = 0;

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
    updateStudentHud();

}

function hasStudentProfile() {
    return !!(localStorage.getItem("studentName") && localStorage.getItem("avatar"));
}

function getStudentStarsKey() {
    const student = localStorage.getItem("studentName") || "Unknown";
    return getNamespacedKey(`totalStars_${encodeURIComponent(student)}`);
}

function loadStudentStars() {
    quizStars = Number(localStorage.getItem(getStudentStarsKey())) || 0;
    updateQuizStarDisplay(false);
}

function saveStudentStars() {
    localStorage.setItem(getStudentStarsKey(), String(quizStars));
}

function updateStudentHud() {
    const active = document.querySelector(".screen.active");
    const showStars = active === menuScreen || active === lessonScreen || active === quizScreen;
    const showSettings = hasStudentProfile()
        && active !== teacherScreen
        && active !== teacherDashboard
        && active !== homeScreen
        && active !== profileScreen;

    if (quizStarScoreEl) {
        quizStarScoreEl.classList.toggle("is-visible", showStars);
        quizStarScoreEl.hidden = !showStars;
        if (showStars) loadStudentStars();
    }

    if (floatingSettingsBtn) {
        floatingSettingsBtn.classList.toggle("is-visible", showSettings);
        floatingSettingsBtn.hidden = !showSettings;
    }
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
const teacherSwitchRow = document.querySelector(".teacher-switch");

function openTeacherLoginScreen() {
    clearTeacherError();
    teacherLoginForm.reset();

    const sessionEmail = getTeacherSession();
    if (sessionEmail && getTeacherUsers()[sessionEmail]) {
        // Returning teacher: password-only unlock screen
        setTeacherMode("unlock");
        teacherEmail.value = sessionEmail;
        teacherPassword.value = "";
        teacherPassword.focus();
        return;
    }

    setTeacherMode("login");
    showScreen(teacherScreen);
}

teacherBtn.addEventListener("click", () => {
    // Always require credentials — never open the dashboard automatically.
    openTeacherLoginScreen();
    showScreen(teacherScreen);
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
    if (teacherMode === "register") {
        handleTeacherRegister();
    } else {
        // login + unlock both verify password
        handleTeacherLogin();
    }

});

teacherLogoutBtn.addEventListener("click", () => {

    currentTeacherUsername = "Teacher";
    clearTeacherSession();
    showScreen(homeScreen);
    showNotification("Teacher logged out successfully.");

});

teacherDashboardHomeBtn.addEventListener("click", () => {
    // Leave dashboard but keep classroom session for student progress tracking.
    // Re-opening Teacher Login shows password-only unlock.
    showScreen(homeScreen);
    showNotification("Dashboard locked. Enter the password to open it again.", 4000);
});

if (teacherDashboardRefreshBtn) {
    teacherDashboardRefreshBtn.addEventListener("click", () => {
        showTeacherDashboard();
        showNotification("Dashboard refreshed.");
    });
}

function clearTeacherError(){
    if (teacherError) {
        teacherError.textContent = "";
    }
}

function setTeacherMode(mode){
    teacherMode = mode;

    const isRegister = mode === "register";
    const isUnlock = mode === "unlock";

    if (isUnlock) {
        teacherFormTitle.textContent = "Enter the Password";
        teacherFormSubtitle.textContent = "";
        teacherFormSubtitle.classList.add("teacher-hidden");
        teacherSubmitBtn.textContent = "Unlock";
        teacherPassword.placeholder = "Enter the password";
        teacherLoginForm.classList.add("teacher-form--unlock");
    } else {
        teacherFormSubtitle.classList.remove("teacher-hidden");
        teacherLoginForm.classList.remove("teacher-form--unlock");
        teacherFormTitle.textContent = isRegister ? "Teacher Register" : "Teacher Login";
        teacherFormSubtitle.textContent = isRegister
            ? "Create a new account to manage lessons."
            : "Enter your teacher credentials to access the dashboard.";
        teacherSubmitBtn.textContent = isRegister ? "Register" : "Login";
        teacherPassword.placeholder = "Password";
        teacherSwitchText.textContent = isRegister
            ? "Already have an account?"
            : "Don't have an account?";
        teacherToggleMode.textContent = isRegister ? "Login" : "Register";
    }

    teacherEmail.classList.toggle("teacher-hidden", isUnlock);
    teacherConfirmPassword.classList.toggle("teacher-hidden", !isRegister);
    teacherFullName.classList.toggle("teacher-hidden", !isRegister);
    if (teacherSwitchRow) {
        teacherSwitchRow.classList.toggle("teacher-hidden", isUnlock);
    }
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

function saveTeacherSession(email){
    localStorage.setItem("teacherSession", email);
}

function clearTeacherSession(){
    localStorage.removeItem("teacherSession");
}

function getTeacherSession(){
    return localStorage.getItem("teacherSession");
}

function restoreTeacherSession(){
    // Kept for compatibility: only restores teacher name/context.
    // Never opens the dashboard without a fresh password login.
    const email = getTeacherSession();
    if (!email) {
        return false;
    }

    const users = getTeacherUsers();
    const user = users[email];
    if (!user) {
        clearTeacherSession();
        return false;
    }

    currentTeacherUsername = user.fullName || user.email;
    return true;
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
    const isUnlock = teacherMode === "unlock";
    const email = (isUnlock ? getTeacherSession() : teacherEmail.value.trim().toLowerCase()) || "";
    const password = teacherPassword.value;

    if (isUnlock) {
        if (!password) {
            setTeacherError("Please enter the password.");
            teacherPassword.focus();
            return;
        }
    } else if (!email || !password) {
        setTeacherError("Please enter both email and password.");
        return;
    }

    const users = getTeacherUsers();
    const user = users[email];

    if (!user || user.password !== password) {
        setTeacherError(isUnlock ? "Incorrect password." : "Invalid email or password.");
        teacherPassword.value = "";
        teacherPassword.focus();
        return;
    }

    currentTeacherUsername = user.fullName || user.email;
    saveTeacherSession(email);
    teacherPassword.value = "";
    showTeacherDashboard();
    showNotification("Welcome back, " + currentTeacherUsername + "!");
}

function setTeacherError(message){
    if (teacherError) {
        teacherError.textContent = message;
    }
}

function getTeacherSessionEmail() {
    return getTeacherSession();
}

function getProgressNamespace() {
    const email = getTeacherSessionEmail();
    return email ? `teacher:${email}` : "anonymous";
}

function getNamespacedKey(suffix) {
    return `studentProgress_${getProgressNamespace()}_${suffix}`;
}

function getStudentRecords() {
    const key = getNamespacedKey("studentRecords");
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveStudentRecords(records) {
    const key = getNamespacedKey("studentRecords");
    localStorage.setItem(key, JSON.stringify(records));
}

function updateCurrentStudentRecord() {
    const student = localStorage.getItem("studentName") || "Unknown";

    if (!student) return;

    const avatarIndex = Number(localStorage.getItem("avatar")) || 1;
    const completedLessons = Number(localStorage.getItem(getNamespacedKey("completedLessons"))) || 0;
    const lessonProgress = JSON.parse(localStorage.getItem(getNamespacedKey("lessonProgress"))) || {};
    const categoriesDone = Object.keys(lessonProgress).length;
    const totalCategories = Object.keys(lessons).length;
    const progressPercent = totalCategories > 0
        ? Math.round((categoriesDone / totalCategories) * 100)
        : 0;

// Per-student quiz summary (prevents everyone showing same accuracy)
    const lastQuizScoreKey = getNamespacedKey(`lastQuizScore_${encodeURIComponent(student)}`);
    const lastQuizTotalKey = getNamespacedKey(`lastQuizTotal_${encodeURIComponent(student)}`);


    const lastQuizScore = Number(localStorage.getItem(lastQuizScoreKey)) || 0;
    const lastQuizTotal = Number(localStorage.getItem(lastQuizTotalKey)) || 0;

    const accuracy = lastQuizTotal > 0
        ? Math.round((lastQuizScore / lastQuizTotal) * 100)
        : 0;

    const starsKey = getNamespacedKey(`totalStars_${encodeURIComponent(student)}`);
    const stars = Number(localStorage.getItem(starsKey)) || 0;

    const records = getStudentRecords();
    let record = records.find(r => r.name === student);

    if (!record) {
        record = {
            name: student,
            avatar: avatarIndex,
            completedLessons,
            categoriesDone,
            progressPercent,
            accuracy,
            stars,
            updatedAt: Date.now()
        };
        records.push(record);
    } else {
        record.avatar = avatarIndex;
        record.completedLessons = completedLessons;
        record.categoriesDone = categoriesDone;
        record.progressPercent = progressPercent;
        record.accuracy = accuracy;
        record.stars = stars;
        record.updatedAt = Date.now();
    }

    saveStudentRecords(records);
}

function getQuizHistoryKey(student) {
    return getNamespacedKey(`quizHistory_${encodeURIComponent(student)}`);
}

function getStudentQuizHistory(student) {
    return JSON.parse(localStorage.getItem(getQuizHistoryKey(student))) || [];
}

function saveStudentQuizHistory(student, history) {
    localStorage.setItem(getQuizHistoryKey(student), JSON.stringify(history.slice(0, 40)));
}

function appendQuizHistoryEntry(student, entry) {
    const history = getStudentQuizHistory(student);
    history.unshift(entry);
    saveStudentQuizHistory(student, history);
}

function formatQuizHistoryDate(timestamp) {
    try {
        return new Date(timestamp).toLocaleString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit"
        });
    } catch (err) {
        return "—";
    }
}

function toDateKey(timestamp = Date.now()) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function formatChartDayLabel(dateKey) {
    const [year, month, day] = dateKey.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric"
    });
}

function getDailyStarsStore() {
    return JSON.parse(localStorage.getItem(getNamespacedKey("dailyStarsByDate"))) || {};
}

function saveDailyStarsStore(store) {
    localStorage.setItem(getNamespacedKey("dailyStarsByDate"), JSON.stringify(store));
}

function recordDailyStarsEarned(gained) {
    if (!gained) return;
    const store = getDailyStarsStore();
    const day = toDateKey();
    store[day] = (Number(store[day]) || 0) + Number(gained);
    saveDailyStarsStore(store);
}

function ensureDailyStarsBackfill() {
    const flagKey = getNamespacedKey("dailyStarsBackfilled");
    if (localStorage.getItem(flagKey)) {
        return getDailyStarsStore();
    }

    const store = getDailyStarsStore();
    getStudentRecords().forEach(record => {
        getStudentQuizHistory(record.name).forEach(entry => {
            if (!entry || !entry.date) return;
            const day = toDateKey(entry.date);
            store[day] = (Number(store[day]) || 0) + (Number(entry.starsGained) || 0);
        });
    });

    saveDailyStarsStore(store);
    localStorage.setItem(flagKey, "1");
    return store;
}

function getDailyStarsChartItems(dayCount = 14) {
    const store = ensureDailyStarsBackfill();
    const items = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let offset = dayCount - 1; offset >= 0; offset--) {
        const date = new Date(today);
        date.setDate(today.getDate() - offset);
        const key = toDateKey(date.getTime());
        const value = Number(store[key]) || 0;
        items.push({
            label: formatChartDayLabel(key),
            value,
            display: String(value)
        });
    }

    return items;
}

function renderBarChart(container, items, options = {}) {
    if (!container) return;
    container.innerHTML = "";

    if (!items.length) {
        const empty = document.createElement("div");
        empty.className = "bar-chart-empty";
        empty.textContent = options.emptyText || "No student data yet.";
        container.appendChild(empty);
        return;
    }

    const maxValue = Math.max(...items.map(item => item.value), 1);

    items.forEach(item => {
        const wrap = document.createElement("div");
        wrap.className = "bar-item";
        wrap.title = `${item.label}: ${item.display}`;

        const valueLabel = document.createElement("div");
        valueLabel.className = "bar-value-label";
        valueLabel.textContent = item.display;

        const track = document.createElement("div");
        track.className = "bar-track-vertical";

        const fill = document.createElement("div");
        fill.className = `bar-fill-vertical${options.starStyle ? " is-stars" : ""}${options.dailyStyle ? " is-daily" : ""}`;
        const heightPct = Math.max(4, Math.round((item.value / maxValue) * 100));
        fill.style.height = "0%";
        track.appendChild(fill);

        const name = document.createElement("div");
        name.className = options.dailyStyle ? "bar-name bar-name--date" : "bar-name";
        name.textContent = item.label;

        wrap.appendChild(valueLabel);
        wrap.appendChild(track);
        wrap.appendChild(name);
        container.appendChild(wrap);

        requestAnimationFrame(() => {
            fill.style.height = `${heightPct}%`;
        });
    });
}

function renderTeacherCharts(records) {
    const progressItems = records.map(record => ({
        label: record.name,
        value: Number(record.progressPercent) || 0,
        display: `${Number(record.progressPercent) || 0}%`
    }));

    const starItems = records.map(record => ({
        label: record.name,
        value: Number(record.stars) || 0,
        display: String(Number(record.stars) || 0)
    }));

    renderBarChart(teacherProgressChart, progressItems, {
        emptyText: "No progress to chart yet. Students will appear after lessons."
    });
    renderBarChart(teacherStarsChart, starItems, {
        starStyle: true,
        emptyText: "No stars earned yet. Quiz wins will show up here."
    });
    renderBarChart(teacherDailyStarsChart, getDailyStarsChartItems(14), {
        dailyStyle: true,
        emptyText: "No daily star activity yet."
    });
}

function renderQuizHistory(studentName) {
    if (!teacherQuizHistoryTable) return;
    const tbody = teacherQuizHistoryTable.querySelector("tbody");
    tbody.innerHTML = "";

    if (!studentName) {
        if (quizHistorySubtitle) {
            quizHistorySubtitle.textContent = "Select a student to view every quiz attempt.";
        }
        tbody.innerHTML = `<tr class="quiz-history-empty"><td colspan="5">No student selected yet.</td></tr>`;
        return;
    }

    if (quizHistorySubtitle) {
        quizHistorySubtitle.textContent = `Quiz attempts for ${studentName}`;
    }

    const history = getStudentQuizHistory(studentName);
    if (!history.length) {
        tbody.innerHTML = `<tr class="quiz-history-empty"><td colspan="5">No quiz history yet for ${studentName}.</td></tr>`;
        return;
    }

    history.forEach(entry => {
        const row = document.createElement("tr");
        const category = (entry.category || "quiz").charAt(0).toUpperCase() + (entry.category || "quiz").slice(1);
        row.innerHTML = `
            <td>${formatQuizHistoryDate(entry.date)}</td>
            <td>${category}</td>
            <td>${entry.score} / ${entry.total}</td>
            <td>${entry.accuracy}%</td>
            <td>+${entry.starsGained || 0} ★</td>
        `;
        tbody.appendChild(row);
    });
}

function renderTeacherStudentProgress() {
    if (!teacherStudentProgressTable) return;
    const tbody = teacherStudentProgressTable.querySelector("tbody");
    tbody.innerHTML = "";
    const records = getStudentRecords();
    const totalCategories = Object.keys(lessons).length;

    records.sort((a, b) => b.updatedAt - a.updatedAt);

    if (teacherStudentCount) teacherStudentCount.textContent = String(records.length);
    if (teacherTotalStars) {
        const totalStars = records.reduce((sum, record) => sum + (Number(record.stars) || 0), 0);
        teacherTotalStars.textContent = String(totalStars);
    }

    renderTeacherCharts(records);

    if (!records.length) {
        tbody.innerHTML = `<tr class="quiz-history-empty"><td colspan="6">No students tracked yet.</td></tr>`;
        renderQuizHistory(null);
        return;
    }

    records.forEach(record => {
        const row = document.createElement("tr");
        if (selectedHistoryStudent === record.name) {
            row.classList.add("is-selected");
        }

        const nameTd = document.createElement("td");
        nameTd.textContent = record.name;

        const avatarTd = document.createElement("td");
        const img = document.createElement("img");
        img.src = `avatar00${record.avatar}.png`;
        img.alt = `Avatar ${record.avatar}`;
        img.className = "student-avatar-cell";
        avatarTd.appendChild(img);

        const progressTd = document.createElement("td");
        progressTd.textContent = `${record.categoriesDone}/${totalCategories} (${record.progressPercent}%)`;

        const accuracyTd = document.createElement("td");
        accuracyTd.textContent = `${record.accuracy}%`;

        const starsTd = document.createElement("td");
        starsTd.textContent = `★ ${record.stars || 0}`;

        const actionsTd = document.createElement("td");
        const actionsWrap = document.createElement("div");
        actionsWrap.className = "tdash-row-actions";

        const historyBtn = document.createElement("button");
        historyBtn.textContent = "History";
        historyBtn.className = "tdash-btn tdash-btn--soft";
        historyBtn.type = "button";
        historyBtn.addEventListener("click", () => {
            selectedHistoryStudent = record.name;
            renderTeacherStudentProgress();
            renderQuizHistory(record.name);
            const panel = document.getElementById("quizHistoryPanel");
            if (panel) panel.scrollIntoView({ behavior: "smooth", block: "start" });
        });

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "tdash-btn tdash-btn--danger";
        removeBtn.type = "button";
        removeBtn.addEventListener("click", () => {
            removeStudentRecord(record.name);
            if (selectedHistoryStudent === record.name) {
                selectedHistoryStudent = null;
            }
            renderTeacherStudentProgress();
            renderQuizHistory(selectedHistoryStudent);
            showNotification(`${record.name} has been removed.`);
        });

        actionsWrap.appendChild(historyBtn);
        actionsWrap.appendChild(removeBtn);
        actionsTd.appendChild(actionsWrap);

        row.appendChild(nameTd);
        row.appendChild(avatarTd);
        row.appendChild(progressTd);
        row.appendChild(accuracyTd);
        row.appendChild(starsTd);
        row.appendChild(actionsTd);
        tbody.appendChild(row);
    });

    if (selectedHistoryStudent) {
        renderQuizHistory(selectedHistoryStudent);
    }
}

function removeStudentRecord(studentName) {
    const records = getStudentRecords().filter(record => record.name !== studentName);
    saveStudentRecords(records);
    localStorage.removeItem(getQuizHistoryKey(studentName));
}

function showTeacherDashboard(){
    showScreen(teacherDashboard);
    teacherNameDisplay.textContent = currentTeacherUsername;

    const completed = Number(localStorage.getItem(getNamespacedKey("completedLessons"))) || 0;
    teacherCompletedLessons.textContent = completed;

    const progress = JSON.parse(localStorage.getItem(getNamespacedKey("lessonProgress"))) || {};
    teacherProgressCategories.textContent = Object.keys(progress).length;

    renderTeacherStudentProgress();
}

// ======================================================
// CONTINUE BUTTON
// ======================================================

continueBtn.addEventListener("click", () => {

    const name = studentName.value.trim();

    if (name === "") {

        const msg = "Please enter your name.";
        showNotification(msg);
        speakText(msg);

        studentName.focus();

        return;

    }

    localStorage.setItem("studentName", name);

    if (selectedAvatar === null) {

        const msg = "Please select an avatar.";
        showNotification(msg);
        speakText(msg);
        return;

    }

    localStorage.setItem("avatar", selectedAvatar);

    updateCurrentStudentRecord();

    showScreen(menuScreen);

    setTimeout(() => {

        const msg = `Welcome, ${name}! Let's start learning!`;
        showNotification(msg);
        speakText(msg);

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

function closeSettingsModal() {
    if (settingsModal) settingsModal.style.display = "none";
}

function updateVolumeLabel(input, label) {
    if (!input || !label) return;
    label.textContent = `${input.value}%`;
}

function openSettingsModal() {
    updateVolumeLabel(bgMusicVolume, bgMusicVolumeValue);
    updateVolumeLabel(sfxVolume, sfxVolumeValue);
    if (settingsModal) settingsModal.style.display = "flex";
}

settingsBtn.addEventListener("click", openSettingsModal);

if (floatingSettingsBtn) {
    floatingSettingsBtn.addEventListener("click", openSettingsModal);
}

if (closeModal) {
    closeModal.addEventListener("click", closeSettingsModal);
}

if (settingsDoneBtn) {
    settingsDoneBtn.addEventListener("click", closeSettingsModal);
}

window.addEventListener("click", (e) => {

    if (e.target === settingsModal) {
        closeSettingsModal();
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

function isSfxEnabled() {
    return sfxToggle ? sfxToggle.checked : false;
}

function updateSfxVolume() {
    if (!popSound || !sfxVolume) return;
    popSound.volume = Number(sfxVolume.value) / 100;
}

function isVoiceNarrationEnabled() {
    if (voiceNarrationToggle) return !!voiceNarrationToggle.checked;
    const saved = localStorage.getItem("voiceNarrationEnabled");
    return saved === null ? true : saved === "true";
}

function applyVoiceNarrationSetting(enabled) {
    if (voiceNarrationToggle) {
        voiceNarrationToggle.checked = enabled;
    }
    localStorage.setItem("voiceNarrationEnabled", enabled ? "true" : "false");
    if (!enabled) {
        speechSynthesis.cancel();
    }
}

// Female kid voice for all app narration (Web Speech API)
const KID_VOICE_DEFAULTS = {
    rate: 0.95,
    pitch: 1.55,
    volume: 1
};

let cachedSpeechVoices = [];

function refreshSpeechVoices() {
    if (!window.speechSynthesis) return;
    cachedSpeechVoices = speechSynthesis.getVoices() || [];
}

function scoreKidFemaleVoice(voice, langPref) {
    const name = (voice.name || "").toLowerCase();
    const lang = (voice.lang || "").toLowerCase();
    let score = 0;

    // Prefer matching language (en / fil / tl)
    if (langPref === "fil" || langPref === "tl") {
        if (lang.startsWith("fil") || lang.startsWith("tl") || lang.includes("ph")) score += 40;
        else if (lang.startsWith("en")) score += 15;
    } else if (lang.startsWith("en")) {
        score += 40;
    }

    // Strong female / child voice name hints
    const kidHints = ["girl", "child", "kid", "junior", "little", "young"];
    const femaleHints = [
        "female", "zira", "samantha", "victoria", "karen", "moira", "fiona",
        "tessa", "veena", "aria", "jenny", "sara", "susan", "hazel", "catherine",
        "helen", "linda", "michelle", "natasha", "allison", "ava", "emma",
        "google uk english female", "google us english"
    ];
    const maleHints = ["male", "david", "mark", "james", "thomas", "daniel", "george", "ravi", "fred"];

    if (kidHints.some(h => name.includes(h))) score += 50;
    if (femaleHints.some(h => name.includes(h))) score += 35;
    if (maleHints.some(h => name.includes(h))) score -= 60;
    if (name.includes("natural") || name.includes("neural")) score += 8;
    if (voice.localService) score += 5;

    return score;
}

function getKidFemaleVoice(lang) {
    refreshSpeechVoices();
    if (!cachedSpeechVoices.length) return null;

    const langPref = (lang || "en-US").toLowerCase().startsWith("fil") ||
        (lang || "").toLowerCase().startsWith("tl")
        ? "fil"
        : "en";

    let best = null;
    let bestScore = -Infinity;

    for (const voice of cachedSpeechVoices) {
        const score = scoreKidFemaleVoice(voice, langPref);
        if (score > bestScore) {
            bestScore = score;
            best = voice;
        }
    }

    // Require at least a mild female/english match; otherwise still return best
    return best;
}

function applyKidFemaleVoice(utterance, options = {}) {
    const lang = options.lang || (selectedLanguage === "tl" ? "fil-PH" : "en-US");
    utterance.lang = lang;
    utterance.rate = options.rate ?? KID_VOICE_DEFAULTS.rate;
    utterance.pitch = options.pitch ?? KID_VOICE_DEFAULTS.pitch;
    utterance.volume = options.volume ?? KID_VOICE_DEFAULTS.volume;

    const voice = getKidFemaleVoice(lang);
    if (voice) {
        utterance.voice = voice;
        // Keep utterance.lang aligned with the chosen voice when possible
        if (voice.lang) utterance.lang = voice.lang;
    }
    return utterance;
}

if (window.speechSynthesis) {
    refreshSpeechVoices();
    speechSynthesis.onvoiceschanged = refreshSpeechVoices;
}

function speakText(text, options = {}) {
    return new Promise(resolve => {
        if (!text || !isVoiceNarrationEnabled()) {
            resolve();
            return;
        }
        speechSynthesis.cancel();
        const speech = new SpeechSynthesisUtterance(text);
        applyKidFemaleVoice(speech, {
            rate: options.rate ?? KID_VOICE_DEFAULTS.rate,
            pitch: options.pitch ?? KID_VOICE_DEFAULTS.pitch,
            volume: options.volume ?? KID_VOICE_DEFAULTS.volume,
            lang: options.lang
        });
        speech.onend = resolve;
        speech.onerror = resolve;
        speechSynthesis.speak(speech);
    });
}

// ======================================================
// MICROPHONE PERMISSION (request early while using the site)
// ======================================================
// Browsers cannot silently grant the mic without the user clicking Allow once.
// We request it on first interaction so Speak Answer works immediately after.

let micPermissionState = "unknown";
let micPermissionRequestInFlight = null;

async function checkMicrophonePermissionState() {
    try {
        if (navigator.permissions && navigator.permissions.query) {
            const status = await navigator.permissions.query({ name: "microphone" });
            micPermissionState = status.state;
            status.onchange = () => {
                micPermissionState = status.state;
            };
            return status.state;
        }
    } catch (err) {
        // Some browsers block microphone permission queries.
    }
    return micPermissionState;
}

async function ensureMicrophoneAccess(options = {}) {
    const { silent = false } = options;

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        if (!silent) {
            showNotification(
                selectedLanguage === "tl"
                    ? "Hindi available ang mikropono sa browser na ito."
                    : "Microphone is not available in this browser.",
                4000
            );
        }
        return false;
    }

    if (micPermissionRequestInFlight) {
        return micPermissionRequestInFlight;
    }

    const current = await checkMicrophonePermissionState();
    if (current === "granted") {
        return true;
    }

    micPermissionRequestInFlight = (async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true
                }
            });
            // Stop tracks right away — permission stays allowed for this site.
            stream.getTracks().forEach(track => track.stop());
            micPermissionState = "granted";
            localStorage.setItem("micPermissionGranted", "true");
            if (!silent) {
                showNotification(
                    selectedLanguage === "tl"
                        ? "Mikropono ay pinapayagan na."
                        : "Microphone is allowed.",
                    2200
                );
            }
            return true;
        } catch (err) {
            micPermissionState = "denied";
            if (!silent) {
                showNotification(
                    selectedLanguage === "tl"
                        ? "Paki-allow ang mikropono para sa Speak Answer."
                        : "Please allow the microphone for Speak Answer.",
                    4500
                );
            }
            return false;
        } finally {
            micPermissionRequestInFlight = null;
        }
    })();

    return micPermissionRequestInFlight;
}

function requestMicrophoneOnVisit() {
    // First click/tap/key on the page triggers the browser Allow prompt.
    const unlockMic = () => {
        ensureMicrophoneAccess({ silent: true });
    };

    document.addEventListener("pointerdown", unlockMic, { once: true, capture: true });
    document.addEventListener("keydown", unlockMic, { once: true, capture: true });

    // If permission was already granted earlier, refresh state quietly.
    checkMicrophonePermissionState().then(state => {
        if (state === "granted" || localStorage.getItem("micPermissionGranted") === "true") {
            micPermissionState = "granted";
        }
    });
}

function speakQuizQuestion() {
    if (!quizQuestions.length) return;
    const prefix = selectedLanguage === 'tl'
        ? `Tanong ${currentQuizIndex + 1}. `
        : `Question ${currentQuizIndex + 1}. `;
    const text = prefix + quizQuestions[currentQuizIndex].prompt;
    speakText(text);
}

function speakQuizFeedback(isCorrect, correctAnswer) {
    const translatedAnswer = selectedLanguage === 'tl' ? translateWord(correctAnswer) : correctAnswer;
    return speakText(
        isCorrect
            ? (selectedLanguage === 'tl' ? "Tama! Mahusay." : "Correct! Great job.")
            : (selectedLanguage === 'tl'
                ? `Ayaw! Ang tamang sagot ay ${translatedAnswer}.`
                : `Oops, that's wrong. The correct answer is ${correctAnswer}.`)
    );
}

function playPopSound() {
    if (!popSound || !isSfxEnabled()) return;
    popSound.currentTime = 0;
    popSound.play().catch(() => {
        // button sound blocked until user interaction is allowed
    });
}

function updateBgMusic() {
    if (!bgAudio) return;
    const enabled = bgMusicToggle ? bgMusicToggle.checked : false;
    const volume = bgMusicVolume ? Number(bgMusicVolume.value) / 100 : 0.6;

    bgAudio.volume = volume;

    if (!enabled) {
        bgAudio.pause();
        return;
    }

    bgAudio.play().catch(() => {
        // autoplay may be blocked until user interacts with the page
    });
}

if (bgMusicToggle) {
    bgMusicToggle.addEventListener("change", updateBgMusic);
}

if (bgMusicVolume) {
    bgMusicVolume.addEventListener("input", () => {
        updateVolumeLabel(bgMusicVolume, bgMusicVolumeValue);
        updateBgMusic();
    });
}

if (sfxToggle) {
    sfxToggle.addEventListener("change", playPopSound);
}

if (sfxVolume) {
    sfxVolume.addEventListener("input", () => {
        updateVolumeLabel(sfxVolume, sfxVolumeValue);
        updateSfxVolume();
    });
}

if (voiceNarrationToggle) {
    voiceNarrationToggle.addEventListener("change", () => {
        applyVoiceNarrationSetting(voiceNarrationToggle.checked);
        if (voiceNarrationToggle.checked) {
            speakText(
                selectedLanguage === "tl"
                    ? "Naka-on ang voice narration."
                    : "Voice narration is on."
            );
        }
    });
}

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

    // Do not auto-restore avatar selection; user must re-select an avatar each session.
    // const savedAvatar = localStorage.getItem("avatar");


    const savedFullscreen = localStorage.getItem("fullscreenEnabled") === "true";

    if (fullscreenToggle) {

        fullscreenToggle.checked = savedFullscreen;

    }

    const savedVoiceNarration = localStorage.getItem("voiceNarrationEnabled");
    applyVoiceNarrationSetting(savedVoiceNarration === null ? true : savedVoiceNarration === "true");

    updateBgMusic();
    updateSfxVolume();
    updateVolumeLabel(bgMusicVolume, bgMusicVolumeValue);
    updateVolumeLabel(sfxVolume, sfxVolumeValue);
    updateStudentHud();
    requestMicrophoneOnVisit();
    document.addEventListener("click", () => {
        updateBgMusic();
        playPopSound();
        ensureMicrophoneAccess({ silent: true });
    }, { once: true });
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

document.addEventListener("click", () => {
    playPopSound();
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
        {title:"Alphabet Lesson",letter:"A",word:"Apple",image:"alpha001.png"},
        {title:"Alphabet Lesson",letter:"B",word:"Ball",image:"alpha002.png"},
        {title:"Alphabet Lesson",letter:"C",word:"Cat",image:"alpha003.png"},
        {title:"Alphabet Lesson",letter:"D",word:"Dog",image:"alpha004.png"},
        {title:"Alphabet Lesson",letter:"E",word:"Elephant",image:"alpha005.png"},
        {title:"Alphabet Lesson",letter:"F",word:"Fish",image:"alpha006.png"},
        {title:"Alphabet Lesson",letter:"G",word:"Grapes",image:"alpha007.png"},
        {title:"Alphabet Lesson",letter:"H",word:"Hat",image:"alpha008.png"},
        {title:"Alphabet Lesson",letter:"I",word:"Ice Cream",image:"alpha009.png"},
        {title:"Alphabet Lesson",letter:"J",word:"Juice",image:"alpha010.png"},
        {title:"Alphabet Lesson",letter:"K",word:"Kite",image:"alpha011.png"},
        {title:"Alphabet Lesson",letter:"L",word:"Lion",image:"alpha012.png"},
        {title:"Alphabet Lesson",letter:"M",word:"Monkey",image:"alpha013.png"},
        {title:"Alphabet Lesson",letter:"N",word:"Nest",image:"alpha014.png"},
        {title:"Alphabet Lesson",letter:"O",word:"Orange",image:"alpha015.png"},
        {title:"Alphabet Lesson",letter:"P",word:"Pig",image:"alpha016.png"},
        {title:"Alphabet Lesson",letter:"Q",word:"Queen",image:"alpha017.png"},
        {title:"Alphabet Lesson",letter:"R",word:"Rabbit",image:"alpha018.png"},
        {title:"Alphabet Lesson",letter:"S",word:"Sun",image:"alpha019.png"},
        {title:"Alphabet Lesson",letter:"T",word:"Tiger",image:"alpha020.png"},
        {title:"Alphabet Lesson",letter:"U",word:"Umbrella",image:"alpha021.png"},
        {title:"Alphabet Lesson",letter:"V",word:"Van",image:"alpha022.png"},
        {title:"Alphabet Lesson",letter:"W",word:"Whale",image:"alpha023.png"},
        {title:"Alphabet Lesson",letter:"X",word:"Xylophone",image:"alpha024.png"},
        {title:"Alphabet Lesson",letter:"Y",word:"Yo-Yo",image:"alpha025.png"},
        {title:"Alphabet Lesson",letter:"Z",word:"Zebra",image:"alpha026.png"}
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

const translationMap = {
    Apple: "Mansanas",
    Ball: "Bola",
    Cat: "Pusa",
    Dog: "Aso",
    Elephant: "Elepante",
    Fish: "Isda",
    Grapes: "Ubas",
    Hat: "Sumbrero",
    "Ice Cream": "Sorbetes",
    Juice: "Katas",
    Kite: "Saranggola",
    Lion: "Leon",
    Monkey: "Unggoy",
    Nest: "Pugad",
    Orange: "Kahel",
    Pig: "Baboy",
    Queen: "Reyna",
    Rabbit: "Kuneho",
    Sun: "Araw",
    Tiger: "Tigre",
    Umbrella: "Payong",
    Van: "Banyahan",
    Whale: "Balyena",
    Xylophone: "Silipono",
    "Yo-Yo": "Yo-Yo",
    Zebra: "Zebra",
    One: "Isa",
    Two: "Dalawa",
    Three: "Tatlo",
    Four: "Apat",
    Five: "Lima",
    Six: "Anim",
    Seven: "Pito",
    Eight: "Walo",
    Nine: "Siyam",
    Ten: "Sampu",
    Red: "Pula",
    Blue: "Asul",
    Yellow: "Dilaw",
    Green: "Berde",
    Orange: "Kahel",
    Purple: "Ube",
    Black: "Itim",
    White: "Puti",
    Brown: "Kayumanggi",
    Pink: "Rosas",
    Circle: "Bilog",
    Square: "Parisukat",
    Triangle: "Tatsulok",
    Rectangle: "Parihaba",
    Star: "Bituin",
    Heart: "Puso",
    Pentagon: "Pentagon",
    Hexagon: "Heksagon",
    Diamond: "Diyamante",
    Oval: "Obalo"
};

const titleTranslations = {
    alphabet: "Aral ng Alpabeto",
    numbers: "Aral ng Numero",
    colors: "Aral ng Kulay",
    shapes: "Aral ng Hugis"
};

const quizTitleTranslations = {
    alphabet: "Pagsusulit ng Alpabeto",
    numbers: "Pagsusulit ng Numero",
    colors: "Pagsusulit ng Kulay",
    shapes: "Pagsusulit ng Hugis"
};

function translateWord(word) {
    if (selectedLanguage === 'tl') {
        return translationMap[word] || word;
    }
    return word;
}

function translateLessonTitle(category) {
    if (selectedLanguage === 'tl') {
        return titleTranslations[category] || lessons[category][0].title;
    }
    return lessons[category][0].title;
}

function translateLessonProgress(count, total) {
    if (selectedLanguage === 'tl') {
        return `Aralin ${count} ng ${total}`;
    }
    return `Lesson ${count} of ${total}`;
}

let currentCategory = "alphabet";
let currentLesson = 0;

function getLessonSpeechText() {
    const lesson = lessons[currentCategory][currentLesson];
    const localizedWord = translateWord(lesson.word);

    if (selectedLanguage === 'tl') {
        switch (currentCategory) {
            case "alphabet": {
                const letter = lesson.letter;
                return currentLesson % 2 === 0
                    ? `Tingnan! Ito ang letrang ${letter}. Masasabi mo ba ang "${letter}"?`
                    : `Ito ang letrang ${letter}. Sabihin natin ang "${letter}" nang magkasama!`;
            }
            case "numbers": {
                const digit = currentLesson + 1;
                return `Ito ang numerong ${digit}. Masasabi mo ba, "${localizedWord}"?`;
            }
            case "colors":
                return `Tingnan! Ang kulay na ito ay ${localizedWord}. Masasabi mo ba, "${localizedWord}"?`;
            case "shapes":
                return `Tingnan! Ang hugis na ito ay ${localizedWord}. Masasabi mo ba, "${localizedWord}"?`;
            default:
                return localizedWord;
        }
    }

    switch (currentCategory) {
        case "alphabet": {
            const letter = lesson.letter;
            return currentLesson % 2 === 0
                ? `Look! It's the letter ${letter}. Can you say "${letter}"?`
                : `This is the letter ${letter}. Let's say "${letter}" together!`;
        }
        case "numbers": {
            const digit = currentLesson + 1;
            return `This is the number ${digit}. Can you say, "${lesson.word}"?`;
        }
        case "colors":
            return `Look! This color is ${lesson.word}. Can you say, "${lesson.word}"?`;
        case "shapes":
            return `Look! This shape is ${lesson.word}. Can you say, "${lesson.word}"?`;
        default:
            return lesson.word;
    }
}

function updateLessonSubtitle() {
    if (!lessonFeedback) return;

    lessonFeedback.innerHTML =
        `<span class="lesson-info">${translateLessonProgress(currentLesson + 1, lessons[currentCategory].length)}</span>`;
}


// ======================================================
// LESSON VOICE INTERACTION (SPEAK ANSWER)
// ======================================================

// ======================================================
// LESSON VOICE INTERACTION (SPEAK ANSWER)
// ======================================================

// ======================================================
// LESSON VOICE INTERACTION (SPEAK ANSWER)
// ======================================================
// ======================================================
// LESSON VOICE INTERACTION (SPEAK ANSWER)
// ======================================================





// ======================================================
// LESSON VOICE INTERACTION (SPEAK ANSWER)
// ======================================================

const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
let lessonSpeechRecognition = null;
let lessonVoiceListening = false;
let lessonVoiceRewardedKeys = null;

// Extra spoken forms the recognizer may produce (English + Filipino + near-misses)
const VOICE_ANSWER_ALIASES = {
    // Alphabet letters
    A: ["a", "ay", "ey", "letter a", "letra a", "ei"],
    B: ["b", "bee", "be", "letter b", "letra b", "bi"],
    C: ["c", "see", "sea", "si", "letter c", "letra c"],
    D: ["d", "dee", "di", "letter d", "letra d"],
    E: ["e", "ee", "letter e", "letra e"],
    F: ["f", "ef", "eff", "letter f", "letra f"],
    G: ["g", "jee", "ji", "letter g", "letra g"],
    H: ["h", "aitch", "eych", "eytch", "letter h", "letra h", "eyts"],
    I: ["i", "eye", "ay", "letter i", "letra i"],
    J: ["j", "jay", "jey", "letter j", "letra j"],
    K: ["k", "kay", "key", "letter k", "letra k"],
    L: ["l", "el", "ell", "letter l", "letra l"],
    M: ["m", "em", "letter m", "letra m"],
    N: ["n", "en", "letter n", "letra n"],
    O: ["o", "oh", "letter o", "letra o"],
    P: ["p", "pee", "pi", "letter p", "letra p"],
    Q: ["q", "cue", "kyu", "queue", "letter q", "letra q"],
    R: ["r", "ar", "are", "letter r", "letra r"],
    S: ["s", "es", "ess", "letter s", "letra s"],
    T: ["t", "tee", "ti", "letter t", "letra t"],
    U: ["u", "you", "yu", "letter u", "letra u"],
    V: ["v", "vee", "vi", "letter v", "letra v"],
    W: ["w", "double u", "doubleu", "double you", "letter w", "letra w", "dabalyu"],
    X: ["x", "ex", "eks", "letter x", "letra x"],
    Y: ["y", "why", "wai", "letter y", "letra y"],
    Z: ["z", "zee", "zed", "zi", "letter z", "letra z"],

    // Alphabet words
    Apple: ["apple", "apal", "aple", "mansanas", "mansana"],
    Ball: ["ball", "bol", "bola", "bowl"],
    Cat: ["cat", "kat", "pusa", "pusang"],
    Dog: ["dog", "dag", "aso", "dawg"],
    Elephant: ["elephant", "elefant", "elepante", "elefante"],
    Fish: ["fish", "fis", "isda", "fishy"],
    Grapes: ["grapes", "grape", "greps", "ubas", "ubas"],
    Hat: ["hat", "het", "sombrero"],
    "Ice Cream": ["ice cream", "icecream", "ice-cream", "ayskrim", "ice", "cream"],
    Juice: ["juice", "jus", "juce", "katas"],
    Kite: ["kite", "kayt", "saranggola", "saranggola"],
    Lion: ["lion", "lyon", "leon", "liyon"],
    Monkey: ["monkey", "monki", "unggoy", "matzing"],
    Nest: ["nest", "nes", "pugad"],
    Orange: ["orange", "oranj", "orenj", "kahel", "dalandan"],
    Pig: ["pig", "piggy", "baboy"],
    Queen: ["queen", "kwin", "reyna", "reina"],
    Rabbit: ["rabbit", "rabit", "kuneho", "bunny"],
    Sun: ["sun", "son", "araw"],
    Tiger: ["tiger", "tayger", "tigre"],
    Umbrella: ["umbrella", "umbrela", "payong"],
    Van: ["van", "ban", "banyahan"],
    Whale: ["whale", "weyl", "weil", "balyena", "baleine"],
    Xylophone: ["xylophone", "zylophone", "silipono", "xylfone", "zylofone"],
    "Yo-Yo": ["yo-yo", "yoyo", "yo yo", "yo"],
    Zebra: ["zebra", "zeebra", "zebraa"],

    // Numbers
    One: ["one", "1", "won", "isa", "uno", "wan"],
    Two: ["two", "2", "too", "to", "dalawa", "duwa", "dos"],
    Three: ["three", "3", "tree", "free", "tatlo", "tres"],
    Four: ["four", "4", "for", "fore", "apat", "kwatro", "quatro"],
    Five: ["five", "5", "fife", "lima", "singko", "cinco"],
    Six: ["six", "6", "siks", "anim", "says", "seis"],
    Seven: ["seven", "7", "sevn", "pito", "syete", "siete"],
    Eight: ["eight", "8", "ate", "ait", "walo", "otso", "ocho"],
    Nine: ["nine", "9", "nayn", "siyam", "nuwebe", "nueve"],
    Ten: ["ten", "10", "tin", "sampu", "diyis", "diez", "dies"],

    // Colors
    Red: ["red", "read", "rad", "pula", "pulang", "rojo"],
    Blue: ["blue", "blu", "bloo", "asul", "azul", "bughaw"],
    Yellow: ["yellow", "yelo", "yellow", "dilaw", "dilaw", "amarillo"],
    Green: ["green", "grin", "berde", "verde", "lunti"],
    // Orange already listed above
    Purple: ["purple", "purpl", "purpel", "ube", "lila", "violet", "morado"],
    Black: ["black", "blak", "itim", "negro", "dark"],
    White: ["white", "wite", "puti", "blanco", "blanc"],
    Brown: ["brown", "braun", "kayumanggi", "kayumangi", "tsokolate", "chocolate"],
    Pink: ["pink", "pinck", "rosas", "rosa", "pinkish"],

    // Shapes
    Circle: ["circle", "sirkel", "circl", "bilog", "round", "circulo"],
    Square: ["square", "skwer", "parisukat", "kwadrado", "cuadro"],
    Triangle: ["triangle", "trayangle", "triangel", "tatsulok", "triangulo"],
    Rectangle: ["rectangle", "rektangle", "parihaba", "rektanggulo", "rectangulo"],
    Star: ["star", "ster", "bituin", "bituing", "estrella"],
    Heart: ["heart", "hart", "puso", "corazon"],
    Pentagon: ["pentagon", "pentagono", "5 sides", "five sides"],
    Hexagon: ["hexagon", "heksagon", "hexagono", "6 sides", "six sides"],
    Diamond: ["diamond", "daymond", "diyamante", "rhombus", "diamante"],
    Oval: ["oval", "ovel", "obalo", "ellipse", "egg shape", "egg"]
};

function normalizeSpokenText(text) {
    return String(text || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function levenshteinDistance(a, b) {
    const rows = a.length + 1;
    const cols = b.length + 1;
    const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let i = 0; i < rows; i++) matrix[i][0] = i;
    for (let j = 0; j < cols; j++) matrix[0][j] = j;

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }

    return matrix[a.length][b.length];
}

function speechSimilarity(a, b) {
    if (!a || !b) return 0;
    if (a === b) return 1;
    const distance = levenshteinDistance(a, b);
    return 1 - distance / Math.max(a.length, b.length);
}

function getLessonVoiceRewardKey() {
    const lesson = lessons[currentCategory][currentLesson];
    return `${currentCategory}:${lesson.word}:${lesson.letter || ""}`;
}

function getLessonVoiceRewardsStore() {
    if (lessonVoiceRewardedKeys) return lessonVoiceRewardedKeys;
    const student = localStorage.getItem("studentName") || "Unknown";
    const raw = localStorage.getItem(getNamespacedKey(`lessonVoiceStars_${encodeURIComponent(student)}`));
    try {
        lessonVoiceRewardedKeys = raw ? JSON.parse(raw) : {};
    } catch (err) {
        lessonVoiceRewardedKeys = {};
    }
    return lessonVoiceRewardedKeys;
}

function saveLessonVoiceRewardsStore() {
    const student = localStorage.getItem("studentName") || "Unknown";
    localStorage.setItem(
        getNamespacedKey(`lessonVoiceStars_${encodeURIComponent(student)}`),
        JSON.stringify(getLessonVoiceRewardsStore())
    );
}

function hasLessonVoiceStarBeenAwarded() {
    return !!getLessonVoiceRewardsStore()[getLessonVoiceRewardKey()];
}

function markLessonVoiceStarAwarded() {
    const store = getLessonVoiceRewardsStore();
    store[getLessonVoiceRewardKey()] = true;
    saveLessonVoiceRewardsStore();
}

function getExpectedVoiceAnswers() {
    const lesson = lessons[currentCategory][currentLesson];
    const answers = new Set();

    const addAnswer = (value) => {
        const normalized = normalizeSpokenText(value);
        if (normalized) answers.add(normalized);
    };

    const addWithAliases = (key) => {
        if (!key) return;
        addAnswer(key);
        const aliases = VOICE_ANSWER_ALIASES[key];
        if (aliases) aliases.forEach(addAnswer);
        const translated = translationMap[key];
        if (translated) addAnswer(translated);
    };

    if (currentCategory === "alphabet") {
        addWithAliases(lesson.letter);
        addWithAliases(lesson.word);
        addAnswer(`letter ${lesson.letter}`);
        addAnswer(`letra ${lesson.letter}`);
    } else if (currentCategory === "numbers") {
        addWithAliases(lesson.word);
        addAnswer(String(currentLesson + 1));
    } else {
        addWithAliases(lesson.word);
    }

    return [...answers];
}

function isSpokenAnswerCorrect(spokenRaw) {
    const spoken = normalizeSpokenText(spokenRaw);
    if (!spoken) return false;

    const expectedList = getExpectedVoiceAnswers();
    const spokenTokens = spoken.split(" ").filter(Boolean);

    for (const expected of expectedList) {
        if (spoken === expected) return true;

        // Short answers (letters / digits): require an exact token match only
        if (expected.length <= 2) {
            if (spokenTokens.includes(expected)) return true;
            continue;
        }

        if (spoken.includes(expected) || expected.includes(spoken)) return true;

        // Token-level fuzzy match for longer words
        if (spokenTokens.some(token => {
            if (token === expected) return true;
            if (token.length <= 2) return false;
            return speechSimilarity(token, expected) >= 0.78;
        })) {
            return true;
        }

        const threshold = expected.length <= 4 ? 0.8 : 0.72;
        if (speechSimilarity(spoken, expected) >= threshold) return true;
    }

    return false;
}

function setLessonVoiceStatus(message, state = "") {
    if (!lessonVoiceStatus) return;
    lessonVoiceStatus.textContent = message || "";
    lessonVoiceStatus.classList.remove("is-correct", "is-wrong", "is-listening");
    if (state) lessonVoiceStatus.classList.add(`is-${state}`);
}

function resetLessonVoiceUi() {
    stopLessonVoiceListening(false);
    setLessonVoiceStatus("");
    if (lessonSpeakBtn) {
        lessonSpeakBtn.classList.remove("is-listening");
        lessonSpeakBtn.textContent = selectedLanguage === "tl" ? "🎤 Magsalita" : "🎤 Speak Answer";
    }
}

function awardLessonVoiceStar() {
    if (hasLessonVoiceStarBeenAwarded()) return 0;
    loadStudentStars();
    quizStars += 1;
    saveStudentStars();
    recordDailyStarsEarned(1);
    markLessonVoiceStarAwarded();
    updateQuizStarDisplay(true, 1);
    updateCurrentStudentRecord();
    return 1;
}

function stopLessonVoiceListening(updateButton = true) {
    lessonVoiceListening = false;
    if (lessonSpeechRecognition) {
        try {
            lessonSpeechRecognition.onresult = null;
            lessonSpeechRecognition.onerror = null;
            lessonSpeechRecognition.onend = null;
            lessonSpeechRecognition.stop();
        } catch (err) {
            // ignore
        }
    }
    if (updateButton && lessonSpeakBtn) {
        lessonSpeakBtn.classList.remove("is-listening");
        lessonSpeakBtn.textContent = selectedLanguage === "tl" ? "🎤 Magsalita" : "🎤 Speak Answer";
    }
}

function handleLessonVoiceResult(spokenText) {
    const heard = String(spokenText || "").trim();
    if (!heard) {
        setLessonVoiceStatus(
            selectedLanguage === "tl" ? "Hindi marinig. Subukan ulit." : "I didn't catch that. Try again.",
            "wrong"
        );
        return;
    }

    if (isSpokenAnswerCorrect(heard)) {
        const gained = awardLessonVoiceStar();
        const message = gained
            ? (selectedLanguage === "tl"
                ? `Tama! Narinig ko: "${heard}". +1 bituin!`
                : `Correct! I heard: "${heard}". +1 star!`)
            : (selectedLanguage === "tl"
                ? `Tama! Narinig ko: "${heard}". (Nakuha mo na ang bituin dito.)`
                : `Correct! I heard: "${heard}". (Star already earned for this item.)`);

        setLessonVoiceStatus(message, "correct");
        showNotification(message, 3200);
        speakText(selectedLanguage === "tl" ? "Tama! Magaling!" : "Correct! Great job!");
    } else {
        const lesson = lessons[currentCategory][currentLesson];
        const hint = currentCategory === "alphabet"
            ? lesson.letter
            : translateWord(lesson.word);
        const message = selectedLanguage === "tl"
            ? `Halos! Narinig ko: "${heard}". Subukan sabihin: ${hint}`
            : `Close! I heard: "${heard}". Try saying: ${hint}`;
        setLessonVoiceStatus(message, "wrong");
        showNotification(message, 3200);
        speakText(selectedLanguage === "tl" ? "Subukan ulit!" : "Try again!");
    }
}

function startLessonVoiceListening() {
    if (!SpeechRecognitionAPI) {
        const msg = selectedLanguage === "tl"
            ? "Hindi available ang voice recognition sa browser na ito. Gamitin ang Chrome o Edge."
            : "Voice recognition is not available in this browser. Please use Chrome or Edge.";
        setLessonVoiceStatus(msg, "wrong");
        showNotification(msg, 4000);
        return;
    }

    if (lessonVoiceListening) {
        stopLessonVoiceListening();
        setLessonVoiceStatus(
            selectedLanguage === "tl" ? "Tumigil ang pakikinig." : "Listening stopped.",
            ""
        );
        return;
    }

    speechSynthesis.cancel();
    stopLessonVoiceListening(false);

    lessonSpeechRecognition = new SpeechRecognitionAPI();
    lessonSpeechRecognition.lang = selectedLanguage === "tl" ? "fil-PH" : "en-US";
    lessonSpeechRecognition.interimResults = false;
    lessonSpeechRecognition.maxAlternatives = 5;
    lessonSpeechRecognition.continuous = false;

    lessonVoiceListening = true;
    if (lessonSpeakBtn) {
        lessonSpeakBtn.classList.add("is-listening");
        lessonSpeakBtn.textContent = selectedLanguage === "tl" ? "🛑 Tumigil" : "🛑 Listening...";
    }
    setLessonVoiceStatus(
        selectedLanguage === "tl" ? "Nakikinig... magsalita ngayon." : "Listening... speak now.",
        "listening"
    );

    lessonSpeechRecognition.onresult = (event) => {
        const alternatives = [];
        for (let i = 0; i < event.results.length; i++) {
            for (let j = 0; j < event.results[i].length; j++) {
                alternatives.push(event.results[i][j].transcript);
            }
        }

        stopLessonVoiceListening();

        // Accept the first matching alternative (near-miss friendly)
        const match = alternatives.find(text => isSpokenAnswerCorrect(text));
        handleLessonVoiceResult(match || alternatives[0] || "");
    };

    lessonSpeechRecognition.onerror = (event) => {
        stopLessonVoiceListening();
        const msg = selectedLanguage === "tl"
            ? `May problema sa mikropono (${event.error}). Subukan ulit.`
            : `Mic error (${event.error}). Please try again.`;
        setLessonVoiceStatus(msg, "wrong");
    };

    lessonSpeechRecognition.onend = () => {
        if (lessonVoiceListening) {
            stopLessonVoiceListening();
            if (lessonVoiceStatus && lessonVoiceStatus.classList.contains("is-listening")) {
                setLessonVoiceStatus(
                    selectedLanguage === "tl" ? "Walang narinig. Subukan ulit." : "No speech detected. Try again.",
                    "wrong"
                );
            }
        }
    };

    try {
        lessonSpeechRecognition.start();
    } catch (err) {
        stopLessonVoiceListening();
        setLessonVoiceStatus(
            selectedLanguage === "tl" ? "Hindi masimulan ang mikropono." : "Could not start the microphone.",
            "wrong"
        );
    }
}

function speakLessonText() {
    speechSynthesis.cancel();
    stopLessonVoiceListening();

    const speechText = getLessonSpeechText();
    const speech = new SpeechSynthesisUtterance(speechText);
    applyKidFemaleVoice(speech, { rate: 0.85, pitch: 1.55, volume: 1 });

    speechSynthesis.speak(speech);
    showNotification(speechText, 2600);
}

function loadLesson() {

    const lesson = lessons[currentCategory][currentLesson];

    lessonTitle.textContent = translateLessonTitle(currentCategory);
    lessonImage.src = lesson.image;

    if (currentCategory === "alphabet") {
        // Show alternating letter prompts instead of plain "A" / "Apple"
        lessonLetter.textContent = getLessonSpeechText();
        lessonLetter.classList.add("lesson-prompt-text");
        lessonWord.textContent = "";
        lessonWord.hidden = true;
    } else {
        lessonLetter.textContent = lesson.letter;
        lessonLetter.classList.remove("lesson-prompt-text");
        lessonWord.textContent = translateWord(lesson.word);
        lessonWord.hidden = false;
    }

    const progress =
        ((currentLesson + 1) /
        lessons[currentCategory].length) * 100;

    progressFill.style.width = progress + "%";

    updateLessonSubtitle();
    resetLessonVoiceUi();
    speakLessonText();
}

function openLesson(category){

    currentCategory = category;
    currentLesson = 0;

    // ask language before starting lessons
    pendingLessonCategory = category;
    if (languageModal) languageModal.style.display = "flex";
}

// Handle language modal actions
let pendingLessonCategory = null;
let selectedLanguage = localStorage.getItem('lessonLanguage') || 'en';

if (langEnBtn) langEnBtn.addEventListener('click', () => {
    selectedLanguage = 'en';
    localStorage.setItem('lessonLanguage', selectedLanguage);
    if (languageModal) languageModal.style.display = 'none';
    if (pendingLessonCategory) {
        openLessonContinue(pendingLessonCategory);
        pendingLessonCategory = null;
    }
});

if (langTlBtn) langTlBtn.addEventListener('click', () => {
    selectedLanguage = 'tl';
    localStorage.setItem('lessonLanguage', selectedLanguage);
    if (languageModal) languageModal.style.display = 'none';
    if (pendingLessonCategory) {
        openLessonContinue(pendingLessonCategory);
        pendingLessonCategory = null;
    }
});

if (langCancelBtn) langCancelBtn.addEventListener('click', () => {
    if (languageModal) languageModal.style.display = 'none';
    pendingLessonCategory = null;
});

// note: modal close X removed; modal can be closed via Cancel button only

function openLessonContinue(category){
    currentCategory = category;
    currentLesson = 0;
    lessonVoiceRewardedKeys = null;
    // store category and language selection
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
// BACK TO MENU
// -------------------------------

lessonHomeBtn.onclick = () => {

    speechSynthesis.cancel();
    stopLessonVoiceListening();
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
    speakLessonText();
};

if (lessonSpeakBtn) {
    lessonSpeakBtn.addEventListener("click", () => {
        startLessonVoiceListening();
    });
}

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

        case "m":
        case "M":

            event.preventDefault();
            if (lessonSpeakBtn) lessonSpeakBtn.click();

            break;

    }

});

// -------------------------------
// Welcome Voice
// -------------------------------

function welcomeLessonVoice() {

    speechSynthesis.cancel();

    const message = selectedLanguage === 'tl'
        ? "Maligayang pagdating! Magsisimula na tayo sa pag-aaral."
        : "Welcome! Let's start learning.";

    const speech = new SpeechSynthesisUtterance(message);
    applyKidFemaleVoice(speech, { rate: 0.95, pitch: 1.55 });

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
const quizProgressFillEl = document.getElementById("quizProgressFill");
const quizVoiceBtn = document.getElementById("quizVoiceBtn");
const quizUnlockRuleEl = document.getElementById("quizUnlockRule");
const quizUnlockProgressEl = document.getElementById("quizUnlockProgress");
const answerButtons = document.querySelectorAll(".answer-card");

const STAR_REWARDS = {
    easy: 1,
    medium: 2,
    hard: 5
};

// Difficulty UI
const difficultyButtons = document.querySelectorAll(".difficulty-btn");
const QUIZ_DIFFICULTY = {
    easy: { questionCount: 5 },
    medium: { questionCount: 10 },
    hard: { questionCount: 15 }
};

let quizDifficulty = localStorage.getItem("quizDifficulty") || "easy";

function applyQuizDifficultyUI() {
    difficultyButtons.forEach(btn => {
        const isActive = btn.dataset.difficulty === quizDifficulty;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
}

function updateQuizUnlockBox() {
    if (!quizUnlockRuleEl || !quizUnlockProgressEl) return;

    const total = quizQuestions.length || getExpectedQuestionCountForDifficulty(quizDifficulty);
    const correct = quizStageState ? (quizStageState.stageScore || 0) : 0;
    const levelName = quizDifficulty.charAt(0).toUpperCase() + quizDifficulty.slice(1);
    const titleEl = document.querySelector(".quiz-unlock-title");

    let ruleText;
    if (selectedLanguage === "tl") {
        if (titleEl) titleEl.textContent = "Paano Ma-unlock ang Susunod na Level";
        if (quizDifficulty === "easy") {
            ruleText = `Kailangan mong makuha ang lahat ng ${total} Easy na tanong nang tama para ma-unlock ang Medium.`;
        } else if (quizDifficulty === "medium") {
            ruleText = `Kailangan mong makuha ang lahat ng ${total} Medium na tanong nang tama para ma-unlock ang Hard.`;
        } else {
            ruleText = `Huling level: sagutin nang tama ang lahat ng ${total} Hard na tanong.`;
        }
        quizUnlockProgressEl.textContent = `Progreso: ${correct} / ${total} tama (${levelName})`;
    } else {
        if (titleEl) {
            titleEl.textContent = quizDifficulty === "hard"
                ? "Final Level Goal"
                : "Unlock Next Level";
        }
        if (quizDifficulty === "easy") {
            ruleText = `Get all ${total} Easy answers correct to unlock Medium.`;
        } else if (quizDifficulty === "medium") {
            ruleText = `Get all ${total} Medium answers correct to unlock Hard.`;
        } else {
            ruleText = `Final level: answer all ${total} Hard questions correctly.`;
        }
        quizUnlockProgressEl.textContent = `Progress: ${correct} / ${total} correct (${levelName})`;
    }

    quizUnlockRuleEl.textContent = ruleText;
}

difficultyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Difficulty buttons are display-only; quiz difficulty is automatic.
    });
});


// Current category for quiz
let quizCategory = "";
let quizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let quizComplete = false;
let selectedQuizChoice = null;
let quizStageState = null;

function updateQuizStarDisplay(animate = false, gained = 0) {
    if (quizStarCountEl) {
        quizStarCountEl.textContent = String(quizStars);
    }

    if (!animate || !quizStarScoreEl || gained <= 0) return;

    quizStarScoreEl.classList.remove("pop");
    // Force reflow so the animation can replay
    void quizStarScoreEl.offsetWidth;
    quizStarScoreEl.classList.add("pop");

    if (quizStarScoreEl) {
        const floater = document.createElement("div");
        floater.className = "quiz-star-float";
        floater.textContent = `+${gained} ★`;
        quizStarScoreEl.appendChild(floater);
        floater.addEventListener("animationend", () => floater.remove());
    }

    setTimeout(() => {
        quizStarScoreEl.classList.remove("pop");
    }, 600);
}

function awardQuizStars() {
    const gained = STAR_REWARDS[quizDifficulty] || STAR_REWARDS.easy;
    quizStars += gained;
    sessionStarsGained += gained;
    saveStudentStars();
    recordDailyStarsEarned(gained);
    updateQuizStarDisplay(true, gained);
    return gained;
}


// -------------------------------
// Save Lesson Progress
// -------------------------------

function saveLessonProgress() {

    let progress = JSON.parse(localStorage.getItem(getNamespacedKey("lessonProgress"))) || {};

    progress[currentCategory] = true;

    localStorage.setItem(
        getNamespacedKey("lessonProgress"),
        JSON.stringify(progress)
    );

}

// -------------------------------
// Student Progress
// -------------------------------

function saveStudentProgress() {

    let completed =
        Number(localStorage.getItem(getNamespacedKey("completedLessons"))) || 0;

    completed++;

    localStorage.setItem(
        getNamespacedKey("completedLessons"),
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

    updateCurrentStudentRecord();

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

    // Always start at Easy for a new quiz session
    quizDifficulty = 'easy';

    applyQuizDifficultyUI();

    quizCategory = currentCategory;
    quizScore = 0;
    sessionStarsGained = 0;
    loadStudentStars();
    currentQuizIndex = 0;
    quizAnswered = false;
    quizComplete = false;
    selectedQuizChoice = null;
    quizProgressFillEl.style.width = "0%";
    updateQuizStarDisplay(false);

    quizTitle.textContent =
        selectedLanguage === 'tl'
            ? quizTitleTranslations[quizCategory] || (quizCategory.charAt(0).toUpperCase() + quizCategory.slice(1) + " Quiz")
            : (quizCategory.charAt(0).toUpperCase() + quizCategory.slice(1) + " Quiz");

    // Sequential stage progression: Easy (5) -> Medium (10) -> Hard (15)
    // Must get every answer correct in a stage to unlock the next.
    const stageConfig = [
        { difficulty: 'easy', questionCount: QUIZ_DIFFICULTY.easy.questionCount },
        { difficulty: 'medium', questionCount: QUIZ_DIFFICULTY.medium.questionCount },
        { difficulty: 'hard', questionCount: QUIZ_DIFFICULTY.hard.questionCount }
    ];

    quizStageState = {
        stageIndex: 0,
        stageConfig,
        stageScore: 0,
        quizDifficulty: quizDifficulty
    };

    // First stage questions
    quizQuestions = generateQuizQuestions(
        quizCategory,
        quizStageState.stageConfig[0].difficulty,
        quizStageState.stageConfig[0].questionCount
    );

    quizDifficulty = quizStageState.stageConfig[0].difficulty;

    loadQuizQuestion();
}



// -------------------------------
// CUSTOM QUIZ QUESTION BANK (CODE-BASED CUSTOMIZATION)
// -------------------------------
// Teacher can edit QUESTION_BANK to fully customize prompts and correct answers per:
// category: alphabet | numbers | colors | shapes
// difficulty: easy | medium | hard
//
// Each question entry supports:
// - id: unique string
// - promptEN / promptTL: prompt shown based on language
// - correct: the lesson item 'word' that is correct (also maps to images)
// - choices: optional explicit array of choice words (WITHOUT the correct is not allowed).
//             If not provided, choices will be auto-generated via buildQuizChoices().
// - letterTemplate (optional): if category==='alphabet', you can reference item letter in custom prompts by
//                               using placeholder {letter} and {word}.
const QUESTION_BANK = {
    alphabet: {
        easy: [
            {
                id: "alpha-easy-A-1",
                promptEN: "Which one is Apple?",
                promptTL: "Alin sa mga ito ang Mansanas?",
                correct: "Apple",
                // explicit choices example; edit freely.
                choices: ["Apple", "Ball", "Cat"]
            },
            {
                id: "alpha-easy-B-1",
                promptEN: "Where is the letter B?",
                promptTL: "Nasaan ang letrang B?",
                correct: "Ball",
                choices: ["Ball", "Dog", "Fish"]
            }
        ],
        medium: [],
        hard: []
    },
    numbers: {
        easy: [
            {
                id: "num-easy-One-1",
                promptEN: "Which one is One?",
                promptTL: "Alin sa mga ito ang Isa?",
                correct: "One",
                choices: ["One", "Two", "Three"]
            }
        ],
        medium: [],
        hard: []
    },
    colors: {
        easy: [
            {
                id: "col-easy-Red-1",
                promptEN: "Which one is Red?",
                promptTL: "Alin sa mga ito ang Pula?",
                correct: "Red",
                choices: ["Red", "Blue", "Green"]
            }
        ],
        medium: [],
        hard: []
    },
    shapes: {
        easy: [
            {
                id: "sha-easy-Circle-1",
                promptEN: "Which one is Circle?",
                promptTL: "Alin sa mga ito ang Bilog?",
                correct: "Circle",
                choices: ["Circle", "Square", "Triangle"]
            }
        ],
        medium: [],
        hard: []
    }
};

function generateQuizQuestions(category, difficulty, overrideCount){

    const items = lessons[category];
    const pool = [...items];
    const cfg = QUIZ_DIFFICULTY[difficulty] || QUIZ_DIFFICULTY.easy;
    const questionCount = Math.max(1, overrideCount || cfg.questionCount);

    // Shuffle, then reuse the pool if the category has fewer items than needed
    // (e.g. numbers/colors/shapes have 10 items but Hard needs 15 questions).
    const shuffledPool = () => pool
        .map(item => ({item, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(entry => entry.item);

    const selected = [];
    while (selected.length < questionCount) {
        const batch = shuffledPool();
        for (const item of batch) {
            if (selected.length >= questionCount) break;
            selected.push(item);
        }
        if (!batch.length) break;
    }

    return selected.map((item, idx) => {
        const isAlt = idx % 2 === 1;
        const localizedWord = translateWord(item.word);
        let enPrompt;
        let tlPrompt;

        if (category === 'alphabet') {
            const letter = item.letter;
            enPrompt = isAlt
                ? `The letter ${letter} needs your help! Can you find the letter ${letter}?`
                : `Where is the letter ${letter}? Let's find it together!`;
            tlPrompt = isAlt
                ? `Kailangan ng tulong ang letrang ${letter}! Maaari mo bang hanapin ang letrang ${letter}?`
                : `Nasaan ang letrang ${letter}? Hanapin natin ito nang magkasama!`;
        } else if (category === 'numbers') {
            const digit = items.findIndex(entry => entry.word === item.word) + 1;
            enPrompt = isAlt
                ? `The number ${digit} needs your help! Can you find the number ${digit}?`
                : `Where is the number ${digit}? Let's find it together!`;
            tlPrompt = isAlt
                ? `Kailangan ng tulong ang numerong ${digit}! Maaari mo bang hanapin ang numerong ${digit}?`
                : `Nasaan ang numerong ${digit}? Hanapin natin ito nang magkasama!`;
        } else if (category === 'colors') {
            enPrompt = isAlt
                ? `The color ${item.word} needs your help! Can you find the color ${item.word}?`
                : `Where is the color ${item.word}? Let's find it together!`;
            tlPrompt = isAlt
                ? `Kailangan ng tulong ang kulay ${localizedWord}! Maaari mo bang hanapin ang kulay ${localizedWord}?`
                : `Nasaan ang kulay ${localizedWord}? Hanapin natin ito nang magkasama!`;
        } else if (category === 'shapes') {
            enPrompt = isAlt
                ? `The shape ${item.word} needs your help! Can you find the shape ${item.word}?`
                : `Where is the shape ${item.word}? Let's find it together!`;
            tlPrompt = isAlt
                ? `Kailangan ng tulong ang hugis ${localizedWord}! Maaari mo bang hanapin ang hugis ${localizedWord}?`
                : `Nasaan ang hugis ${localizedWord}? Hanapin natin ito nang magkasama!`;
        } else {
            enPrompt = `Which one is ${item.word}?`;
            tlPrompt = `Alin sa mga ito ang ${localizedWord}?`;
        }

        return {
            prompt: selectedLanguage === 'tl' ? tlPrompt : enPrompt,
            correct: item.word,
            choices: buildQuizChoices(item.word, items, difficulty)
        };
    });
}

function buildQuizChoices(correctWord, items, difficulty){

    const allWords = items.map(item => item.word);
    const distractorsAll = allWords.filter(word => word !== correctWord);

    // Required choice counts per difficulty:
    // easy => 3, medium => 6, hard => 10
    const choiceTargetByDifficulty = {
        easy: 3,
        medium: 6,
        hard: 10
    };

    const requiredChoiceCount = choiceTargetByDifficulty[difficulty] || choiceTargetByDifficulty.easy;

    // Use a larger distractor sample on harder difficulties
    const fraction = difficulty === 'easy' ? 0.55 : (difficulty === 'medium' ? 0.75 : 1);
    const sampleCount = Math.min(
        distractorsAll.length,
        Math.max(requiredChoiceCount - 1, Math.floor(distractorsAll.length * fraction))
    );

    const sampledDistractors = distractorsAll
        .map(word => ({word, sort: Math.random()}))
        .sort((a,b) => a.sort - b.sort)
        .slice(0, sampleCount)
        .map(x => x.word);

    const choices = [correctWord];

    const shuffled = sampledDistractors
        .map(word => ({word, sort: Math.random()}))
        .sort((a,b) => a.sort - b.sort)
        .map(entry => entry.word);

    while (choices.length < requiredChoiceCount && shuffled.length) {
        const next = shuffled.shift();
        if (!choices.includes(next)) choices.push(next);
    }

    // Fallback: fill remaining (without duplicates)
    while (choices.length < requiredChoiceCount && distractorsAll.length) {
        const fallback = distractorsAll[Math.floor(Math.random() * distractorsAll.length)];
        if (!choices.includes(fallback)) choices.push(fallback);
        else {
            // If duplicate, try another random one
            // (loop will eventually find a new value)
        }
    }

    return choices.sort(() => Math.random() - 0.5);
}



function loadQuizQuestion(){

    const question = quizQuestions[currentQuizIndex];

    quizQuestionEl.textContent = question.prompt;

    const displayIndex = currentQuizIndex + 1;
    const totalQuestions = quizQuestions.length;
    questionNumberEl.textContent = selectedLanguage === 'tl'
        ? `Tanong ${displayIndex} ng ${totalQuestions}`
        : `Question ${displayIndex} of ${totalQuestions}`;

    currentScoreEl.textContent = String(quizScore);
    quizProgressFillEl.style.width =
        `${Math.round((currentQuizIndex / quizQuestions.length) * 100)}%`;

    updateQuizUnlockBox();

    const quizAnswerGrid = document.getElementById("quizAnswerGrid");
    if (quizAnswerGrid) {
        quizAnswerGrid.dataset.quizChoiceLayout = quizDifficulty;
    }

    // Enable only the required number of choice buttons per difficulty
    const requiredChoiceCountByDifficulty = {
        easy: 3,
        medium: 6,
        hard: 10
    };

    const requiredChoiceCount = requiredChoiceCountByDifficulty[quizDifficulty] || requiredChoiceCountByDifficulty.easy;

    answerButtons.forEach((button, index) => {
        const isUsed = index < requiredChoiceCount;

        button.disabled = !isUsed;
        button.hidden = !isUsed;
        button.classList.toggle("unused", !isUsed);
        button.classList.remove("correct", "wrong", "selected");

        const answerWord = isUsed ? (question.choices[index] || "") : "";
        button.dataset.choice = answerWord;

        const answerItem = answerWord
            ? lessons[currentCategory].find(item => item.word === answerWord)
            : null;
        const imageDiv = button.querySelector(".answer-image");

        if (imageDiv) {
            if (isUsed && answerItem && answerItem.image) {
                imageDiv.style.backgroundImage = `url('${answerItem.image}')`;
                imageDiv.style.backgroundSize = "cover";
                imageDiv.style.backgroundPosition = "center";
            } else {
                imageDiv.style.backgroundImage = "none";
            }
        }
    });

    selectedQuizChoice = null;

    speakQuizQuestion();
}

function selectQuizAnswer(button){

    if (quizAnswered || quizComplete) return;
    if (button.hidden || button.classList.contains("unused") || !button.dataset.choice) return;

    selectedQuizChoice = button.dataset.choice;

    answerButtons.forEach(btn => {
        btn.classList.toggle("selected", btn === button);
    });

    confirmQuizAnswer();
}

function confirmQuizAnswer(){
    if (quizAnswered || quizComplete || !selectedQuizChoice) return;

    quizAnswered = true;
    const selected = selectedQuizChoice;
    const correct = quizQuestions[currentQuizIndex].correct;
    const isCorrect = selected === correct;

    // Alternate correct feedback prompts so it feels more interactive
    if (typeof quizCorrectFeedbackToggle === 'undefined') {
        quizCorrectFeedbackToggle = 0;
    }
    if (typeof quizWrongFeedbackToggle === 'undefined') {
        quizWrongFeedbackToggle = 0;
    }

    answerButtons.forEach(btn => {
        if (btn.dataset.choice === selected) {
            btn.classList.add(isCorrect ? "correct" : "wrong");
        }
        if (!isCorrect && btn.dataset.choice === correct) {
            btn.classList.add("correct");
        }
        btn.disabled = true;
    });

    if (isCorrect) {
        quizScore++;
        if (quizStageState) quizStageState.stageScore = (quizStageState.stageScore || 0) + 1;
        awardQuizStars();
        updateQuizUnlockBox();

        quizCorrectFeedbackToggle = (quizCorrectFeedbackToggle + 1) % 2;
        const isEven = quizCorrectFeedbackToggle === 0;

        const message = selectedLanguage === 'tl'
            ? (isEven ? "Mahusay! Mas gumaganda ka araw-araw!" : "Awesome! Tama yan!")
            : (isEven ? "Nice work! You're getting better every time!" : "Awesome! That's the correct answer!");

        showNotification(message);
        speakText(message).then(() => {
            advanceQuiz();
        });

    } else {
        quizWrongFeedbackToggle = (quizWrongFeedbackToggle + 1) % 2;
        const isFirstWrongMessage = quizWrongFeedbackToggle === 0;

        const message = selectedLanguage === 'tl'
            ? "Nagagawa mo ito! Magpatuloy ka!"
            : (isFirstWrongMessage
                ? "Nice Try! it's okay to make mistakes!"
                : "You're doing great! Keep trying!");

        showNotification(message);
        speakText(message).then(() => {
            advanceQuiz();
        });
    }

    currentScoreEl.textContent = String(quizScore);

    const advanceQuiz = () => {
        if (quizComplete) return;
        if (currentQuizIndex < quizQuestions.length - 1) {
            currentQuizIndex++;
            quizAnswered = false;
            loadQuizQuestion();
        } else {
            finishQuiz();
        }
    };

    return;
}

function getExpectedQuestionCountForDifficulty(difficulty) {
    const cfg = QUIZ_DIFFICULTY[difficulty] || QUIZ_DIFFICULTY.easy;
    return cfg.questionCount;
}

function getNextDifficultyAfterCompletion(currentDifficulty, stageScore) {
    // Spec:
    // Easy passed with exactly 5/5 correct -> starts Medium
    // Medium passed with exactly 10/10 correct -> starts Hard
    // Even 1 wrong answer -> ends quiz (no advance)
    const expected = getExpectedQuestionCountForDifficulty(currentDifficulty);

    if (stageScore !== expected) {
        return 'end';
    }

    if (currentDifficulty === 'easy') {
        return 'medium';
    }

    if (currentDifficulty === 'medium') {
        return 'hard';
    }

    return 'end';
}

function finishQuiz(){

    const stageScore = quizStageState ? (quizStageState.stageScore || 0) : quizScore;
    const nextDifficulty = getNextDifficultyAfterCompletion(quizDifficulty, stageScore);
    const canAdvance =
        nextDifficulty !== 'end' &&
        quizStageState &&
        quizStageState.stageIndex < quizStageState.stageConfig.length - 1;

    // Perfect stage score required to unlock Medium or Hard.
    if (canAdvance) {

        quizStageState.stageIndex++;
        quizStageState.stageScore = 0;

        quizDifficulty = quizStageState.stageConfig[quizStageState.stageIndex].difficulty;

        applyQuizDifficultyUI();

        quizAnswered = false;
        quizComplete = false;
        selectedQuizChoice = null;

        currentQuizIndex = 0;
        quizProgressFillEl.style.width = "0%";

        quizQuestions = generateQuizQuestions(
            quizCategory,
            quizDifficulty,
            quizStageState.stageConfig[quizStageState.stageIndex].questionCount
        );

        const totalQuestions = quizQuestions.length;
        questionNumberEl.textContent = selectedLanguage === 'tl'
            ? `Tanong 1 ng ${totalQuestions}`
            : `Question 1 of ${totalQuestions}`;

        const unlockMessage = selectedLanguage === 'tl'
            ? (nextDifficulty === 'medium'
                ? "Perpekto! Susunod: Medium level!"
                : "Perpekto! Susunod: Hard level!")
            : (nextDifficulty === 'medium'
                ? "Perfect! Next up: Medium level!"
                : "Perfect! Next up: Hard level!");
        showNotification(unlockMessage);

        loadQuizQuestion();
        return;

    }

    // Incomplete stage or Hard finished: end entire quiz session
    const stageTotal = quizQuestions.length;
    const sessionTotal = quizStageState
        ? quizStageState.stageConfig
            .slice(0, quizStageState.stageIndex + 1)
            .reduce((sum, stage) => sum + stage.questionCount, 0)
        : stageTotal;

    quizComplete = true;
    quizProgressFillEl.style.width = "100%";
    quizQuestionEl.textContent = selectedLanguage === 'tl' ? "Tapos na ang Pagsusulit!" : "Quiz Complete!";
    questionNumberEl.textContent = selectedLanguage === 'tl'
        ? `Pinal na Iskor: ${quizScore} / ${sessionTotal}`
        : `Final Score: ${quizScore} / ${sessionTotal}`;

    let finishMessage;
    const didNotAdvance = stageScore < stageTotal && quizDifficulty !== 'hard';
    if (didNotAdvance) {
        finishMessage = selectedLanguage === 'tl'
            ? `Kailangan mong makuha ang lahat ng tama (${stageScore}/${stageTotal}) para makapunta sa susunod na level.`
            : `You need a perfect score (${stageScore}/${stageTotal}) to unlock the next level.`;
    } else {
        finishMessage = selectedLanguage === 'tl'
            ? `Magaling, ${localStorage.getItem("studentName") || "Estudyante"}! Nakakuha ka ng ${quizStars} bituin!`
            : `Great work, ${localStorage.getItem("studentName") || "Student"}! You earned ${quizStars} stars!`;
    }

    const noticeDuration = didNotAdvance ? 10000 : 2800;
    showNotification(finishMessage, noticeDuration);
    if (didNotAdvance) {
        speakText(finishMessage);
    }

    currentScoreEl.textContent = String(quizScore);
    updateQuizStarDisplay(true, 0);
    answerButtons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove("correct", "wrong");
    });

    // Persist summary for teacher dashboard
    saveQuizSummary(sessionTotal);

    // Reset stored difficulty
    localStorage.setItem('quizDifficulty', 'easy');

    setTimeout(() => {
        showScreen(menuScreen);
    }, noticeDuration);
}




function saveQuizSummary(sessionTotal) {
    const student = localStorage.getItem("studentName") || "Unknown";

    // Per-student quiz summary (teacher dashboard reads from these keys)
    const lastQuizScoreKey = getNamespacedKey(`lastQuizScore_${encodeURIComponent(student)}`);
    const lastQuizTotalKey = getNamespacedKey(`lastQuizTotal_${encodeURIComponent(student)}`);
    const total = sessionTotal || quizQuestions.length;
    const accuracy = total > 0 ? Math.round((quizScore / total) * 100) : 0;

    localStorage.setItem(lastQuizScoreKey, String(quizScore));
    localStorage.setItem(lastQuizTotalKey, String(total));

    appendQuizHistoryEntry(student, {
        date: Date.now(),
        category: quizCategory || currentCategory || "quiz",
        score: quizScore,
        total,
        accuracy,
        starsGained: sessionStarsGained,
        starsTotal: quizStars
    });

    updateCurrentStudentRecord();
}


quizVoiceBtn.onclick = () => {
    speakQuizQuestion();
};


answerButtons.forEach(button => {
    button.addEventListener("click", () => selectQuizAnswer(button));
});    


// -------------------------------
// Congratulation Voice
// -------------------------------

function congratulateStudent(){

    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(
        "Great job! Let's answer the quiz."
    );
    applyKidFemaleVoice(speech, { rate: 0.95, pitch: 1.55 });

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
            localStorage.getItem(getNamespacedKey("lessonProgress"))
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
            localStorage.getItem(getNamespacedKey("lessonProgress"))
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











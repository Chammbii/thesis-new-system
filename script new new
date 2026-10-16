


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
const profileBackHome = document.getElementById("profileBackHome");
const backHome = document.getElementById("backHome");
const menuStartBtn = document.getElementById("menuStartBtn");
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
const teacherForgotPasswordBtn = document.getElementById("teacherForgotPasswordBtn");
const teacherFormTitle = document.getElementById("teacherFormTitle");
const teacherFormSubtitle = document.getElementById("teacherFormSubtitle");
const teacherUnlockEmail = document.getElementById("teacherUnlockEmail");
const teacherSwitchText = document.getElementById("teacherSwitchText");
const teacherSubmitBtn = document.getElementById("teacherSubmitBtn");
const teacherUseEmailLoginBtn = document.getElementById("teacherUseEmailLoginBtn");
const teacherDashboard = document.getElementById("teacherDashboard");
const teacherSidebarToggle = document.getElementById("teacherSidebarToggle");
const teacherNameDisplay = document.getElementById("teacherNameDisplay");
const teacherSidebarName = document.getElementById("teacherSidebarName");
const teacherClassroomCode = document.getElementById("teacherClassroomCode");
const teacherLogoutBtn = document.getElementById("teacherLogoutBtn");
const teacherChangePasswordBtn = document.getElementById("teacherChangePasswordBtn");
const teacherChangePasswordModal = document.getElementById("teacherChangePasswordModal");
const teacherChangePasswordForm = document.getElementById("teacherChangePasswordForm");
const teacherNewPassword = document.getElementById("teacherNewPassword");
const teacherNewPasswordConfirm = document.getElementById("teacherNewPasswordConfirm");
const teacherChangePasswordMessage = document.getElementById("teacherChangePasswordMessage");
const teacherChangePasswordCancelBtn = document.getElementById("teacherChangePasswordCancelBtn");
const teacherDashboardHomeBtn = document.getElementById("teacherDashboardHomeBtn");
const teacherDashboardRefreshBtn = document.getElementById("teacherDashboardRefreshBtn");
const teacherActivityLogBtn = document.getElementById("teacherActivityLogBtn");
const teacherAnalyticsBtn = document.getElementById("teacherAnalyticsBtn");
const teacherArchiveBtn = document.getElementById("teacherArchiveBtn");
const teacherDashboardPrintBtn = document.getElementById("teacherDashboardPrintBtn");
const teacherDashboardSettingsBtn = document.getElementById("teacherDashboardSettingsBtn");
const teacherNotificationsBtn = document.getElementById("teacherNotificationsBtn");
const teacherNotificationBadge = document.getElementById("teacherNotificationBadge");
const teacherNotificationsModal = document.getElementById("teacherNotificationsModal");
const teacherNotificationsList = document.getElementById("teacherNotificationsList");
const teacherNotificationsCloseBtn = document.getElementById("teacherNotificationsCloseBtn");
const teacherCustomizeBtn = document.getElementById("teacherCustomizeBtn");
const teacherAddLessonBtn = document.getElementById("teacherAddLessonBtn");
const teacherCustomizeModal = document.getElementById("teacherCustomizeModal");
const teacherCustomizeForm = document.getElementById("teacherCustomizeForm");
const teacherCustomizeCloseBtn = document.getElementById("teacherCustomizeCloseBtn");
const customQuestionCategory = document.getElementById("customQuestionCategory");
const customQuestionDifficulty = document.getElementById("customQuestionDifficulty");
const customQuestionPrompt = document.getElementById("customQuestionPrompt");
const customQuestionAudio = document.getElementById("customQuestionAudio");
const customQuestionCorrect = document.getElementById("customQuestionCorrect");
const customQuestionList = document.getElementById("customQuestionList");
const customQuestionMessage = document.getElementById("customQuestionMessage");
const customQuestionLevelTabs = document.querySelectorAll(".custom-question-level-tab");
const teacherLessonModal = document.getElementById("teacherLessonModal");
const teacherLessonForm = document.getElementById("teacherLessonForm");
const customLessonName = document.getElementById("customLessonName");
const customLessonCover = document.getElementById("customLessonCover");
const customLessonItems = document.getElementById("customLessonItems");
const addLessonItemBtn = document.getElementById("addLessonItemBtn");
const teacherLessonCloseBtn = document.getElementById("teacherLessonCloseBtn");
const teacherLessonMessage = document.getElementById("teacherLessonMessage");
const customLessonList = document.getElementById("customLessonList");
const customLessonGrid = document.getElementById("customLessonGrid");
const teacherPrintModal = document.getElementById("teacherPrintModal");
const teacherPrintStudent = document.getElementById("teacherPrintStudent");
const teacherPrintCancelBtn = document.getElementById("teacherPrintCancelBtn");
const teacherPrintConfirmBtn = document.getElementById("teacherPrintConfirmBtn");
const teacherPrintReport = document.getElementById("teacherPrintReport");
const teacherArchiveModal = document.getElementById("teacherArchiveModal");
const teacherArchiveDates = document.getElementById("teacherArchiveDates");
const teacherArchiveCloseBtn = document.getElementById("teacherArchiveCloseBtn");
const teacherArchiveDoneBtn = document.getElementById("teacherArchiveDoneBtn");
const teacherActivityLogModal = document.getElementById("teacherActivityLogModal");
const teacherActivityLogCloseBtn = document.getElementById("teacherActivityLogCloseBtn");
const teacherActivityLogDoneBtn = document.getElementById("teacherActivityLogDoneBtn");
const teacherActivityLogStudents = document.getElementById("teacherActivityLogStudents");
const teacherAnalyticsModal = document.getElementById("teacherAnalyticsModal");
const teacherAnalyticsCloseBtn = document.getElementById("teacherAnalyticsCloseBtn");
const teacherAnalyticsStudentSearch = document.getElementById("teacherAnalyticsStudentSearch");
const teacherAnalyticsStudents = document.getElementById("teacherAnalyticsStudents");
const teacherAnalyticsStudentName = document.getElementById("teacherAnalyticsStudentName");
const teacherAnalyticsMonth = document.getElementById("teacherAnalyticsMonth");
const teacherAnalyticsYear = document.getElementById("teacherAnalyticsYear");
const teacherAnalyticsPreviousMonth = document.getElementById("teacherAnalyticsPreviousMonth");
const teacherAnalyticsNextMonth = document.getElementById("teacherAnalyticsNextMonth");
const teacherAnalyticsCalendarDays = document.getElementById("teacherAnalyticsCalendarDays");
const teacherAnalyticsSelectedDate = document.getElementById("teacherAnalyticsSelectedDate");
const teacherAnalyticsDateDetails = document.getElementById("teacherAnalyticsDateDetails");
const ANALYTICS_MIN_YEAR = 2026;
const ANALYTICS_MAX_YEAR = 2030;
const todayForAnalytics = new Date();
let selectedAnalyticsYear = Math.min(ANALYTICS_MAX_YEAR, Math.max(ANALYTICS_MIN_YEAR, todayForAnalytics.getFullYear()));
let selectedAnalyticsMonth = selectedAnalyticsYear === todayForAnalytics.getFullYear()
    ? todayForAnalytics.getMonth()
    : selectedAnalyticsYear === ANALYTICS_MIN_YEAR ? 0 : 11;
let selectedAnalyticsDate = toDateKey(new Date(
    selectedAnalyticsYear,
    selectedAnalyticsMonth,
    selectedAnalyticsYear === todayForAnalytics.getFullYear() ? todayForAnalytics.getDate() : 1
).getTime());
const teacherStudentProgressTable = document.getElementById("teacherStudentProgressTable");
const teacherProgressChart = document.getElementById("teacherProgressChart");
const teacherStarsChart = document.getElementById("teacherStarsChart");
const teacherDailyStarsChart = document.getElementById("teacherDailyStarsChart");
const teacherQuizHistoryTable = document.getElementById("teacherQuizHistoryTable");
const quizHistorySubtitle = document.getElementById("quizHistorySubtitle");
const teacherActivityLogTable = document.getElementById("teacherActivityLogTable");
const activityLogSubtitle = document.getElementById("activityLogSubtitle");
let selectedActivityLogStudent = null;
const teacherStudentTrackerCount = document.getElementById("teacherStudentTrackerCount");
const teacherStudentSort = document.getElementById("teacherStudentSort");
const teacherStudentGenderFilter = document.getElementById("teacherStudentGenderFilter");
const teacherTutorial = document.getElementById("teacherTutorial");
const teacherTutorialTitle = document.getElementById("teacherTutorialTitle");
const teacherTutorialDescription = document.getElementById("teacherTutorialDescription");
const teacherTutorialBackBtn = document.getElementById("teacherTutorialBackBtn");
const teacherTutorialNextBtn = document.getElementById("teacherTutorialNextBtn");
const teacherTutorialSkipBtn = document.getElementById("teacherTutorialSkipBtn");
const teacherTutorialDontShowAgain = document.getElementById("teacherTutorialDontShowAgain");
const supabaseConfig = window.QUIZLAND_SUPABASE;
const supabaseClient = supabaseConfig?.enabled
    && supabaseConfig.url
    && supabaseConfig.anonKey
    && window.supabase?.createClient
    ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey, {
        auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: true
        }
    })
    : null;
let selectedHistoryStudent = null;
let selectedAnalyticsStudent = null;
let sessionStarsGained = 0;
let studentProfileEditing = false;
let activeUploadedAudio = null;

const TEACHER_TUTORIAL_DONT_SHOW_KEY = "quizlandTeacherTutorialDontShow";
const teacherTutorialSteps = [
    {
        target: ".tdash-header",
        title: "What is this dashboard?",
        description: "This is your classroom control center. It gives you a quick view of student learning, progress, stars, and activity."
    },
    {
        target: "#teacherClassroomCode",
        title: "Your classroom code",
        description: "Give this six-digit code to your students. They must enter it in their profile to join your classroom."
    },
    {
        target: "#teacherNotificationsBtn",
        title: "Review student requests",
        description: "Open Notifications to approve or reject students. Approved students can enter the lesson menu."
    },
    {
        target: "#teacherCustomizeBtn",
        title: "Add a quiz",
        description: "Use Add Quiz to create custom questions for alphabet, numbers, colors, shapes, or your own lesson."
    },
    {
        target: "#teacherAddLessonBtn",
        title: "Add a lesson",
        description: "Use Add Lesson to create a new lesson with a cover image and learning items."
    },
    {
        target: "#teacherDashboardPrintBtn",
        title: "Print progress reports",
        description: "Use Print to choose one student or all students and create a printable progress report."
    },
    {
        target: "#teacherNeedsInterpretation",
        title: "See who needs practice",
        description: "This section highlights students who may need extra support. Green means online; gray means offline."
    },
    {
        target: "#teacherStudentProgressTable",
        title: "Track learning progress",
        description: "Use the student tracker to review progress, quiz history, activity, and remove a student when needed."
    }
];
let teacherTutorialStep = 0;

function getTeacherTutorialPreferenceKey() {
    const teacher = getTeacherSession() || currentTeacherUsername || "new";
    return `${TEACHER_TUTORIAL_DONT_SHOW_KEY}_${encodeURIComponent(teacher)}`;
}

function setStudentNameFields(fullName) {
    savedStudentFullName = String(fullName || "").trim();
    studentNameFieldsEdited = false;
    const nameParts = savedStudentFullName.split(/\s+/).filter(Boolean);
    if (studentFirstName) studentFirstName.value = nameParts[0] || "";
    if (studentLastName) studentLastName.value = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
    if (studentMiddleInitial) {
        studentMiddleInitial.value = nameParts.length > 2
            ? (nameParts[1].match(/\p{L}/u) || [""])[0].toUpperCase()
            : "";
    }
}

function getStudentFullName() {
    if (savedStudentFullName && !studentNameFieldsEdited) return savedStudentFullName;

    const firstName = studentFirstName?.value.trim() || "";
    const lastName = studentLastName?.value.trim() || "";
    const middleInitial = studentMiddleInitial?.value.trim().replace(/\.$/, "").toUpperCase() || "";
    return [firstName, middleInitial ? `${middleInitial}.` : "", lastName]
        .filter(Boolean)
        .join(" ");
}

const settingsBtn = document.getElementById("settingsBtn");
const settingsModal = document.getElementById("settingsModal");
const closeModal = document.getElementById("settingsCloseBtn") || document.querySelector("#settingsModal .close");
const settingsDoneBtn = document.getElementById("settingsDoneBtn");
const floatingSettingsBtn = settingsBtn;
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
const microphoneToggle = document.getElementById("microphoneToggle");
const tutorialToggle = document.getElementById("tutorialToggle");
const microphoneAllowBtn = document.getElementById("microphoneAllowBtn");
const microphoneStatus = document.getElementById("microphoneStatus");
const microphoneExtraRow = document.getElementById("microphoneExtraRow");
const notificationBox = document.getElementById("notificationBox");
const bgMusicElement = document.getElementById("bgMusic");
const popSound = document.getElementById("popSound");
const bgAudio = bgMusicElement || null;

if (bgMusicVolume) bgMusicVolume.value = "10";
if (sfxVolume) sfxVolume.value = "10";

if (bgAudio && bgMusicVolume) {
    bgAudio.volume = Number(bgMusicVolume.value) / 100;
}
if (popSound && sfxVolume) {
    popSound.volume = Number(sfxVolume.value) / 100;
}

if (tutorialToggle) {
    tutorialToggle.addEventListener("change", () => {
        localStorage.setItem("quizlandTutorialEnabled", String(tutorialToggle.checked));
        if (tutorialToggle.checked) {
            localStorage.removeItem(getTeacherTutorialPreferenceKey());
            if (teacherDashboard?.classList.contains("active")) {
                closeSettingsModal();
                openTeacherTutorial();
            }
        } else {
            closeTeacherTutorial();
        }
    });
}

function setTeacherSidebarCollapsed(collapsed) {
    if (!teacherDashboard || !teacherSidebarToggle) return;

    teacherDashboard.classList.toggle("teacher-sidebar-collapsed", collapsed);
    teacherSidebarToggle.setAttribute("aria-expanded", String(!collapsed));
    teacherSidebarToggle.setAttribute("aria-label", collapsed ? "Show sidebar" : "Hide sidebar");
    teacherSidebarToggle.setAttribute("title", collapsed ? "Show sidebar" : "Hide sidebar");
    teacherSidebarToggle.textContent = collapsed ? "☰" : "×";
}

if (teacherSidebarToggle) {
    teacherSidebarToggle.addEventListener("click", () => {
        const collapsed = !teacherDashboard.classList.contains("teacher-sidebar-collapsed");
        setTeacherSidebarCollapsed(collapsed);
    });
}

async function requestLandscapeMode() {
    if (!window.matchMedia("(max-width: 900px)").matches || !screen.orientation?.lock) return;

    try {
        await screen.orientation.lock("landscape-primary");
    } catch (error) {
        try {
            await screen.orientation.lock("landscape");
        } catch (fallbackError) {
            console.warn("Landscape orientation could not be locked by this browser.", fallbackError);
        }
    }
}

window.addEventListener("load", requestLandscapeMode);
window.addEventListener("orientationchange", requestLandscapeMode);

// ---------- STUDENT ----------
const studentFirstName = document.getElementById("studentFirstName");
const studentLastName = document.getElementById("studentLastName");
const studentMiddleInitial = document.getElementById("studentMiddleInitial");
let savedStudentFullName = "";
let studentNameFieldsEdited = false;
const studentClassroomCode = document.getElementById("studentClassroomCode");
const studentGender = document.getElementById("studentGender");
const profileApprovalStatus = document.getElementById("profileApprovalStatus");

// ---------- AVATARS ----------
const avatars = document.querySelectorAll(".avatar-card");

// ---------- LESSON ----------
const lessonScreen = document.getElementById("lessonScreen");
const quizMenuButtons = document.querySelectorAll(".quiz-menu-btn");
let selectedLessonCategory = null;
const progressFill = document.getElementById("progressFill");
const lessonTitle = document.getElementById("lessonTitle");
const lessonImage = document.getElementById("lessonImage");
const lessonLetter = document.getElementById("lessonLetter");
const lessonWord = document.getElementById("lessonWord");
const lessonFeedback = document.getElementById("lessonFeedback");
const voiceBtn = document.getElementById("voiceBtn");
const lessonAudioBtn = document.getElementById("lessonAudioBtn");
const lessonSpeakBtn = document.getElementById("lessonSpeakBtn");
const lessonVoiceStatus = document.getElementById("lessonVoiceStatus");
const previousLesson = document.getElementById("previousLesson");
const nextLesson = document.getElementById("nextLesson");
const lessonHomeBtn = document.getElementById("lessonHomeBtn");
const lessonHomeConfirmModal = document.getElementById("lessonHomeConfirmModal");
const lessonHomeConfirmTitle = document.getElementById("lessonHomeConfirmTitle");
const lessonHomeConfirmMessage = document.getElementById("lessonHomeConfirmMessage");
const lessonHomeCancelBtn = document.getElementById("lessonHomeCancelBtn");
const lessonHomeConfirmBtn = document.getElementById("lessonHomeConfirmBtn");
let lessonHomeConfirmationTrigger = null;
let lessonHomeConfirmationAction = null;


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
    requestLandscapeMode();
    updateStudentHud();
    if (screen === menuScreen) updateQuizMenuButtons();

}

function hasStudentProfile() {
    return !!(localStorage.getItem("studentName") && localStorage.getItem("avatar") && localStorage.getItem("studentClassroomCode"));
}

function getStudentProfileSubmittedKey(name, classroomCode) {
    return `quizlandProfileSubmitted_${encodeURIComponent(classroomCode)}_${encodeURIComponent(name)}`;
}

function hasSubmittedStudentProfile(name, classroomCode) {
    return localStorage.getItem(getStudentProfileSubmittedKey(name, classroomCode)) === "true";
}

function markStudentProfileSubmitted(name, classroomCode) {
    localStorage.setItem(getStudentProfileSubmittedKey(name, classroomCode), "true");
}

function setProfileCompletionState(completed) {
    if (continueBtn) continueBtn.hidden = completed;
    if (profileApprovalStatus) {
        profileApprovalStatus.hidden = !completed;
        profileApprovalStatus.textContent = completed
            ? "Your profile is waiting for teacher approval."
            : "";
    }
}

function isValidClassroomCode(code) {
    if (!/^\d{6}$/.test(code)) return false;
    return Object.values(getTeacherUsers()).some(user => user.classroomCode === code);
}

function unlockProfileContinueOnEdit() {
    if (!profileScreen?.classList.contains("active")) return;
    studentProfileEditing = true;
    setProfileCompletionState(false);
}

function markProfileEditing() {
    if (profileScreen?.classList.contains("active")) {
        studentProfileEditing = true;
    }
}

function openApprovedStudentMenu(name) {
    updateCurrentStudentRecord();
    syncStudentPresence();
    setProfileCompletionState(false);
    showScreen(menuScreen);

    setTimeout(() => {
        const msg = `Welcome, ${name}! Let's start learning!`;
        showNotification(msg);
        speakText(msg);
    }, 300);
}

function syncProfileApproval() {
    if (!profileScreen || !profileScreen.classList.contains("active")) return;
    if (studentProfileEditing) return;

    const name = localStorage.getItem("studentName");
    if (!name) {
        setProfileCompletionState(false);
        return;
    }

    const request = getStudentRequest(name);
    if (!request) {
        setProfileCompletionState(false);
        return;
    }

    const classroomCode = localStorage.getItem("studentClassroomCode") || "";
    if (!hasSubmittedStudentProfile(name, classroomCode)) {
        setProfileCompletionState(false);
        return;
    }

    if (request.status === "accepted") {
        openApprovedStudentMenu(name);
        return;
    }

    setProfileCompletionState(true);
}

function loadSavedStudentProfile() {
    studentProfileEditing = false;
    const savedName = localStorage.getItem("studentName") || "";
    setStudentNameFields(savedName);
    if (studentClassroomCode) studentClassroomCode.value = localStorage.getItem("studentClassroomCode") || "";
    if (studentGender) studentGender.value = localStorage.getItem("studentGender") || "";

    const savedAvatar = Number(localStorage.getItem("avatar"));
    selectedAvatar = savedAvatar > 0 ? savedAvatar : null;
    avatars.forEach((avatarCard, index) => {
        avatarCard.style.border = index + 1 === selectedAvatar
            ? "4px solid #ffb703"
            : "4px solid transparent";
    });
}

function resumeStudentSession() {
    if (!hasStudentProfile()) return;
    loadSavedStudentProfile();
    showScreen(profileScreen);
    syncProfileApproval();
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
    const showSettings = active === homeScreen
        || (hasStudentProfile()
            && active !== teacherScreen
            && active !== teacherDashboard
            && active !== profileScreen);
    const showTeacher = active === homeScreen;

    if (quizStarScoreEl) {
        quizStarScoreEl.classList.toggle("is-visible", showStars);
        quizStarScoreEl.hidden = !showStars;
        if (showStars) loadStudentStars();
    }

    if (floatingSettingsBtn) {
        floatingSettingsBtn.classList.toggle("is-visible", showSettings);
        floatingSettingsBtn.hidden = !showSettings;
    }

    if (teacherBtn) {
        teacherBtn.classList.toggle("is-visible", showTeacher);
        teacherBtn.hidden = !showTeacher;
    }
}

// ======================================================
// START BUTTON
// ======================================================

startBtn.addEventListener("click", () => {
    if (!startBtn || startBtn.disabled) return;
    startBtn.disabled = true;
    showScreen(profileScreen);
    loadSavedStudentProfile();
    syncProfileApproval();
    startBtn.disabled = false;
});

if (profileBackHome) {
    profileBackHome.addEventListener("click", () => {
        showScreen(homeScreen);
    });
}

if (studentClassroomCode) {
    studentClassroomCode.addEventListener("input", () => {
        studentClassroomCode.value = studentClassroomCode.value.replace(/\D/g, "").slice(0, 6);
        markProfileEditing();
    });
}

[studentFirstName, studentLastName, studentMiddleInitial]
    .filter(Boolean)
    .forEach(input => {
        const markNameEdited = () => {
            studentNameFieldsEdited = true;
            unlockProfileContinueOnEdit();
        };
        input.addEventListener("input", markNameEdited);
        input.addEventListener("change", markNameEdited);
    });

if (studentMiddleInitial) {
    studentMiddleInitial.addEventListener("input", () => {
        studentMiddleInitial.value = studentMiddleInitial.value
            .replace(/[^\p{L}]/gu, "")
            .slice(0, 1)
            .toUpperCase();
    });
}

if (studentGender) {
    studentGender.addEventListener("change", markProfileEditing);
}

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
        teacherUnlockEmail.textContent = `Logging in as ${sessionEmail}`;
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
    } else if (teacherMode === "resetPassword") {
        handleTeacherPasswordReset();
    } else {
        // Login and locked-dashboard access both require password verification.
        handleTeacherLogin();
    }

});

if (teacherForgotPasswordBtn) {
    teacherForgotPasswordBtn.addEventListener("click", beginTeacherInAppPasswordReset);
}

if (teacherUseEmailLoginBtn) {
    teacherUseEmailLoginBtn.addEventListener("click", () => {
        const sessionEmail = getTeacherSession();
        clearTeacherError();
        setTeacherMode("login");
        teacherEmail.value = sessionEmail || "";
        teacherPassword.value = "";
        teacherEmail.focus();
    });
}

document.querySelectorAll(".password-toggle-btn").forEach(button => {
    button.addEventListener("click", () => {
        const passwordInput = document.getElementById(button.dataset.toggleTarget);
        if (!passwordInput) return;

        const isPasswordVisible = passwordInput.type === "text";
        passwordInput.type = isPasswordVisible ? "password" : "text";
        button.textContent = isPasswordVisible ? "Show" : "Hide";
        button.setAttribute("aria-label", isPasswordVisible ? "Show password" : "Hide password");
    });
});

function setTeacherChangePasswordMessage(message, isError = false) {
    if (!teacherChangePasswordMessage) return;
    teacherChangePasswordMessage.textContent = message;
    teacherChangePasswordMessage.classList.toggle("is-error", isError);
}

async function beginTeacherInAppPasswordReset() {
    const expectedEmail = (
        teacherMode === "unlock"
            ? getTeacherSession()
            : teacherEmail.value.trim().toLowerCase()
    ) || "";
    if (!expectedEmail) {
        setTeacherError("Enter your account email first.", teacherEmail);
        teacherEmail.focus();
        return;
    }
    if (!supabaseClient) {
        setTeacherError("Password changes are unavailable. Please refresh and try again.", teacherPassword);
        return;
    }

    if (teacherForgotPasswordBtn) teacherForgotPasswordBtn.disabled = true;
    try {
        const { data, error } = await supabaseClient.auth.getUser();
        if (error) throw error;
        const signedInEmail = data.user?.email?.trim().toLowerCase();
        if (!signedInEmail || signedInEmail !== expectedEmail) {
            setTeacherError(
                "There is no verified teacher session for this account. Log in first, then use Change Password in the dashboard.",
                teacherMode === "unlock" ? teacherPassword : teacherEmail
            );
            return;
        }

        clearTeacherError();
        const verifiedEmail = signedInEmail;
        teacherLoginForm.reset();
        setTeacherMode("resetPassword");
        teacherEmail.value = verifiedEmail;
        teacherUnlockEmail.textContent = `Verified account: ${verifiedEmail}`;
        teacherUnlockEmail.classList.remove("teacher-hidden");
        showScreen(teacherScreen);
        teacherPassword.focus();
    } catch (error) {
        console.error("Unable to verify teacher session for password change.", error);
        setTeacherError(error.message || "Unable to verify the teacher session. Please log in again.", teacherMode === "unlock" ? teacherPassword : teacherEmail);
    } finally {
        if (teacherForgotPasswordBtn) teacherForgotPasswordBtn.disabled = false;
    }
}

async function handleTeacherPasswordReset() {
    const password = teacherPassword.value;
    const confirmation = teacherConfirmPassword.value;
    const expectedEmail = teacherEmail.value.trim().toLowerCase();
    if (password.length < 8) {
        setTeacherError("Use at least 8 characters for the new password.", teacherPassword);
        teacherPassword.focus();
        return;
    }
    if (password !== confirmation) {
        setTeacherError("The passwords do not match.", teacherConfirmPassword);
        teacherConfirmPassword.focus();
        return;
    }
    if (!supabaseClient) {
        setTeacherError("Password changes are unavailable. Please refresh and try again.", teacherPassword);
        return;
    }

    teacherSubmitBtn.disabled = true;
    try {
        const { data: sessionData, error: sessionError } = await supabaseClient.auth.getUser();
        if (sessionError) throw sessionError;
        const verifiedUser = sessionData.user;
        const signedInEmail = verifiedUser?.email?.trim().toLowerCase();
        if (!verifiedUser || !signedInEmail || signedInEmail !== expectedEmail) {
            setTeacherError("Your verified teacher session has expired. Log in again before changing the password.", teacherPassword);
            return;
        }

        const { error } = await supabaseClient.auth.updateUser({ password });
        if (error) throw error;
        clearTeacherError();
        teacherLoginForm.reset();
        setTeacherMode("login");
        teacherEmail.value = signedInEmail;
        showScreen(teacherScreen);
        showNotification("Password updated. Log in with your new password.");
        teacherPassword.focus();
    } catch (error) {
        console.error("Unable to update teacher password from the login screen.", error);
        setTeacherError(error.message || "Unable to update the password. Please try again.", teacherPassword);
    } finally {
        teacherSubmitBtn.disabled = false;
    }
}

function closeTeacherChangePasswordModal() {
    if (teacherChangePasswordModal) teacherChangePasswordModal.hidden = true;
    teacherChangePasswordForm?.reset();
    setTeacherChangePasswordMessage("");
    teacherChangePasswordBtn?.focus();
}

if (teacherChangePasswordBtn) {
    teacherChangePasswordBtn.addEventListener("click", () => {
        if (!getTeacherSession() || !supabaseClient || !teacherDashboard.classList.contains("active")) {
            showNotification("Log in to the teacher dashboard before changing the password.");
            return;
        }
        setTeacherChangePasswordMessage("");
        teacherChangePasswordForm?.reset();
        teacherChangePasswordModal.hidden = false;
        teacherNewPassword.focus();
    });
}

if (teacherChangePasswordCancelBtn) {
    teacherChangePasswordCancelBtn.addEventListener("click", closeTeacherChangePasswordModal);
}

if (teacherChangePasswordForm) {
    teacherChangePasswordForm.addEventListener("submit", async event => {
        event.preventDefault();
        const password = teacherNewPassword.value;
        const confirmation = teacherNewPasswordConfirm.value;
        if (password.length < 8) {
            setTeacherChangePasswordMessage("Use at least 8 characters for the new password.", true);
            teacherNewPassword.focus();
            return;
        }
        if (password !== confirmation) {
            setTeacherChangePasswordMessage("The passwords do not match.", true);
            teacherNewPasswordConfirm.focus();
            return;
        }
        if (!supabaseClient) {
            setTeacherChangePasswordMessage("Password changes are unavailable. Please refresh and try again.", true);
            return;
        }

        const submitButton = teacherChangePasswordForm.querySelector('button[type="submit"]');
        if (submitButton) submitButton.disabled = true;
        try {
            const { data: userData, error: userError } = await supabaseClient.auth.getUser();
            if (userError) throw userError;
            const signedInEmail = userData.user?.email?.trim().toLowerCase();
            if (!signedInEmail || signedInEmail !== getTeacherSession()?.trim().toLowerCase()) {
                setTeacherChangePasswordMessage("Your teacher session could not be verified. Log in again before changing the password.", true);
                return;
            }

            const { error } = await supabaseClient.auth.updateUser({ password });
            if (error) throw error;
            closeTeacherChangePasswordModal();
            showNotification("Teacher password updated successfully.");
        } catch (error) {
            console.error("Unable to update teacher password.", error);
            setTeacherChangePasswordMessage(error.message || "Unable to update the password. Please try again.", true);
        } finally {
            if (submitButton) submitButton.disabled = false;
        }
    });
}

// Clear the complete form error when the teacher returns to any credential field.
[teacherEmail, teacherPassword, teacherConfirmPassword, teacherFullName].forEach(input => {
    if (input) {
        ["input", "focus", "click"].forEach(eventName => {
            input.addEventListener(eventName, () => {
                const wrapper = input.closest(".input-wrapper");
                if (wrapper) {
                    wrapper.classList.remove("error");
                    const errorMsg = wrapper.querySelector(".input-error-message");
                    if (errorMsg) errorMsg.textContent = "";
                    input.setAttribute("aria-invalid", "false");
                }
            });
        });
    }
});


teacherLogoutBtn.addEventListener("click", () => {
    openLessonHomeConfirmation(teacherLogoutBtn, {
        message: "Are you sure you want to log out of the teacher dashboard?",
        confirmText: "Yes, Log Out",
        action: logOutTeacher
    });
});

teacherDashboardHomeBtn.addEventListener("click", () => {
    openLessonHomeConfirmation(teacherDashboardHomeBtn, {
        message: "Are you sure you want to go back to Home?",
        confirmText: "Yes, Go Home",
        action: () => {
            showScreen(homeScreen);
            showNotification("Dashboard locked. Enter the password to open it again.", 4000);
        }
    });
});

function logOutTeacher() {
    currentTeacherUsername = "Teacher";
    clearTeacherSession();
    if (supabaseClient) {
        supabaseClient.auth.signOut().then(({ error }) => {
            if (error) {
                console.error("Unable to sign out teacher.", error);
                showNotification("Could not end the teacher account session. Please try again.");
                return;
            }
            showScreen(homeScreen);
            showNotification("Teacher logged out successfully.");
        }).catch(error => {
            console.error("Teacher sign-out request failed.", error);
            showNotification("Could not end the teacher account session. Please try again.");
        });
        return;
    }
    showScreen(homeScreen);
    showNotification("Teacher logged out successfully.");
}

if (teacherDashboardRefreshBtn) {
    teacherDashboardRefreshBtn.addEventListener("click", () => {
        refreshTeacherDashboard();
    });
}

function refreshTeacherDashboard() {
    if (!getTeacherSession()) {
        showNotification("Log in to a teacher account to refresh the dashboard.");
        return;
    }

    if (teacherClassroomCode) {
        teacherClassroomCode.querySelector("b").textContent = getCurrentTeacherClassroomCode() || "------";
    }
    syncCustomLessons();
    syncCustomLessonQuizCategories();
    renderCustomQuestionList();
    renderCustomLessonList();
    renderTeacherStudentProgress();
    renderTeacherNotifications();

    if (selectedHistoryStudent) {
        const studentStillExists = getStudentRecords().some(record => record.name === selectedHistoryStudent);
        if (studentStillExists) {
            renderQuizHistory(selectedHistoryStudent);
            renderActivityLog(selectedHistoryStudent);
        } else {
            selectedHistoryStudent = null;
            renderQuizHistory(null);
            renderActivityLog(null);
        }
    }
    if (selectedAnalyticsStudent) {
        const studentStillExists = getStudentRecords().some(record => record.name === selectedAnalyticsStudent);
        if (!studentStillExists) {
            selectedAnalyticsStudent = null;
            renderStudentAnalytics(null);
        }
    }

    showNotification("Teacher dashboard refreshed.");
}

function escapePrintText(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function openTeacherPrintModal() {
    if (!teacherPrintModal || !teacherPrintStudent) return;
    const records = getStudentRecords().sort((a, b) => a.name.localeCompare(b.name));
    teacherPrintStudent.innerHTML = '<option value="all">All students</option>';
    records.forEach(record => {
        const option = document.createElement("option");
        option.value = record.name;
        option.textContent = record.name;
        teacherPrintStudent.appendChild(option);
    });
    teacherPrintModal.hidden = false;
    teacherPrintStudent.focus();
}

function closeTeacherPrintModal() {
    if (teacherPrintModal) teacherPrintModal.hidden = true;
}

function buildTeacherPrintReport(records) {
    const totalCategories = Object.keys(lessons).length;
    const reports = records.map(record => {
        const history = getStudentQuizHistory(record.name);
        const historyRows = history.length
            ? history.map(entry => `
                <tr>
                    <td>${escapePrintText(formatQuizHistoryDate(entry.date))}</td>
                    <td>${escapePrintText(entry.category || "Quiz")}</td>
                    <td>${escapePrintText(`${entry.score} / ${entry.total}`)}</td>
                    <td>${escapePrintText(`${entry.accuracy}%`)}</td>
                    <td>${escapePrintText(entry.levelStopped ? ({ easy: "Easy", medium: "Normal", hard: "Hard" }[entry.levelStopped] || "Not recorded") : "Not recorded")}</td>
                </tr>`).join("")
            : '<tr><td colspan="5">No quiz history recorded.</td></tr>';

        return `
            <article class="teacher-print-student">
                <h2>${escapePrintText(record.name)}</h2>
                <p>Progress: ${escapePrintText(`${record.categoriesDone || 0}/${totalCategories} categories (${record.progressPercent || 0}%)`)} | Accuracy: ${escapePrintText(`${record.accuracy || 0}%`)} | Stars: ${escapePrintText(record.stars || 0)}</p>
                <table>
                    <thead><tr><th>Date</th><th>Category</th><th>Score</th><th>Accuracy</th><th>Level Stopped</th></tr></thead>
                    <tbody>${historyRows}</tbody>
                </table>
            </article>`;
    }).join("");

    teacherPrintReport.innerHTML = `
        <h1>QuizLand Student Progress</h1>
        <p>Teacher: ${escapePrintText(currentTeacherUsername)} | Printed: ${escapePrintText(formatQuizHistoryDate(Date.now()))}</p>
        ${reports || "<p>No student records available.</p>"}`;
}

function getSelectedTeacherPrintRecords() {
    const records = getStudentRecords();
    const selectedName = teacherPrintStudent ? teacherPrintStudent.value : "all";
    return selectedName === "all"
        ? records
        : records.filter(record => record.name === selectedName);
}

function downloadTeacherPrintReport() {
    buildTeacherPrintReport(getSelectedTeacherPrintRecords());
    const reportStyles = `
        body{font-family:Arial,sans-serif;color:#111;margin:32px}
        h1{font-size:24px;margin:0 0 6px}
        body>p{color:#444;margin:0 0 24px}
        article{margin-bottom:28px;page-break-inside:avoid}
        h2{font-size:19px;margin:0 0 6px}
        article p{margin:0 0 12px}
        table{width:100%;border-collapse:collapse;font-size:12px}
        th,td{padding:7px;border:1px solid #bbb;text-align:left}
        th{background:#eee}`;
    const documentHtml = `<!doctype html><html><head><meta charset="UTF-8"><title>QuizLand Student Progress</title><style>${reportStyles}</style></head><body>${teacherPrintReport.innerHTML}</body></html>`;
    const blob = new Blob([documentHtml], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "quizland-student-progress.html";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
}

if (teacherDashboardPrintBtn) {
    teacherDashboardPrintBtn.addEventListener("click", openTeacherPrintModal);
}

if (teacherActivityLogBtn) {
    teacherActivityLogBtn.addEventListener("click", () => {
        if (!teacherActivityLogModal) {
            console.error("Activity Log dialog is not available.");
            showNotification("Activity Log could not be opened. Please refresh the dashboard.");
            return;
        }
        renderActivityLogStudentPicker();
        teacherActivityLogModal.hidden = false;
    });
}
if (teacherAnalyticsBtn) {
    teacherAnalyticsBtn.addEventListener("click", () => openTeacherAnalytics());
}
if (teacherDashboardSettingsBtn) {
    teacherDashboardSettingsBtn.addEventListener("click", openSettingsModal);
}
if (teacherPrintCancelBtn) {
    teacherPrintCancelBtn.addEventListener("click", closeTeacherPrintModal);
}
if (teacherPrintConfirmBtn) {
    teacherPrintConfirmBtn.addEventListener("click", () => {
        downloadTeacherPrintReport();
        closeTeacherPrintModal();
    });
}

function closeTeacherArchive() {
    if (teacherArchiveModal) teacherArchiveModal.hidden = true;
}

if (teacherArchiveBtn) {
    teacherArchiveBtn.addEventListener("click", () => {
        try {
            renderTeacherArchive();
            if (teacherArchiveModal) teacherArchiveModal.hidden = false;
        } catch (error) {
            console.error("Unable to open the student archive.", error);
            showNotification("The student archive could not be opened. Please refresh the dashboard.");
        }
    });
}

[teacherArchiveCloseBtn, teacherArchiveDoneBtn].forEach(button => {
    button?.addEventListener("click", closeTeacherArchive);
});

function closeTeacherActivityLog() {
    if (teacherActivityLogModal) teacherActivityLogModal.hidden = true;
}

[teacherActivityLogCloseBtn, teacherActivityLogDoneBtn].forEach(button => {
    button?.addEventListener("click", closeTeacherActivityLog);
});

function closeTeacherAnalytics() {
    if (teacherAnalyticsModal) teacherAnalyticsModal.hidden = true;
}

teacherAnalyticsCloseBtn?.addEventListener("click", closeTeacherAnalytics);
teacherAnalyticsStudentSearch?.addEventListener("input", renderTeacherAnalyticsStudentPicker);

function selectTeacherAnalyticsMonth(year, month) {
    const date = new Date(year, month, 1);
    if (date.getFullYear() < ANALYTICS_MIN_YEAR || date.getFullYear() > ANALYTICS_MAX_YEAR) return;
    selectedAnalyticsYear = date.getFullYear();
    selectedAnalyticsMonth = date.getMonth();
    selectedAnalyticsDate = toDateKey(date.getTime());
    renderStudentAnalytics(selectedAnalyticsStudent);
}

teacherAnalyticsMonth?.addEventListener("change", () => {
    selectTeacherAnalyticsMonth(selectedAnalyticsYear, Number(teacherAnalyticsMonth.value));
});
teacherAnalyticsYear?.addEventListener("change", () => {
    selectTeacherAnalyticsMonth(Number(teacherAnalyticsYear.value), selectedAnalyticsMonth);
});
teacherAnalyticsPreviousMonth?.addEventListener("click", () => {
    selectTeacherAnalyticsMonth(selectedAnalyticsYear, selectedAnalyticsMonth - 1);
});
teacherAnalyticsNextMonth?.addEventListener("click", () => {
    selectTeacherAnalyticsMonth(selectedAnalyticsYear, selectedAnalyticsMonth + 1);
});

function openTeacherAnalytics(studentName = null) {
    if (!teacherAnalyticsModal) {
        console.error("Learning Analytics dialog is not available.");
        showNotification("Learning Analytics could not be opened. Please refresh the dashboard.");
        return;
    }
    if (studentName) selectedAnalyticsStudent = studentName;
    renderTeacherAnalyticsStudentPicker();
    teacherAnalyticsModal.hidden = false;
}

function renderTeacherAnalyticsStudentPicker() {
    if (!teacherAnalyticsStudents) return;
    teacherAnalyticsStudents.replaceChildren();
    const students = getStudentRecords().sort((a, b) => a.name.localeCompare(b.name));

    if (!students.some(student => student.name === selectedAnalyticsStudent)) {
        selectedAnalyticsStudent = students.some(student => student.name === selectedHistoryStudent)
            ? selectedHistoryStudent
            : students[0]?.name || null;
    }

    if (!students.length) {
        const empty = document.createElement("p");
        empty.className = "teacher-archive-empty";
        empty.textContent = "No students";
        teacherAnalyticsStudents.appendChild(empty);
        renderStudentAnalytics(null);
        return;
    }

    const query = teacherAnalyticsStudentSearch?.value.trim().toLocaleLowerCase() || "";
    const filteredStudents = students.filter(student => student.name.toLocaleLowerCase().includes(query));
    if (!filteredStudents.length) {
        const empty = document.createElement("p");
        empty.className = "teacher-archive-empty";
        empty.textContent = "No students found";
        teacherAnalyticsStudents.appendChild(empty);
        return;
    }

    filteredStudents.forEach(student => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "teacher-activity-log-student";
        button.textContent = student.name;
        const isSelected = student.name === selectedAnalyticsStudent;
        button.classList.toggle("is-selected", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));
        button.addEventListener("click", () => {
            selectedAnalyticsStudent = student.name;
            renderTeacherAnalyticsStudentPicker();
        });
        teacherAnalyticsStudents.appendChild(button);
    });

    renderStudentAnalytics(selectedAnalyticsStudent);
}

function renderActivityLogStudentPicker() {
    if (!teacherActivityLogStudents) return;
    teacherActivityLogStudents.replaceChildren();
    const students = getStudentRecords().sort((a, b) => a.name.localeCompare(b.name));

    if (!students.some(student => student.name === selectedActivityLogStudent)) {
        selectedActivityLogStudent = students.some(student => student.name === selectedHistoryStudent)
            ? selectedHistoryStudent
            : null;
    }

    if (!students.length) {
        const empty = document.createElement("p");
        empty.className = "teacher-archive-empty";
        empty.textContent = "No students are available.";
        teacherActivityLogStudents.appendChild(empty);
        renderActivityLog(null);
        return;
    }

    students.forEach(student => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "teacher-activity-log-student";
        button.textContent = student.name;
        const isSelected = student.name === selectedActivityLogStudent;
        button.classList.toggle("is-selected", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));
        button.addEventListener("click", () => {
            selectedActivityLogStudent = student.name;
            renderActivityLogStudentPicker();
        });
        teacherActivityLogStudents.appendChild(button);
    });

    renderActivityLog(selectedActivityLogStudent);
}

function getCustomQuestionsKey() {
    return getNamespacedKey("customQuizQuestions");
}

function getCustomQuizQuestions() {
    return JSON.parse(localStorage.getItem(getCustomQuestionsKey())) || [];
}

function saveCustomQuizQuestions(questions) {
    localStorage.setItem(getCustomQuestionsKey(), JSON.stringify(questions));
}

let selectedCustomQuestionLevel = "easy";

function renderCustomQuestionList() {
    if (!customQuestionList) return;
    const questions = getCustomQuizQuestions()
        .filter(question => question.difficulty === selectedCustomQuestionLevel);
    customQuestionList.innerHTML = questions.length
        ? questions.map(question => `
            <div class="custom-question-item">
                <div><strong>${escapePrintText(question.promptEN)}</strong><span>${escapePrintText(getLessonDisplayName(question.category))} · ${escapePrintText(question.difficulty)}${question.audio ? " · Audio attached" : ""}</span></div>
                <button class="tdash-btn tdash-btn--danger" type="button" data-custom-question-id="${escapePrintText(question.id)}">Remove</button>
            </div>`).join("")
        : `<p class="custom-question-empty">No ${selectedCustomQuestionLevel === "medium" ? "normal" : selectedCustomQuestionLevel} questions added yet.</p>`;

    customQuestionList.querySelectorAll("[data-custom-question-id]").forEach(button => {
        button.addEventListener("click", () => {
            saveCustomQuizQuestions(getCustomQuizQuestions().filter(question => question.id !== button.dataset.customQuestionId));
            renderCustomQuestionList();
        });
    });
}

customQuestionLevelTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        selectedCustomQuestionLevel = tab.dataset.questionLevel || "easy";
        customQuestionLevelTabs.forEach(levelTab => {
            const isSelected = levelTab === tab;
            levelTab.classList.toggle("is-active", isSelected);
            levelTab.setAttribute("aria-pressed", String(isSelected));
        });
        renderCustomQuestionList();
    });
});

function syncCustomLessonQuizCategories() {
    if (!customQuestionCategory) return;
    const selectedCategory = customQuestionCategory.value;
    const customLessons = getCustomLessons();
    customQuestionCategory.querySelectorAll("[data-custom-lesson-category]").forEach(option => option.remove());
    customLessons.forEach(customLesson => {
        if (!customLesson.id || !customLesson.name) return;
        const option = document.createElement("option");
        option.value = customLesson.id;
        option.textContent = customLesson.name;
        option.dataset.customLessonCategory = "true";
        customQuestionCategory.appendChild(option);
    });
    if ([...customQuestionCategory.options].some(option => option.value === selectedCategory)) {
        customQuestionCategory.value = selectedCategory;
    }
}

function openTeacherCustomizeModal() {
    if (!teacherCustomizeModal) return;
    syncCustomLessonQuizCategories();
    renderCustomQuestionList();
    teacherCustomizeModal.hidden = false;
    customQuestionPrompt?.focus();
}

function closeTeacherCustomizeModal() {
    if (teacherCustomizeModal) teacherCustomizeModal.hidden = true;
}

if (teacherCustomizeBtn) teacherCustomizeBtn.addEventListener("click", openTeacherCustomizeModal);
if (teacherCustomizeCloseBtn) teacherCustomizeCloseBtn.addEventListener("click", closeTeacherCustomizeModal);
if (teacherCustomizeForm) {
    teacherCustomizeForm.addEventListener("submit", async event => {
        event.preventDefault();
        const choiceInputs = [...teacherCustomizeForm.querySelectorAll(".custom-choice")];
        const imageInputs = [...teacherCustomizeForm.querySelectorAll(".custom-choice-image")];
        const choices = choiceInputs.map(input => input.value.trim()).filter(Boolean);
        const audioFile = customQuestionAudio?.files[0];
        const correct = customQuestionCorrect.value.trim();
        const uniqueChoices = [...new Set(choices)];
        if (!uniqueChoices.includes(correct)) {
            customQuestionMessage.textContent = "The correct answer must be one of the choices.";
            return;
        }

        try {
            const choiceImages = {};
            for (let index = 0; index < choiceInputs.length; index++) {
                const choice = choiceInputs[index].value.trim();
                const file = imageInputs[index]?.files[0];
                if (choice && file) {
                    choiceImages[choice] = await readImageAsDataUrl(file);
                }
            }
            const audio = audioFile ? await readAudioAsDataUrl(audioFile) : "";

            const questions = getCustomQuizQuestions();
            questions.push({
                id: `custom-${Date.now()}`,
                category: customQuestionCategory.value,
                difficulty: customQuestionDifficulty.value,
                promptEN: customQuestionPrompt.value.trim(),
                promptTL: customQuestionPrompt.value.trim(),
                word: correct,
                choices: uniqueChoices,
                choiceImages,
                audio,
                custom: true
            });
            saveCustomQuizQuestions(questions);
            selectedCustomQuestionLevel = customQuestionDifficulty.value;
            customQuestionLevelTabs.forEach(tab => {
                const isSelected = tab.dataset.questionLevel === selectedCustomQuestionLevel;
                tab.classList.toggle("is-active", isSelected);
                tab.setAttribute("aria-pressed", String(isSelected));
            });
            teacherCustomizeForm.reset();
            syncCustomLessonQuizCategories();
            customQuestionMessage.textContent = "Question added to the selected quiz level.";
            renderCustomQuestionList();
        } catch (error) {
            console.error("Unable to save the custom quiz question.", error);
            customQuestionMessage.textContent = error.message || "The question could not be saved. Try a smaller audio or image file.";
        }
    });
}

function getCustomLessonsKey() {
    return getNamespacedKey("customLessons");
}

function getCustomLessons() {
    try {
        const lessons = JSON.parse(localStorage.getItem(getCustomLessonsKey()));
        return Array.isArray(lessons) ? lessons : [];
    } catch (error) {
        return [];
    }
}

function getLessonDisplayName(category) {
    const builtInNames = {
        alphabet: "Alphabet",
        numbers: "Numbers",
        colors: "Colors",
        shapes: "Shapes"
    };
    if (builtInNames[category]) return builtInNames[category];

    const customLesson = getCustomLessons().find(lesson => lesson.id === category);
    return customLesson?.name || category;
}

function saveCustomLessons(customLessons) {
    localStorage.setItem(getCustomLessonsKey(), JSON.stringify(customLessons));
}

function createCustomLessonId() {
    return `custom-lesson-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function addLessonItemField(item = {}) {
    if (!customLessonItems) return;
    const itemField = document.createElement("div");
    itemField.className = "custom-lesson-item";
    itemField.innerHTML = `
        <div class="custom-lesson-item-fields">
            <input class="custom-lesson-item-name" type="text" maxlength="60" placeholder="Animal name (for example, Giraffe)" value="${escapePrintText(item.name || "")}" required>
            <input class="custom-lesson-item-image" type="file" accept="image/*" aria-label="Picture for this lesson item" ${item.image ? "" : "required"}>
            <label class="custom-lesson-audio-label">Audio (optional, up to 1 MB)
                <input class="custom-lesson-item-audio" type="file" accept="audio/*" aria-label="Audio for this lesson item">
            </label>
        </div>
        <button class="tdash-btn tdash-btn--danger custom-lesson-remove" type="button">Remove</button>`;
    if (item.image) {
        itemField.dataset.image = item.image;
    }
    if (item.audio) {
        itemField.dataset.audio = item.audio;
    }
    itemField.querySelector(".custom-lesson-remove").addEventListener("click", () => {
        itemField.remove();
    });
    customLessonItems.appendChild(itemField);
}

function renderCustomLessonList() {
    if (!customLessonList) return;
    const customLessons = getCustomLessons();
    customLessonList.innerHTML = "";
    if (!customLessons.length) {
        customLessonList.innerHTML = '<p class="custom-question-empty">No lessons added yet.</p>';
        return;
    }
    customLessons.forEach(customLesson => {
        const item = document.createElement("div");
        item.className = "custom-question-item";
        item.innerHTML = `
            <div>
                <strong></strong>
                <span></span>
            </div>
            <div class="custom-lesson-actions">
                <button class="tdash-btn tdash-btn--soft custom-lesson-visibility" type="button"></button>
                <button class="tdash-btn tdash-btn--danger" type="button">Remove</button>
            </div>`;
        item.querySelector("strong").textContent = customLesson.name;
        item.querySelector("span").textContent = `${customLesson.items.length} pictures · ${customLesson.hidden ? "Hidden from students" : "Visible to students"}`;
        item.querySelector(".custom-lesson-visibility").textContent = customLesson.hidden ? "Show lesson" : "Hide lesson";
        item.querySelector(".custom-lesson-visibility").addEventListener("click", () => {
            const updatedLessons = getCustomLessons().map(entry =>
                entry.id === customLesson.id
                    ? { ...entry, hidden: !entry.hidden }
                    : entry
            );
            saveCustomLessons(updatedLessons);
            syncCustomLessons();
            renderCustomLessonList();
            showNotification(`${customLesson.name} is now ${customLesson.hidden ? "visible to" : "hidden from"} students.`);
        });
        item.querySelector(".tdash-btn--danger").addEventListener("click", () => {
            saveCustomLessons(getCustomLessons().filter(entry => entry.id !== customLesson.id));
            syncCustomLessons();
            renderCustomLessonList();
            showNotification(`${customLesson.name} lesson removed.`);
        });
        customLessonList.appendChild(item);
    });
}

function openTeacherLessonModal() {
    if (!teacherLessonModal) return;
    teacherLessonForm.reset();
    customLessonItems.innerHTML = "";
    addLessonItemField();
    addLessonItemField();
    teacherLessonMessage.textContent = "";
    renderCustomLessonList();
    teacherLessonModal.hidden = false;
    customLessonName.focus();
}

function closeTeacherLessonModal() {
    if (teacherLessonModal) teacherLessonModal.hidden = true;
}

if (teacherAddLessonBtn) teacherAddLessonBtn.addEventListener("click", openTeacherLessonModal);
if (teacherLessonCloseBtn) teacherLessonCloseBtn.addEventListener("click", closeTeacherLessonModal);
if (addLessonItemBtn) addLessonItemBtn.addEventListener("click", () => addLessonItemField());
if (teacherLessonForm) {
    teacherLessonForm.addEventListener("submit", async event => {
        event.preventDefault();
        const itemFields = [...customLessonItems.querySelectorAll(".custom-lesson-item")];
        const items = [];
        try {
            for (const itemField of itemFields) {
                const name = itemField.querySelector(".custom-lesson-item-name").value.trim();
                const file = itemField.querySelector(".custom-lesson-item-image").files[0];
                const image = file ? await readImageAsDataUrl(file) : itemField.dataset.image;
                const audioFile = itemField.querySelector(".custom-lesson-item-audio").files[0];
                const audio = audioFile ? await readAudioAsDataUrl(audioFile) : itemField.dataset.audio || "";
                if (name && image) items.push({ name, image, audio });
            }
        } catch (error) {
            console.error("Unable to read custom lesson media.", error);
            teacherLessonMessage.textContent = error.message || "A lesson picture or audio clip could not be read. Please choose the files again.";
            return;
        }
        if (!items.length) {
            teacherLessonMessage.textContent = "Add at least one picture and name.";
            return;
        }
        const coverFile = customLessonCover.files[0];
        if (!coverFile) {
            teacherLessonMessage.textContent = "Choose a cover picture.";
            return;
        }
        let cover;
        try {
            cover = await readImageAsDataUrl(coverFile);
        } catch (error) {
            console.error("Unable to prepare custom lesson images.", error);
            teacherLessonMessage.textContent = "The lesson images could not be prepared. Please choose them again.";
            return;
        }
        const customLesson = {
            id: createCustomLessonId(),
            name: customLessonName.value.trim(),
            cover,
            items,
            hidden: false
        };
        if (!customLesson.name) {
            teacherLessonMessage.textContent = "Enter a lesson name.";
            return;
        }
        try {
            const existingLessons = await Promise.all(getCustomLessons().map(async lesson => ({
                ...lesson,
                cover: await compressImageDataUrl(lesson.cover),
                items: await Promise.all((lesson.items || []).map(async item => ({
                    ...item,
                    image: await compressImageDataUrl(item.image)
                })))
            })));
            saveCustomLessons([...existingLessons, customLesson]);
        } catch (error) {
            console.error("Unable to save custom lesson.", error);
            teacherLessonMessage.textContent = "This lesson could not be saved. Please use smaller images or audio clips.";
            return;
        }
        syncCustomLessonQuizCategories();
        syncCustomLessons();
        renderCustomLessonList();
        teacherLessonForm.reset();
        customLessonItems.innerHTML = "";
        addLessonItemField();
        addLessonItemField();
        teacherLessonMessage.textContent = "Lesson saved. Students can now open it from the learning menu.";
        showNotification(`${customLesson.name} lesson added.`);
    });
}

function readImageAsDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async () => {
            try {
                resolve(await compressImageDataUrl(reader.result));
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

const MAX_UPLOADED_AUDIO_BYTES = 1024 * 1024;

function readAudioAsDataUrl(file) {
    if (file.size > MAX_UPLOADED_AUDIO_BYTES) {
        return Promise.reject(new Error("Audio files must be 1 MB or smaller."));
    }
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result !== "string") {
                reject(new Error("The audio file could not be read. Please choose it again."));
                return;
            }
            resolve(reader.result);
        };
        reader.onerror = () => reject(new Error("The audio file could not be read. Please choose it again."));
        reader.readAsDataURL(file);
    });
}

function playUploadedAudio(audioData) {
    if (!audioData) return Promise.reject(new Error("No audio was added for this item."));
    if (activeUploadedAudio) {
        activeUploadedAudio.pause();
        activeUploadedAudio.currentTime = 0;
    }
    return Promise.resolve().then(() => {
        const audio = new Audio(audioData);
        activeUploadedAudio = audio;
        audio.addEventListener("ended", () => {
            if (activeUploadedAudio === audio) activeUploadedAudio = null;
        }, { once: true });
        return audio.play().catch(error => {
            if (activeUploadedAudio === audio) activeUploadedAudio = null;
            throw error;
        });
    });
}

function stopUploadedAudio() {
    if (!activeUploadedAudio) return;
    activeUploadedAudio.pause();
    activeUploadedAudio.currentTime = 0;
    activeUploadedAudio = null;
}

function compressImageDataUrl(dataUrl) {
    if (!dataUrl || typeof dataUrl !== "string") {
        return Promise.resolve(dataUrl);
    }

    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            const maxDimension = 1000;
            const scale = Math.min(1, maxDimension / Math.max(image.naturalWidth, image.naturalHeight));
            const canvas = document.createElement("canvas");
            canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
            canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
            const context = canvas.getContext("2d");
            if (!context) {
                resolve(dataUrl);
                return;
            }
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL("image/jpeg", 0.78));
        };
        image.onerror = reject;
        image.src = dataUrl;
    });
}

function clearTeacherError(){
    // Clear error state from all input wrappers
    const inputWrappers = document.querySelectorAll(".input-wrapper");
    inputWrappers.forEach(wrapper => {
        wrapper.classList.remove("error");
        const errorMsg = wrapper.querySelector(".input-error-message");
        if (errorMsg) {
            errorMsg.textContent = "";
        }
        const input = wrapper.querySelector("input");
        if (input) {
            input.setAttribute("aria-invalid", "false");
        }
    });
}

function setTeacherMode(mode){
    teacherMode = mode;

    const isRegister = mode === "register";
    const isUnlock = mode === "unlock";
    const isPasswordReset = mode === "resetPassword";
    teacherPassword.autocomplete = isRegister || isPasswordReset ? "new-password" : "current-password";
    teacherConfirmPassword.autocomplete = "new-password";

    if (isUnlock) {
        teacherFormTitle.textContent = "Enter the Password";
        teacherFormSubtitle.textContent = "";
        teacherFormSubtitle.classList.add("teacher-hidden");
        teacherUnlockEmail.textContent = `Logging in as ${getTeacherSession() || ""}`;
        teacherUnlockEmail.classList.remove("teacher-hidden");
        teacherSubmitBtn.textContent = "Log in";
        teacherPassword.placeholder = "Enter the password";
        teacherLoginForm.classList.add("teacher-form--unlock");
    } else if (isPasswordReset) {
        teacherFormTitle.textContent = "Set a New Password";
        teacherFormSubtitle.textContent = "Enter and confirm a new password for your verified teacher account.";
        teacherFormSubtitle.classList.remove("teacher-hidden");
        teacherSubmitBtn.textContent = "Update Password";
        teacherPassword.placeholder = "New password";
        teacherConfirmPassword.placeholder = "Confirm new password";
        teacherLoginForm.classList.remove("teacher-form--unlock");
    } else {
        teacherUnlockEmail.classList.add("teacher-hidden");
        teacherFormSubtitle.classList.remove("teacher-hidden");
        teacherLoginForm.classList.remove("teacher-form--unlock");
        teacherFormTitle.textContent = isRegister ? "Teacher Register" : "Teacher Login";
        teacherFormSubtitle.textContent = isRegister
            ? "Create a new account to manage lessons."
            : "Enter your teacher credentials to access the dashboard.";
        teacherSubmitBtn.textContent = isRegister ? "Register" : "Login";
        teacherPassword.placeholder = "Password";
        teacherConfirmPassword.placeholder = "Confirm Password";
        teacherSwitchText.textContent = isRegister
            ? "Already have an account?"
            : "Don't have an account?";
        teacherToggleMode.textContent = isRegister ? "Login" : "Register";
    }

    teacherEmail.closest(".input-wrapper").classList.toggle("teacher-hidden", isUnlock || isPasswordReset);
    teacherConfirmPassword.closest(".input-wrapper").classList.toggle("teacher-hidden", !isRegister && !isPasswordReset);
    teacherFullName.closest(".input-wrapper").classList.toggle("teacher-hidden", !isRegister);
    if (teacherForgotPasswordBtn) {
        teacherForgotPasswordBtn.classList.toggle("teacher-hidden", isRegister || isPasswordReset);
    }
    if (teacherUseEmailLoginBtn) {
        teacherUseEmailLoginBtn.classList.toggle("teacher-hidden", !isUnlock || isPasswordReset);
    }
    if (teacherSwitchRow) {
        teacherSwitchRow.classList.toggle("teacher-hidden", isUnlock || isPasswordReset);
    }
}

function getTeacherUsers(){
    const raw = localStorage.getItem("teacherUsers");
    try {
        const parsed = raw ? JSON.parse(raw) : {};
        if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
        const profiles = {};
        let removedPasswords = false;
        Object.entries(parsed).forEach(([email, profile]) => {
            if (!profile || typeof profile !== "object") return;
            const { password, ...safeProfile } = profile;
            if (password !== undefined) removedPasswords = true;
            profiles[email] = safeProfile;
        });
        if (removedPasswords) localStorage.setItem("teacherUsers", JSON.stringify(profiles));
        return profiles;
    } catch (error) {
        return {};
    }
}

function saveTeacherUsers(users){
    const profiles = Object.fromEntries(Object.entries(users).map(([email, profile]) => {
        const { password, ...safeProfile } = profile;
        return [email, safeProfile];
    }));
    localStorage.setItem("teacherUsers", JSON.stringify(profiles));
}

getTeacherUsers();

function createClassroomCode(users) {
    const usedCodes = new Set(Object.values(users).map(user => user.classroomCode).filter(Boolean));
    let code = "";
    do {
        code = String(Math.floor(100000 + Math.random() * 900000));
    } while (usedCodes.has(code));
    return code;
}

function getCurrentTeacherRecord() {
    const email = getTeacherSession();
    const users = getTeacherUsers();
    if (!email || !users[email]) return null;
    if (!/^\d{6}$/.test(users[email].classroomCode || "")) {
        users[email].classroomCode = createClassroomCode(users);
        saveTeacherUsers(users);
    }
    return users[email];
}

function getCurrentTeacherClassroomCode() {
    return getCurrentTeacherRecord()?.classroomCode || "";
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

function saveTeacherProfile(authUser, preferredName = "") {
    const email = authUser.email?.trim().toLowerCase();
    if (!email) throw new Error("Supabase returned a teacher account without an email.");

    const users = getTeacherUsers();
    const existingProfile = users[email] || {};
    const metadata = authUser.user_metadata || {};
    const fullName = preferredName || metadata.full_name || existingProfile.fullName || email;
    const classroomCode = metadata.classroom_code || existingProfile.classroomCode || createClassroomCode(users);
    users[email] = { email, fullName, classroomCode };
    saveTeacherUsers(users);
    return users[email];
}

async function handleTeacherRegister(){
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

    if (!supabaseClient) {
        setTeacherError("Teacher authentication is unavailable. Please refresh and try again.", teacherEmail);
        return;
    }
    const users = getTeacherUsers();
    const classroomCode = users[email]?.classroomCode || createClassroomCode(users);
    let data;
    let error;
    try {
        ({ data, error } = await supabaseClient.auth.signUp({
            email,
            password,
            options: {
                data: { full_name: fullName, classroom_code: classroomCode }
            }
        }));
    } catch (requestError) {
        console.error("Teacher registration request failed.", requestError);
        setTeacherError("Unable to connect to the account service. Please try again.", teacherEmail);
        return;
    }
    if (error) {
        setTeacherError(error.message || "Unable to create the teacher account.", teacherEmail);
        return;
    }
    let profile;
    try {
        if (data.user) profile = saveTeacherProfile(data.user, fullName);
    } catch (profileError) {
        console.error("Unable to save the new teacher profile.", profileError);
        setTeacherError("Your account was created, but the teacher profile could not be saved.", teacherEmail);
        return;
    }

    setTeacherMode("login");
    teacherEmail.value = email;
    teacherPassword.value = "";
    teacherConfirmPassword.value = "";
    teacherFullName.value = "";
    if (data.session) {
        currentTeacherUsername = profile?.fullName || fullName || email;
        saveTeacherSession(email);
        selectedHistoryStudent = null;
        selectedAnalyticsStudent = null;
        syncCustomLessons();
        syncCustomLessonQuizCategories();
        renderCustomQuestionList();
        if (teacherClassroomCode) {
            teacherClassroomCode.querySelector("b").textContent = getCurrentTeacherClassroomCode();
        }
        showTeacherDashboard();
        showNotification("Registration successful. Welcome to your teacher dashboard!");
    } else {
        showScreen(teacherScreen);
        setTeacherError(
            "Email confirmation is still enabled in Supabase. Disable email confirmation in the Supabase Auth settings to open the dashboard immediately.",
            teacherEmail
        );
    }
}

async function handleTeacherLogin(){
    const isUnlock = teacherMode === "unlock";
    const email = (isUnlock ? getTeacherSession() : teacherEmail.value.trim().toLowerCase()) || "";
    const password = teacherPassword.value;

    if (isUnlock) {
        if (!password) {
            teacherPassword.focus();
            setTeacherError("Please enter the password.", teacherPassword);
            return;
        }
    } else if (!email || !password) {
        setTeacherError("Please enter both email and password.");
        return;
    }

    if (!supabaseClient) {
        setTeacherError("Teacher authentication is unavailable. Please refresh and try again.", isUnlock ? teacherPassword : teacherEmail);
        return;
    }

    let data;
    let error;
    try {
        ({ data, error } = await supabaseClient.auth.signInWithPassword({ email, password }));
    } catch (requestError) {
        console.error("Teacher login request failed.", requestError);
        setTeacherError("Unable to connect to the account service. Please try again.", teacherPassword);
        return;
    }
    if (error || !data.user) {
        teacherPassword.value = "";
        teacherPassword.focus();
        const isUnconfirmed = error?.code === "email_not_confirmed"
            || /email not confirmed/i.test(error?.message || "");
        const isInvalidCredentials = error?.code === "invalid_credentials"
            || /invalid login credentials/i.test(error?.message || "");
        setTeacherError(
            isUnconfirmed
                ? "Email confirmation is still enabled in Supabase. Disable it in the Supabase Auth settings, then try logging in again."
                : isInvalidCredentials
                    ? "Email or password was not accepted. Check the email shown and try again, or use Forgot Password."
                    : error?.message || "Unable to log in. Please try again.",
            teacherPassword
        );
        return;
    }

    let profile;
    try {
        profile = saveTeacherProfile(data.user);
    } catch (profileError) {
        console.error("Unable to load teacher profile.", profileError);
        setTeacherError("Signed in, but the teacher profile could not be loaded.", teacherEmail);
        return;
    }
    const metadata = data.user.user_metadata || {};
    if (!metadata.classroom_code || !metadata.full_name) {
        try {
            const { error: metadataError } = await supabaseClient.auth.updateUser({
                data: { full_name: profile.fullName, classroom_code: profile.classroomCode }
            });
            if (metadataError) {
                console.error("Unable to sync teacher profile metadata.", metadataError);
            }
        } catch (metadataError) {
            console.error("Unable to sync teacher profile metadata.", metadataError);
        }
    }
    currentTeacherUsername = profile.fullName || data.user.email;
    saveTeacherSession(email);
    selectedHistoryStudent = null;
    selectedAnalyticsStudent = null;
    syncCustomLessons();
    syncCustomLessonQuizCategories();
    renderCustomQuestionList();
    if (teacherClassroomCode) {
        teacherClassroomCode.querySelector("b").textContent = getCurrentTeacherClassroomCode();
    }
    teacherPassword.value = "";
    showTeacherDashboard();
    showNotification("Welcome back, " + currentTeacherUsername + "!");
}

function setTeacherError(message, targetInput = null){
    const targetWrapper = targetInput?.closest(".input-wrapper") ||
        [...document.querySelectorAll(".input-wrapper")]
            .find(wrapper => !wrapper.classList.contains("teacher-hidden"));

    if (targetWrapper) {
        targetWrapper.classList.add("error");
        const input = targetWrapper.querySelector("input");
        if (input) {
            input.setAttribute("aria-invalid", "true");
        }
        const errorMsg = targetWrapper.querySelector(".input-error-message");
        if (errorMsg) {
            errorMsg.textContent = message;
        }
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

function getCurrentStudentProgressKey(suffix) {
    const student = localStorage.getItem("studentName") || "NewStudent";
    return getNamespacedKey(`student_${encodeURIComponent(student)}_${suffix}`);
}

function getStudentRecords() {
    const key = getNamespacedKey("studentRecords");
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveStudentRecords(records) {
    const key = getNamespacedKey("studentRecords");
    localStorage.setItem(key, JSON.stringify(records));
}

function getStudentArchiveKey() {
    return getNamespacedKey("studentArchive");
}

function getStudentArchive() {
    const raw = localStorage.getItem(getStudentArchiveKey());
    if (!raw) return [];
    try {
        const archive = JSON.parse(raw);
        if (!Array.isArray(archive)) throw new Error("Student archive data is not a list.");
        return archive;
    } catch (error) {
        console.error("Unable to read student archive data.", error);
        throw new Error("Student archive data could not be read.");
    }
}

function saveStudentArchive(archive) {
    localStorage.setItem(getStudentArchiveKey(), JSON.stringify(archive));
}

const STUDENT_PRESENCE_KEY = "quizlandStudentPresence";
const STUDENT_PRESENCE_TIMEOUT = 15000;

function getStudentPresence() {
    try {
        const presence = JSON.parse(localStorage.getItem(STUDENT_PRESENCE_KEY)) || {};
        return presence && typeof presence === "object" ? presence : {};
    } catch (error) {
        return {};
    }
}

function isStudentOnline(name) {
    const lastSeen = Number(getStudentPresence()[name]);
    return lastSeen > 0 && Date.now() - lastSeen < STUDENT_PRESENCE_TIMEOUT;
}

function syncStudentPresence() {
    const name = localStorage.getItem("studentName");
    const avatar = localStorage.getItem("avatar");
    const request = name ? getStudentRequest(name) : null;
    const presence = getStudentPresence();

    if (name && avatar && request?.status === "accepted" && !document.hidden) {
        presence[name] = Date.now();
    } else if (name && (!request || request.status !== "accepted")) {
        delete presence[name];
    }

    localStorage.setItem(STUDENT_PRESENCE_KEY, JSON.stringify(presence));
}

function clearStudentSession() {
    const name = localStorage.getItem("studentName");
    const presence = getStudentPresence();
    if (name) delete presence[name];
    localStorage.setItem(STUDENT_PRESENCE_KEY, JSON.stringify(presence));
    localStorage.removeItem("studentName");
    localStorage.removeItem("studentClassroomCode");
    localStorage.removeItem("studentGender");
    localStorage.removeItem("avatar");
    if (studentFirstName) studentFirstName.value = "";
    if (studentLastName) studentLastName.value = "";
    if (studentMiddleInitial) studentMiddleInitial.value = "";
    savedStudentFullName = "";
    studentNameFieldsEdited = false;
    if (studentClassroomCode) studentClassroomCode.value = "";
    if (studentGender) studentGender.value = "";
    selectedAvatar = null;
    avatars.forEach(avatarCard => {
        avatarCard.classList.remove("selected");
        avatarCard.style.border = "4px solid transparent";
    });
    setProfileCompletionState(false);
}

function handleRemovedCurrentStudent() {
    const name = localStorage.getItem("studentName");
    if (!name || getStudentRecords().some(record => record.name === name)) return;

    clearStudentSession();
    showScreen(profileScreen);
    showNotification("Your student account was removed. Please log in again.");
}

function updateCurrentStudentRecord() {
    const student = localStorage.getItem("studentName") || "Unknown";

    if (!student) return;

    const avatarIndex = Number(localStorage.getItem("avatar")) || 1;
    const gender = localStorage.getItem("studentGender") || "";
    const completedLessons = Number(localStorage.getItem(getCurrentStudentProgressKey("completedLessons"))) || 0;
    const lessonProgress = JSON.parse(localStorage.getItem(getCurrentStudentProgressKey("lessonProgress"))) || {};
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
    const now = Date.now();

    if (!record) {
        record = {
            name: student,
            avatar: avatarIndex,
            gender,
            completedLessons,
            categoriesDone,
            progressPercent,
            accuracy,
            stars,
            updatedAt: now,
            progressHistory: [{ progressPercent, updatedAt: now }]
        };
        records.push(record);
    } else {
        const progressHistory = Array.isArray(record.progressHistory) && record.progressHistory.length
            ? record.progressHistory
            : [{ progressPercent: Number(record.progressPercent) || 0, updatedAt: Number(record.updatedAt) || now }];
        const lastProgress = progressHistory[progressHistory.length - 1];
        if (Number(lastProgress.progressPercent) !== progressPercent) {
            progressHistory.push({ progressPercent, updatedAt: now });
        }
        record.avatar = avatarIndex;
        record.gender = gender;
        record.completedLessons = completedLessons;
        record.categoriesDone = categoriesDone;
        record.progressPercent = progressPercent;
        record.accuracy = accuracy;
        record.stars = stars;
        record.updatedAt = now;
        record.progressHistory = progressHistory.slice(-20);
    }

    saveStudentRecords(records);
}

function getQuizHistoryKey(student) {
    return getNamespacedKey(`quizHistory_${encodeURIComponent(student)}`);
}

function getStudentQuizHistory(student) {
    return JSON.parse(localStorage.getItem(getQuizHistoryKey(student))) || [];
}

const MAX_STUDENT_QUIZ_HISTORY = 365;

function saveStudentQuizHistory(student, history) {
    localStorage.setItem(getQuizHistoryKey(student), JSON.stringify(history.slice(0, MAX_STUDENT_QUIZ_HISTORY)));
}

function appendQuizHistoryEntry(student, entry) {
    const history = getStudentQuizHistory(student);
    history.unshift(entry);
    saveStudentQuizHistory(student, history);
}

function getActivityLogKey(student) {
    return getNamespacedKey(`activityLog_${encodeURIComponent(student)}`);
}

function getStudentActivityLog(student) {
    const raw = localStorage.getItem(getActivityLogKey(student));
    try {
        const activities = raw ? JSON.parse(raw) : [];
        return Array.isArray(activities) ? activities : [];
    } catch (error) {
        return [];
    }
}

function saveStudentActivityLog(student, activities) {
    localStorage.setItem(getActivityLogKey(student), JSON.stringify(activities.slice(0, 100)));
}

function recordStudentActivity(activity, details = {}) {
    const student = localStorage.getItem("studentName");
    if (!student || !activity) return;

    const activities = getStudentActivityLog(student);
    activities.unshift({
        date: Date.now(),
        activity,
        ...details
    });
    saveStudentActivityLog(student, activities);
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

function renderTeacherNeedsInterpretation(records) {
    const container = document.getElementById("teacherNeedsInterpretation");
    if (!container) return;

    function getUnfinishedLessons(studentName) {
        const progressKey = getNamespacedKey(`student_${encodeURIComponent(studentName)}_lessonProgress`);
        const progress = JSON.parse(localStorage.getItem(progressKey)) || {};
        return Object.keys(lessons)
            .filter(category => !progress[category])
            .map(getLessonDisplayName);
    }

    if (!records.length) {
        container.innerHTML = '<div class="teacher-needs-empty">No students tracked yet. Students will appear here when they begin learning.</div>';
        return;
    }

    const needsStudents = records
        .map(record => {
            const progress = Number(record.progressPercent) || 0;
            const accuracy = Number(record.accuracy) || 0;
            const stars = Number(record.stars) || 0;
            const needsMorePractice = progress < 60 || accuracy < 70 || stars === 0;

            return needsMorePractice ? {
                ...record,
                progress,
                accuracy,
                stars,
                online: isStudentOnline(record.name)
            } : null;
        })
        .filter(Boolean)
        .sort((a, b) => {
            const aScore = (Number(a.progress) || 0) + (Number(a.accuracy) || 0);
            const bScore = (Number(b.progress) || 0) + (Number(b.accuracy) || 0);
            return aScore - bScore;
        });

    if (!needsStudents.length) {
        container.innerHTML = '<div class="teacher-needs-empty">All students are progressing well. No one needs extra lesson practice right now.</div>';
        return;
    }

    const items = needsStudents.map(student => `
        <div class="teacher-needs-item">
            <div class="teacher-needs-name">
                <span class="student-presence-dot ${student.online ? "is-online" : "is-offline"}" aria-label="${student.online ? "Online" : "Offline"}"></span>
                ${student.name}
            </div>
            <div class="teacher-needs-status">${student.online ? "Online now" : "Offline"}</div>
            <div class="teacher-needs-meta">Progress: ${student.progress}% • Accuracy: ${student.accuracy}% • Stars: ${student.stars}</div>
            <div class="teacher-needs-note">Needs more practice to master: ${getUnfinishedLessons(student.name).join(", ") || "the current lesson"}.</div>
        </div>
    `).join("");

    container.innerHTML = `
        <p class="teacher-needs-summary">This is students that need to master the lesson:</p>
        <div class="teacher-needs-list">${items}</div>
    `;
}

function renderQuizHistory(studentName) {
    if (!teacherQuizHistoryTable) return;
    const tbody = teacherQuizHistoryTable.querySelector("tbody");
    tbody.innerHTML = "";

    if (!studentName) {
        if (quizHistorySubtitle) {
            quizHistorySubtitle.textContent = "Select a student to view every quiz attempt.";
        }
        tbody.innerHTML = `<tr class="quiz-history-empty"><td colspan="6">No student selected yet.</td></tr>`;
        return;
    }

    if (quizHistorySubtitle) {
        quizHistorySubtitle.textContent = `Quiz attempts for ${studentName}`;
    }

    const history = getStudentQuizHistory(studentName);
    if (!history.length) {
        tbody.innerHTML = `<tr class="quiz-history-empty"><td colspan="6">No quiz history yet for ${studentName}.</td></tr>`;
        return;
    }

    history.forEach((entry, index) => {
        const row = document.createElement("tr");
        if (index === 0) {
            row.classList.add("is-latest");
        }
        const category = (entry.category || "quiz").charAt(0).toUpperCase() + (entry.category || "quiz").slice(1);
        const difficultyLabels = {
            easy: "Easy",
            medium: "Normal",
            hard: "Hard"
        };
        const levelStopped = difficultyLabels[entry.levelStopped] || "Not recorded";
        row.innerHTML = `
            <td>${formatQuizHistoryDate(entry.date)}${index === 0 ? '<span class="latest-history-badge">Latest</span>' : ""}</td>
            <td>${category}</td>
            <td>${entry.score} / ${entry.total}</td>
            <td>${entry.accuracy}%</td>
            <td>+${entry.starsGained || 0} ★</td>
            <td>${levelStopped}</td>
        `;
        tbody.appendChild(row);
    });
}

function renderActivityLog(studentName) {
    if (!teacherActivityLogTable) return;
    const tbody = teacherActivityLogTable.querySelector("tbody");
    tbody.innerHTML = "";

    if (!studentName) {
        if (activityLogSubtitle) {
            activityLogSubtitle.textContent = "Select a student to view recent learning activity.";
        }
        tbody.innerHTML = '<tr class="quiz-history-empty"><td colspan="2">No student selected yet.</td></tr>';
        return;
    }

    if (activityLogSubtitle) {
        activityLogSubtitle.textContent = `Recent activity for ${studentName}`;
    }

    const activities = getStudentActivityLog(studentName);
    if (!activities.length) {
        tbody.innerHTML = `<tr class="quiz-history-empty"><td colspan="2">No activity recorded yet for ${studentName}.</td></tr>`;
        return;
    }

    activities.forEach((entry, index) => {
        const row = document.createElement("tr");
        if (index === 0) row.classList.add("is-latest");

        const dateCell = document.createElement("td");
        dateCell.textContent = formatQuizHistoryDate(entry.date);
        if (index === 0) {
            const badge = document.createElement("span");
            badge.className = "latest-history-badge";
            badge.textContent = "Latest";
            dateCell.appendChild(badge);
        }

        const activityCell = document.createElement("td");
        activityCell.textContent = entry.activity || "Student activity";
        row.appendChild(dateCell);
        row.appendChild(activityCell);
        tbody.appendChild(row);
    });
}

function renderStudentAnalytics(studentName) {
    if (!teacherAnalyticsCalendarDays || !teacherAnalyticsStudentName) return;
    teacherAnalyticsStudentName.textContent = studentName || "Select a student";
    teacherAnalyticsCalendarDays.replaceChildren();
    if (teacherAnalyticsMonth) teacherAnalyticsMonth.value = String(selectedAnalyticsMonth);
    if (teacherAnalyticsYear) teacherAnalyticsYear.value = String(selectedAnalyticsYear);
    if (teacherAnalyticsPreviousMonth) {
        teacherAnalyticsPreviousMonth.disabled = selectedAnalyticsYear === ANALYTICS_MIN_YEAR && selectedAnalyticsMonth === 0;
    }
    if (teacherAnalyticsNextMonth) {
        teacherAnalyticsNextMonth.disabled = selectedAnalyticsYear === ANALYTICS_MAX_YEAR && selectedAnalyticsMonth === 11;
    }

    const activityByDate = new Map();
    const getDay = key => {
        if (!activityByDate.has(key)) {
            activityByDate.set(key, { correct: 0, questions: 0, quizzes: [], lessons: [], mistakes: [] });
        }
        return activityByDate.get(key);
    };

    if (studentName) {
        getStudentActivityLog(studentName).forEach(entry => {
            const timestamp = Number(entry?.date);
            if (!Number.isFinite(timestamp)) return;
            const day = getDay(toDateKey(timestamp));
            if (entry.kind === "lesson") day.lessons.push(entry);
            if (entry.kind === "quiz-mistake") day.mistakes.push(entry);
        });

        getStudentQuizHistory(studentName).forEach(entry => {
            const timestamp = Number(entry?.date);
            const total = Number(entry?.total);
            if (!Number.isFinite(timestamp) || !Number.isFinite(total) || total <= 0) return;
            const day = getDay(toDateKey(timestamp));
            day.correct += Number(entry.score) || 0;
            day.questions += total;
            day.quizzes.push(entry);
        });
    }

    const firstWeekday = new Date(selectedAnalyticsYear, selectedAnalyticsMonth, 1).getDay();
    const daysInMonth = new Date(selectedAnalyticsYear, selectedAnalyticsMonth + 1, 0).getDate();
    for (let blank = 0; blank < firstWeekday; blank += 1) {
        const spacer = document.createElement("span");
        spacer.className = "teacher-analytics-calendar-spacer";
        spacer.setAttribute("aria-hidden", "true");
        teacherAnalyticsCalendarDays.appendChild(spacer);
    }

    const today = new Date();
    const todayKey = toDateKey(today.getTime());
    for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber += 1) {
        const date = new Date(selectedAnalyticsYear, selectedAnalyticsMonth, dayNumber);
        const dateKey = toDateKey(date.getTime());
        const data = activityByDate.get(dateKey);
        const dayButton = document.createElement("button");
        dayButton.type = "button";
        dayButton.className = "teacher-analytics-calendar-day";
        dayButton.textContent = String(dayNumber);
        dayButton.setAttribute("aria-pressed", String(dateKey === selectedAnalyticsDate));
        if (dateKey === selectedAnalyticsDate) dayButton.classList.add("is-selected");
        if (dateKey === todayKey) dayButton.classList.add("is-today");

        if (!data || (!data.questions && !data.lessons.length && !data.mistakes.length)) {
            dayButton.classList.add("is-no-data");
            dayButton.title = `${date.toLocaleDateString()}: no learning activity`;
        } else if (data.questions) {
            const accuracy = Math.round((data.correct / data.questions) * 100);
            const level = accuracy < 50 ? "struggling"
                : accuracy < 70 ? "growing"
                    : accuracy < 85 ? "progressing"
                        : accuracy < 100 ? "strong"
                            : "perfect";
            dayButton.classList.add(`is-${level}`);
            if (data.lessons.length) dayButton.classList.add("has-lesson");
            dayButton.title = `${date.toLocaleDateString()}: ${accuracy}% quiz accuracy`;
        } else {
            if (data.lessons.length) dayButton.classList.add("has-lesson");
            if (data.mistakes.length) dayButton.classList.add("is-struggling");
            dayButton.title = `${date.toLocaleDateString()}: ${data.mistakes.length ? "quiz mistakes" : "lesson activity"}`;
        }

        dayButton.addEventListener("click", () => {
            selectedAnalyticsDate = dateKey;
            renderStudentAnalytics(selectedAnalyticsStudent);
        });
        teacherAnalyticsCalendarDays.appendChild(dayButton);
    }

    if (teacherAnalyticsSelectedDate) {
        const selectedDate = new Date(`${selectedAnalyticsDate}T00:00:00`);
        teacherAnalyticsSelectedDate.textContent = selectedDate.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }
    renderTeacherAnalyticsDateDetails(studentName, activityByDate.get(selectedAnalyticsDate));
}

function renderTeacherAnalyticsDateDetails(studentName, dayData) {
    if (!teacherAnalyticsDateDetails) return;
    teacherAnalyticsDateDetails.replaceChildren();
    if (!studentName || !dayData) {
        const empty = document.createElement("p");
        empty.className = "teacher-analytics-empty";
        empty.textContent = studentName ? "No learning activity" : "Select a student";
        teacherAnalyticsDateDetails.appendChild(empty);
        return;
    }

    const lessonGroups = new Map();
    dayData.lessons.forEach(entry => {
        const category = entry.category || "lesson";
        const items = lessonGroups.get(category) || new Set();
        if (entry.item) items.add(entry.item);
        lessonGroups.set(category, items);
    });
    lessonGroups.forEach((items, category) => {
        const row = document.createElement("p");
        const itemList = [...items].join(", ");
        row.textContent = `Lesson · ${getLessonDisplayName(category)}${itemList ? ` · ${itemList}` : ""}`;
        teacherAnalyticsDateDetails.appendChild(row);
    });

    const usedMistakes = new Set();
    dayData.quizzes.forEach(entry => {
        const category = entry.category || "quiz";
        const mistakes = dayData.mistakes.filter(mistake => {
            if (entry.attemptId) return mistake.attemptId === entry.attemptId;
            return !mistake.attemptId
                && !usedMistakes.has(mistake)
                && (mistake.category || "quiz") === category;
        });
        mistakes.forEach(mistake => usedMistakes.add(mistake));
        const missedItems = [...new Set(mistakes.map(mistake => mistake.item).filter(Boolean))];
        const row = document.createElement("p");
        row.textContent = `Quiz · ${getLessonDisplayName(category)} · ${Number(entry.score) || 0}/${Number(entry.total) || 0}`
            + (missedItems.length ? ` · Missed: ${missedItems.join(", ")}` : "");
        teacherAnalyticsDateDetails.appendChild(row);
    });

    const unmatchedMistakes = dayData.mistakes.filter(mistake => !usedMistakes.has(mistake));
    if (unmatchedMistakes.length) {
        const groupedMistakes = new Map();
        unmatchedMistakes.forEach(mistake => {
            const category = mistake.category || "quiz";
            const items = groupedMistakes.get(category) || new Set();
            if (mistake.item) items.add(mistake.item);
            groupedMistakes.set(category, items);
        });
        groupedMistakes.forEach((items, category) => {
            const row = document.createElement("p");
            row.textContent = `Quiz · ${getLessonDisplayName(category)} · Missed: ${[...items].join(", ")}`;
            teacherAnalyticsDateDetails.appendChild(row);
        });
    }

    if (!teacherAnalyticsDateDetails.childElementCount) {
        const empty = document.createElement("p");
        empty.className = "teacher-analytics-empty";
        empty.textContent = "No learning activity";
        teacherAnalyticsDateDetails.appendChild(empty);
    }
}

function renderTeacherStudentProgress() {
    if (!teacherStudentProgressTable) return;
    const tbody = teacherStudentProgressTable.querySelector("tbody");
    tbody.innerHTML = "";
    const genderFilter = teacherStudentGenderFilter?.value || "all";
    const records = getStudentRecords().filter(record => (
        genderFilter === "all" || record.gender === genderFilter
    ));
    const totalCategories = Object.keys(lessons).length;

    if (teacherStudentTrackerCount) {
        const studentCount = records.length;
        teacherStudentTrackerCount.textContent = `${studentCount} ${studentCount === 1 ? "student" : "students"} tracked`;
    }

    const sortMode = teacherStudentSort?.value || "recent";
    records.sort((a, b) => {
        if (sortMode === "surname") {
            return getSurname(a.name).localeCompare(getSurname(b.name)) || a.name.localeCompare(b.name);
        }
        if (sortMode === "stars") {
            return (Number(b.stars) || 0) - (Number(a.stars) || 0) || a.name.localeCompare(b.name);
        }
        return (Number(b.updatedAt) || 0) - (Number(a.updatedAt) || 0);
    });

    renderTeacherCharts(records);
    renderTeacherNeedsInterpretation(records);

    if (!records.length) {
        const emptyMessage = genderFilter === "all"
            ? "No students tracked yet."
            : `No ${genderFilter} students tracked yet.`;
        tbody.innerHTML = `<tr class="quiz-history-empty"><td colspan="7">${emptyMessage}</td></tr>`;
        renderQuizHistory(null);
        renderActivityLog(null);
        renderStudentAnalytics(null);
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

        const genderTd = document.createElement("td");
        genderTd.textContent = record.gender
            ? record.gender.charAt(0).toUpperCase() + record.gender.slice(1)
            : "Not set";

        const progressTd = document.createElement("td");
        const progressHistory = Array.isArray(record.progressHistory) && record.progressHistory.length
            ? record.progressHistory
            : [{ progressPercent: Number(record.progressPercent) || 0, updatedAt: record.updatedAt }];
        const firstProgress = progressHistory[0];
        const latestProgress = progressHistory[progressHistory.length - 1];
        progressTd.innerHTML = `
            <strong>${record.categoriesDone}/${totalCategories} (${record.progressPercent}%)</strong>
            <span class="progress-history-line">Before: ${Number(firstProgress.progressPercent) || 0}% · ${formatProgressDate(firstProgress.updatedAt)}</span>
            <span class="progress-history-line">After: ${Number(latestProgress.progressPercent) || 0}% · ${formatProgressDate(latestProgress.updatedAt)}</span>`;

        const latestActivity = getStudentQuizHistory(record.name)[0];
        const latestScoreTd = document.createElement("td");
        latestScoreTd.className = "latest-activity-cell";
        latestScoreTd.innerHTML = latestActivity
            ? `<strong>${latestActivity.score} / ${latestActivity.total}</strong><span>${latestActivity.accuracy}% accuracy</span>`
            : `<strong>No quiz yet</strong><span>${record.accuracy || 0}% accuracy</span>`;

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
            renderActivityLog(record.name);
            const panel = document.getElementById("quizHistoryPanel");
            if (panel) panel.scrollIntoView({ behavior: "smooth", block: "start" });
        });

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "tdash-btn tdash-btn--danger";
        removeBtn.type = "button";
        removeBtn.addEventListener("click", () => {
            try {
                const archived = removeStudentRecord(record.name);
                if (!archived) {
                    showNotification(`${record.name} could not be found in the student tracker.`);
                    return;
                }
            } catch (error) {
                console.error("Unable to archive student.", error);
                showNotification(`${record.name} could not be archived. Please try again.`);
                return;
            }
            if (selectedHistoryStudent === record.name) {
                selectedHistoryStudent = null;
            }
            if (selectedAnalyticsStudent === record.name) {
                selectedAnalyticsStudent = null;
            }
            renderTeacherStudentProgress();
            renderQuizHistory(selectedHistoryStudent);
            renderActivityLog(selectedHistoryStudent);
            showNotification(`${record.name} was moved to the archive.`);
        });

        const signOutBtn = document.createElement("button");
        signOutBtn.textContent = "Sign out";
        signOutBtn.className = "tdash-btn tdash-btn--ghost";
        signOutBtn.type = "button";
        signOutBtn.addEventListener("click", () => {
            signOutStudentSession(record.name);
            showNotification(`${record.name} was signed out. They can log in again from the student profile.`);
        });

        actionsWrap.appendChild(historyBtn);
        actionsWrap.appendChild(signOutBtn);
        actionsWrap.appendChild(removeBtn);
        actionsTd.appendChild(actionsWrap);

        row.appendChild(nameTd);
        row.appendChild(avatarTd);
        row.appendChild(genderTd);
        row.appendChild(progressTd);
        row.appendChild(latestScoreTd);
        row.appendChild(starsTd);
        row.appendChild(actionsTd);
        tbody.appendChild(row);
    });

    if (selectedHistoryStudent) {
        renderQuizHistory(selectedHistoryStudent);
        renderActivityLog(selectedHistoryStudent);
    }
    if (selectedAnalyticsStudent) {
        renderStudentAnalytics(selectedAnalyticsStudent);
    }
}

function getSurname(name) {
    const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
    return parts.length ? parts[parts.length - 1].toLowerCase() : "";
}

function formatProgressDate(timestamp) {
    const date = new Date(Number(timestamp) || Date.now());
    return date.toLocaleString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });
}

function formatArchiveDate(timestamp) {
    const date = new Date(Number(timestamp));
    if (Number.isNaN(date.getTime())) return "Unknown date";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `${day}/${month}/${date.getFullYear()}`;
}

function renderTeacherArchive() {
    if (!teacherArchiveDates) return;
    teacherArchiveDates.replaceChildren();
    const archive = getStudentArchive()
        .filter(entry => entry?.student?.name && entry.archiveId)
        .sort((a, b) => Number(b.archivedAt) - Number(a.archivedAt));

    if (!archive.length) {
        const empty = document.createElement("p");
        empty.className = "teacher-archive-empty";
        empty.textContent = "No students have been archived.";
        teacherArchiveDates.appendChild(empty);
        return;
    }

    const groups = new Map();
    archive.forEach(entry => {
        const dateLabel = formatArchiveDate(entry.archivedAt);
        if (!groups.has(dateLabel)) groups.set(dateLabel, []);
        groups.get(dateLabel).push(entry);
    });

    groups.forEach((entries, dateLabel) => {
        const group = document.createElement("details");
        group.className = "teacher-archive-date";
        const summary = document.createElement("summary");
        const date = document.createElement("span");
        date.textContent = dateLabel;
        const count = document.createElement("span");
        count.textContent = `${entries.length} ${entries.length === 1 ? "student" : "students"}`;
        summary.append(date, count);

        const studentList = document.createElement("div");
        studentList.className = "teacher-archive-date-list";
        entries.forEach(entry => {
            const studentRow = document.createElement("div");
            studentRow.className = "teacher-archive-student";
            const name = document.createElement("span");
            name.className = "teacher-archive-student-name";
            name.textContent = entry.student.name;

            const actions = document.createElement("div");
            actions.className = "teacher-archive-student-actions";
            const restoreButton = document.createElement("button");
            restoreButton.type = "button";
            restoreButton.className = "tdash-btn tdash-btn--soft";
            restoreButton.textContent = "Restore";
            restoreButton.addEventListener("click", () => {
                try {
                    restoreArchivedStudent(entry.archiveId);
                } catch (error) {
                    console.error("Unable to restore archived student.", error);
                    showNotification("The archived student could not be restored. Please try again.");
                }
            });

            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.className = "tdash-btn tdash-btn--danger";
            deleteButton.textContent = "Delete Permanently";
            deleteButton.addEventListener("click", () => {
                if (!window.confirm(`Are you sure to delete permanently? This will erase ${entry.student.name}'s archived student data.`)) return;
                try {
                    permanentlyDeleteArchivedStudent(entry.archiveId);
                } catch (error) {
                    console.error("Unable to permanently delete archived student.", error);
                    showNotification("The archived student could not be permanently deleted. Please try again.");
                }
            });
            actions.append(restoreButton, deleteButton);
            studentRow.append(name, actions);
            studentList.appendChild(studentRow);
        });

        group.append(summary, studentList);
        teacherArchiveDates.appendChild(group);
    });
}

function restoreArchivedStudent(archiveId) {
    const archive = getStudentArchive();
    const entry = archive.find(item => item.archiveId === archiveId);
    if (!entry) {
        showNotification("This archived student could not be found. Refresh the archive and try again.");
        return;
    }
    const records = getStudentRecords();
    if (records.some(record => record.name === entry.student.name)) {
        showNotification(`${entry.student.name} is already in the student tracker.`);
        return;
    }

    saveStudentRecords([...records, entry.student]);
    const requests = getStudentRequests().filter(request => request.name !== entry.student.name);
    saveStudentRequests([...requests, ...(Array.isArray(entry.requests) ? entry.requests : [])]);
    saveStudentArchive(archive.filter(item => item.archiveId !== archiveId));
    selectedHistoryStudent = null;
    selectedAnalyticsStudent = null;
    renderTeacherStudentProgress();
    renderTeacherNotifications();
    renderTeacherArchive();
    showNotification(`${entry.student.name} has been restored.`);
}

function permanentlyDeleteArchivedStudent(archiveId) {
    const archive = getStudentArchive();
    const entry = archive.find(item => item.archiveId === archiveId);
    if (!entry) {
        showNotification("This archived student could not be found. Refresh the archive and try again.");
        return;
    }
    const studentName = entry.student.name;
    saveStudentArchive(archive.filter(item => item.archiveId !== archiveId));

    const encodedName = encodeURIComponent(studentName);
    const studentKeyPrefix = getNamespacedKey(`student_${encodedName}_`);
    const keysToRemove = new Set([
        getQuizHistoryKey(studentName),
        getActivityLogKey(studentName),
        getNamespacedKey(`totalStars_${encodedName}`),
        getNamespacedKey(`lastQuizScore_${encodedName}`),
        getNamespacedKey(`lastQuizTotal_${encodedName}`),
        getNamespacedKey(`lessonVoiceStars_${encodedName}`)
    ]);
    (Array.isArray(entry.requests) ? entry.requests : []).forEach(request => {
        if (request.classroomCode) {
            keysToRemove.add(`quizlandProfileSubmitted_${encodeURIComponent(request.classroomCode)}_${encodedName}`);
        }
    });
    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        if (key?.startsWith(studentKeyPrefix)) keysToRemove.add(key);
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));

    const requests = getStudentRequests().filter(request => request.name !== studentName);
    saveStudentRequests(requests);
    const presence = getStudentPresence();
    delete presence[studentName];
    localStorage.setItem(STUDENT_PRESENCE_KEY, JSON.stringify(presence));
    try {
        const signedOut = JSON.parse(localStorage.getItem(STUDENT_SIGNED_OUT_KEY) || "null");
        if (signedOut?.name === studentName) localStorage.removeItem(STUDENT_SIGNED_OUT_KEY);
    } catch (error) {
        console.error("Unable to inspect the signed-out student session.", error);
    }

    renderTeacherNotifications();
    renderTeacherArchive();
    showNotification(`${studentName} and their saved student data were permanently deleted.`);
}

if (teacherStudentSort) {
    teacherStudentSort.addEventListener("change", renderTeacherStudentProgress);
}

if (teacherStudentGenderFilter) {
    teacherStudentGenderFilter.addEventListener("change", renderTeacherStudentProgress);
}

function removeStudentRecord(studentName) {
    const records = getStudentRecords();
    const student = records.find(record => record.name === studentName);
    if (!student) return false;
    const requests = getStudentRequests().filter(request => request.name === studentName);
    const archive = getStudentArchive().filter(entry => entry.student?.name !== studentName);
    archive.push({
        archiveId: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        archivedAt: Date.now(),
        student,
        requests
    });
    saveStudentArchive(archive);
    saveStudentRecords(records.filter(record => record.name !== studentName));
    saveStudentRequests(getStudentRequests().filter(request => request.name !== studentName));
    updateTeacherNotificationBadge();
    const presence = getStudentPresence();
    delete presence[studentName];
    localStorage.setItem(STUDENT_PRESENCE_KEY, JSON.stringify(presence));
    return true;
}

function signOutStudentSession(studentName) {
    const activeStudent = localStorage.getItem("studentName");
    if (activeStudent !== studentName) return;

    const presence = getStudentPresence();
    delete presence[studentName];
    localStorage.setItem(STUDENT_PRESENCE_KEY, JSON.stringify(presence));
    localStorage.removeItem("studentName");
    localStorage.removeItem("studentClassroomCode");
    localStorage.removeItem("studentGender");
    localStorage.removeItem("avatar");
    localStorage.setItem(STUDENT_SIGNED_OUT_KEY, JSON.stringify({
        name: studentName,
        signedOutAt: Date.now()
    }));
}

function showTeacherDashboard(){
    showScreen(teacherDashboard);
    setTeacherSidebarCollapsed(false);
    if (teacherClassroomCode) {
        teacherClassroomCode.querySelector("b").textContent = getCurrentTeacherClassroomCode() || "------";
    }
    teacherNameDisplay.textContent = currentTeacherUsername;
    if (teacherSidebarName) {
        const signedInEmail = getTeacherSession() || currentTeacherUsername;
        teacherSidebarName.textContent = signedInEmail;
        teacherSidebarName.title = signedInEmail;
    }

    renderTeacherStudentProgress();
    renderTeacherNotifications();
    window.setTimeout(maybeShowTeacherTutorial, 250);
}

function clearTeacherTutorialHighlight() {
    document.querySelectorAll(".teacher-tutorial-highlight, .teacher-tutorial-focus").forEach(element => {
        element.classList.remove("teacher-tutorial-highlight");
        element.classList.remove("teacher-tutorial-focus");
    });
}

function closeTeacherTutorial(savePreference = false) {
    clearTeacherTutorialHighlight();
    if (teacherTutorial) teacherTutorial.hidden = true;
    if (savePreference || teacherTutorialDontShowAgain?.checked) {
        localStorage.setItem(getTeacherTutorialPreferenceKey(), "true");
        localStorage.setItem("quizlandTutorialEnabled", "false");
        if (tutorialToggle) tutorialToggle.checked = false;
    }
}

function renderTeacherTutorialStep() {
    const step = teacherTutorialSteps[teacherTutorialStep];
    if (!step || !teacherTutorial) return;

    clearTeacherTutorialHighlight();
    const target = document.querySelector(step.target);
    if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        target.classList.add("teacher-tutorial-highlight");
        target.classList.add("teacher-tutorial-focus");
    }

    teacherTutorialTitle.textContent = step.title;
    teacherTutorialDescription.textContent = step.description;
    teacherTutorialNextBtn.textContent = teacherTutorialStep === teacherTutorialSteps.length - 1
        ? "Done"
        : "Next";
    teacherTutorialBackBtn.disabled = teacherTutorialStep === 0;
    document.querySelectorAll(".teacher-tutorial-progress span").forEach((dot, index) => {
        dot.classList.toggle("is-active", index === teacherTutorialStep);
        dot.classList.toggle("is-complete", index < teacherTutorialStep);
    });
    window.requestAnimationFrame(() => positionTeacherTutorialCard(target));
}

function positionTeacherTutorialCard(target) {
    if (!teacherTutorial || !target) return;
    const card = teacherTutorial.querySelector(".teacher-tutorial-card");
    if (!card) return;

    const targetRect = target.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const margin = 14;
    const edge = 16;
    let left = targetRect.left + (targetRect.width / 2) - (cardRect.width / 2);
    let top = targetRect.bottom + margin;

    if (top + cardRect.height > window.innerHeight - edge) {
        top = targetRect.top - cardRect.height - margin;
    }
    if (top < edge) top = edge;
    left = Math.max(edge, Math.min(left, window.innerWidth - cardRect.width - edge));

    card.style.left = `${left}px`;
    card.style.top = `${top}px`;
    card.style.transform = "none";
}

function openTeacherTutorial() {
    if (!teacherTutorial) return;
    teacherTutorialStep = 0;
    teacherTutorialDontShowAgain.checked = false;
    teacherTutorial.hidden = false;
    renderTeacherTutorialStep();
}

function maybeShowTeacherTutorial() {
    if (!teacherDashboard?.classList.contains("active")) return;
    if (localStorage.getItem("quizlandTutorialEnabled") === "false") return;
    if (localStorage.getItem(getTeacherTutorialPreferenceKey()) === "true") return;
    openTeacherTutorial();
}

if (teacherTutorialNextBtn) {
    teacherTutorialNextBtn.addEventListener("click", () => {
        if (teacherTutorialStep >= teacherTutorialSteps.length - 1) {
            closeTeacherTutorial();
            return;
        }
        teacherTutorialStep += 1;
        renderTeacherTutorialStep();
    });
}

if (teacherTutorialBackBtn) {
    teacherTutorialBackBtn.addEventListener("click", () => {
        if (teacherTutorialStep === 0) return;
        teacherTutorialStep -= 1;
        renderTeacherTutorialStep();
    });
}

if (teacherTutorialSkipBtn) {
    teacherTutorialSkipBtn.addEventListener("click", () => closeTeacherTutorial());
}

document.addEventListener("keydown", event => {
    if (!teacherTutorial || teacherTutorial.hidden) return;

    if (event.key === "ArrowRight") {
        event.preventDefault();
        teacherTutorialNextBtn.click();
    } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        teacherTutorialBackBtn.click();
    } else if (event.key === "Escape") {
        event.preventDefault();
        closeTeacherTutorial();
    }
});

const STUDENT_REQUESTS_KEY = "quizlandStudentRequests";
const STUDENT_SIGNED_OUT_KEY = "quizlandStudentSignedOut";

function getStudentRequests() {
    try {
        const requests = JSON.parse(localStorage.getItem(STUDENT_REQUESTS_KEY)) || [];
        return Array.isArray(requests) ? requests : [];
    } catch (error) {
        return [];
    }
}

function saveStudentRequests(requests) {
    localStorage.setItem(STUDENT_REQUESTS_KEY, JSON.stringify(requests));
}

function getStudentRequest(name) {
    const classroomCode = localStorage.getItem("studentClassroomCode");
    return getStudentRequests().find(request => (
        request.name === name && request.classroomCode === classroomCode
    ));
}

function updateTeacherNotificationBadge() {
    if (!teacherNotificationBadge) return;
    const classroomCode = getCurrentTeacherClassroomCode();
    const pendingCount = getStudentRequests().filter(request => (
        request.classroomCode === classroomCode && request.status === "pending"
    )).length;
    teacherNotificationBadge.textContent = String(pendingCount);
    teacherNotificationBadge.hidden = pendingCount === 0;
}

function renderTeacherNotifications() {
    updateTeacherNotificationBadge();
    if (!teacherNotificationsList) return;

    const classroomCode = getCurrentTeacherClassroomCode();
    const requests = getStudentRequests()
        .filter(request => request.classroomCode === classroomCode)
        .sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
    teacherNotificationsList.innerHTML = "";

    if (!requests.length) {
        teacherNotificationsList.innerHTML = '<p class="teacher-notifications-empty">No student requests yet.</p>';
        return;
    }

    requests.forEach(request => {
        const item = document.createElement("article");
        item.className = `teacher-notification-item teacher-notification-item--${request.status}`;

        const copy = document.createElement("div");
        copy.className = "teacher-notification-copy";
        const title = document.createElement("strong");
        title.textContent = request.name;
        const details = document.createElement("span");
        details.textContent = `${request.gender ? request.gender.charAt(0).toUpperCase() + request.gender.slice(1) : "Gender not set"} · ${request.status}`;
        copy.append(title, details);

        const actions = document.createElement("div");
        actions.className = "teacher-notification-actions";
        if (request.status === "pending") {
            const acceptBtn = document.createElement("button");
            acceptBtn.className = "tdash-btn tdash-btn--solid";
            acceptBtn.type = "button";
            acceptBtn.textContent = "Accept";
            acceptBtn.addEventListener("click", () => decideStudentRequest(request.name, "accepted"));

            const rejectBtn = document.createElement("button");
            rejectBtn.className = "tdash-btn tdash-btn--danger";
            rejectBtn.type = "button";
            rejectBtn.textContent = "Reject";
            rejectBtn.addEventListener("click", () => decideStudentRequest(request.name, "rejected"));
            actions.append(acceptBtn, rejectBtn);
        }

        item.append(copy, actions);
        teacherNotificationsList.appendChild(item);
    });
}

function decideStudentRequest(name, status) {
    const requests = getStudentRequests();
    const request = requests.find(item => item.name === name);
    if (!request) return;

    request.status = status;
    request.decidedAt = Date.now();
    saveStudentRequests(requests);
    renderTeacherNotifications();
    showNotification(`${name} was ${status}.`);
}

if (teacherNotificationsBtn) {
    teacherNotificationsBtn.addEventListener("click", () => {
        renderTeacherNotifications();
        if (teacherNotificationsModal) teacherNotificationsModal.hidden = false;
    });
}

if (teacherNotificationsCloseBtn) {
    teacherNotificationsCloseBtn.addEventListener("click", () => {
        if (teacherNotificationsModal) teacherNotificationsModal.hidden = true;
    });
}

window.addEventListener("storage", event => {
    if (event.key === STUDENT_REQUESTS_KEY) {
        syncProfileApproval();
    }

    if (event.key === getNamespacedKey("studentRecords")) {
        handleRemovedCurrentStudent();
    }

    if (event.key === STUDENT_SIGNED_OUT_KEY && event.newValue) {
        try {
            const signedOut = JSON.parse(event.newValue);
            if (signedOut.name === localStorage.getItem("studentName")) {
                clearStudentSession();
                showScreen(profileScreen);
                showNotification("You were signed out. Please log in again.");
            }
        } catch (error) {
            console.warn("Student sign-out notice could not be read.", error);
        }
    }
});

window.setInterval(syncProfileApproval, 1000);
window.setInterval(() => {
    syncStudentPresence();
}, 5000);
document.addEventListener("visibilitychange", syncStudentPresence);
window.addEventListener("beforeunload", () => {
    const name = localStorage.getItem("studentName");
    const presence = getStudentPresence();
    if (name) delete presence[name];
    localStorage.setItem(STUDENT_PRESENCE_KEY, JSON.stringify(presence));
});

// ======================================================
// CONTINUE BUTTON
// ======================================================

continueBtn.addEventListener("click", () => {

    const name = getStudentFullName();
    const previousName = localStorage.getItem("studentName") || "";
    const previousClassroomCode = localStorage.getItem("studentClassroomCode") || "";

    const classroomCode = studentClassroomCode ? studentClassroomCode.value.trim() : "";
    if (!/^\d{6}$/.test(classroomCode)) {
        const msg = "Please enter the 6-digit classroom code from your teacher.";
        showNotification(msg);
        speakText(msg);
        studentClassroomCode?.focus();
        return;
    }
    if (!isValidClassroomCode(classroomCode)) {
        const msg = "That classroom code is invalid. Please ask your teacher for the correct code.";
        showNotification(msg, 5000);
        speakText(msg);
        studentClassroomCode?.focus();
        return;
    }

    if (name === "") {

        const msg = "Please enter your first and last name.";
        showNotification(msg);
        speakText(msg);

        studentFirstName.focus();

        return;

    }
    if (!studentFirstName.value.trim() || !studentLastName.value.trim()) {
        const msg = "Please enter your first and last name.";
        showNotification(msg);
        speakText(msg);
        (!studentFirstName.value.trim() ? studentFirstName : studentLastName).focus();
        return;
    }

    const gender = studentGender.value;
    if (!gender) {
        const msg = "Please select a gender.";
        showNotification(msg);
        speakText(msg);
        studentGender.focus();
        return;
    }

    localStorage.setItem("studentName", name);
    localStorage.setItem("studentClassroomCode", classroomCode);
    localStorage.setItem("studentGender", gender);
    studentProfileEditing = false;
    if (selectedAvatar === null) {

        const msg = "Please select an avatar.";
        showNotification(msg);
        speakText(msg);
        return;

    }

    localStorage.setItem("avatar", selectedAvatar);

    const existingRequest = getStudentRequest(name);
    if (!existingRequest) {
        const requests = getStudentRequests().filter(request => {
            const isCurrentRequest = request.name === name && request.classroomCode === classroomCode;
            const isEditedPreviousRequest = request.name === previousName
                && request.classroomCode === previousClassroomCode
                && previousName !== name;
            return !isCurrentRequest && !isEditedPreviousRequest;
        });
        requests.push({
            name,
            classroomCode,
            avatar: Number(selectedAvatar) || 1,
            gender,
            status: "pending",
            createdAt: Date.now()
        });
        saveStudentRequests(requests);
        markStudentProfileSubmitted(name, classroomCode);
        setProfileCompletionState(true);
        showNotification("Your request was sent to the teacher for approval.", 5000);
        return;
    }

    markStudentProfileSubmitted(name, classroomCode);
    if (existingRequest.status !== "accepted") {
        const message = existingRequest.status === "rejected"
            ? "Your request was rejected. Please ask the teacher to review it."
            : "Please wait for the teacher to approve your request.";
        showNotification(message, 5000);
        return;
    }

    openApprovedStudentMenu(name);

});

// ======================================================
// BACK HOME
// ======================================================

backHome.addEventListener("click", () => {
    openLessonHomeConfirmation(backHome);
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
    if (tutorialToggle) {
        tutorialToggle.checked = localStorage.getItem("quizlandTutorialEnabled") !== "false";
    }
    if (settingsModal) settingsModal.style.display = "flex";
}

settingsBtn.addEventListener("click", openSettingsModal);

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
        stopUploadedAudio();
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
        if (!text || !isVoiceNarrationEnabled() || !window.speechSynthesis) {
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
        let settled = false;
        const finish = () => {
            if (settled) return;
            settled = true;
            resolve();
        };
        speech.onend = finish;
        speech.onerror = finish;
        window.setTimeout(finish, options.timeout || 1200);
        speechSynthesis.speak(speech);
    });
}

function isMicrophoneEnabled() {
    return microphoneToggle ? microphoneToggle.checked : true;
}

// ======================================================
// MICROPHONE PERMISSION (requested when Speak Answer is used)
// ======================================================

const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
let micPermissionState = "unknown";
let micPermissionRequestInFlight = null;
let micAllowNotificationShown = false;

function canUseVoiceFeatures() {
    return window.isSecureContext && !!SpeechRecognitionAPI;
}

function getMicrophoneBlockedMessage() {
    if (!window.isSecureContext) {
        return selectedLanguage === "tl"
            ? "Buksan ang app sa http://localhost o HTTPS, hindi file://, para gumana ang mikropono."
            : "Open the app at http://localhost or HTTPS, not file://, for the microphone to work.";
    }
    if (!SpeechRecognitionAPI) {
        return selectedLanguage === "tl"
            ? "Hindi available ang voice recognition sa browser na ito. Gamitin ang Chrome o Edge."
            : "Voice recognition is not available in this browser. Please use Chrome or Edge.";
    }
    if (!navigator.mediaDevices?.getUserMedia) {
        return selectedLanguage === "tl"
            ? "Hindi available ang mikropono sa browser na ito."
            : "Microphone is not available in this browser.";
    }
    return selectedLanguage === "tl"
        ? "Hindi available ang mikropono."
        : "Microphone unavailable.";
}

async function checkMicrophonePermissionState() {
    try {
        if (navigator.permissions?.query) {
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

function getMicrophoneAllowMessage() {
    return selectedLanguage === "tl"
        ? "🎤 Paki-click ang Allow isang beses para gumana ang mikropono."
        : "🎤 Click Allow once so the microphone can work.";
}

async function ensureMicrophoneAccess(options = {}) {
    const { silent = false, notifySuccess = false } = options;

    if (!window.isSecureContext) {
        if (!silent) {
            showNotification(getMicrophoneBlockedMessage(), 5000);
        }
        return false;
    }

    if (micPermissionRequestInFlight) {
        return micPermissionRequestInFlight;
    }

    if (!navigator.mediaDevices?.getUserMedia) {
        // Speech recognition can request mic access on its own.
        return true;
    }

    micPermissionRequestInFlight = (async () => {
        try {
            if (!silent && !micAllowNotificationShown) {
                micAllowNotificationShown = true;
                showNotification(getMicrophoneAllowMessage(), 4500);
            }
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            stream.getTracks().forEach(track => track.stop());
            micPermissionState = "granted";
            localStorage.setItem("micPermissionGranted", "true");
            if (!silent && notifySuccess) {
                showNotification(
                    selectedLanguage === "tl"
                        ? "Mikropono ay pinapayagan na."
                        : "Microphone is allowed.",
                    2200
                );
            }
            return true;
        } catch (err) {
            if (err?.name === "NotAllowedError" || err?.name === "PermissionDeniedError") {
                micPermissionState = "denied";
            }
            if (!silent) {
                showNotification(getMicrophoneBlockedMessage(), 4500);
            }
            return false;
        } finally {
            micPermissionRequestInFlight = null;
        }
    })();

    return micPermissionRequestInFlight;
}

function getSpeechRecognitionErrorMessage(errorCode) {
    switch (errorCode) {
        case "not-allowed":
        case "service-not-allowed":
            return getMicrophoneBlockedMessage();
        case "audio-capture":
            return selectedLanguage === "tl"
                ? "Walang nahanap na mikropono. Ikonekta ang mic at subukan ulit."
                : "No microphone found. Connect a mic and try again.";
        case "no-speech":
            return selectedLanguage === "tl"
                ? "Walang narinig. Subukan ulit."
                : "No speech detected. Try again.";
        case "network":
            return selectedLanguage === "tl"
                ? "Kailangan ng internet para sa voice recognition."
                : "Voice recognition needs an internet connection.";
        case "aborted":
            return selectedLanguage === "tl"
                ? "Tumigil ang pakikinig."
                : "Listening stopped.";
        default:
            return selectedLanguage === "tl"
                ? `May problema sa mikropono (${errorCode}). Subukan ulit.`
                : `Mic error (${errorCode}). Please try again.`;
    }
}

function speakQuizQuestion() {
    if (!quizQuestions.length) return;
    const prefix = selectedLanguage === 'tl'
        ? `Tanong ${currentQuizIndex + 1}. `
        : `Question ${currentQuizIndex + 1}. `;
    const text = prefix + quizQuestions[currentQuizIndex].prompt;
    return speakText(text);
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
    const volume = bgMusicVolume ? Number(bgMusicVolume.value) / 100 : 0.1;

    bgAudio.volume = volume;

    if (!enabled) {
        bgAudio.pause();
        return;
    }

    bgAudio.play().catch(() => {
        // autoplay may be blocked until user interacts with the page
    });
}

function startMusicAfterInteraction() {
    updateBgMusic();
    if (bgAudio && !bgAudio.paused) {
        document.removeEventListener("pointerdown", startMusicAfterInteraction);
        document.removeEventListener("keydown", startMusicAfterInteraction);
        document.removeEventListener("touchstart", startMusicAfterInteraction);
    }
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

// ======================================================
// MICROPHONE SETTINGS
// ======================================================

function saveMicrophoneEnabled(enabled) {
    localStorage.setItem("microphoneEnabled", enabled ? "true" : "false");
}

function loadMicrophoneEnabled() {
    const saved = localStorage.getItem("microphoneEnabled");
    return saved === null ? true : saved === "true";
}

function updateMicrophoneStatus() {
    if (!microphoneStatus) return;

    const statusMap = {
        "granted": { text: "✓ Allowed", class: "mic-status--granted" },
        "denied": { text: "✗ Denied", class: "mic-status--denied" },
        "prompt": { text: "? Ask permission", class: "mic-status--prompt" },
        "unknown": { text: "Checking...", class: "mic-status--unknown" }
    };

    const status = statusMap[micPermissionState] || statusMap["unknown"];
    microphoneStatus.textContent = status.text;
    microphoneStatus.className = "mic-status " + status.class;

    // Show/hide the Allow button based on permission state
    if (microphoneAllowBtn) {
        microphoneAllowBtn.style.display = 
            micPermissionState === "granted" ? "none" : "block";
    }
}

if (microphoneToggle) {
    // Load saved state
    microphoneToggle.checked = loadMicrophoneEnabled();

    microphoneToggle.addEventListener("change", () => {
        saveMicrophoneEnabled(microphoneToggle.checked);
        if (microphoneToggle.checked) {
            showNotification(
                selectedLanguage === "tl"
                    ? "🎤 Mikropono ay naka-on."
                    : "🎤 Microphone is on."
            );
        } else {
            showNotification(
                selectedLanguage === "tl"
                    ? "🎤 Mikropono ay naka-off."
                    : "🎤 Microphone is off."
            );
        }
    });
}

if (microphoneAllowBtn) {
    microphoneAllowBtn.addEventListener("click", async () => {
        const result = await ensureMicrophoneAccess({ silent: false, notifySuccess: true });
        updateMicrophoneStatus();
    });
}

// Initialize microphone status on page load
setTimeout(() => {
    checkMicrophonePermissionState().then(() => {
        updateMicrophoneStatus();
    });
}, 100);

const VOICE_FEEDBACK_NOTIFICATION_MS = 2000;

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
        markProfileEditing();

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

    if (bgMusicVolume) bgMusicVolume.value = "10";
    if (sfxVolume) sfxVolume.value = "10";

    const savedName = localStorage.getItem("studentName");

    if (savedName) {

        setStudentNameFields(savedName);

    }

    // Do not auto-restore avatar selection; user must re-select an avatar each session.
    // const savedAvatar = localStorage.getItem("avatar");


    const savedFullscreen = localStorage.getItem("fullscreenEnabled") === "true";

    if (fullscreenToggle) {

        fullscreenToggle.checked = savedFullscreen;

    }

    const savedVoiceNarration = localStorage.getItem("voiceNarrationEnabled");
    applyVoiceNarrationSetting(savedVoiceNarration === null ? true : savedVoiceNarration === "true");
    if (tutorialToggle) {
        tutorialToggle.checked = localStorage.getItem("quizlandTutorialEnabled") !== "false";
    }

    updateBgMusic();
    updateSfxVolume();
    updateVolumeLabel(bgMusicVolume, bgMusicVolumeValue);
    updateVolumeLabel(sfxVolume, sfxVolumeValue);
    updateStudentHud();
    document.addEventListener("pointerdown", startMusicAfterInteraction);
    document.addEventListener("keydown", startMusicAfterInteraction);
    document.addEventListener("touchstart", startMusicAfterInteraction);
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
        {title:"Alphabet Lesson",letter:"A",word:"A",image:"alpha001.png"},
        {title:"Alphabet Lesson",letter:"B",word:"B",image:"alpha002.png"},
        {title:"Alphabet Lesson",letter:"C",word:"C",image:"alpha003.png"},
        {title:"Alphabet Lesson",letter:"D",word:"D",image:"alpha004.png"},
        {title:"Alphabet Lesson",letter:"E",word:"E",image:"alpha005.png"},
        {title:"Alphabet Lesson",letter:"F",word:"F",image:"alpha006.png"},
        {title:"Alphabet Lesson",letter:"G",word:"G",image:"alpha007.png"},
        {title:"Alphabet Lesson",letter:"H",word:"H",image:"alpha008.png"},
        {title:"Alphabet Lesson",letter:"I",word:"I",image:"alpha009.png"},
        {title:"Alphabet Lesson",letter:"J",word:"J",image:"alpha010.png"},
        {title:"Alphabet Lesson",letter:"K",word:"K",image:"alpha011.png"},
        {title:"Alphabet Lesson",letter:"L",word:"L",image:"alpha012.png"},
        {title:"Alphabet Lesson",letter:"M",word:"M",image:"alpha013.png"},
        {title:"Alphabet Lesson",letter:"N",word:"N",image:"alpha014.png"},
        {title:"Alphabet Lesson",letter:"O",word:"O",image:"alpha015.png"},
        {title:"Alphabet Lesson",letter:"P",word:"P",image:"alpha016.png"},
        {title:"Alphabet Lesson",letter:"Q",word:"Q",image:"alpha017.png"},
        {title:"Alphabet Lesson",letter:"R",word:"R",image:"alpha018.png"},
        {title:"Alphabet Lesson",letter:"S",word:"S",image:"alpha019.png"},
        {title:"Alphabet Lesson",letter:"T",word:"T",image:"alpha020.png"},
        {title:"Alphabet Lesson",letter:"U",word:"U",image:"alpha021.png"},
        {title:"Alphabet Lesson",letter:"V",word:"V",image:"alpha022.png"},
        {title:"Alphabet Lesson",letter:"W",word:"W",image:"alpha023.png"},
        {title:"Alphabet Lesson",letter:"X",word:"X",image:"alpha024.png"},
        {title:"Alphabet Lesson",letter:"Y",word:"Y",image:"alpha025.png"},
        {title:"Alphabet Lesson",letter:"Z",word:"Z",image:"alpha026.png"}
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

const customLessonMetadata = {};

function syncCustomLessons() {
    Object.keys(customLessonMetadata).forEach(category => {
        delete lessons[category];
        delete customLessonMetadata[category];
    });

    getCustomLessons().forEach(customLesson => {
        if (!customLesson.id || !customLesson.name || !Array.isArray(customLesson.items) || !customLesson.items.length) return;
        const category = customLesson.id;
        lessons[category] = customLesson.items.map(item => ({
            title: `${customLesson.name} Lesson`,
            letter: "",
            word: item.name,
            image: item.image,
            audio: item.audio || ""
        }));
        customLessonMetadata[category] = customLesson;
    });
    renderCustomLessonGrid();
}

function renderCustomLessonGrid() {
    if (!customLessonGrid) return;
    customLessonGrid.innerHTML = "";
    Object.entries(customLessonMetadata)
        .filter(([, customLesson]) => !customLesson.hidden)
        .forEach(([category, customLesson]) => {
        const card = document.createElement("div");
        card.className = "lesson-card custom-lesson-card";
        card.dataset.lessonCategory = category;
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `Select ${customLesson.name} lesson`);
        card.innerHTML = `
            <img alt="">
            <h3></h3>
            <button class="quiz-menu-btn" data-quiz-category="${category}" type="button" disabled>Quiz 🔒</button>`;
        card.querySelector("img").src = customLesson.cover;
        card.querySelector("img").alt = `${customLesson.name} lesson cover`;
        card.querySelector("h3").textContent = customLesson.name;
        bindLessonCard(card);
        customLessonGrid.appendChild(card);
        });
}

syncCustomLessons();

function bindLessonCard(card) {
    const category = card.dataset.lessonCategory;
    if (!category) return;
    const select = () => selectLesson(category, card);
    card.addEventListener("click", event => {
        if (event.target.closest(".quiz-menu-btn")) return;
        select();
    });
    card.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            select();
        }
    });
    card.querySelector(".quiz-menu-btn")?.addEventListener("click", event => {
        event.stopPropagation();
        openCategoryQuiz(category);
    });
}

function selectLesson(category, card) {
    selectedLessonCategory = category;
    document.querySelectorAll(".lesson-card[data-lesson-category]").forEach(entry => {
        const isSelected = entry === card || entry.dataset.lessonCategory === category;
        entry.classList.toggle("selected", isSelected);
        entry.setAttribute("aria-pressed", String(isSelected));
    });
    if (menuStartBtn) {
        menuStartBtn.disabled = false;
        menuStartBtn.textContent = `Start ${translateLessonTitle(category)}`;
    }
}

document.querySelectorAll(".lesson-card[data-lesson-category]").forEach(bindLessonCard);
if (menuStartBtn) {
    menuStartBtn.addEventListener("click", () => {
        if (selectedLessonCategory) openLesson(selectedLessonCategory);
    });
}

const translationMap = {
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
    const customLesson = customLessonMetadata[category];
    if (customLesson?.name) {
        return customLesson.name;
    }
    if (selectedLanguage === 'tl') {
        return titleTranslations[category] || lessons[category][0].title;
    }
    return lessons[category][0].title;
}

function getActivityLessonName(category) {
    return translateLessonTitle(category).replace(/\s+lesson$/i, "");
}

function translateLessonProgress(count, total) {
    if (selectedLanguage === 'tl') {
        return `Aralin ${count} ng ${total}`;
    }
    return `Lesson ${count} of ${total}`;
}

let currentCategory = "alphabet";
let currentLesson = 0;

function getLessonSpeechAlternatives(lesson) {
    const localizedWord = translateWord(lesson.word);
    const letter = lesson.letter;
    const digit = currentLesson + 1;
    const word = selectedLanguage === "tl" ? localizedWord : lesson.word;

    if (selectedLanguage === "tl") {
        switch (currentCategory) {
            case "alphabet":
                return [
                    // Existing feedback (kept)
                    `Tingnan! Ito ang letrang ${letter}. Masasabi mo ba ang "${letter}"?`,
                    `Ito ang letrang ${letter}. Sabihin natin ang "${letter}" nang magkasama!`,
                    // Alternatives
                    `Masasabi mo ba kung anong letra ang nakikita mo?`,
                    `Anong letra ito?`,
                    `Kilala mo ba ang letrang ito?`,
                    `Ano ang tawag sa letrang ito?`,
                    `Naaalala mo ba ang letrang ito?`
                ];
            case "numbers":
                return [
                    // Existing feedback (kept)
                    `Ito ang numerong ${digit}. Masasabi mo ba, "${word}"?`,
                    // Alternatives
                    `Masasabi mo ba kung anong numero ang nakikita mo?`,
                    `Anong numero ito?`,
                    `Kilala mo ba ang numerong ito?`,
                    `Ano ang tawag sa numerong ito?`,
                    `Naaalala mo ba ang numerong ito?`
                ];
            case "colors":
                return [
                    // Existing feedback (kept)
                    `Tingnan! Ang kulay na ito ay ${word}. Masasabi mo ba, "${word}"?`,
                    // Alternatives
                    `Masasabi mo ba kung anong kulay ang nakikita mo?`,
                    `Anong kulay ito?`,
                    `Kilala mo ba ang kulay na ito?`,
                    `Ano ang tawag sa kulay na ito?`,
                    `Naaalala mo ba ang kulay na ito?`
                ];
            case "shapes":
                return [
                    // Existing feedback (kept)
                    `Tingnan! Ang hugis na ito ay ${word}. Masasabi mo ba, "${word}"?`,
                    // Alternatives
                    `Masasabi mo ba kung anong hugis ang nakikita mo?`,
                    `Anong hugis ito?`,
                    `Kilala mo ba ang hugis na ito?`,
                    `Ano ang tawag sa hugis na ito?`,
                    `Naaalala mo ba ang hugis na ito?`
                ];
            default:
                return [word];
        }
    }

    switch (currentCategory) {
        case "alphabet":
            return [
                // Existing feedback (kept)
                `Look! It's the letter ${letter}. Can you say "${letter}"?`,
                `This is the letter ${letter}. Let's say "${letter}" together!`,
                // Alternatives
                `Can you tell me what letter you see?`,
                `Which letter is this?`,
                `Do you know this letter?`,
                `What do we call this letter?`,
                `Can you remember this letter?`
            ];
        case "numbers":
            return [
                // Existing feedback (kept)
                `This is the number ${digit}. Can you say, "${word}"?`,
                // Alternatives
                `Can you tell me what number you see?`,
                `Which number is this?`,
                `Do you know this number?`,
                `What do we call this number?`,
                `Can you remember this number?`
            ];
        case "colors":
            return [
                // Existing feedback (kept)
                `Look! This color is ${word}. Can you say, "${word}"?`,
                // Alternatives
                `Can you tell me what color you see?`,
                `Which color is this?`,
                `Do you know this color?`,
                `What do we call this color?`,
                `Can you remember this color?`
            ];
        case "shapes":
            return [
                // Existing feedback (kept)
                `Look! This shape is ${word}. Can you say, "${word}"?`,
                // Alternatives
                `Can you tell me what shape you see?`,
                `Which shape is this?`,
                `Do you know this shape?`,
                `What do we call this shape?`,
                `Can you remember this shape?`
            ];
        default:
            return [word];
    }
}

function getLessonSpeechText() {
    const lesson = lessons[currentCategory][currentLesson];
    const alternatives = getLessonSpeechAlternatives(lesson);
    return alternatives[currentLesson % alternatives.length];
}

function updateLessonSubtitle() {
    if (!lessonFeedback) return;

    const progressText = translateLessonProgress(
        currentLesson + 1,
        lessons[currentCategory].length
    );
    lessonFeedback.textContent = progressText;
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

let lessonSpeechRecognition = null;
let lessonVoiceListening = false;
let lessonVoiceGotResult = false;
let lessonVoiceSession = 0;
let lessonVoiceListenTimer = null;
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
    Red: ["red", "read", "rid", "ed", "pula", "wed"],
    Blue: ["blue", "blu", "bloo", "asul", "azul", "bughaw", "mlue"],
    Yellow: ["yellow", "yelo", "yello", "dilaw", "elow", "yillow"],
    Green: ["green", "grin", "berde", "verde", "gin","jin"],
    // Orange already listed above
    Purple: ["purple", "purpl", "purpel", "ube", "lila", "violet", "puple"],
    Black: ["black", "blak", "itim", "bla", "back"],
    White: ["white", "wite", "puti", "way", "wayt"],
    Brown: ["brown", "braun", "bawn", "brow", "ban", "bron"],
    Pink: ["pink", "pinck", "pik", "pin", "ink"],

    // Shapes
    Circle: ["circle", "sirkel", "circl", "bilog", "round", "circulo"],
    Square: ["square", "skwer", "parisukat", "kwadrado", "cuadro"],
    Triangle: ["triangle", "trayangle", "triangel", "tatsulok", "tayanggel"],
    Rectangle: ["rectangle", "rektangle", "tangle", "rektanggle", "rec angle"],
    Star: ["star", "ster", "satar", "istar", "stars"],
    Heart: ["heart", "hart", "puso", "hat"],
    Pentagon: ["pentagon", "pentagon", "entagon", "pen agon"],
    Hexagon: ["hexagon", "heksagon", "hexagono", "hesagon", "exagon"],
    Diamond: ["diamond", "daymond", "diyamante", "aimon", "dayamon"],
    Oval: ["oval", "ovel", "obalo", "obal", "bal", "ubal"]
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
        lessonSpeakBtn.textContent = selectedLanguage === "tl" ? "🎤 Magsalita" : "🎤 Speak";
    }
}

function awardLessonVoiceStar() {
    if (hasLessonVoiceStarBeenAwarded()) return 0;
    loadStudentStars();
    const gained = 1;
    quizStars += gained;
    saveStudentStars();
    recordDailyStarsEarned(gained);
    markLessonVoiceStarAwarded();
    updateQuizStarDisplay(true, gained);
    updateCurrentStudentRecord();
    return gained;
}

function stopLessonVoiceListening(updateButton = true) {
    lessonVoiceListening = false;
    lessonVoiceSession += 1;
    if (lessonVoiceListenTimer) {
        clearTimeout(lessonVoiceListenTimer);
        lessonVoiceListenTimer = null;
    }
    if (lessonSpeechRecognition) {
        try {
            lessonSpeechRecognition.onresult = null;
            lessonSpeechRecognition.onerror = null;
            lessonSpeechRecognition.onend = null;
            lessonSpeechRecognition.stop();
        } catch (err) {
            // ignore
        }
        lessonSpeechRecognition = null;
    }
    if (updateButton && lessonSpeakBtn) {
        lessonSpeakBtn.classList.remove("is-listening");
        lessonSpeakBtn.textContent = selectedLanguage === "tl" ? "🎤 Magsalita" : "🎤 Speak";
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
                ? `Tama! +${gained} bituin!`
                : `Correct! +${gained} star!`)
            : (selectedLanguage === "tl"
                ? `Tama! (Nakuha mo na ang bituin dito.)`
                : `Correct! (Star already earned for this item.)`);

        setLessonVoiceStatus(message, "correct");
        speakText(selectedLanguage === "tl" ? "Tama! Magaling!" : "Correct! Great job!");
    } else {
        const lesson = lessons[currentCategory][currentLesson];
        const hint = currentCategory === "alphabet"
            ? lesson.letter
            : translateWord(lesson.word);
        const message = selectedLanguage === "tl"
            ? `Halos! Subukan sabihin: ${hint}`
            : `Close! Try saying: ${hint}`;
        setLessonVoiceStatus(message, "wrong");
        speakText(selectedLanguage === "tl" ? "Subukan ulit!" : "Try again!");
    }
}

async function startLessonVoiceListening() {
    if (!isMicrophoneEnabled()) {
        const msg = selectedLanguage === "tl"
            ? "Naka-off ang mikropono. Buksan ito sa Settings."
            : "Microphone is off. Turn it on in Settings.";
        setLessonVoiceStatus(msg, "wrong");
        showNotification(msg, 3000);
        return;
    }

    if (!canUseVoiceFeatures()) {
        const msg = getMicrophoneBlockedMessage();
        setLessonVoiceStatus(msg, "wrong");
        showNotification(msg, 5000);
        return;
    }

    const microphoneReady = await ensureMicrophoneAccess({ silent: false, notifySuccess: false });
    if (!microphoneReady) {
        const msg = getMicrophoneBlockedMessage();
        setLessonVoiceStatus(msg, "wrong");
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
    stopUploadedAudio();
    stopLessonVoiceListening(false);

    const recognition = new SpeechRecognitionAPI();
    lessonSpeechRecognition = recognition;
    recognition.lang = selectedLanguage === "tl" ? "fil-PH" : "en-US";
    recognition.interimResults = true;
    recognition.maxAlternatives = 5;
    recognition.continuous = true;

    const session = lessonVoiceSession;
    lessonVoiceGotResult = false;
    lessonVoiceListening = true;

    if (lessonSpeakBtn) {
        lessonSpeakBtn.classList.add("is-listening");
        lessonSpeakBtn.textContent = selectedLanguage === "tl" ? "🛑 Tumigil" : "🛑 Listening...";
    }
    setLessonVoiceStatus(
        selectedLanguage === "tl" ? "Nakikinig... magsalita ngayon." : "Listening... speak now.",
        "listening"
    );

    recognition.onresult = (event) => {
        if (session !== lessonVoiceSession) return;

        let interimTranscript = "";
        let finalTranscript = "";
        const alternatives = [];

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const result = event.results[i];
            const transcript = result[0]?.transcript || "";
            if (result.isFinal) {
                finalTranscript += transcript;
            } else {
                interimTranscript += transcript;
            }

            for (let j = 0; j < result.length; j++) {
                alternatives.push(result[j].transcript);
            }
        }

        if (!finalTranscript) return;

        lessonVoiceGotResult = true;
        stopLessonVoiceListening();

        const match = alternatives.find(text => isSpokenAnswerCorrect(text));
        handleLessonVoiceResult(match || finalTranscript.trim());
    };

    recognition.onerror = (event) => {
        if (session !== lessonVoiceSession) return;
        // Chrome often fires these while still listening; keep the mic open.
        if (event.error === "no-speech" || event.error === "aborted") return;

        stopLessonVoiceListening();
        const msg = getSpeechRecognitionErrorMessage(event.error);
        setLessonVoiceStatus(msg, "wrong");
        showNotification(msg, event.error === "not-allowed" ? 5000 : VOICE_FEEDBACK_NOTIFICATION_MS);
    };

    recognition.onend = () => {
        if (session !== lessonVoiceSession) return;
        if (lessonVoiceListening && !lessonVoiceGotResult) {
            try {
                recognition.start();
            } catch (err) {
                stopLessonVoiceListening();
                const msg = selectedLanguage === "tl"
                    ? "Walang narinig. Subukan ulit."
                    : "No speech detected. Try again.";
                setLessonVoiceStatus(msg, "wrong");
                showNotification(msg, VOICE_FEEDBACK_NOTIFICATION_MS);
            }
        }
    };

    try {
        // Must start in the same click as Speak Answer so the browser allows the mic.
        recognition.start();
        if (!micAllowNotificationShown) {
            micAllowNotificationShown = true;
            showNotification(getMicrophoneAllowMessage(), 4500);
        } else {
            showNotification(
                selectedLanguage === "tl" ? "🎤 Magsalita ngayon..." : "🎤 Speak now...",
                VOICE_FEEDBACK_NOTIFICATION_MS
            );
        }
    } catch (err) {
        stopLessonVoiceListening();
        const msg = getMicrophoneBlockedMessage();
        setLessonVoiceStatus(msg, "wrong");
        showNotification(msg, 5000);
        return;
    }

    lessonVoiceListenTimer = setTimeout(() => {
        if (session !== lessonVoiceSession) return;
        if (!lessonVoiceListening || lessonVoiceGotResult) return;
        stopLessonVoiceListening();
        const msg = selectedLanguage === "tl"
            ? "Walang narinig. Subukan ulit."
            : "No speech detected. Try again.";
        setLessonVoiceStatus(msg, "wrong");
        showNotification(msg, VOICE_FEEDBACK_NOTIFICATION_MS);
    }, 12000);
}

function speakLessonText() {
    speechSynthesis.cancel();
    stopUploadedAudio();
    stopLessonVoiceListening();

    const speechText = getLessonSpeechText();
    const speech = new SpeechSynthesisUtterance(speechText);
    applyKidFemaleVoice(speech, { rate: 0.85, pitch: 1.55, volume: 1 });

    speechSynthesis.speak(speech);
    showNotification(speechText, 2600);
}

function loadLesson() {

    stopUploadedAudio();
    const lesson = lessons[currentCategory][currentLesson];
    const localizedWord = translateWord(lesson.word);

    lessonTitle.textContent = translateLessonTitle(currentCategory);
    lessonImage.src = lesson.image;
    if (lessonAudioBtn) {
        lessonAudioBtn.hidden = !lesson.audio;
        lessonAudioBtn.disabled = !lesson.audio;
        lessonAudioBtn.title = lesson.audio ? `Play ${lesson.word} audio` : "No audio added for this item";
    }
    lessonLetter.classList.remove("lesson-prompt-text", "lesson-color-name", "lesson-shape-name");

    if (currentCategory === "alphabet") {
        lessonLetter.textContent = lesson.letter;
        lessonWord.textContent = localizedWord;
        lessonWord.hidden = false;
    } else if (currentCategory === "numbers") {
        lessonLetter.textContent = String(currentLesson + 1);
        lessonWord.textContent = localizedWord;
        lessonWord.hidden = false;
    } else if (currentCategory === "colors") {
        lessonLetter.textContent = localizedWord.toUpperCase();
        lessonLetter.classList.add("lesson-color-name");
        lessonWord.textContent = "";
        lessonWord.hidden = true;
    } else if (currentCategory === "shapes") {
        lessonLetter.textContent = localizedWord;
        lessonLetter.classList.add("lesson-shape-name");
        lessonWord.textContent = "";
        lessonWord.hidden = true;
    } else {
        lessonLetter.textContent = localizedWord;
        lessonWord.textContent = "";
        lessonWord.hidden = true;
    }

    const progress =
        ((currentLesson + 1) /
        lessons[currentCategory].length) * 100;

    progressFill.style.width = progress + "%";

    updateLessonSubtitle();
    resetLessonVoiceUi();
    speakLessonText();
}

let selectedLanguage = 'en';

function openLesson(category){
    currentCategory = category;
    currentLesson = 0;
    openLessonContinue(category);
}

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

function getCompletedLessonCategories() {
    return JSON.parse(localStorage.getItem(getCurrentStudentProgressKey("lessonProgress"))) || {};
}

function updateQuizMenuButtons() {
    const completedCategories = getCompletedLessonCategories();
    document.querySelectorAll(".quiz-menu-btn").forEach(button => {
        const category = button.dataset.quizCategory;
        const unlocked = !!completedCategories[category];
        button.disabled = !unlocked;
        button.classList.toggle("is-unlocked", unlocked);
        button.textContent = unlocked ? "Quiz ⭐" : "Quiz 🔒";
        button.title = unlocked ? "Start quiz" : "Finish the lesson to unlock this quiz";
    });
}

function openCategoryQuiz(category) {
    if (!getCompletedLessonCategories()[category]) return;
    currentCategory = category;
    quizCategory = category;
    recordStudentActivity(`Opened ${getActivityLessonName(category)} quiz`);
    showScreen(quizScreen);
    initializeQuiz();
}

quizMenuButtons.forEach(button => {
    button.addEventListener("click", () => openCategoryQuiz(button.dataset.quizCategory));
});

updateQuizMenuButtons();

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
// BACK TO LESSON MENU
// -------------------------------

lessonHomeBtn.onclick = () => {
    speechSynthesis.cancel();
    stopLessonVoiceListening();
    stopUploadedAudio();
    showScreen(menuScreen);
};

function openLessonHomeConfirmation(triggerButton, options = {}) {
    if (!lessonHomeConfirmModal) {
        console.error("Home confirmation dialog is not available.");
        showNotification("Unable to open the Home confirmation. Please refresh the page.");
        return;
    }
    lessonHomeConfirmationTrigger = triggerButton;
    lessonHomeConfirmationAction = options.action || (() => {
        speechSynthesis.cancel();
        stopLessonVoiceListening();
        showScreen(homeScreen);
    });
    if (lessonHomeConfirmTitle) lessonHomeConfirmTitle.textContent = options.title || "Are you sure?";
    if (lessonHomeConfirmMessage) {
        lessonHomeConfirmMessage.textContent = options.message || "Do you want to leave the lesson menu and go back to Home?";
    }
    if (lessonHomeCancelBtn) lessonHomeCancelBtn.textContent = options.cancelText || "Stay Here";
    if (lessonHomeConfirmBtn) lessonHomeConfirmBtn.textContent = options.confirmText || "Yes, Go Home";
    lessonHomeConfirmModal.hidden = false;
    lessonHomeCancelBtn?.focus();
}

function closeLessonHomeConfirmation(restoreFocus = true) {
    if (lessonHomeConfirmModal) lessonHomeConfirmModal.hidden = true;
    if (restoreFocus) lessonHomeConfirmationTrigger?.focus();
    lessonHomeConfirmationTrigger = null;
    lessonHomeConfirmationAction = null;
}

lessonHomeCancelBtn?.addEventListener("click", closeLessonHomeConfirmation);
lessonHomeConfirmModal?.addEventListener("click", event => {
    if (event.target === lessonHomeConfirmModal) closeLessonHomeConfirmation();
});
lessonHomeConfirmBtn?.addEventListener("click", () => {
    const action = lessonHomeConfirmationAction;
    closeLessonHomeConfirmation(false);
    action?.();
});
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && lessonHomeConfirmModal && !lessonHomeConfirmModal.hidden) {
        closeLessonHomeConfirmation();
    }
});

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

    const lessonItem = lessons[currentCategory]?.[currentLesson];
    recordStudentActivity(`Opened ${getActivityLessonName(currentCategory)} lesson`, {
        kind: "lesson",
        category: currentCategory,
        item: lessonItem?.word || ""
    });
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

if (lessonAudioBtn) {
    lessonAudioBtn.addEventListener("click", () => {
        const lesson = lessons[currentCategory]?.[currentLesson];
        if (!lesson?.audio) return;
        stopLessonVoiceListening();
        speechSynthesis.cancel();
        playUploadedAudio(lesson.audio).catch(error => {
            console.error("Unable to play lesson audio.", error);
            setLessonVoiceStatus("This audio could not be played. Try another audio file.", "wrong");
        });
    });
}

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
const quizVoiceInteractionBtn = document.getElementById("quizVoiceInteractionBtn");
const quizVoiceStatusEl = document.getElementById("quizVoiceStatus");
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
            ruleText = `Kailangan mong makuha ang lahat ng ${total} Easy na tanong nang tama para ma-unlock ang Normal.`;
        } else if (quizDifficulty === "medium") {
            ruleText = `Kailangan mong makuha ang lahat ng ${total} Normal na tanong nang tama para ma-unlock ang Hard.`;
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
            ruleText = `Get all ${total} Easy answers correct to unlock Normal.`;
        } else if (quizDifficulty === "medium") {
            ruleText = `Get all ${total} Normal answers correct to unlock Hard.`;
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
let quizLessonIndex = 0; // Track which lesson the quiz is for (for adaptive learning)
let quizQuestions = [];
let currentQuizAttemptId = "";
let currentQuizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let quizComplete = false;
let selectedQuizChoice = null;
let quizStageState = null;
let quizStageTransitioning = false;
let quizVoiceModeEnabled = false;
let quizVoiceSession = 0;
let quizVoiceRecognition = null;
let quizVoiceTriedChoices = new Set();

const QUIZ_YES_DATASET = ["yes", "ye", "yis", "is", "hes", "yup", "oo", "opo"];
const QUIZ_NO_DATASET = ["no", "noh", "nu", "nuh", "nah", "nope", "hindi", "indi"];
const QUIZ_CLEAR_YES_WORDS = new Set(["yes", "yup", "oo", "opo"]);
const QUIZ_CLEAR_NO_WORDS = new Set(["no", "nope", "hindi", "indi"]);

function setQuizVoiceStatus(message) {
    if (quizVoiceStatusEl) quizVoiceStatusEl.textContent = message;
}

function setQuizVoiceButtonState(isListening = false) {
    if (!quizVoiceInteractionBtn) return;
    quizVoiceInteractionBtn.classList.toggle("is-listening", isListening);
    quizVoiceInteractionBtn.setAttribute("aria-pressed", String(quizVoiceModeEnabled));
    quizVoiceInteractionBtn.textContent = quizVoiceModeEnabled
        ? (isListening ? "🎤 Listening..." : "🛑 Stop Voice")
        : "🎤 Answer by Voice";
}

function stopQuizVoiceRecognition() {
    if (!quizVoiceRecognition) return;
    const recognition = quizVoiceRecognition;
    quizVoiceRecognition = null;
    recognition.onresult = null;
    recognition.onerror = null;
    recognition.onend = null;
    try {
        recognition.stop();
    } catch (error) {
        if (error?.name !== "InvalidStateError") throw error;
    }
}

function stopQuizVoiceInteraction(cancelSpeech = true) {
    quizVoiceModeEnabled = false;
    quizVoiceSession += 1;
    stopQuizVoiceRecognition();
    quizVoiceTriedChoices.clear();
    selectedQuizChoice = null;
    answerButtons.forEach(button => button.classList.remove("selected"));
    if (cancelSpeech && window.speechSynthesis) speechSynthesis.cancel();
    setQuizVoiceButtonState(false);
    if (quizVoiceStatusEl) quizVoiceStatusEl.textContent = "";
}

function classifyQuizVoiceResponse(transcripts) {
    let heardYes = false;
    let heardNo = false;
    const yesWords = new Set(QUIZ_YES_DATASET);
    const noWords = new Set(QUIZ_NO_DATASET);

    for (const transcript of transcripts) {
        const normalized = normalizeSpokenText(transcript);
        if (!normalized) continue;

        const tokens = normalized.split(" ");
        if (yesWords.has(normalized) || tokens.some(token => QUIZ_CLEAR_YES_WORDS.has(token))) {
            heardYes = true;
        }
        if (noWords.has(normalized) || tokens.some(token => QUIZ_CLEAR_NO_WORDS.has(token))) {
            heardNo = true;
        }
    }

    if (heardYes === heardNo) return null;
    return heardYes ? "yes" : "no";
}

function getQuizVoiceCandidatePrompt(choice) {
    const word = selectedLanguage === "tl" ? translateWord(choice) : choice;
    if (selectedLanguage === "tl") {
        if (quizCategory === "colors") return `Ito ba ang kulay na ${word}?`;
        if (quizCategory === "shapes") return `Ito ba ang hugis na ${word}?`;
        if (quizCategory === "numbers") return `Ito ba ang numerong ${word}?`;
        return `Ito ba ang sagot na ${word}?`;
    }
    if (quizCategory === "colors") return `Is this color ${word}?`;
    if (quizCategory === "shapes") return `Is this shape ${word}?`;
    if (quizCategory === "numbers") return `Is this number ${word}?`;
    return `Is ${word} the answer?`;
}

function isQuizAnswerCorrect(selected, correct) {
    const normalizeAnswer = value => String(value ?? "").trim().toLowerCase();
    const selectedNumber = Number(normalizeAnswer(selected));
    const correctNumber = Number(normalizeAnswer(correct));
    const isNumericMatch = Number.isFinite(selectedNumber)
        && Number.isFinite(correctNumber)
        && selectedNumber === correctNumber;
    return normalizeAnswer(selected) === normalizeAnswer(correct) || isNumericMatch;
}

function askNextQuizVoiceChoice(session) {
    if (session !== quizVoiceSession || !quizVoiceModeEnabled || quizAnswered || quizComplete) return;

    const choices = [...answerButtons].filter(button =>
        !button.hidden && !button.disabled && !button.classList.contains("unused") && button.dataset.choice
    );
    if (!choices.length) {
        stopQuizVoiceInteraction();
        showNotification("No answer choices are available for voice interaction.", 3500);
        return;
    }

    let button = choices.find(choice => !quizVoiceTriedChoices.has(choice.dataset.choice));
    if (!button) {
        quizVoiceTriedChoices.clear();
        const repeatMessage = selectedLanguage === "tl"
            ? "Subukan natin ulit ang mga pagpipilian."
            : "Let's try the choices again.";
        setQuizVoiceStatus(repeatMessage);
        speakText(repeatMessage).then(() => askNextQuizVoiceChoice(session));
        return;
    }

    selectedQuizChoice = button.dataset.choice;
    answerButtons.forEach(choice => choice.classList.toggle("selected", choice === button));
    const prompt = getQuizVoiceCandidatePrompt(selectedQuizChoice);
    setQuizVoiceButtonState(false);
    stopUploadedAudio();
    if (quizVoiceStatusEl) {
        quizVoiceStatusEl.textContent = selectedLanguage === "tl"
            ? `Makinig at sumagot ng oo o hindi: ${prompt}`
            : `Listen and say yes or no: ${prompt}`;
    }

    speakText(prompt, { timeout: 8000 }).then(() => {
        if (session === quizVoiceSession && quizVoiceModeEnabled) {
            listenForQuizVoiceResponse(session, button);
        }
    });
}

function retryQuizVoiceResponse(session, button, repeatPrompt = false) {
    if (session !== quizVoiceSession || !quizVoiceModeEnabled) return;
    const prompt = selectedLanguage === "tl"
        ? "Sabihin ang oo o hindi."
        : "Please say yes or no.";
    const listen = () => {
        if (session === quizVoiceSession && quizVoiceModeEnabled) {
            listenForQuizVoiceResponse(session, button);
        }
    };
    if (repeatPrompt) {
        setQuizVoiceStatus(prompt);
        speakText(prompt).then(listen);
    } else {
        listen();
    }
}

function listenForQuizVoiceResponse(session, button) {
    if (session !== quizVoiceSession || !quizVoiceModeEnabled) return;
    if (!SpeechRecognitionAPI) {
        stopQuizVoiceInteraction();
        showNotification(getMicrophoneBlockedMessage(), 5000);
        return;
    }

    const recognition = new SpeechRecognitionAPI();
    quizVoiceRecognition = recognition;
    recognition.lang = selectedLanguage === "tl" ? "fil-PH" : "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 5;
    recognition.continuous = false;
    let resultHandled = false;
    let errorHandled = false;

    setQuizVoiceButtonState(true);
    if (quizVoiceStatusEl) {
        quizVoiceStatusEl.textContent = selectedLanguage === "tl"
            ? "Nakikinig... sabihin ang oo o hindi."
            : "Listening... say yes or no.";
    }

    recognition.onresult = event => {
        if (session !== quizVoiceSession || recognition !== quizVoiceRecognition) return;
        resultHandled = true;
        const transcripts = [];
        for (let index = event.resultIndex; index < event.results.length; index++) {
            for (let alternative = 0; alternative < event.results[index].length; alternative++) {
                transcripts.push(event.results[index][alternative].transcript);
            }
        }
        const response = classifyQuizVoiceResponse(transcripts);
        stopQuizVoiceRecognition();
        setQuizVoiceButtonState(false);

        if (!response) {
            retryQuizVoiceResponse(session, button, true);
            return;
        }

        quizVoiceTriedChoices.add(button.dataset.choice);
        if (response === "yes" && isQuizAnswerCorrect(
            button.dataset.choice,
            quizQuestions[currentQuizIndex]?.correct
        )) {
            selectQuizAnswer(button);
            return;
        }

        selectedQuizChoice = null;
        button.classList.remove("selected");
        if (response === "yes") {
            const message = selectedLanguage === "tl"
                ? "Subukan natin ang ibang sagot."
                : "Let's try another answer.";
            setQuizVoiceStatus(message);
            speakText(message).then(() => askNextQuizVoiceChoice(session));
        } else {
            askNextQuizVoiceChoice(session);
        }
    };

    recognition.onerror = event => {
        if (session !== quizVoiceSession || recognition !== quizVoiceRecognition) return;
        errorHandled = true;
        if (event.error === "no-speech" || event.error === "aborted") return;

        stopQuizVoiceRecognition();
        stopQuizVoiceInteraction();
        const message = getSpeechRecognitionErrorMessage(event.error);
        if (quizVoiceStatusEl) quizVoiceStatusEl.textContent = message;
        showNotification(message, event.error === "not-allowed" ? 5000 : 3500);
    };

    recognition.onend = () => {
        if (session !== quizVoiceSession || recognition !== quizVoiceRecognition) return;
        quizVoiceRecognition = null;
        if (resultHandled || !quizVoiceModeEnabled) return;
        if (errorHandled) {
            retryQuizVoiceResponse(session, button, true);
        } else {
            retryQuizVoiceResponse(session, button, false);
        }
    };

    try {
        recognition.start();
    } catch (error) {
        stopQuizVoiceInteraction();
        const message = getSpeechRecognitionErrorMessage(error?.name === "InvalidStateError" ? "aborted" : "unknown");
        if (quizVoiceStatusEl) quizVoiceStatusEl.textContent = message;
        showNotification(message, 3500);
    }
}

async function startQuizVoiceInteraction() {
    if (quizVoiceModeEnabled) {
        stopQuizVoiceInteraction();
        return;
    }
    if (!isMicrophoneEnabled()) {
        const message = selectedLanguage === "tl"
            ? "Naka-off ang mikropono. Buksan ito sa Settings."
            : "Microphone is off. Turn it on in Settings.";
        showNotification(message, 3500);
        return;
    }
    if (!canUseVoiceFeatures()) {
        showNotification(getMicrophoneBlockedMessage(), 5000);
        return;
    }

    quizVoiceModeEnabled = true;
    quizVoiceTriedChoices.clear();
    const session = ++quizVoiceSession;
    setQuizVoiceButtonState(false);
    if (quizVoiceStatusEl) {
        quizVoiceStatusEl.textContent = selectedLanguage === "tl"
            ? "Inihahanda ang mikropono..."
            : "Preparing the microphone...";
    }
    const microphoneReady = await ensureMicrophoneAccess({ silent: false, notifySuccess: false });
    if (session !== quizVoiceSession || !quizVoiceModeEnabled) return;
    if (!microphoneReady) {
        stopQuizVoiceInteraction();
        const message = getMicrophoneBlockedMessage();
        if (quizVoiceStatusEl) quizVoiceStatusEl.textContent = message;
        return;
    }
    askNextQuizVoiceChoice(session);
}

quizVoiceInteractionBtn?.addEventListener("click", startQuizVoiceInteraction);

function updateQuizStarDisplay(animate = false, gained = 0) {
    if (quizStarCountEl) {
        quizStarCountEl.textContent = String(quizStars);
    }

    if (!animate || !quizStarScoreEl || gained <= 0) return;

    quizStarScoreEl.classList.remove("pop");
    quizStarScoreEl.classList.remove("star-celebration");
    // Force reflow so the animation can replay
    void quizStarScoreEl.offsetWidth;
    quizStarScoreEl.classList.add("pop", "star-celebration");

    if (quizStarScoreEl) {
        const reward = document.createElement("div");
        reward.className = "star-reward-flight";
        reward.innerHTML = `<span class="star-reward-icon">★</span><strong>+${gained}</strong>`;
        document.body.appendChild(reward);

        window.setTimeout(() => {
            const target = quizStarScoreEl.getBoundingClientRect();
            const targetX = target.left + target.width / 2 - window.innerWidth / 2;
            const targetY = target.top + target.height / 2 - window.innerHeight / 2;
            reward.style.setProperty("--fly-x", `${targetX}px`);
            reward.style.setProperty("--fly-y", `${targetY}px`);
            reward.classList.add("is-flying");
        }, 500);

        reward.addEventListener("animationend", () => {
            if (reward.classList.contains("is-flying")) reward.remove();
        });

        for (let index = 0; index < 8; index++) {
            const spark = document.createElement("span");
            spark.className = "quiz-star-spark";
            spark.style.setProperty("--spark-angle", `${index * 45}deg`);
            spark.style.setProperty("--spark-distance", `${34 + (index % 2) * 10}px`);
            quizStarScoreEl.appendChild(spark);
            spark.addEventListener("animationend", () => spark.remove());
        }

        const ring = document.createElement("span");
        ring.className = "quiz-star-ring";
        quizStarScoreEl.appendChild(ring);
        ring.addEventListener("animationend", () => ring.remove());

        for (let index = 0; index < 12; index++) {
            const ray = document.createElement("span");
            ray.className = "quiz-star-ray";
            ray.style.setProperty("--ray-angle", `${index * 30}deg`);
            quizStarScoreEl.appendChild(ray);
            ray.addEventListener("animationend", () => ray.remove());
        }
    }

    setTimeout(() => {
        quizStarScoreEl.classList.remove("pop", "star-celebration");
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

    let progress = JSON.parse(localStorage.getItem(getCurrentStudentProgressKey("lessonProgress"))) || {};

    progress[currentCategory] = true;

    localStorage.setItem(
        getCurrentStudentProgressKey("lessonProgress"),
        JSON.stringify(progress)
    );

}

// -------------------------------
// Student Progress
// -------------------------------

function saveStudentProgress() {

    let completed =
        Number(localStorage.getItem(getCurrentStudentProgressKey("completedLessons"))) || 0;

    completed++;

    localStorage.setItem(
        getCurrentStudentProgressKey("completedLessons"),
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

        recordStudentActivity(`Finished ${getActivityLessonName(quizCategory)} lesson and opened its quiz`);
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
    currentQuizAttemptId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    applyQuizDifficultyUI();

    quizCategory = currentCategory;
    quizLessonIndex = currentLesson; // Track lesson for adaptive learning
    quizScore = 0;
    sessionStarsGained = 0;
    loadStudentStars();
    currentQuizIndex = 0;
    quizAnswered = false;
    quizComplete = false;
    selectedQuizChoice = null;
    quizStageTransitioning = false;
    quizProgressFillEl.style.width = "0%";
    updateQuizStarDisplay(false);

    quizTitle.textContent =
        selectedLanguage === 'tl'
            ? (quizTitleTranslations[quizCategory] || `${translateLessonTitle(quizCategory)} Quiz`)
            : `${translateLessonTitle(quizCategory)} Quiz`;

    // Sequential stage progression: Easy (5) -> Normal (10) -> Hard (15)
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
        medium: [
            {
                id: "num-medium-Before-Five-1",
                promptEN: "Which number comes before Five?",
                promptTL: "Aling numero ang darating bago ang Lima?",
                correct: "Four",
                choices: ["Three", "Four", "Five"]
            },
            {
                id: "num-medium-After-Two-1",
                promptEN: "Which number comes after Two?",
                promptTL: "Aling numero ang darating pagkatapos ng Dalawa?",
                correct: "Three",
                choices: ["Two", "Three", "Four"]
            }
        ],
        hard: [
            {
                id: "num-hard-Greater-Three-1",
                promptEN: "Which number is greater than Three?",
                promptTL: "Aling numero ang mas malaki kaysa Tatlo?",
                correct: "Four",
                choices: ["Two", "Three", "Four"]
            },
            {
                id: "num-hard-First-Count-1",
                promptEN: "Which number comes first when counting?",
                promptTL: "Aling numero ang una sa pagsasahin?",
                correct: "One",
                choices: ["One", "Two", "Three"]
            }
        ]
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
        medium: [
            {
                id: "col-medium-Grass-1",
                promptEN: "Which color is commonly associated with grass?",
                promptTL: "Aling kulay ang karaniwang nauugnay sa damo?",
                correct: "Green",
                choices: ["Yellow", "Green", "Brown"]
            },
            {
                id: "col-medium-Carrot-1",
                promptEN: "Which color is commonly associated with a carrot?",
                promptTL: "Aling kulay ang karaniwang nauugnay sa carrot?",
                correct: "Orange",
                choices: ["Red", "Yellow", "Orange"]
            }
        ],
        hard: [
            {
                id: "col-hard-Sky-Ocean-1",
                promptEN: "Which color is usually associated with the sky and ocean?",
                promptTL: "Aling kulay ang karaniwang nauugnay sa kalangitan at karagatan?",
                correct: "Blue",
                choices: ["Green", "Blue", "Purple"]
            },
            {
                id: "col-hard-Clear-Sky-1",
                promptEN: "Which color is usually associated with the sky on a clear day?",
                promptTL: "Aling kulay ang karaniwang nauugnay sa kalangitan sa malinaw na araw?",
                correct: "Blue",
                choices: ["Blue", "White", "Gray"]
            }
        ]
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

    const customItems = getCustomQuizQuestions().filter(question =>
        question.category === category && question.difficulty === difficulty
    );
    const items = [
        ...customItems,
        ...(lessons[category] || [])
    ];
    const pool = [...items];
    const cfg = QUIZ_DIFFICULTY[difficulty] || QUIZ_DIFFICULTY.easy;
    const questionCount = Math.max(1, overrideCount || cfg.questionCount);

    // Shuffle each pass and reuse items when a lesson has fewer items than
    // the required stage count (for example, 10 items for 15 Hard questions).
    const selected = customItems.slice(0, questionCount);
    if (pool.length) {
        while (selected.length < questionCount) {
            const batch = pool
                .map(item => ({ item, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(entry => entry.item);
            const remaining = questionCount - selected.length;
            selected.push(...batch.slice(0, remaining));
        }
    }

    return selected.map((item, idx) => {
        if (item.custom) {
            return {
                prompt: selectedLanguage === "tl" ? item.promptTL : item.promptEN,
                correct: item.word,
                choices: buildCustomQuizChoices(item, category, difficulty),
                choiceImages: item.choiceImages || {},
                audio: item.audio || ""
            };
        }

        const promptVariant = idx % 3;
        const localizedWord = translateWord(item.word);
        let enPrompt;
        let tlPrompt;

        if (category === 'alphabet') {
            const letter = item.letter;
            if (promptVariant === 0) {
                enPrompt = `Look carefully. Which one is letter ${letter}?`;
                tlPrompt = `Tingnan nang mabuti. Alin ang letrang ${letter}?`;
            } else if (promptVariant === 1) {
                enPrompt = `The letter ${letter} needs your help! Can you find the letter ${letter}?`;
                tlPrompt = `Kailangan ng tulong ang letrang ${letter}! Maaari mo bang hanapin ang letrang ${letter}?`;
            } else {
                enPrompt = `Where is the letter ${letter}? Let's find it together!`;
                tlPrompt = `Nasaan ang letrang ${letter}? Hanapin natin ito nang magkasama!`;
            }
        } else if (category === 'numbers') {
            const digit = items.findIndex(entry => entry.word === item.word) + 1;
            if (promptVariant === 0) {
                enPrompt = `Look carefully. Which one is number ${digit}?`;
                tlPrompt = `Tingnan nang mabuti. Alin ang numerong ${digit}?`;
            } else if (promptVariant === 1) {
                enPrompt = `The number ${digit} needs your help! Can you find the number ${digit}?`;
                tlPrompt = `Kailangan ng tulong ang numerong ${digit}! Maaari mo bang hanapin ang numerong ${digit}?`;
            } else {
                enPrompt = `Where is the number ${digit}? Let's find it together!`;
                tlPrompt = `Nasaan ang numerong ${digit}? Hanapin natin ito nang magkasama!`;
            }
        } else if (category === 'colors') {
            if (promptVariant === 0) {
                enPrompt = `Look carefully. Which one is ${item.word}?`;
                tlPrompt = `Tingnan nang mabuti. Alin ang kulay na ${localizedWord}?`;
            } else if (promptVariant === 1) {
                enPrompt = `The color ${item.word} needs your help! Can you find the color ${item.word}?`;
                tlPrompt = `Kailangan ng tulong ang kulay ${localizedWord}! Maaari mo bang hanapin ang kulay ${localizedWord}?`;
            } else {
                enPrompt = `Where is the color ${item.word}? Let's find it together!`;
                tlPrompt = `Nasaan ang kulay ${localizedWord}? Hanapin natin ito nang magkasama!`;
            }
        } else if (category === 'shapes') {
            if (promptVariant === 0) {
                enPrompt = `Look carefully. Which one is ${item.word}?`;
                tlPrompt = `Tingnan nang mabuti. Alin ang hugis na ${localizedWord}?`;
            } else if (promptVariant === 1) {
                enPrompt = `The shape ${item.word} needs your help! Can you find the shape ${item.word}?`;
                tlPrompt = `Kailangan ng tulong ang hugis ${localizedWord}! Maaari mo bang hanapin ang hugis ${localizedWord}?`;
            } else {
                enPrompt = `Where is the shape ${item.word}? Let's find it together!`;
                tlPrompt = `Nasaan ang hugis ${localizedWord}? Hanapin natin ito nang magkasama!`;
            }
        } else {
            enPrompt = `Look carefully. Which one is ${item.word}?`;
            tlPrompt = `Tingnan nang mabuti. Alin ang ${localizedWord}?`;
        }

        return {
            prompt: selectedLanguage === 'tl' ? tlPrompt : enPrompt,
            correct: item.word,
            choices: buildQuizChoices(item.word, items, difficulty)
        };
    });
}

function buildCustomQuizChoices(item, category, difficulty) {
    const targetCount = 3;
    const choices = [...new Set(item.choices || [])];
    const fallbackChoices = (lessons[category] || [])
        .map(lesson => lesson.word)
        .filter(word => word && !choices.includes(word));

    while (choices.length < targetCount && fallbackChoices.length) {
        choices.push(fallbackChoices.shift());
    }

    if (choices.length < targetCount) {
        Object.values(lessons).flat().forEach(lesson => {
            if (choices.length < targetCount && lesson.word && !choices.includes(lesson.word)) {
                choices.push(lesson.word);
            }
        });
    }

    return choices.slice(0, targetCount).sort(() => Math.random() - 0.5);
}

function buildQuizChoices(correctWord, items, difficulty){

    const allWords = items.map(item => item.word);
    const distractorsAll = allWords.filter(word => word !== correctWord);

    const requiredChoiceCount = 3;

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

    quizVoiceSession += 1;
    stopQuizVoiceRecognition();
    quizVoiceTriedChoices.clear();
    stopUploadedAudio();
    const question = quizQuestions[currentQuizIndex];

    quizQuestionEl.textContent = question.prompt;
    quizVoiceBtn.textContent = question.audio ? "🔊 Play Audio" : "🔊 Read Question";
    quizVoiceBtn.title = question.audio ? "Play the teacher's recorded audio" : "Read the question aloud";

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
    const requiredChoiceCount = Math.min(3, question.choices.length);

    answerButtons.forEach((button, index) => {
        const isUsed = index < requiredChoiceCount;

        button.disabled = !isUsed;
        button.hidden = !isUsed;
        button.classList.toggle("unused", !isUsed);
        button.classList.remove("correct", "wrong", "selected");

        const answerWord = isUsed ? (question.choices[index] || "") : "";
        button.dataset.choice = answerWord;

        const answerItem = answerWord
            ? (lessons[currentCategory] || []).find(item => item.word === answerWord)
            : null;
        const imageDiv = button.querySelector(".answer-image");
        const answerLabel = button.querySelector(".answer-label");
        const customImage = question.choiceImages?.[answerWord];

        if (answerLabel) answerLabel.textContent = answerWord;

        if (imageDiv) {
            if (isUsed && (customImage || answerItem?.image)) {
                imageDiv.style.backgroundImage = `url('${customImage || answerItem.image}')`;
                imageDiv.style.backgroundSize = "cover";
                imageDiv.style.backgroundPosition = "center";
            } else {
                imageDiv.style.backgroundImage = "none";
            }
        }
    });

    selectedQuizChoice = null;
    if (quizVoiceModeEnabled) {
        askNextQuizVoiceChoice(quizVoiceSession);
    } else {
        speakQuizQuestion();
    }
}

function selectQuizAnswer(button){

    if (quizAnswered || quizComplete) return;
    if (button.hidden || button.classList.contains("unused") || !button.dataset.choice) return;

    if (quizVoiceModeEnabled) {
        quizVoiceSession += 1;
        stopQuizVoiceRecognition();
        if (window.speechSynthesis) speechSynthesis.cancel();
    }
    selectedQuizChoice = button.dataset.choice;

    answerButtons.forEach(btn => {
        btn.classList.toggle("selected", btn === button);
    });

    confirmQuizAnswer();
}

function confirmQuizAnswer(){
    if (quizAnswered || quizComplete || !selectedQuizChoice) return;

    quizAnswered = true;
    stopUploadedAudio();
    const selected = selectedQuizChoice;
    const correct = quizQuestions[currentQuizIndex].correct;
    const isCorrect = isQuizAnswerCorrect(selected, correct);
    if (!isCorrect) {
        const question = quizQuestions[currentQuizIndex];
        recordStudentActivity(`Incorrect answer in ${getActivityLessonName(quizCategory || currentCategory)} quiz`, {
            kind: "quiz-mistake",
            attemptId: currentQuizAttemptId,
            questionIndex: currentQuizIndex,
            category: quizCategory || currentCategory,
            item: String(correct ?? ""),
            selected: String(selected ?? ""),
            prompt: String(question.prompt || question.promptEN || question.promptTL || "")
        });
    }

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

function getNextDifficultyAfterCompletion(currentDifficulty, stageScore, questionCount) {
    // Spec:
    // Easy passed with exactly 5/5 correct -> starts Normal
    // Normal passed with exactly 10/10 correct -> starts Hard
    // Even 1 wrong answer -> ends quiz (no advance)
    const expected = questionCount || getExpectedQuestionCountForDifficulty(currentDifficulty);

    if (stageScore < expected) {
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

// ======================================================
// ADAPTIVE LEARNING SYSTEM (80% threshold)
// ======================================================

const ADAPTIVE_LEARNING_THRESHOLD = 80;

function getNextLessonCategory(currentCategory) {
    const categoryOrder = [
        'alphabet',
        'numbers',
        'colors',
        'shapes',
        ...Object.keys(customLessonMetadata)
    ];
    const currentIndex = categoryOrder.indexOf(currentCategory);
    
    if (currentIndex === -1 || currentIndex >= categoryOrder.length - 1) {
        return null; // No more categories
    }
    
    return categoryOrder[currentIndex + 1];
}

function getNextLessonPath(category, lessonIndex) {
    // Check if there are more lessons in the current category
    if (lessonIndex < lessons[category].length - 1) {
        return { category, lessonIndex: lessonIndex + 1 };
    }
    
    // Move to next category's first lesson
    const nextCategory = getNextLessonCategory(category);
    if (nextCategory) {
        return { category: nextCategory, lessonIndex: 0 };
    }
    
    return { category: "alphabet", lessonIndex: 0 };
}

function getAdaptiveLessonPath(category, lessonIndex, accuracy) {
    if (accuracy >= ADAPTIVE_LEARNING_THRESHOLD) {
        return { category, lessonIndex };
    }

    return getNextLessonPath(category, lessonIndex);
}

function calculateQuizAccuracy(score, total) {
    return total > 0 ? (score / total) * 100 : 0;
}

function shouldAdvanceToNextLesson(accuracy) {
    return accuracy < ADAPTIVE_LEARNING_THRESHOLD;
}

function autoProgressToNextLesson(currentCat, currentLessonIdx, accuracy) {
    const nextPath = getAdaptiveLessonPath(currentCat, currentLessonIdx, accuracy);
    
    if (!nextPath) {
        return false; // No more lessons available
    }
    
    currentCategory = nextPath.category;
    currentLesson = nextPath.lessonIndex;
    
    return true;
}

function finishQuiz(){
    if (quizStageTransitioning || quizComplete) return;

    const stageScore = quizStageState ? (quizStageState.stageScore || 0) : quizScore;
    const currentStageIndex = quizStageState ? quizStageState.stageIndex : -1;
    const stageTotal = quizStageState
        ? quizStageState.stageConfig[currentStageIndex].questionCount
        : quizQuestions.length;
    const nextStageIndex = currentStageIndex + 1;
    const canAdvance =
        quizStageState &&
        stageScore >= stageTotal &&
        nextStageIndex < quizStageState.stageConfig.length;

    // Perfect stage score required to unlock Normal or Hard.
    if (canAdvance) {
        quizStageTransitioning = true;

        quizStageState.stageIndex = nextStageIndex;
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

        if (!quizQuestions.length) {
            stopQuizVoiceInteraction();
            quizStageTransitioning = false;
            quizComplete = true;
            quizQuestionEl.textContent = "No questions available for this level.";
            return;
        }

        const totalQuestions = quizQuestions.length;
        questionNumberEl.textContent = selectedLanguage === 'tl'
            ? `Tanong 1 ng ${totalQuestions}`
            : `Question 1 of ${totalQuestions}`;

        const unlockMessage = selectedLanguage === 'tl'
            ? (nextStageIndex === 1
                ? "Perpekto! Susunod: Normal level!"
                : "Perpekto! Susunod: Hard level!")
            : (nextStageIndex === 1
                ? "Perfect! Next up: Normal level!"
                : "Perfect! Next up: Hard level!");
        showNotification(unlockMessage);

        loadQuizQuestion();
        quizStageTransitioning = false;
        return;

    }

    // Incomplete stage or Hard finished: end entire quiz session
    const sessionTotal = quizStageState
        ? quizStageState.stageConfig
            .slice(0, quizStageState.stageIndex + 1)
            .reduce((sum, stage) => sum + stage.questionCount, 0)
        : stageTotal;

    stopQuizVoiceInteraction();
    quizComplete = true;
    quizProgressFillEl.style.width = "100%";
    quizQuestionEl.textContent = selectedLanguage === 'tl' ? "Tapos na ang Pagsusulit!" : "Quiz Complete!";
    questionNumberEl.textContent = selectedLanguage === 'tl'
        ? `Pinal na Iskor: ${quizScore} / ${sessionTotal}`
        : `Final Score: ${quizScore} / ${sessionTotal}`;

    // Calculate accuracy for adaptive learning
    const accuracy = calculateQuizAccuracy(quizScore, sessionTotal);
    const shouldAdvanceToNextLessonAfterQuiz = shouldAdvanceToNextLesson(accuracy);

    let finishMessage;
    const didNotAdvance = stageScore < stageTotal && quizDifficulty !== 'hard';
    
    if (didNotAdvance) {
        finishMessage = selectedLanguage === 'tl'
            ? `Kailangan mong makuha ang lahat ng tama (${stageScore}/${stageTotal}) para makapunta sa susunod na level.`
            : `You need a perfect score (${stageScore}/${stageTotal}) to unlock the next level.`;
    } else if (shouldAdvanceToNextLessonAfterQuiz) {
        // Scores below 80% move the student to the next lesson.
        finishMessage = selectedLanguage === 'tl'
            ? `${Math.round(accuracy)}% accuracy. Pupunta tayo sa susunod na aralin...`
            : `${Math.round(accuracy)}% accuracy. Moving to the next lesson...`;
    } else {
        finishMessage = selectedLanguage === 'tl'
            ? `${Math.round(accuracy)}% accuracy. Mananatili tayo sa araling ito.`
            : `${Math.round(accuracy)}% accuracy. Staying in this lesson.`;
    }

    const noticeDuration = didNotAdvance ? 10000 : 2800;
    showNotification(finishMessage, noticeDuration);
    if (didNotAdvance) {
        speakText(finishMessage);
    } else if (shouldAdvanceToNextLessonAfterQuiz) {
        speakText(selectedLanguage === 'tl' 
            ? `Pupunta tayo sa susunod na aralin.` 
            : `Moving to the next lesson.`);
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
        if (autoProgressToNextLesson(quizCategory, quizLessonIndex, accuracy)) {
            // Successfully progressed to next lesson
            const nextLessonTitle = translateLessonTitle(currentCategory);
            
            const progressMessage = selectedLanguage === 'tl'
                ? `Abot-kamay na ang bagong aralin: ${nextLessonTitle}!`
                : `Now learning: ${nextLessonTitle}!`;
            showNotification(progressMessage, 2000);
            
            loadLesson();
            showScreen(lessonScreen);
        } else {
            // No adaptive progression - return to menu
            showScreen(menuScreen);
        }
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
        attemptId: currentQuizAttemptId,
        category: quizCategory || currentCategory || "quiz",
        levelStopped: quizDifficulty,
        score: quizScore,
        total,
        accuracy,
        starsGained: sessionStarsGained,
        starsTotal: quizStars
    });

    updateCurrentStudentRecord();
}


quizVoiceBtn.onclick = () => {
    const question = quizQuestions[currentQuizIndex];
    const resumeVoiceMode = quizVoiceModeEnabled;
    const session = ++quizVoiceSession;
    stopQuizVoiceRecognition();
    if (window.speechSynthesis) speechSynthesis.cancel();
    if (question?.audio) {
        playUploadedAudio(question.audio).catch(error => {
            console.error("Unable to play quiz audio.", error);
            showNotification("This quiz audio could not be played. Try another audio file.", 4000);
        }).finally(() => {
            if (resumeVoiceMode && session === quizVoiceSession) {
                askNextQuizVoiceChoice(session);
            }
        });
        return;
    }
    speakQuizQuestion()?.then(() => {
        if (resumeVoiceMode && session === quizVoiceSession) {
            askNextQuizVoiceChoice(session);
        }
    });
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
            localStorage.getItem(getCurrentStudentProgressKey("lessonProgress"))
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
            localStorage.getItem(getCurrentStudentProgressKey("lessonProgress"))
        ) || {};

    return Object.keys(progress).length;

}

// -------------------------------
// Optional Welcome Back
// -------------------------------

window.addEventListener("load",()=>{

    resumeStudentSession();

    const total = completedCategories();

    if(total > 0){

        console.log(
            "Completed Categories:",
            total
        );

    }

});



// 6766 defense full force
// 6919 anaytics

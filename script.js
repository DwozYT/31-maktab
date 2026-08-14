// 31-MAKTAB MAIN SCRIPT WITH 3-LANGUAGE DICTIONARY & IMAGE UPLOADER

let currentLang = "uz";

// Translation Dictionary for UZ, EN, RU
const translations = {
  uz: {
    officialPortal: "Rasmiy Portal",
    navAbout: "Maktab Haqida",
    navTeachers: "Rahbariyat & O'qituvchilar",
    navNews: "Yangiliklar",
    navGallery: "Galereya",
    navAchievements: "Yutuqlar",
    navContact: "Bog'lanish",
    adminLogin: "ADMIN LOGIN",
    heroBadge: "Raqamli & Zamonaviy Ta'lim Maskani",
    heroTitle1: "Bilim Va Kelajak",
    heroTitle2: "Birlashtirilgan Maskanda",
    heroDesc: "31-Maktab o'quvchilariga zamonaviy bilimlar, raqamli texnologiyalar va yuqori darajadagi ta'lim berish — bizning eng ustuvor maqsadimizdir.",
    btnMore: "BATAFSIL MA'LUMOT",
    btnContact: "BOG'LANISH",
    feat1: "Zamonaviy Sinflar",
    feat2: "Yuqori Natijalar",
    feat3: "Olimpiada G'oliblari",
    feat4: "Tajribali O'qituvchilar",
    heroFrameTitle: "Maktab Ko'rsatkichlari",
    heroFrameSubtitle: "Jonli Boshqaruv Paneli",
    lblStudents: "O'quvchilar Soni",
    lblTeachers: "O'qituvchilar",
    lblClasses: "Sinflar Soni",
    lblAwards: "Yutuqlar",
    heroQuote: "\"Bizning maktab o'quvchilar va o'qituvchilar uchun eng qulay va ilg'or ta'lim ortamini taqdim etadi.\"",
    secBadgeAbout: "📘 AKADEMIK TARIX VA MAQSAD",
    secTitleAbout: "MAKTAB HAQIDA",
    secBadgeTeachers: "👨‍🏫 MALAKALI JAMOAMIZ",
    secTitleTeachers: "RAHBARIYAT & O'QITUVCHILAR",
    secBadgeNews: "📰 JONLI VOQEALAR",
    secTitleNews: "YANGILIKLAR & E'LONLAR",
    secBadgeGallery: "📸 RASMLAR VA VIDEOLAR",
    secTitleGallery: "FOTO & VIDEO GALEREYA",
    secBadgeAchievements: "🏆 G'OLIBLARIMIZ",
    secTitleAchievements: "MAKTAB YUTUQLARI",
    secBadgeContact: "📍 ALOQA VA MANZIL",
    secTitleContact: "BOG'LANISH",
    lblContactInfoTitle: "Bog'lanish Ma'lumotlari",
    lblAddressTag: "Manzil:",
    lblPhoneTag: "Telefon:",
    lblEmailTag: "E-pochta:",
    lblHoursTag: "Ish Vaqti:",
    lblSendMsgTitle: "Xabar Yuborish",
    lblNameInput: "Ismingiz",
    lblPhoneInput: "Telefon raqamingiz",
    lblMsgInput: "Xabaringiz",
    btnSubmitInquiry: "XABARNI YUBORISH",
    lblFooterRights: "© 2026 Barcha huquqlar saqlangan. 31-Maktab Rasmiy Portali.",
    modalTitleLogin: "ADMIN TIZIMIGA KIRISH",
    modalDescLogin: "Boshqaruv paneliga kirish uchun ma'lumotlarni kiriting",
    lblLoginUsername: "Login (Username)",
    lblLoginPassword: "Parol (Password)",
    btnSubmitLogin: "TIZIMGA KIRISH"
  },
  en: {
    officialPortal: "Official Portal",
    navAbout: "About School",
    navTeachers: "Leadership & Faculty",
    navNews: "News & Events",
    navGallery: "Gallery",
    navAchievements: "Achievements",
    navContact: "Contact Us",
    adminLogin: "ADMIN LOGIN",
    heroBadge: "Digital & Modern Education Center",
    heroTitle1: "Knowledge & Future",
    heroTitle2: "United in One Space",
    heroDesc: "School No. 31 is dedicated to providing students with modern knowledge, digital technology, and high-quality education.",
    btnMore: "READ MORE",
    btnContact: "CONTACT US",
    feat1: "Modern Classrooms",
    feat2: "High Academic Results",
    feat3: "Olympiad Winners",
    feat4: "Experienced Teachers",
    heroFrameTitle: "School Metrics",
    heroFrameSubtitle: "Live Dashboard",
    lblStudents: "Students Count",
    lblTeachers: "Faculty Members",
    lblClasses: "Classrooms Count",
    lblAwards: "Awards & Medals",
    heroQuote: "\"Our school provides the most comfortable and advanced learning environment for students and teachers.\"",
    secBadgeAbout: "📘 ACADEMIC HISTORY & GOALS",
    secTitleAbout: "ABOUT OUR SCHOOL",
    secBadgeTeachers: "👨‍🏫 QUALIFIED TEAM",
    secTitleTeachers: "FACULTY & LEADERSHIP",
    secBadgeNews: "📰 LIVE EVENTS",
    secTitleNews: "NEWS & ANNOUNCEMENTS",
    secBadgeGallery: "📸 PHOTOS & VIDEOS",
    secTitleGallery: "PHOTO & VIDEO GALLERY",
    secBadgeAchievements: "🏆 OUR CHAMPIONS",
    secTitleAchievements: "SCHOOL ACHIEVEMENTS",
    secBadgeContact: "📍 LOCATION & CONTACT",
    secTitleContact: "GET IN TOUCH",
    lblContactInfoTitle: "Contact Information",
    lblAddressTag: "Address:",
    lblPhoneTag: "Phone:",
    lblEmailTag: "Email:",
    lblHoursTag: "Working Hours:",
    lblSendMsgTitle: "Send a Message",
    lblNameInput: "Your Name",
    lblPhoneInput: "Your Phone Number",
    lblMsgInput: "Your Message",
    btnSubmitInquiry: "SEND MESSAGE",
    lblFooterRights: "© 2026 All rights reserved. School No. 31 Official Portal.",
    modalTitleLogin: "ADMINISTRATOR LOGIN",
    modalDescLogin: "Enter credentials to access control panel",
    lblLoginUsername: "Username",
    lblLoginPassword: "Password",
    btnSubmitLogin: "SIGN IN"
  },
  ru: {
    officialPortal: "Официальный Портал",
    navAbout: "О Школе",
    navTeachers: "Руководство и Учителя",
    navNews: "Новости и События",
    navGallery: "Галерея",
    navAchievements: "Достижения",
    navContact: "Контакты",
    adminLogin: "ВХОД ДЛЯ АДМИНА",
    heroBadge: "Цифровой и Современный Центр Обучения",
    heroTitle1: "Знания и Будущее",
    heroTitle2: "В Объединенном Пространстве",
    heroDesc: "Школа №31 стремится предоставить учащимся современные знания, цифровые технологии и высокое качество образования.",
    btnMore: "ПОДРОБНЕЕ",
    btnContact: "СВЯЗАТЬСЯ",
    feat1: "Современные Классы",
    feat2: "Высокие Результаты",
    feat3: "Победители Олимпиад",
    feat4: "Опытные Педагоги",
    heroFrameTitle: "Показатели Школы",
    heroFrameSubtitle: "Живая Панель Управления",
    lblStudents: "Количество Учащихся",
    lblTeachers: "Преподаватели",
    lblClasses: "Количество Классов",
    lblAwards: "Награды и Достижения",
    heroQuote: "\"Наша школа предоставляет самую комфортную и передовую среду обучения для учеников и учителей.\"",
    secBadgeAbout: "📘 АКАДЕМИЧЕСКАЯ ИСТОРИЯ И ЦЕЛИ",
    secTitleAbout: "О НАШЕЙ ШКОЛЕ",
    secBadgeTeachers: "👨‍🏫 КВАЛИФИЦИРОВАННАЯ КОМАНДА",
    secTitleTeachers: "РУКОВОДСТВО И УЧИТЕЛЯ",
    secBadgeNews: "📰 ЖИВЫЕ СОБЫТИЯ",
    secTitleNews: "НОВОСТИ И ОБЪЯВЛЕНИЯ",
    secBadgeGallery: "📸 ФОТО И ВИДЕО",
    secTitleGallery: "ФОТО И ВИДЕО ГАЛЕРЕЯ",
    secBadgeAchievements: "🏆 НАШИ ПОБЕДИТЕЛИ",
    secTitleAchievements: "ДОСТИЖЕНИЯ ШКОЛЫ",
    secBadgeContact: "📍 ЛОКАЦИЯ И СВЯЗЬ",
    secTitleContact: "СВЯЗАТЬСЯ С НАМИ",
    lblContactInfoTitle: "Контактная Информация",
    lblAddressTag: "Адрес:",
    lblPhoneTag: "Телефон:",
    lblEmailTag: "Эл. почта:",
    lblHoursTag: "Время Работы:",
    lblSendMsgTitle: "Отправить Сообщение",
    lblNameInput: "Ваше Имя",
    lblPhoneInput: "Ваш Номер Телефона",
    lblMsgInput: "Ваше Сообщение",
    btnSubmitInquiry: "ОТПРАВИТЬ СООБЩЕНИЕ",
    lblFooterRights: "© 2026 Все права защищены. Официальный Портал Школы №31.",
    modalTitleLogin: "ВХОД В ПАНЕЛЬ АДМИНИСТРАТОРА",
    modalDescLogin: "Введите учетные данные для входа в систему",
    lblLoginUsername: "Логин",
    lblLoginPassword: "Пароль",
    btnSubmitLogin: "ВОЙТИ"
  }
};

// Initial App State for 31-Maktab
let appState = {
  settings: {
    schoolName: "31-Maktab",
    heroBadge: "Raqamli & Zamonaviy Ta'lim Maskani",
    heroTitle1: "Bilim Va Kelajak",
    heroTitle2: "Birlashtirilgan Maskanda",
    heroDesc: "31-Maktab o'quvchilariga zamonaviy bilimlar, raqamli texnologiyalar va yuqori darajadagi ta'lim berish — bizning eng ustuvor maqsadimizdir.",
    statStudents: "1250+",
    statTeachers: "90+",
    statClasses: "42+",
    statAwards: "160+",
    address: "Toshkent viloyati, Parkent tumani, 31-Maktab",
    phone: "+998 (71) 234-31-31",
    email: "info@31-maktab.uz",
    hours: "Dushanba - Shanba: 08:00 - 18:00",
    mapUrl: "https://yandex.ru/map-widget/v1/org/31_maktab/113406840535/?ll=69.634573%2C41.310956&z=17.2"
  },
  teachers: [
    {
      id: "t1",
      name: "Alimova Dilnoza Shavkatovna",
      role: "Maktab Direktori",
      subject: "Matematika",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      bio: "20 yillik tajribaga ega oliy toifali pedagog."
    },
    {
      id: "t2",
      name: "Qodirov Sardor Botirovich",
      role: "O'quv Ishlari Bo'yicha O'rinbosar",
      subject: "Fizika",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      bio: "Ta'lim sifatini oshirish va STEM loyihalari rahbari."
    }
  ],
  news: [
    {
      id: "n1",
      title: "31-Maktabda Yangi IT va Robototexnika Laboratoriyasi Ochildi",
      date: "2026-08-11",
      category: "Tadbir",
      content: "O'quvchilarimiz zamonaviy kompyuter va robototexnika vositalaridan foydalangan holda amaliy mashg'ulotlar o'tkazishmoqda.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
    }
  ],
  gallery: [
    {
      id: "g1",
      title: "Robototexnika Mashg'uloti",
      type: "image",
      url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "g2",
      title: "Maktab Kutubxonasi",
      type: "image",
      url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80"
    }
  ],
  achievements: [
    {
      id: "a1",
      title: "Respublika Fan Olimpiadasi 1-o'rni",
      category: "Matematika",
      year: "2026",
      desc: "11-sinf o'quvchimiz Respublika fan olimpiadasida oltin medalni qo'lga kiritdi."
    }
  ],
  inquiries: [],
  admins: [
    {
      username: "DwozYT",
      password: "12345678aytmiman",
      createdAt: "2026-08-11"
    }
  ]
};

let currentLoggedInAdmin = null;

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initThemeMode();
  initDeviceMode();
  loadData();
  applyLanguage(currentLang);
  checkAuthSession();
});

// Theme Mode Engine (Light / Dark Mode)
let currentThemeMode = localStorage.getItem("theme_31_mode") || "dark";

function initThemeMode() {
  applyThemeMode(currentThemeMode);
}

function toggleThemeMode() {
  currentThemeMode = currentThemeMode === "dark" ? "light" : "dark";
  localStorage.setItem("theme_31_mode", currentThemeMode);
  applyThemeMode(currentThemeMode);
}

function applyThemeMode(mode) {
  const iconEl = document.getElementById("theme-btn-icon");
  if (mode === "light") {
    document.body.classList.add("light-mode");
    if (iconEl) iconEl.innerText = "☀️";
  } else {
    document.body.classList.remove("light-mode");
    if (iconEl) iconEl.innerText = "🌙";
  }
}

// Device View Mode Engine (Telefon & Kompyuter Rejimi)
let currentDeviceMode = localStorage.getItem("device_31_mode") || (window.innerWidth < 768 ? "mobile" : "desktop");

function initDeviceMode() {
  applyDeviceMode(currentDeviceMode);
}

function toggleDeviceMode() {
  currentDeviceMode = currentDeviceMode === "desktop" ? "mobile" : "desktop";
  localStorage.setItem("device_31_mode", currentDeviceMode);
  applyDeviceMode(currentDeviceMode);
}

function applyDeviceMode(mode) {
  const iconEl = document.getElementById("device-btn-icon");
  const textEl = document.getElementById("device-btn-text");
  if (mode === "mobile") {
    document.body.classList.add("device-mobile-mode");
    if (iconEl) iconEl.innerText = "📱";
    if (textEl) textEl.innerText = "Telefon";
  } else {
    document.body.classList.remove("device-mobile-mode");
    if (iconEl) iconEl.innerText = "💻";
    if (textEl) textEl.innerText = "Kompyuter";
  }
}

// Window Resize Auto Detection
window.addEventListener("resize", () => {
  if (!localStorage.getItem("device_31_mode")) {
    currentDeviceMode = window.innerWidth < 768 ? "mobile" : "desktop";
    applyDeviceMode(currentDeviceMode);
  }
});

// Globe Language Switcher Popover Handlers
function toggleLangDropdown(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById("lang-dropdown-menu");
  if (menu) menu.classList.toggle("hidden");
}

function selectLangFromDropdown(lang) {
  setLanguage(lang);
  const menu = document.getElementById("lang-dropdown-menu");
  if (menu) menu.classList.add("hidden");
}

// Close dropdown on click outside
window.addEventListener("click", (e) => {
  const btn = document.getElementById("lang-dropdown-btn");
  const menu = document.getElementById("lang-dropdown-menu");
  if (menu && !menu.classList.contains("hidden")) {
    if (btn && !btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add("hidden");
    }
  }
});

// Language Switcher Engine
function setLanguage(lang) {
  currentLang = lang;
  const codeEl = document.getElementById("current-lang-code");
  if (codeEl) codeEl.innerText = lang.toUpperCase();
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const t = translations[lang] || translations.uz;
  
  // Element text updating helper
  const setTxt = (id, text) => {
    const el = document.getElementById(id);
    if (el && text !== undefined) el.innerText = text;
  };

  setTxt("lbl-official-portal", t.officialPortal);
  setTxt("nav-lbl-about", t.navAbout);
  setTxt("nav-lbl-teachers", t.navTeachers);
  setTxt("nav-lbl-news", t.navNews);
  setTxt("nav-lbl-gallery", t.navGallery);
  setTxt("nav-lbl-achievements", t.navAchievements);
  setTxt("nav-lbl-contact", t.navContact);
  
  setTxt("mob-lbl-about", t.navAbout);
  setTxt("mob-lbl-teachers", t.navTeachers);
  setTxt("mob-lbl-news", t.navNews);
  setTxt("mob-lbl-gallery", t.navGallery);
  setTxt("mob-lbl-achievements", t.navAchievements);
  setTxt("mob-lbl-contact", t.navContact);

  setTxt("btn-admin-login-text", t.adminLogin);

  setTxt("btn-hero-more", t.btnMore);
  setTxt("btn-hero-contact", t.btnContact);

  setTxt("feat-1", t.feat1);
  setTxt("feat-2", t.feat2);
  setTxt("feat-3", t.feat3);
  setTxt("feat-4", t.feat4);

  setTxt("hero-frame-title", t.heroFrameTitle);
  setTxt("hero-frame-subtitle", t.heroFrameSubtitle);

  setTxt("lbl-stat-students", t.lblStudents);
  setTxt("lbl-stat-teachers", t.lblTeachers);
  setTxt("lbl-stat-classes", t.lblClasses);
  setTxt("lbl-stat-awards", t.lblAwards);

  setTxt("hero-quote-text", t.heroQuote);

  setTxt("sec-badge-about", t.secBadgeAbout);
  setTxt("sec-title-about", t.secTitleAbout);

  setTxt("sec-badge-teachers", t.secBadgeTeachers);
  setTxt("sec-title-teachers", t.secTitleTeachers);

  setTxt("sec-badge-news", t.secBadgeNews);
  setTxt("sec-title-news", t.secTitleNews);

  setTxt("sec-badge-gallery", t.secBadgeGallery);
  setTxt("sec-title-gallery", t.secTitleGallery);

  setTxt("sec-badge-achievements", t.secBadgeAchievements);
  setTxt("sec-title-achievements", t.secTitleAchievements);

  setTxt("sec-badge-contact", t.secBadgeContact);
  setTxt("sec-title-contact", t.secTitleContact);

  setTxt("lbl-contact-info-title", t.lblContactInfoTitle);
  setTxt("lbl-address-tag", t.lblAddressTag);
  setTxt("lbl-phone-tag", t.lblPhoneTag);
  setTxt("lbl-email-tag", t.lblEmailTag);
  setTxt("lbl-hours-tag", t.lblHoursTag);

  setTxt("lbl-send-msg-title", t.lblSendMsgTitle);
  setTxt("lbl-name-input", t.lblNameInput);
  setTxt("lbl-phone-input", t.lblPhoneInput);
  setTxt("lbl-msg-input", t.lblMsgInput);
  setTxt("btn-submit-inquiry", t.btnSubmitInquiry);

  setTxt("lbl-footer-rights", t.lblFooterRights);

  setTxt("modal-title-login", t.modalTitleLogin);
  setTxt("modal-desc-login", t.modalDescLogin);
  setTxt("lbl-login-username", t.lblLoginUsername);
  setTxt("lbl-login-password", t.lblLoginPassword);
  setTxt("btn-submit-login", t.btnSubmitLogin);

  renderAllSections();
}

// Data Load & Persistence
async function loadData() {
  const local = localStorage.getItem("maktab_app_db_31");
  if (local) {
    try {
      appState = Object.assign({}, appState, JSON.parse(local));
    } catch (e) {
      console.error(e);
    }
  }

  try {
    const res = await fetch("/api/db");
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data === 'object') {
        appState = Object.assign({}, appState, data);
        saveDataLocally();
      }
    }
  } catch (e) {}

  renderAllSections();
}

async function saveData() {
  saveDataLocally();
  try {
    await fetch("/api/db", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appState)
    });
  } catch (e) {}
}

function saveDataLocally() {
  localStorage.setItem("maktab_app_db_31", JSON.stringify(appState));
}

// Render Public Sections
function renderAllSections() {
  const s = appState.settings || {};
  document.title = `${s.schoolName || "31-Maktab"} | Rasmiy Portal`;
  document.getElementById("nav-school-name").innerText = s.schoolName || "31-MAKTAB";
  document.getElementById("footer-school-name").innerText = s.schoolName || "31-MAKTAB";

  document.getElementById("hero-badge-text").innerText = s.heroBadge || "";
  document.getElementById("hero-title-main").innerText = s.heroTitle1 || "";
  document.getElementById("hero-title-sub").innerText = s.heroTitle2 || "";
  document.getElementById("hero-description").innerText = s.heroDesc || "";

  document.getElementById("stat-students").innerText = s.statStudents || "0";
  document.getElementById("stat-teachers").innerText = s.statTeachers || "0";
  document.getElementById("stat-classes").innerText = s.statClasses || "0";
  document.getElementById("stat-awards").innerText = s.statAwards || "0";

  document.getElementById("contact-address-text").innerText = s.address || "";
  document.getElementById("contact-phone-text").innerText = s.phone || "";
  document.getElementById("contact-email-text").innerText = s.email || "";
  document.getElementById("contact-hours-text").innerText = s.hours || "";
  if (s.mapUrl) {
    document.getElementById("contact-map-iframe").src = s.mapUrl;
  }

  // About Cards
  document.getElementById("about-cards-container").innerHTML = `
    <div class="glass-card p-8 space-y-4">
      <div class="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center text-2xl">🎓</div>
      <h3 class="text-xl font-bold text-white">Oliy Sifatli Ta'lim</h3>
      <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
        Davlat ta'lim standartlariga to'liq mos keladigan ilg'or o'quv dasturlari va innovatsion texnologiyalar.
      </p>
    </div>
    <div class="glass-card p-8 space-y-4">
      <div class="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center text-2xl">💡</div>
      <h3 class="text-xl font-bold text-white">STEM va IT Qamrovi</h3>
      <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
        Kompyuter savodxonligi, robototexnika va xorijiy tillarni chuqurlashtirilgan holda o'rgatish.
      </p>
    </div>
    <div class="glass-card p-8 space-y-4">
      <div class="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center text-2xl">🏆</div>
      <h3 class="text-xl font-bold text-white">Shaxsiy Rivojlanish</h3>
      <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
        Sport, san'at va ilmiy to'garaklar orqali o'quvchilarning iqtidorini har tomonlama yuzaga chiqarish.
      </p>
    </div>
  `;

  // Teachers Grid
  const teachersGrid = document.getElementById("teachers-grid");
  if (appState.teachers.length === 0) {
    teachersGrid.innerHTML = `<div class="col-span-full text-center py-8 text-slate-400 text-sm">Hozircha o'qituvchilar kiritilmagan</div>`;
  } else {
    teachersGrid.innerHTML = appState.teachers.map(t => `
      <div class="glass-card overflow-hidden group">
        <div class="h-60 overflow-hidden relative">
          <img src="${t.photo || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'}" alt="${t.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          <span class="absolute bottom-3 left-3 bg-blue-600/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-blue-400/30">
            ${t.subject || "O'qituvchi"}
          </span>
        </div>
        <div class="p-5 space-y-2">
          <h3 class="text-base font-bold text-white group-hover:text-blue-400 transition-colors">${t.name}</h3>
          <p class="text-xs font-semibold text-blue-400">${t.role || ""}</p>
          <p class="text-xs text-slate-400 line-clamp-2">${t.bio || ""}</p>
        </div>
      </div>
    `).join("");
  }

  // News Grid
  const newsGrid = document.getElementById("news-grid");
  if (appState.news.length === 0) {
    newsGrid.innerHTML = `<div class="col-span-full text-center py-8 text-slate-400 text-sm">Hozircha yangiliklar kiritilmagan</div>`;
  } else {
    newsGrid.innerHTML = appState.news.map(n => `
      <div class="glass-card overflow-hidden flex flex-col group">
        <div class="h-48 overflow-hidden relative">
          <img src="${n.image || 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'}" alt="${n.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <span class="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-blue-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-800">
            📅 ${n.date || ""}
          </span>
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <span class="text-[10px] font-extrabold uppercase tracking-wider text-blue-400">${n.category || "Yangilik"}</span>
            <h3 class="text-base font-bold text-white group-hover:text-blue-400 transition-colors">${n.title}</h3>
            <p class="text-xs text-slate-300 line-clamp-3">${n.content}</p>
          </div>
        </div>
      </div>
    `).join("");
  }

  // Gallery Grid
  const galleryGrid = document.getElementById("gallery-grid");
  if (appState.gallery.length === 0) {
    galleryGrid.innerHTML = `<div class="col-span-full text-center py-8 text-slate-400 text-sm">Hozircha galereya kiritilmagan</div>`;
  } else {
    galleryGrid.innerHTML = appState.gallery.map(g => `
      <div class="glass-card overflow-hidden h-52 relative group cursor-pointer" onclick="openImageLightbox('${g.url}', '${(g.title||'').replace(/'/g, "\\'")}')">
        <img src="${g.url}" alt="${g.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div class="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
          <span class="text-xs font-bold text-white">${g.title}</span>
        </div>
      </div>
    `).join("");
  }

  // Achievements Grid
  const achievementsGrid = document.getElementById("achievements-grid");
  if (appState.achievements.length === 0) {
    achievementsGrid.innerHTML = `<div class="col-span-full text-center py-8 text-slate-400 text-sm">Hozircha yutuqlar kiritilmagan</div>`;
  } else {
    achievementsGrid.innerHTML = appState.achievements.map(a => `
      <div class="glass-card p-6 space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-3xl">🥇</span>
          <span class="text-xs font-bold bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-full border border-blue-500/30">${a.year || "2026"}</span>
        </div>
        <h3 class="text-base font-bold text-white">${a.title}</h3>
        <p class="text-xs text-blue-400 font-semibold">${a.category || ""}</p>
        <p class="text-xs text-slate-300">${a.desc || ""}</p>
      </div>
    `).join("");
  }

  document.getElementById("inquiry-count-badge").innerText = appState.inquiries ? appState.inquiries.length : 0;
}

// Authentication & Password Toggle
function togglePasswordVisibility(id) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

function openLoginModal() {
  if (currentLoggedInAdmin) {
    openAdminPanelModal();
    return;
  }
  document.getElementById("login-username").value = "";
  document.getElementById("login-password").value = "";
  document.getElementById("login-modal").classList.remove("hidden");
  document.getElementById("login-error").classList.add("hidden");
}

function closeLoginModal() {
  document.getElementById("login-modal").classList.add("hidden");
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const u = document.getElementById("login-username").value.trim();
  const p = document.getElementById("login-password").value.trim();

  const found = appState.admins.find(a => a.username === u && a.password === p);
  if (found) {
    currentLoggedInAdmin = found;
    sessionStorage.setItem("logged_admin_31", u);
    closeLoginModal();
    updateAuthNavUI();
    openAdminPanelModal();
  } else {
    document.getElementById("login-error").classList.remove("hidden");
  }
}

function checkAuthSession() {
  const logged = sessionStorage.getItem("logged_admin_31");
  if (logged) {
    const found = appState.admins.find(a => a.username === logged);
    if (found) {
      currentLoggedInAdmin = found;
      updateAuthNavUI();
    }
  }
}

function updateAuthNavUI() {
  const container = document.getElementById("auth-nav-container");
  if (currentLoggedInAdmin) {
    container.innerHTML = `
      <button onclick="openAdminPanelModal()" class="inline-flex items-center space-x-2 bg-blue-600/30 hover:bg-blue-600 border border-blue-500/50 text-white font-bold px-4 py-2 rounded-xl text-xs sm:text-sm neon-glow-blue transition-all">
        <span>⚙️ DASHBOARD (${currentLoggedInAdmin.username})</span>
      </button>
    `;
  } else {
    container.innerHTML = `
      <button onclick="openLoginModal()" class="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm neon-glow-blue transition-all transform hover:scale-105">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/></svg>
        <span>${translations[currentLang].adminLogin}</span>
      </button>
    `;
  }
}

function handleAdminLogout() {
  currentLoggedInAdmin = null;
  sessionStorage.removeItem("logged_admin_31");
  closeAdminPanelModal();
  updateAuthNavUI();
}

// 1920x1080 Admin Panel
function openAdminPanelModal() {
  if (!currentLoggedInAdmin) {
    openLoginModal();
    return;
  }
  document.getElementById("current-admin-name").innerText = currentLoggedInAdmin.username;
  document.getElementById("admin-panel-modal").classList.remove("hidden");
  populateAdminSettingsTab();
  switchAdminTab("settings");
}

function closeAdminPanelModal() {
  document.getElementById("admin-panel-modal").classList.add("hidden");
}

function switchAdminTab(tab) {
  const tabs = ['settings', 'teachers', 'news', 'gallery', 'achievements', 'inquiries', 'admins'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tab-btn-${t}`);
    const content = document.getElementById(`admin-tab-${t}`);
    if (t === tab) {
      btn.className = "px-5 py-3.5 border-b-2 border-blue-500 text-blue-400 whitespace-nowrap font-bold";
      content.classList.remove("hidden");
    } else {
      btn.className = "px-5 py-3.5 border-b-2 border-transparent text-slate-400 hover:text-white whitespace-nowrap font-bold";
      content.classList.add("hidden");
    }
  });

  if (tab === 'teachers') renderAdminTeachersTab();
  if (tab === 'news') renderAdminNewsTab();
  if (tab === 'gallery') renderAdminGalleryTab();
  if (tab === 'achievements') renderAdminAchievementsTab();
  if (tab === 'inquiries') renderAdminInquiriesTab();
  if (tab === 'admins') renderAdminUsersTab();
}

// Settings Tab
function populateAdminSettingsTab() {
  const s = appState.settings || {};
  document.getElementById("admin-input-school-name").value = s.schoolName || "";
  document.getElementById("admin-input-hero-badge").value = s.heroBadge || "";
  document.getElementById("admin-input-hero-title1").value = s.heroTitle1 || "";
  document.getElementById("admin-input-hero-title2").value = s.heroTitle2 || "";
  document.getElementById("admin-input-hero-desc").value = s.heroDesc || "";
  document.getElementById("admin-input-stat-students").value = s.statStudents || "";
  document.getElementById("admin-input-stat-teachers").value = s.statTeachers || "";
  document.getElementById("admin-input-stat-classes").value = s.statClasses || "";
  document.getElementById("admin-input-stat-awards").value = s.statAwards || "";
  document.getElementById("admin-input-address").value = s.address || "";
  document.getElementById("admin-input-phone").value = s.phone || "";
  document.getElementById("admin-input-email").value = s.email || "";
  document.getElementById("admin-input-hours").value = s.hours || "";
  document.getElementById("admin-input-map-url").value = s.mapUrl || "";
}

function saveSiteSettings() {
  appState.settings = {
    schoolName: document.getElementById("admin-input-school-name").value.trim(),
    heroBadge: document.getElementById("admin-input-hero-badge").value.trim(),
    heroTitle1: document.getElementById("admin-input-hero-title1").value.trim(),
    heroTitle2: document.getElementById("admin-input-hero-title2").value.trim(),
    heroDesc: document.getElementById("admin-input-hero-desc").value.trim(),
    statStudents: document.getElementById("admin-input-stat-students").value.trim(),
    statTeachers: document.getElementById("admin-input-stat-teachers").value.trim(),
    statClasses: document.getElementById("admin-input-stat-classes").value.trim(),
    statAwards: document.getElementById("admin-input-stat-awards").value.trim(),
    address: document.getElementById("admin-input-address").value.trim(),
    phone: document.getElementById("admin-input-phone").value.trim(),
    email: document.getElementById("admin-input-email").value.trim(),
    hours: document.getElementById("admin-input-hours").value.trim(),
    mapUrl: document.getElementById("admin-input-map-url").value.trim()
  };
  saveData();
  renderAllSections();
  alert("Asosiy sozlamalar muvaffaqiyatli saqlandi!");
}

// FULL EDIT & TAHRIRLASH ENGINE WITH IMAGE UPLOADER

// Helper to create visual image upload widget
function createImageUploadWidgetHTML(existingImgUrl = "") {
  return `
    <div>
      <label class="block text-xs font-semibold text-slate-300 mb-1">Rasm Yuklash (Fayl yoki URL)</label>
      <div class="image-dropzone" id="drag-dropzone" onclick="document.getElementById('file-upload-input').click()">
        <input type="file" id="file-upload-input" accept="image/*" class="hidden" onchange="handleFileSelect(event)" />
        <span class="text-2xl block mb-1">🖼️</span>
        <span class="text-xs font-bold text-blue-400 block">Kompyuterdan rasm tanlang yoki sudrab tashlang</span>
        <span class="text-[10px] text-slate-400 block">PNG, JPG, WEBP formats</span>
      </div>
      <div class="mt-2">
        <label class="block text-[10px] font-semibold text-slate-400 mb-1">Yoki rasm havolasini (URL) kiriting:</label>
        <input type="text" id="crud-image-url-input" class="input-dark" value="${existingImgUrl}" placeholder="https://..." oninput="updateImagePreview(this.value)" />
      </div>
      <img id="crud-image-preview" src="${existingImgUrl || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'}" class="image-preview-thumb cursor-pointer hover:opacity-90 transition-opacity rounded-xl border border-blue-500/40 mt-2" alt="Preview" onclick="openImageLightbox(this.src, 'Rasm Ko\'rinishi')" title="To'liq o'lchamda ko'rish uchun bosing" />
    </div>
  `;
}

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      document.getElementById("crud-image-url-input").value = dataUrl;
      updateImagePreview(dataUrl);
    };
    reader.readAsDataURL(file);
  }
}

function updateImagePreview(url) {
  const preview = document.getElementById("crud-image-preview");
  if (preview) {
    preview.src = url || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80';
  }
}

// Teachers Tab CRUD (Add & Edit)
function renderAdminTeachersTab() {
  const container = document.getElementById("admin-teachers-list");
  if (appState.teachers.length === 0) {
    container.innerHTML = `<p class="text-slate-400 text-xs col-span-full">O'qituvchilar yo'q.</p>`;
    return;
  }
  container.innerHTML = appState.teachers.map(t => `
    <div class="bg-slate-950/70 backdrop-blur-md p-4 rounded-xl border border-slate-800/80 space-y-3 flex flex-col justify-between shadow-lg hover:border-blue-500/50 transition-all">
      <div class="space-y-2">
        <div class="h-64 w-full overflow-hidden rounded-xl border border-slate-800 relative bg-slate-900 group cursor-pointer" onclick="openImageLightbox('${t.photo}', '${(t.name||'').replace(/'/g, "\\'")}')" title="To'liq rasm ko'rish uchun bosing">
          <img src="${t.photo}" class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
          <button type="button" onclick="event.stopPropagation(); openImageLightbox('${t.photo}', '${(t.name||'').replace(/'/g, "\\'")}')" class="absolute top-2 right-2 bg-blue-600/90 hover:bg-blue-500 backdrop-blur-md text-[10px] text-white font-extrabold px-2.5 py-1 rounded-lg border border-blue-400/40 shadow-lg">
            🔍 To'liq rasm
          </button>
        </div>
        <h5 class="font-bold text-white text-sm pt-1">${t.name}</h5>
        <p class="text-xs text-blue-400 font-semibold">${t.role} (${t.subject})</p>
      </div>
      <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
        <button onclick="openEditTeacherModal('${t.id}')" class="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-xl text-xs font-black text-center shadow-md neon-glow-blue transition-all">
          ✏️ TAHRIRLASH
        </button>
        <button onclick="deleteTeacher('${t.id}')" class="bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded-xl text-xs font-black text-center shadow-md transition-all">
          🗑️ O'CHIRISH
        </button>
      </div>
    </div>
  `).join("");
}

function openAddTeacherModal() {
  openCrudModal("Yangi O'qituvchi Qo'shish", `
    <div>
      <label class="block text-xs text-slate-300 mb-1">F.I.SH (Ism Sharif)</label>
      <input type="text" id="crud-teacher-name" required class="input-dark" placeholder="Masalan: Alimova Dilnoza" />
    </div>
    <div>
      <label class="block text-xs text-slate-300 mb-1">Lavozimi (Role)</label>
      <input type="text" id="crud-teacher-role" class="input-dark" placeholder="Masalan: Maktab Direktori" />
    </div>
    <div>
      <label class="block text-xs text-slate-300 mb-1">Fani (Subject)</label>
      <input type="text" id="crud-teacher-subject" class="input-dark" placeholder="Masalan: Matematika" />
    </div>
    ${createImageUploadWidgetHTML()}
  `, () => {
    const name = document.getElementById("crud-teacher-name").value.trim();
    if (!name) return;
    appState.teachers.push({
      id: "t_" + Date.now(),
      name: name,
      role: document.getElementById("crud-teacher-role").value.trim(),
      subject: document.getElementById("crud-teacher-subject").value.trim(),
      photo: document.getElementById("crud-image-url-input").value.trim() || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      bio: ""
    });
    saveData();
    renderAllSections();
    renderAdminTeachersTab();
    closeCrudModal();
  });
}

function openEditTeacherModal(id) {
  const t = appState.teachers.find(item => item.id === id);
  if (!t) return;
  openCrudModal("O'qituvchini Tahrirlash", `
    <div>
      <label class="block text-xs text-slate-300 mb-1">F.I.SH (Ism Sharif)</label>
      <input type="text" id="crud-teacher-name" value="${t.name}" required class="input-dark" />
    </div>
    <div>
      <label class="block text-xs text-slate-300 mb-1">Lavozimi (Role)</label>
      <input type="text" id="crud-teacher-role" value="${t.role || ''}" class="input-dark" />
    </div>
    <div>
      <label class="block text-xs text-slate-300 mb-1">Fani (Subject)</label>
      <input type="text" id="crud-teacher-subject" value="${t.subject || ''}" class="input-dark" />
    </div>
    ${createImageUploadWidgetHTML(t.photo)}
  `, () => {
    t.name = document.getElementById("crud-teacher-name").value.trim();
    t.role = document.getElementById("crud-teacher-role").value.trim();
    t.subject = document.getElementById("crud-teacher-subject").value.trim();
    t.photo = document.getElementById("crud-image-url-input").value.trim();
    saveData();
    renderAllSections();
    renderAdminTeachersTab();
    closeCrudModal();
  });
}

function deleteTeacher(id) {
  if (confirm("Ushbu o'qituvchini o'chirmoqchimisiz?")) {
    appState.teachers = appState.teachers.filter(t => t.id !== id);
    saveData();
    renderAllSections();
    renderAdminTeachersTab();
  }
}

// News Tab CRUD (Add & Edit)
function renderAdminNewsTab() {
  const container = document.getElementById("admin-news-list");
  if (appState.news.length === 0) {
    container.innerHTML = `<p class="text-slate-400 text-xs col-span-full">Yangiliklar yo'q.</p>`;
    return;
  }
  container.innerHTML = appState.news.map(n => `
    <div class="bg-slate-950/70 backdrop-blur-md p-4 rounded-xl border border-slate-800/80 space-y-3 flex flex-col justify-between shadow-lg hover:border-blue-500/50 transition-all">
      <div class="space-y-2">
        <div class="h-48 w-full overflow-hidden rounded-xl border border-slate-800 relative bg-slate-900 group cursor-pointer" onclick="openImageLightbox('${n.image}', '${(n.title||'').replace(/'/g, "\\'")}')" title="To'liq rasm ko'rish uchun bosing">
          <img src="${n.image}" class="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300" />
          <button type="button" onclick="event.stopPropagation(); openImageLightbox('${n.image}', '${(n.title||'').replace(/'/g, "\\'")}')" class="absolute top-2 right-2 bg-blue-600/90 hover:bg-blue-500 backdrop-blur-md text-[10px] text-white font-extrabold px-2.5 py-1 rounded-lg border border-blue-400/40 shadow-lg">
            🔍 To'liq rasm
          </button>
        </div>
        <span class="text-[10px] text-blue-400 font-bold uppercase block pt-1">${n.date} | ${n.category}</span>
        <h5 class="font-bold text-white text-sm line-clamp-2">${n.title}</h5>
      </div>
      <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
        <button onclick="openEditNewsModal('${n.id}')" class="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-xl text-xs font-black text-center shadow-md neon-glow-blue transition-all">
          ✏️ TAHRIRLASH
        </button>
        <button onclick="deleteNews('${n.id}')" class="bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded-xl text-xs font-black text-center shadow-md transition-all">
          🗑️ O'CHIRISH
        </button>
      </div>
    </div>
  `).join("");
}

function openAddNewsModal() {
  openCrudModal("Yangi Yangilik Qo'shish", `
    <div>
      <label class="block text-xs text-slate-300 mb-1">Sarlavha (Title)</label>
      <input type="text" id="crud-news-title" required class="input-dark" />
    </div>
    <div>
      <label class="block text-xs text-slate-300 mb-1">Kategoriya</label>
      <input type="text" id="crud-news-cat" class="input-dark" placeholder="E'lon / Tadbir" />
    </div>
    <div>
      <label class="block text-xs text-slate-300 mb-1">Sana (YYYY-MM-DD)</label>
      <input type="date" id="crud-news-date" class="input-dark" value="${new Date().toISOString().split('T')[0]}" />
    </div>
    <div>
      <label class="block text-xs text-slate-300 mb-1">Matn (Content)</label>
      <textarea id="crud-news-content" rows="3" class="input-dark"></textarea>
    </div>
    ${createImageUploadWidgetHTML()}
  `, () => {
    const title = document.getElementById("crud-news-title").value.trim();
    if (!title) return;
    appState.news.unshift({
      id: "n_" + Date.now(),
      title: title,
      category: document.getElementById("crud-news-cat").value.trim() || "Yangilik",
      date: document.getElementById("crud-news-date").value || new Date().toISOString().split('T')[0],
      content: document.getElementById("crud-news-content").value.trim(),
      image: document.getElementById("crud-image-url-input").value.trim() || 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
    });
    saveData();
    renderAllSections();
    renderAdminNewsTab();
    closeCrudModal();
  });
}

function openEditNewsModal(id) {
  const n = appState.news.find(item => item.id === id);
  if (!n) return;
  openCrudModal("Yangilikni Tahrirlash", `
    <div>
      <label class="block text-xs text-slate-300 mb-1">Sarlavha (Title)</label>
      <input type="text" id="crud-news-title" value="${n.title}" required class="input-dark" />
    </div>
    <div>
      <label class="block text-xs text-slate-300 mb-1">Kategoriya</label>
      <input type="text" id="crud-news-cat" value="${n.category || ''}" class="input-dark" />
    </div>
    <div>
      <label class="block text-xs text-slate-300 mb-1">Sana</label>
      <input type="date" id="crud-news-date" value="${n.date}" class="input-dark" />
    </div>
    <div>
      <label class="block text-xs text-slate-300 mb-1">Matn (Content)</label>
      <textarea id="crud-news-content" rows="3" class="input-dark">${n.content || ''}</textarea>
    </div>
    ${createImageUploadWidgetHTML(n.image)}
  `, () => {
    n.title = document.getElementById("crud-news-title").value.trim();
    n.category = document.getElementById("crud-news-cat").value.trim();
    n.date = document.getElementById("crud-news-date").value;
    n.content = document.getElementById("crud-news-content").value.trim();
    n.image = document.getElementById("crud-image-url-input").value.trim();
    saveData();
    renderAllSections();
    renderAdminNewsTab();
    closeCrudModal();
  });
}

function deleteNews(id) {
  if (confirm("Ushbu yangilikni o'chirmoqchimisiz?")) {
    appState.news = appState.news.filter(n => n.id !== id);
    saveData();
    renderAllSections();
    renderAdminNewsTab();
  }
}

// Gallery Tab CRUD (Add & Edit)
function renderAdminGalleryTab() {
  const container = document.getElementById("admin-gallery-list");
  if (appState.gallery.length === 0) {
    container.innerHTML = `<p class="text-slate-400 text-xs col-span-full">Galereya bo'sh.</p>`;
    return;
  }
  container.innerHTML = appState.gallery.map(g => `
    <div class="bg-slate-950/70 backdrop-blur-md p-3 rounded-xl border border-slate-800/80 space-y-2 flex flex-col justify-between shadow-lg hover:border-blue-500/50 transition-all">
      <div class="h-44 w-full overflow-hidden rounded-xl border border-slate-800 relative bg-slate-900 group cursor-pointer" onclick="openImageLightbox('${g.url}', '${(g.title||'').replace(/'/g, "\\'")}')" title="To'liq rasm ko'rish uchun bosing">
        <img src="${g.url}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
        <button type="button" onclick="event.stopPropagation(); openImageLightbox('${g.url}', '${(g.title||'').replace(/'/g, "\\'")}')" class="absolute top-2 right-2 bg-blue-600/90 hover:bg-blue-500 backdrop-blur-md text-[10px] text-white font-extrabold px-2.5 py-1 rounded-lg border border-blue-400/40 shadow-lg">
          🔍 To'liq rasm
        </button>
      </div>
      <p class="text-xs text-white truncate font-semibold pt-1">${g.title}</p>
      <div class="grid grid-cols-2 gap-1 pt-1 border-t border-slate-800/80">
        <button onclick="openEditGalleryModal('${g.id}')" class="bg-blue-600 hover:bg-blue-500 text-white px-2 py-1.5 rounded-lg text-[10px] font-black text-center shadow-md transition-all">
          ✏️ TAHRIRLASH
        </button>
        <button onclick="deleteGalleryItem('${g.id}')" class="bg-red-600 hover:bg-red-500 text-white px-2 py-1.5 rounded-lg text-[10px] font-black text-center shadow-md transition-all">
          🗑️ O'CHIRISH
        </button>
      </div>
    </div>
  `).join("");
}

function openAddGalleryModal() {
  openCrudModal("Yangi Foto Qo'shish", `
    <div>
      <label class="block text-xs text-slate-300 mb-1">Nomi / Tavsifi</label>
      <input type="text" id="crud-gal-title" required class="input-dark" placeholder="Masalan: Maktab bayrami" />
    </div>
    ${createImageUploadWidgetHTML()}
  `, () => {
    const title = document.getElementById("crud-gal-title").value.trim();
    const url = document.getElementById("crud-image-url-input").value.trim();
    if (!title || !url) return;
    appState.gallery.unshift({
      id: "g_" + Date.now(),
      title: title,
      type: "image",
      url: url
    });
    saveData();
    renderAllSections();
    renderAdminGalleryTab();
    closeCrudModal();
  });
}

function openEditGalleryModal(id) {
  const g = appState.gallery.find(item => item.id === id);
  if (!g) return;
  openCrudModal("Galereya Elementini Tahrirlash", `
    <div>
      <label class="block text-xs text-slate-300 mb-1">Nomi / Tavsifi</label>
      <input type="text" id="crud-gal-title" value="${g.title}" required class="input-dark" />
    </div>
    ${createImageUploadWidgetHTML(g.url)}
  `, () => {
    g.title = document.getElementById("crud-gal-title").value.trim();
    g.url = document.getElementById("crud-image-url-input").value.trim();
    saveData();
    renderAllSections();
    renderAdminGalleryTab();
    closeCrudModal();
  });
}

function deleteGalleryItem(id) {
  if (confirm("Galereyadan o'chirmoqchimisiz?")) {
    appState.gallery = appState.gallery.filter(g => g.id !== id);
    saveData();
    renderAllSections();
    renderAdminGalleryTab();
  }
}

// Achievements Tab CRUD
function renderAdminAchievementsTab() {
  const container = document.getElementById("admin-achievements-list");
  if (appState.achievements.length === 0) {
    container.innerHTML = `<p class="text-slate-400 text-xs col-span-full">Yutuqlar yo'q.</p>`;
    return;
  }
  container.innerHTML = appState.achievements.map(a => `
    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between">
      <div>
        <span class="text-[10px] text-blue-400 font-bold">${a.year} | ${a.category}</span>
        <h5 class="font-bold text-white text-sm">${a.title}</h5>
        <p class="text-xs text-slate-300 line-clamp-2">${a.desc || ''}</p>
      </div>
      <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-900">
        <button onclick="openEditAchievementModal('${a.id}')" class="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-xl text-xs font-black text-center shadow-md neon-glow-blue">
          ✏️ TAHRIRLASH
        </button>
        <button onclick="deleteAchievement('${a.id}')" class="bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded-xl text-xs font-black text-center shadow-md">
          🗑️ O'CHIRISH
        </button>
      </div>
    </div>
  `).join("");
}

function openAddAchievementModal() {
  openCrudModal("Yangi Yutuq Qo'shish", `
    <div>
      <label class="block text-xs text-slate-300 mb-1">Yutuq Nomi</label>
      <input type="text" id="crud-ach-title" required class="input-dark" placeholder="Masalan: Respublika 1-o'rni" />
    </div>
    <div>
      <label class="block text-xs text-slate-300 mb-1">Fan / Yo'nalish</label>
      <input type="text" id="crud-ach-cat" class="input-dark" placeholder="Matematika / Fizika" />
    </div>
    <div>
      <label class="block text-xs text-slate-300 mb-1">Yil</label>
      <input type="text" id="crud-ach-year" class="input-dark" value="2026" />
    </div>
    <div>
      <label class="block text-xs text-slate-300 mb-1">Batafsil Tavsif</label>
      <textarea id="crud-ach-desc" rows="2" class="input-dark"></textarea>
    </div>
  `, () => {
    const title = document.getElementById("crud-ach-title").value.trim();
    if (!title) return;
    appState.achievements.unshift({
      id: "a_" + Date.now(),
      title: title,
      category: document.getElementById("crud-ach-cat").value.trim(),
      year: document.getElementById("crud-ach-year").value.trim() || "2026",
      desc: document.getElementById("crud-ach-desc").value.trim()
    });
    saveData();
    renderAllSections();
    renderAdminAchievementsTab();
    closeCrudModal();
  });
}

function openEditAchievementModal(id) {
  const a = appState.achievements.find(item => item.id === id);
  if (!a) return;
  openCrudModal("Yutuqni Tahrirlash", `
    <div>
      <label class="block text-xs text-slate-300 mb-1">Yutuq Nomi</label>
      <input type="text" id="crud-ach-title" value="${a.title}" required class="input-dark" />
    </div>
    <div>
      <label class="block text-xs text-slate-300 mb-1">Fan / Yo'nalish</label>
      <input type="text" id="crud-ach-cat" value="${a.category || ''}" class="input-dark" />
    </div>
    <div>
      <label class="block text-xs text-slate-300 mb-1">Yil</label>
      <input type="text" id="crud-ach-year" value="${a.year}" class="input-dark" />
    </div>
    <div>
      <label class="block text-xs text-slate-300 mb-1">Batafsil Tavsif</label>
      <textarea id="crud-ach-desc" rows="2" class="input-dark">${a.desc || ''}</textarea>
    </div>
  `, () => {
    a.title = document.getElementById("crud-ach-title").value.trim();
    a.category = document.getElementById("crud-ach-cat").value.trim();
    a.year = document.getElementById("crud-ach-year").value.trim();
    a.desc = document.getElementById("crud-ach-desc").value.trim();
    saveData();
    renderAllSections();
    renderAdminAchievementsTab();
    closeCrudModal();
  });
}

function deleteAchievement(id) {
  if (confirm("Ushbu yutuqni o'chirmoqchimisiz?")) {
    appState.achievements = appState.achievements.filter(a => a.id !== id);
    saveData();
    renderAllSections();
    renderAdminAchievementsTab();
  }
}

// Inquiries Tab
function renderAdminInquiriesTab() {
  const container = document.getElementById("admin-inquiries-list");
  if (!appState.inquiries || appState.inquiries.length === 0) {
    container.innerHTML = `<p class="text-slate-400 text-xs">Kelgan xabarlar mavjud emas.</p>`;
    return;
  }
  container.innerHTML = appState.inquiries.map((inq, idx) => `
    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
      <div class="flex items-center justify-between">
        <strong class="text-white text-sm">${inq.name} (${inq.phone})</strong>
        <span class="text-[10px] text-slate-400">${inq.date || ""}</span>
      </div>
      <p class="text-xs text-slate-300">${inq.message}</p>
      <button onclick="deleteInquiry(${idx})" class="text-[10px] text-red-400 hover:underline font-semibold">Xabarni o'chirish</button>
    </div>
  `).join("");
}

function deleteInquiry(index) {
  appState.inquiries.splice(index, 1);
  saveData();
  renderAllSections();
  renderAdminInquiriesTab();
}

function submitInquiryForm(e) {
  e.preventDefault();
  const name = document.getElementById("inquiry-name").value.trim();
  const phone = document.getElementById("inquiry-phone").value.trim();
  const msg = document.getElementById("inquiry-message").value.trim();

  if (!appState.inquiries) appState.inquiries = [];
  appState.inquiries.unshift({
    name: name,
    phone: phone,
    message: msg,
    date: new Date().toLocaleString()
  });

  saveData();
  renderAllSections();
  alert("Rahmat! Xabaringiz maktab ma'muriyatiga muvaffaqiyatli yuborildi.");
  e.target.reset();
}

// Admin Users Management
function renderAdminUsersTab() {
  const container = document.getElementById("admin-users-list");
  container.innerHTML = appState.admins.map(a => `
    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 flex flex-col justify-between">
      <div>
        <span class="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-bold">ADMIN ACCOUNT</span>
        <h5 class="font-extrabold text-white text-base mt-1">👤 ${a.username}</h5>
        <p class="text-xs text-slate-400">Parol: <code class="bg-slate-900 px-1.5 py-0.5 rounded text-blue-300 font-mono">${a.password}</code></p>
      </div>
      ${a.username !== "DwozYT" ? `
        <button onclick="deleteAdminAccount('${a.username}')" class="bg-red-600/30 hover:bg-red-600 text-red-300 hover:text-white px-3 py-1 rounded text-xs font-bold w-full mt-2">
          ADMINNI O'CHIRISH
        </button>
      ` : `<span class="text-[10px] text-slate-500 italic block mt-2 text-center">Bosh Admin (O'chirib bo'lmaydi)</span>`}
    </div>
  `).join("");
}

function openAddAdminUserModal() {
  openCrudModal("Yangi Admin Qo'shish", `
    <div>
      <label class="block text-xs text-slate-300 mb-1">Yangi Admin Logini (Username)</label>
      <input type="text" id="crud-admin-username" required class="input-dark" placeholder="admin2" />
    </div>
    <div>
      <label class="block text-xs text-slate-300 mb-1">Yangi Admin Paroli (Password)</label>
      <input type="password" id="crud-admin-password" required class="input-dark" placeholder="••••••••" />
    </div>
  `, () => {
    const u = document.getElementById("crud-admin-username").value.trim();
    const p = document.getElementById("crud-admin-password").value.trim();
    if (!u || !p) return;

    if (appState.admins.some(a => a.username === u)) {
      alert("Ushbu loginli admin allaqachon mavjud!");
      return;
    }

    appState.admins.push({
      username: u,
      password: p,
      createdAt: new Date().toISOString().split('T')[0]
    });

    saveData();
    renderAdminUsersTab();
    closeCrudModal();
    alert(`Yangi admin (${u}) muvaffaqiyatli yaratildi!`);
  });
}

function deleteAdminAccount(username) {
  if (confirm(`Rostdan ham '${username}' adminini o'chirmoqchimisiz?`)) {
    appState.admins = appState.admins.filter(a => a.username !== username);
    saveData();
    renderAdminUsersTab();
  }
}

// Generic CRUD Modal Engine
let currentCrudSubmitCallback = null;

function openCrudModal(title, fieldsHTML, onSubmit) {
  document.getElementById("crud-modal-title").innerText = title;
  document.getElementById("crud-modal-body").innerHTML = fieldsHTML;
  document.getElementById("crud-modal").classList.remove("hidden");
  currentCrudSubmitCallback = onSubmit;

  // Setup drag and drop events if dropzone exists
  const dropzone = document.getElementById("drag-dropzone");
  if (dropzone) {
    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.classList.add("dragover");
    });
    dropzone.addEventListener("dragleave", (e) => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
    });
    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
      const file = e.dataTransfer.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          document.getElementById("crud-image-url-input").value = dataUrl;
          updateImagePreview(dataUrl);
        };
        reader.readAsDataURL(file);
      }
    });
  }

  document.getElementById("crud-modal-submit").onclick = () => {
    if (currentCrudSubmitCallback) currentCrudSubmitCallback();
  };
}

function closeCrudModal() {
  document.getElementById("crud-modal").classList.add("hidden");
}

function toggleMobileMenu() {
  document.getElementById("mobile-menu").classList.toggle("hidden");
}

// Lightbox Full Image Viewer
function openImageLightbox(src, title = "") {
  if (!src) return;
  document.getElementById("lightbox-img").src = src;
  const tEl = document.getElementById("lightbox-title");
  if (tEl) {
    tEl.innerText = title || "";
    if (title) tEl.classList.remove("hidden");
    else tEl.classList.add("hidden");
  }
  const modal = document.getElementById("image-lightbox-modal");
  if (modal) modal.classList.remove("hidden");
}

function closeImageLightbox() {
  const modal = document.getElementById("image-lightbox-modal");
  if (modal) modal.classList.add("hidden");
}

// Global Keyboard Shortcut: ESC to close any modal / lightbox
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeImageLightbox();
    closeCrudModal();
  }
});

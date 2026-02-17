// #меню
const hamburger = document.querySelector('.hamburger');
const mainHeader = document.querySelector('.main-header');

if (hamburger && mainHeader) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mainHeader.classList.toggle('nav-open');
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !expanded);
    });

    document.addEventListener('click', (e) => {
        if (!mainHeader.contains(e.target) && mainHeader.classList.contains('nav-open')) {
            hamburger.classList.remove('active');
            mainHeader.classList.remove('nav-open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
}

// #скрол
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        if (hamburger && mainHeader) {
            hamburger.classList.remove('active');
            mainHeader.classList.remove('nav-open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

// #хедер
let lastScroll = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.background = 'rgba(34, 34, 34, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.background = 'rgba(34, 34, 34, 0.95)';
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// #анімація
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);




// #карта
if (document.getElementById('leafletMap')) {
    const isMobile = window.innerWidth <= 768;
    const map = L.map('leafletMap', {
        center: [48.9, 31.2],
        zoom: isMobile ? 5 : 6,
        zoomControl: true,
        scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    const cities = [
        { name: 'Київ', lat: 50.4501, lng: 30.5234, color: '#fdd835' },
        { name: 'Харків', lat: 49.9935, lng: 36.2304, color: '#e53935' },
        { name: 'Маріуполь', lat: 47.0958, lng: 37.5439, color: '#e53935' },
        { name: 'Одеса', lat: 46.4825, lng: 30.7233, color: '#e53935' },
        { name: 'Львів', lat: 49.8397, lng: 24.0297, color: '#e53935' },
        { name: 'Дніпро', lat: 48.4647, lng: 35.0462, color: '#e53935' },
        { name: 'Запоріжжя', lat: 47.8388, lng: 35.1396, color: '#e53935' },
        { name: 'Херсон', lat: 46.6354, lng: 32.6169, color: '#e53935' },
        { name: 'Крути', lat: 50.8472, lng: 32.0833, color: '#e53935' }
    ];

    cities.forEach(city => {
        const icon = L.divIcon({
            className: 'leaflet-city-marker',
            html: `<div style="
                width:${city.color === '#fdd835' ? 18 : 14}px;
                height:${city.color === '#fdd835' ? 18 : 14}px;
                background:${city.color};
                border-radius:50%;
                border:2px solid #fff;
                box-shadow:0 0 12px ${city.color}88;
                cursor:pointer;
            "></div>`,
            iconSize: [city.color === '#fdd835' ? 22 : 18, city.color === '#fdd835' ? 22 : 18],
            iconAnchor: [city.color === '#fdd835' ? 11 : 9, city.color === '#fdd835' ? 11 : 9]
        });

        const marker = L.marker([city.lat, city.lng], { icon }).addTo(map);
        marker.bindTooltip(city.name, {
            permanent: false,
            direction: 'top',
            className: 'leaflet-city-tooltip',
            offset: [0, -12]
        });

        marker.on('click', () => {
            const data = mapEventData[city.name] || { title: city.name, body: '<p>Важливе місто в історії боротьби за незалежність України.</p>' };
            openMapModal(data.title, data.body);
        });
    });
}

// #лічильник
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
};

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.animated) {
            const text = entry.target.textContent;
            const number = parseInt(text.match(/\d+/));
            if (number && number > 1) {
                entry.target.animated = true;
                let current = 0;
                const increment = number / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = text.replace(/\d+/, Math.floor(current));
                    }
                }, 30);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number, .fact-number').forEach(stat => {
    statObserver.observe(stat);
});

// #лайтбокс
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function () {
        const img = this.querySelector('img');
        const caption = this.querySelector('.gallery-caption');


        const lightbox = document.createElement('div');
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.background = 'rgba(0, 0, 0, 0.95)';
        lightbox.style.zIndex = '10000';
        lightbox.style.display = 'flex';
        lightbox.style.flexDirection = 'column';
        lightbox.style.justifyContent = 'center';
        lightbox.style.alignItems = 'center';
        lightbox.style.padding = '40px';
        lightbox.style.cursor = 'pointer';

        const lightboxImg = document.createElement('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxImg.style.maxWidth = '90%';
        lightboxImg.style.maxHeight = '80vh';
        lightboxImg.style.borderRadius = '12px';
        lightboxImg.style.boxShadow = '0 20px 60px rgba(201, 237, 161, 0.3)';

        const lightboxCaption = document.createElement('div');
        lightboxCaption.textContent = caption ? caption.textContent : img.alt;
        lightboxCaption.style.color = '#c9eda1';
        lightboxCaption.style.fontSize = '20px';
        lightboxCaption.style.marginTop = '30px';
        lightboxCaption.style.textAlign = 'center';
        lightboxCaption.style.fontWeight = '600';

        const closeBtn = document.createElement('div');
        closeBtn.textContent = '✕';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '30px';
        closeBtn.style.right = '30px';
        closeBtn.style.fontSize = '40px';
        closeBtn.style.color = '#c9eda1';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.fontWeight = '300';

        lightbox.appendChild(closeBtn);
        lightbox.appendChild(lightboxImg);
        lightbox.appendChild(lightboxCaption);

        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });

        lightboxImg.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
});

// #картки
const quoteObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.quote-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateX(-50px)';
    card.style.transition = 'all 0.6s ease';
    quoteObserver.observe(card);
});

// #відео
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.video-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.9)';
    item.style.transition = 'all 0.6s ease';
    videoObserver.observe(item);
});

const warObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.war-event').forEach(event => {
    event.style.opacity = '0';
    event.style.transform = 'translateX(-50px)';
    event.style.transition = 'all 0.8s ease';
    warObserver.observe(event);
});

// #паралакс
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const bgPattern = document.querySelector('.bg-pattern');

    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }

    if (bgPattern) {
        bgPattern.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// #навігація
const sections = document.querySelectorAll('.slide[id]');
const navLinks = document.querySelectorAll('.main-header nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// #заголовок
const heroTitle = document.querySelector('.hero-slide .huge-text');
if (heroTitle) {
    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateY(30px)';
    heroTitle.style.transition = 'opacity 1s ease, transform 1s ease';
    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 300);
}

// #значок
const badge = document.querySelector('.badge');
if (badge) {
    setInterval(() => {
        badge.style.animation = 'none';
        setTimeout(() => {
            badge.style.animation = 'pulse 2s infinite';
        }, 10);
    }, 2000);
}

// #пасхалка
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = 'none';
            alert('🇺🇦 Слава Україні! Героям Слава! 🇺🇦');
        }, 2000);
    }
});

const style = document.createElement('style');
style.textContent = `
@keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}

.main-header nav a.active {
    color: var(--color-green);
}

.main-header nav a.active::after {
    width: 100%;
}
`;
document.head.appendChild(style);

console.log('🇺🇦 Слава Україні! Героям Слава! 🇺🇦');
console.log('Сайт повністю завантажено та готовий до використання!');

// #вікторина
const quizQuestions = [
    { q: 'Коли було знищено Запорізьку Січ?', opts: ['1709 рік', '1775 рік', '1654 рік', '1876 рік'], correct: 1, info: 'Запорізьку Січ знищено у 1775 році за наказом Катерини II.' },
    { q: 'Коли почалася повномасштабна війна Росії проти України?', opts: ['2014', '2020', '24 лютого 2022', '1 березня 2022'], correct: 2, info: 'Повномасштабне вторгнення почалося 24 лютого 2022 року.' },
    { q: 'Хто був автором Емського указу 1876 року?', opts: ['Петро I', 'Олександр II', 'Катерина II', 'Микола I'], correct: 1, info: 'Емський указ був підписаний Олександром II у 1876 році в місті Бад-Емс.' },
    { q: 'Скільки мільйонів українців загинули під час Голодомору 1932-1933?', opts: ['1-2 млн', '3-5 млн', '5-7 млн', '10 млн'], correct: 1, info: 'За різними оцінками від 3 до 7 мільйонів, найчастіше цитують цифру 3.5-5 млн.' },
    { q: 'Коли Україна проголосила незалежність?', opts: ['1 січня 1991', '24 серпня 1991', '1 грудня 1991', '26 грудня 1991'], correct: 1, info: 'Акт проголошення незалежності ухвалила ВР 24 серпня 1991 року.' },
    { q: 'Яке місто героїчно тримало оборону на заводі Азовсталь?', opts: ['Херсон', 'Маріуполь', 'Бахмут', 'Сіверодонецьк'], correct: 1, info: 'Героїчна оборона Азовсталі у Маріуполі тривала 86 днів.' },
    { q: 'Що таке "Валуєвський циркуляр"?', opts: ['Військовий наказ', 'Заборона української мови', 'Податковий закон', 'Торговельна угода'], correct: 1, info: 'Циркуляр 1863 р. забороняв друк книг українською мовою.' },
    { q: 'Хто був першим президентом незалежної України?', opts: ['Леонід Кучма', 'Леонід Кравчук', 'Віктор Ющенко', 'Михайло Грушевський'], correct: 1, info: 'Леонід Кравчук став першим президентом України 1 грудня 1991 р.' },
    { q: 'Яка подія 2004 стала символом демократії?', opts: ['Революція Гідності', 'Помаранчева революція', 'Євромайдан', 'Януковичгейт'], correct: 1, info: 'Помаранчева революція 2004 р. — масові протести проти фальсифікації виборів.' },
    { q: 'Як називають події 2013-2014 на Майдані?', opts: ['Помаранчева революція', 'Революція Гідності', 'Антитерористична операція', 'Зелена революція'], correct: 1, info: 'Революція Гідності (21.11.2013 — 22.02.2014) змінила хід історії України.' }
];

let quizCurrent = 0;
let quizScore = 0;
let quizAnswered = false;

function renderQuizQuestion() {
    const wrap = document.getElementById('quizQuestionWrap');
    const counter = document.getElementById('quizCounter');
    const bar = document.getElementById('quizProgressBar');
    const feedback = document.getElementById('quizFeedback');
    const nextBtn = document.getElementById('quizNextBtn');
    const result = document.getElementById('quizResult');
    if (!wrap) return;

    quizAnswered = false;
    feedback.style.display = 'none';
    nextBtn.style.display = 'none';
    result.style.display = 'none';
    counter.textContent = `Питання ${quizCurrent + 1} з ${quizQuestions.length}`;
    bar.style.width = `${((quizCurrent) / quizQuestions.length) * 100}%`;

    const q = quizQuestions[quizCurrent];
    wrap.innerHTML = `
        <h3>${q.q}</h3>
        <div class="quiz-options">
            ${q.opts.map((opt, i) => `<button class="quiz-option" data-index="${i}">${opt}</button>`).join('')}
        </div>
    `;

    wrap.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', function () {
            if (quizAnswered) return;
            quizAnswered = true;
            const idx = parseInt(this.dataset.index);
            const correct = q.correct;
            wrap.querySelectorAll('.quiz-option').forEach((b, bi) => {
                b.style.pointerEvents = 'none';
                if (bi === correct) b.classList.add('correct');
            });
            if (idx === correct) {
                this.classList.add('correct');
                quizScore++;
                feedback.innerHTML = '<i class="fa-solid fa-check-circle" style="color:#4caf50"></i> Правильно! ' + q.info;
            } else {
                this.classList.add('incorrect');
                feedback.innerHTML = '<i class="fa-solid fa-times-circle" style="color:#e53935"></i> Неправильно. ' + q.info;
            }
            feedback.style.display = 'block';
            if (quizCurrent < quizQuestions.length - 1) {
                nextBtn.style.display = 'inline-flex';
                nextBtn.textContent = 'Наступне питання';
            } else {
                nextBtn.style.display = 'inline-flex';
                nextBtn.textContent = 'Показати результат';
            }
        });
    });
}

function showQuizResult() {
    const wrap = document.getElementById('quizQuestionWrap');
    const counter = document.getElementById('quizCounter');
    const bar = document.getElementById('quizProgressBar');
    const feedback = document.getElementById('quizFeedback');
    const nextBtn = document.getElementById('quizNextBtn');
    const result = document.getElementById('quizResult');
    if (!wrap) return;

    wrap.style.display = 'none';
    counter.style.display = 'none';
    feedback.style.display = 'none';
    nextBtn.style.display = 'none';
    bar.style.width = '100%';
    result.style.display = 'block';

    const pct = Math.round((quizScore / quizQuestions.length) * 100);
    let title, text;
    if (pct >= 80) { title = 'Відмінно!'; text = 'Ви чудово знаєте історію України!'; }
    else if (pct >= 50) { title = 'Добре!'; text = 'Ви маєте непогані знання, але є куди рости!'; }
    else { title = 'Потрібно підтягнути!'; text = 'Читайте матеріали на сайті та спробуйте ще раз!'; }

    document.getElementById('quizResultTitle').textContent = title;
    document.getElementById('quizResultText').textContent = text;
    document.getElementById('quizScore').innerHTML = `<span class="score-big">${quizScore}</span> / ${quizQuestions.length} <span class="score-pct">(${pct}%)</span>`;
}

(function initQuiz() {
    renderQuizQuestion();
    const nextBtn = document.getElementById('quizNextBtn');
    const restartBtn = document.getElementById('quizRestartBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            quizCurrent++;
            if (quizCurrent >= quizQuestions.length) {
                showQuizResult();
            } else {
                renderQuizQuestion();
            }
        });
    }
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            quizCurrent = 0;
            quizScore = 0;
            const wrap = document.getElementById('quizQuestionWrap');
            const counter = document.getElementById('quizCounter');
            if (wrap) wrap.style.display = 'block';
            if (counter) counter.style.display = 'block';
            renderQuizQuestion();
        });
    }
})();

// #модалка
const mapEventData = {
    'Київ': { title: 'Київ — столиця України', body: '<p>Столиця України з понад 1500-річною історією.</p><p>У 2022 році російські війська намагалися захопити Київ за 3 дні, але зазнали нищівної поразки. Битва за Київ стала символом незламності українського духу.</p><p><strong>Ключові події:</strong> Революція Гідності (2014), Оборона Києва (2022), Бучанська різанина</p>' },
    'Харків': { title: 'Харків — місто-герой', body: '<p>Друге за розміром місто України.</p><p>З 2022 року Харків під постійними обстрілами російської армії. У вересні 2022 ЗСУ провели блискучий контрнаступ, звільнивши Харківщину.</p>' },
    'Маріуполь': { title: 'Маріуполь — Азовсталь', body: '<p>Героїчна оборона заводу Азовсталь тривала 86 днів.</p><p>Захисники полку «Азов» та 36-ї бригади морської піхоти тримали оборону в оточенні, ставши символом незламності.</p>' },
    'Одеса': { title: 'Одеса — перлина моря', body: '<p>Одеса — ключове портове місто України.</p><p>Росія намагалася захопити місто з моря, але ЗСУ успішно відбили атаку на Зміїний. Згодом був затоплений флагман Чорноморського флоту «Москва».</p>' },
    'Львів': { title: 'Львів — культурна столиця', body: '<p>Львів — культурний центр західної України, місто УПА та ОУН.</p><p>Під час повномасштабної війни Львів став прихистком для мільйонів внутрішніх переселенців та важливим логістичним центром.</p>' },
    'Дніпро': { title: 'Дніпро — залізний форпост', body: '<p>Місто на Дніпрі, засноване як Єкатеринослав.</p><p>14 січня 2023 російська ракета влучила в житловий будинок у Дніпрі, загинуло 46 осіб. Ця трагедія стала однім із символів російського терору.</p>' },
    'Запоріжжя': { title: 'Запоріжжя — козацька слава', body: '<p>Земля Запорізької Січі, колиска українського козацтва.</p><p>Росія окупувала Запорізьку АЕС — найбільшу атомну електростанцію в Європі, створивши ядерну загрозу для всього континенту.</p>' },
    'Херсон': { title: 'Херсон — вільний!', body: '<p>Херсон був єдиним обласним центром, захопленим Росією.</p><p>11 листопада 2022 ЗСУ звільнили Херсон — це стало однією з найбільших перемог у війні. Мешканці зустрічали воїнів зі сльозами радості.</p>' },
    'Крути': { title: 'Бій під Крутами — 1918', body: '<p>29 січня 1918 року біля станції Крути відбувся героїчний бій.</p><p>Кілька сотень студентів та юнкерів стали на шляху більшовицьких військ, які наступали на Київ. Бій тривав лише 4 години, але став символом самопожертви молодого покоління заради незалежної України.</p>' }
};

function openMapModal(title, body) {
    const overlay = document.getElementById('mapModalOverlay');
    const titleEl = document.getElementById('mapModalTitle');
    const bodyEl = document.getElementById('mapModalBody');
    if (!overlay) return;
    titleEl.textContent = title;
    bodyEl.innerHTML = body;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMapModal() {
    const overlay = document.getElementById('mapModalOverlay');
    if (!overlay) return;
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('mapModalOverlay')?.addEventListener('click', function (e) {
    if (e.target === this) closeMapModal();
});
document.getElementById('mapModalClose')?.addEventListener('click', closeMapModal);

// #карусель
let currentFactIndex = 0;
const factItems = document.querySelectorAll('.fact-item');

if (factItems.length > 0) {
    setInterval(() => {
        factItems[currentFactIndex].classList.remove('active');
        currentFactIndex = (currentFactIndex + 1) % factItems.length;
        factItems[currentFactIndex].classList.add('active');
    }, 5000);
}

// #інфографіка
const infoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.bar-fill, .support-bar');
            bars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            infoObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.info-block').forEach(block => {
    infoObserver.observe(block);
});

// #порівняння
const comparisonObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.comparison-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease';
    comparisonObserver.observe(card);
});

const barEventData = {
    '1654': { title: 'Переяславська рада — 1654', body: '<p>У 1654 році Богдан Хмельницький уклав угоду з Московією для спільної боротьби проти Польщі.</p><p>Московія використала цю угоду як привід для поступового поглинання української автономії, перетворивши козацьку державу на складову Російської імперії.</p>' },
    '1709': { title: 'Полтавська битва — 1709', body: '<p>Гетьман Іван Мазепа разом зі шведським королем Карлом XII виступив проти Петра I.</p><p>Поразка під Полтавою стала катастрофою для української державності — Москва знищила Батурин, столицю гетьманату, вбивши тисячі мирних жителів.</p>' },
    '1775': { title: 'Знищення Запорізької Січі — 1775', body: '<p>Катерина II наказала зруйнувати Запорізьку Січ — останній оплот козацької свободи.</p><p>Козаки були розпорошені, а їхні землі роздані російським поміщикам. Це поклало край козацькій автономії.</p>' },
    '1876': { title: 'Емський указ — 1876', body: '<p>Олександр II підписав таємний указ, що забороняв друк книг, викладання та публічне використання української мови.</p><p>Це була одна з найжорстокіших спроб знищити українську ідентичність та культуру.</p>' },
    '1991': { title: 'Незалежність України — 1991', body: '<p>24 серпня 1991 року Верховна Рада прийняла Акт проголошення незалежності України.</p><p>1 грудня 1991 року на всеукраїнському референдумі 90.32% громадян підтримали незалежність. Багатовікова мрія нарешті здійснилась!</p>' }
};

document.querySelectorAll('.bar-segment').forEach(segment => {
    segment.addEventListener('click', function () {
        const year = this.querySelector('span').textContent;
        const data = barEventData[year];
        if (data) {
            openMapModal(data.title, data.body);
        }
    });
});

// #втрати
const casualtyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.animated) {
            entry.target.animated = true;
            const numberElement = entry.target.querySelector('.casualty-number');
            if (numberElement) {
                const text = numberElement.textContent;
                const number = parseInt(text.replace(/[^0-9]/g, ''));
                if (number) {
                    let current = 0;
                    const increment = number / 60;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            numberElement.textContent = text;
                            clearInterval(timer);
                        } else {
                            numberElement.textContent = Math.floor(current).toLocaleString() + (text.includes('+') ? '+' : '');
                        }
                    }, 30);
                }
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.casualty-item').forEach(item => {
    casualtyObserver.observe(item);
});

// #вгору
const scrollToTopBtn = document.getElementById('scrollToTop');

if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}




const progressBar = document.createElement('div');
progressBar.className = 'reading-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height);
    progressBar.style.transform = `scaleX(${scrolled})`;
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.slide').forEach(slide => {
    slide.classList.add('reveal-section');
    revealObserver.observe(slide);
});

const revealStyle = document.createElement('style');
revealStyle.textContent = `
.reveal-section {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal-section.revealed {
    opacity: 1;
    transform: translateY(0);
}
`;
document.head.appendChild(revealStyle);

// #клавіатура
document.addEventListener('keydown', (e) => {
    if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (e.key === 'End') {
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
});

// #статистика
console.log('📊 Статистика сайту:');
console.log('- Розділів:', document.querySelectorAll('.slide').length);
console.log('- Подій у таймлайні:', document.querySelectorAll('.timeline-item').length);
console.log('- Відео матеріалів:', document.querySelectorAll('.video-item').length);
console.log('- Фотографій у галереї:', document.querySelectorAll('.gallery-item').length);
console.log('- Карток героїв:', document.querySelectorAll('.hero-card').length);
console.log('- Фактів:', document.querySelectorAll('.fact-card').length);


function openLightbox(src) {
    const overlay = document.getElementById('lightboxOverlay');
    const img = document.getElementById('lightboxImage');
    img.src = src;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const overlay = document.getElementById('lightboxOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

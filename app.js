// ===== DATA =====
const COLORS = ['#4F46E5', '#7C3AED', '#DB2777', '#DC2626', '#EA580C', '#16A34A', '#059669', '#2563EB', '#9333EA'];

const CATEGORIES = {
    design: 'Дизайн',
    dev: 'Разработка',
    text: 'Тексты',
    translate: 'Переводы',
    consult: 'Консалтинг',
    study: 'Обучение'
};

const DEMO_SERVICES = [
    {
        id: 1,
        type: 'service',
        title: 'Создание логотипа с нуля',
        desc: 'Разработаю уникальный логотип для вашего бренда. 3 варианта + исходники. Учту все ваши пожелания.',
        price: 3000,
        days: 3,
        category: 'design',
        user: { name: 'Мария С.', initials: 'МС', color: '#DB2777', rating: 4.9, orders: 47 },
        promoted: true
    },
    {
        id: 2,
        type: 'service',
        title: 'Верстка лендинга (адаптив)',
        desc: 'Сверстаю лендинг по макету: HTML, CSS, JS. Адаптивная вёрстка, кроссбраузерность.',
        price: 5000,
        days: 4,
        category: 'dev',
        user: { name: 'Дмитрий К.', initials: 'ДК', color: '#4F46E5', rating: 4.8, orders: 32 }
    },
    {
        id: 3,
        type: 'service',
        title: 'Перевод текста EN→RU',
        desc: 'Качественный литературный перевод. Носитель языка. До 5000 слов за сеанс.',
        price: 1500,
        days: 2,
        category: 'translate',
        user: { name: 'Анна Л.', initials: 'АЛ', color: '#059669', rating: 5.0, orders: 63 }
    },
    {
        id: 4,
        type: 'service',
        title: 'Написание SEO-статьи',
        desc: 'Напишу уникальную SEO-оптимизированную статью для блога или сайта. До 3000 знаков.',
        price: 1200,
        days: 1,
        category: 'text',
        user: { name: 'Елена В.', initials: 'ЕВ', color: '#7C3AED', rating: 4.7, orders: 28 }
    },
    {
        id: 5,
        type: 'service',
        title: 'Настройка Яндекс.Директ',
        desc: 'Настрою контекстную рекламу: подбор ключей, создание объявлений, минус-слова.',
        price: 4000,
        days: 3,
        category: 'consult',
        user: { name: 'Павел М.', initials: 'ПМ', color: '#EA580C', rating: 4.6, orders: 19 }
    },
    {
        id: 6,
        type: 'service',
        title: 'Репетитор по математике',
        desc: 'Онлайн-занятия по математике для школьников и студентов. 60 минут.',
        price: 800,
        days: 1,
        category: 'study',
        user: { name: 'Игорь Н.', initials: 'ИН', color: '#2563EB', rating: 4.9, orders: 54 }
    },
    {
        id: 7,
        type: 'service',
        title: 'Дизайн презентации',
        desc: 'Оформлю презентацию в PowerPoint или Google Slides. До 20 слайдов. Стильно и современно.',
        price: 2000,
        days: 2,
        category: 'design',
        user: { name: 'Ольга Р.', initials: 'ОР', color: '#9333EA', rating: 4.8, orders: 41 }
    },
    {
        id: 8,
        type: 'service',
        title: 'Разработка Telegram-бота',
        desc: 'Создам бота для Telegram: автоответы, кнопки, интеграция с API. Python + aiogram.',
        price: 6000,
        days: 5,
        category: 'dev',
        user: { name: 'Артём Б.', initials: 'АБ', color: '#16A34A', rating: 4.7, orders: 23 }
    }
];

const DEMO_ORDERS = [
    {
        id: 101,
        type: 'order',
        title: 'Нужен дизайн визитки',
        desc: 'Ищу дизайнера для создания двусторонней визитки. Есть логотип и фирменные цвета. Нужно быстро.',
        budget: 1500,
        days: 2,
        category: 'design',
        user: { name: 'Сергей Т.', initials: 'СТ', color: '#DC2626' },
        responses: 3
    },
    {
        id: 102,
        type: 'order',
        title: 'Перевести договор на английский',
        desc: 'Нужно перевести юридический договор (5 страниц) с русского на английский. Важна точность терминов.',
        budget: 3000,
        days: 3,
        category: 'translate',
        user: { name: 'Виктория Д.', initials: 'ВД', color: '#7C3AED' },
        responses: 5
    },
    {
        id: 103,
        type: 'order',
        title: 'Помочь с курсовой по экономике',
        desc: 'Нужна помощь с написанием курсовой работы по микроэкономике. Тема уже утверждена.',
        budget: 4000,
        days: 7,
        category: 'study',
        user: { name: 'Марк К.', initials: 'МК', color: '#059669' },
        responses: 2
    },
    {
        id: 104,
        type: 'order',
        title: 'Исправить баги на сайте',
        desc: 'React-приложение. Не работает форма обратной связи и некорректно отображается на мобильных.',
        budget: 2500,
        days: 2,
        category: 'dev',
        user: { name: 'Алина Ш.', initials: 'АШ', color: '#EA580C' },
        responses: 7
    },
    {
        id: 105,
        type: 'order',
        title: 'Написать пост для ВК',
        desc: 'Нужен продающий текст для рекламного поста ВКонтакте. Тематика — онлайн-курсы.',
        budget: 800,
        days: 1,
        category: 'text',
        user: { name: 'Даниил П.', initials: 'ДП', color: '#4F46E5' },
        responses: 4
    }
];

const DEMO_CHATS = [
    {
        id: 1,
        user: { name: 'Мария С.', initials: 'МС', color: '#DB2777' },
        lastMessage: 'Отправила финальный вариант логотипа, посмотрите!',
        time: '14:32',
        unread: 2,
        messages: [
            { type: 'date', text: 'Сегодня' },
            { type: 'received', text: 'Здравствуйте! Начала работу над вашим логотипом.', time: '10:15' },
            { type: 'sent', text: 'Отлично! Жду с нетерпением.', time: '10:20' },
            { type: 'received', text: 'Вот первый набросок, что скажете?', time: '12:40' },
            { type: 'sent', text: 'Мне нравится направление! Можно чуть изменить цвет на более тёмный?', time: '12:55' },
            { type: 'received', text: 'Конечно, сейчас сделаю!', time: '13:00' },
            { type: 'received', text: 'Отправила финальный вариант логотипа, посмотрите!', time: '14:32' }
        ]
    },
    {
        id: 2,
        user: { name: 'Дмитрий К.', initials: 'ДК', color: '#4F46E5' },
        lastMessage: 'Верстка готова, отправляю архив',
        time: '12:10',
        unread: 0,
        messages: [
            { type: 'date', text: 'Вчера' },
            { type: 'sent', text: 'Привет! Макет во вложении. Когда сможете начать?', time: '09:00' },
            { type: 'received', text: 'Привет! Посмотрел макет, всё понятно. Начну сегодня.', time: '09:30' },
            { type: 'date', text: 'Сегодня' },
            { type: 'received', text: 'Верстка готова, отправляю архив', time: '12:10' }
        ]
    },
    {
        id: 3,
        user: { name: 'Анна Л.', initials: 'АЛ', color: '#059669' },
        lastMessage: 'Спасибо за заказ! Начну завтра утром.',
        time: 'Вчера',
        unread: 0,
        messages: [
            { type: 'date', text: 'Вчера' },
            { type: 'sent', text: 'Здравствуйте! Мне нужен перевод статьи, 2000 слов. Возьмётесь?', time: '15:00' },
            { type: 'received', text: 'Здравствуйте! Да, конечно. Тематика?', time: '15:15' },
            { type: 'sent', text: 'IT / технологии. Отправлю текст вечером.', time: '15:20' },
            { type: 'received', text: 'Спасибо за заказ! Начну завтра утром.', time: '18:30' }
        ]
    },
    {
        id: 4,
        user: { name: 'Поддержка', initials: 'TF', color: '#6B7280' },
        lastMessage: 'Добро пожаловать в TaskFlow! Если у вас есть вопросы — пишите.',
        time: '2 дн.',
        unread: 0,
        messages: [
            { type: 'date', text: '2 дня назад' },
            { type: 'received', text: 'Добро пожаловать в TaskFlow! Если у вас есть вопросы — пишите.', time: '10:00' }
        ]
    }
];

const MY_SERVICES = [
    {
        title: 'Разработка сайта под ключ',
        price: 15000,
        orders: 8,
        active: true
    },
    {
        title: 'Настройка рекламы в Яндекс',
        price: 4000,
        orders: 5,
        active: true
    }
];

const REVIEWS = [
    {
        name: 'Ирина К.',
        initials: 'ИК',
        color: '#DB2777',
        stars: 5,
        text: 'Отличная работа! Сайт сделан быстро и качественно. Рекомендую!',
        date: '3 дня назад'
    },
    {
        name: 'Олег В.',
        initials: 'ОВ',
        color: '#4F46E5',
        stars: 5,
        text: 'Профессиональный подход, всё по ТЗ. Буду обращаться ещё.',
        date: '1 неделю назад'
    },
    {
        name: 'Наталья С.',
        initials: 'НС',
        color: '#059669',
        stars: 4,
        text: 'Хорошая работа, но пришлось немного подождать. В целом доволен.',
        date: '2 недели назад'
    }
];


// ===== STATE =====
let currentPage = 'home';
let currentChat = null;
let isLoggedIn = false;


// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    initNavigation();
    initModals();
    initNotifications();
    initChat();
    initSearch();
    renderPopularServices();
    renderNewOrders();
    renderSearchResults();
    renderChatList();
    renderMyServices();
    renderReviews();

    // Desktop sidebar create button
    const sidebarCreateBtn = document.getElementById('sidebar-create-btn');
    if (sidebarCreateBtn) {
        sidebarCreateBtn.addEventListener('click', () => {
            openModal('modal-create-order');
        });
    }
});


// ===== AUTH =====
function initAuth() {
    const authTabs = document.querySelectorAll('.auth-tab');
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            // Find sibling tabs in the same form
            const parentForm = tab.closest('.auth-form') || tab.closest('.auth-container');
            parentForm.querySelectorAll('.auth-tab').forEach(t => {
                if (t.dataset.tab === tabName) t.classList.add('active');
                else t.classList.remove('active');
            });

            if (tabName === 'login') {
                document.getElementById('login-form').classList.remove('hidden');
                document.getElementById('register-form').classList.add('hidden');
            } else {
                document.getElementById('login-form').classList.add('hidden');
                document.getElementById('register-form').classList.remove('hidden');
            }
        });
    });

    const roleBtns = document.querySelectorAll('.role-btn');
    roleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            roleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    document.getElementById('login-btn').addEventListener('click', () => {
        login();
    });

    document.getElementById('register-btn').addEventListener('click', () => {
        login();
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
        logout();
    });
}

function login() {
    isLoggedIn = true;
    document.getElementById('auth-screen').classList.remove('active');
    document.getElementById('main-app').classList.remove('hidden');
    showToast('Добро пожаловать в TaskFlow!');
}

function logout() {
    isLoggedIn = false;
    document.getElementById('auth-screen').classList.add('active');
    document.getElementById('main-app').classList.add('hidden');
}


// ===== NAVIGATION =====
function initNavigation() {
    // Bottom nav (mobile)
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            switchTab(item.dataset.page);
        });
    });

    // Sidebar nav (desktop)
    document.querySelectorAll('.sidebar-item[data-page]').forEach(item => {
        item.addEventListener('click', () => {
            switchTab(item.dataset.page);
        });
    });
}

function switchTab(pageName) {
    currentPage = pageName;

    // Update bottom nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === pageName);
    });

    // Update sidebar nav
    document.querySelectorAll('.sidebar-item[data-page]').forEach(item => {
        item.classList.toggle('active', item.dataset.page === pageName);
    });

    // Update pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.toggle('active', page.id === `page-${pageName}`);
    });

    // Update header title
    const titles = { home: 'Главная', search: 'Поиск', chat: 'Сообщения', profile: 'Профиль' };
    document.getElementById('header-title').textContent = titles[pageName];

    // Close mobile chat overlay if leaving chat
    if (pageName !== 'chat') {
        const chatWindow = document.getElementById('chat-window');
        if (chatWindow) chatWindow.classList.remove('chat-open-mobile');
    }

    // Close notification panel
    document.getElementById('notification-panel').classList.add('hidden');
}


// ===== MODALS =====
function initModals() {
    // Create Order
    document.getElementById('create-order-btn').addEventListener('click', () => {
        openModal('modal-create-order');
    });

    // Create Service
    document.getElementById('create-service-btn').addEventListener('click', () => {
        openModal('modal-create-service');
    });

    // My Orders
    document.getElementById('my-orders-btn').addEventListener('click', () => {
        switchTab('search');
    });

    // Close modals
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').classList.add('hidden');
        });
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.closest('.modal').classList.add('hidden');
        });
    });

    // Publish buttons in modals
    document.querySelectorAll('.modal-body .btn-primary.btn-full').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = btn.closest('.modal');
            if (modal.id === 'modal-payment') {
                showToast('Оплата прошла успешно!');
            } else if (modal.id === 'modal-create-order') {
                showToast('Заказ опубликован!');
            } else if (modal.id === 'modal-create-service') {
                showToast('Услуга опубликована!');
            }
            modal.classList.add('hidden');
        });
    });
}

function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));
}


// ===== NOTIFICATIONS =====
function initNotifications() {
    document.getElementById('notification-btn').addEventListener('click', () => {
        const panel = document.getElementById('notification-panel');
        panel.classList.toggle('hidden');
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        const panel = document.getElementById('notification-panel');
        const btn = document.getElementById('notification-btn');
        if (!panel.contains(e.target) && !btn.contains(e.target)) {
            panel.classList.add('hidden');
        }
    });
}


// ===== RENDER FUNCTIONS =====
function renderServiceCard(service) {
    const isService = service.type === 'service';
    return `
        <div class="service-card" onclick="openServiceDetail(${service.id})">
            <div class="service-card-header">
                <div class="service-avatar" style="background: ${service.user.color}">${service.user.initials}</div>
                <div class="service-user-info">
                    <div class="service-username">${service.user.name}</div>
                    <div class="service-rating"><span class="star">★</span> ${service.user.rating || '—'} · ${service.user.orders || 0} заказов</div>
                </div>
                ${service.promoted ? '<span class="promoted-badge">⚡ ТОП</span>' : ''}
                <span class="service-badge ${isService ? 'badge-service' : 'badge-order'}">${isService ? 'Услуга' : 'Заказ'}</span>
            </div>
            <div class="service-title">${service.title}</div>
            <div class="service-desc">${service.desc}</div>
            <div class="service-footer">
                <div class="service-price">${formatPrice(isService ? service.price : service.budget)} ₽</div>
                <div class="service-meta">
                    <span>📁 ${CATEGORIES[service.category]}</span>
                    <span>⏱ ${service.days} дн.</span>
                    ${!isService && service.responses ? `<span>💬 ${service.responses} откликов</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

function renderOrderCard(order) {
    return `
        <div class="order-card" onclick="openServiceDetail(${order.id})">
            <div class="order-card-header">
                <div class="order-title">${order.title}</div>
                <div class="order-budget">${formatPrice(order.budget)} ₽</div>
            </div>
            <div class="order-desc">${order.desc}</div>
            <div class="order-footer">
                <span class="order-category">${CATEGORIES[order.category]}</span>
                <div class="order-meta">
                    <span>⏱ ${order.days} дн.</span>
                    <span>💬 ${order.responses} откликов</span>
                </div>
            </div>
        </div>
    `;
}

function renderPopularServices() {
    const container = document.getElementById('popular-services');
    container.innerHTML = DEMO_SERVICES.slice(0, 4).map(s => renderServiceCard(s)).join('');
}

function renderNewOrders() {
    const container = document.getElementById('new-orders');
    container.innerHTML = DEMO_ORDERS.slice(0, 3).map(o => renderOrderCard(o)).join('');
}

function renderSearchResults(filter = {}) {
    const container = document.getElementById('search-results');
    let allItems = [...DEMO_SERVICES, ...DEMO_ORDERS];

    // Apply filters
    if (filter.category && filter.category !== 'all') {
        allItems = allItems.filter(i => i.category === filter.category);
    }
    if (filter.type === 'services') {
        allItems = allItems.filter(i => i.type === 'service');
    } else if (filter.type === 'orders') {
        allItems = allItems.filter(i => i.type === 'order');
    }
    if (filter.query) {
        const q = filter.query.toLowerCase();
        allItems = allItems.filter(i =>
            i.title.toLowerCase().includes(q) ||
            i.desc.toLowerCase().includes(q) ||
            CATEGORIES[i.category].toLowerCase().includes(q)
        );
    }
    if (filter.minRating) {
        allItems = allItems.filter(i => i.user.rating >= filter.minRating);
    }
    if (filter.priceFrom) {
        allItems = allItems.filter(i => (i.price || i.budget) >= filter.priceFrom);
    }
    if (filter.priceTo) {
        allItems = allItems.filter(i => (i.price || i.budget) <= filter.priceTo);
    }

    // Sort
    if (filter.sort === 'price-asc') {
        allItems.sort((a, b) => (a.price || a.budget) - (b.price || b.budget));
    } else if (filter.sort === 'price-desc') {
        allItems.sort((a, b) => (b.price || b.budget) - (a.price || a.budget));
    } else if (filter.sort === 'rating') {
        allItems.sort((a, b) => (b.user.rating || 0) - (a.user.rating || 0));
    }

    if (allItems.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <h3>Ничего не найдено</h3>
                <p>Попробуйте изменить параметры поиска</p>
            </div>
        `;
    } else {
        container.innerHTML = allItems.map(item => renderServiceCard(item)).join('');
    }
}

function renderChatList() {
    const container = document.getElementById('chat-list');
    container.innerHTML = DEMO_CHATS.map(chat => `
        <div class="chat-list-item" data-chat-id="${chat.id}" onclick="openChat(${chat.id})">
            <div class="chat-list-avatar" style="background: ${chat.user.color}">${chat.user.initials}</div>
            <div class="chat-list-info">
                <div class="chat-list-name">${chat.user.name}</div>
                <div class="chat-list-last">${chat.lastMessage}</div>
            </div>
            <div class="chat-list-meta">
                <span class="chat-list-time">${chat.time}</span>
                ${chat.unread > 0 ? `<span class="chat-unread-badge">${chat.unread}</span>` : ''}
            </div>
        </div>
    `).join('');
}

function renderMyServices() {
    const container = document.getElementById('my-services');
    container.innerHTML = MY_SERVICES.map(s => `
        <div class="service-card" style="cursor: default;">
            <div class="service-title">${s.title}</div>
            <div class="service-footer">
                <div class="service-price">${formatPrice(s.price)} ₽</div>
                <div class="service-meta">
                    <span>📊 ${s.orders} заказов</span>
                    <span style="color: ${s.active ? '#16A34A' : '#9CA3AF'}">● ${s.active ? 'Активна' : 'Приостановлена'}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderReviews() {
    const container = document.getElementById('profile-reviews');
    container.innerHTML = REVIEWS.map(r => `
        <div class="review-item">
            <div class="review-avatar" style="background: ${r.color}">${r.initials}</div>
            <div class="review-content">
                <div class="review-header">
                    <span class="review-name">${r.name}</span>
                    <span class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</span>
                </div>
                <div class="review-text">${r.text}</div>
                <div class="review-date">${r.date}</div>
            </div>
        </div>
    `).join('');
}


// ===== SERVICE DETAIL =====
function openServiceDetail(id) {
    const item = [...DEMO_SERVICES, ...DEMO_ORDERS].find(i => i.id === id);
    if (!item) return;

    const isService = item.type === 'service';
    const detailTitle = document.getElementById('detail-title');
    const detailBody = document.getElementById('detail-body');

    detailTitle.textContent = item.title;

    detailBody.innerHTML = `
        <div class="detail-user">
            <div class="detail-avatar" style="background: ${item.user.color}">${item.user.initials}</div>
            <div class="detail-user-info">
                <h4>${item.user.name}</h4>
                <p>★ ${item.user.rating || '—'} · ${item.user.orders || 0} выполненных заказов</p>
            </div>
        </div>
        <div class="detail-description">${item.desc}</div>
        <div class="detail-info-grid">
            <div class="detail-info-item">
                <label>${isService ? 'Цена' : 'Бюджет'}</label>
                <span>${formatPrice(isService ? item.price : item.budget)} ₽</span>
            </div>
            <div class="detail-info-item">
                <label>Срок</label>
                <span>${item.days} дн.</span>
            </div>
            <div class="detail-info-item">
                <label>Категория</label>
                <span>${CATEGORIES[item.category]}</span>
            </div>
            <div class="detail-info-item">
                <label>${isService ? 'Выполнено' : 'Откликов'}</label>
                <span>${isService ? item.user.orders + ' заказов' : item.responses + ' откликов'}</span>
            </div>
        </div>
        <div class="detail-actions">
            ${isService
                ? `<button class="btn btn-primary" onclick="openPayment(${item.price})">Заказать</button>
                   <button class="btn btn-outline" onclick="openChatFromDetail('${item.user.name}', '${item.user.initials}', '${item.user.color}')">Написать</button>`
                : `<button class="btn btn-primary" onclick="respondToOrder(${item.id})">Откликнуться</button>
                   <button class="btn btn-outline" onclick="openChatFromDetail('${item.user.name}', '${item.user.initials}', '${item.user.color}')">Написать</button>`
            }
        </div>
    `;

    openModal('modal-service-detail');
}


// ===== PAYMENT =====
function openPayment(amount) {
    closeAllModals();
    const commission = Math.round(amount * 0.12);
    const total = amount + commission;

    document.getElementById('payment-amount').textContent = formatPrice(amount) + ' ₽';
    document.getElementById('payment-commission').textContent = formatPrice(commission) + ' ₽';
    document.getElementById('payment-total').textContent = formatPrice(total) + ' ₽';

    openModal('modal-payment');
}


// ===== CHAT =====
function isDesktop() {
    return window.innerWidth >= 769;
}

function initChat() {
    document.getElementById('chat-back-btn').addEventListener('click', () => {
        closeChatWindow();
    });

    document.getElementById('send-msg-btn').addEventListener('click', sendMessage);
    document.getElementById('chat-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

function openChat(chatId) {
    currentChat = DEMO_CHATS.find(c => c.id === chatId);
    if (!currentChat) return;

    document.getElementById('chat-avatar').textContent = currentChat.user.initials;
    document.getElementById('chat-avatar').style.background = currentChat.user.color;
    document.getElementById('chat-username').textContent = currentChat.user.name;

    renderChatMessages();

    // Highlight active chat in list
    document.querySelectorAll('.chat-list-item').forEach(item => {
        item.classList.toggle('active', parseInt(item.dataset.chatId) === chatId);
    });

    if (isDesktop()) {
        // Desktop: show in right panel
        document.getElementById('chat-empty-state').classList.add('hidden');
        document.getElementById('chat-active').classList.remove('hidden');
    } else {
        // Mobile: overlay
        document.getElementById('chat-active').classList.remove('hidden');
        document.getElementById('chat-window').classList.add('chat-open-mobile');
    }
}

function closeChatWindow() {
    if (isDesktop()) {
        document.getElementById('chat-active').classList.add('hidden');
        document.getElementById('chat-empty-state').classList.remove('hidden');
    } else {
        document.getElementById('chat-window').classList.remove('chat-open-mobile');
    }
    document.querySelectorAll('.chat-list-item').forEach(item => {
        item.classList.remove('active');
    });
    currentChat = null;
}

function openChatFromDetail(name, initials, color) {
    closeAllModals();
    switchTab('chat');

    // Find existing chat or simulate opening one
    const existing = DEMO_CHATS.find(c => c.user.name === name);
    if (existing) {
        openChat(existing.id);
    } else {
        currentChat = {
            id: 999,
            user: { name, initials, color },
            messages: [
                { type: 'date', text: 'Сегодня' }
            ]
        };
        document.getElementById('chat-avatar').textContent = initials;
        document.getElementById('chat-avatar').style.background = color;
        document.getElementById('chat-username').textContent = name;
        renderChatMessages();

        if (isDesktop()) {
            document.getElementById('chat-empty-state').classList.add('hidden');
            document.getElementById('chat-active').classList.remove('hidden');
        } else {
            document.getElementById('chat-active').classList.remove('hidden');
            document.getElementById('chat-window').classList.add('chat-open-mobile');
        }
    }
}

function renderChatMessages() {
    if (!currentChat) return;
    const container = document.getElementById('chat-messages');
    container.innerHTML = currentChat.messages.map(msg => {
        if (msg.type === 'date') {
            return `<div class="message-date">${msg.text}</div>`;
        }
        return `
            <div class="message message-${msg.type === 'sent' ? 'sent' : 'received'}">
                ${msg.text}
                <div class="message-time">${msg.time}</div>
            </div>
        `;
    }).join('');
    container.scrollTop = container.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text || !currentChat) return;

    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

    currentChat.messages.push({ type: 'sent', text, time });
    renderChatMessages();
    input.value = '';

    // Simulate response
    setTimeout(() => {
        const responses = [
            'Понял, сейчас посмотрю!',
            'Хорошо, сделаю.',
            'Отличная идея!',
            'Принято, начинаю работу.',
            'Спасибо! Вернусь с результатом.'
        ];
        const response = responses[Math.floor(Math.random() * responses.length)];
        const rTime = new Date();
        const rTimeStr = rTime.getHours().toString().padStart(2, '0') + ':' + rTime.getMinutes().toString().padStart(2, '0');
        currentChat.messages.push({ type: 'received', text: response, time: rTimeStr });
        renderChatMessages();
    }, 1000 + Math.random() * 2000);
}


// ===== SEARCH =====
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const filterToggle = document.getElementById('filter-toggle-btn');
    const filtersPanel = document.getElementById('filters-panel');

    searchInput.addEventListener('input', debounce(() => {
        applyFilters();
    }, 300));

    filterToggle.addEventListener('click', () => {
        filtersPanel.classList.toggle('hidden');
        filterToggle.classList.toggle('active');
    });

    // Filter chips
    document.querySelectorAll('.filter-chips .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const siblings = chip.parentElement.querySelectorAll('.chip');
            siblings.forEach(s => s.classList.remove('active'));
            chip.classList.add('active');
            applyFilters();
        });
    });

    // Price inputs
    document.getElementById('price-from').addEventListener('input', debounce(applyFilters, 300));
    document.getElementById('price-to').addEventListener('input', debounce(applyFilters, 300));
}

function applyFilters() {
    const query = document.getElementById('search-input').value;
    const typeChip = document.querySelector('.filter-chips .chip[data-filter].active');
    const catChip = document.querySelector('#category-filters .chip.active');
    const ratingChip = document.querySelector('.chip[data-rating].active');
    const sortChip = document.querySelector('.chip[data-sort].active');
    const priceFrom = document.getElementById('price-from').value;
    const priceTo = document.getElementById('price-to').value;

    renderSearchResults({
        query,
        type: typeChip ? typeChip.dataset.filter : 'all',
        category: catChip ? catChip.dataset.cat : 'all',
        minRating: ratingChip ? parseFloat(ratingChip.dataset.rating) : 0,
        sort: sortChip ? sortChip.dataset.sort : 'popular',
        priceFrom: priceFrom ? parseInt(priceFrom) : null,
        priceTo: priceTo ? parseInt(priceTo) : null
    });
}

function filterByCategory(category) {
    switchTab('search');

    // Set category filter
    document.querySelectorAll('#category-filters .chip').forEach(chip => {
        chip.classList.toggle('active', chip.dataset.cat === category);
    });

    // Show filters
    document.getElementById('filters-panel').classList.remove('hidden');
    document.getElementById('filter-toggle-btn').classList.add('active');

    applyFilters();
}


// ===== RESPOND TO ORDER =====
function respondToOrder(orderId) {
    closeAllModals();
    showToast('Ваш отклик отправлен!');
}


// ===== UTILITIES =====
function formatPrice(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

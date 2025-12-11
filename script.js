// Открытие/закрытие мобильного меню
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.innerHTML = navLinks.classList.contains('active') 
    ? '<i class="fas fa-times"></i>' 
    : '<i class="fas fa-bars"></i>';
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Модальное окно
const modal = document.getElementById('modal');

function openModal() {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Закрытие модального окна при клике вне его
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Форма обратной связи
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Здесь должна быть логика отправки формы
  const formData = new FormData(this);
  
  // Имитация отправки
  alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
  this.reset();
  closeModal();
});

// Открытие карты в Google Maps
function openMap() {
  const address = encodeURIComponent('г. Иваново, ул. Спортивная, д. 15');
  window.open(`https://www.google.com/maps/search/?api=1&query=Coffee+Gym+${address}`, '_blank');
}

// Плавная прокрутка для всех ссылок с якорями
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href') === '#') return;
    
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerHeight = document.querySelector('.nav').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Скрытие/показ кнопки "Наверх"
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.style.opacity = '1';
    backToTop.style.visibility = 'visible';
  } else {
    backToTop.style.opacity = '0';
    backToTop.style.visibility = 'hidden';
  }
});

// Закрытие меню при ресайзе окна
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Добавление класса для анимации при скролле
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, observerOptions);

// Наблюдаем за секциями
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Убираем все обводки с картинок
document.addEventListener('DOMContentLoaded', function() {
  // Находим все изображения и убираем границы
  const allImages = document.querySelectorAll('img');
  allImages.forEach(img => {
    img.style.border = 'none';
    img.style.outline = 'none';
    img.style.boxShadow = 'none';
  });
  
  // Также убираем границы у всех элементов
  const allElements = document.querySelectorAll('*');
  allElements.forEach(el => {
    el.style.border = 'none';
    el.style.outline = 'none';
  });
});

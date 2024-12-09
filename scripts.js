function expandImage(img) {
    // Get the expanded image container and elements
    const expandImg = document.getElementById("expandedImg");
    const imgText = document.getElementById("imgtext");
    const expandedContainer = document.querySelector(".expanded-container");
  
    // Set the image and text
    expandImg.src = img.src;
    imgText.innerHTML = img.alt;
  
    // Show the container
    expandedContainer.style.display = "flex";
  }
  
  function closeImage() {
    // Hide the expanded container
    const expandedContainer = document.querySelector(".expanded-container");
    expandedContainer.style.display = "none";
  }
  



/**
 * פונקציה לטיפול באירוע שליחת טופס יצירת קשר
 */
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // מניעת ריענון הדף

  const name = document.getElementById('name').value; // שם השולח
  const email = document.getElementById('email').value; // אימייל השולח

  // יצירת הודעת הצלחה
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  successMessage.innerText = `תודה, ${name}! ההודעה שלך התקבלה. נחזור אליך בכתובת ${email} בהקדם.`;

  // הוספת הודעת הצלחה לתצוגה
  const contactContainer = document.querySelector('.contact-container');
  contactContainer.appendChild(successMessage);

  // איפוס הטופס
  event.target.reset();

  // הסרת הודעת ההצלחה לאחר 5 שניות
  setTimeout(() => successMessage.remove(), 5000);
});









// הפעלת קרוסלת ההמלצות
const testimonialsSwiper = new Swiper('.testimonials-swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});






const hamburger = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
});

// סגירת תפריט בלחיצה מחוץ
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    mobileMenu.style.display = 'none';
  }
});


window.addEventListener('scroll', () => {
  const topBar = document.querySelector('.top-bar');
  if (window.scrollY > 50) {
    topBar.classList.add('scrolled');
  } else {
    topBar.classList.remove('scrolled');
  }
});






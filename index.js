// Language Management System
let currentLanguage = localStorage.getItem('language') || 'en';

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.faq': 'FAQ',
    'nav.members': 'Members',
    'nav.members-store': 'Members Store',
    'nav.members-account': 'Members Account',
    'nav.language': 'العربية',
    
    // Home Page
    'hero.title': 'Welcome to WM2 Distribution Marketing',
    'hero.subtitle': 'Your trusted partner in quality products and business opportunities',
    'hero.cta': 'Get Started',
    
    // About Page
    'about.title': 'About WM2 Distribution Marketing',
    'about.mission': 'Our Mission',
    'about.vision': 'Our Vision',
    
    // FAQ Page
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Can\'t find the answer you\'re looking for? Reach out to our customer support team.',
    
    // FAQ Questions
    'faq.q1': 'What are the benefits of joining?',
    'faq.q2': 'How can I register?',
    'faq.q3': 'How can I invite others?',
    'faq.q4': 'How can I earn money?',
    'faq.q5': 'What\'s the best way to demonstrate the product as a seller?',
    'faq.q6': 'How can I place an order?',
    'faq.q7': 'How can I receive my order?',
    'faq.q8': 'Do you offer delivery?',
    'faq.q9': 'What are the pickup and delivery options?',
    'faq.q10': 'What payment methods are available?',
    'faq.q11': 'How can I request a withdrawal?',
    
    // FAQ Answers
    'faq.a1': '• Access to high-quality products at lower prices.<br>• Opportunity to earn extra income through resale or referrals.',
    'faq.a2': 'Registration is by invitation only. You need an invitation link from an existing registered member.',
    'faq.a3': 'Once registered, you will receive a personal invitation link that you can share to invite new members.',
    'faq.a4': '• By directly selling the products.<br>• By earning commission from purchases made by members you invited via your referral link.',
    'faq.a5': 'We recommend purchasing and using the 10ml tester sample set. This allows customers to experience the product firsthand, and you can offer them a price lower than the original retail price.',
    'faq.a6': 'If you are a registered member, you can visit our store to place your order.<br><a href="https://www.youtube.com/watch?v=ruWZOpkBwXI" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200">Video Guide</a>.',
    'faq.a7': 'You can pick up your order from our warehouses in Jeddah or Riyadh after receiving the order readiness notification at the following times:<br>Sunday to Thursday: 6:00 PM – 10:00 PM',
    'faq.a8': 'Yes, delivery is available in Jeddah and Riyadh for an additional 15 SAR.<br>Delivery Days: Tuesday, Friday, and Saturday.',
    'faq.a9': '<strong>Pickup:</strong> Jeddah or Riyadh warehouses, Sunday–Thursday, 6:00 PM – 10:00 PM<br><br><strong>Delivery:</strong> Jeddah & Riyadh only, 15 SAR fee, available Tuesday, Friday, and Saturday.',
    'faq.a10': 'Currently, we only accept cash payments.',
    'faq.a11': 'Please refer to our tutorial video for detailed instructions.<br><a href="https://youtu.be/cOKP5ZXt8f0" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200">Video Guide</a>.',
    
    // Footer
    'footer.copyright': '© 2024 WM2. All rights reserved.'
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.members': 'الأعضاء',
    'nav.members-store': 'متجر الأعضاء',
    'nav.members-account': 'حساب الأعضاء',
    'nav.language': 'English',
    
    // Home Page
    'hero.title': 'مرحباً بكم في WM2 للتوزيع والتسويق',
    'hero.subtitle': 'شريككم الموثوق في المنتجات عالية الجودة وفرص الأعمال',
    'hero.cta': 'ابدأ الآن',
    
    // About Page
    'about.title': 'عن WM2 للتوزيع والتسويق',
    'about.mission': 'مهمتنا',
    'about.vision': 'رؤيتنا',
    
    // FAQ Page
    'faq.title': 'الأسئلة الشائعة',
    'faq.subtitle': 'لا تجد الإجابة التي تبحث عنها؟ تواصل مع فريق الدعم الفني.',
    
    // FAQ Questions
    'faq.q1': 'ما هي فوائد الانضمام؟',
    'faq.q2': 'كيف يمكنني التسجيل؟',
    'faq.q3': 'كيف يمكنني دعوة الآخرين؟',
    'faq.q4': 'كيف يمكنني كسب المال؟',
    'faq.q5': 'ما هي أفضل طريقة لعرض المنتج كبائع؟',
    'faq.q6': 'كيف يمكنني تقديم طلب؟',
    'faq.q7': 'كيف يمكنني استلام طلبي؟',
    'faq.q8': 'هل تقدمون خدمة التوصيل؟',
    'faq.q9': 'ما هي خيارات الاستلام والتوصيل؟',
    'faq.q10': 'ما هي طرق الدفع المتاحة؟',
    'faq.q11': 'كيف يمكنني طلب سحب الأرباح؟',
    
    // FAQ Answers
    'faq.a1': '• الوصول إلى منتجات عالية الجودة بأسعار أقل.<br>• فرصة لكسب دخل إضافي من خلال إعادة البيع أو الإحالة.',
    'faq.a2': 'التسجيل يكون بدعوة فقط. تحتاج إلى رابط دعوة من عضو مسجل موجود.',
    'faq.a3': 'بمجرد التسجيل، ستحصل على رابط دعوة شخصي يمكنك مشاركته لدعوة أعضاء جدد.',
    'faq.a4': '• من خلال بيع المنتجات مباشرة.<br>• من خلال كسب العمولة من المشتريات التي يقوم بها الأعضاء الذين دعوتهم عبر رابط الإحالة الخاص بك.',
    'faq.a5': 'نوصي بشراء واستخدام مجموعة العينات التجريبية 10 مل. هذا يسمح للعملاء بتجربة المنتج مباشرة، ويمكنك تقديم سعر أقل من سعر البيع بالتجزئة الأصلي.',
    'faq.a6': 'إذا كنت عضواً مسجلاً، يمكنك زيارة متجرنا لتقديم طلبك.<br><a href="https://www.youtube.com/watch?v=ruWZOpkBwXI" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200">دليل الفيديو</a>.',
    'faq.a7': 'يمكنك استلام طلبك من مستودعاتنا في جدة أو الرياض بعد تلقي إشعار جاهزية الطلب في الأوقات التالية:<br>الأحد إلى الخميس: 6:00 مساءً – 10:00 مساءً',
    'faq.a8': 'نعم، التوصيل متاح في جدة والرياض مقابل 15 ريال إضافية.<br>أيام التوصيل: الثلاثاء والجمعة والسبت.',
    'faq.a9': '<strong>الاستلام:</strong> مستودعات جدة أو الرياض، الأحد–الخميس، 6:00 مساءً – 10:00 مساءً<br><br><strong>التوصيل:</strong> جدة والرياض فقط، رسوم 15 ريال، متاح الثلاثاء والجمعة والسبت.',
    'faq.a10': 'حالياً، نقبل الدفع النقدي فقط.',
    'faq.a11': 'يرجى الرجوع إلى فيديو الشرح التعليمي للحصول على تعليمات مفصلة.<br><a href="https://youtu.be/cOKP5ZXt8f0" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200">دليل الفيديو</a>.',
    
    // Footer
    'footer.copyright': '© 2024 WM2. جميع الحقوق محفوظة.'
  }
};

// Language switching function
function switchLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Update HTML lang attribute and direction
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update body classes for RTL support
  document.body.classList.toggle('rtl', lang === 'ar');
  
  // Update all translatable elements
  updatePageContent();
  
  // Update language switcher text
  updateLanguageSwitcher();
}

// Update page content with current language
function updatePageContent() {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLanguage][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[currentLanguage][key];
      } else {
        element.innerHTML = translations[currentLanguage][key];
      }
    }
  });
}

// Update language switcher button text
function updateLanguageSwitcher() {
  const switcher = document.getElementById('language-switcher');
  if (switcher) {
    switcher.textContent = translations[currentLanguage]['nav.language'];
  }
}

// Initialize language system
function initializeLanguage() {
  // Set initial language
  switchLanguage(currentLanguage);
  
  // Add language switcher to navigation
  addLanguageSwitcher();
  
  // Add RTL CSS support
  addRTLSupport();
}

// Add language switcher to navigation
function addLanguageSwitcher() {
  const navContainer = document.querySelector('.ml-10.flex.items-baseline.space-x-4');
  const mobileNavContainer = document.querySelector('#mobile-menu .space-y-1');
  
  if (navContainer) {
    const switcher = document.createElement('button');
    switcher.id = 'language-switcher';
    switcher.className = 'px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200';
    switcher.textContent = translations[currentLanguage]['nav.language'];
    switcher.addEventListener('click', () => {
      switchLanguage(currentLanguage === 'en' ? 'ar' : 'en');
    });
    navContainer.appendChild(switcher);
  }
  
  if (mobileNavContainer) {
    const mobileSwitcher = document.createElement('button');
    mobileSwitcher.id = 'mobile-language-switcher';
    mobileSwitcher.className = 'block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200';
    mobileSwitcher.textContent = translations[currentLanguage]['nav.language'];
    mobileSwitcher.addEventListener('click', () => {
      switchLanguage(currentLanguage === 'en' ? 'ar' : 'en');
    });
    mobileNavContainer.appendChild(mobileSwitcher);
  }
}

// Add RTL CSS support
function addRTLSupport() {
  const style = document.createElement('style');
  style.textContent = `
    .rtl {
      direction: rtl;
      text-align: right;
    }
    
    .rtl .ml-10 {
      margin-left: 0 !important;
      margin-right: 2.5rem !important;
    }
    
    .rtl .space-x-4 > * + * {
      margin-left: 0 !important;
      margin-right: 1rem !important;
    }
    
    .rtl .ml-1 {
      margin-left: 0 !important;
      margin-right: 0.25rem !important;
    }
    
    .rtl .left-0 {
      left: auto !important;
      right: 0 !important;
    }
    
    .rtl .text-left {
      text-align: right !important;
    }
    
    .rtl .text-center {
      text-align: center !important;
    }
    
    .rtl .flex-row {
      flex-direction: row-reverse !important;
    }
    
    .rtl .justify-start {
      justify-content: flex-end !important;
    }
    
    .rtl .justify-end {
      justify-content: flex-start !important;
    }
    
    .rtl .items-start {
      align-items: flex-end !important;
    }
    
    .rtl .items-end {
      align-items: flex-start !important;
    }
    
    .rtl .border-l {
      border-left: none !important;
      border-right: 1px solid !important;
    }
    
    .rtl .border-r {
      border-right: none !important;
      border-left: 1px solid !important;
    }
    
    .rtl .pl-4 {
      padding-left: 0 !important;
      padding-right: 1rem !important;
    }
    
    .rtl .pr-4 {
      padding-right: 0 !important;
      padding-left: 1rem !important;
    }
    
    .rtl .ml-4 {
      margin-left: 0 !important;
      margin-right: 1rem !important;
    }
    
    .rtl .mr-4 {
      margin-right: 0 !important;
      margin-left: 1rem !important;
    }
  `;
  document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', function () {
  // Initialize language system
  initializeLanguage();
  
  // Mobile menu toggle
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (menuButton && mobileMenu && hamburgerIcon && closeIcon) {
    menuButton.addEventListener('click', function () {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      hamburgerIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  }

  // FAQ Accordion
  const accordionContainer = document.getElementById('accordion-container');
  if (accordionContainer) {
    const accordionItems = accordionContainer.querySelectorAll('.accordion-item');

    accordionItems.forEach((item) => {
      const button = item.querySelector('.accordion-button');
      const content = item.querySelector('.accordion-content');
      const icon = item.querySelector('.accordion-icon');

      if (button && content && icon) {
        button.addEventListener('click', function () {
          const isOpen = content.classList.contains('open');

          // Close all other items
          accordionContainer.querySelectorAll('.accordion-content').forEach((el) => {
            el.classList.remove('open');
          });
          accordionContainer.querySelectorAll('.accordion-button').forEach((el) => {
            el.setAttribute('aria-expanded', 'false');
          });
          accordionContainer.querySelectorAll('.accordion-icon').forEach((el) => {
             el.classList.remove('rotate-180');
          });

          // Open the clicked item if it was closed
          if (!isOpen) {
            content.classList.add('open');
            button.setAttribute('aria-expanded', 'true');
            icon.classList.add('rotate-180');
          }
        });
      }
    });
  }
});

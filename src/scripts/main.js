/**
 * Nordic Portfolio - Main JavaScript
 * 北欧デザインポートフォリオのインタラクション
 */

// ============================================
// ユーティリティ関数
// ============================================

/**
 * DOM要素を安全に取得
 * @param {string} selector - CSSセレクタ
 * @returns {Element|null}
 */
export function $(selector) {
  return document.querySelector(selector);
}

/**
 * 複数のDOM要素を取得
 * @param {string} selector - CSSセレクタ
 * @returns {NodeList}
 */
export function $$(selector) {
  return document.querySelectorAll(selector);
}

/**
 * メールアドレスのバリデーション
 * @param {string} email - メールアドレス
 * @returns {boolean}
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 文字列が空でないかチェック
 * @param {string} str - チェックする文字列
 * @returns {boolean}
 */
export function isNotEmpty(str) {
  return str !== null && str !== undefined && str.trim().length > 0;
}

/**
 * デバウンス関数
 * @param {Function} func - 実行する関数
 * @param {number} wait - 待機時間（ミリ秒）
 * @returns {Function}
 */
export function debounce(func, wait) {
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

// ============================================
// モバイルナビゲーション
// ============================================

/**
 * モバイルメニューの初期化
 */
function initMobileMenu() {
  const menuToggle = $('.header__menu-toggle');
  const nav = $('.header__nav');

  if (!menuToggle || !nav) return;

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

    menuToggle.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('is-open');

    // メニューが開いているときはスクロールを無効化
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  });

  // ナビゲーションリンクをクリックしたらメニューを閉じる
  const navLinks = nav.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  // ESCキーでメニューを閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      menuToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
}

// ============================================
// スムーススクロール
// ============================================

/**
 * スムーススクロールの初期化
 */
function initSmoothScroll() {
  const links = $$('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = $(href);
      if (!target) return;

      e.preventDefault();

      const headerHeight = $('.header')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

// ============================================
// ヘッダースクロールエフェクト
// ============================================

/**
 * ヘッダーのスクロールエフェクト初期化
 */
function initHeaderScroll() {
  const header = $('.header');
  if (!header) return;

  let lastScrollY = window.scrollY;

  const handleScroll = debounce(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }

    // スクロール方向に応じてヘッダーを表示/非表示
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      header.classList.add('header--hidden');
    } else {
      header.classList.remove('header--hidden');
    }

    lastScrollY = currentScrollY;
  }, 10);

  window.addEventListener('scroll', handleScroll, { passive: true });
}

// ============================================
// コンタクトフォーム
// ============================================

/**
 * フォームデータのバリデーション
 * @param {Object} data - フォームデータ
 * @returns {Object} - バリデーション結果
 */
export function validateFormData(data) {
  const errors = {};

  if (!isNotEmpty(data.name)) {
    errors.name = 'お名前を入力してください';
  }

  if (!isNotEmpty(data.email)) {
    errors.email = 'メールアドレスを入力してください';
  } else if (!isValidEmail(data.email)) {
    errors.email = '正しいメールアドレスを入力してください';
  }

  if (!isNotEmpty(data.subject)) {
    errors.subject = '件名を入力してください';
  }

  if (!isNotEmpty(data.message)) {
    errors.message = 'メッセージを入力してください';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * コンタクトフォームの初期化
 */
function initContactForm() {
  const form = $('#contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    // バリデーション
    const { isValid, errors } = validateFormData(data);

    // エラー表示をクリア
    form.querySelectorAll('.form__error').forEach(el => el.remove());
    form.querySelectorAll('.form__input, .form__textarea').forEach(el => {
      el.classList.remove('form__input--error');
    });

    if (!isValid) {
      // エラーを表示
      Object.entries(errors).forEach(([field, message]) => {
        const input = form.querySelector(`[name="${field}"]`);
        if (input) {
          input.classList.add('form__input--error');
          const errorEl = document.createElement('p');
          errorEl.className = 'form__error';
          errorEl.textContent = message;
          errorEl.style.color = '#e74c3c';
          errorEl.style.fontSize = '0.875rem';
          errorEl.style.marginTop = '0.25rem';
          input.parentNode.appendChild(errorEl);
        }
      });
      return;
    }

    // 送信ボタンを無効化
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = '送信中...';

    // ここでは実際のAPI送信はシミュレート
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      // 成功メッセージを表示
      form.innerHTML = `
        <div class="form__success" style="text-align: center; padding: 2rem;">
          <p style="font-size: 1.25rem; color: #27ae60; margin-bottom: 1rem;">
            送信完了しました
          </p>
          <p style="color: #7f8c8d;">
            お問い合わせありがとうございます。<br>
            内容を確認の上、折り返しご連絡いたします。
          </p>
        </div>
      `;
    } catch (error) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      alert('送信に失敗しました。しばらく経ってからお試しください。');
    }
  });
}

// ============================================
// スクロールアニメーション
// ============================================

/**
 * スクロールアニメーションの初期化
 */
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // アニメーション対象の要素を監視
  const animatedElements = $$('.work-card, .journal-card, .section__header');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// ============================================
// アクティブナビゲーション
// ============================================

/**
 * スクロール位置に応じたナビゲーションのアクティブ状態を更新
 */
function initActiveNavigation() {
  const sections = $$('section[id]');
  const navLinks = $$('.nav__link');

  if (sections.length === 0 || navLinks.length === 0) return;

  const handleScroll = debounce(() => {
    const scrollY = window.scrollY;
    const headerHeight = $('.header')?.offsetHeight || 0;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('nav__link--active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('nav__link--active');
          }
        });
      }
    });
  }, 50);

  window.addEventListener('scroll', handleScroll, { passive: true });
}

// ============================================
// 初期化
// ============================================

/**
 * アプリケーションの初期化
 */
function init() {
  initMobileMenu();
  initSmoothScroll();
  initHeaderScroll();
  initContactForm();
  initScrollAnimations();
  initActiveNavigation();
}

// DOMContentLoadedで初期化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// エクスポート（テスト用）
export { init };

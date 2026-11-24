(() => {
const button = document.getElementById('language');
const supported = new Set(['ko', 'en']);
let lang = navigator.language.toLowerCase().startsWith('ko') ? 'ko' : 'en';
try { const stored = localStorage.getItem('yoozful-language'); if(supported.has(stored)) lang = stored; } catch {}
function render() {
document.documentElement.lang = lang;
document.querySelectorAll('[data-ko][data-en]').forEach(el => el.textContent = el.dataset[lang]);
document.querySelectorAll('[data-alt-ko]').forEach(el => el.alt = lang === 'ko' ? el.dataset.altKo : el.dataset.altEn);
document.title = lang === 'ko' ? 'Yoozful — 작은 순간을, 더 즐겁게' : 'Yoozful — Small moments. More to enjoy.';
button.textContent = lang === 'ko' ? 'EN' : 'KO';
button.setAttribute('aria-label', lang === 'ko' ? 'Switch to English' : '한국어로 전환');
}
button.addEventListener('click', () => {lang = lang === 'ko' ? 'en' : 'ko';try {localStorage.setItem('yoozful-language', lang);}catch{} render();});
render();
})();
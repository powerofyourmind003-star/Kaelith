// ---- Speech (US English) ----
let usVoice = null;

function pickUsVoice() {
  const voices = window.speechSynthesis.getVoices();
  // Prefer a US English voice
  usVoice =
    voices.find(v => /en[-_]US/i.test(v.lang) && /female|samantha|zira|jenny|aria/i.test(v.name)) ||
    voices.find(v => /en[-_]US/i.test(v.lang)) ||
    voices.find(v => /^en/i.test(v.lang)) ||
    null;
}
pickUsVoice();
if (typeof speechSynthesis !== 'undefined') {
  speechSynthesis.onvoiceschanged = pickUsVoice;
}

function speak(text, btn) {
  if (!('speechSynthesis' in window)) {
    alert('Brauzeringiz ovozli o\'qishni qo\'llab-quvvatlamaydi.');
    return;
  }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  if (usVoice) u.voice = usVoice;
  u.rate = 0.92;
  u.pitch = 1;
  if (btn) {
    btn.classList.add('speaking');
    u.onend = () => btn.classList.remove('speaking');
    u.onerror = () => btn.classList.remove('speaking');
  }
  window.speechSynthesis.speak(u);
}

// ---- State ----
const LS_KEY = 'learnedWords_v1';
let learned = new Set(JSON.parse(localStorage.getItem(LS_KEY) || '[]'));
let currentFilter = 'all';
let searchTerm = '';

function saveLearned() {
  localStorage.setItem(LS_KEY, JSON.stringify([...learned]));
}

// ---- Render ----
const cardsEl = document.getElementById('cards');

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function matchesFilter(w) {
  if (currentFilter === 'learned') return learned.has(w.word);
  if (currentFilter === 'notlearned') return !learned.has(w.word);
  return true;
}

function matchesSearch(w) {
  if (!searchTerm) return true;
  const t = searchTerm.toLowerCase();
  return (
    w.word.toLowerCase().includes(t) ||
    w.uz.toLowerCase().includes(t) ||
    (w.synonyms || []).some(s => s.toLowerCase().includes(t))
  );
}

function buildCard(w) {
  const card = document.createElement('article');
  card.className = 'card' + (learned.has(w.word) ? ' learned' : '');

  const synHtml = (w.synonyms || []).map(s => `<span class="syn">${escapeHtml(s)}</span>`).join('');
  const exHtml = (w.examples || []).map(ex => `
    <div class="example">
      <div class="en">
        <button class="ex-speak" title="Eshitish">🔊</button>
        <span>${escapeHtml(ex.en)}</span>
      </div>
      <div class="uz">${escapeHtml(ex.uz)}</div>
    </div>`).join('');

  card.innerHTML = `
    <div class="card-top">
      <div class="word-block">
        <span class="word">${escapeHtml(w.word)}</span>
        <span class="ipa">${escapeHtml(w.ipa || '')}</span>
      </div>
      <button class="speak-btn" title="So'zni eshitish">🔊</button>
    </div>
    <span class="pos">${escapeHtml(w.pos)}</span>
    <div class="translation">${escapeHtml(w.uz)}</div>

    <div class="section">
      <div class="section-title">Qachon qo'llaniladi</div>
      <div class="usage">${escapeHtml(w.usage)}</div>
    </div>

    ${synHtml ? `<div class="section">
      <div class="section-title">Sinonimlar</div>
      <div class="synonyms">${synHtml}</div>
    </div>` : ''}

    <div class="section">
      <div class="section-title">Misollar</div>
      <div class="examples">${exHtml}</div>
    </div>

    <div class="card-actions">
      <button class="learn-btn">${learned.has(w.word) ? '✓ O\'rganildi' : 'O\'rgandim'}</button>
    </div>
  `;

  // Word speak
  const wordBtn = card.querySelector('.speak-btn');
  wordBtn.addEventListener('click', () => speak(w.word, wordBtn));

  // Example speak buttons
  card.querySelectorAll('.ex-speak').forEach((b, i) => {
    b.addEventListener('click', () => speak(w.examples[i].en, b));
  });

  // Learn toggle
  const learnBtn = card.querySelector('.learn-btn');
  learnBtn.addEventListener('click', () => {
    if (learned.has(w.word)) {
      learned.delete(w.word);
    } else {
      learned.add(w.word);
    }
    saveLearned();
    render();
    updateStats();
  });

  // Autoplay on appear (only when toggled)
  return card;
}

function render() {
  const list = WORDS.filter(w => matchesFilter(w) && matchesSearch(w));
  cardsEl.innerHTML = '';
  if (list.length === 0) {
    cardsEl.innerHTML = '<div class="empty">Hech narsa topilmadi 🤔</div>';
    return;
  }
  const frag = document.createDocumentFragment();
  list.forEach(w => frag.appendChild(buildCard(w)));
  cardsEl.appendChild(frag);
}

function updateStats() {
  document.getElementById('totalCount').textContent = WORDS.length;
  document.getElementById('learnedCount').textContent = learned.size;
}

// ---- Events ----
document.getElementById('search').addEventListener('input', e => {
  searchTerm = e.target.value.trim();
  render();
});

document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentFilter = chip.dataset.filter;
    render();
  });
});

// Autoplay handling: when checked, clicking a card's word area reads it.
// Kept simple: the checkbox enables reading the word when the card scrolls into view first time.
const autoplayBox = document.getElementById('autoplay');
const seen = new Set();
const observer = new IntersectionObserver((entries) => {
  if (!autoplayBox.checked) return;
  entries.forEach(en => {
    if (en.isIntersecting) {
      const word = en.target.querySelector('.word')?.textContent;
      if (word && !seen.has(word)) {
        seen.add(word);
        speak(word, en.target.querySelector('.speak-btn'));
      }
    }
  });
}, { threshold: 0.9 });

// Re-observe after each render
const origRender = render;
render = function () {
  origRender();
  if (autoplayBox.checked) {
    document.querySelectorAll('.card').forEach(c => observer.observe(c));
  }
};

autoplayBox.addEventListener('change', () => {
  seen.clear();
  if (autoplayBox.checked) {
    document.querySelectorAll('.card').forEach(c => observer.observe(c));
  }
});

// ---- Init ----
updateStats();
render();

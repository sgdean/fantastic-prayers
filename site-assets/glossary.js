(() => {
  const definitions = {
    emulator: 'Software that lets one computer behave like an older computer. Here, it recreates the Macintosh system <em>Fantastic Prayers</em> needs so the original CD-ROM can run on Steven\'s laptop.',
    director: 'At the time <em>Fantastic Prayers</em> was made, Director was Macromedia\'s software for assembling images, sound, video, animation, and interaction. A Director file acts as a container for the media and scripts that make an interactive section work. Adobe later acquired Macromedia and discontinued Director.',
    'design-document': 'The original 42-page document Steven wrote while <em>Fantastic Prayers</em> was being made. It describes the intended structure, interactions, sound, images, and behavior of each section. What it says was planned may differ from what was built or released.',
    fingerprint: 'A short code calculated from the contents of a file, often called a checksum. If any part of the file changes, the code changes too. This lets us confirm that a preserved file remains identical.',
    hotspots: 'Areas of the screen programmed to respond to the pointer. A rollover reacts when the pointer moves across it. A clickable hotspot reacts when the visitor clicks or taps. In the reconstruction, these responses are rebuilt using modern web browser technology.',
    reconstruction: 'A new implementation that aims to reproduce the released artwork\'s appearance, sound, timing, and behavior using modern web browser technology.',
    assets: 'The materials and code that make up the work: images, sound files, videos, text, animation, and scripts that control interaction and logic.',
    rollover: 'An interaction triggered when the pointer moves across a particular area of the screen, without requiring a click.'
  };
  const terms = Array.from(document.querySelectorAll('.glossary-term'));

  function closeTerm(term) {
    term.classList.remove('is-open');
    term.querySelector('.glossary-trigger')?.setAttribute('aria-expanded', 'false');
  }

  function closeAll(except) {
    terms.forEach((term) => {
      if (term !== except) closeTerm(term);
    });
  }

  terms.forEach((term, index) => {
    const trigger = term.querySelector('.glossary-trigger');
    const definition = term.querySelector('.glossary-definition');
    const key = term.dataset.glossaryKey;
    if (!trigger || !definition) return;

    if (key && definitions[key] && !definition.textContent.trim()) {
      definition.innerHTML = definitions[key];
    }

    if (!definition.id) definition.id = `glossary-${key || 'term'}-${index + 1}`;
    trigger.setAttribute('aria-describedby', definition.id);

    trigger.addEventListener('click', (event) => {
      event.stopPropagation();
      const willOpen = !term.classList.contains('is-open');
      closeAll(term);
      term.classList.toggle('is-open', willOpen);
      trigger.setAttribute('aria-expanded', String(willOpen));
      if (!willOpen) trigger.blur();
    });

    trigger.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      closeTerm(term);
      trigger.blur();
    });
  });

  document.addEventListener('click', () => {
    closeAll();
    if (document.activeElement?.classList.contains('glossary-trigger')) {
      document.activeElement.blur();
    }
  });
})();

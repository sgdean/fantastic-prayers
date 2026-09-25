(function () {
  const slug = document.body.dataset.environment;
  const environments = window.FP_ENVIRONMENTS || [];
  const environment = environments.find((item) => item.slug === slug);
  const main = document.querySelector("#main");

  if (!environment || !main) return;

  const currentIndex = environments.findIndex((item) => item.slug === slug);
  const previous = environments[(currentIndex - 1 + environments.length) % environments.length];
  const next = environments[(currentIndex + 1) % environments.length];
  const usedGlossaryTerms = new Set();
  const glossaryRules = [
    ['emulator', /\bemulator\b/i],
    ['director', /\bDirector\b/],
    ['hotspots', /\b(?:rollovers? and )?hotspots?\b/i],
    ['reconstruction', /\breconstruction\b/i],
    ['rollover', /\brollovers?\b|\broll(?:ed|ing|s)? over\b/i]
  ];

  function glossaryTerm(key, label) {
    return `<span class="glossary-term" data-glossary-key="${key}"><button class="glossary-trigger" type="button" aria-expanded="false">${label}</button><span class="glossary-definition" role="tooltip"></span></span>`;
  }

  function addDefinitions(text) {
    let result = text;
    glossaryRules.forEach(([key, pattern]) => {
      if (usedGlossaryTerms.has(key) || !pattern.test(result)) return;
      result = result.replace(pattern, (match) => glossaryTerm(key, match));
      usedGlossaryTerms.add(key);
    });
    return result;
  }

  const deck = addDefinitions(environment.deck);
  const brief = addDefinitions(environment.brief);
  const sectionTitle = addDefinitions(environment.sectionTitle);
  const description = environment.description.map((paragraph) => `<p>${addDefinitions(paragraph)}</p>`).join("");
  const facts = environment.facts.map(([value, label, note]) => `
    <div class="environment-fact">
      <strong>${value}</strong>
      <span>${addDefinitions(label)}</span>
      <small>${addDefinitions(note)}</small>
    </div>
  `).join("");
  const recordingTitle = addDefinitions(environment.recordingTitle);
  const recordingCopy = addDefinitions(environment.recordingCopy);
  const excerptTitle = addDefinitions(environment.excerptTitle);
  const excerptCopy = addDefinitions(environment.excerptCopy);
  const excerptLink = environment.excerptLink
    ? `<a class="text-link" href="${environment.excerptLink}">${environment.excerptLinkLabel}</a>`
    : `<span class="status">Candidate to be selected</span>`;

  main.innerHTML = `
    <section class="environment-home-hero">
      <div class="section-inner">
        <a class="page-back" href="../">← All environments</a>
        <div class="environment-title-grid">
          <div>
            <p class="eyebrow">Environment ${environment.number} of 08</p>
            <h1>${environment.title}</h1>
          </div>
          <p class="environment-deck">${deck}</p>
        </div>
      </div>
    </section>

    <section class="summary-strip" aria-labelledby="brief-heading">
      <div class="section-inner summary-grid">
        <h2 class="eyebrow" id="brief-heading">In brief</h2>
        <p>${brief}</p>
      </div>
    </section>

    <section class="page-section" aria-labelledby="original-heading">
      <div class="section-inner environment-content-grid">
        <div>
          <p class="eyebrow">The original environment</p>
          <h2 id="original-heading">${sectionTitle}</h2>
        </div>
        <div class="environment-long-copy">${description}</div>
      </div>
      <div class="section-inner environment-facts" aria-label="Recovered media and planning facts">${facts}</div>
    </section>

    <section class="page-section" aria-labelledby="recording-heading">
      <div class="section-inner environment-media-grid">
        <div class="media-placeholder" aria-label="Emulator recording placeholder">
          <span>Emulator recording</span>
          <strong>Coming next</strong>
          <small>30–60 seconds with sound</small>
        </div>
        <div class="environment-media-copy">
          <p class="eyebrow">See the released work</p>
          <h2 id="recording-heading">${recordingTitle}</h2>
          <p>${recordingCopy}</p>
        </div>
      </div>
    </section>

    <section class="page-section excerpt-section" aria-labelledby="excerpt-heading">
      <div class="section-inner environment-media-grid">
        <div class="excerpt-placeholder" aria-label="Interactive excerpt placeholder">
          <span>Browser excerpt</span>
          <strong>${environment.excerptLink ? "Prototype live" : "In development"}</strong>
          <small>Modern HTML, CSS, and JavaScript</small>
        </div>
        <div class="environment-media-copy">
          <p class="eyebrow">A representative interaction</p>
          <h2 id="excerpt-heading">${excerptTitle}</h2>
          <p>${excerptCopy}</p>
          ${excerptLink}
        </div>
      </div>
    </section>

    <section class="source-strip" aria-labelledby="sources-heading">
      <div class="section-inner source-grid">
        <h2 class="eyebrow" id="sources-heading">Sources in use</h2>
        <p>This first page draws on the <a href="${environment.historicalUrl}">historical Dia CD-ROM page</a>, the recovered media inventory, and project recollection. It will change as the design document and emulator recording are added.</p>
      </div>
    </section>

    <nav class="environment-pagination" aria-label="Environment pages">
      <a href="../${previous.slug}/"><span>Previous environment</span><strong>← ${previous.title}</strong></a>
      <a class="environment-index-link" href="../"><span>All eight</span><strong>Environment index</strong></a>
      <a href="../${next.slug}/"><span>Next environment</span><strong>${next.title} →</strong></a>
    </nav>
  `;
})();

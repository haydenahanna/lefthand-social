// Design Control Panel
// Toggle with Ctrl+Shift+D or click the gear icon

(function() {
  // Create panel HTML
  const panelHTML = `
    <div id="design-panel" class="design-panel">
      <div class="design-panel-header">
        <span>Design Controls</span>
        <span class="dp-page-indicator"></span>
        <button class="design-panel-close">&times;</button>
      </div>
      <div class="design-panel-content">

        <div class="design-panel-section">
          <h4>Background Media</h4>
          <label>
            <span>Type</span>
            <select id="dp-media-type">
              <option value="video" selected>Video</option>
              <option value="image">Image</option>
            </select>
          </label>
          <label>
            <span>Video</span>
            <select id="dp-video-select">
              <option value="images/Cali Stock Video.mp4">Cali Stock Video</option>
              <option value="images/Cali Stock Video 2.mp4">Cali Stock Video 2</option>
              <option value="images/Stock water video.mp4">Stock Water Video</option>
            </select>
          </label>
          <label>
            <span>Image</span>
            <select id="dp-image-select">
              <option value="images/Lawton Smith Hero Image.jpg">Lawton Smith</option>
              <option value="images/Saint Hero Image.jpg">Saint Resort</option>
              <option value="images/OS Hero Image.JPEG">Ocean Surfari</option>
              <option value="images/RS Hero Image.JPEG">Reef Surfari</option>
              <option value="images/Organic Sandwich Hero Image.jpg.webp">Organic Sandwich</option>
            </select>
          </label>
          <label style="margin-top: 8px;">
            <span>Custom URL</span>
            <input type="text" id="dp-custom-url" placeholder="Paste image/video URL" style="flex:1; padding:6px 8px; background:#333; color:#fff; border:1px solid #444; border-radius:4px; font-size:12px;">
          </label>
          <button id="dp-apply-custom" class="dp-button dp-button-secondary" style="margin-top:8px;">Apply Custom URL</button>
        </div>

        <div class="design-panel-section">
          <h4>Video/Image Filters</h4>
          <label>
            <span>Overlay Darkness</span>
            <input type="range" id="dp-overlay" min="0" max="100" value="75">
            <span class="dp-value" id="dp-overlay-val">75%</span>
          </label>
          <label>
            <span>Saturation</span>
            <input type="range" id="dp-saturation" min="0" max="100" value="0">
            <span class="dp-value" id="dp-saturation-val">0%</span>
          </label>
          <label>
            <span>Contrast</span>
            <input type="range" id="dp-contrast" min="50" max="200" value="200">
            <span class="dp-value" id="dp-contrast-val">200%</span>
          </label>
          <label>
            <span>Brightness</span>
            <input type="range" id="dp-brightness" min="50" max="150" value="100">
            <span class="dp-value" id="dp-brightness-val">100%</span>
          </label>
        </div>

        <div class="design-panel-section">
          <h4>Typography</h4>
          <label>
            <span>H1 Weight</span>
            <select id="dp-h1-weight">
              <option value="400">400 (Regular)</option>
              <option value="500">500 (Medium)</option>
              <option value="600" selected>600 (Semi-bold)</option>
              <option value="700">700 (Bold)</option>
            </select>
          </label>
          <label>
            <span>H2 Weight</span>
            <select id="dp-h2-weight">
              <option value="400">400 (Regular)</option>
              <option value="500">500 (Medium)</option>
              <option value="600" selected>600 (Semi-bold)</option>
              <option value="700">700 (Bold)</option>
            </select>
          </label>
          <label>
            <span>H3/H4 Weight</span>
            <select id="dp-h3-weight">
              <option value="400">400 (Regular)</option>
              <option value="500">500 (Medium)</option>
              <option value="600" selected>600 (Semi-bold)</option>
              <option value="700">700 (Bold)</option>
            </select>
          </label>
        </div>

        <div class="design-panel-section">
          <h4>Shadows</h4>
          <label>
            <span>Text Shadow</span>
            <input type="range" id="dp-text-shadow" min="0" max="30" value="10">
            <span class="dp-value" id="dp-text-shadow-val">10px</span>
          </label>
          <label>
            <span>Shadow Opacity</span>
            <input type="range" id="dp-shadow-opacity" min="0" max="100" value="30">
            <span class="dp-value" id="dp-shadow-opacity-val">30%</span>
          </label>
        </div>

        <div class="design-panel-section">
          <h4>Page Images</h4>
          <div id="dp-image-list"></div>
          <p style="font-size:11px; color:#666; margin-top:8px;">Click an image above to edit it</p>
        </div>

        <div class="design-panel-section" id="dp-image-editor" style="display:none;">
          <h4>Edit Image: <span id="dp-selected-image-name"></span></h4>
          <label>
            <span>Replace with</span>
            <select id="dp-replace-image">
              <option value="">-- Select image --</option>
              <option value="images/Lawton Smith Hero Image.jpg">Lawton Smith</option>
              <option value="images/Saint Hero Image.jpg">Saint Resort</option>
              <option value="images/OS Hero Image.JPEG">Ocean Surfari</option>
              <option value="images/RS Hero Image.JPEG">Reef Surfari</option>
              <option value="images/Organic Sandwich Hero Image.jpg.webp">Organic Sandwich</option>
              <option value="images/Vertical Headshot.jpg">Headshot</option>
              <option value="images/Hero Background.jpg">Hero Background</option>
            </select>
          </label>
          <label>
            <span>Custom URL</span>
            <input type="text" id="dp-img-custom-url" placeholder="Paste image URL" style="flex:1; padding:6px 8px; background:#333; color:#fff; border:1px solid #444; border-radius:4px; font-size:12px;">
          </label>
          <label>
            <span>Grayscale</span>
            <input type="range" id="dp-img-grayscale" min="0" max="100" value="0">
            <span class="dp-value" id="dp-img-grayscale-val">0%</span>
          </label>
          <label>
            <span>Contrast</span>
            <input type="range" id="dp-img-contrast" min="50" max="200" value="100">
            <span class="dp-value" id="dp-img-contrast-val">100%</span>
          </label>
          <label>
            <span>Brightness</span>
            <input type="range" id="dp-img-brightness" min="50" max="150" value="100">
            <span class="dp-value" id="dp-img-brightness-val">100%</span>
          </label>
          <label>
            <span>Saturation</span>
            <input type="range" id="dp-img-saturation" min="0" max="200" value="100">
            <span class="dp-value" id="dp-img-saturation-val">100%</span>
          </label>
          <label>
            <span>Tint (Hue)</span>
            <input type="range" id="dp-img-hue" min="0" max="360" value="0">
            <span class="dp-value" id="dp-img-hue-val">0°</span>
          </label>
          <label>
            <span>Warmth</span>
            <input type="range" id="dp-img-warmth" min="0" max="100" value="0">
            <span class="dp-value" id="dp-img-warmth-val">0%</span>
          </label>
          <label>
            <span>Blur</span>
            <input type="range" id="dp-img-blur" min="0" max="10" value="0">
            <span class="dp-value" id="dp-img-blur-val">0px</span>
          </label>
          <button id="dp-apply-img-changes" class="dp-button" style="margin-top:8px;">Apply Changes</button>
          <button id="dp-reset-img" class="dp-button dp-button-secondary">Reset Image</button>
        </div>

        <div class="design-panel-section">
          <h4>Save & Export</h4>
          <button id="dp-save-page" class="dp-button">Save This Page</button>
          <button id="dp-view-saved" class="dp-button dp-button-secondary">View All Saved</button>
          <button id="dp-export-all" class="dp-button dp-button-secondary">Export All CSS</button>
          <button id="dp-clear-saved" class="dp-button dp-button-secondary" style="background:#522; margin-top:4px;">Clear All Saved</button>
        </div>

        <div class="design-panel-section" id="dp-saved-preview" style="display:none;">
          <h4>Saved Pages</h4>
          <div id="dp-saved-list"></div>
        </div>

        <div class="design-panel-section">
          <button id="dp-copy-css" class="dp-button dp-button-secondary">Copy Current Page CSS</button>
          <button id="dp-reset" class="dp-button dp-button-secondary">Reset All</button>
        </div>

      </div>
    </div>
    <button id="design-panel-toggle" class="design-panel-toggle" title="Design Controls (Ctrl+Shift+D)">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    </button>
  `;

  // Create styles
  const styles = `
    <style id="design-panel-styles">
      .hero-image-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
        object-fit: cover;
      }
      .design-panel {
        position: fixed;
        top: 20px;
        right: -320px;
        width: 300px;
        max-height: calc(100vh - 40px);
        background: #1a1a1a;
        color: #fff;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        z-index: 10000;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-size: 13px;
        transition: right 0.3s ease;
        overflow: hidden;
      }
      .design-panel.open {
        right: 20px;
      }
      .design-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        background: #262626;
        font-weight: 600;
        font-size: 14px;
      }
      .design-panel-close {
        background: none;
        border: none;
        color: #888;
        font-size: 24px;
        cursor: pointer;
        line-height: 1;
      }
      .design-panel-close:hover {
        color: #fff;
      }
      .dp-page-indicator {
        background: #444;
        padding: 3px 8px;
        border-radius: 4px;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #aaa;
      }
      .design-panel-content {
        padding: 15px 20px;
        max-height: calc(100vh - 120px);
        overflow-y: auto;
      }
      .design-panel-section {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #333;
      }
      .design-panel-section:last-child {
        border-bottom: none;
        margin-bottom: 0;
      }
      .design-panel-section h4 {
        margin: 0 0 12px 0;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #888;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }
      .design-panel label {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 10px;
        gap: 8px;
      }
      .design-panel label span:first-child {
        flex: 1;
        min-width: 100px;
      }
      .design-panel input[type="range"] {
        flex: 1;
        min-width: 80px;
        height: 4px;
        -webkit-appearance: none;
        background: #444;
        border-radius: 2px;
        cursor: pointer;
      }
      .design-panel input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 14px;
        height: 14px;
        background: #fff;
        border-radius: 50%;
        cursor: pointer;
      }
      .design-panel select {
        flex: 1;
        padding: 6px 8px;
        background: #333;
        color: #fff;
        border: 1px solid #444;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
      }
      .dp-value {
        width: 45px;
        text-align: right;
        font-size: 11px;
        color: #888;
        font-variant-numeric: tabular-nums;
      }
      .dp-button {
        width: 100%;
        padding: 10px;
        margin-bottom: 8px;
        background: #fff;
        color: #1a1a1a;
        border: none;
        border-radius: 6px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: opacity 0.2s;
      }
      .dp-button:hover {
        opacity: 0.9;
      }
      .dp-button-secondary {
        background: #333;
        color: #fff;
      }
      .dp-image-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
      }
      .dp-image-thumb {
        aspect-ratio: 1;
        background: #333;
        border-radius: 4px;
        overflow: hidden;
        cursor: pointer;
        border: 2px solid transparent;
        transition: border-color 0.2s;
        position: relative;
      }
      .dp-image-thumb:hover {
        border-color: #666;
      }
      .dp-image-thumb.selected {
        border-color: #fff;
      }
      .dp-image-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .dp-image-thumb-label {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,0.7);
        font-size: 9px;
        padding: 2px 4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .dp-no-images {
        color: #666;
        font-size: 12px;
        text-align: center;
        padding: 20px;
      }
      .dp-empty-slot {
        background: #222;
        border: 2px dashed #444;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .dp-empty-slot:hover {
        border-color: #666;
        background: #2a2a2a;
      }
      .dp-empty-icon {
        font-size: 24px;
        color: #555;
        margin-bottom: 4px;
      }
      .design-panel-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #1a1a1a;
        color: #fff;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        transition: transform 0.2s;
      }
      .design-panel-toggle:hover {
        transform: scale(1.1);
      }
    </style>
  `;

  // Inject into page
  document.head.insertAdjacentHTML('beforeend', styles);
  document.body.insertAdjacentHTML('beforeend', panelHTML);

  // Get elements
  const panel = document.getElementById('design-panel');
  const toggle = document.getElementById('design-panel-toggle');
  const closeBtn = document.querySelector('.design-panel-close');

  // Toggle panel
  function togglePanel() {
    panel.classList.toggle('open');
  }

  toggle.addEventListener('click', togglePanel);
  closeBtn.addEventListener('click', togglePanel);

  // Set page indicator
  const pageIndicator = document.querySelector('.dp-page-indicator');
  if (pageIndicator) {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    const pageName = filename.replace('.html', '');
    const pageNames = {
      'index': 'Home',
      'about': 'About',
      'services': 'Services',
      'portfolio': 'Portfolio',
      'contact': 'Contact'
    };
    pageIndicator.textContent = pageNames[pageName] || pageName;
  }

  // Keyboard shortcut
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
      e.preventDefault();
      togglePanel();
    }
  });

  // Control handlers
  const controls = {
    mediaType: document.getElementById('dp-media-type'),
    videoSelect: document.getElementById('dp-video-select'),
    imageSelect: document.getElementById('dp-image-select'),
    customUrl: document.getElementById('dp-custom-url'),
    overlay: document.getElementById('dp-overlay'),
    saturation: document.getElementById('dp-saturation'),
    contrast: document.getElementById('dp-contrast'),
    brightness: document.getElementById('dp-brightness'),
    h1Weight: document.getElementById('dp-h1-weight'),
    h2Weight: document.getElementById('dp-h2-weight'),
    h3Weight: document.getElementById('dp-h3-weight'),
    textShadow: document.getElementById('dp-text-shadow'),
    shadowOpacity: document.getElementById('dp-shadow-opacity')
  };

  // Update functions
  function updateOverlay() {
    const overlays = document.querySelectorAll('.hero-overlay, .cta-overlay');
    const opacity = controls.overlay.value / 100;

    overlays.forEach(overlay => {
      overlay.style.backgroundColor = `rgba(26, 26, 26, ${opacity})`;
    });

    document.getElementById('dp-overlay-val').textContent = controls.overlay.value + '%';
  }

  function updateTypography() {
    document.documentElement.style.setProperty('--h1-weight', controls.h1Weight.value);
    document.documentElement.style.setProperty('--h2-weight', controls.h2Weight.value);
    document.documentElement.style.setProperty('--h3-weight', controls.h3Weight.value);

    document.querySelectorAll('h1').forEach(el => el.style.fontWeight = controls.h1Weight.value);
    document.querySelectorAll('h2').forEach(el => el.style.fontWeight = controls.h2Weight.value);
    document.querySelectorAll('h3, h4').forEach(el => el.style.fontWeight = controls.h3Weight.value);
  }

  function updateShadows() {
    const blur = controls.textShadow.value;
    const opacity = controls.shadowOpacity.value / 100;
    const shadow = `0 2px ${blur}px rgba(0, 0, 0, ${opacity})`;

    document.querySelectorAll('.hero-video .hero-content, .cta-video h2, .cta-video p, .section-transparent h2, .section-transparent p').forEach(el => {
      el.style.textShadow = shadow;
    });

    document.getElementById('dp-text-shadow-val').textContent = blur + 'px';
    document.getElementById('dp-shadow-opacity-val').textContent = controls.shadowOpacity.value + '%';
  }

  // Media switching functions
  function updateMediaType() {
    const type = controls.mediaType.value;
    const heroSections = document.querySelectorAll('.hero-video');

    heroSections.forEach(section => {
      let video = section.querySelector('.hero-video-bg');
      let img = section.querySelector('.hero-image-bg');

      if (type === 'video') {
        if (img) img.style.display = 'none';
        if (video) video.style.display = 'block';
        if (!video) {
          // Create video element if it doesn't exist
          video = document.createElement('video');
          video.className = 'hero-video-bg';
          video.autoplay = true;
          video.muted = true;
          video.loop = true;
          video.playsInline = true;
          video.innerHTML = `<source src="${controls.videoSelect.value}" type="video/mp4">`;
          section.insertBefore(video, section.firstChild);
          updateFilters();
        }
      } else {
        if (video) video.style.display = 'none';
        if (!img) {
          // Create image element if it doesn't exist
          img = document.createElement('img');
          img.className = 'hero-image-bg';
          img.src = controls.imageSelect.value;
          img.alt = 'Background';
          section.insertBefore(img, section.firstChild);
        }
        img.style.display = 'block';
        updateFilters();
      }
    });
  }

  function switchVideo(src) {
    const videos = document.querySelectorAll('.hero-video-bg');
    videos.forEach(video => {
      const source = video.querySelector('source');
      if (source) {
        source.src = src;
      } else {
        video.innerHTML = `<source src="${src}" type="video/mp4">`;
      }
      video.load();
      video.play();
    });
  }

  function switchImage(src) {
    let imgs = document.querySelectorAll('.hero-image-bg');
    if (imgs.length === 0) {
      // Create image elements in hero sections
      document.querySelectorAll('.hero-video').forEach(section => {
        const img = document.createElement('img');
        img.className = 'hero-image-bg';
        img.src = src;
        img.alt = 'Background';
        img.style.display = controls.mediaType.value === 'image' ? 'block' : 'none';
        section.insertBefore(img, section.firstChild);
      });
      imgs = document.querySelectorAll('.hero-image-bg');
    }
    imgs.forEach(img => {
      img.src = src;
    });
    updateFilters();
  }

  function updateFilters() {
    const saturation = controls.saturation.value / 100;
    const contrast = controls.contrast.value / 100;
    const brightness = controls.brightness.value / 100;
    const filterValue = `grayscale(${100 - controls.saturation.value}%) contrast(${contrast}) brightness(${brightness})`;

    document.querySelectorAll('.hero-video-bg, .hero-image-bg').forEach(el => {
      el.style.filter = filterValue;
    });

    document.getElementById('dp-saturation-val').textContent = controls.saturation.value + '%';
    document.getElementById('dp-contrast-val').textContent = controls.contrast.value + '%';
    document.getElementById('dp-brightness-val').textContent = controls.brightness.value + '%';
  }

  function applyCustomUrl() {
    const url = controls.customUrl.value.trim();
    if (!url) return;

    const isVideo = url.match(/\.(mp4|mov|webm)$/i);
    if (isVideo) {
      controls.mediaType.value = 'video';
      updateMediaType();
      switchVideo(url);
    } else {
      controls.mediaType.value = 'image';
      updateMediaType();
      switchImage(url);
    }
  }

  // Event listeners
  controls.mediaType.addEventListener('change', updateMediaType);
  controls.videoSelect.addEventListener('change', () => {
    if (controls.mediaType.value === 'video') {
      switchVideo(controls.videoSelect.value);
    }
  });
  controls.imageSelect.addEventListener('change', () => {
    if (controls.mediaType.value === 'image') {
      switchImage(controls.imageSelect.value);
    } else {
      controls.mediaType.value = 'image';
      updateMediaType();
      switchImage(controls.imageSelect.value);
    }
  });
  document.getElementById('dp-apply-custom').addEventListener('click', applyCustomUrl);
  controls.customUrl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') applyCustomUrl();
  });

  controls.overlay.addEventListener('input', updateOverlay);
  controls.saturation.addEventListener('input', updateFilters);
  controls.contrast.addEventListener('input', updateFilters);
  controls.brightness.addEventListener('input', updateFilters);
  controls.h1Weight.addEventListener('change', updateTypography);
  controls.h2Weight.addEventListener('change', updateTypography);
  controls.h3Weight.addEventListener('change', updateTypography);
  controls.textShadow.addEventListener('input', updateShadows);
  controls.shadowOpacity.addEventListener('input', updateShadows);

  // Detect current page
  function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    const pageName = filename.replace('.html', '');
    const pageNames = {
      'index': 'Home',
      'about': 'About',
      'services': 'Services',
      'portfolio': 'Portfolio',
      'contact': 'Contact'
    };
    return pageNames[pageName] || pageName;
  }

  // Copy CSS
  document.getElementById('dp-copy-css').addEventListener('click', () => {
    const pageName = getCurrentPage();
    const mediaSrc = controls.mediaType.value === 'video' ? controls.videoSelect.value : controls.imageSelect.value;
    const customUrl = controls.customUrl.value.trim();
    const css = `/* ===================== */
/* PAGE: ${pageName.toUpperCase()} ONLY */
/* ===================== */

/* Background Media */
/* Type: ${controls.mediaType.value} */
/* Source: ${customUrl || mediaSrc} */

/* Filters (for ${pageName} page) */
.hero-video-bg, .hero-image-bg {
  filter: grayscale(${100 - controls.saturation.value}%) contrast(${controls.contrast.value / 100}) brightness(${controls.brightness.value / 100});
}

.hero-overlay, .cta-overlay {
  background-color: rgba(26, 26, 26, ${controls.overlay.value / 100});
}

/* Typography */
h1 { font-weight: ${controls.h1Weight.value}; }
h2 { font-weight: ${controls.h2Weight.value}; }
h3, h4 { font-weight: ${controls.h3Weight.value}; }

/* Shadows */
/* text-shadow: 0 2px ${controls.textShadow.value}px rgba(0, 0, 0, ${controls.shadowOpacity.value / 100}); */

/* ===== EDITED IMAGES ===== */
${getEditedImagesCSS()}`;

    navigator.clipboard.writeText(css).then(() => {
      const btn = document.getElementById('dp-copy-css');
      btn.textContent = 'Copied!';
      setTimeout(() => btn.textContent = 'Copy CSS Values', 2000);
    });
  });

  // ===== PAGE IMAGES EDITOR =====
  let selectedImage = null;
  const imageList = document.getElementById('dp-image-list');
  const imageEditor = document.getElementById('dp-image-editor');
  const imgControls = {
    replace: document.getElementById('dp-replace-image'),
    customUrl: document.getElementById('dp-img-custom-url'),
    grayscale: document.getElementById('dp-img-grayscale'),
    contrast: document.getElementById('dp-img-contrast'),
    brightness: document.getElementById('dp-img-brightness'),
    blur: document.getElementById('dp-img-blur')
  };

  // Find all content images (not logos, icons, etc.)
  function getEditableImages() {
    const allImages = document.querySelectorAll('img');
    return Array.from(allImages).filter(img => {
      // Exclude nav logos, footer logos, and panel images
      if (img.closest('.nav-logo')) return false;
      if (img.closest('.footer-logo')) return false;
      if (img.closest('.design-panel')) return false;
      if (img.classList.contains('hero-image-bg')) return false;
      // Include content images
      return true;
    });
  }

  // Find empty image placeholder slots
  function getEmptyPlaceholders() {
    const placeholders = document.querySelectorAll('.about-image, .card-image, .portfolio-item');
    return Array.from(placeholders).filter(el => {
      // Check if it has no img child or only a comment
      const hasImage = el.querySelector('img');
      return !hasImage;
    });
  }

  // Get CSS for edited images
  function getEditedImagesCSS() {
    const images = getEditableImages();
    let css = '';

    images.forEach((img, index) => {
      if (img.style.filter || img.src !== img.dataset.originalSrc) {
        const name = img.alt || `Image ${index + 1}`;
        css += `/* ${name} */\n`;
        if (img.src !== img.dataset.originalSrc) {
          css += `/* New source: ${img.src} */\n`;
        }
        if (img.style.filter) {
          css += `/* Filter: ${img.style.filter} */\n`;
        }
        css += '\n';
      }
    });

    return css || '/* No images edited */';
  }

  // Store original image sources
  function storeOriginalSources() {
    const images = getEditableImages();
    images.forEach(img => {
      if (!img.dataset.originalSrc) {
        img.dataset.originalSrc = img.src;
      }
    });
  }
  storeOriginalSources();

  // Build image list
  function buildImageList() {
    const images = getEditableImages();
    const emptySlots = getEmptyPlaceholders();

    if (images.length === 0 && emptySlots.length === 0) {
      imageList.innerHTML = '<div class="dp-no-images">No editable images on this page</div>';
      return;
    }

    let html = '<div class="dp-image-grid">';

    // Show existing images
    images.forEach((img, index) => {
      const name = img.alt || img.src.split('/').pop().substring(0, 15);
      img.dataset.dpIndex = index;
      img.dataset.dpType = 'image';
      html += `
        <div class="dp-image-thumb" data-index="${index}" data-type="image">
          <img src="${img.src}" alt="">
          <div class="dp-image-thumb-label">${name}</div>
        </div>
      `;
    });

    // Show empty placeholders
    emptySlots.forEach((slot, index) => {
      slot.dataset.dpSlotIndex = index;
      // Try to determine a name from nearby heading or section
      let name = 'Empty Slot';
      const nearbyHeading = slot.closest('section')?.querySelector('h2, h3');
      if (nearbyHeading) {
        name = nearbyHeading.textContent.substring(0, 15);
      }
      html += `
        <div class="dp-image-thumb dp-empty-slot" data-slot-index="${index}" data-type="slot">
          <div class="dp-empty-icon">+</div>
          <div class="dp-image-thumb-label">${name}</div>
        </div>
      `;
    });

    html += '</div>';
    imageList.innerHTML = html;

    // Add click handlers for images
    imageList.querySelectorAll('.dp-image-thumb[data-type="image"]').forEach(thumb => {
      thumb.addEventListener('click', () => selectImage(parseInt(thumb.dataset.index)));
    });

    // Add click handlers for empty slots
    imageList.querySelectorAll('.dp-image-thumb[data-type="slot"]').forEach(thumb => {
      thumb.addEventListener('click', () => selectEmptySlot(parseInt(thumb.dataset.slotIndex)));
    });
  }

  let selectedSlot = null;

  // Select an empty slot to add an image
  function selectEmptySlot(index) {
    const slots = getEmptyPlaceholders();
    selectedSlot = slots[index];
    selectedImage = null;

    if (!selectedSlot) return;

    // Update UI
    imageList.querySelectorAll('.dp-image-thumb').forEach(t => t.classList.remove('selected'));
    imageList.querySelector(`[data-slot-index="${index}"]`).classList.add('selected');

    // Show editor with slot-specific options
    imageEditor.style.display = 'block';
    const nearbyHeading = selectedSlot.closest('section')?.querySelector('h2, h3');
    document.getElementById('dp-selected-image-name').textContent = nearbyHeading ? nearbyHeading.textContent : 'Empty Slot';

    // Reset filter controls
    imgControls.grayscale.value = 0;
    imgControls.contrast.value = 100;
    imgControls.brightness.value = 100;
    imgControls.blur.value = 0;
    updateImgValueDisplays();
  }

  // Select an image for editing
  function selectImage(index) {
    const images = getEditableImages();
    selectedImage = images[index];
    selectedSlot = null;

    if (!selectedImage) return;

    // Update UI
    imageList.querySelectorAll('.dp-image-thumb').forEach(t => t.classList.remove('selected'));
    imageList.querySelector(`[data-index="${index}"][data-type="image"]`).classList.add('selected');

    // Show editor
    imageEditor.style.display = 'block';
    document.getElementById('dp-selected-image-name').textContent = selectedImage.alt || 'Image ' + (index + 1);

    // Parse current filter values
    const currentFilter = selectedImage.style.filter || '';
    const grayscaleMatch = currentFilter.match(/grayscale\((\d+)%\)/);
    const contrastMatch = currentFilter.match(/contrast\(([\d.]+)\)/);
    const brightnessMatch = currentFilter.match(/brightness\(([\d.]+)\)/);
    const blurMatch = currentFilter.match(/blur\((\d+)px\)/);

    imgControls.grayscale.value = grayscaleMatch ? parseInt(grayscaleMatch[1]) : 0;
    imgControls.contrast.value = contrastMatch ? Math.round(parseFloat(contrastMatch[1]) * 100) : 100;
    imgControls.brightness.value = brightnessMatch ? Math.round(parseFloat(brightnessMatch[1]) * 100) : 100;
    imgControls.blur.value = blurMatch ? parseInt(blurMatch[1]) : 0;

    updateImgValueDisplays();
  }

  function updateImgValueDisplays() {
    document.getElementById('dp-img-grayscale-val').textContent = imgControls.grayscale.value + '%';
    document.getElementById('dp-img-contrast-val').textContent = imgControls.contrast.value + '%';
    document.getElementById('dp-img-brightness-val').textContent = imgControls.brightness.value + '%';
    document.getElementById('dp-img-blur-val').textContent = imgControls.blur.value + 'px';
  }

  function applyImgFilter() {
    if (!selectedImage || selectedSlot) return;

    const grayscale = imgControls.grayscale.value;
    const contrast = imgControls.contrast.value / 100;
    const brightness = imgControls.brightness.value / 100;
    const blur = imgControls.blur.value;

    let filter = '';
    if (grayscale > 0) filter += `grayscale(${grayscale}%) `;
    if (contrast !== 1) filter += `contrast(${contrast}) `;
    if (brightness !== 1) filter += `brightness(${brightness}) `;
    if (blur > 0) filter += `blur(${blur}px)`;

    selectedImage.style.filter = filter.trim();
    updateImgValueDisplays();

    // Update thumbnail
    const index = selectedImage.dataset.dpIndex;
    const thumb = imageList.querySelector(`[data-index="${index}"] img`);
    if (thumb) thumb.style.filter = filter.trim();
  }

  // Add image to slot or replace existing image
  function addOrReplaceImage(src) {
    if (selectedSlot) {
      // Add new image to empty slot
      const img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      selectedSlot.innerHTML = '';
      selectedSlot.appendChild(img);
      // Now select the new image for editing
      buildImageList();
      const images = getEditableImages();
      const newIndex = images.findIndex(i => i === img);
      if (newIndex >= 0) selectImage(newIndex);
    } else if (selectedImage) {
      // Replace existing image
      selectedImage.src = src;
      buildImageList();
    }
  }

  // Replace image
  imgControls.replace.addEventListener('change', () => {
    if ((!selectedImage && !selectedSlot) || !imgControls.replace.value) return;
    addOrReplaceImage(imgControls.replace.value);
    imgControls.replace.value = '';
  });

  // Custom URL
  imgControls.customUrl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && (selectedImage || selectedSlot) && imgControls.customUrl.value.trim()) {
      addOrReplaceImage(imgControls.customUrl.value.trim());
      imgControls.customUrl.value = '';
    }
  });

  // Filter controls
  imgControls.grayscale.addEventListener('input', applyImgFilter);
  imgControls.contrast.addEventListener('input', applyImgFilter);
  imgControls.brightness.addEventListener('input', applyImgFilter);
  imgControls.blur.addEventListener('input', applyImgFilter);

  // Apply button
  document.getElementById('dp-apply-img-changes').addEventListener('click', () => {
    if (imgControls.customUrl.value.trim() && (selectedImage || selectedSlot)) {
      addOrReplaceImage(imgControls.customUrl.value.trim());
      imgControls.customUrl.value = '';
    }
  });

  // Reset single image
  document.getElementById('dp-reset-img').addEventListener('click', () => {
    if (!selectedImage) return;
    selectedImage.style.filter = '';
    imgControls.grayscale.value = 0;
    imgControls.contrast.value = 100;
    imgControls.brightness.value = 100;
    imgControls.blur.value = 0;
    updateImgValueDisplays();

    const index = selectedImage.dataset.dpIndex;
    const thumb = imageList.querySelector(`[data-index="${index}"] img`);
    if (thumb) thumb.style.filter = '';
  });

  // Initialize image list
  buildImageList();

  // ===== SAVE & EXPORT FUNCTIONALITY =====
  const STORAGE_KEY = 'lefthand-design-settings';

  function getPageKey() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    return filename.replace('.html', '');
  }

  function getAllSavedSettings() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function savePageSettings() {
    const pageKey = getPageKey();
    const pageName = getCurrentPage();
    const settings = getAllSavedSettings();

    // Gather current settings
    const pageSettings = {
      pageName: pageName,
      savedAt: new Date().toISOString(),
      background: {
        type: controls.mediaType.value,
        source: controls.mediaType.value === 'video' ? controls.videoSelect.value : controls.imageSelect.value,
        customUrl: controls.customUrl.value.trim()
      },
      filters: {
        overlay: controls.overlay.value,
        saturation: controls.saturation.value,
        contrast: controls.contrast.value,
        brightness: controls.brightness.value
      },
      typography: {
        h1Weight: controls.h1Weight.value,
        h2Weight: controls.h2Weight.value,
        h3Weight: controls.h3Weight.value
      },
      shadows: {
        textShadow: controls.textShadow.value,
        shadowOpacity: controls.shadowOpacity.value
      },
      images: []
    };

    // Save edited images
    const images = getEditableImages();
    images.forEach((img, index) => {
      if (img.style.filter || img.src !== img.dataset.originalSrc) {
        pageSettings.images.push({
          index: index,
          alt: img.alt,
          originalSrc: img.dataset.originalSrc,
          currentSrc: img.src,
          filter: img.style.filter
        });
      }
    });

    settings[pageKey] = pageSettings;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));

    // Visual feedback
    const btn = document.getElementById('dp-save-page');
    btn.textContent = 'Saved!';
    btn.style.background = '#2a5';
    setTimeout(() => {
      btn.textContent = 'Save This Page';
      btn.style.background = '';
    }, 2000);
  }

  function showSavedSettings() {
    const settings = getAllSavedSettings();
    const preview = document.getElementById('dp-saved-preview');
    const list = document.getElementById('dp-saved-list');

    if (Object.keys(settings).length === 0) {
      list.innerHTML = '<div style="color:#666; font-size:12px;">No saved settings yet</div>';
    } else {
      let html = '';
      for (const [key, data] of Object.entries(settings)) {
        const date = new Date(data.savedAt).toLocaleDateString();
        html += `
          <div style="background:#333; padding:8px; border-radius:4px; margin-bottom:6px;">
            <div style="font-weight:600;">${data.pageName}</div>
            <div style="font-size:11px; color:#888;">Saved: ${date}</div>
            <div style="font-size:11px; color:#888;">Background: ${data.background.type}</div>
            <div style="font-size:11px; color:#888;">Images edited: ${data.images.length}</div>
          </div>
        `;
      }
      list.innerHTML = html;
    }

    preview.style.display = preview.style.display === 'none' ? 'block' : 'none';
  }

  function exportAllCSS() {
    const settings = getAllSavedSettings();

    if (Object.keys(settings).length === 0) {
      alert('No saved settings to export. Save some pages first!');
      return;
    }

    let css = `/* ================================= */
/* LEFTHAND SOCIAL - EXPORTED CSS   */
/* Generated: ${new Date().toLocaleString()} */
/* ================================= */\n\n`;

    for (const [pageKey, data] of Object.entries(settings)) {
      css += `/* ===== ${data.pageName.toUpperCase()} PAGE ===== */\n`;
      css += `/* Background: ${data.background.type} - ${data.background.customUrl || data.background.source} */\n\n`;

      css += `/* ${data.pageName} - Filters */\n`;
      css += `.page-${pageKey} .hero-video-bg,\n`;
      css += `.page-${pageKey} .hero-image-bg {\n`;
      css += `  filter: grayscale(${100 - data.filters.saturation}%) contrast(${data.filters.contrast / 100}) brightness(${data.filters.brightness / 100});\n`;
      css += `}\n\n`;

      css += `.page-${pageKey} .hero-overlay,\n`;
      css += `.page-${pageKey} .cta-overlay {\n`;
      css += `  background-color: rgba(26, 26, 26, ${data.filters.overlay / 100});\n`;
      css += `}\n\n`;

      if (data.images.length > 0) {
        css += `/* ${data.pageName} - Edited Images */\n`;
        data.images.forEach(img => {
          css += `/* Image: ${img.alt || 'unnamed'} */\n`;
          if (img.currentSrc !== img.originalSrc) {
            css += `/* New source: ${img.currentSrc} */\n`;
          }
          if (img.filter) {
            css += `/* Filter: ${img.filter} */\n`;
          }
        });
        css += '\n';
      }

      css += '\n';
    }

    // Copy to clipboard
    navigator.clipboard.writeText(css).then(() => {
      const btn = document.getElementById('dp-export-all');
      btn.textContent = 'Copied to Clipboard!';
      setTimeout(() => btn.textContent = 'Export All CSS', 2000);
    });
  }

  function clearAllSaved() {
    if (confirm('Are you sure you want to clear all saved settings?')) {
      localStorage.removeItem(STORAGE_KEY);
      const btn = document.getElementById('dp-clear-saved');
      btn.textContent = 'Cleared!';
      setTimeout(() => btn.textContent = 'Clear All Saved', 2000);
      document.getElementById('dp-saved-preview').style.display = 'none';
    }
  }

  // Load saved settings for current page
  function loadPageSettings() {
    const pageKey = getPageKey();
    const settings = getAllSavedSettings();
    const pageSettings = settings[pageKey];

    if (!pageSettings) return;

    // Restore background settings
    if (pageSettings.background) {
      controls.mediaType.value = pageSettings.background.type;
      if (pageSettings.background.type === 'video') {
        controls.videoSelect.value = pageSettings.background.source;
        switchVideo(pageSettings.background.source);
      } else {
        controls.imageSelect.value = pageSettings.background.source;
        updateMediaType();
        switchImage(pageSettings.background.customUrl || pageSettings.background.source);
      }
      if (pageSettings.background.customUrl) {
        controls.customUrl.value = pageSettings.background.customUrl;
      }
    }

    // Restore filter settings
    if (pageSettings.filters) {
      controls.overlay.value = pageSettings.filters.overlay;
      controls.saturation.value = pageSettings.filters.saturation;
      controls.contrast.value = pageSettings.filters.contrast;
      controls.brightness.value = pageSettings.filters.brightness;
      updateOverlay();
      updateFilters();
    }

    // Restore typography
    if (pageSettings.typography) {
      controls.h1Weight.value = pageSettings.typography.h1Weight;
      controls.h2Weight.value = pageSettings.typography.h2Weight;
      controls.h3Weight.value = pageSettings.typography.h3Weight;
      updateTypography();
    }

    // Restore shadows
    if (pageSettings.shadows) {
      controls.textShadow.value = pageSettings.shadows.textShadow;
      controls.shadowOpacity.value = pageSettings.shadows.shadowOpacity;
      updateShadows();
    }

    // Restore edited images
    if (pageSettings.images && pageSettings.images.length > 0) {
      const images = getEditableImages();
      pageSettings.images.forEach(savedImg => {
        const img = images[savedImg.index];
        if (img) {
          if (savedImg.currentSrc && savedImg.currentSrc !== savedImg.originalSrc) {
            img.src = savedImg.currentSrc;
          }
          if (savedImg.filter) {
            img.style.filter = savedImg.filter;
          }
        }
      });
      buildImageList();
    }

    console.log(`Loaded saved settings for ${pageSettings.pageName}`);
  }

  // Auto-load on page ready
  loadPageSettings();

  // Save & Export event listeners
  document.getElementById('dp-save-page').addEventListener('click', savePageSettings);
  document.getElementById('dp-view-saved').addEventListener('click', showSavedSettings);
  document.getElementById('dp-export-all').addEventListener('click', exportAllCSS);
  document.getElementById('dp-clear-saved').addEventListener('click', clearAllSaved);

  // Reset
  document.getElementById('dp-reset').addEventListener('click', () => {
    controls.overlay.value = 75;
    controls.saturation.value = 0;
    controls.contrast.value = 200;
    controls.brightness.value = 100;
    controls.h1Weight.value = '600';
    controls.h2Weight.value = '600';
    controls.h3Weight.value = '600';
    controls.textShadow.value = 10;
    controls.shadowOpacity.value = 30;

    updateOverlay();
    updateVideo();
    updateTypography();
    updateShadows();
  });

})();

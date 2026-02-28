// Workspace Pro v3.4.0 - Brave/Chrome Compatible Dashboard Script

// Icon System - SVG Icons
const ICONS = {
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="3"/><path d="M16 7V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7"/><line x1="2" y1="12" x2="22" y2="12" opacity="0.5" stroke-width="1"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10.5z"/><polyline points="9 22 9 13 15 13 15 22"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><circle cx="16.5" cy="7.5" r="1" fill="currentColor" stroke="none"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  tool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/><circle cx="8.5" cy="9" r="1.2" fill="currentColor" stroke="none"/><circle cx="13.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/><circle cx="17" cy="10.5" r="1.2" fill="currentColor" stroke="none"/><circle cx="6.5" cy="13" r="1.2" fill="currentColor" stroke="none"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="7" x2="16" y2="7" stroke-width="1" opacity="0.5"/><line x1="8" y1="11" x2="13" y2="11" stroke-width="1" opacity="0.5"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  laptop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><rect x="6" y="7" width="5" height="3" rx="1" stroke-width="1" opacity="0.5"/><line x1="13" y1="8" x2="16" y2="8" stroke-width="1" opacity="0.5"/><line x1="13" y1="10.5" x2="15" y2="10.5" stroke-width="1" opacity="0.5"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="2" y1="8" x2="22" y2="8" stroke-width="0.75" opacity="0.35"/><line x1="2" y1="16" x2="22" y2="16" stroke-width="0.75" opacity="0.35"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><line x1="12" y1="14" x2="12" y2="18" stroke-width="1" opacity="0.5"/><polyline points="10 16 12 18 14 16" stroke-width="1" opacity="0.5"/></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="6" y1="14" x2="12" y2="14" stroke-width="1" opacity="0.5"/><line x1="6" y1="11" x2="10" y2="11" stroke-width="1" opacity="0.5"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><rect x="7" y="14" width="2" height="2" rx="0.5" fill="currentColor" stroke="none"/><rect x="11" y="14" width="2" height="2" rx="0.5" fill="currentColor" stroke="none"/><rect x="15" y="14" width="2" height="2" rx="0.5" fill="currentColor" stroke="none"/></svg>'
};

function getIconHTML(iconName) {
  return ICONS[iconName] || ICONS.briefcase;
}

// =====================================================
// Theme System
// =====================================================
const ALL_THEMES = ['theme-matrix', 'theme-blood-moon', 'theme-void-red', 'theme-inferno'];

function applyTheme(themeClass) {
  document.body.classList.remove(...ALL_THEMES);
  if (themeClass) document.body.classList.add(themeClass);
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === themeClass);
  });
}

async function saveTheme(themeClass) {
  state.theme = themeClass;
  applyTheme(themeClass);
  try {
    await chrome.storage.local.set({ theme: themeClass });
  } catch (e) {
    console.error('Theme save error:', e);
  }
}

// Migration: Convert old emoji icons to new icon names
function migrateIcon(oldIcon) {
  const mapping = {
    '': 'briefcase',
    '': 'home',
    '': 'rocket',
    '': 'zap',
    '': 'tool',
    '': 'palette',
    '': 'book',
    '': 'target',
    '': 'laptop',
    '': 'globe',
    '': 'cloud',
    '': 'cloud',
    '': 'folder',
    '': 'link',
    '': 'calendar'
  };
  return mapping[oldIcon] || oldIcon;
}

// State Management
const state = {
  workspaces: [],
  sessionHistory: [],
  currentWorkspaceId: null,
  currentView: 'home',
  editingWorkspace: null,
  editingCollection: null,
  editingTab: null,
  editingNote: null,
  currentCollectionId: null,
  selectedIcon: 'briefcase',
  selectedColor: '#667eea',
  currentTabs: [],
  contextMenuTab: null,
  addToCollectionTab: null,
  searchResults: [],
  tabPreviewTimeout: null,
  currentSessionId: null,
  widgets: [],
  widgetRegistry: {},
  editingWidgetId: null,
  theme: ''
};

// Tab Category Definitions for Auto-Grouping
const TAB_CATEGORIES = [
  { name: 'Development', color: 'blue', keywords: ['github', 'gitlab', 'stackoverflow', 'stackexchange', 'localhost', 'npm', 'npmjs', 'docs.rs', 'developer.', 'devdocs', 'mdn', 'codepen', 'jsfiddle', 'codesandbox', 'vercel', 'netlify', 'heroku', 'docker', 'vscode'] },
  { name: 'Social Media', color: 'pink', keywords: ['twitter', 'x.com', 'facebook', 'instagram', 'reddit', 'linkedin', 'tiktok', 'mastodon', 'threads.net', 'bsky.app'] },
  { name: 'Entertainment', color: 'purple', keywords: ['youtube', 'netflix', 'spotify', 'twitch', 'disneyplus', 'disney+', 'primevideo', 'crunchyroll', 'soundcloud', 'vimeo'] },
  { name: 'Shopping', color: 'yellow', keywords: ['amazon', 'ebay', 'zalando', 'otto', 'mediamarkt', 'saturn', 'shop', 'cart', 'checkout', 'store', 'kaufen', 'bestellen'] },
  { name: 'Communication', color: 'green', keywords: ['gmail', 'outlook', 'mail', 'slack', 'teams', 'zoom', 'whatsapp', 'telegram', 'discord', 'signal', 'skype'] },
  { name: 'News', color: 'red', keywords: ['spiegel', 'zeit.de', 'bbc', 'cnn', 'heise', 'golem', 'techcrunch', 'theverge', 'arstechnica', 'tagesschau', 'reuters', 'news'] },
  { name: 'Productivity', color: 'cyan', keywords: ['docs.google', 'notion', 'trello', 'figma', 'canva', 'drive.google', 'sheets.google', 'airtable', 'asana', 'jira', 'confluence', 'miro'] },
  { name: 'Research', color: 'blue', keywords: ['wikipedia', 'arxiv', 'scholar.google', 'chatgpt', 'claude.ai', 'perplexity', 'wolframalpha', 'deepl', 'translate'] },
  { name: 'Sonstiges', color: 'grey', keywords: [] }
];

// Google Drive Backup Settings - ERWEITERT für Brave
const driveBackupSettings = {
  enabled: false,
  autoBackup: false,
  fileId: null,
  lastBackup: null,
  lastRestore: null,
  accessToken: null,    // Token-Speicherung für Brave
  tokenExpiry: null     // Token-Ablaufzeit
};

let driveAutoBackupTimer = null;

// =====================================================
// OAUTH CONFIGURATION - BRAVE KOMPATIBEL
// =====================================================
const __wpManifest = chrome.runtime.getManifest();
const OAUTH_CONFIG = {
  clientId: (__wpManifest.oauth2 && __wpManifest.oauth2.client_id) || '',
  scopes: (__wpManifest.oauth2 && __wpManifest.oauth2.scopes) || ['https://www.googleapis.com/auth/drive.appdata'],
  authEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth'
};

async function getBrowserType() {
  // Check for Brave first using the navigator.brave API
  if (navigator.brave && await navigator.brave.isBrave()) {
    return 'brave';
  }

  const ua = navigator.userAgent;
  if (ua.includes('Edg/')) return 'edge';
  if (ua.includes('OPR/') || ua.includes('Opera')) return 'opera';

  // Only return 'chrome' for actual Google Chrome
  // Chromium-based browsers will fall through to default
  if (ua.includes('Chrome') && !ua.includes('Chromium')) {
    // Additional check: Chrome has chrome.identity.getAuthToken that works
    // Other browsers might not
    return 'chrome';
  }

  return 'chromium';
}

function getRedirectUri() {
  // Dynamisch aus der aktuellen URL ableiten — passt immer zur Deployment-URL
  const base = window.location.origin + window.location.pathname;
  return base.endsWith('/') ? base : base + '/';
}

document.addEventListener('DOMContentLoaded', async () => {
  console.log('Dashboard v3.4.0 (Brave-kompatibel) initializing...');
  const browserType = await getBrowserType();
  console.log('Browser:', browserType);
  console.log('Redirect URI:', getRedirectUri());
  registerAllWidgets();
  await loadData();
  await checkOAuthCallback();
  setupEventListeners();
  setupContextMenu();
  setupTabChangeListener();
  setupTabPreview();
  setupSearchDropdown();
  await refreshCurrentTabs();
  await checkAndCreateCurrentSession();
  render();
  console.log('Dashboard ready');
});

async function checkAndCreateCurrentSession() {
  // iOS PWA: Kein Auto-Save — keine Live-Tabs verfügbar
}

function setupTabChangeListener() {
  // iOS PWA: Kein chrome.runtime.onMessage — Stub
  if (false) chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'tab_change' && state.currentView === 'sessions') refreshCurrentTabs();
  });
}

async function loadData() {
  try {
    const syncResult = await chrome.storage.local.get(['driveBackup']);
    const db = syncResult.driveBackup || {};
    driveBackupSettings.enabled = !!db.enabled;
    driveBackupSettings.autoBackup = !!db.autoBackup;
    driveBackupSettings.fileId = db.fileId || null;
    driveBackupSettings.lastBackup = db.lastBackup || null;
    driveBackupSettings.lastRestore = db.lastRestore || null;
    driveBackupSettings.accessToken = db.accessToken || null;
    driveBackupSettings.tokenExpiry = db.tokenExpiry || null;

    let needsSave = false;

    const result = await chrome.storage.local.get(['workspaces', 'sessionHistory']);
    state.workspaces = result.workspaces || [];
    state.sessionHistory = result.sessionHistory || [];

    // Load widget data
    const widgetResult = await chrome.storage.local.get(['widgets']);
    state.widgets = widgetResult.widgets || [];

    // Load and apply theme
    const themeResult = await chrome.storage.local.get(['theme']);
    state.theme = themeResult.theme || '';
    applyTheme(state.theme);

    // Migrate old emoji icons to new SVG icon names
    state.workspaces.forEach(ws => {
      const oldIcon = ws.icon;
      ws.icon = migrateIcon(ws.icon);
      if (oldIcon !== ws.icon) needsSave = true;
    });

    if (needsSave) {
      await saveData();
      console.log(' Icons migrated to SVG');
    }
  } catch (e) {
    console.error('Load error:', e);
  }
}

async function saveData() {
  try {
    await chrome.storage.local.set({
      workspaces: state.workspaces,
      sessionHistory: state.sessionHistory,
      widgets: state.widgets
    });

    if (driveBackupSettings.enabled && driveBackupSettings.autoBackup && !state._suspendDriveAutoBackup) {
      scheduleDriveAutoBackup();
    }
  } catch (e) {
    console.error('Save error:', e);
  }
}

function setupEventListeners() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      switchView(item.dataset.view);
    });
  });

  document.getElementById('addWorkspaceBtn')?.addEventListener('click', () => openWorkspaceModal());
  document.getElementById('newWorkspaceBtn')?.addEventListener('click', () => openWorkspaceModal());
  document.getElementById('saveWorkspaceBtn')?.addEventListener('click', saveWorkspace);
  document.getElementById('deleteWorkspaceBtn')?.addEventListener('click', deleteWorkspace);
  document.getElementById('editWorkspaceBtn')?.addEventListener('click', editCurrentWorkspace);

  document.getElementById('newCollectionBtn')?.addEventListener('click', () => openCollectionModal());
  document.getElementById('saveCollectionBtn')?.addEventListener('click', saveCollection);
  document.getElementById('deleteCollectionBtn')?.addEventListener('click', deleteCollection);

  document.getElementById('saveTabBtn')?.addEventListener('click', saveTab);
  document.getElementById('deleteTabBtn')?.addEventListener('click', deleteTab);

  document.getElementById('refreshSessionBtn')?.addEventListener('click', refreshCurrentTabs);
  document.getElementById('saveSessionBtn')?.addEventListener('click', () => openSaveSessionModal());
  document.getElementById('confirmSaveSessionBtn')?.addEventListener('click', saveCurrentSession);
  document.getElementById('saveToHistoryBtn')?.addEventListener('click', saveSessionToHistory);

  document.getElementById('groupTabsBtn')?.addEventListener('click', groupTabsByCategory);
  document.getElementById('ungroupTabsBtn')?.addEventListener('click', ungroupAllTabs);

  document.getElementById('sessionWorkspace')?.addEventListener('change', updateSessionCollections);
  document.getElementById('sessionCollection')?.addEventListener('change', (e) => {
    const g = document.getElementById('newCollectionGroup');
    if (g) g.style.display = e.target.value === '__new__' ? 'block' : 'none';
  });

  document.getElementById('backToWorkspaces')?.addEventListener('click', (e) => {
    e.preventDefault();
    switchView('workspaces');
  });

  document.querySelectorAll('.modal-close, .modal-backdrop').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-backdrop') || e.target.classList.contains('modal-close')) {
        closeModals();
      }
    });
  });

  document.querySelectorAll('.icon-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.icon-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedIcon = btn.dataset.icon;
    });
  });

  document.querySelectorAll('.color-btn').forEach(btn => {
    if (!btn.dataset.color) return; // Custom-Button hat kein data-color
    btn.addEventListener('click', () => {
      document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedColor = btn.dataset.color;
    });
  });

  document.getElementById('workspaceColorInput')?.addEventListener('input', (e) => {
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
    state.selectedColor = e.target.value;
    const customBtn = document.getElementById('colorBtnCustom');
    if (customBtn) {
      customBtn.classList.add('active', 'has-color');
      customBtn.style.setProperty('--custom-color', e.target.value);
    }
  });

  document.querySelectorAll('.note-color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.note-color-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('focus', handleSearchFocus);
    searchInput.addEventListener('blur', () =>
      setTimeout(() => document.getElementById('searchDropdown')?.classList.remove('active'), 200)
    );
  }

  document.getElementById('settingsBtn')?.addEventListener('click', () => switchView('settings'));

  document.getElementById('saveNoteBtn')?.addEventListener('click', saveNote);
  document.getElementById('deleteNoteBtn')?.addEventListener('click', deleteNote);

  document.getElementById('confirmAddToCollectionBtn')?.addEventListener('click', confirmAddTabToCollection);
  document.getElementById('addToCollectionWorkspace')?.addEventListener('change', updateAddToCollectionCollections);

  // Widget buttons
  document.getElementById('addWidgetBtn')?.addEventListener('click', openAddWidgetModal);
  document.getElementById('saveWidgetSettingsBtn')?.addEventListener('click', saveWidgetSettings);

  // Theme switcher
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => saveTheme(btn.dataset.theme));
  });

  // Enter key support for modal inputs
  setupEnterKeySupport();

  // Mobile Sidebar Toggle
  document.getElementById('sidebarToggle')
    ?.addEventListener('click', () => toggleSidebar());
  document.getElementById('sidebarBackdrop')
    ?.addEventListener('click', () => toggleSidebar(false));

  // Sidebar auf Mobile automatisch schließen nach Navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 768) toggleSidebar(false);
    });
  });
  document.getElementById('settingsBtn')
    ?.addEventListener('click', () => {
      if (window.innerWidth <= 768) toggleSidebar(false);
    });
}

// =====================================================
// Enter Key Support for Modal Inputs
// =====================================================
function setupEnterKeySupport() {
  const enterBindings = [
    { id: 'workspaceName',     fn: saveWorkspace },
    { id: 'collectionName',    fn: saveCollection },
    { id: 'tabTitle',          fn: saveTab },
    { id: 'tabUrl',            fn: saveTab },
    { id: 'newCollectionName', fn: saveCurrentSession }
  ];

  enterBindings.forEach(({ id, fn }) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey) {
        e.preventDefault();
        fn();
      }
    });
  });

  // Textarea noteContent: Ctrl+Enter to save
  const noteEl = document.getElementById('noteContent');
  if (noteEl) {
    noteEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.ctrlKey) {
        e.preventDefault();
        saveNote();
      }
    });
  }
}

// =====================================================
// Mobile Sidebar Toggle
// =====================================================
function toggleSidebar(force) {
  const sidebar = document.querySelector('.sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (!sidebar || !backdrop) return;
  const shouldOpen = force !== undefined
    ? force
    : !sidebar.classList.contains('sidebar-open');
  sidebar.classList.toggle('sidebar-open', shouldOpen);
  backdrop.classList.toggle('active', shouldOpen);
}

function setupTabPreview() {
  let p = document.getElementById('tabPreview');
  if (!p) {
    p = document.createElement('div');
    p.id = 'tabPreview';
    p.className = 'tab-preview';
    p.innerHTML = `
      <div class="tab-preview-header">
        <img class="tab-preview-favicon" src="">
        <span class="tab-preview-title"></span>
      </div>
      <div class="tab-preview-url"></div>
      <div class="tab-preview-info"></div>
    `;
    document.body.appendChild(p);
  }
}

function showTabPreview(e, tab) {
  const p = document.getElementById('tabPreview');
  if (!p || !tab) return;

  p.querySelector('.tab-preview-favicon').src = tab.favIconUrl || getFaviconUrl(tab.url);
  p.querySelector('.tab-preview-title').textContent = tab.title || 'Untitled';
  p.querySelector('.tab-preview-url').textContent = tab.url;
  try {
    p.querySelector('.tab-preview-info').textContent = 'Domain: ' + new URL(tab.url).hostname;
  } catch {
    p.querySelector('.tab-preview-info').textContent = '';
  }
  
  const card = e.target.closest('.tab-card, .collection-tab');
  const rect = card ? card.getBoundingClientRect() : null;
  if (rect) {
    p.style.visibility = 'hidden';
    p.classList.add('active');
    const previewRect = p.getBoundingClientRect();
    let left = rect.right + 10;
    if (left + previewRect.width > window.innerWidth - 20) {
      left = rect.left - previewRect.width - 10;
    }
    if (left < 10) left = 10;
    let top = rect.top;
    if (top + previewRect.height > window.innerHeight - 20) {
      top = window.innerHeight - previewRect.height - 20;
    }
    if (top < 10) top = 10;
    p.style.left = left + 'px';
    p.style.top = top + 'px';
    p.style.visibility = 'visible';
  } else {
    p.classList.add('active');
  }
}

function hideTabPreview() {
  document.getElementById('tabPreview')?.classList.remove('active');
}

function setupSearchDropdown() {
  let d = document.getElementById('searchDropdown');
  if (!d) {
    d = document.createElement('div');
    d.id = 'searchDropdown';
    d.className = 'search-dropdown';
    document.querySelector('.sidebar-search')?.appendChild(d);
  }
}

function handleSearchFocus(e) {
  if (!e.target.value.trim()) showSearchSuggestions();
  else handleSearch(e);
}

function showSearchSuggestions() {
  const d = document.getElementById('searchDropdown');
  if (!d) return;

  const suggestions = state.workspaces.slice(0, 5).map(w => ({
    type: 'workspace',
    icon: w.icon,
    title: w.name,
    subtitle: (w.collections?.length || 0) + ' Collections',
    action: () => selectWorkspace(w.id)
  }));

  if (!suggestions.length) {
    d.innerHTML = '<div class="search-empty">Keine Workspaces</div>';
  } else {
    d.innerHTML = suggestions.map((x, i) => `
      <div class="search-result-item" data-index="${i}">
        <span class="search-result-icon">${getIconHTML(x.icon)}</span>
        <div class="search-result-content">
          <div class="search-result-title">${escapeHtml(x.title)}</div>
          <div class="search-result-subtitle">${escapeHtml(x.subtitle)}</div>
        </div>
      </div>
    `).join('');
    d.querySelectorAll('.search-result-item').forEach((item, i) => {
      item.addEventListener('mousedown', (e) => {
        e.preventDefault();
        suggestions[i].action();
        d.classList.remove('active');
        document.getElementById('searchInput').value = '';
      });
    });
  }
  d.classList.add('active');
}

function handleSearch(e) {
  const q = e.target.value.toLowerCase().trim();
  const d = document.getElementById('searchDropdown');
  if (!d) return;

  if (!q) {
    showSearchSuggestions();
    return;
  }

  const results = [];

  state.currentTabs.forEach(t => {
    if (t.title?.toLowerCase().includes(q) || t.url?.toLowerCase().includes(q)) {
      results.push({
        type: 'open-tab',
        icon: 'globe',
        title: t.title,
        subtitle: 'Geöffneter Tab',
        action: () => openUrl(t.url),
        tabId: t.id
      });
    }
  });
  
  state.workspaces.forEach(w => {
    if (w.name.toLowerCase().includes(q)) {
      results.push({
        type: 'workspace',
        icon: w.icon,
        title: w.name,
        subtitle: (w.collections?.length || 0) + ' Collections',
        action: () => selectWorkspace(w.id)
      });
    }
    w.collections?.forEach(c => {
      if (c.name.toLowerCase().includes(q)) {
        results.push({
          type: 'collection',
          icon: 'folder',
          title: c.name,
          subtitle: w.name,
          action: () => selectWorkspace(w.id)
        });
      }
      c.tabs?.forEach(t => {
        if (t.title.toLowerCase().includes(q) || t.url.toLowerCase().includes(q)) {
          results.push({
            type: 'saved-tab',
            icon: 'link',
            title: t.title,
            subtitle: w.name + ' → ' + c.name,
            action: () => openUrl(t.url)
          });
        }
      });
    });
  });
  
  state.sessionHistory?.forEach(s => {
    s.tabs?.forEach(t => {
      if (t.title?.toLowerCase().includes(q) || t.url?.toLowerCase().includes(q)) {
        results.push({
          type: 'history-tab',
          icon: 'calendar',
          title: t.title,
          subtitle: 'Verlauf: ' + s.name,
          action: () => openUrl(t.url)
        });
      }
    });
  });
  
  if (!results.length) {
    d.innerHTML = `<div class="search-empty">Keine Ergebnisse für "${escapeHtml(q)}"</div>`;
  } else {
    const seen = new Set();
    const unique = results.filter(item => {
      const key = item.title + item.type;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    d.innerHTML = unique.slice(0, 12).map((x, i) => `
      <div class="search-result-item" data-index="${i}">
        <span class="search-result-icon">${getIconHTML(x.icon)}</span>
        <div class="search-result-content">
          <div class="search-result-title">${escapeHtml(x.title)}</div>
          <div class="search-result-subtitle">${escapeHtml(x.subtitle)}</div>
        </div>
        <span class="search-result-type">${x.type.replace('-', ' ')}</span>
      </div>
    `).join('');

    d.querySelectorAll('.search-result-item').forEach((item, i) => {
      item.addEventListener('mousedown', (e) => {
        e.preventDefault();
        unique[i].action();
        d.classList.remove('active');
        document.getElementById('searchInput').value = '';
      });
    });
  }
  d.classList.add('active');
}

function setupContextMenu() {
  let cm = document.getElementById('contextMenu');
  if (!cm) {
    cm = document.createElement('div');
    cm.id = 'contextMenu';
    cm.className = 'context-menu';
    cm.innerHTML = `
      <div class="context-menu-item" data-action="open">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
        Öffnen
      </div>
      <div class="context-menu-item" data-action="open-new-window">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
        </svg>
        Neues Fenster
      </div>
      <div class="context-menu-divider"></div>
      <div class="context-menu-item" data-action="add-to-collection">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
        Zu Collection
      </div>
      <div class="context-menu-divider edit-section"></div>
      <div class="context-menu-item edit-section" data-action="edit">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10z"/>
        </svg>
        Bearbeiten
      </div>
      <div class="context-menu-item" data-action="copy-url">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        </svg>
        URL kopieren
      </div>
      <div class="context-menu-divider edit-section"></div>
      <div class="context-menu-item danger edit-section" data-action="delete">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z"/>
        </svg>
        Löschen
      </div>
    `;
    document.body.appendChild(cm);

    cm.querySelectorAll('.context-menu-item').forEach(item => {
      item.addEventListener('click', async (e) => {
        await handleContextMenuAction(e.currentTarget.dataset.action);
        hideContextMenu();
      });
    });
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.context-menu')) hideContextMenu();
  });
  document.addEventListener('scroll', hideContextMenu, true);
}

function showContextMenu(e, tab, collectionId = null) {
  e.preventDefault();
  e.stopPropagation();
  const cm = document.getElementById('contextMenu');
  if (!cm) return;
  state.contextMenuTab = { ...tab, collectionId };
  cm.querySelectorAll('.edit-section').forEach(el => {
    el.style.display = collectionId ? '' : 'none';
  });
  cm.style.left = e.pageX + 'px';
  cm.style.top = e.pageY + 'px';
  cm.classList.add('active');
  setTimeout(() => {
    const rect = cm.getBoundingClientRect();
    if (rect.right > window.innerWidth) cm.style.left = (e.pageX - rect.width) + 'px';
    if (rect.bottom > window.innerHeight) cm.style.top = (e.pageY - rect.height) + 'px';
  }, 0);
}

function hideContextMenu() {
  document.getElementById('contextMenu')?.classList.remove('active');
}

async function handleContextMenuAction(action) {
  const tab = state.contextMenuTab;
  if (!tab) return;
  switch (action) {
    case 'open':
      openUrl(tab.url);
      break;
    case 'open-new-window':
      chrome.windows.create({ url: tab.url });
      break;
    case 'add-to-collection':
      openAddToCollectionModal(tab);
      break;
    case 'edit':
      if (tab.collectionId) {
        state.currentCollectionId = tab.collectionId;
        openTabModal(tab.collectionId, tab);
      }
      break;
    case 'copy-url':
      try {
        await navigator.clipboard.writeText(tab.url);
        showToast('URL kopiert!');
      } catch {
        showToast('Fehler');
      }
      break;
    case 'delete':
      if (tab.collectionId) {
        const ws = state.workspaces.find(w => w.id === state.currentWorkspaceId);
        if (ws) {
          const col = ws.collections.find(c => c.id === tab.collectionId);
          if (col && confirm('"' + tab.title + '" löschen?')) {
            col.tabs = col.tabs.filter(t => t.id !== tab.id);
            await saveData();
            render();
            showToast('Gelöscht');
          }
        }
      }
      break;
  }
  state.contextMenuTab = null;
}

function openAddToCollectionModal(tab) {
  const modal = document.getElementById('addToCollectionModal');
  if (!modal) return;

  state.addToCollectionTab = { ...tab };

  const wsSelect = document.getElementById('addToCollectionWorkspace');
  wsSelect.innerHTML = '<option value="">Workspace wählen...</option>' +
    state.workspaces.map(w => `<option value="${w.id}">${escapeHtml(w.name)}</option>`).join('');

  document.getElementById('addToCollectionCollection').innerHTML =
    '<option value="">Erst Workspace wählen...</option>';

  const info = modal.querySelector('.add-to-collection-tab-info');
  if (info) {
    info.innerHTML = `
      <img src="${tab.favIconUrl || getFaviconUrl(tab.url)}" class="tab-favicon" onerror="this.style.display='none'">
      <div>
        <div class="tab-title">${escapeHtml(tab.title)}</div>
        <div class="tab-url">${escapeHtml(tab.url)}</div>
      </div>
    `;
  }

  modal.classList.add('active');
}

function updateAddToCollectionCollections() {
  const wsId = document.getElementById('addToCollectionWorkspace').value;
  const cs = document.getElementById('addToCollectionCollection');
  if (!wsId) {
    cs.innerHTML = '<option value="">Erst Workspace wählen...</option>';
    return;
  }
  const ws = state.workspaces.find(w => w.id === wsId);
  if (!ws || !ws.collections?.length) {
    cs.innerHTML = '<option value="__new__">+ Neue Collection</option>';
    return;
  }
  cs.innerHTML =
    '<option value="">Collection wählen...</option>' +
    ws.collections.map(c => `<option value="${c.id}">${escapeHtml(c.name)}</option>`).join('') +
    '<option value="__new__">+ Neue Collection</option>';
}

async function confirmAddTabToCollection() {
  const wsId = document.getElementById('addToCollectionWorkspace').value;
  const colId = document.getElementById('addToCollectionCollection').value;
  if (!wsId) {
    showToast('Workspace wählen');
    return;
  }
  if (!colId) {
    showToast('Collection wählen');
    return;
  }
  const tab = state.addToCollectionTab;
  if (!tab) {
    showToast('Kein Tab');
    closeModals();
    return;
  }
  const ws = state.workspaces.find(w => w.id === wsId);
  if (!ws) {
    showToast('Workspace nicht gefunden');
    return;
  }
  let targetColId = colId;
  if (colId === '__new__') {
    const name = prompt('Name der neuen Collection:');
    if (!name) return;
    const newCol = {
      id: generateId(),
      name: name.trim(),
      notes: '',
      tabs: [],
      stickyNotes: [],
      createdAt: new Date().toISOString()
    };
    if (!ws.collections) ws.collections = [];
    ws.collections.push(newCol);
    targetColId = newCol.id;
  }
  const col = ws.collections.find(c => c.id === targetColId);
  if (!col) {
    showToast('Collection nicht gefunden');
    return;
  }
  if (!col.tabs) col.tabs = [];
  if (col.tabs.some(t => t.url === tab.url)) {
    showToast('Tab existiert bereits');
    closeModals();
    return;
  }
  col.tabs.push({
    id: generateId(),
    title: tab.title,
    url: tab.url,
    favIconUrl: tab.favIconUrl || getFaviconUrl(tab.url),
    notes: '',
    createdAt: new Date().toISOString()
  });
  await saveData();
  closeModals();
  showToast('Zu "' + col.name + '" hinzugefügt');
  state.addToCollectionTab = null;
  if (state.currentWorkspaceId === wsId) render();
}

function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('active');
  setTimeout(() => t.classList.remove('active'), 2500);
}

function switchView(name) {
  state.currentView = name;
  document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
  document.querySelector(`[data-view="${name}"]`)?.classList.add('active');
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(name + '-view')?.classList.add('active');
  render();
}

function render() {
  updateWorkspacesList();
  updateWorkspacesCount();
  switch (state.currentView) {
    case 'home':
      renderHome();
      break;
    case 'sessions':
      renderCurrentSession();
      break;
    case 'workspaces':
      renderWorkspaces();
      break;
    case 'workspace-detail':
      renderWorkspaceDetail();
      break;
    case 'settings':
      renderSettings();
      break;
    case 'history':
      renderSessionHistory();
      break;
  }
}

async function saveSessionToHistory() {
  const name = prompt(
    'Name für Session:',
    'Session ' +
      new Date().toLocaleDateString('de-DE') +
      ' ' +
      new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })
  );
  if (!name) return;
  const s = {
    id: generateId(),
    name: name.trim(),
    tabs: state.currentTabs.map(t => ({
      id: generateId(),
      title: t.title,
      url: t.url,
      favIconUrl: t.favIconUrl || getFaviconUrl(t.url)
    })),
    savedAt: new Date().toISOString(),
    isAutoSave: false
  };
  state.sessionHistory.unshift(s);
  if (state.sessionHistory.length > 50) state.sessionHistory = state.sessionHistory.slice(0, 50);
  await saveData();
  showToast('Session "' + name + '" gespeichert');
  render();
}

function renderSessionHistory() {
  const c = document.getElementById('historyContainer');
  if (!c) return;
  if (!state.sessionHistory?.length) {
    c.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon"></div>
        <h3>Kein Verlauf</h3>
        <p>Sessions werden automatisch gespeichert</p>
      </div>
    `;
    return;
  }

  c.innerHTML = state.sessionHistory
    .map((s, i) => `
      <div class="history-card${s.isAutoSave ? ' auto-save' : ''}" data-index="${i}">
        <div class="history-header">
          <div class="history-info">
            <div class="history-name">${s.isAutoSave ? ' ' : ''}${escapeHtml(s.name)}</div>
            <div class="history-date">${new Date(s.savedAt).toLocaleString('de-DE')}</div>
          </div>
          <div class="history-stats">
            <span class="history-tab-count">${s.tabs?.length || 0} Tabs</span>
          </div>
        </div>
        <div class="history-tabs">
          ${
            s.tabs?.slice(0, 6).map(t => `
              <div class="history-tab-item" title="${escapeHtml(t.title)}">
                <img src="${t.favIconUrl || getFaviconUrl(t.url)}"
                     class="history-tab-favicon"
                     onerror="this.style.display='none'">
              </div>
            `).join('') || ''
          }
          ${s.tabs?.length > 6 ? `<div class="history-tab-more">+${s.tabs.length - 6}</div>` : ''}
        </div>
        <div class="history-actions">
          <button class="btn-primary btn-small history-restore" data-index="${i}">Wiederherstellen</button>
          <button class="btn-icon-small history-rename" data-index="${i}" title="Umbenennen">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/></svg>
          </button>
          <button class="btn-secondary btn-small history-delete" data-index="${i}">Löschen</button>
        </div>
      </div>
    `).join('');

  c.querySelectorAll('.history-restore').forEach(b => {
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      restoreSession(parseInt(b.dataset.index, 10));
    });
  });
  c.querySelectorAll('.history-rename').forEach(b => {
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      startSessionRename(parseInt(b.dataset.index, 10));
    });
  });
  c.querySelectorAll('.history-delete').forEach(b => {
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteSessionFromHistory(parseInt(b.dataset.index, 10));
    });
  });
}

async function restoreSession(i) {
  const s = state.sessionHistory[i];
  if (!s?.tabs?.length) return;
  if (!confirm(s.tabs.length + ' Tabs aus "' + s.name + '" öffnen?')) return;
  for (const t of s.tabs) {
    openUrl(t.url);
  }
  showToast(s.tabs.length + ' Tabs wiederhergestellt');
  if (state.currentView !== 'sessions') switchView('sessions');
}

async function deleteSessionFromHistory(i) {
  const s = state.sessionHistory[i];
  if (!s) return;
  if (confirm('Session "' + s.name + '" löschen?')) {
    state.sessionHistory.splice(i, 1);
    await saveData();
    render();
    showToast('Gelöscht');
  }
}

function startSessionRename(index) {
  const session = state.sessionHistory[index];
  if (!session) return;

  const c = document.getElementById('historyContainer');
  if (!c) return;
  const card = c.querySelector(`.history-card[data-index="${index}"]`);
  if (!card) return;
  const nameEl = card.querySelector('.history-name');
  if (!nameEl || nameEl.querySelector('input')) return;

  const currentName = session.name;
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'history-rename-input';
  input.value = currentName;

  nameEl.textContent = '';
  nameEl.appendChild(input);
  input.focus();
  input.select();

  let committed = false;

  async function commitRename() {
    if (committed) return;
    committed = true;
    const newName = input.value.trim();
    if (newName && newName !== currentName) {
      session.name = newName;
      await saveData();
      showToast('Umbenannt');
    }
    renderSessionHistory();
  }

  function cancelRename() {
    if (committed) return;
    committed = true;
    renderSessionHistory();
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); commitRename(); }
    if (e.key === 'Escape') { e.preventDefault(); cancelRename(); }
  });

  input.addEventListener('blur', () => {
    setTimeout(commitRename, 120);
  });
}

function renderSettings() {
  const wc = state.workspaces.length;
  const cc = state.workspaces.reduce((s, w) => s + (w.collections?.length || 0), 0);
  const tc = state.workspaces.reduce(
    (s, w) => s + (w.collections?.reduce((x, c) => x + (c.tabs?.length || 0), 0) || 0),
    0
  );
  const hc = state.sessionHistory?.length || 0;

  document.getElementById('infoWorkspaceCount').textContent = wc;
  document.getElementById('infoCollectionCount').textContent = cc;
  document.getElementById('infoTabCount').textContent = tc;
  const he = document.getElementById('infoHistoryCount');
  if (he) he.textContent = hc;
  
  // Google Drive Backup UI
  const driveConnectBtn = document.getElementById('driveConnectBtn');
  const driveDisconnectBtn = document.getElementById('driveDisconnectBtn');
  const driveStatus = document.getElementById('driveStatus');
  const driveAutoToggle = document.getElementById('driveAutoToggle');
  const driveBackupNowBtn = document.getElementById('driveBackupNowBtn');
  const driveRestoreBtn = document.getElementById('driveRestoreBtn');

  const driveConnected = !!driveBackupSettings.enabled;
  if (driveConnectBtn) {
    driveConnectBtn.style.display = driveConnected ? 'none' : '';
    driveConnectBtn.onclick = () => connectGoogleDriveBackup().catch((e) => {
      console.error('Drive connect failed:', e);
      showToast('Drive Login fehlgeschlagen: ' + e.message);
    });
  }
  if (driveDisconnectBtn) {
    driveDisconnectBtn.style.display = driveConnected ? '' : 'none';
    driveDisconnectBtn.onclick = () => disconnectGoogleDriveBackup().catch((e) => {
      console.error('Drive disconnect failed:', e);
      showToast('Fehler beim Trennen');
    });
  }

  if (driveAutoToggle) {
    driveAutoToggle.checked = !!driveBackupSettings.autoBackup;
    driveAutoToggle.onchange = async (e) => {
      driveBackupSettings.autoBackup = !!e.target.checked;
      if (driveBackupSettings.autoBackup && !driveBackupSettings.enabled) {
        try {
          await connectGoogleDriveBackup();
        } catch {
          driveBackupSettings.autoBackup = false;
          e.target.checked = false;
          return;
        }
      }
      await persistDriveBackupSettings();
      if (driveStatus) driveStatus.innerHTML = await buildDriveStatusHtml();
    };
  }

  if (driveBackupNowBtn) {
    driveBackupNowBtn.disabled = !driveConnected;
    driveBackupNowBtn.onclick = () => backupToGoogleDrive({ silent: false }).catch((e) => {
      console.error('Drive backup failed:', e);
      showToast('Drive Backup fehlgeschlagen: ' + e.message);
    });
  }

  if (driveRestoreBtn) {
    driveRestoreBtn.disabled = !driveConnected;
    driveRestoreBtn.onclick = () => restoreFromGoogleDrive().catch((e) => {
      console.error('Drive restore failed:', e);
      showToast('Drive Restore fehlgeschlagen: ' + e.message);
    });
  }

  async function buildDriveStatusHtml() {
    const browser = await getBrowserType();
    const browserInfo = ' (' + browser.charAt(0).toUpperCase() + browser.slice(1) + ')';
    if (!driveConnected) return '<span style="color: var(--text-tertiary);">Nicht verbunden' + browserInfo + '</span>';
    const lastB = driveBackupSettings.lastBackup
      ? 'Letztes Backup: ' + formatDateTime(driveBackupSettings.lastBackup)
      : 'Noch kein Backup';
    const lastR = driveBackupSettings.lastRestore
      ? 'Letzter Restore: ' + formatDateTime(driveBackupSettings.lastRestore)
      : '';
    return '<span style="color: var(--success);"> Verbunden' + browserInfo + '</span> — ' + lastB + (lastR ? ('<br>' + lastR) : '');
  }

  if (driveStatus) {
    buildDriveStatusHtml().then(html => driveStatus.innerHTML = html);
  }

  document.getElementById('exportDataBtn').onclick = exportData;
  document.getElementById('importDataBtn').onclick = () => document.getElementById('importFileInput').click();
  document.getElementById('importFileInput').onchange = importData;
  document.getElementById('clearAllDataBtn').onclick = () => {
    if (confirm('ALLE Daten löschen?') && confirm('Wirklich sicher?')) {
      state.workspaces = [];
      state.sessionHistory = [];
      state.currentWorkspaceId = null;
      saveData();
      switchView('workspaces');
      showToast('Alle Daten gelöscht');
    }
  };
}

async function exportData() {
  const d = {
    version: '3.4.0',
    exportedAt: new Date().toISOString(),
    workspaces: state.workspaces,
    sessionHistory: state.sessionHistory,
    widgets: state.widgets
  };
  const blob = new Blob([JSON.stringify(d, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'workspace-pro-backup-' + Date.now() + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Backup exportiert!');
}

async function importData(event) {
  const f = event.target.files[0];
  if (!f) return;
  try {
    const txt = await f.text();
    const d = JSON.parse(txt);
    if (!d.workspaces) throw new Error('Ungültig');
    if (!confirm(d.workspaces.length + ' Workspaces importieren?')) return;
    state.workspaces = d.workspaces;
    state.sessionHistory = d.sessionHistory || [];
    if (d.widgets) state.widgets = d.widgets;
    await saveData();
    render();
    showToast('Importiert!');
  } catch (e) {
    alert('Fehler: ' + e.message);
  }
  event.target.value = '';
}

// =====================================================
// GOOGLE DRIVE BACKUP - BRAVE KOMPATIBEL
// =====================================================

async function persistDriveBackupSettings() {
  await chrome.storage.local.set({ driveBackup: { ...driveBackupSettings } });
}

function formatDateTime(ts) {
  if (!ts) return '';
  try {
    return new Date(ts).toLocaleString('de-DE');
  } catch {
    return '';
  }
}

function scheduleDriveAutoBackup() {
  if (driveAutoBackupTimer) clearTimeout(driveAutoBackupTimer);
  driveAutoBackupTimer = setTimeout(() => {
    backupToGoogleDrive({ silent: true }).catch((e) => {
      console.warn('Drive auto-backup failed:', e);
    });
  }, 2000);
}

async function getDriveAccessToken(interactive = false) {
  const browser = await getBrowserType();
  console.log('Getting access token for browser:', browser);

  if (driveBackupSettings.accessToken && driveBackupSettings.tokenExpiry) {
    const now = Date.now();
    if (now < driveBackupSettings.tokenExpiry - 60000) {
      console.log('Using cached token');
      return driveBackupSettings.accessToken;
    }
    console.log('Cached token expired');
  }

  if (!interactive) {
    throw new Error('Kein gültiges Token - Bitte erneut verbinden');
  }

  // For Brave/Edge/Opera/Chromium, skip getAuthToken entirely
  // chrome.identity.getAuthToken only works in official Google Chrome
  if (browser !== 'chrome') {
    console.log('Using WebAuthFlow for', browser);
    return await launchWebAuthFlowForToken();
  }

  // For official Chrome, try native getAuthToken first
  try {
    console.log('Trying Chrome native getAuthToken...');
    const res = await chrome.identity.getAuthToken({ interactive });
    if (typeof res === 'string') return res;
    if (res && typeof res.token === 'string') return res.token;
  } catch (e) {
    console.log('Chrome getAuthToken failed, fallback to WebAuthFlow:', e.message);
  }

  // Fallback to WebAuthFlow
  return await launchWebAuthFlowForToken();
}

async function launchWebAuthFlowForToken() {
  if (!OAUTH_CONFIG.clientId) {
    throw new Error('Keine Google OAuth Client-ID konfiguriert.');
  }

  const redirectUri = getRedirectUri();
  console.log('PWA OAuth: redirectUri =', redirectUri);

  const authParams = new URLSearchParams({
    client_id: OAUTH_CONFIG.clientId,
    redirect_uri: redirectUri,
    response_type: 'token',
    scope: OAUTH_CONFIG.scopes.join(' '),
    prompt: 'consent'
  });

  const authUrl = OAUTH_CONFIG.authEndpoint + '?' + authParams.toString();
  console.log('PWA OAuth: Weiterleitung zu Google...');

  // Merken dass OAuth gestartet wurde (für Rückkehr)
  sessionStorage.setItem('wp_oauth_pending', '1');

  // Seite zu Google OAuth weiterleiten — läuft nach dieser Zeile nicht mehr
  window.location.href = authUrl;

  return new Promise(() => {}); // hängt bis Seite wegnavigiert
}

async function checkOAuthCallback() {
  const hash = window.location.hash;
  if (!hash) return;

  const hashParams = new URLSearchParams(hash.substring(1));
  const accessToken = hashParams.get('access_token');
  if (!accessToken) return;

  // Token aus der Adressleiste entfernen
  window.history.replaceState({}, '', window.location.pathname);
  sessionStorage.removeItem('wp_oauth_pending');

  const expiresIn = parseInt(hashParams.get('expires_in') || '3600', 10);

  // loadData() hat driveBackupSettings bereits geladen — direkt in-place modifizieren
  driveBackupSettings.accessToken = accessToken;
  driveBackupSettings.tokenExpiry = Date.now() + expiresIn * 1000;
  driveBackupSettings.enabled = true;
  await persistDriveBackupSettings();

  console.log('OAuth callback: Token gespeichert, gültig für', expiresIn, 'Sekunden');
  // Toast wird nach render() angezeigt
  setTimeout(() => showToast('Google Drive verbunden!'), 500);
}

async function removeCachedTokenSafe(token) {
  driveBackupSettings.accessToken = null;
  driveBackupSettings.tokenExpiry = null;
  await persistDriveBackupSettings();
  
  if ((await getBrowserType()) === 'chrome' && token) {
    try {
      await chrome.identity.removeCachedAuthToken({ token });
    } catch {
      // ignore
    }
  }
}

async function driveFetch(url, options = {}, { interactive = false, retryOnAuthError = true } = {}) {
  let token = await getDriveAccessToken(interactive);

  const headers = new Headers(options.headers || {});
  headers.set('Authorization', 'Bearer ' + token);
  if (options.body && !headers.has('Content-Type') && typeof options.body === 'string') {
    headers.set('Content-Type', 'application/json');
  }

  const resp = await fetch(url, { ...options, headers });

  if ((resp.status === 401 || resp.status === 403) && retryOnAuthError) {
    await removeCachedTokenSafe(token);
    return driveFetch(url, options, { interactive: true, retryOnAuthError: false });
  }

  if (!resp.ok) {
    let detail = '';
    try {
      detail = await resp.text();
    } catch {}
    throw new Error('Drive API Fehler ' + resp.status + (detail ? (': ' + detail.slice(0, 200)) : ''));
  }

  return resp;
}

function buildMultipartBody(metadataObj, contentString, boundary) {
  return (
    '--' + boundary + '\r\n' +
    'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
    JSON.stringify(metadataObj) + '\r\n' +
    '--' + boundary + '\r\n' +
    'Content-Type: application/json\r\n\r\n' +
    contentString + '\r\n' +
    '--' + boundary + '--'
  );
}

async function ensureDriveBackupFileId() {
  if (driveBackupSettings.fileId) {
    try {
      await driveFetch(
        'https://www.googleapis.com/drive/v3/files/' +
          encodeURIComponent(driveBackupSettings.fileId) +
          '?fields=id',
        { method: 'GET' },
        { interactive: false }
      );
      return driveBackupSettings.fileId;
    } catch {
      driveBackupSettings.fileId = null;
      await persistDriveBackupSettings();
    }
  }

  const listUrl =
    'https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&q=' +
    encodeURIComponent("name='workspace-pro-backup.json' and trashed=false") +
    '&fields=' +
    encodeURIComponent('files(id,name)');
  const listResp = await driveFetch(listUrl, { method: 'GET' }, { interactive: true });
  const listJson = await listResp.json();
  
  if (listJson.files?.[0]?.id) {
    driveBackupSettings.fileId = listJson.files[0].id;
    await persistDriveBackupSettings();
    return driveBackupSettings.fileId;
  }

  const boundary = 'wp_' + Math.random().toString(36).slice(2);
  const body = buildMultipartBody(
    {
      name: 'workspace-pro-backup.json',
      mimeType: 'application/json',
      parents: ['appDataFolder']
    },
    '{}',
    boundary
  );
  const createResp = await driveFetch(
    'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id',
    {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/related; boundary=' + boundary },
      body
    },
    { interactive: true }
  );
  
  const created = await createResp.json();
  driveBackupSettings.fileId = created.id;
  await persistDriveBackupSettings();
  return created.id;
}

async function connectGoogleDriveBackup() {
  console.log('Connecting to Google Drive...');
  await ensureDriveBackupFileId();
  driveBackupSettings.enabled = true;
  await persistDriveBackupSettings();
  showToast('Google Drive verbunden!');
  render();
}

async function disconnectGoogleDriveBackup() {
  await removeCachedTokenSafe(driveBackupSettings.accessToken);
  driveBackupSettings.enabled = false;
  driveBackupSettings.autoBackup = false;
  driveBackupSettings.fileId = null;
  driveBackupSettings.lastBackup = null;
  driveBackupSettings.lastRestore = null;
  await persistDriveBackupSettings();
  showToast('Google Drive getrennt');
  render();
}

async function backupToGoogleDrive({ silent = false } = {}) {
  if (!driveBackupSettings.enabled) {
    if (!silent) showToast('Drive nicht verbunden');
    return;
  }

  const fileId = await ensureDriveBackupFileId();
  const payload = JSON.stringify({
    version: '3.4.0',
    exportedAt: new Date().toISOString(),
    workspaces: state.workspaces,
    sessionHistory: state.sessionHistory,
    widgets: state.widgets
  });

  const boundary = 'wp_' + Math.random().toString(36).slice(2);
  const body = buildMultipartBody(
    { mimeType: 'application/json' },
    payload,
    boundary
  );

  await driveFetch(
    'https://www.googleapis.com/upload/drive/v3/files/' +
      encodeURIComponent(fileId) +
      '?uploadType=multipart',
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'multipart/related; boundary=' + boundary },
      body
    },
    { interactive: true }
  );

  driveBackupSettings.lastBackup = Date.now();
  await persistDriveBackupSettings();
  if (!silent) showToast('In Drive gesichert!');
  if (state.currentView === 'settings') renderSettings();
}

async function restoreFromGoogleDrive() {
  if (!driveBackupSettings.enabled) {
    showToast('Drive nicht verbunden');
    return;
  }

  const fileId = await ensureDriveBackupFileId();
  const resp = await driveFetch(
    'https://www.googleapis.com/drive/v3/files/' +
      encodeURIComponent(fileId) +
      '?alt=media',
    { method: 'GET' },
    { interactive: true }
  );
  const data = await resp.json();

  if (!data?.workspaces) throw new Error('Ungültiges Backup');
  if (!confirm('Aus Drive wiederherstellen?\n\nWorkspaces: ' + (data.workspaces?.length || 0))) return;

  state._suspendDriveAutoBackup = true;
  state.workspaces = data.workspaces || [];
  state.sessionHistory = data.sessionHistory || [];
  if (data.widgets) state.widgets = data.widgets;
  state.currentWorkspaceId = null;
  await saveData();
  state._suspendDriveAutoBackup = false;

  driveBackupSettings.lastRestore = Date.now();
  await persistDriveBackupSettings();
  showToast('Aus Drive wiederhergestellt!');
  switchView('workspaces');
}

function closeModals() {
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
  state.editingWorkspace = null;
  state.editingCollection = null;
  state.editingTab = null;
  state.editingNote = null;
  state.currentCollectionId = null;
  state.addToCollectionTab = null;
  state.editingWidgetId = null;
}

function generateId() {
  return 'id-' + Math.random().toString(36).substring(2, 11) + '-' + Date.now().toString(36);
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getFaviconUrl(url) {
  try {
    const u = new URL(url);
    return `${u.protocol}//${u.hostname}/favicon.ico`;
  } catch {
    return '';
  }
}

async function deleteCollection() {
  if (!state.editingCollection) return;
  if (confirm('Collection "' + state.editingCollection.name + '" löschen?')) {
    const ws = state.workspaces.find(w => w.id === state.currentWorkspaceId);
    if (ws) { ws.collections = ws.collections.filter(c => c.id !== state.editingCollection.id); await saveData(); closeModals(); render(); showToast('Gelöscht'); }
  }
}

async function deleteNote() {
  if (!state.editingNote) return;
  const ws = state.workspaces.find(w => w.id === state.currentWorkspaceId);
  const col = ws?.collections?.find(c => c.id === state.currentCollectionId);
  if (col?.stickyNotes && confirm('Notiz löschen?')) { col.stickyNotes.splice(state.editingNote.noteIndex, 1); await saveData(); closeModals(); render(); }
}

async function deleteTab() {
  if (!state.editingTab) return;
  if (confirm('"' + state.editingTab.title + '" löschen?')) {
    const ws = state.workspaces.find(w => w.id === state.currentWorkspaceId);
    const col = ws?.collections?.find(c => c.id === state.currentCollectionId);
    if (col) { col.tabs = col.tabs.filter(t => t.id !== state.editingTab.id); await saveData(); closeModals(); render(); showToast('Gelöscht'); }
  }
}

async function deleteWorkspace() {
  if (!state.editingWorkspace) return;
  if (confirm('Workspace "' + state.editingWorkspace.name + '" löschen?')) {
    state.workspaces = state.workspaces.filter(w => w.id !== state.editingWorkspace.id);
    if (state.currentWorkspaceId === state.editingWorkspace.id) { state.currentWorkspaceId = null; switchView('workspaces'); }
    await saveData();
    closeModals();
    render();
    showToast('Gelöscht');
  }
}

function editCurrentWorkspace() { const ws = state.workspaces.find(w => w.id === state.currentWorkspaceId); if (ws) openWorkspaceModal(ws); }

function editTab(colId, tab) { state.currentCollectionId = colId; openTabModal(colId, tab); }

async function openAllCollectionTabs(colId) {
  const ws = state.workspaces.find(w => w.id === state.currentWorkspaceId);
  const col = ws?.collections?.find(c => c.id === colId);
  if (!col?.tabs?.length) { showToast('Keine Tabs'); return; }
  if (confirm(col.tabs.length + ' Tabs öffnen?')) { for (const t of col.tabs) openUrl(t.url); showToast(col.tabs.length + ' Tabs geöffnet'); }
}

function openCollectionModal(col = null) {
  const modal = document.getElementById('collectionModal');
  const title = document.getElementById('collectionModalTitle');
  const del = document.getElementById('deleteCollectionBtn');
  if (col) {
    state.editingCollection = col;
    title.textContent = 'Collection bearbeiten';
    del.style.display = 'inline-flex';
    document.getElementById('collectionName').value = col.name;
    document.getElementById('collectionNotes').value = col.notes || '';
  } else {
    state.editingCollection = null;
    title.textContent = 'Neue Collection';
    del.style.display = 'none';
    document.getElementById('collectionName').value = '';
    document.getElementById('collectionNotes').value = '';
  }
  modal.classList.add('active');
}

function openNoteModal(colId, note = null, noteIndex = null) {
  const modal = document.getElementById('noteModal');
  if (!modal) return;
  state.currentCollectionId = colId;
  const title = modal.querySelector('.modal-header h2');
  const del = document.getElementById('deleteNoteBtn');
  const inp = document.getElementById('noteContent');
  if (note) {
    state.editingNote = { note, noteIndex };
    title.textContent = 'Notiz bearbeiten';
    del.style.display = 'inline-flex';
    inp.value = note.content;
    document.querySelectorAll('.note-color-btn').forEach(b => b.classList.toggle('active', b.dataset.color === note.color));
  } else {
    state.editingNote = null;
    title.textContent = 'Neue Notiz';
    del.style.display = 'none';
    inp.value = '';
    document.querySelectorAll('.note-color-btn').forEach(b => b.classList.toggle('active', b.dataset.color === '#feca57'));
  }
  modal.classList.add('active');
  inp.focus();
}

function openSaveSessionModal() {
  const modal = document.getElementById('saveSessionModal');
  const ws = document.getElementById('sessionWorkspace');
  ws.innerHTML = '<option value="">Workspace wählen...</option>' + state.workspaces.map(w => '<option value="' + w.id + '">' + escapeHtml(w.name) + '</option>').join('');
  const tabs = document.getElementById('sessionTabsList');
  tabs.innerHTML = state.currentTabs.map(t => '<div class="tab-checkbox-item"><input type="checkbox" checked data-tab-id="' + t.id + '"><img src="' + (t.favIconUrl || getFaviconUrl(t.url)) + '" class="tab-favicon" onerror="this.style.display=\'none\'"><div class="tab-info"><div class="tab-title">' + escapeHtml(t.title) + '</div><div class="tab-url">' + escapeHtml(t.url) + '</div></div></div>').join('');
  modal.classList.add('active');
}

function openTabModal(colId = null, tab = null) {
  const modal = document.getElementById('tabModal');
  const title = document.getElementById('tabModalTitle');
  const del = document.getElementById('deleteTabBtn');
  state.currentCollectionId = colId;
  if (tab) {
    state.editingTab = tab;
    title.textContent = 'Tab bearbeiten';
    del.style.display = 'inline-flex';
    document.getElementById('tabTitle').value = tab.title;
    document.getElementById('tabUrl').value = tab.url;
    document.getElementById('tabNotes').value = tab.notes || '';
  } else {
    state.editingTab = null;
    title.textContent = 'Tab hinzufügen';
    del.style.display = 'none';
    document.getElementById('tabTitle').value = '';
    document.getElementById('tabUrl').value = '';
    document.getElementById('tabNotes').value = '';
  }
  modal.classList.add('active');
}

function openUrl(url) {
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function openWorkspaceModal(ws = null) {
  const modal = document.getElementById('workspaceModal');
  const title = document.getElementById('workspaceModalTitle');
  const del = document.getElementById('deleteWorkspaceBtn');
  if (ws) {
    state.editingWorkspace = ws;
    title.textContent = 'Workspace bearbeiten';
    del.style.display = 'inline-flex';
    document.getElementById('workspaceName').value = ws.name;
    document.getElementById('workspaceDescription').value = ws.description || '';
    state.selectedIcon = ws.icon;
    state.selectedColor = ws.color;
    document.querySelectorAll('.icon-btn').forEach(b => b.classList.toggle('active', b.dataset.icon === ws.icon));
    document.querySelectorAll('.color-btn').forEach(b => b.classList.toggle('active', b.dataset.color === ws.color));
    syncCustomColorBtn(ws.color);
  } else {
    state.editingWorkspace = null;
    title.textContent = 'Neuer Workspace';
    del.style.display = 'none';
    document.getElementById('workspaceName').value = '';
    document.getElementById('workspaceDescription').value = '';
    state.selectedIcon = 'briefcase';
    state.selectedColor = '#667eea';
    document.querySelectorAll('.icon-btn').forEach(b => b.classList.toggle('active', b.dataset.icon === 'briefcase'));
    document.querySelectorAll('.color-btn').forEach(b => b.classList.toggle('active', b.dataset.color === '#667eea'));
    syncCustomColorBtn('#667eea');
  }
  modal.classList.add('active');
}

function syncCustomColorBtn(color) {
  const colorInput = document.getElementById('workspaceColorInput');
  if (colorInput) colorInput.value = color;
  const customBtn = document.getElementById('colorBtnCustom');
  if (!customBtn) return;
  const isPreset = [...document.querySelectorAll('.color-btn:not(.color-btn-custom)')].some(b => b.dataset.color === color);
  customBtn.classList.toggle('has-color', !isPreset);
  if (!isPreset) {
    customBtn.style.setProperty('--custom-color', color);
    customBtn.classList.add('active');
  } else {
    customBtn.style.removeProperty('--custom-color');
    customBtn.classList.remove('active');
  }
}

async function refreshCurrentTabs() {
  // iOS PWA: chrome.tabs nicht verfügbar — Stub
  state.currentTabs = [];
  if (state.currentView === 'sessions') renderCurrentSession();
}

function renderCurrentSession() {
  const c = document.getElementById('currentTabs');
  if (!c) return;
  document.getElementById('tabCount').textContent = state.currentTabs.length;
  document.getElementById('windowCount').textContent = '1';
  const categories = new Set();
  state.currentTabs.forEach(t => { const cat = categorizeTab(t); if (cat) categories.add(cat.name); });
  const catCountEl = document.getElementById('categoryCount');
  if (catCountEl) catCountEl.textContent = categories.size;
  if (!state.currentTabs.length) { c.innerHTML = '<div class="empty-state"><div class="empty-state-icon"></div><p>Keine Tabs offen</p></div>'; return; }
  c.innerHTML = state.currentTabs.map((t, i) => {
    const cat = categorizeTab(t);
    const badge = cat ? '<span class="tab-card-category cat-' + cat.color + '">' + escapeHtml(cat.name) + '</span>' : '';
    return '<div class="tab-card" data-tab-id="' + t.id + '" data-tab-index="' + i + '"><img src="' + (t.favIconUrl || getFaviconUrl(t.url)) + '" class="tab-favicon" onerror="this.style.display=\'none\'"><div class="tab-info"><div class="tab-title">' + escapeHtml(t.title) + '</div><div class="tab-url">' + escapeHtml(t.url) + '</div>' + badge + '</div><button class="tab-close-btn" data-tab-id="' + t.id + '" title="Schließen"><svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button></div>';
  }).join('');
  c.querySelectorAll('.tab-card').forEach((card, i) => {
    const tid = parseInt(card.dataset.tabId);
    const tab = state.currentTabs[i];
    card.addEventListener('click', () => openUrl(tab.url));
    card.addEventListener('contextmenu', (e) => showContextMenu(e, tab));
  });
  // iOS PWA: Tab-Close nicht möglich (keine chrome.tabs API)
}

function categorizeTab(tab) {
  if (!tab.url) return null;
  const url = tab.url.toLowerCase();
  if (url.startsWith('chrome://') || url.startsWith('chrome-extension://') || url.startsWith('brave://') || url.startsWith('edge://')) return null;
  const haystack = url + ' ' + (tab.title || '').toLowerCase();
  for (const cat of TAB_CATEGORIES) {
    if (!cat.keywords.length) continue;
    for (const kw of cat.keywords) {
      if (haystack.includes(kw)) return cat;
    }
  }
  return TAB_CATEGORIES[TAB_CATEGORIES.length - 1];
}

async function groupTabsByCategory() {
  // iOS PWA: Tab-Gruppierung nicht verfügbar
  showToast('Tab-Gruppierung nicht verfügbar auf iOS');
}

async function ungroupAllTabs() {
  // iOS PWA: Tab-Gruppierung nicht verfügbar
  showToast('Tab-Gruppierung nicht verfügbar auf iOS');
}

function renderWorkspaceDetail() {
  const ws = state.workspaces.find(w => w.id === state.currentWorkspaceId);
  if (!ws) { switchView('workspaces'); return; }
  document.getElementById('currentWorkspaceName').textContent = ws.name;
  const c = document.getElementById('collectionsContainer');
  if (!ws.collections?.length) {
    c.innerHTML = '<div class="empty-state"><div class="empty-state-icon"></div><h3>Keine Collections</h3><p>Erstelle eine Collection</p><button class="btn-primary" id="emptyStateCreateCollection" style="margin-top: 16px;">Erste Collection</button></div>';
    document.getElementById('emptyStateCreateCollection')?.addEventListener('click', () => openCollectionModal());
    return;
  }
  c.innerHTML = ws.collections.map((col, ci) => {
    return '<div class="collection-card" data-collection-id="' + col.id + '"><div class="collection-header"><div><div class="collection-title">' + escapeHtml(col.name) + '</div>' + (col.notes ? '<div class="collection-notes">' + escapeHtml(col.notes) + '</div>' : '') + '</div><div class="collection-actions"><button class="btn-icon collection-info" data-collection-id="' + col.id + '" title="Info"><svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg></button><button class="btn-icon collection-add-note" data-collection-id="' + col.id + '" title="Notiz"><svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-1 1.732V14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"/></svg></button><button class="btn-icon collection-open-all" data-collection-id="' + col.id + '" title="Alle öffnen"' + (!col.tabs?.length ? ' disabled' : '') + '><svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/></svg></button><button class="btn-icon collection-add-tab" data-collection-id="' + col.id + '" title="Tab hinzufügen"><svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg></button><button class="btn-icon collection-edit" data-collection-index="' + ci + '" title="Bearbeiten"><svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10z"/></svg></button></div></div>' + (col.stickyNotes?.length ? '<div class="sticky-notes-section">' + col.stickyNotes.map((n, ni) => '<div class="sticky-note" style="background: ' + (n.color || '#feca57') + '"><div class="sticky-note-content">' + escapeHtml(n.content) + '</div><div class="sticky-note-actions"><button class="sticky-note-edit" data-note-index="' + ni + '" data-collection-id="' + col.id + '"></button><button class="sticky-note-delete" data-note-index="' + ni + '" data-collection-id="' + col.id + '"></button></div></div>').join('') + '</div>' : '') + '<div class="collection-tabs">' + (col.tabs?.length ? col.tabs.map((t, ti) => '<div class="collection-tab" data-tab-url="' + escapeHtml(t.url) + '" data-collection-id="' + col.id + '" data-tab-index="' + ti + '"><img src="' + (t.favIconUrl || getFaviconUrl(t.url)) + '" class="collection-tab-favicon" onerror="this.style.display=\'none\'"><div class="collection-tab-content"><div class="collection-tab-title">' + escapeHtml(t.title) + '</div><div class="collection-tab-url">' + escapeHtml(t.url) + '</div>' + (t.notes ? '<div class="collection-tab-notes">' + escapeHtml(t.notes) + '</div>' : '') + '</div><div class="collection-tab-actions"><button class="btn-icon tab-open" data-tab-url="' + escapeHtml(t.url) + '" title="Öffnen"><svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/></svg></button><button class="btn-icon tab-edit" data-collection-id="' + col.id + '" data-tab-index="' + ti + '" title="Bearbeiten"><svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10z"/></svg></button></div></div>').join('') : '<div class="no-tabs-message">Keine Tabs - klicke + um hinzuzufügen</div>') + '</div></div>';
  }).join('');
  
  c.querySelectorAll('.collection-info').forEach(b => { b.addEventListener('click', (e) => { e.stopPropagation(); showCollectionInfo(b.dataset.collectionId); }); });
  c.querySelectorAll('.collection-add-note').forEach(b => { b.addEventListener('click', (e) => { e.stopPropagation(); openNoteModal(b.dataset.collectionId); }); });
  c.querySelectorAll('.collection-open-all').forEach(b => { b.addEventListener('click', (e) => { e.stopPropagation(); openAllCollectionTabs(b.dataset.collectionId); }); });
  c.querySelectorAll('.collection-add-tab').forEach(b => { b.addEventListener('click', (e) => { e.stopPropagation(); openTabModal(b.dataset.collectionId); }); });
  c.querySelectorAll('.collection-edit').forEach(b => { b.addEventListener('click', (e) => { e.stopPropagation(); openCollectionModal(ws.collections[parseInt(b.dataset.collectionIndex)]); }); });
  c.querySelectorAll('.sticky-note-edit').forEach(b => { b.addEventListener('click', (e) => { e.stopPropagation(); const col = ws.collections.find(x => x.id === b.dataset.collectionId); if (col?.stickyNotes?.[parseInt(b.dataset.noteIndex)]) openNoteModal(b.dataset.collectionId, col.stickyNotes[parseInt(b.dataset.noteIndex)], parseInt(b.dataset.noteIndex)); }); });
  c.querySelectorAll('.sticky-note-delete').forEach(b => { b.addEventListener('click', async (e) => { e.stopPropagation(); const col = ws.collections.find(x => x.id === b.dataset.collectionId); if (col?.stickyNotes && confirm('Notiz löschen?')) { col.stickyNotes.splice(parseInt(b.dataset.noteIndex), 1); await saveData(); render(); } }); });
  c.querySelectorAll('.collection-tab').forEach(el => {
    el.addEventListener('click', () => openUrl(el.dataset.tabUrl));
    el.addEventListener('contextmenu', (e) => { e.preventDefault(); const col = ws.collections.find(x => x.id === el.dataset.collectionId); if (col?.tabs?.[parseInt(el.dataset.tabIndex)]) showContextMenu(e, col.tabs[parseInt(el.dataset.tabIndex)], el.dataset.collectionId); });
    el.addEventListener('mouseenter', (e) => { const col = ws.collections.find(x => x.id === el.dataset.collectionId); if (col?.tabs?.[parseInt(el.dataset.tabIndex)]) state.tabPreviewTimeout = setTimeout(() => showTabPreview(e, col.tabs[parseInt(el.dataset.tabIndex)]), 500); });
    el.addEventListener('mouseleave', () => { clearTimeout(state.tabPreviewTimeout); hideTabPreview(); });
  });
  c.querySelectorAll('.tab-open').forEach(b => { b.addEventListener('click', (e) => { e.stopPropagation(); openUrl(b.dataset.tabUrl); }); });
  c.querySelectorAll('.tab-edit').forEach(b => { b.addEventListener('click', (e) => { e.stopPropagation(); const col = ws.collections.find(x => x.id === b.dataset.collectionId); if (col?.tabs?.[parseInt(b.dataset.tabIndex)]) editTab(b.dataset.collectionId, col.tabs[parseInt(b.dataset.tabIndex)]); }); });
}

function renderWorkspaces() {
  const c = document.getElementById('workspacesGrid');
  if (!c) return;
  if (!state.workspaces.length) { c.innerHTML = '<div class="empty-state"><div class="empty-state-icon">' + getIconHTML('folder') + '</div><h3>Keine Workspaces</h3><p>Erstelle deinen ersten Workspace</p></div>'; return; }
  c.innerHTML = state.workspaces.map(w => {
    const cc = w.collections?.length || 0;
    const tc = w.collections?.reduce((s, x) => s + (x.tabs?.length || 0), 0) || 0;
    return '<div class="workspace-card" style="--workspace-color: ' + w.color + '" data-workspace-id="' + w.id + '"><div class="workspace-header"><div class="workspace-card-icon" style="background: ' + w.color + '20; color: ' + w.color + ';">' + getIconHTML(w.icon) + '</div><div class="workspace-info"><div class="workspace-title">' + escapeHtml(w.name) + '</div>' + (w.description ? '<div class="workspace-description">' + escapeHtml(w.description) + '</div>' : '') + '</div></div><div class="workspace-stats"><div class="workspace-stat"><span class="workspace-stat-value">' + cc + '</span><span class="workspace-stat-label">Collections</span></div><div class="workspace-stat"><span class="workspace-stat-value">' + tc + '</span><span class="workspace-stat-label">Tabs</span></div></div></div>';
  }).join('');
  c.querySelectorAll('.workspace-card').forEach(card => { card.addEventListener('click', () => selectWorkspace(card.dataset.workspaceId)); });
}

async function saveCollection() {
  const name = document.getElementById('collectionName').value.trim();
  if (!name) { showToast('Name eingeben'); return; }
  const ws = state.workspaces.find(w => w.id === state.currentWorkspaceId);
  if (!ws) return;
  if (!ws.collections) ws.collections = [];
  if (state.editingCollection) { state.editingCollection.name = name; state.editingCollection.notes = document.getElementById('collectionNotes').value.trim(); }
  else { ws.collections.push({ id: generateId(), name, notes: document.getElementById('collectionNotes').value.trim(), tabs: [], stickyNotes: [], createdAt: new Date().toISOString() }); }
  await saveData();
  closeModals();
  render();
  showToast('Gespeichert');
}

async function saveCurrentSession() {
  const wsId = document.getElementById('sessionWorkspace').value;
  let colId = document.getElementById('sessionCollection').value;
  if (!wsId) { showToast('Workspace wählen'); return; }
  if (!colId) { showToast('Collection wählen'); return; }
  const ws = state.workspaces.find(w => w.id === wsId);
  if (!ws) return;
  if (!ws.collections) ws.collections = [];
  if (colId === '__new__') {
    const name = document.getElementById('newCollectionName').value.trim();
    if (!name) { showToast('Name eingeben'); return; }
    const newCol = { id: generateId(), name, notes: 'Session vom ' + new Date().toLocaleString('de-DE'), tabs: [], stickyNotes: [], createdAt: new Date().toISOString() };
    ws.collections.push(newCol);
    colId = newCol.id;
  }
  const col = ws.collections.find(c => c.id === colId);
  if (!col) return;
  if (!col.tabs) col.tabs = [];
  const checked = document.querySelectorAll('#sessionTabsList input[type="checkbox"]:checked');
  const ids = Array.from(checked).map(cb => parseInt(cb.dataset.tabId));
  const selected = state.currentTabs.filter(t => ids.includes(t.id));
  for (const t of selected) { col.tabs.push({ id: generateId(), title: t.title, url: t.url, favIconUrl: t.favIconUrl || getFaviconUrl(t.url), notes: '', createdAt: new Date().toISOString() }); }
  await saveData();
  closeModals();
  state.currentWorkspaceId = wsId;
  switchView('workspace-detail');
  showToast(selected.length + ' Tabs gespeichert');
}

async function saveNote() {
  const content = document.getElementById('noteContent').value.trim();
  if (!content) { showToast('Text eingeben'); return; }
  const ws = state.workspaces.find(w => w.id === state.currentWorkspaceId);
  const col = ws?.collections?.find(c => c.id === state.currentCollectionId);
  if (!col) return;
  if (!col.stickyNotes) col.stickyNotes = [];
  const color = document.querySelector('.note-color-btn.active')?.dataset.color || '#feca57';
  if (state.editingNote) { col.stickyNotes[state.editingNote.noteIndex] = { ...col.stickyNotes[state.editingNote.noteIndex], content, color, updatedAt: new Date().toISOString() }; }
  else { col.stickyNotes.push({ id: generateId(), content, color, createdAt: new Date().toISOString() }); }
  await saveData();
  closeModals();
  render();
  showToast('Gespeichert');
}

async function saveTab() {
  const title = document.getElementById('tabTitle').value.trim();
  const url = document.getElementById('tabUrl').value.trim();
  if (!title || !url) { showToast('Titel und URL eingeben'); return; }
  const ws = state.workspaces.find(w => w.id === state.currentWorkspaceId);
  const col = ws?.collections?.find(c => c.id === state.currentCollectionId);
  if (!col) return;
  if (!col.tabs) col.tabs = [];
  if (state.editingTab) { state.editingTab.title = title; state.editingTab.url = url; state.editingTab.notes = document.getElementById('tabNotes').value.trim(); state.editingTab.favIconUrl = getFaviconUrl(url); }
  else { col.tabs.push({ id: generateId(), title, url, notes: document.getElementById('tabNotes').value.trim(), favIconUrl: getFaviconUrl(url), createdAt: new Date().toISOString() }); }
  await saveData();
  closeModals();
  render();
  showToast('Gespeichert');
}

async function saveWorkspace() {
  const name = document.getElementById('workspaceName').value.trim();
  if (!name) { showToast('Name eingeben'); return; }
  if (state.editingWorkspace) {
    state.editingWorkspace.name = name;
    state.editingWorkspace.description = document.getElementById('workspaceDescription').value.trim();
    state.editingWorkspace.icon = state.selectedIcon;
    state.editingWorkspace.color = state.selectedColor;
  } else {
    state.workspaces.push({ id: generateId(), name, description: document.getElementById('workspaceDescription').value.trim(), icon: state.selectedIcon, color: state.selectedColor, collections: [], createdAt: new Date().toISOString() });
  }
  await saveData();
  closeModals();
  render();
  showToast('Gespeichert');
}

function selectWorkspace(id) {
  state.currentWorkspaceId = id;
  state.currentView = 'workspace-detail';
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('workspace-detail-view')?.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
  render();
}

function showCollectionInfo(colId) {
  const ws = state.workspaces.find(w => w.id === state.currentWorkspaceId);
  if (!ws) return;
  const col = ws.collections.find(c => c.id === colId);
  if (!col) return;
  const modal = document.getElementById('collectionInfoModal');
  if (!modal) { alert('Collection: ' + col.name + '\n\nTabs: ' + (col.tabs?.length || 0) + '\nNotizen: ' + (col.stickyNotes?.length || 0)); return; }
  const domains = {};
  col.tabs?.forEach(t => { try { const d = new URL(t.url).hostname; domains[d] = (domains[d] || 0) + 1; } catch {} });
  const topDomains = Object.entries(domains).sort((a, b) => b[1] - a[1]).slice(0, 5);
  modal.querySelector('.collection-info-name').textContent = col.name;
  modal.querySelector('.collection-info-stats').innerHTML = '<div class="info-stat"><span class="info-stat-value">' + (col.tabs?.length || 0) + '</span><span class="info-stat-label">Tabs</span></div><div class="info-stat"><span class="info-stat-value">' + (col.stickyNotes?.length || 0) + '</span><span class="info-stat-label">Notizen</span></div><div class="info-stat"><span class="info-stat-value">' + (col.createdAt ? new Date(col.createdAt).toLocaleDateString('de-DE') : '-') + '</span><span class="info-stat-label">Erstellt</span></div>';
  modal.querySelector('.collection-info-domains').innerHTML = topDomains.length ? '<h4>Top Domains</h4>' + topDomains.map(([d, c]) => '<div class="domain-item"><img src="https://www.google.com/s2/favicons?domain=' + d + '&sz=16" class="domain-favicon" onerror="this.style.display=\'none\'"><span class="domain-name">' + d + '</span><span class="domain-count">' + c + '</span></div>').join('') : '<p>Keine Tabs</p>';
  modal.classList.add('active');
}

function updateSessionCollections() {
  const wsId = document.getElementById('sessionWorkspace').value;
  const cs = document.getElementById('sessionCollection');
  if (!wsId) { cs.innerHTML = '<option value="">Erst Workspace wählen...</option>'; return; }
  const ws = state.workspaces.find(w => w.id === wsId);
  if (!ws?.collections?.length) { cs.innerHTML = '<option value="__new__">+ Neue Collection</option>'; return; }
  cs.innerHTML = '<option value="">Collection wählen...</option>' + ws.collections.map(c => '<option value="' + c.id + '">' + escapeHtml(c.name) + '</option>').join('') + '<option value="__new__">+ Neue Collection</option>';
}

function updateWorkspacesCount() {
  const ce = document.getElementById('workspacesCount');
  if (ce) ce.textContent = state.workspaces.length;
  const hb = document.getElementById('historyCount');
  if (hb) hb.textContent = state.sessionHistory?.length || 0;
}

function updateWorkspacesList() {
  const c = document.getElementById('workspacesList');
  if (!c) return;
  if (!state.workspaces.length) { c.innerHTML = '<div style="padding: 12px 16px; font-size: 12px; color: var(--text-tertiary);">Keine Workspaces</div>'; return; }
  c.innerHTML = state.workspaces.map(w => '<div class="workspace-item' + (state.currentWorkspaceId === w.id ? ' active' : '') + '" data-workspace-id="' + w.id + '"><div class="workspace-icon" style="background: ' + w.color + '20; color: ' + w.color + ';">' + getIconHTML(w.icon) + '</div><span>' + escapeHtml(w.name) + '</span></div>').join('');
  c.querySelectorAll('.workspace-item').forEach(i => { i.addEventListener('click', () => selectWorkspace(i.dataset.workspaceId)); });
}


window.selectWorkspace = selectWorkspace;
window.openAllCollectionTabs = openAllCollectionTabs;
window.openTabModal = openTabModal;
window.editTab = editTab;
window.openUrl = openUrl;
window.openCollectionModal = openCollectionModal;
window.openNoteModal = openNoteModal;
window.showCollectionInfo = showCollectionInfo;
window.openAddToCollectionModal = openAddToCollectionModal;

// =====================================================
// WIDGET SYSTEM
// =====================================================

// WMO Weather Codes mapping
const WMO_CODES = {
  0: { desc: 'Klar', icon: '\u2600\uFE0F' },
  1: { desc: 'Meist klar', icon: '\uD83C\uDF24\uFE0F' },
  2: { desc: 'Teilweise bewoelkt', icon: '\u26C5' },
  3: { desc: 'Bewoelkt', icon: '\u2601\uFE0F' },
  45: { desc: 'Nebel', icon: '\uD83C\uDF2B\uFE0F' },
  48: { desc: 'Raufreif-Nebel', icon: '\uD83C\uDF2B\uFE0F' },
  51: { desc: 'Leichter Nieselregen', icon: '\uD83C\uDF26\uFE0F' },
  53: { desc: 'Nieselregen', icon: '\uD83C\uDF26\uFE0F' },
  55: { desc: 'Starker Nieselregen', icon: '\uD83C\uDF27\uFE0F' },
  61: { desc: 'Leichter Regen', icon: '\uD83C\uDF26\uFE0F' },
  63: { desc: 'Regen', icon: '\uD83C\uDF27\uFE0F' },
  65: { desc: 'Starker Regen', icon: '\uD83C\uDF27\uFE0F' },
  66: { desc: 'Gefrierender Regen', icon: '\uD83C\uDF28\uFE0F' },
  67: { desc: 'Starker gefr. Regen', icon: '\uD83C\uDF28\uFE0F' },
  71: { desc: 'Leichter Schneefall', icon: '\uD83C\uDF28\uFE0F' },
  73: { desc: 'Schneefall', icon: '\u2744\uFE0F' },
  75: { desc: 'Starker Schneefall', icon: '\u2744\uFE0F' },
  77: { desc: 'Schneegriesel', icon: '\u2744\uFE0F' },
  80: { desc: 'Leichte Regenschauer', icon: '\uD83C\uDF26\uFE0F' },
  81: { desc: 'Regenschauer', icon: '\uD83C\uDF27\uFE0F' },
  82: { desc: 'Starke Regenschauer', icon: '\uD83C\uDF27\uFE0F' },
  85: { desc: 'Leichte Schneeschauer', icon: '\uD83C\uDF28\uFE0F' },
  86: { desc: 'Starke Schneeschauer', icon: '\u2744\uFE0F' },
  95: { desc: 'Gewitter', icon: '\u26C8\uFE0F' },
  96: { desc: 'Gewitter mit Hagel', icon: '\u26C8\uFE0F' },
  99: { desc: 'Gewitter mit starkem Hagel', icon: '\u26C8\uFE0F' }
};

function getWeatherInfo(code) {
  return WMO_CODES[code] || { desc: 'Unbekannt', icon: '\u2753' };
}

function registerWidget(type, definition) {
  state.widgetRegistry[type] = definition;
}

function registerAllWidgets() {
  registerWidget('weather', {
    name: 'Wetter',
    icon: '\u26C5',
    description: 'Aktuelles Wetter und Vorhersage',
    defaultSize: 'widget-3x2',
    defaultConfig: {
      location: null,
      units: 'celsius'
    },
    render: renderWeatherWidget,
    onSettingsOpen: openWeatherSettings
  });

  registerWidget('news', {
    name: 'Tech News',
    icon: '\uD83D\uDCF0',
    description: 'KI & Tech Newsticker',
    defaultSize: 'widget-3x2',
    defaultConfig: {
      topic: 'ai-news',
      refreshInterval: 10
    },
    render: renderNewsWidget,
    onSettingsOpen: openNewsSettings
  });

  registerWidget('analog-clock', {
    name: 'Analog Clock',
    icon: '\u231A',
    description: 'Zeigt mehrere Zeitzonen an',
    defaultSize: 'widget-2x2',
    defaultConfig: {
      timezones: ['Europe/Berlin']
    },
    render: renderAnalogClockWidget,
    onSettingsOpen: openAnalogClockSettings
  });

  registerWidget('notepad', {
    name: 'Notizen',
    icon: '\uD83D\uDCDD',
    description: 'Mehrere Notizen mit Schriftart & Farben',
    defaultSize: 'widget-3x2',
    defaultConfig: {
      notes: [{ id: 'note-1', title: 'Notiz 1', text: '', createdAt: Date.now() }],
      currentNoteId: 'note-1',
      font: 'default',
      fontSize: 14,
      backgroundColor: '#feca57',
      widgetSize: 'widget-3x2'
    },
    render: renderNotepadWidget,
    onSettingsOpen: openNotepadSettings
  });
}

// --- Widget CRUD ---

async function addWidget(type) {
  const def = state.widgetRegistry[type];
  if (!def) return;
  const widget = {
    id: generateId(),
    type: type,
    position: state.widgets.length,
    size: def.defaultSize,
    config: JSON.parse(JSON.stringify(def.defaultConfig))
  };
  state.widgets.push(widget);
  await saveWidgetLayout();
  closeModals();
  renderHome();

  // If weather widget has no location, open settings immediately
  if (type === 'weather' && !widget.config.location) {
    openWidgetSettings(widget.id);
  }
}

async function removeWidget(id) {
  if (!confirm('Widget entfernen?')) return;
  state.widgets = state.widgets.filter(w => w.id !== id);
  // Re-index positions
  state.widgets.forEach((w, i) => w.position = i);
  await saveWidgetLayout();
  renderHome();
  showToast('Widget entfernt');
}

async function saveWidgetLayout() {
  await chrome.storage.local.set({ widgets: state.widgets });
}

// --- Render Home ---

function renderHome() {
  const grid = document.getElementById('widgetGrid');
  if (!grid) return;

  if (!state.widgets.length) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-state-icon">\uD83C\uDFE0</div>
        <h3>Willkommen!</h3>
        <p>Fuege dein erstes Widget hinzu, um loszulegen.</p>
        <button class="btn-primary" id="emptyAddWidgetBtn" style="margin-top: 16px;">+ Widget hinzufuegen</button>
      </div>
    `;
    document.getElementById('emptyAddWidgetBtn')?.addEventListener('click', openAddWidgetModal);
    return;
  }

  // Sort by position
  const sorted = [...state.widgets].sort((a, b) => a.position - b.position);

  grid.innerHTML = sorted.map(widget => {
    const def = state.widgetRegistry[widget.type];
    if (!def) return '';
    return `
      <div class="widget ${widget.size}" data-widget-id="${widget.id}" draggable="true">
        <div class="widget-header">
          <span class="widget-drag-handle">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><circle cx="4" cy="3" r="1.5"/><circle cx="10" cy="3" r="1.5"/><circle cx="4" cy="7" r="1.5"/><circle cx="10" cy="7" r="1.5"/><circle cx="4" cy="11" r="1.5"/><circle cx="10" cy="11" r="1.5"/></svg>
          </span>
          <span class="widget-title">${def.icon} ${escapeHtml(def.name)}</span>
          <span class="widget-header-actions">
            <button class="widget-settings-btn" data-widget-id="${widget.id}" title="Einstellungen" draggable="false">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.421 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.421-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.116l.094-.318z"/></svg>
            </button>
            <button class="widget-remove-btn" data-widget-id="${widget.id}" title="Entfernen" draggable="false">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
            </button>
          </span>
        </div>
        <div class="widget-body" id="widget-body-${widget.id}"></div>
      </div>
    `;
  }).join('');

  // Attach widget button event listeners
  grid.querySelectorAll('.widget-settings-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openWidgetSettings(btn.dataset.widgetId);
    });
  });
  grid.querySelectorAll('.widget-remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeWidget(btn.dataset.widgetId);
    });
  });

  // Render widget contents
  sorted.forEach(widget => {
    const def = state.widgetRegistry[widget.type];
    if (def && def.render) {
      def.render(widget);
    }
  });

  // Setup drag and drop
  setupWidgetDrag();
}

// --- Drag and Drop ---

function setupWidgetDrag() {
  const grid = document.getElementById('widgetGrid');
  if (!grid) return;

  let draggedId = null;

  grid.querySelectorAll('.widget[draggable]').forEach(el => {
    el.addEventListener('dragstart', (e) => {
      // Only allow drag from the header/drag-handle, not from action buttons
      if (e.target.closest('.widget-header-actions')) {
        e.preventDefault();
        return;
      }
      draggedId = el.dataset.widgetId;
      el.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', draggedId);
    });

    el.addEventListener('dragend', () => {
      el.classList.remove('dragging');
      grid.querySelectorAll('.widget').forEach(w => w.classList.remove('drag-over'));
      draggedId = null;
    });

    el.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      if (el.dataset.widgetId !== draggedId) {
        el.classList.add('drag-over');
      }
    });

    el.addEventListener('dragleave', () => {
      el.classList.remove('drag-over');
    });

    el.addEventListener('drop', async (e) => {
      e.preventDefault();
      el.classList.remove('drag-over');
      const fromId = e.dataTransfer.getData('text/plain');
      const toId = el.dataset.widgetId;
      if (fromId === toId) return;

      const fromIdx = state.widgets.findIndex(w => w.id === fromId);
      const toIdx = state.widgets.findIndex(w => w.id === toId);
      if (fromIdx === -1 || toIdx === -1) return;

      // Swap positions
      const [moved] = state.widgets.splice(fromIdx, 1);
      state.widgets.splice(toIdx, 0, moved);
      state.widgets.forEach((w, i) => w.position = i);

      await saveWidgetLayout();
      renderHome();
    });
  });
}

// --- Widget Settings ---

function openWidgetSettings(widgetId) {
  const widget = state.widgets.find(w => w.id === widgetId);
  if (!widget) return;
  const def = state.widgetRegistry[widget.type];
  if (!def || !def.onSettingsOpen) return;

  state.editingWidgetId = widgetId;
  def.onSettingsOpen(widget);

  const modal = document.getElementById('widgetSettingsModal');
  modal?.classList.add('active');
}

async function saveWidgetSettings() {
  const widget = state.widgets.find(w => w.id === state.editingWidgetId);
  if (!widget) return;

  if (widget.type === 'weather') {
    saveWeatherSettings(widget);
  } else if (widget.type === 'news') {
    saveNewsSettings(widget);
  } else if (widget.type === 'analog-clock') {
    const timezoneList = document.getElementById('timezoneList');
    if (timezoneList) {
      widget.config.timezones = Array.from(timezoneList.querySelectorAll('.analog-clock-settings-timezone-select'))
        .map(select => select.value);
    }
  } else if (widget.type === 'notepad') {
    saveNotepadSettings(widget);
  }

  await saveWidgetLayout();
  closeModals();
  renderHome();
}

// --- Add Widget Modal ---

function openAddWidgetModal() {
  const catalog = document.getElementById('widgetCatalog');
  if (!catalog) return;

  catalog.innerHTML = Object.entries(state.widgetRegistry).map(([type, def]) => `
    <div class="widget-catalog-item" data-type="${type}">
      <div class="widget-catalog-icon">${def.icon}</div>
      <div class="widget-catalog-name">${escapeHtml(def.name)}</div>
      <div class="widget-catalog-desc">${escapeHtml(def.description)}</div>
    </div>
  `).join('');

  catalog.querySelectorAll('.widget-catalog-item').forEach(item => {
    item.addEventListener('click', () => {
      addWidget(item.dataset.type);
    });
  });

  document.getElementById('addWidgetModal')?.classList.add('active');
}

// =====================================================
// WEATHER WIDGET
// =====================================================

let weatherRefreshTimers = {};

function renderWeatherWidget(widget) {
  const body = document.getElementById('widget-body-' + widget.id);
  if (!body) return;

  if (!widget.config.location) {
    body.innerHTML = `
      <div class="weather-loading">
        <div style="text-align: center;">
          <div style="font-size: 36px; margin-bottom: 12px;">\uD83C\uDF0D</div>
          <p>Kein Standort festgelegt</p>
          <button class="btn-secondary btn-small weather-set-location" style="margin-top: 12px;">Standort waehlen</button>
        </div>
      </div>
    `;
    body.querySelector('.weather-set-location')?.addEventListener('click', () => openWidgetSettings(widget.id));
    return;
  }

  body.innerHTML = '<div class="weather-loading">Wetter wird geladen...</div>';
  fetchWeather(widget);
}

async function fetchWeather(widget) {
  const body = document.getElementById('widget-body-' + widget.id);
  if (!body || !widget.config.location) return;

  const { lat, lon } = widget.config.location;

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=4`;
    const resp = await fetch(url);
    if (!resp.ok) throw new Error('API error');
    const data = await resp.json();

    const current = data.current;
    const daily = data.daily;
    const weatherInfo = getWeatherInfo(current.weather_code);

    const dayNames = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

    body.innerHTML = `
      <div class="weather-current">
        <div class="weather-icon">${weatherInfo.icon}</div>
        <div class="weather-main">
          <div class="weather-temp">${Math.round(current.temperature_2m)}\u00B0C</div>
          <div class="weather-desc">${escapeHtml(weatherInfo.desc)}</div>
        </div>
      </div>
      <div class="weather-details">
        <div class="weather-detail">
          <span class="weather-detail-label">Gefuehlt</span>
          <span class="weather-detail-value">${Math.round(current.apparent_temperature)}\u00B0</span>
        </div>
        <div class="weather-detail">
          <span class="weather-detail-label">Luftfeucht.</span>
          <span class="weather-detail-value">${current.relative_humidity_2m}%</span>
        </div>
        <div class="weather-detail">
          <span class="weather-detail-label">Wind</span>
          <span class="weather-detail-value">${Math.round(current.wind_speed_10m)} km/h</span>
        </div>
      </div>
      <div class="weather-forecast">
        ${daily.time.slice(1, 4).map((date, i) => {
          const d = new Date(date);
          const dayInfo = getWeatherInfo(daily.weather_code[i + 1]);
          return `
            <div class="forecast-day">
              <div class="forecast-day-name">${dayNames[d.getDay()]}</div>
              <div class="forecast-day-icon">${dayInfo.icon}</div>
              <div class="forecast-day-temp">${Math.round(daily.temperature_2m_max[i + 1])}\u00B0</div>
              <div class="forecast-day-low">${Math.round(daily.temperature_2m_min[i + 1])}\u00B0</div>
            </div>
          `;
        }).join('')}
      </div>
      <div class="weather-location-name">${escapeHtml(widget.config.location.name)}</div>
    `;

    // Setup auto-refresh every 30 minutes
    if (weatherRefreshTimers[widget.id]) clearInterval(weatherRefreshTimers[widget.id]);
    weatherRefreshTimers[widget.id] = setInterval(() => fetchWeather(widget), 30 * 60 * 1000);

  } catch (err) {
    console.error('Weather fetch error:', err);
    body.innerHTML = `
      <div class="weather-error">
        <div style="text-align: center;">
          <p>Wetterdaten konnten nicht geladen werden.</p>
          <button class="btn-secondary btn-small weather-retry" style="margin-top: 8px;">Erneut versuchen</button>
        </div>
      </div>
    `;
    body.querySelector('.weather-retry')?.addEventListener('click', () => retryWeather(widget.id));
  }
}

// --- Weather Settings ---

let locationSearchTimer = null;

function openWeatherSettings(widget) {
  const content = document.getElementById('widgetSettingsContent');
  if (!content) return;

  const locName = widget.config.location ? widget.config.location.name : '';

  content.innerHTML = `
    <div class="form-group">
      <label>Standort</label>
      <div class="location-search">
        <input type="text" id="locationSearchInput" placeholder="Stadt suchen..." value="${escapeHtml(locName)}" autocomplete="off">
        <div class="location-results" id="locationResults"></div>
      </div>
    </div>
    <input type="hidden" id="selectedLat" value="${widget.config.location?.lat || ''}">
    <input type="hidden" id="selectedLon" value="${widget.config.location?.lon || ''}">
    <input type="hidden" id="selectedLocationName" value="${escapeHtml(locName)}">
  `;

  const input = document.getElementById('locationSearchInput');
  input?.addEventListener('input', () => {
    clearTimeout(locationSearchTimer);
    locationSearchTimer = setTimeout(() => {
      searchLocation(input.value.trim());
    }, 300);
  });
}

async function searchLocation(query) {
  const results = document.getElementById('locationResults');
  if (!results || query.length < 2) {
    results?.classList.remove('active');
    return;
  }

  try {
    const resp = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=de`);
    if (!resp.ok) throw new Error('Geocoding error');
    const data = await resp.json();

    if (!data.results?.length) {
      results.innerHTML = '<div class="location-result-item">Keine Ergebnisse</div>';
      results.classList.add('active');
      return;
    }

    results.innerHTML = data.results.map((r, i) => `
      <div class="location-result-item" data-index="${i}">
        ${escapeHtml(r.name)}${r.admin1 ? ', ' + escapeHtml(r.admin1) : ''} <span class="country">${escapeHtml(r.country || '')}</span>
      </div>
    `).join('');

    results.querySelectorAll('.location-result-item').forEach((item, i) => {
      item.addEventListener('click', () => {
        const loc = data.results[i];
        document.getElementById('locationSearchInput').value = loc.name + (loc.admin1 ? ', ' + loc.admin1 : '') + ', ' + (loc.country || '');
        document.getElementById('selectedLat').value = loc.latitude;
        document.getElementById('selectedLon').value = loc.longitude;
        document.getElementById('selectedLocationName').value = loc.name + (loc.admin1 ? ', ' + loc.admin1 : '');
        results.classList.remove('active');
      });
    });

    results.classList.add('active');
  } catch (err) {
    console.error('Location search error:', err);
    results.innerHTML = '<div class="location-result-item">Fehler bei der Suche</div>';
    results.classList.add('active');
  }
}

function saveWeatherSettings(widget) {
  const lat = document.getElementById('selectedLat')?.value;
  const lon = document.getElementById('selectedLon')?.value;
  const name = document.getElementById('selectedLocationName')?.value;

  if (lat && lon && name) {
    widget.config.location = {
      name: name,
      lat: parseFloat(lat),
      lon: parseFloat(lon)
    };
  }
}

function retryWeather(widgetId) {
  const widget = state.widgets.find(w => w.id === widgetId);
  if (widget) fetchWeather(widget);
}

// =====================================================
// NEWS WIDGET
// =====================================================

const NEWS_TOPICS = {
  'tagesschau': {
    name: 'Tagesschau',
    icon: '📺',
    feed: 'https://www.tagesschau.de/xml/rss2/',
    color: '#003c8f'
  },
  'heise': {
    name: 'Heise Online',
    icon: '💻',
    feed: 'https://www.heise.de/rss/heise-atom.xml',
    color: '#cc0000'
  },
  'golem': {
    name: 'Golem.de',
    icon: '🔧',
    feed: 'https://rss.golem.de/rss.php?feed=RSS2.0',
    color: '#e0820a'
  },
  't3n': {
    name: 't3n',
    icon: '🚀',
    feed: 'https://t3n.de/rss.xml',
    color: '#f0c419'
  },
  'spiegel': {
    name: 'Spiegel Online',
    icon: '📰',
    feed: 'https://www.spiegel.de/schlagzeilen/tops/index.rss',
    color: '#e8001a'
  },
  'zeit': {
    name: 'Zeit Online',
    icon: '⏰',
    feed: 'https://newsfeed.zeit.de/all',
    color: '#5a5a5a'
  },
  'sueddeutsche': {
    name: 'Süddeutsche Zeitung',
    icon: '🗞️',
    feed: 'https://rss.sueddeutsche.de/rss/Top-Themen',
    color: '#e10000'
  },
  'faz': {
    name: 'FAZ',
    icon: '📄',
    feed: 'https://www.faz.net/rss/aktuell/',
    color: '#0046a3'
  },
  'welt': {
    name: 'Welt',
    icon: '🌍',
    feed: 'https://www.welt.de/feeds/latest.rss',
    color: '#004b8d'
  },
  'handelsblatt': {
    name: 'Handelsblatt',
    icon: '💼',
    feed: 'https://www.handelsblatt.com/contentexport/feed/schlagzeilen',
    color: '#e4002b'
  },
  'all-ai': {
    name: 'All-AI.de',
    icon: '🤖',
    feed: 'https://www.all-ai.de/component/jmap/sitemap/gnews?format=gnews',
    color: '#8b5cf6'
  }
};

let newsRefreshTimers = {};
let newsCache = {};

function renderNewsWidget(widget) {
  const body = document.getElementById('widget-body-' + widget.id);
  if (!body) return;

  const topic = widget.config.topic || 'tagesschau';
  const topicInfo = NEWS_TOPICS[topic] || NEWS_TOPICS['tagesschau'];

  body.innerHTML = `
    <div style="display: flex; flex-direction: column; height: 100%;">
      <div class="news-widget-header">
        <select class="news-topic-select" id="news-topic-${widget.id}">
          ${Object.entries(NEWS_TOPICS).map(([key, t]) => `
            <option value="${key}" ${key === topic ? 'selected' : ''}>${t.icon} ${t.name}</option>
          `).join('')}
        </select>
        <button class="news-refresh-btn" id="news-refresh-${widget.id}" title="Aktualisieren">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
          </svg>
        </button>
      </div>
      <div class="news-ticker-container" id="news-ticker-${widget.id}">
        <div class="news-loading">
          <div class="news-loading-spinner"></div>
          <span>Lade ${topicInfo.name}...</span>
        </div>
      </div>
      <div class="news-footer">
        <div class="news-footer-source">
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/></svg>
          <span id="news-source-${widget.id}">${topicInfo.name}</span>
        </div>
        <span id="news-updated-${widget.id}">Wird geladen...</span>
      </div>
    </div>
  `;

  // Attach event listeners
  const topicSelect = document.getElementById(`news-topic-${widget.id}`);
  const refreshBtn = document.getElementById(`news-refresh-${widget.id}`);

  topicSelect?.addEventListener('change', async (e) => {
    widget.config.topic = e.target.value;
    await saveWidgetLayout();
    fetchNews(widget, true);
  });

  refreshBtn?.addEventListener('click', () => {
    fetchNews(widget, true);
  });

  // Fetch initial news
  fetchNews(widget);

  // Setup auto-refresh (every 5 minutes)
  if (newsRefreshTimers[widget.id]) clearInterval(newsRefreshTimers[widget.id]);
  newsRefreshTimers[widget.id] = setInterval(() => fetchNews(widget), 5 * 60 * 1000);
}

async function fetchNews(widget, forceRefresh = false) {
  const container = document.getElementById(`news-ticker-${widget.id}`);
  const sourceEl = document.getElementById(`news-source-${widget.id}`);
  const updatedEl = document.getElementById(`news-updated-${widget.id}`);
  const refreshBtn = document.getElementById(`news-refresh-${widget.id}`);

  if (!container) return;

  const topic = widget.config.topic || 'tagesschau';
  const topicInfo = NEWS_TOPICS[topic] || NEWS_TOPICS['tagesschau'];

  // Update source display
  if (sourceEl) sourceEl.textContent = topicInfo.name;

  // Check cache (valid for 5 minutes)
  const cacheKey = `news_${topic}`;
  const cached = newsCache[cacheKey];
  if (!forceRefresh && cached && (Date.now() - cached.timestamp < 5 * 60 * 1000)) {
    renderNewsItems(container, cached.items, topicInfo);
    if (updatedEl) updatedEl.textContent = formatNewsTime(cached.timestamp);
    return;
  }

  // Show loading state
  container.innerHTML = `
    <div class="news-loading">
      <div class="news-loading-spinner"></div>
      <span>Lade ${topicInfo.name}...</span>
    </div>
  `;

  // Spin refresh button
  if (refreshBtn) refreshBtn.classList.add('spinning');

  try {
    let items = null;

    // Try multiple RSS-to-JSON services as fallback
    const feedUrl = topicInfo.feed;

    // Method 1: Try Toptal feed2json
    try {
      const toptalUrl = `https://www.toptal.com/developers/feed2json/convert?url=${encodeURIComponent(feedUrl)}`;
      const resp = await fetch(toptalUrl);
      if (resp.ok) {
        const data = await resp.json();
        if (data.items?.length) {
          items = data.items.map(item => ({
            title: item.title,
            link: item.url || item.link,
            pubDate: item.date_published || item.pubDate || item.date_modified,
            author: item.author?.name || item.author || null
          }));
        }
      }
    } catch (e) {
      console.log('Toptal feed2json failed, trying next...', e.message);
    }

    // Method 2: Try rss.app proxy
    if (!items) {
      try {
        const rssAppUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}&api_key=free&count=5`;
        const resp = await fetch(rssAppUrl);
        if (resp.ok) {
          const data = await resp.json();
          if (data.status === 'ok' && data.items?.length) {
            items = data.items;
          }
        }
      } catch (e) {
        console.log('rss2json failed, trying next...', e.message);
      }
    }

    // Method 3: Direct fetch with XML parsing (works for some feeds due to CORS headers)
    if (!items) {
      try {
        const resp = await fetch(feedUrl);
        if (resp.ok) {
          const text = await resp.text();
          items = parseRSSXml(text);
        }
      } catch (e) {
        console.log('Direct RSS fetch failed', e.message);
      }
    }

    // Method 4: Use allorigins.win CORS proxy as last resort
    if (!items) {
      try {
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`;
        const resp = await fetch(proxyUrl);
        if (resp.ok) {
          const text = await resp.text();
          items = parseRSSXml(text);
        }
      } catch (e) {
        console.log('AllOrigins proxy failed', e.message);
      }
    }

    if (!items || !items.length) {
      throw new Error('Keine Artikel gefunden');
    }

    // Cache the results
    newsCache[cacheKey] = {
      items: items,
      timestamp: Date.now()
    };

    renderNewsItems(container, items, topicInfo);
    if (updatedEl) updatedEl.textContent = formatNewsTime(Date.now());

  } catch (err) {
    console.error('News fetch error:', err);
    container.innerHTML = `
      <div class="news-error">
        <div style="font-size: 32px; opacity: 0.5;">📡</div>
        <p>News konnten nicht geladen werden</p>
        <button class="btn-secondary btn-small news-retry-btn" style="margin-top: 8px;">Erneut versuchen</button>
      </div>
    `;
    container.querySelector('.news-retry-btn')?.addEventListener('click', () => fetchNews(widget, true));
  } finally {
    if (refreshBtn) refreshBtn.classList.remove('spinning');
  }
}

// Parse RSS XML to items array
function parseRSSXml(xmlText) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlText, 'text/xml');

    // Check for RSS format
    let items = doc.querySelectorAll('item');

    // Check for Atom format
    if (!items.length) {
      items = doc.querySelectorAll('entry');
    }

    if (!items.length) return null;

    return Array.from(items).slice(0, 5).map(item => {
      // RSS format
      let title = item.querySelector('title')?.textContent;
      let link = item.querySelector('link')?.textContent || item.querySelector('link')?.getAttribute('href');
      let pubDate = item.querySelector('pubDate')?.textContent ||
                    item.querySelector('published')?.textContent ||
                    item.querySelector('updated')?.textContent;
      let author = item.querySelector('author')?.textContent ||
                   item.querySelector('dc\\:creator')?.textContent ||
                   item.querySelector('creator')?.textContent;

      // Atom format link handling
      if (!link) {
        const linkEl = item.querySelector('link[href]');
        if (linkEl) link = linkEl.getAttribute('href');
      }

      return { title, link, pubDate, author };
    }).filter(item => item.title && item.link);
  } catch (e) {
    console.error('RSS parse error:', e);
    return null;
  }
}

function renderNewsItems(container, items, topicInfo) {
  container.innerHTML = `
    <div class="news-ticker">
      ${items.slice(0, 5).map((item, index) => {
        // Handle different date field names from various APIs
        const dateStr = item.pubDate || item.date_published || item.published || item.updated || null;
        const pubDate = dateStr ? new Date(dateStr) : new Date();
        const timeAgo = dateStr ? getTimeAgo(pubDate) : '';

        // Handle different link field names
        const link = item.link || item.url || '#';

        // Handle author field
        const authorName = typeof item.author === 'object' ? item.author?.name : item.author;
        const source = authorName || extractDomain(link) || topicInfo.name;

        return `
          <div class="news-item" data-url="${escapeHtml(link)}" style="animation-delay: ${index * 0.1}s;">
            <div class="news-item-icon" style="background: linear-gradient(135deg, ${topicInfo.color} 0%, ${adjustColor(topicInfo.color, 40)} 100%);">
              ${topicInfo.icon}
            </div>
            <div class="news-item-content">
              <div class="news-item-title">${escapeHtml(item.title || 'Untitled')}</div>
              <div class="news-item-meta">
                <span class="news-item-source">${escapeHtml(source)}</span>
                ${timeAgo ? `
                <span class="news-item-time">
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/></svg>
                  ${timeAgo}
                </span>
                ` : ''}
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Attach click handlers to open articles
  container.querySelectorAll('.news-item').forEach(item => {
    item.addEventListener('click', () => {
      const url = item.dataset.url;
      if (url) openUrl(url);
    });
  });
}

function getTimeAgo(date) {
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Gerade eben';
  if (diffMins < 60) return `vor ${diffMins} Min.`;
  if (diffHours < 24) return `vor ${diffHours} Std.`;
  if (diffDays === 1) return 'Gestern';
  if (diffDays < 7) return `vor ${diffDays} Tagen`;
  return date.toLocaleDateString('de-DE', { day: 'numeric', month: 'short' });
}

function formatNewsTime(timestamp) {
  return new Date(timestamp).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + ' Uhr';
}

function extractDomain(url) {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return null;
  }
}

function adjustColor(hex, percent) {
  // Lighten a hex color
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return '#' + (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  ).toString(16).slice(1);
}

// --- Analog Clock Widget ---

function buildClockTicksSVG() {
  let ticks = '';
  for (let i = 0; i < 60; i++) {
    const angle = (i * 6) * Math.PI / 180;
    const isHour = i % 5 === 0;
    const outerR = 94;
    const innerR = isHour ? 82 : 88;
    const x1 = 100 + outerR * Math.sin(angle);
    const y1 = 100 - outerR * Math.cos(angle);
    const x2 = 100 + innerR * Math.sin(angle);
    const y2 = 100 - innerR * Math.cos(angle);
    const width = isHour ? 2.5 : 1;
    const color = isHour ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.25)';
    ticks += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" stroke-linecap="round"/>`;
  }
  // Hour numbers
  const nums = [12,1,2,3,4,5,6,7,8,9,10,11];
  nums.forEach((n, i) => {
    const angle = (i * 30) * Math.PI / 180;
    const r = 70;
    const x = 100 + r * Math.sin(angle);
    const y = 100 - r * Math.cos(angle) + 5;
    ticks += `<text x="${x}" y="${y}" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="13" font-weight="600" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">${n}</text>`;
  });
  return ticks;
}

function renderAnalogClockWidget(widget) {
  const body = document.getElementById('widget-body-' + widget.id);
  if (!body) return;

  const ticksSVG = buildClockTicksSVG();

  body.innerHTML = `
    <div class="analog-clock-modern">
      <div class="clock-face-modern">
        <svg class="clock-ticks-svg" viewBox="0 0 200 200">${ticksSVG}</svg>
        <div class="clock-center-modern"></div>
        <div class="clock-hand-modern hour-hand" id="hour-${widget.id}"></div>
        <div class="clock-hand-modern minute-hand" id="minute-${widget.id}"></div>
        <div class="clock-hand-modern second-hand" id="second-${widget.id}"></div>
        <div class="clock-center-dot"></div>
      </div>
      <div class="clock-digital-modern">
        <div class="clock-time-modern" id="time-${widget.id}"></div>
        <div class="clock-date-modern" id="date-${widget.id}"></div>
      </div>
    </div>
  `;

  updateAnalogClockSimple(widget);
}

function updateAnalogClockSimple(widget) {
  const timeEl = document.getElementById('time-' + widget.id);
  const dateEl = document.getElementById('date-' + widget.id);
  const hourHand = document.getElementById('hour-' + widget.id);
  const minuteHand = document.getElementById('minute-' + widget.id);
  const secondHand = document.getElementById('second-' + widget.id);

  if (!timeEl || !dateEl || !hourHand || !minuteHand || !secondHand) {
    setTimeout(() => updateAnalogClockSimple(widget), 100);
    return;
  }

  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const ms = now.getMilliseconds();

  timeEl.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  dateEl.textContent = now.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  const smoothSeconds = s + ms / 1000;
  const secondsDeg = (smoothSeconds / 60) * 360;
  const minutesDeg = ((m + smoothSeconds / 60) / 60) * 360;
  const hoursDeg = ((h % 12 + m / 60) / 12) * 360;

  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;

  requestAnimationFrame(() => {
    setTimeout(() => updateAnalogClockSimple(widget), 50);
  });
}

function openAnalogClockSettings(widget) {
  const content = document.getElementById('widgetSettingsContent');
  if (!content) return;

  const timezones = widget.config.timezones || ['Europe/Berlin'];
  const availableTimezones = getTimezoneList();

  content.innerHTML = `
    <div class="form-group">
      <label>Zeitzonen</label>
      <div class="analog-clock-settings-list" id="timezoneList">
        ${timezones.map((tz, index) => {
          const tzInfo = availableTimezones.find(t => t.value === tz) || { label: tz, country: '' };
          return `
            <div class="analog-clock-settings-item">
              <select class="analog-clock-settings-timezone-select" data-index="${index}">
                ${availableTimezones.map(t => `
                  <option value="${t.value}" ${t.value === tz ? 'selected' : ''}>${t.flag} ${t.label}</option>
                `).join('')}
              </select>
              <button class="analog-clock-settings-remove" data-index="${index}" title="Entfernen">&times;</button>
            </div>
          `;
        }).join('')}
      </div>
      <button class="analog-clock-add-btn" id="addTimezoneBtn">
        <span>+</span> Zeitzone hinzufügen
      </button>
    </div>
  `;

  // Setup timezone change listeners
  content.querySelectorAll('.analog-clock-settings-timezone-select').forEach(select => {
    select.addEventListener('change', (e) => {
      const index = parseInt(e.target.dataset.index);
      timezones[index] = e.target.value;
      widget.config.timezones = [...timezones];
    });
  });

  // Setup remove listeners
  content.querySelectorAll('.analog-clock-settings-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = parseInt(e.target.dataset.index);
      if (timezones.length > 1) {
        timezones.splice(index, 1);
        widget.config.timezones = [...timezones];
        openAnalogClockSettings(widget);
      } else {
        showToast('Mindestens eine Zeitzone erforderlich');
      }
    });
  });

  // Setup add button
  const addBtn = document.getElementById('addTimezoneBtn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      if (timezones.length < 6) {
        timezones.push('Europe/Berlin');
        widget.config.timezones = [...timezones];
        openAnalogClockSettings(widget);
      } else {
        showToast('Maximal 6 Zeitzonen erlaubt');
      }
    });
  }
}

function getTimezoneList() {
  const timezones = [
    { value: 'UTC', label: 'UTC', flag: '🌍' },
    { value: 'Europe/Berlin', label: 'Berlin', flag: '🇩🇪' },
    { value: 'Europe/London', label: 'London', flag: '🇬🇧' },
    { value: 'Europe/Paris', label: 'Paris', flag: '🇫🇷' },
    { value: 'Europe/Madrid', label: 'Madrid', flag: '🇪🇸' },
    { value: 'Europe/Rome', label: 'Rom', flag: '🇮🇹' },
    { value: 'Europe/Amsterdam', label: 'Amsterdam', flag: '🇳🇱' },
    { value: 'Europe/Zurich', label: 'Zürich', flag: '🇨🇭' },
    { value: 'Europe/Vienna', label: 'Wien', flag: '🇦🇹' },
    { value: 'Europe/Prague', label: 'Prag', flag: '🇨🇿' },
    { value: 'Europe/Warsaw', label: 'Warschau', flag: '🇵🇱' },
    { value: 'Europe/Helsinki', label: 'Helsinki', flag: '🇫🇮' },
    { value: 'Europe/Stockholm', label: 'Stockholm', flag: '🇸🇪' },
    { value: 'Europe/Oslo', label: 'Oslo', flag: '🇳🇴' },
    { value: 'Europe/Copenhagen', label: 'Kopenhagen', flag: '🇩🇰' },
    { value: 'America/New_York', label: 'New York', flag: '🇺🇸' },
    { value: 'America/Los_Angeles', label: 'Los Angeles', flag: '🇺🇸' },
    { value: 'America/Chicago', label: 'Chicago', flag: '🇺🇸' },
    { value: 'America/Toronto', label: 'Toronto', flag: '🇨🇦' },
    { value: 'America/Vancouver', label: 'Vancouver', flag: '🇨🇦' },
    { value: 'America/Mexico_City', label: 'Mexico City', flag: '🇲🇽' },
    { value: 'America/Bogota', label: 'Bogotá', flag: '🇨🇴' },
    { value: 'America/Santiago', label: 'Santiago', flag: '🇨🇱' },
    { value: 'America/Buenos_Aires', label: 'Buenos Aires', flag: '🇦🇷' },
    { value: 'America/Sao_Paulo', label: 'São Paulo', flag: '🇧🇷' },
    { value: 'America/Lima', label: 'Lima', flag: '🇵🇪' },
    { value: 'America/Caracas', label: 'Caracas', flag: '🇻🇪' },
    { value: 'America/Boise', label: 'Boise', flag: '🇺🇸' },
    { value: 'America/Phoenix', label: 'Phoenix', flag: '🇺🇸' },
    { value: 'America/Las_Vegas', label: 'Las Vegas', flag: '🇺🇸' },
    { value: 'America/Denver', label: 'Denver', flag: '🇺🇸' },
    { value: 'America/Anchorage', label: 'Anchorage', flag: '🇺🇸' },
    { value: 'America/Chicago', label: 'Chicago', flag: '🇺🇸' },
    { value: 'America/Miami', label: 'Miami', flag: '🇺🇸' },
    { value: 'America/Atlanta', label: 'Atlanta', flag: '🇺🇸' },
    { value: 'America/New_York', label: 'New York', flag: '🇺🇸' },
    { value: 'America/Halifax', label: 'Halifax', flag: '🇨🇦' },
    { value: 'America/Toronto', label: 'Toronto', flag: '🇨🇦' },
    { value: 'America/Vancouver', label: 'Vancouver', flag: '🇨🇦' },
    { value: 'America/Montreal', label: 'Montreal', flag: '🇨🇦' },
    { value: 'America/Edmonton', label: 'Edmonton', flag: '🇨🇦' },
    { value: 'America/Regina', label: 'Regina', flag: '🇨🇦' },
    { value: 'America/Winnipeg', label: 'Winnipeg', flag: '🇨🇦' },
    { value: 'America/Sao_Paulo', label: 'São Paulo', flag: '🇧🇷' },
    { value: 'America/La_Paz', label: 'La Paz', flag: '🇧🇴' },
    { value: 'America/Buenos_Aires', label: 'Buenos Aires', flag: '🇦🇷' },
    { value: 'America/Chile', label: 'Santiago', flag: '🇨🇱' },
    { value: 'Asia/Tokyo', label: 'Tokio', flag: '🇯🇵' },
    { value: 'Asia/Seoul', label: 'Seoul', flag: '🇰🇷' },
    { value: 'Asia/Shanghai', label: 'Shanghai', flag: '🇨🇳' },
    { value: 'Asia/Hong_Kong', label: 'Hong Kong', flag: '🇭🇰' },
    { value: 'Asia/Singapore', label: 'Singapore', flag: '🇸🇬' },
    { value: 'Asia/Bangkok', label: 'Bangkok', flag: '🇹🇭' },
    { value: 'Asia/Dubai', label: 'Dubai', flag: '🇦🇪' },
    { value: 'Asia/Moscow', label: 'Moskau', flag: '🇷🇺' },
    { value: 'Asia/Kolkata', label: 'Kolkata', flag: '🇮🇳' },
    { value: 'Asia/Kathmandu', label: 'Kathmandu', flag: '🇳🇵' },
    { value: 'Asia/Sri_Jayawardenepura_Kotte', label: 'Sri Jayawardenepura Kotte', flag: '🇱🇰' },
    { value: 'Asia/Dhaka', label: 'Dhaka', flag: '🇧🇩' },
    { value: 'Asia/Osaka', label: 'Osaka', flag: '🇯🇵' },
    { value: 'Asia/Kuala_Lumpur', label: 'Kuala Lumpur', flag: '🇲🇾' },
    { value: 'Asia/Jakarta', label: 'Jakarta', flag: '🇮🇩' },
    { value: 'Asia/Bangkok', label: 'Bangkok', flag: '🇹🇭' },
    { value: 'Asia/Manila', label: 'Manila', flag: '🇵🇭' },
    { value: 'Australia/Sydney', label: 'Sydney', flag: '🇦🇺' },
    { value: 'Australia/Melbourne', label: 'Melbourne', flag: '🇦🇺' },
    { value: 'Australia/Brisbane', label: 'Brisbane', flag: '🇦🇺' },
    { value: 'Australia/Adelaide', label: 'Adelaide', flag: '🇦🇺' },
    { value: 'Australia/Perth', label: 'Perth', flag: '🇦🇺' },
    { value: 'Pacific/Auckland', label: 'Auckland', flag: '🇳🇿' },
    { value: 'Pacific/Fiji', label: 'Fiji', flag: '🇫🇯' },
    { value: 'Pacific/Port_Moresby', label: 'Port Moresby', flag: '🇵🇬' }
  ];

  // Sort by region
  return timezones.sort((a, b) => {
    const regionA = a.label.split(' ')[0];
    const regionB = b.label.split(' ')[0];
    return regionA.localeCompare(regionB);
  });
}

// --- News Settings ---

function openNewsSettings(widget) {
  const content = document.getElementById('widgetSettingsContent');
  if (!content) return;

  const currentTopic = widget.config.topic || 'tagesschau';

  content.innerHTML = `
    <div class="form-group">
      <label>News-Thema</label>
      <select id="newsSettingsTopic" class="news-topic-select" style="width: 100%; padding: 12px;">
        ${Object.entries(NEWS_TOPICS).map(([key, t]) => `
          <option value="${key}" ${key === currentTopic ? 'selected' : ''}>${t.icon} ${t.name}</option>
        `).join('')}
      </select>
    </div>
    <div class="form-group" style="margin-top: 16px;">
      <label>Verfuegbare Quellen</label>
      <div style="display: grid; gap: 8px; margin-top: 8px;">
        ${Object.values(NEWS_TOPICS).map(t => `
          <div style="display: flex; align-items: center; gap: 12px; padding: 10px; background: rgba(0,0,0,0.2); border-radius: 8px;">
            <span style="font-size: 20px;">${t.icon}</span>
            <div style="flex: 1;">
              <div style="font-weight: 500; color: var(--text-primary);">${t.name}</div>
              <div style="font-size: 11px; color: var(--text-tertiary);">${extractDomain(t.feed)}</div>
            </div>
            <div style="width: 12px; height: 12px; border-radius: 50%; background: ${t.color};"></div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function saveNewsSettings(widget) {
  const topic = document.getElementById('newsSettingsTopic')?.value;
  if (topic && NEWS_TOPICS[topic]) {
    widget.config.topic = topic;
  }
}

// --- Notepad Widget ---

function renderNotepadWidget(widget) {
  const body = document.getElementById('widget-body-' + widget.id);
  if (!body) return;

  // Initialize notes if missing (backwards compatibility)
  if (!widget.config.notes) {
    widget.config.notes = [{ id: 'note-1', title: 'Notiz 1', text: '', createdAt: Date.now() }];
    widget.config.currentNoteId = 'note-1';
  }

  const bgColor = widget.config.backgroundColor || '#feca57';
  const font = widget.config.font || 'default';
  const fontSize = widget.config.fontSize || 14;
  const currentNoteId = widget.config.currentNoteId || widget.config.notes[0]?.id;
  const currentNote = widget.config.notes.find(n => n.id === currentNoteId);

  // Font-Mapping
  const fontFamilies = {
    'default': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    'serif': 'Georgia, "Times New Roman", serif',
    'mono': '"Courier New", Courier, monospace',
    'handwriting': '"Comic Sans MS", "Marker Felt", cursive',
    'elegant': '"Palatino Linotype", "Book Antiqua", Palatino, serif'
  };

  const fontFamily = fontFamilies[font] || fontFamilies['default'];

  body.innerHTML = `
    <div class="notepad-main" style="
      background: ${escapeHtml(bgColor)};
      height: 100%;
      display: flex;
      flex-direction: row;
      border-radius: 8px;
      overflow: hidden;
    ">
      <div class="notepad-sidebar" style="
        width: 120px;
        background: rgba(0, 0, 0, 0.1);
        border-right: 1px solid rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        padding: 8px;
        gap: 4px;
      ">
        ${widget.config.notes.map(note => `
          <button class="notepad-note-tab ${note.id === currentNoteId ? 'active' : ''}"
                  data-note-id="${note.id}"
                  data-widget-id="${widget.id}"
                  style="
                    padding: 8px;
                    border: none;
                    background: ${note.id === currentNoteId ? 'rgba(0, 0, 0, 0.2)' : 'transparent'};
                    color: #1a1a1a;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    transition: all 0.2s;
                  "
                  title="${note.title}">
            ${note.id === currentNoteId ? '★ ' : ''}${escapeHtml(note.title)}
          </button>
        `).join('')}
        <button class="notepad-add-btn"
                data-widget-id="${widget.id}"
                style="
                  padding: 8px;
                  border: 1px dashed rgba(0, 0, 0, 0.3);
                  background: transparent;
                  color: #1a1a1a;
                  border-radius: 4px;
                  cursor: pointer;
                  font-size: 12px;
                  margin-top: auto;
                  transition: all 0.2s;
                ">
          + Neue
        </button>
      </div>

      <div class="notepad-editor" style="
        flex: 1;
        display: flex;
        flex-direction: column;
      ">
        <input type="text"
               class="notepad-title-input"
               id="notepad-title-${widget.id}"
               placeholder="Titel..."
               value="${currentNote ? escapeHtml(currentNote.title) : ''}"
               data-widget-id="${widget.id}"
               style="
                 padding: 8px 12px;
                 border: none;
                 border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                 background: transparent;
                 color: #1a1a1a;
                 font-family: ${fontFamily};
                 font-size: 14px;
                 font-weight: 600;
                 outline: none;
               ">
        <textarea
          class="notepad-textarea"
          id="notepad-text-${widget.id}"
          placeholder="Notizen schreiben..."
          style="
            flex: 1;
            width: 100%;
            padding: 12px;
            border: none;
            background: transparent;
            color: #1a1a1a;
            font-family: ${fontFamily};
            font-size: ${fontSize}px;
            line-height: 1.6;
            resize: none;
            outline: none;
          "
        >${currentNote ? escapeHtml(currentNote.text) : ''}</textarea>
      </div>
    </div>
  `;

  // Event Listeners
  setupNotepadEventListeners(widget, currentNoteId);
}

function setupNotepadEventListeners(widget, currentNoteId) {
  const widgetId = widget.id;

  // Switch between notes
  document.querySelectorAll(`.notepad-note-tab[data-widget-id="${widgetId}"]`).forEach(btn => {
    btn.addEventListener('click', () => {
      const noteId = btn.dataset.noteId;
      widget.config.currentNoteId = noteId;
      renderNotepadWidget(widget);
    });
  });

  // Add new note
  document.querySelector(`.notepad-add-btn[data-widget-id="${widgetId}"]`)?.addEventListener('click', () => {
    const newId = 'note-' + Date.now();
    widget.config.notes.push({
      id: newId,
      title: `Notiz ${widget.config.notes.length + 1}`,
      text: '',
      createdAt: Date.now()
    });
    widget.config.currentNoteId = newId;
    renderNotepadWidget(widget);
  });

  // Title input auto-save
  const titleInput = document.getElementById(`notepad-title-${widgetId}`);
  let titleSaveTimer = null;
  titleInput?.addEventListener('input', (e) => {
    const currentNote = widget.config.notes.find(n => n.id === currentNoteId);
    if (!currentNote) return;
    currentNote.title = e.target.value;
    clearTimeout(titleSaveTimer);
    titleSaveTimer = setTimeout(async () => {
      await saveWidgetLayout();
    }, 500);
  });

  // Text input auto-save
  const textarea = document.getElementById(`notepad-text-${widgetId}`);
  let textSaveTimer = null;
  textarea?.addEventListener('input', (e) => {
    const currentNote = widget.config.notes.find(n => n.id === currentNoteId);
    if (!currentNote) return;
    currentNote.text = e.target.value;
    clearTimeout(textSaveTimer);
    textSaveTimer = setTimeout(async () => {
      await saveWidgetLayout();
    }, 500);
  });
}

function openNotepadSettings(widget) {
  const content = document.getElementById('widgetSettingsContent');
  if (!content) return;

  const currentFont = widget.config.font || 'default';
  const currentColor = widget.config.backgroundColor || '#feca57';
  const currentFontSize = widget.config.fontSize || 14;
  const currentSize = widget.config.widgetSize || 'widget-3x2';

  content.innerHTML = `
    <div class="form-group">
      <label>Schriftart</label>
      <select id="notepadFontSelect" class="notepad-font-select" style="width: 100%; padding: 12px;">
        <option value="default" ${currentFont === 'default' ? 'selected' : ''}>Standard</option>
        <option value="serif" ${currentFont === 'serif' ? 'selected' : ''}>Serif</option>
        <option value="mono" ${currentFont === 'mono' ? 'selected' : ''}>Monospace</option>
        <option value="handwriting" ${currentFont === 'handwriting' ? 'selected' : ''}>Handschrift</option>
        <option value="elegant" ${currentFont === 'elegant' ? 'selected' : ''}>Elegant</option>
      </select>
    </div>

    <div class="form-group" style="margin-top: 16px;">
      <label>Schriftgröße</label>
      <select id="notepadFontSizeSelect" style="width: 100%; padding: 12px;">
        <option value="12" ${currentFontSize === 12 ? 'selected' : ''}>Kleine (12px)</option>
        <option value="14" ${currentFontSize === 14 ? 'selected' : ''}>Normal (14px)</option>
        <option value="16" ${currentFontSize === 16 ? 'selected' : ''}>Groß (16px)</option>
        <option value="18" ${currentFontSize === 18 ? 'selected' : ''}>Sehr Groß (18px)</option>
      </select>
    </div>

    <div class="form-group" style="margin-top: 16px;">
      <label>Widget-Größe</label>
      <select id="notepadWidgetSizeSelect" style="width: 100%; padding: 12px;">
        <option value="widget-2x2" ${currentSize === 'widget-2x2' ? 'selected' : ''}>Klein (2×2)</option>
        <option value="widget-3x2" ${currentSize === 'widget-3x2' ? 'selected' : ''}>Mittel (3×2)</option>
        <option value="widget-4x2" ${currentSize === 'widget-4x2' ? 'selected' : ''}>Groß (4×2)</option>
        <option value="widget-3x3" ${currentSize === 'widget-3x3' ? 'selected' : ''}>Quadratisch (3×3)</option>
      </select>
    </div>

    <div class="form-group" style="margin-top: 16px;">
      <label>Hintergrundfarbe</label>
      <div class="color-picker" style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; margin-top: 8px;">
        <button class="note-color-btn ${currentColor === '#feca57' ? 'active' : ''}"
                data-color="#feca57"
                style="background: #feca57; width: 100%; aspect-ratio: 1; border: 2px solid transparent; border-radius: 6px; cursor: pointer; transition: all 0.2s;"
                title="Gelb"></button>
        <button class="note-color-btn ${currentColor === '#ff6b6b' ? 'active' : ''}"
                data-color="#ff6b6b"
                style="background: #ff6b6b; width: 100%; aspect-ratio: 1; border: 2px solid transparent; border-radius: 6px; cursor: pointer; transition: all 0.2s;"
                title="Rot"></button>
        <button class="note-color-btn ${currentColor === '#4ecdc4' ? 'active' : ''}"
                data-color="#4ecdc4"
                style="background: #4ecdc4; width: 100%; aspect-ratio: 1; border: 2px solid transparent; border-radius: 6px; cursor: pointer; transition: all 0.2s;"
                title="Türkis"></button>
        <button class="note-color-btn ${currentColor === '#a8e6cf' ? 'active' : ''}"
                data-color="#a8e6cf"
                style="background: #a8e6cf; width: 100%; aspect-ratio: 1; border: 2px solid transparent; border-radius: 6px; cursor: pointer; transition: all 0.2s;"
                title="Grün"></button>
        <button class="note-color-btn ${currentColor === '#dfe6e9' ? 'active' : ''}"
                data-color="#dfe6e9"
                style="background: #dfe6e9; width: 100%; aspect-ratio: 1; border: 2px solid transparent; border-radius: 6px; cursor: pointer; transition: all 0.2s;"
                title="Grau"></button>
        <button class="note-color-btn ${currentColor === '#fd79a8' ? 'active' : ''}"
                data-color="#fd79a8"
                style="background: #fd79a8; width: 100%; aspect-ratio: 1; border: 2px solid transparent; border-radius: 6px; cursor: pointer; transition: all 0.2s;"
                title="Pink"></button>
        <button class="note-color-btn ${currentColor === '#ffffff' ? 'active' : ''}"
                data-color="#ffffff"
                style="background: #ffffff; width: 100%; aspect-ratio: 1; border: 2px solid #ccc; border-radius: 6px; cursor: pointer; transition: all 0.2s;"
                title="Weiß"></button>
      </div>
    </div>
  `;

  // Event Listener für Color Picker
  content.querySelectorAll('.note-color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      content.querySelectorAll('.note-color-btn').forEach(b => {
        b.style.borderColor = 'transparent';
      });
      btn.style.borderColor = 'var(--primary)';
      btn.classList.add('active');
    });
  });
}

function saveNotepadSettings(widget) {
  const font = document.getElementById('notepadFontSelect')?.value;
  const fontSize = document.getElementById('notepadFontSizeSelect')?.value;
  const widgetSize = document.getElementById('notepadWidgetSizeSelect')?.value;
  const activeColorBtn = document.querySelector('.note-color-btn[style*="border-color: var(--primary)"]');
  const color = activeColorBtn?.dataset.color;

  if (font) widget.config.font = font;
  if (fontSize) widget.config.fontSize = parseInt(fontSize);
  if (widgetSize) {
    widget.config.widgetSize = widgetSize;
    widget.size = widgetSize;
  }
  if (color) widget.config.backgroundColor = color;
}

console.log('Dashboard v3.4.0 (Brave-kompatibel) loaded');

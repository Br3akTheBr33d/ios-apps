// localStorage-Adapter: ersetzt chrome.storage.local für die PWA
// Wird geladen bevor app.js — überschreibt window.chrome wenn keine Extension vorhanden

(function () {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    return; // Läuft in echter Chrome Extension — nichts zu tun
  }

  const PREFIX = 'wp_';

  window.chrome = {
    storage: {
      local: {
        async get(keys) {
          const result = {};
          const list = Array.isArray(keys) ? keys : (typeof keys === 'string' ? [keys] : Object.keys(keys));
          list.forEach(key => {
            try {
              const val = localStorage.getItem(PREFIX + key);
              if (val !== null) result[key] = JSON.parse(val);
            } catch (e) {
              // Ungültiger JSON-Wert — ignorieren
            }
          });
          return result;
        },
        async set(obj) {
          for (const [key, val] of Object.entries(obj)) {
            try {
              localStorage.setItem(PREFIX + key, JSON.stringify(val));
            } catch (e) {
              console.warn('storage.js: Fehler beim Speichern von', key, e);
            }
          }
        },
        async remove(keys) {
          const list = Array.isArray(keys) ? keys : [keys];
          list.forEach(k => localStorage.removeItem(PREFIX + k));
        }
      }
    },
    runtime: {
      getURL: path => path,
      getManifest: () => ({
        oauth2: {
          client_id: '753612951771-g1cgb975vgbvk6ao1p2orp46r146bqid.apps.googleusercontent.com',
          scopes: ['https://www.googleapis.com/auth/drive.appdata']
        }
      }),
      lastError: null
    },
    identity: {
      // Kein chrome.identity auf iOS — OAuth2 läuft über window.open
      getAuthToken: () => { throw new Error('chrome.identity nicht verfügbar'); }
    },
    tabs: {
      query: async () => [],
      create: async ({ url }) => { window.open(url, '_blank'); return {}; },
      update: async () => {},
      remove: async () => {}
    },
    tabGroups: {
      update: async () => {},
      query: async () => []
    }
  };
})();

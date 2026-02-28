# Workspace Pro iOS PWA — Claude Context

## Projekt
PWA-Version der Chrome Extension "Workspace Pro" für iOS Safari.
Deployed auf GitHub Pages: `https://br3akthebr33d.github.io/ios-apps/`
Git Remote: `https://github.com/Br3akTheBr33d/ios-apps.git`

## Architektur

### Kernprinzip: chrome.* Shim
`storage.js` wird vor `app.js` geladen und überschreibt `window.chrome` mit einem
localStorage-basierten Shim. Echter Chrome Extension API-Aufruf wird damit auf
Web-APIs gemappt — `app.js` läuft ohne Anpassung in beiden Umgebungen.

### OAuth2 Flow (PWA)
Kein `chrome.identity` Popup — stattdessen Seiten-Redirect:
1. `launchWebAuthFlowForToken()` → `window.location.href = authUrl`
2. Google redirectet zurück zur App mit `#access_token=...` im Hash
3. `checkOAuthCallback()` beim DOMContentLoaded liest den Hash, speichert Token

**Redirect URI:** Wird dynamisch aus `window.location` abgeleitet (`getRedirectUri()`).
Muss exakt so in Google Cloud Console → OAuth Client → Authorized redirect URIs stehen.

### Storage
- `chrome.storage.local` → `localStorage` mit Prefix `wp_`
- Kein `chrome.identity.getAuthToken` — nur Redirect-Flow
- `chrome.tabs.*` → `window.open()` Stubs

## Wichtige Dateien

| Datei | Zweck |
|---|---|
| `app.js` | Hauptlogik — basiert auf dashboard.js der Chrome Extension |
| `storage.js` | chrome.* Shim für PWA-Kontext |
| `index.html` | Haupt-UI |
| `dashboard.css` | Styling inkl. iOS Safe Area + Mobile Responsive |
| `sw.js` | Service Worker — Cache-Version bei Updates erhöhen |
| `manifest.webmanifest` | PWA-Manifest |

## Kritische Stellen in app.js

- `getRedirectUri()` — gibt dynamische OAuth Redirect URI zurück
- `launchWebAuthFlowForToken()` — startet OAuth Redirect Flow
- `checkOAuthCallback()` — verarbeitet Token nach Redirect
- `OAUTH_CONFIG` — clientId, scopes, authEndpoint
- `NEWS_TOPICS` — deutsche Nachrichtenquellen (Tagesschau, Heise, Golem etc.)

## Service Worker Cache
Bei Code-Änderungen Cache-Version in `sw.js` erhöhen:
```javascript
const CACHE = 'workspace-pro-v3'; // v2, v3, ...
```

## Google Cloud Console Setup
- OAuth 2.0 Client ID → Application type: **Web application**
- Authorized redirect URI: exakte App-URL inkl. `/` am Ende
- Client ID in `storage.js` Zeile ~46 eintragen

## Deployment
```bash
git add .
git commit -m "Beschreibung"
git push
# GitHub Pages: ~1 Min bis aktiv
# Safari: einmal nach unten ziehen zum Reload
```

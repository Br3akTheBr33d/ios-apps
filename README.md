# Workspace Pro – iOS App (PWA)

Die iOS-Version von Workspace Pro als Progressive Web App (PWA).
Installierbar auf dem iPhone-Homescreen — kein App Store, keine Kosten.

---

## Auf iPhone installieren

> **Wichtig:** Safari verwenden — Chrome auf iOS unterstützt PWA-Installation nicht.

1. iPhone: **Safari** öffnen
2. Diese URL aufrufen: `https://YOUR-GITHUB-USERNAME.github.io/workspace-pro-ios/`
3. Unten auf das **Teilen-Symbol** tippen (Quadrat mit Pfeil nach oben)
4. **"Zum Home-Bildschirm"** tippen
5. Name bestätigen → **"Hinzufügen"** tippen
6. Die App erscheint auf dem Homescreen und startet wie eine native App

---

## Hosting einrichten (GitHub Pages)

Die Dateien in diesem Ordner müssen auf einem HTTPS-Server liegen.
GitHub Pages ist kostenlos und funktioniert ohne eigenen Server:

### Schritt-für-Schritt

1. **GitHub-Konto:** Neues Repository anlegen → Name: `workspace-pro-ios` (Public)
2. **Dateien hochladen:** Alle Dateien aus diesem Ordner ins Repo
   ```
   git init
   git add .
   git commit -m "Initial PWA"
   git remote add origin https://github.com/DEIN-USERNAME/workspace-pro-ios.git
   git push -u origin main
   ```
3. **GitHub Pages aktivieren:**
   - Repo → Settings → Pages
   - Source: "Deploy from branch" → Branch: `main` → `/` (root) → Save
4. Nach ~1 Minute erreichbar unter:
   `https://DEIN-USERNAME.github.io/workspace-pro-ios/`

### OAuth2-Redirect-URI anpassen (für Google Drive)

1. `app.js` öffnen — ganz oben in `getRedirectUri()`:
   ```javascript
   return 'https://DEIN-USERNAME.github.io/workspace-pro-ios/';
   ```
   `DEIN-USERNAME` durch deinen GitHub-Usernamen ersetzen

2. **Google Cloud Console:**
   - APIs & Services → Credentials → OAuth 2.0 Client IDs
   - Client bearbeiten → Autorisierte Redirect-URIs
   - `https://DEIN-USERNAME.github.io/workspace-pro-ios/` hinzufügen → Speichern

---

## Daten mit Chrome Extension synchronisieren

1. **Chrome Extension öffnen** → Settings → Google Drive verbinden
2. In den Settings → **"Jetzt in Drive sichern"** klicken
3. **iOS App öffnen** (Safari) → Settings → Google Drive verbinden
4. In den Settings → **"Aus Drive wiederherstellen"** klicken
5. Alle Workspaces und Collections sind jetzt auf dem iPhone verfügbar

---

## Was funktioniert / was nicht

| Feature | iOS App |
|---|---|
| Workspaces, Collections, Links | Ja |
| Widgets (Uhr, Wetter, News, Notizblock) | Ja |
| Farbschemas / Themes | Ja |
| Google Drive Sync | Ja |
| Links öffnen | Ja (in Safari) |
| Session-Verlauf (gespeicherte) | Ja |
| Export / Import JSON | Ja |
| Offline-Nutzung | Ja (Service Worker Cache) |
| Aktuelle Browser-Tabs anzeigen | Nein (iOS-Einschränkung) |
| Tab-Gruppen | Nein (nur Chrome Desktop) |
| Auto-Save der laufenden Session | Nein (keine Live-Tabs auf iOS) |

---

## App aktualisieren

Wenn du die Dateien auf GitHub aktualisierst:

1. iOS Safari → URL der App aufrufen
2. Seite neu laden (einmal nach unten ziehen / Reload-Button)
3. App neu starten vom Homescreen

---

## Offline-Nutzung

Die App funktioniert auch ohne Internet — alle gespeicherten Daten
sind lokal auf dem iPhone verfügbar (Service Worker Cache).

Beim ersten Laden werden alle Dateien gecacht. Danach ist kein Internet
mehr nötig, außer für:
- Wetter-Widget (Open-Meteo API)
- News-Widget (RSS-Feeds)
- Google Drive Backup/Restore

---

## Dateistruktur

```
Workspace-Pro-IOS/
├── index.html            Haupt-UI (angepasstes dashboard.html)
├── dashboard.css         Styling + iOS Safe Area Anpassungen
├── app.js                Hauptlogik (angepasstes dashboard.js)
├── storage.js            localStorage-Adapter (ersetzt chrome.storage.local)
├── sw.js                 Service Worker (Offline-Cache)
├── manifest.webmanifest  PWA-Manifest (macht App installierbar)
├── background.jpg        Hintergrundbild
├── .gitignore            .env etc. ausschließen
└── icons/
    ├── icon-192.png
    ├── icon-512.png
    └── icon-maskable-512.png
```

---

## Troubleshooting

**App lässt sich nicht installieren:**
- Safari verwenden (nicht Chrome oder Firefox auf iOS)
- URL muss HTTPS sein (GitHub Pages: automatisch)

**Daten bleiben nicht gespeichert:**
- Safari → Einstellungen → Datenschutz → Website-Daten → sicherstellen dass `github.io` nicht blockiert wird

**Google Drive verbindet nicht:**
- Redirect-URI in `app.js` und Google Cloud Console korrekt gesetzt?
- Nach Änderungen an `app.js` → Repo pushen → App im Safari neu laden

**Wetter-Widget zeigt nichts:**
- Standort muss manuell eingetragen werden (Widget → Einstellungs-Icon → Ort suchen)
- Keine API-Key nötig (Open-Meteo ist kostenlos)

**App zeigt alten Stand nach Update:**
- Safari → lange auf Reload tippen → "Cache leeren und neu laden"
- Oder: Service Worker zurücksetzen: Safari Einstellungen → Website-Daten löschen

---

**Workspace Pro iOS PWA — Version 3.4.0**

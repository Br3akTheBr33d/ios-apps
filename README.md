# Workspace Pro – iOS App (PWA)

Die iOS-Version von Workspace Pro als Progressive Web App (PWA).
Installierbar auf dem iPhone-Homescreen — kein App Store, keine Kosten.

---

## Auf iPhone installieren

> **Wichtig:** Safari verwenden — Chrome auf iOS unterstützt PWA-Installation nicht.

1. iPhone: **Safari** öffnen
2. Diese URL aufrufen: `https://br3akthebr33d.github.io/ios-apps/`
3. Unten auf das **Teilen-Symbol** tippen (Quadrat mit Pfeil nach oben)
4. **"Zum Home-Bildschirm"** tippen
5. Name bestätigen → **"Hinzufügen"** tippen
6. Die App erscheint auf dem Homescreen und startet wie eine native App

---

## Hosting einrichten (GitHub Pages)

Die Dateien in diesem Ordner müssen auf einem HTTPS-Server liegen.
GitHub Pages ist kostenlos und funktioniert ohne eigenen Server:

### Schritt-für-Schritt

1. **GitHub-Konto:** Neues Repository anlegen (Public)
2. **Dateien hochladen:** Alle Dateien aus diesem Ordner ins Repo
   ```
   git init
   git add .
   git commit -m "Initial PWA"
   git remote add origin https://github.com/DEIN-USERNAME/DEIN-REPO.git
   git push -u origin main
   ```
3. **GitHub Pages aktivieren:**
   - Repo → Settings → Pages
   - Source: "Deploy from branch" → Branch: `main` → `/` (root) → Save
4. Nach ~1 Minute erreichbar unter:
   `https://DEIN-USERNAME.github.io/DEIN-REPO/`

### OAuth2 für Google Drive einrichten

**Schritt 1 — Neue OAuth2 Client ID anlegen:**
1. [console.cloud.google.com](https://console.cloud.google.com) → dein Projekt
2. APIs & Services → Credentials → **+ Create Credentials** → **OAuth 2.0 Client ID**
3. Application type: **Web application**
4. Name: `Workspace Pro iOS PWA`
5. Authorized redirect URIs: `https://DEIN-USERNAME.github.io/DEIN-REPO/` → Add → Create
6. Die neue **Client ID** kopieren (endet auf `.apps.googleusercontent.com`)

**Schritt 2 — Client ID in `storage.js` eintragen (Zeile 46):**
```javascript
client_id: 'DEINE-NEUE-CLIENT-ID.apps.googleusercontent.com',
```

**Schritt 3 — Dateien committen und pushen, dann App im Safari neu laden**

> Die Redirect-URI wird automatisch aus der aktuellen URL der App abgeleitet —
> kein manuelles Eintragen in `app.js` nötig. Nur in der Google Cloud Console
> muss die URL exakt hinterlegt sein (inkl. abschließendem `/`).

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
├── index.html            Haupt-UI
├── dashboard.css         Styling + iOS Safe Area Anpassungen
├── app.js                Hauptlogik
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

**Google Drive verbindet nicht (redirect_uri_mismatch):**
- App in Safari öffnen → DevTools Konsole → nach `Redirect URI:` suchen
- Diese URL exakt (inkl. `/` am Ende) in Google Cloud Console → OAuth Client → Authorized redirect URIs eintragen
- Nach Änderungen in der Google Cloud Console: ca. 5 Minuten warten

**Google Drive verbindet nicht (sonstiger Fehler):**
- Client ID in `storage.js` korrekt eingetragen?
- Repo pushen → App im Safari neu laden (Cache leeren)

**Wetter-Widget zeigt nichts:**
- Standort muss manuell eingetragen werden (Widget → Einstellungs-Icon → Ort suchen)
- Keine API-Key nötig (Open-Meteo ist kostenlos)

**App zeigt alten Stand nach Update:**
- Safari → lange auf Reload tippen → "Cache leeren und neu laden"
- Oder: Service Worker zurücksetzen: Safari Einstellungen → Website-Daten löschen

---

**Workspace Pro iOS PWA — Version 3.4.0**

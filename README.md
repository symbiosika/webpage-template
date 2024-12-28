# Webseite Builder

Das Template ist fast leer.
Man kann einen Haufen mehr damit machen.
Ich taste mich da auch noch langsam ran.

Technisch basiert es auf 11ty JS (https://www.11ty.dev/) + TailwindCSS

Tailwind-CSS ist geil, weil man da quasi alle Styles in "Worten" direkt an die HTML-Elemente anhängen kann.
Es gibt Millionen von Mustern. Und AI kann auch sehr gut mit Tailwind umgehen.

## Loslegen

### Node.js installieren

Node.js 20+ installieren

### Abhängigkeiten des Projekts hier installieren

Im Hauptordner. Dazu in Cursor auf "Terminal" > "New Terminal"

```bash
npm install
```

### Entwicklungs Umgebung starten

Im Hauptordner. Dazu in Cursor auf "Terminal" > "New Terminal"

```bash
npm run dev
```

## Dateistruktur

Alles ist im Hauptorder "src" (steht für "Source").

Direkt unter "src" können beliebige Markdown und HTML Dateien reinlegen.
Das sind die Seiten.

Alles unter "src/static" wird direkt als statischer Inhalt kopiert.
Das können Bilder, aber auch Anhänge etc. wie PDFS sein.

Unter "src/css" kann man Zusatz-CSS reinlegen.
Nicht unbedingt nötig, aber man kann das machen.

Den ordern "src/defaults" braucht 11ty. Da ist die Seiten-Konfiguration für 11ty drin.
Die eigentliche Konfiguration für 11ty ist in der Datei "eleventy.config.js"

Unter "src/images" sind die Bilder.
Theoretisch könnten die auch unter "src/static" rein, aber so ist es übersichtlicher.

Unter "src/scripts" kann man Zusatz-JS reinlegen.

unter "src/sections" sind quasi "Teil-Seiten". Also nicht komplette Seiten sondern nur Teile davon.
So lassen sich große Seiten einfacher warten und strukturieren.

Unter "src/templates" kann man die eigentlichen Layouts erstellen.
Ein Layout sollte nur Optik und keine echten Inhalte haben.
Also keine Text. Ein Layout ist wiederverwendbar.
Layouts sind wiederverwendbare "Komponenten".

## Prompting

### HTML Seite erzeugen
Erzeuge mit eine HTML Seite für 11ty JS. Nutze Tailwind für alle Styles.

### 



## Inspiration:

- https://promptlogic.ai/
- https://www.krepling.com/ 
- https://eslint.org/
- https://mixpanel.com/

# Webseite Builder Template

## Installation und Development

```bash
npm install
npm run dev
```

## Komponenten

Alle Marketing Komponenten sind auf der Seite "Demo" als Beispiele zu finden.

## Basis Farben

Die Farben sind in der Datei "tailwind.config.js" definiert.
Ein guter Farbgenerator ist https://uicolors.app/create

## Variablen

Die Variablen sind folgenden Dateien anzupassen:

### src/defaults/config.json

Alle Hauptvariablen, wie Name der Webseite, Adresse, etc.

### src/defaults/footer.json

Alle Variablen für den Footer.

### src/defaults/header.json

Alle Variablen für den Header.


## Prompts

### Erstelle Komponenten über Tailwind UI Muster

Du erstellst eine Marketing Komponente für Eleventy JS.
Die Komponente ist dynamisch und wird in verschiedenen Kontexten in einer Parent-Seite eingebunden. Die Basis Variable ist "data". Alle genutzten Variablen sind in "data" definiert.
Die Variable "data" wird aus dem Parent vergeben.

Technische Spezifikationen:

- Template Sprache ist "Nunjucks"
- Alle Styles werden mit Tailwind CSS angewendet
- Variablen kommen vom Parent
- Die Komponente hat keine umgebenden Container und Abstände nach außen. Das kommt vom Parent, wenn notwendig.
- Alle gehighlighteten Text werden mit der Klasse "text-primary-xxx" gekennzeichnet.
- Im Farbschema sind die Farben "primary" und "secondary" definiert.

Die Variablen werden im Parent via Markdown definiert.
Beispiel:

```
---
title: Alle Komponenten als Demo
data:
    - key: "value"
---
```

Du wirst die Komponente aus folgendem Muster erstellen.
Du wist dabei strikt die Optik beibehalten aber alle Inhalte dynamisieren.

Muster:
<...hier der html code des musters...>

## Inspiration

- https://promptlogic.ai/
- https://www.krepling.com/
- https://eslint.org/
- https://mixpanel.com/
# Webseite Builder Template

```bash
npm install
```

### Entwicklungs Umgebung starten

Im Hauptordner. Dazu in Cursor auf "Terminal" > "New Terminal"

```bash
npm run dev
```

## Inspiration:

- https://promptlogic.ai/
- https://www.krepling.com/ 
- https://eslint.org/
- https://mixpanel.com/

## Prompts

### Tailwind UI

Du erstellst eine Marketing Komponente für Eleventy JS.
Die Komponente ist dynamisch und wird in verschiedenen Kontexten in einer Parent-Seite eingebunden. Die Basis Variable ist "data". Alle genutzten Variablen sind in "data" definiert.
Die Variable "data" wird aus dem Parent vergeben.

Technische Spezifikationen:
- Template Sprache ist "Nunjucks"
- Alle Styles werden mit Tailwind CSS angewendet
- Variablen kommen vom Parent
- Die Komponente hat keine umgebenden Container und Abstände nach außen. Das kommt vom Parent, wenn notwendig.

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
# Webseite Builder Template

## Installation und Development

```bash
npm install
npm run dev
```

## Komponenten

Alle Marketing Komponenten sind auf der Seite "Demo" als Beispiele zu finden.

## Basis Farben

Die Farben sind in der Datei "src/defaults/colors.json" definiert.
Ein guter Farbgenerator ist https://uicolors.app/create

## Variablen

Die Variablen sind folgenden Dateien anzupassen:

### src/defaults/config.json

Alle Hauptvariablen, wie Name der Webseite, Adresse, etc.

### src/defaults/footer.json

Alle Variablen für den Footer.

### src/defaults/header.json

Alle Variablen für den Header.


## Langing Pages

Landing pages können unter "src/landing" mit einer GUID als Ordnername oder Dateiname angelegt werden.
Damit könnte man mehrere Projekte auf einer Seite anbieten.

Die Demo lässt sich unter folgendem Link aufrufen:
http://localhost:8081/landing/59bb1240-4cdd-4141-ba4e-a7d93fa5cd37/

Landing Pages haben einen vereinfachten Header und Footer.


## Prompts

### Erstelle Komponenten über Tailwind UI Muster

#### Anweisung

Man kopiert den untenstehenden Code in den Prompt als Referenz.
DARUNTER dann noch die Anweisung:
"Du erstellst eine Komponente für folgendes Muster: <muster-code-von-tailwind-ui>"

#### Main-Prompt

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

Alle Farben basieren folgenden Regeln:

Light: "text-content" und "text-content-secondary"
Dark: "dark:text-content-dark" und "dark:text-content-secondary-dark"

Akzentfarben
Light: "text-highlight" und "text-highlight-secondary"
Dark: "dark:text-highlight-dark" und "dark:text-highlight-secondary-dark"

Falls Hintergrundfarben benötigt werden, dann:
Light: "bg-background" und "bg-background-secondary"
Dark: "dark:bg-background-dark" und "dark:bg-background-secondary-dark"

Explizite helle und dunkle Textfarben:
Light: "text-content-always-light" und "text-content-secondary-always-light"
Dark: "dark:text-content-always-dark" und "dark:text-content-secondary-always-dark"

Hintergrundfarben müssen nur angegeben werden, wenn sich der Hintergrund explizit unterscheiden muss.
Der Default kommt aus dem Parent.

> Der "dark" Mode muss immer explizit mit angegeben werden!



## Inspiration

- https://promptlogic.ai/
- https://www.krepling.com/
- https://eslint.org/
- https://mixpanel.com/

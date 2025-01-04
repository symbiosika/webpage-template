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

siehe CONVERT_PROMPT.md

## Inspiration

- https://promptlogic.ai/
- https://www.krepling.com/
- https://eslint.org/
- https://mixpanel.com/

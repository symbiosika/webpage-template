# Umwandlung einer HTML Vorlage in eine Nunjucks 11ty Komponente

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

Der "dark" Mode muss immer explizit mit angegeben werden!
---
title: Datenschutz
description: Datenschutzerklärung
layout: layout/header-content-footer_1_small-width-content.njk

# Quiz game
data_quiz_game_1:
  id: "quiz1"
  backgroundImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  question: "Was ist die Hauptstadt von Deutschland?"
  answers:
    - text: "Hamburg"
      isCorrect: false
    - text: "München"
      isCorrect: false
    - text: "Berlin"
      isCorrect: true
    - text: "Köln"
      isCorrect: false
  interactionLink: "/kontakt"
  interactionText: "Jetzt beraten lassen"
  correctMessage: "Richtig!"
  wrongMessage: "Das war leider falsch. Probiere es nochmal! 😔"
  tryAgainText: "Noch einmal versuchen"
---

## Seite 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Hier kann auch HTML direk rein

<div class="bg-red-500">
  <p>Das ist ein div mit einer Klasse von Tailwind</p>
</div>

<p class="text-blue-500">Das ist ein p mit einer Klasse von Tailwind</p>

## Komponente "interaction/quiz_game_1"

{% set data = data_quiz_game_1 %}
{% include "interaction/quiz_game_1.njk" %}
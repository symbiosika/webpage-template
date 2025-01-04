---
title: Alle Komponenten als Demo
description: 123
layout: layout/header-content-footer_1_with-border.njk
#
# Ab hier folgen Variablen für die Komponenten
# Pro Block werden bestimmte Variablen benötigt, hier mit Musterdaten befüllt
#
# tailwind-ui/feature-section-1

# tailwind-ui/marketing-hero_movie
data_marketing_hero_movie:
  background:
    videoUrl: "/images/demo_bg_video_1.mp4"
  announcement:
    text: "Meine kleine Ankündigung"
    chip: "coming soon"
    link:
      label: "Mehr erfahren"
      url: "/news"
  hero:
    title: "Hey. Ho. Ha."
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    primaryButton:
      label: "Jetzt unverbindlich anfragen"
      url: "#kontakt"
    secondaryButton:
      label: "Mehr erfahren"
      url: "#features"
    features:
      - "Weniger Stress"
      - "Mehr Stimmung"
      - "Unvergessliche Momente"
  mobileNav:
    burgerMenu: true
    menuItems:
      - label: "Jetzt unverbindlich anfragen"
        url: "#kontakt"
      - label: "Kundenportal / Login" 
        url: "/login"


# forms/generic-form
data_forms_generic_form:
  id: contact-form
  primaryButtonColor: "#D71362"
  secondaryButtonColor: "#CB01F3"
  successTitle: "Anfrage erfolgreich versendet!"
  successMessage: "Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden."
  submitText: "Anfrage senden"
  fields:
    - columns:
      - key: company
        label: "Firma / Verein"
        type: text
    - columns:
      - key: firstname
        label: "Vorname"
        type: text
        required: true
      - key: lastname
        label: "Nachname"
        type: text
        required: true
    - columns:
      - key: email
        label: "E-Mail"
        type: email
        required: true
      - key: phone
        label: "Telefonnummer"
        type: text
    - columns:
      - key: event_date
        label: "Veranstaltungsdatum"
        type: date
        required: true
        placeholder: "TT.MM.JJJJ"
    - columns:
      - key: message
        label: "Nachricht"
        type: textarea
        required: true
        description: "Eine kurze Beschreibung der Veranstaltung, die Sie organisieren möchten."
    - columns:
      - key: privacy
        type: checkbox
        label: "Ich habe die Datenschutzerklärung zur Kenntnis genommen."
        required: true
---

## Komponente "tailwind-ui/marketing-hero_movie"

{% set data = data_marketing_hero_movie %}
{% include "marketing/tailwind-ui/marketing-hero_movie.njk" %}

## Komponente "forms/generic-form"

{% set data = data_forms_generic_form %}
{% include "forms/generic-form.njk" %}

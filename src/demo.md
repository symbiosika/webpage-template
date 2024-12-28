---
title: Alle Komponenten als Demo
description: 123
layout: layout/header-content-footer_1_with-border.njk
# Ab hier folgen Variablen für die Komponenten
# 
# tailwind-ui/feature-section-1
data1:
  tagline: "Deploy faster"
  heading: "A better workflow"
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
  features:
    - icon: "🚀"
      title: "Feature 1"
      description: "Lorem ipsum..."
    - icon: "🚀"
      title: "Feature 2"
      description: "Ipsum lorem..."
  image:
    src: "https://picsum.photos/id/1/2048"
    alt: "Product screenshot"
    width: "1024"
    height: "200"

# Beispiel data.yaml oder im Front Matter einer .md Datei
data_feature_2:
  tagline: "Everything you need"
  heading: "No server? No problem."
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis."
  image:
    src: "https://picsum.photos/id/2/2048"
    alt: "App screenshot"
    width: 2432
    height: 1442
  features:
    - icon: "🚀"
      title: "Push to deploy"
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna."
    - icon: "🚀"          
      title: "SSL certificates"
      description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."
    - icon: "🚀"
      title: "Simple queues"
      description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus."
---

## Komponente "tailwind-ui/feature-section-1"

{% set data = data1 %}
{% include "src/components/marketing/tailwind-ui/feature-section-1.njk" %}

{% set data = data_feature_2 %}
{% include "src/components/marketing/tailwind-ui/feature-section-2.njk" %}

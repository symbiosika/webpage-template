---
title: Alle Komponenten als Demo
description: 123
layout: layout/header-content-footer_1_with-border.njk
#
# Ab hier folgen Variablen für die Komponenten
# Pro Block werden bestimmte Variablen benötigt, hier mit Musterdaten befüllt
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

# tailwind-ui/feature-section-2
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

# tailwind-ui/testimonials-1
data_testimonials_1:
  logo:
    src: "https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg"
    alt: "Workcation Logo"
  quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
  author:
    name: "John Black"
    title: "CEO of Workcation"
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"

# tailwind-ui/bento-grid-1
data_bento_grid_1:
  headline: "Deploy faster"
  subheadline: "Everything you need to deploy your app"
  boxes:
    - image: "https://tailwindui.com/plus/img/component-images/bento-01-performance.png"
      imageAlt: "Performance visualization"
      label: "Performance"
      title: "Lightning-fast builds"
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus egestas sem pellentesque."    
    - image: "https://tailwindui.com/plus/img/component-images/bento-01-releases.png"
      imageAlt: "Releases visualization"
      label: "Releases"
      title: "Push to deploy"
      description: "Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa, laoreet dapibus ex elit vitae odio."    
    - image: "https://tailwindui.com/plus/img/component-images/bento-01-speed.png"
      imageAlt: "Speed visualization"
      label: "Speed"
      title: "Built for power users"
      description: "Sed congue eros non finibus molestie. Vestibulum euismod augue."    
    - image: "https://tailwindui.com/plus/img/component-images/bento-01-integrations.png"
      imageAlt: "Integrations visualization"
      label: "Integrations"
      title: "Connect your favorite tools"
      description: "Maecenas at augue sed elit dictum vulputate, in nisi aliquam maximus arcu."    
    - image: "https://tailwindui.com/plus/img/component-images/bento-01-network.png"
      imageAlt: "Network visualization"
      label: "Network"
      title: "Globally distributed CDN"
      description: "Aenean vulputate justo commodo auctor vehicula in malesuada semper."
---

## Komponente "tailwind-ui/feature-section-1"

{% set data = data1 %}
{% include "src/components/marketing/tailwind-ui/feature-section-1.njk" %}

## Komponente "tailwind-ui/feature-section-2"

{% set data = data_feature_2 %}
{% include "src/components/marketing/tailwind-ui/feature-section-2.njk" %}

## Komponente "tailwind-ui/testimonials-1"

{% set data = data_testimonials_1 %}
{% include "src/components/marketing/tailwind-ui/testimonials-1.njk" %}

## Komponente "tailwind-ui/bento-grid-1"

{% set data = data_bento_grid_1 %}
{% include "src/components/marketing/tailwind-ui/bento-grid-1.njk" %}


---
title: Komponenten
layout: layout/simple-page.njk
---

# Website Builder System

## Table of Contents
- [Introduction](#introduction)
- [How Websites are built](#how-websites-are-built)
  - [1. Page Creation](#1-page-creation)
  - [2. Component System](#2-component-system)
  - [3. Data Flow](#3-data-flow)
  - [4. Layouts](#4-layouts)
  - [5. Configuration](#5-configuration)
  - [6. Styling](#6-styling)
  - [7. Component Integration Example](#7-component-integration-example)
- [Components](#components)
  - [forms](#forms)
    - [generic-form](#generic-form)
  - [marketing/tailwind-ui](#marketingtailwind-ui)
    - [marketing-hero_movie](#marketing-hero_movie)
    - [testimonial-simple](#testimonial-simple)
    - [feature-two-col](#feature-two-col)
    - [logo-slider](#logo-slider)
    - [download-banner](#download-banner)
    - [marketing-hero_picture](#marketing-hero_picture)
    - [marketing-hero_gradient](#marketing-hero_gradient)
    - [hero-section-1](#hero-section-1)
    - [bento-grid-2](#bento-grid-2)
    - [contact-1](#contact-1)  
    - [feature-section-1](#feature-section-1)
    - [feature-section-2](#feature-section-2)
    - [testimonials-1](#testimonials-1)
    - [bento-grid-1](#bento-grid-1)
    - [feature-grid-2x2](#feature-grid-2x2)
    - [team-section-1](#team-section-1)

## Introduction

This documentation provides detailed information about the components used in the project. Each component is described with its parameters to facilitate understanding and integration. The documentation is optimized for use with language models to assist in building websites.

## How Websites are built

The website builder system is based on **Eleventy JS** and uses a component-based architecture with **Nunjucks** as the template engine and **Tailwind CSS** for styling. Here's how it works:

### 1. **Page Creation**

Pages are created using Markdown files (`.md`) in the `src` directory. Each page contains:

- **Front Matter**: YAML configuration at the top of the file
- **Content**: Markdown or HTML content
- **Component Integration**: Nunjucks includes for components

Example:

```plaintext
---
title: Demo Page
description: Example page
layout: layout/header-content-footer_1_with-border.njk
data_marketing_hero:
title: "Welcome"
description: "This is a hero section"
---
{% set data = data_marketing_hero %}
{% include "marketing/tailwind-ui/marketing-hero_movie.njk" %}
```

### 2. **Component System**

Components are modular, reusable elements stored in `src/components/`. Each component:

- Is a Nunjucks template (`.njk`)
- Receives data through the `data` variable
- Uses Tailwind CSS for styling
- Can include JavaScript for interactivity

### 3. **Data Flow**

1. Data is defined in the page's front matter
2. The `data` variable is set using `{% set data = ... %}`
3. The component is included using `{% include "path/to/component.njk" %}`
4. The component template processes the data and renders HTML

### 4. **Layouts**

Layouts are templates that define the overall structure of pages. They:

- Are stored in `src/components/layout/`
- Include common elements like header and footer
- Can be nested for complex page structures
- Are specified in the page's front matter

### 5. **Configuration**

Global settings are managed through JSON files in `src/defaults/`:

- `config.json`: Site-wide settings
- `header.json`: Navigation and header settings
- `footer.json`: Footer content and links

### 6. **Styling**

- Uses Tailwind CSS for utility-first styling
- Supports dark mode with appropriate class variants
- Custom styles can be added in `src/css/styles.sass`

### 7. **Component Integration Example**

To use a component in a page:

1. Define the component data in the page's front matter:

```yaml
data_logo_slider:
logos:
- src: "/images/logo1.png"
  alt: "Company 1"
- src: "/images/logo2.png"
  alt: "Company 2"
```

2. Include the component in the page using Nunjucks:

```nunjucks
{% set data = data_marketing_hero %}
{% include "marketing/tailwind-ui/marketing-hero_movie.njk" %}
```

## Components

### forms

#### generic-form

**Description:**  
A versatile contact form component that captures user information and messages. It includes customizable fields, button colors, and success messages upon submission.

**Parameters:**

- **id** *(string)*  
  Unique identifier for the form.

- **primaryButtonColor** *(string)*  
  Hex color code for the primary button.

- **secondaryButtonColor** *(string)*  
  Hex color code for the secondary button.

- **successTitle** *(string)*  
  Title displayed upon successful form submission.

- **successMessage** *(string)*  
  Message displayed upon successful form submission.

- **submitText** *(string)*  
  Text displayed on the submit button.

- **fields** *(array of objects)*  
  Defines the form fields. Each object can have the following properties:
  
  - **columns** *(array of objects)*  
    Defines the layout and fields within each column.

    - **key** *(string)*  
      The identifier for the field.

    - **label** *(string)*  
      The label displayed for the field.

    - **type** *(string)*  
      The type of input (e.g., text, email, date, textarea, checkbox).

    - **required** *(boolean, optional)*  
      Indicates if the field is mandatory.

    - **placeholder** *(string, optional)*  
      Placeholder text for the field.

    - **description** *(string, optional)*  
      Additional description or instructions for the field.

### marketing/tailwind-ui

#### marketing-hero_movie

**Description:**  
A hero section component featuring a background video, announcement banner, hero content with buttons and features, and mobile navigation.

**Parameters:**

- **background** *(object)*  
  - `videoUrl` *(string)*: URL of the background video.

- **announcement** *(object)*  
  - `text` *(string)*: Announcement text.
  - `chip` *(string)*: Label for the announcement chip.
  - `link` *(object)*:
    - `label` *(string)*: Text for the link.
    - `url` *(string)*: URL the link points to.

- **hero** *(object)*  
  - `title` *(string)*: Title text.
  - `description` *(string)*: Description text.
  - `primaryButton` *(object)*:
    - `label` *(string)*: Text on the primary button.
    - `url` *(string)*: URL the primary button points to.
  - `secondaryButton` *(object)*:
    - `label` *(string)*: Text on the secondary button.
    - `url` *(string)*: URL the secondary button points to.
  - `features` *(array of strings)*: List of feature descriptions.

- **mobileNav** *(object)*  
  - `burgerMenu` *(boolean)*: Enables or disables the burger menu.
  - `menuItems` *(array of objects)*:
    - `label` *(string)*: Label for the menu item.
    - `url` *(string)*: URL the menu item points to.

#### testimonial-simple

**Description:**  
A simple testimonial section displaying customer feedback with an overline, headline, and description.

**Parameters:**

- **overline** *(string)*  
  Small text displayed above the headline.

- **headline** *(string)*  
  Main heading for the testimonial section.

- **description** *(string)*  
  Description or introductory text for the testimonials.

#### feature-two-col

**Description:**  
A feature section split into two columns, showcasing the app's benefits with a title, description, call-to-action, and an image of a phone.

**Parameters:**

- **title** *(string)*  
  Title of the feature section.

- **description** *(string)*  
  Description of the feature.

- **cta** *(object)*  
  - `label` *(string)*: Text on the call-to-action button.
  - `url` *(string)*: URL the button points to.

- **phone** *(object)*  
  - `image` *(string)*: Source URL of the phone image.
  - `alt` *(string)*: Alternative text for the image.

#### logo-slider

**Description:**  
A slider showcasing partner or client logos with optional titles and descriptions.

**Parameters:**

- **title** *(string)*  
  Title of the logo slider section.

- **description** *(string)*  
  Description or introductory text for the logos.

- **logos** *(array of objects)*  
  - `src` *(string)*: Source URL of the logo image.
  - `alt` *(string)*: Alternative text for the logo.

#### download-banner

**Description:**  
A banner prompting users to download a guide with a title and call-to-action button.

**Parameters:**

- **title** *(string)*  
  Title of the download banner.

- **cta** *(object)*  
  - `label` *(string)*: Text on the call-to-action button.
  - `url` *(string)*: URL the button points to.

#### marketing-hero_picture

**Description:**  
A hero section featuring an image, announcement, and hero content with buttons.

**Parameters:**

- **image** *(string)*  
  Source URL of the hero image.

- **announcement** *(object)*  
  - `text` *(string)*: Announcement text.
  - `link` *(object)*:
    - `label` *(string)*: Text for the link.
    - `url` *(string)*: URL the link points to.

- **hero** *(object)*  
  - `title` *(string)*: Title text.
  - `description` *(string)*: Description text.
  - `primaryButton` *(object)*:
    - `label` *(string)*: Text on the primary button.
    - `url` *(string)*: URL the primary button points to.
  - `secondaryButton` *(object)*:
    - `label` *(string)*: Text on the secondary button.
    - `url` *(string)*: URL the secondary button points to.

#### marketing-hero_gradient

**Description:**  
A variant of the marketing hero section with a gradient background.

**Parameters:**

- **All parameters from `marketing-hero_picture`**

#### hero-section-1

**Description:**  
A hero section focused on introducing AI usage in businesses, including subtitles, titles, and descriptions.

**Parameters:**

- **subtitle** *(string)*  
  Subtitle text displayed above the main title.

- **title** *(string)*  
  Main title of the hero section.

- **description** *(string)*  
  Description text elaborating on the title.

#### bento-grid-2

**Description:**  
A grid layout showcasing images with titles and descriptions to highlight various aspects of AI implementation.

**Parameters:**

- **title** *(string)*  
  Title of the grid section.

- **description** *(string)*  
  Description text for the grid section.

- **images** *(array of strings)*  
  Array of image URLs to be displayed in the grid.

#### contact-1

**Description:**  
A contact section encouraging users to get in touch, featuring an image, title, description, features, and action buttons.

**Parameters:**

- **image** *(string)*  
  Source URL of the contact image.

- **imageAlt** *(string)*  
  Alternative text for the contact image.

- **title** *(string)*  
  Title of the contact section.

- **description** *(string)*  
  Description encouraging users to make contact.

- **features** *(array of strings)*  
  List of features or benefits provided in the contact section.

- **buttons** *(array of objects)*  
  - `url` *(string)*: URL the button points to.
  - `label` *(string)*: Text on the button.

### tailwind-ui

#### feature-section-1

**Description:**  
A feature section highlighting workflow improvements with a tagline, heading, description, features, and an accompanying image.

**Parameters:**

- **tagline** *(string)*  
  Short tagline displayed above the heading.

- **heading** *(string)*  
  Main heading of the feature section.

- **description** *(string)*  
  Detailed description of the features.

- **features** *(array of objects)*  
  - `icon` *(string)*: Icon representing the feature.
  - `title` *(string)*: Title of the feature.
  - `description` *(string)*: Description of the feature.

- **image** *(object)*  
  - `src` *(string)*: Source URL of the image.
  - `alt` *(string)*: Alternative text for the image.
  - `width` *(string)*: Width of the image.
  - `height` *(string)*: Height of the image.

#### feature-section-2

**Description:**  
A feature section addressing serverless solutions with a tagline, heading, description, features, and an image.

**Parameters:**

- **tagline** *(string)*  
  Short tagline displayed above the heading.

- **heading** *(string)*  
  Main heading of the feature section.

- **description** *(string)*  
  Detailed description of the features.

- **image** *(object)*  
  - `src` *(string)*: Source URL of the image.
  - `alt` *(string)*: Alternative text for the image.
  - `width` *(number)*: Width of the image.
  - `height` *(number)*: Height of the image.

- **features** *(array of objects)*  
  - `icon` *(string)*: Icon representing the feature.
  - `title` *(string)*: Title of the feature.
  - `description` *(string)*: Description of the feature.

#### testimonials-1

**Description:**  
A testimonials section featuring customer quotes, author information, and associated logos.

**Parameters:**

- **logo** *(object)*  
  - `src` *(string)*: Source URL of the logo image.
  - `alt` *(string)*: Alternative text for the logo.

- **quote** *(string)*  
  Customer testimonial quote.

- **author** *(object)*  
  - `name` *(string)*: Name of the testimonial author.
  - `title` *(string)*: Title or position of the author.
  - `image` *(string)*: Source URL of the author's image.

#### bento-grid-1

**Description:**  
A grid layout displaying various performance-related features with images, labels, titles, and descriptions.

**Parameters:**

- **headline** *(string)*  
  Headline of the grid section.

- **subheadline** *(string)*  
  Subheadline providing additional context.

- **boxes** *(array of objects)*  
  - `image` *(string)*: Source URL of the feature image.
  - `imageAlt` *(string)*: Alternative text for the image.
  - `label` *(string)*: Label categorizing the feature.
  - `title` *(string)*: Title of the feature.
  - `description` *(string)*: Description of the feature.

#### feature-grid-2x2

**Description:**  
A grid displaying features in a 2x2 layout with overline, headline, description, and individual feature details.

**Parameters:**

- **overline** *(string)*  
  Small text displayed above the headline.

- **headline** *(string)*  
  Main headline of the feature grid.

- **description** *(string)*  
  Description of the feature grid section.

- **features** *(array of objects)*  
  - `title` *(string)*: Title of the feature.
  - `description` *(string)*: Description of the feature.
  - `icon` *(string)*: Icon representing the feature.

#### team-section-1

**Description:**  
A team section introducing leadership with titles, descriptions, and team member details.

**Parameters:**

- **title** *(string)*  
  Title of the team section.

- **description** *(string)*  
  Description of the team section.

- **team** *(array of objects)*  
  - `name` *(string)*: Name of the team member.
  - `role` *(string)*: Role or position of the team member.
  - `image` *(string)*: Source URL of the team member's image.

### marketing/tailwind-ui

#### marketing-hero_picture

**Description:**  
A hero section featuring a picture with an announcement and hero content, including buttons for user actions.

**Parameters:**

- **image** *(string)*  
  Source URL of the hero image.

- **announcement** *(object)*  
  - `text` *(string)*: Announcement text.
  - `link` *(object)*:
    - `label` *(string)*: Text for the link.
    - `url` *(string)*: URL the link points to.

- **hero** *(object)*  
  - `title` *(string)*: Title text.
  - `description` *(string)*: Description text.
  - `primaryButton` *(object)*:
    - `label` *(string)*: Text on the primary button.
    - `url` *(string)*: URL the primary button points to.
  - `secondaryButton` *(object)*:
    - `label` *(string)*: Text on the secondary button.
    - `url` *(string)*: URL the secondary button points to.

### marketing/tailwind-ui

#### marketing-hero_gradient

**Description:**  
A hero section variant with a gradient background, featuring announcement and hero content similar to `marketing-hero_picture`.

**Parameters:**

- **All parameters from `marketing-hero_picture`**

### marketing/tailwind-ui

#### hero-section-1

**Description:**  
A hero section dedicated to preparing businesses for AI integration, including subtitles, titles, and descriptive text.

**Parameters:**

- **subtitle** *(string)*  
  Subtitle text displayed above the main title.

- **title** *(string)*  
  Main title of the hero section.

- **description** *(string)*  
  Description elaborating on AI integration services.

### marketing/tailwind-ui

#### bento-grid-2

**Description:**  
A bento-style grid showcasing images related to AI implementation, organized for visual appeal.

**Parameters:**

- **title** *(string)*  
  Title of the grid section.

- **description** *(string)*  
  Description of the grid section.

- **images** *(array of strings)*  
  Array of image URLs to be displayed in the grid.

### marketing/tailwind-ui

#### contact-1

**Description:**  
A contact section encouraging users to get in touch, featuring an image, title, description, features, and action buttons.

**Parameters:**

- **image** *(string)*  
  Source URL of the contact image.

- **imageAlt** *(string)*  
  Alternative text for the contact image.

- **title** *(string)*  
  Title of the contact section.

- **description** *(string)*  
  Description encouraging users to make contact.

- **features** *(array of strings)*  
  List of features or benefits provided in the contact section.

- **buttons** *(array of objects)*  
  - `url` *(string)*: URL the button points to.
  - `label` *(string)*: Text on the button.


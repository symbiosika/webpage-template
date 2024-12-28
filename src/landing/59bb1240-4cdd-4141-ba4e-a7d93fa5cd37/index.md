---
title: "Landing Page Demo 1"
layout: layout/landing-page_1.njk
# Footer
footer:
  company:
    name: "My awesome company"
    url: "/"
# Data
data_team_members:
  title: "Meet our leadership"
  description: "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for     our clients."
  team:
    - name: "Leslie Alexander"
      role: "Co-Founder / CEO"
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    - name: "Michael Foster"
      role: "Co-Founder / CTO"
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    - name: "Sarah Brown"
      role: "Chief Marketing Officer"
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    - name: "James Smith"
      role: "Head of Sales"
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"

text_block_1:
    content: "This is some long text that should be wrapped in a text block. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

text_block_2:
    content: "Noch weiterer Text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

action_button_1:
    label: "Buy me now!"
    url: "/"
---

{% set data = text_block_1 %}
{% include "text/simple-text-block_1.njk" %}

{% set data = data_team_members %}
{% include "marketing/tailwind-ui/team-section-1.njk" %}

{% set data = text_block_2 %}
{% include "text/simple-text-block_1.njk" %}

{% set data = action_button_1 %}
{% include "action/simple-button_to_navigate.njk" %}

---
layout: default
title: Drishti Dhandhania — Product
description: Product at Kargo and MBA candidate at Berkeley Haas, working where customer insight, data, and product meet.
permalink: /
---

<section class="home-intro" aria-labelledby="home-title">
  <p class="eyebrow"><span class="section-number">01</span> PRODUCT · CUSTOMER INSIGHT · DATA</p>
  <img
    class="profile-photo"
    src="{{ '/assets/images/drishti-dhandhania.webp' | relative_url }}"
    alt="Portrait of Drishti Dhandhania"
    width="800"
    height="1200"
    fetchpriority="high"
    decoding="async"
  >
  <h1 id="home-title">Drishti Dhandhania</h1>
  <p class="home-intro__headline">Product @ Kargo <span aria-hidden="true">·</span> MBA @ Berkeley Haas</p>
  <p class="home-intro__copy">
    I work where customer insight, data, and product meet—turning moments of friction into better experiences.
    After five years across ad tech, I’m now helping build the support infrastructure behind Karlo, Kargo’s
    agentic AI platform. I’m pursuing my MBA at Berkeley Haas and exploring how thoughtful products can help
    people build habits that stick.
  </p>
  <div class="link-row">
    <a class="text-link" href="{{ '/experience/' | relative_url }}">Explore my experience <span aria-hidden="true">↗</span></a>
    <a class="text-link" href="{{ '/contact/' | relative_url }}">Get in touch <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section class="selected-project" aria-labelledby="selected-project-title">
  <p class="eyebrow"><span class="section-number">02</span> SELECTED PROJECT</p>
  <div class="project-intro">
    <div>
      <p class="project-status">CLICKABLE PROTOTYPE</p>
      <h2 id="selected-project-title">FitCircle</h2>
      <p class="project-subtitle">A social fitness prototype that turns “we should work out together” into an actual plan.</p>
    </div>
    <a class="text-link project-link" href="{{ '/projects/fitcircle/' | relative_url }}">Explore the project <span aria-hidden="true">↗</span></a>
  </div>
  <p class="project-summary">
    A clickable Lovable prototype exploring how private circles can make it easier for friends to plan a workout together.
  </p>
  {% include project-tags.html %}
  <a class="home-project-image" href="{{ '/projects/fitcircle/' | relative_url }}" aria-label="View the FitCircle prototype project">
    <img
      src="{{ '/assets/images/fitcircle-whats-the-move.png' | relative_url }}"
      alt="FitCircle screen titled “What’s the move?” showing friends’ upcoming workout plans and a Get Started button"
      width="664"
      height="1290"
      loading="lazy"
      decoding="async"
    >
  </a>
</section>

<section class="home-contact" aria-labelledby="home-contact-title">
  <p class="eyebrow"><span class="section-number">03</span> KEEP IN TOUCH</p>
  <h2 id="home-contact-title">Have a product question or an idea to explore?</h2>
  <a class="text-link" href="{{ '/contact/' | relative_url }}">Contact me <span aria-hidden="true">↗</span></a>
</section>

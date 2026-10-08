---
layout: default
title: Drishti Dhandhania — Product
description: My work sits at the intersection of customer insight, data, and product, understanding where people get stuck and turning that insight into better experiences.
permalink: /
---

<section id="introduction" class="home-intro" aria-labelledby="home-title">
  <p class="eyebrow"><span class="section-number">01</span> INTRODUCTION</p>
  <h1 id="home-title">Drishti Dhandhania</h1>
  <p class="home-intro__headline">Product @ Kargo <span aria-hidden="true">·</span> MBA @ Berkeley Haas</p>
  <div class="link-row">
    <a class="text-link" href="https://www.linkedin.com/in/drishti-dhandhania" target="_blank" rel="noopener noreferrer">LINKEDIN <span aria-hidden="true">↗</span></a>
    <a class="text-link" href="#contact">GET IN TOUCH <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section id="about" class="home-section" aria-labelledby="home-about-title">
  <p class="eyebrow"><span class="section-number">02</span> A LITTLE ABOUT ME</p>
  <h2 id="home-about-title">About</h2>
  {% include about-content.html %}
</section>

<section id="work-experience" class="home-section" aria-labelledby="home-experience-title">
  <p class="eyebrow"><span class="section-number">03</span> SELECTED EXPERIENCE</p>
  <h2 id="home-experience-title">Work Experience</h2>
  {% include experience-content.html company_heading="h3" role_heading="h4" %}
</section>

<section id="fitcircle" class="selected-project" aria-labelledby="selected-project-title">
  <p class="eyebrow"><span class="section-number">04</span> SELECTED PROJECT</p>
  <header class="fitcircle-heading">
    <p class="project-status">PRODUCT STRATEGY + PROTOTYPE</p>
    <h2 id="selected-project-title">FitCircle</h2>
    <p class="project-subtitle">Product strategy and prototyping for social fitness coordination.</p>
  </header>
  {% include project-tags.html %}
  <p class="fitcircle-introduction">
    People work out more with friends, but between group chats, ClassPass, and Strava, nobody can tell who's actually going. I pitched FitCircle at Haas Startup Disco and interviewed 35 people to test the idea. Planning wasn't the problem. Follow-through was. A line from one customer interview summed it up: "If someone asks me, I'd say yes, but I wouldn't start it." So FitCircle is built around showing up. Small private circles share upcoming workouts, each friend marks themselves committed or considering, and booking stays an optional link. The metric that matters is attendance, not plans made.
  </p>

  <section class="fitcircle-research" aria-label="FitCircle research and strategy figures">
    <figure class="fitcircle-research__figure">
      <div class="fitcircle-research__frame">
        <img
          src="{{ '/assets/images/fitcircle-competitive-landscape.png' | relative_url }}"
          alt="Competitive Landscape slide with a positioning map comparing class inventory and social connections to show FitCircle’s intended position."
          width="1562"
          height="852"
          loading="lazy"
          decoding="async"
        >
      </div>
      <figcaption>
        <span class="fitcircle-figure__title">Competitive positioning</span>
        <span>Where FitCircle sits on class inventory and friend connections.</span>
      </figcaption>
    </figure>

    <figure class="fitcircle-research__figure">
      <div class="fitcircle-research__frame">
        <img
          src="{{ '/assets/images/fitcircle-competitive-moat.png' | relative_url }}"
          alt="Competitive Moat slide showing a proposed framework connecting social ties, preferences, attendance, and responses to nudges over time."
          width="1568"
          height="836"
          loading="lazy"
          decoding="async"
        >
      </div>
      <figcaption>
        <span class="fitcircle-figure__title">Differentiation framework</span>
        <span>How social and attendance data could build a moat over time.</span>
      </figcaption>
    </figure>
  </section>

  <section class="fitcircle-prototype-area" aria-labelledby="fitcircle-prototype-heading">
    <h3 class="fitcircle-prototype-area__heading" id="fitcircle-prototype-heading">Prototype screens</h3>
    <div class="fitcircle-prototype-strip">
      <figure class="fitcircle-prototype">
        <div class="fitcircle-prototype__frame">
          <img
            src="{{ '/assets/images/fitcircle-whats-the-move.png' | relative_url }}"
            alt="FitCircle prototype screen titled “What’s the move?” listing friends’ upcoming workout plans and a Get Started button."
            width="664"
            height="1290"
            loading="lazy"
            decoding="async"
          >
        </div>
        <figcaption>
          <span class="fitcircle-figure__title">What’s the move?</span>
          <span>Friends’ upcoming workout plans.</span>
        </figcaption>
      </figure>

      <figure class="fitcircle-prototype">
        <div class="fitcircle-prototype__frame">
          <img
            src="{{ '/assets/images/fitcircle-find-your-people.png' | relative_url }}"
            alt="FitCircle prototype screen titled “Find your people” with options to create a circle or join with a code."
            width="712"
            height="998"
            loading="lazy"
            decoding="async"
          >
        </div>
        <figcaption>
          <span class="fitcircle-figure__title">Find your people</span>
          <span>Create or join a private circle.</span>
        </figcaption>
      </figure>

      <figure class="fitcircle-prototype">
        <div class="fitcircle-prototype__frame">
          <img
            src="{{ '/assets/images/fitcircle-start-something.png' | relative_url }}"
            alt="FitCircle prototype screen titled “Start something” with fields for activity, location, date, time, commitment level, circle, visibility, and an optional booking link."
            width="468"
            height="1170"
            loading="lazy"
            decoding="async"
          >
        </div>
        <figcaption>
          <span class="fitcircle-figure__title">Start something</span>
          <span>Share an activity, location, time, and commitment level.</span>
        </figcaption>
      </figure>
    </div>
  </section>
</section>

<section id="contact" class="home-contact" aria-labelledby="home-contact-title">
  <p class="eyebrow"><span class="section-number">05</span> CONTACT</p>
  <h2 id="home-contact-title">Contact</h2>
  <p class="page-lede">Have a product question or an idea to explore?</p>
  {% include contact-methods.html heading_tag="h3" %}
</section>

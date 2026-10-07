---
layout: default
title: Drishti Dhandhania — Product
description: Product at Kargo and MBA candidate at Berkeley Haas, working where customer insight, data, and product meet.
permalink: /
---

<section id="introduction" class="home-intro" aria-labelledby="home-title">
  <p class="eyebrow"><span class="section-number">01</span> INTRODUCTION</p>
  <h1 id="home-title">Drishti Dhandhania</h1>
  <p class="home-intro__headline">Product @ Kargo <span aria-hidden="true">·</span> MBA @ Berkeley Haas</p>
  <p class="home-intro__copy">
    I work where customer insight, data, and product meet—turning moments of friction into better experiences.
    After five years across ad tech, I’m now helping build the support infrastructure behind Karlo, Kargo’s
    agentic AI platform. I’m pursuing my MBA at Berkeley Haas and exploring how thoughtful products can help
    people build habits that stick.
  </p>
  <div class="link-row">
    <a class="text-link" href="#work-experience">Explore my experience <span aria-hidden="true">↗</span></a>
    <a class="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
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
    I explored how social accountability could help turn fitness intentions into shared plans, combining competitive
    analysis, product strategy, and a clickable Lovable prototype. The concept grounds that opportunity in everyday
    coordination.
  </p>

  <div class="fitcircle-narrative">
    <section class="fitcircle-narrative__item" aria-labelledby="fitcircle-problem">
      <h3 id="fitcircle-problem">The problem</h3>
      <p>Finding a workout does not resolve the friction of coordinating with friends and committing to a plan, including agreeing on an activity, place, time, and who is ready to go.</p>
    </section>

    <section class="fitcircle-narrative__item" aria-labelledby="fitcircle-hypothesis">
      <h3 id="fitcircle-hypothesis">The hypothesis</h3>
      <p>Making upcoming workouts visible within small, private circles could make it easier for friends to coordinate, see who is committed, and follow through together—a product hypothesis, not a measured outcome.</p>
    </section>

    <section class="fitcircle-narrative__item" aria-labelledby="fitcircle-built">
      <h3 id="fitcircle-built">What I built</h3>
      <p>A competitive positioning map, a differentiation framework, and a clickable prototype for creating or joining circles and sharing workout plans. The screens show how an upcoming plan can carry an activity, location, time, and committed-or-considering state, with booking left to an optional external link.</p>
    </section>

    <section class="fitcircle-narrative__item" aria-labelledby="fitcircle-decisions">
      <h3 id="fitcircle-decisions">Key product decisions</h3>
      <p>Small private circles; clear activity, location, and time details; committed versus considering status; and an optional external booking link.</p>
    </section>
  </div>

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
        <span>My analysis of class inventory, social connections, and FitCircle’s intended positioning.</span>
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
        <span>A strategic hypothesis for how social and attendance signals could inform the product over time.</span>
      </figcaption>
    </figure>
  </section>

  <p class="fitcircle-research-note">Strategy artifacts reflect project hypotheses and intended positioning.</p>

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

---
layout: default
title: FitCircle
description: A clickable prototype exploring how private circles can help friends make workout plans together.
permalink: /projects/fitcircle/
gallery: true
---

<article class="project-page">
  <header class="project-page__intro">
    <p class="eyebrow"><span class="section-number">PROJECT 01</span> CLICKABLE PROTOTYPE</p>
    <h1>FitCircle</h1>
    <p class="project-subtitle">A social fitness prototype that turns “we should work out together” into an actual plan.</p>
    <p class="project-summary">
      I built a clickable FitCircle prototype in Lovable to explore how social accountability can help people follow
      through on fitness plans. People can create or join private circles, share an upcoming workout, and make it easier
      for friends to join.
    </p>
    {% include project-tags.html %}
  </header>

  <section class="gallery-section" aria-labelledby="gallery-heading">
    <div class="gallery-intro">
      <p class="eyebrow"><span class="section-number">01</span> THE PROTOTYPE</p>
      <h2 id="gallery-heading">A small plan is easier to join.</h2>
      <p>Three screens show the path from seeing a friend’s plan to finding a circle and sharing a workout.</p>
    </div>

    <figure class="gallery">
      <div class="gallery__stage">
        <img
          class="gallery__image"
          id="fitcircle-gallery-image"
          src="{{ '/assets/images/fitcircle-whats-the-move.png' | relative_url }}"
          alt="FitCircle welcome screen showing friends’ upcoming workout plans"
          width="664"
          height="1290"
          fetchpriority="high"
          decoding="async"
        >
      </div>
      <figcaption class="gallery__caption" id="fitcircle-gallery-caption" aria-live="polite">
        <span class="gallery__caption-title">What’s the move?</span>
        <span class="gallery__caption-description">See friends’ upcoming plans and join them in one tap.</span>
      </figcaption>

      <div class="gallery__thumbnails" role="group" aria-label="Choose a FitCircle prototype screen">
        <button
          class="gallery-thumb"
          type="button"
          aria-label="Show What’s the move? screen: friends’ upcoming workout plans"
          aria-pressed="true"
          aria-controls="fitcircle-gallery-image"
          data-image="{{ '/assets/images/fitcircle-whats-the-move.png' | relative_url }}"
          data-alt="FitCircle welcome screen showing friends’ upcoming workout plans"
          data-title="What’s the move?"
          data-description="See friends’ upcoming plans and join them in one tap."
          data-width="664"
          data-height="1290"
        >
          <img src="{{ '/assets/images/fitcircle-whats-the-move.png' | relative_url }}" alt="" width="664" height="1290" loading="lazy" decoding="async">
          <span>What’s the move?</span>
        </button>
        <button
          class="gallery-thumb"
          type="button"
          aria-label="Show Find your people screen: create a private circle or join with a code"
          aria-pressed="false"
          aria-controls="fitcircle-gallery-image"
          data-image="{{ '/assets/images/fitcircle-find-your-people.png' | relative_url }}"
          data-alt="FitCircle circle screen offering Create and Join with code options"
          data-title="Find your people"
          data-description="Create a private circle or join one with a code."
          data-width="712"
          data-height="998"
        >
          <img src="{{ '/assets/images/fitcircle-find-your-people.png' | relative_url }}" alt="" width="712" height="998" loading="lazy" decoding="async">
          <span>Find your people</span>
        </button>
        <button
          class="gallery-thumb"
          type="button"
          aria-label="Show Start something screen: create and share a workout plan"
          aria-pressed="false"
          aria-controls="fitcircle-gallery-image"
          data-image="{{ '/assets/images/fitcircle-start-something.png' | relative_url }}"
          data-alt="FitCircle workout form with activity, location, date, time, commitment level, circle, visibility, and optional booking link"
          data-title="Start something"
          data-description="Share an activity, place, time, commitment level, and optional booking link."
          data-width="468"
          data-height="1170"
        >
          <img src="{{ '/assets/images/fitcircle-start-something.png' | relative_url }}" alt="" width="468" height="1170" loading="lazy" decoding="async">
          <span>Start something</span>
        </button>
      </div>
      <noscript><p class="noscript-note">The first screen is shown above. Enable JavaScript to select another screen.</p></noscript>
    </figure>
  </section>

  <section class="project-story" aria-labelledby="problem-heading">
    <p class="eyebrow"><span class="section-number">02</span> PRODUCT THINKING</p>
    <h2 id="problem-heading">The problem</h2>
    <p>Finding a workout is only part of the challenge. Coordinating with friends and following through on plans can still be difficult.</p>

    <h2>The hypothesis</h2>
    <p>Making upcoming workout plans visible within small, private circles could help people coordinate and show up together.</p>

    <h2>What I built</h2>
    <p>A clickable Lovable prototype demonstrating circle creation and joining, workout-plan posting, and a social planning experience.</p>

    <h2>Key product decisions</h2>
    <ul class="prose-list">
      <li>Keep circles small and private.</li>
      <li>Make activity, location, and timing clear in a shared plan.</li>
      <li>Distinguish a committed plan from something someone is considering.</li>
      <li>Allow an optional external booking link.</li>
    </ul>

    <h2>What I would test next</h2>
    <p>These are proposed tests, not completed results:</p>
    <ul class="prose-list">
      <li>Do people post workout plans and invite friends into a circle?</li>
      <li>Do friends join a planned workout?</li>
      <li>Do people return to coordinate another activity?</li>
    </ul>
  </section>

  <aside class="source-note">
    <p>
      This page describes the supplied clickable prototype. The competitive-landscape and competitive-moat slides are
      treated as pitch context, not verified market research or implemented product features.
    </p>
  </aside>
</article>

// V.O.I.D Game Structure
class Game_1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="portfolio d-flex flex-column gap-6">
        <div class="portfolio-img position-relative overflow-hidden">
          <img src="../assets/images/portfolio/void/banner.webp" alt="" class="img-fluid"
            style="border-radius: 4px;">
          <div class="portfolio-overlay">
            <a href="https://agrmayank.itch.io/void" target="_blank" rel="noopener noreferrer"
              class="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
              <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
            </a>
          </div>
        </div>
        <div class="portfolio-details d-flex flex-column gap-3">
          <h3 class="mb-0">V.O.I.D</h3>
          <div class="hstack gap-2">
            <a class="badge text-dark border" href="https://agrmayank.itch.io/void" target="_blank"
              rel="noopener noreferrer">Itch.io
              <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('game-void', Game_1);

// Wordfall Game Structure
class Game_2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="portfolio d-flex flex-column gap-6">
        <div class="portfolio-img position-relative overflow-hidden">
          <img src="../assets/images/portfolio/wordfall/banner.webp" alt="" class="img-fluid"
            style="border-radius: 4px;">
          <div class="portfolio-overlay">
            <a href="https://agrmayank.itch.io/wordfall" target="_blank" rel="noopener noreferrer"
              class="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
              <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
            </a>
          </div>
        </div>
        <div class="portfolio-details d-flex flex-column gap-3">
          <h3 class="mb-0">Wordfall</h3>
          <div class="hstack gap-2">
            <a class="badge text-dark border" href="https://agrmayank.itch.io/wordfall" target="_blank"
              rel="noopener noreferrer">Itch.io
              <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('game-wordfall', Game_2);

// You Are the End Game Structure
class Game_3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="portfolio d-flex flex-column gap-6">
        <div class="portfolio-img position-relative overflow-hidden">
          <img src="../assets/images/portfolio/you-are-the-end/banner.webp" alt="" class="img-fluid"
            style="border-radius: 4px;">
          <div class="portfolio-overlay">
            <a href="https://agrmayank.itch.io/you-are-the-end" target="_blank" rel="noopener noreferrer"
              class="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
              <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
            </a>
          </div>
        </div>
        <div class="portfolio-details d-flex flex-column gap-3">
          <h3 class="mb-0">You Are the End</h3>
          <div class="hstack gap-2">
            <a class="badge text-dark border" href="https://agrmayank.itch.io/you-are-the-end" target="_blank"
              rel="noopener noreferrer">Itch.io
              <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('game-youaretheend', Game_3);

// KeyBound Game Structure
class Game_4 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="portfolio d-flex flex-column gap-6">
        <div class="portfolio-img position-relative overflow-hidden">
          <img src="../assets/images/portfolio/keybound/banner.webp" alt="" class="img-fluid"
            style="border-radius: 4px;">
          <div class="portfolio-overlay">
            <a href="https://amnesea.com/keybound" target="_blank" rel="noopener noreferrer"
              class="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
              <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
            </a>
          </div>
        </div>
        <div class="portfolio-details d-flex flex-column gap-3">
          <h3 class="mb-0">KeyBound</h3>
          <div class="hstack gap-2">
            <a class="badge text-dark border" href="https://store.steampowered.com/app/3070700/KeyBound/"
              target="_blank" rel="noopener noreferrer">Steam
              <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
            <a class="badge text-dark border" href="https://agrmayank.itch.io/keybound" target="_blank"
              rel="noopener noreferrer">Itch.io
              <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('game-keybound', Game_4);

// TimeBound Game Structure
class Game_5 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="portfolio d-flex flex-column gap-6">
        <div class="portfolio-img position-relative overflow-hidden">
          <img src="../assets/images/portfolio/timebound/banner.webp" alt="" class="img-fluid"
            style="border-radius: 4px;">
          <div class="portfolio-overlay">
            <a href="https://amnesea.com/timebound" target="_blank" rel="noopener noreferrer"
              class="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
              <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
            </a>
          </div>
        </div>
        <div class="portfolio-details d-flex flex-column gap-3">
          <h3 class="mb-0">TimeBound</h3>
          <div class="hstack gap-2">
            <a class="badge text-dark border" href="https://agrmayank.itch.io/timebound" target="_blank"
              rel="noopener noreferrer">Itch.io
              <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('game-timebound', Game_5);

// Balloon Invaders Game Structure
class Game_6 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="portfolio d-flex flex-column gap-6">
        <div class="portfolio-img position-relative overflow-hidden">
          <img src="../assets/images/portfolio/balloon-invaders/banner.webp" alt="" class="img-fluid"
            style="border-radius: 4px;">
          <div class="portfolio-overlay">
            <a href="https://ballooninvaders.agrmayank.com/" target="_blank" rel="noopener noreferrer"
              class="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
              <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
            </a>
          </div>
        </div>
        <div class="portfolio-details d-flex flex-column gap-3">
          <h3 class="mb-0">Balloon Invaders</h3>
          <div class="hstack gap-2">
            <a class="badge text-dark border"
              href="https://play.google.com/store/apps/details?id=com.AgrMayank.BalloonInvaders" target="_blank"
              rel="noopener noreferrer">Android
              <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
            <a class="badge text-dark border"
              href="https://play.google.com/store/apps/details?id=com.AgrMayank.BalloonInvaders.JioGlass.Dive"
              target="_blank" rel="noopener noreferrer">JioGlass
              <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('game-ballooninvaders', Game_6);

// Zombies Incoming Game Structure
class Game_7 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="portfolio d-flex flex-column gap-6">
        <div class="portfolio-img position-relative overflow-hidden">
          <img src="../assets/images/portfolio/zombies-incoming/banner.webp" alt="" class="img-fluid"
            style="border-radius: 4px;">
          <div class="portfolio-overlay">
            <a href="https://zombiesincoming.agrmayank.com/" target="_blank" rel="noopener noreferrer"
              class="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
              <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
            </a>
          </div>
        </div>
        <div class="portfolio-details d-flex flex-column gap-3">
          <h3 class="mb-0">Zombies Incoming</h3>
          <div class="hstack gap-2">
            <a class="badge text-dark border"
              href="https://play.google.com/store/apps/details?id=com.AgrMayank.ZombiesIncoming" target="_blank"
              rel="noopener noreferrer">Android
              <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('game-zombiesincoming', Game_7);

// Spacey's Adventures Game Structure
class Game_8 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="portfolio d-flex flex-column gap-6">
        <div class="portfolio-img position-relative overflow-hidden">
          <img src="../assets/images/portfolio/spaceys-adventures/banner.webp" alt="" class="img-fluid"
            style="border-radius: 4px;">
          <div class="portfolio-overlay">
            <a href="https://spaceysadventure.agrmayank.com/" target="_blank" rel="noopener noreferrer"
              class="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
              <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
            </a>
          </div>
        </div>
        <div class="portfolio-details d-flex flex-column gap-3">
          <h3 class="mb-0">Spacey's Adventure</h3>
          <div class="hstack gap-2">
            <a class="badge text-dark border"
              href="https://play.google.com/store/apps/details?id=com.AgrMayank.SpaceysAdventure"
              target="_blank" rel="noopener noreferrer">Android
              <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
            <a class="badge text-dark border"
              href="https://play.google.com/store/apps/details?id=com.AgrMayank.SpaceysAdventure.Lite"
              target="_blank" rel="noopener noreferrer">JioGlass
              <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('game-spaceysadventures', Game_8);

// Nyan Lives left Game Structure
class Game_9 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="portfolio d-flex flex-column gap-6">
        <div class="portfolio-img position-relative overflow-hidden">
          <img src="../assets/images/portfolio/nyan-lives-left/banner.webp" alt="" class="img-fluid"
            style="border-radius: 4px;">
          <div class="portfolio-overlay">
            <a href="https://agrmayank.itch.io/nyan-lives-left/" target="_blank" rel="noopener noreferrer"
              class="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
              <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
            </a>
          </div>
        </div>
        <div class="portfolio-details d-flex flex-column gap-3">
          <h3 class="mb-0">Nyan Lives Left</h3>
          <div class="hstack gap-2">
            <a class="badge text-dark border" href="https://agrmayank.itch.io/nyan-lives-left/" target="_blank"
              rel="noopener noreferrer">Itch.io
              <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('game-nyanlivesleft', Game_9);

// Shape of Sound Game Structure
class Game_10 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="portfolio d-flex flex-column gap-6">
        <div class="portfolio-img position-relative overflow-hidden">
          <img src="../assets/images/portfolio/shape-of-sound/banner.webp" alt="" class="img-fluid"
            style="border-radius: 4px;">
          <div class="portfolio-overlay">
            <a href="https://agrmayank.itch.io/shape-of-sound/" target="_blank" rel="noopener noreferrer"
              class="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
              <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
            </a>
          </div>
        </div>
        <div class="portfolio-details d-flex flex-column gap-3">
          <h3 class="mb-0">Shape of Sound</h3>
          <div class="hstack gap-2">
            <a class="badge text-dark border" href="https://agrmayank.itch.io/shape-of-sound/" target="_blank"
              rel="noopener noreferrer">Itch.io
              <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('game-shapeofsound', Game_10);

// Headshot Game Structure
class Game_11 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="portfolio d-flex flex-column gap-6">
        <div class="portfolio-img position-relative overflow-hidden">
          <img src="../assets/images/portfolio/headshot/banner.webp" alt="" class="img-fluid"
            style="border-radius: 4px;">
          <div class="portfolio-overlay">
            <a href="https://agrmayank.itch.io/headshot/" target="_blank" rel="noopener noreferrer"
              class="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
              <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
            </a>
          </div>
        </div>
        <div class="portfolio-details d-flex flex-column gap-3">
          <h3 class="mb-0">Headshot</h3>
          <div class="hstack gap-2">
            <a class="badge text-dark border" href="https://agrmayank.itch.io/headshot/" target="_blank"
              rel="noopener noreferrer">Itch.io
              <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('game-headshot', Game_11);

// Game Structure
class Game_12 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    `;
  }
}
customElements.define('game-ReplaceWithName', Game_12);

// Game Structure
class Game_13 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    `;
  }
}
customElements.define('game-ReplaceWithName', Game_13);

// Game Structure
class Game_14 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    `;
  }
}
customElements.define('game-ReplaceWithName', Game_14);

// Game Structure
class Game_15 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    `;
  }
}
customElements.define('game-ReplaceWithName', Game_15);

// Game Structure
class Game_16 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    `;
  }
}
customElements.define('game-ReplaceWithName', Game_16);

// Game Structure
class Game_17 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    `;
  }
}
customElements.define('game-ReplaceWithName', Game_17);

// Game Structure
class Game_0 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    `;
  }
}
customElements.define('game-ReplaceWithName', Game_0);

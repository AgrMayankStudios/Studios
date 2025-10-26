// Harmony App Component
class App_1 extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="portfolio d-flex flex-column gap-6">
                <div class="portfolio-img position-relative overflow-hidden">
                    <img src="../assets/images/portfolio/harmony/banner.webp" alt="" class="img-fluid"
                    style="border-radius: 4px;">
                    <div class="portfolio-overlay">
                    <a href="https://www.youtube.com/watch?v=qy70irvjD-U" target="_blank" rel="noopener noreferrer"
                        class="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
                        <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
                    </a>
                    </div>
                </div>
                <div class="portfolio-details d-flex flex-column gap-3">
                    <h3 class="mb-0">Harmony</h3>
                    <div class="hstack gap-2">
                    <a class="badge text-dark border" href="https://www.youtube.com/watch?v=qy70irvjD-U" target="_blank"
                        rel="noopener noreferrer">YouTube
                        <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('app-harmony', App_1);

// Round Them Oranges App Component
class App_2 extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="portfolio d-flex flex-column gap-6">
                <div class="portfolio-img position-relative overflow-hidden">
                  <img src="../assets/images/portfolio/round-them-oranges/banner-alt.webp" alt="" class="img-fluid"
                    style="border-radius: 4px;">
                  <div class="portfolio-overlay">
                    <a href="https://roundthemoranges.github.io/" target="_blank" rel="noopener noreferrer"
                      class="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
                      <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
                    </a>
                  </div>
                </div>
                <div class="portfolio-details d-flex flex-column gap-3">
                    <h3 class="mb-0">Round Them Oranges</h3>
                    <div class="hstack gap-2">
                    <a class="badge text-dark border" href="https://roundthemoranges.github.io/" target="_blank"
                      rel="noopener noreferrer">WebGL
                      <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('app-roundthemoranges', App_2);

// App Imagd Component
class App_3 extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="portfolio d-flex flex-column gap-6">
                <div class="portfolio-img position-relative overflow-hidden">
                  <img src="../assets/images/portfolio/imagd/banner.webp" alt="" class="img-fluid"
                    style="border-radius: 4px;">
                  <div class="portfolio-overlay">
                    <a href="https://imagd.agrmayank.com/" target="_blank" rel="noopener noreferrer"
                      class="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
                      <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
                    </a>
                  </div>
                </div>
                <div class="portfolio-details d-flex flex-column gap-3">
                  <h3 class="mb-0">Imagd</h3>
                  <div class="hstack gap-2">
                    <a class="badge text-dark border"
                      href="https://play.google.com/store/apps/details?id=com.agrmayank.imagd" target="_blank"
                      rel="noopener noreferrer">Android
                      <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
                    <a class="badge text-dark border"
                      href="https://www.amazon.in/Imagd-Heic-Jpeg-Image-Converter/dp/B08VHCLSMP" target="_blank"
                      rel="noopener noreferrer">Amazon
                      <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
                  </div>
                </div>
              </div>
        `;
    }
}
customElements.define('app-imagd', App_3);

// App InAssist Component
class App_4 extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="portfolio d-flex flex-column gap-6">
                <div class="portfolio-img position-relative overflow-hidden">
                  <img src="../assets/images/portfolio/inassist/banner.webp" alt="" class="img-fluid"
                    style="border-radius: 4px;">
                  <div class="portfolio-overlay">
                    <a href="https://www.youtube.com/watch?v=pZtLij9ytS0" target="_blank" rel="noopener noreferrer"
                      class="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
                      <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
                    </a>
                  </div>
                </div>
                <div class="portfolio-details d-flex flex-column gap-3">
                  <h3 class="mb-0">InAssist</h3>
                  <div class="hstack gap-2">
                    <a class="badge text-dark border" href="https://www.youtube.com/watch?v=pZtLij9ytS0" target="_blank"
                      rel="noopener noreferrer">YouTube
                      <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
                  </div>
                </div>
            </div>
        `;
    }
}
customElements.define('app-inassist', App_4);

// App NST SSD Component
class App_5 extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="portfolio d-flex flex-column gap-6">
                <div class="portfolio-img position-relative overflow-hidden">
                  <img src="../assets/images/portfolio/nst-ssd/banner.webp" alt="" class="img-fluid"
                    style="border-radius: 4px;">
                  <div class="portfolio-overlay">
                    <a href="https://northshore.health/#nstSsd" target="_blank" rel="noopener noreferrer"
                      class="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
                      <iconify-icon icon="lucide:arrow-up-right" class="fs-8 text-dark"></iconify-icon>
                    </a>
                  </div>
                </div>
                <div class="portfolio-details d-flex flex-column gap-3">
                  <h3 class="mb-0">NST SSD</h3>
                  <div class="hstack gap-2">
                    <a class="badge text-dark border" href="https://northshore.health/#nstSsd" target="_blank"
                      rel="noopener noreferrer">Website
                      <iconify-icon icon="lucide:arrow-up-right" class="text-dark"></iconify-icon></a>
                  </div>
                </div>
            </div>
        `;
    }
}
customElements.define('app-nstssd', App_5);

// App Component Structure
class App_0 extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `

        `;
    }
}
customElements.define('app-ReplaceWithName', App_0);

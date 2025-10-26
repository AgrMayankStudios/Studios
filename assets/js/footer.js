class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="footer bg-dark py-5 py-lg-11 py-xl-12">
            <div class="container">
            <div class="row">
                <div class="col-xl-5 mb-8 mb-xl-0">
                <div class="d-flex flex-column gap-8 pe-xl-5">
                    <h2 class="mb-0 text-white">Build something together?</h2>
                    <div class="d-flex flex-column gap-2">
                    <a href="mailto:hello@agrmayank.com" class="link-hover hstack gap-3 text-white fs-5">
                        <iconify-icon icon="lucide:arrow-up-right" class="fs-7 text-primary"></iconify-icon>
                        hello@agrmayank.com
                    </a>
                    <a href="https://maps.app.goo.gl/xiVAvQ4i14y6YTbb9" target="_blank"
                        class="link-hover hstack gap-3 text-white fs-5">
                        <iconify-icon icon="lucide:map-pin" class="fs-7 text-primary"></iconify-icon>
                        India
                    </a>
                    </div>
                </div>
                </div>
                <div class="col-md-4 col-xl-2 mb-8 mb-xl-0">
                <ul class="footer-menu list-unstyled mb-0 d-flex flex-column gap-2">
                    <!--<li><a class="link-hover fs-5 text-white" href="index.html">Home</a></li>-->
                    <li><a class="link-hover fs-5 text-white" href="games.html">Games</a></li>
                    <li><a class="link-hover fs-5 text-white" href="apps.html">Apps</a></li>
                    <li><a class="link-hover fs-5 text-white" href="blog.html">Blog</a></li>
                    <li><a class="link-hover fs-5 text-white" href="about-us.html">About</a></li>
                    <li><a class="link-hover fs-5 text-white" href="contact.html">Contact</a></li>
                    <hr class="border-line bg-light-gray">
                    <li><a class="link-hover fs-5 text-white" href="privacy-policy.html">Privacy Policy</a></li>
                    <li><a class="link-hover fs-5 text-white" href="terms-and-conditions.html">Terms & Conditions</a></li>
                    <!--<li><a class="link-hover fs-5 text-white" href="404.html">Error 404</a></li>-->
                </ul>
                </div>
                <div class="col-md-4 col-xl-2 mb-8 mb-xl-0">
                <ul class="footer-menu list-unstyled mb-0 d-flex flex-column gap-2">
                    <li><a class="link-hover fs-5 text-white" href="https://www.linkedin.com/company/agrmayankstudios" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a class="link-hover fs-5 text-white" href="https://twitter.com/AgrMayankStudio" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
                    <li><a class="link-hover fs-5 text-white" href="https://www.instagram.com/agrmayankstudios" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a class="link-hover fs-5 text-white" href="https://www.facebook.com/AgrMayankStudios" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                </ul>
                </div>
                <div class="col-md-4 col-xl-3 mb-8 mb-xl-0">
                <p class="mb-0 text-white text-opacity-70 text-md-end">
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script> by <a class="link-hover fs-5 text-white"
                    href="https://agrmayank.com/" target="_blank" rel="noopener noreferrer">AgrMayank.</a>
                </p>
                </div>
            </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-component', Footer);
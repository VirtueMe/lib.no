export const Page = ({ children }) => (
  <div class="main-wrapper">
    <header>
        <a href="/" title="Hjem"><img src="liberalistene.png"/></a>
        <div className="main-menu-wrapper">
          <input type="checkbox" id="overlay-input" />
          <label for="overlay-input"><span></span></label>
          <div className="overlay">
            <ul className="main-menu">
              <li>
                <a href="/admin/site/inline/default/draft/liberalistene-hovedside/politikk" title="Politikk">Politikk</a>
              </li>
            
              <li>
                <a href="/admin/site/inline/default/draft/liberalistene-hovedside/organisasjon" title="Organisasjon">Organisasjon</a>
              </li>
            
              <li>
                <a href="/admin/site/inline/default/draft/liberalistene-hovedside/kunnskap" title="Kunnskap">Kunnskap</a>
              </li>
            
              <li>
                <a href="/admin/site/inline/default/draft/liberalistene-hovedside/event" title="Event">Event</a>
              </li>
            
              <li>
                <a href="/admin/site/inline/default/draft/liberalistene-hovedside/bidra" title="Bidra">Bidra</a>
              </li>
            
              <li>
                <a href="/admin/site/inline/default/draft/liberalistene-hovedside/bli-medlem" title="Bli medlem">Bli medlem</a>
              </li>
            
              <li>
                <a href="/admin/site/inline/default/draft/liberalistene-hovedside/presse" title="Presse">Presse</a>
              </li>
            
              <li>
                <a href="/admin/site/inline/default/draft/liberalistene-hovedside/min-side" title="Min side">Min side</a>
              </li>			
            </ul>
          </div>
        </div>
    </header>
    <main>
        {children}
    </main>
    <footer>
      <div class="footer-menu">      
        <ul class="main-menu">
          <li>
            <a href="/admin/site/inline/default/draft/liberalistene-hovedside/politikk" title="Politikk">Politikk</a>
          </li>
        
          <li>
            <a href="/admin/site/inline/default/draft/liberalistene-hovedside/organisasjon" title="Organisasjon">Organisasjon</a>
          </li>
        
          <li>
            <a href="/admin/site/inline/default/draft/liberalistene-hovedside/kunnskap" title="Kunnskap">Kunnskap</a>
          </li>
        
          <li>
            <a href="/admin/site/inline/default/draft/liberalistene-hovedside/event" title="Event">Event</a>
          </li>
        
          <li>
            <a href="/admin/site/inline/default/draft/liberalistene-hovedside/bidra" title="Bidra">Bidra</a>
          </li>
        
          <li>
            <a href="/admin/site/inline/default/draft/liberalistene-hovedside/bli-medlem" title="Bli medlem">Bli medlem</a>
          </li>
        
          <li>
            <a href="/admin/site/inline/default/draft/liberalistene-hovedside/presse" title="Presse">Presse</a>
          </li>
        
          <li>
            <a href="/admin/site/inline/default/draft/liberalistene-hovedside/min-side" title="Min side">Min side</a>
          </li>			
        </ul>
      </div>
      <div class="contact">
        <div class="place">Oslo</div>
        <div class="phone">88 55 00 00</div>
        <div class="email">contact@liberalistene.org</div>
      </div>
    </footer>
  </div>
);

export default Page;
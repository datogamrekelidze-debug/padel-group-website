const services = [
  {
    title: "COURT CONSTRUCTION",
    text: "Turnkey premium padel court systems — design, structure, roofing, lighting and installation."
  },
  {
    title: "CLUB DEVELOPMENT",
    text: "Concept, operations, booking systems and commercial development for premium padel clubs."
  },
  {
    title: "ACADEMY & EVENTS",
    text: "Training groups, corporate events, tournaments and community-driven padel experiences."
  },
  {
    title: "PARTNERSHIPS",
    text: "International suppliers, equipment sourcing and B2B infrastructure projects."
  }
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="#top">
          <div className="mark">PG</div>
          <div>
            <div className="brandName">Padel Group</div>
          </div>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#club">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="headerBtn" href="#contact">
          BUILD WITH US
        </a>
      </header>

      <section className="hero" id="top">
        <div className="heroText">
          <div className="kicker">
            Courts. Clubs. Community.
          </div>

          <h1>
            COURTS.<br />
            CLUBS.<br />
            COMMUNITY.
          </h1>

          <p>
            Premium padel infrastructure and club development solutions.
          </p>

          <div className="buttons">
            <a className="btn green" href="#contact">
              BUILD WITH US
            </a>

            <a className="btn dark" href="#club">
              EXPLORE PROJECTS
            </a>
          </div>

          <div className="stats">
            <div>
              <b>360°</b>
              <span>Full club development</span>
            </div>

            <div>
              <b>GE</b>
              <span>Premium padel infrastructure</span>
            </div>

            <div>
              <b>B2B</b>
              <span>International partnerships</span>
            </div>
          </div>
        </div>

        <div className="visual">

          <div className="visualOverlay"></div>

          <div className="visualTop">
            <span>Premium Padel Infrastructure</span>
            <span>2026</span>
          </div>

          <div className="heroLines"></div>

          <div className="floatingCard topCard">
            <span>INFRASTRUCTURE</span>
          </div>

          <div className="floatingCard bottomCard">
            <span>CLUB DEVELOPMENT</span>
          </div>

          <div className="centerGlow"></div>

          <div className="pgMassive">
            PG
          </div>

          <div className="badge">
            <b>PADEL GROUP</b>
            <span>Courts • Clubs • Community</span>
          </div>

        </div>
      </section>

      <section id="about" className="section">
        <div className="sectionHead">
          <div>
            <span className="eyebrow">About</span>
            <h2>More than courts.</h2>
          </div>

          <p>
            Padel Group develops premium padel infrastructure, clubs and sports
            communities with a long-term ecosystem approach.
          </p>
        </div>

        <div className="aboutGrid">
          <div className="panel big">
            <h3>Brand Position</h3>

            <p>
              We combine sport, architecture and business operations to create
              high-performance spaces where infrastructure, design and community
              work as one system.
            </p>
          </div>

          <div className="panel">
            <h3>Mission</h3>

            <p>
              To grow the padel ecosystem through world-class infrastructure,
              innovative design and strong partnerships.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="sectionHead">
          <div>
            <span className="eyebrow">What we do</span>
            <h2>Services</h2>
          </div>
        </div>

        <div className="serviceGrid">
          {services.map((item, index) => (
            <div className="service" key={item.title}>
              <div className="number">
                0{index + 1}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="club" className="section">
        <div className="showcase">

          <div className="showcaseVisual">
            PADEL GLDANI
          </div>

          <div>
            <span className="eyebrow">
              Flagship project
            </span>

            <h2>Padel Gldani</h2>

            <p>
              Padel Gldani is our active flagship club — the practical
              foundation of the Padel Group ecosystem, where players,
              tournaments, academy programs and padel culture continue to grow.
            </p>

            <a
              className="btn green"
              href="https://padelgldani.ge/booking/"
              target="_blank"
            >
              BOOK A COURT
            </a>
          </div>
        </div>
      </section>

      <section className="section partner">
        <div className="partnerLight">
          <h2>Fortune Group</h2>

          <p>
            Reliable international partnership, quality manufacturing and
            after-sales support.
          </p>
        </div>

        <div className="partnerDark">
          <h2>PG Standard</h2>

          <p>
            Premium design, precise construction, professional lighting and
            operational expertise.
          </p>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="contact">

          <div>
            <span className="eyebrow">
              Contact
            </span>

            <h2>Build with us.</h2>

            <p>
              Court construction, club development or partnership opportunities
              — contact Padel Group.
            </p>
          </div>

          <div className="contacts">
            <a href="tel:+995593958686">
              +995 593 958 686
            </a>

            <a href="mailto:padelgldani@gmail.com">
              padelgldani@gmail.com
            </a>

            <span>
              Tbilisi, Georgia
            </span>
          </div>

        </div>
      </section>

      <footer>
        © 2026 Padel Group • Courts. Clubs. Community. • padelgroup.ge
      </footer>
    </main>
  );
}

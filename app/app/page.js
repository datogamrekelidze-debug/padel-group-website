import {
  ArrowRight, Building2, Hammer, Trophy, Users, Globe2,
  MapPin, Instagram, Mail, Phone, ShieldCheck
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "კორტების მშენებლობა",
    text: "სრული turnkey სერვისი — კონცეფცია, დიზაინი, კონსტრუქცია, გადახურვა, განათება და მონტაჟი."
  },
  {
    icon: Building2,
    title: "კლუბების განვითარება",
    text: "პრემიუმ პადელის კლუბების დაგეგმვა, ოპერირება, booking სისტემა და სივრცის კომერციული განვითარება."
  },
  {
    icon: Trophy,
    title: "აკადემია და ტურნირები",
    text: "ბავშვთა და ზრდასრულთა ჯგუფები, კორპორატიული ღონისძიებები, ტურნირები და სპორტული community."
  },
  {
    icon: Globe2,
    title: "პარტნიორობა",
    text: "საერთაშორისო მომწოდებლებთან თანამშრომლობა, ინვენტარის მომარაგება და B2B პროექტების განვითარება."
  }
];

export default function Home() {
  return (
    <main className="site">
      <div className="noise" />

      <header className="header">
        <div className="header-inner">
          <a className="brand" href="#top">
            <div className="logo-mark">PG</div>
            <div>
              <div className="brand-title">Padel Group</div>
              <div className="brand-sub">Georgia</div>
            </div>
          </a>

          <nav className="nav">
            <a href="#about">ჩვენ შესახებ</a>
            <a href="#services">მიმართულებები</a>
            <a href="#club">Padel Gldani</a>
            <a href="#partners">პარტნიორები</a>
            <a href="#contact">კონტაქტი</a>
          </nav>

          <div className="header-actions">
            <span className="lang">KA / EN</span>
            <a className="btn btn-green" href="#contact">
              დაგვიკავშირდით <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <div>
            <div className="kicker"><span className="dot" /> Courts. Clubs. Community.</div>
            <h1>ვქმნით პადელის მომავალს საქართველოში</h1>
            <p className="hero-copy">
              Padel Group არის პრემიუმ სპორტული ინფრასტრუქტურის კომპანია,
              რომელიც ავითარებს პადელის კორტებს, კლუბებს, აკადემიას და
              საერთაშორისო დონის padel ecosystem-ს საქართველოში.
            </p>

            <div className="hero-actions">
              <a className="btn btn-green" href="#services">
                ჩვენი მიმართულებები <ArrowRight size={18} />
              </a>
              <a className="btn btn-dark" href="#club">
                Padel Gldani
              </a>
            </div>

            <div className="metrics">
              <div className="metric">
                <strong>360°</strong>
                <span>კორტისა და კლუბის სრული განვითარება</span>
              </div>
              <div className="metric">
                <strong>GE</strong>
                <span>ქართული პადელის ინფრასტრუქტურა</span>
              </div>
              <div className="metric">
                <strong>B2B</strong>
                <span>პარტნიორობა და მშენებლობა</span>
              </div>
            </div>
          </div>

          <div className="visual-card">
            <div className="visual-top">
              <span>Premium Padel Infrastructure</span>
              <span>2026</span>
            </div>
            <div className="court-graphic" />
            <div className="float-badge">
              <b>PADEL GROUP</b>
              <span>კორტები • კლუბები • საზოგადოება • პარტნიორობა</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">About</div>
              <h2>მეტი ვიდრე კლუბი</h2>
            </div>
            <p className="section-description">
              ჩვენი მიზანია, პადელი საქართველოში ჩამოყალიბდეს როგორც თანამედროვე,
              კომერციულად ძლიერი და საზოგადოებაზე ორიენტირებული სპორტული ინფრასტრუქტურა.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-panel large">
              <div>
                <div className="eyebrow">Brand position</div>
                <p>
                  Padel Group აერთიანებს სპორტს, არქიტექტურას და ბიზნეს ოპერირებას.
                  ჩვენ ვქმნით სივრცეებს, სადაც ხარისხიანი ინფრასტრუქტურა, დიზაინი და
                  community ერთ სისტემად მუშაობს.
                </p>
              </div>
              <div className="pill-row">
                <span className="pill">Premium Sport</span>
                <span className="pill">Infrastructure</span>
                <span className="pill">Club Network</span>
                <span className="pill">Academy</span>
              </div>
            </div>

            <div className="about-panel">
              <div className="eyebrow">Mission</div>
              <p>
                საქართველოში საერთაშორისო დონის პადელის ეკოსისტემის განვითარება —
                კორტების მშენებლობით, კლუბების მართვით, მოთამაშეების გაზრდით და
                ძლიერი პარტნიორული ქსელის შექმნით.
              </p>
              <div className="pill-row">
                <span className="pill">Design</span>
                <span className="pill">Construction</span>
                <span className="pill">Operations</span>
                <span className="pill">Events</span>
                <span className="pill">Distribution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">What we do</div>
              <h2>მიმართულებები</h2>
            </div>
            <p className="section-description">
              Padel Group მუშაობს როგორც სპორტული ინფრასტრუქტურის დეველოპერი,
              ოპერატორი და პარტნიორი.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div className="service-card" key={service.title}>
                  <div className="icon"><Icon size={26} /></div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="club">
        <div className="container">
          <div className="showcase">
            <div className="showcase-image" />
            <div className="showcase-content">
              <div className="eyebrow">Flagship club</div>
              <h2>Padel Gldani</h2>
              <p className="section-description">
                Padel Gldani არის ჩვენი მოქმედი კლუბი და Padel Group-ის
                ეკოსისტემის პრაქტიკული საფუძველი — ადგილი, სადაც ვითარდება
                მოთამაშეები, ტურნირები, აკადემია და პადელის კულტურა.
              </p>

              <div className="feature-list">
                <div className="feature"><span className="check">✓</span> პროფესიონალური კორტები</div>
                <div className="feature"><span className="check">✓</span> აკადემია ბავშვებისთვის და ზრდასრულებისთვის</div>
                <div className="feature"><span className="check">✓</span> ტურნირები და corporate events</div>
                <div className="feature"><span className="check">✓</span> community და სპორტული გარემო</div>
              </div>

              <div className="hero-actions">
                <a className="btn btn-green" href="https://padelgldani.ge/booking/" target="_blank">
                  ჯავშანი <ArrowRight size={18} />
                </a>
                <a className="btn btn-dark" href="#contact">
                  თანამშრომლობა
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="partners">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Partners</div>
              <h2>საერთაშორისო ხარისხი</h2>
            </div>
          </div>

          <div className="partner">
            <div className="partner-card">
              <div className="partner-logo">Fortune Group</div>
              <p>
                კორტების ინფრასტრუქტურის მიმართულებით ჩვენთვის მნიშვნელოვანია
                სანდო საერთაშორისო პარტნიორები, ხარისხიანი წარმოება და ძლიერი
                after-sales მხარდაჭერა.
              </p>
            </div>
            <div className="partner-card dark">
              <div className="partner-logo">PG Standard</div>
              <p>
                Padel Group-ის სტანდარტი ეფუძნება პრემიუმ დიზაინს, გამართულ
                მშენებლობას, სწორ განათებას, ხარისხიან მასალებს და ოპერაციულ
                გამოცდილებას.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="contact-card">
            <div>
              <div className="eyebrow">Contact</div>
              <h2>ავაშენოთ ერთად</h2>
              <p className="section-description">
                თუ გაინტერესებთ პადელის კორტის მშენებლობა, კლუბის განვითარება,
                პარტნიორობა ან Padel Group-თან თანამშრომლობა — დაგვიკავშირდით.
              </p>
              <div className="hero-actions">
                <a className="btn btn-green" href="mailto:padelgldani@gmail.com">
                  მოგვწერეთ <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="contact-links">
              <a className="contact-link" href="tel:+995593958686">
                <Phone size={20} /> +995 593 958 686
              </a>
              <a className="contact-link" href="mailto:padelgldani@gmail.com">
                <Mail size={20} /> padelgldani@gmail.com
              </a>
              <a className="contact-link" href="https://www.instagram.com/" target="_blank">
                <Instagram size={20} /> Instagram
              </a>
              <div className="contact-link">
                <MapPin size={20} /> თბილისი, საქართველო
              </div>
              <div className="contact-link">
                <ShieldCheck size={20} /> Court, Club & Partnership Inquiries
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2026 Padel Group • Courts. Clubs. Community. • padelgroup.ge
      </footer>
    </main>
  );
}

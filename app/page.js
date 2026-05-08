const services = [
  {
    title: "კორტების მშენებლობა",
    text: "Turnkey პადელის კორტები — დიზაინი, კონსტრუქცია, გადახურვა, განათება და მონტაჟი."
  },
  {
    title: "კლუბების განვითარება",
    text: "პრემიუმ პადელის კლუბების კონცეფცია, ოპერირება, booking სისტემა და კომერციული განვითარება."
  },
  {
    title: "აკადემია და ტურნირები",
    text: "ბავშვთა და ზრდასრულთა ჯგუფები, corporate events, ტურნირები და community."
  },
  {
    title: "პარტნიორობა",
    text: "საერთაშორისო მომწოდებლები, ინვენტარის მომარაგება და B2B ინფრასტრუქტურული პროექტები."
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
            <div className="brandSub">Georgia</div>
          </div>
        </a>

        <nav>
          <a href="#about">ჩვენ შესახებ</a>
          <a href="#services">მიმართულებები</a>
          <a href="#club">Padel Gldani</a>
          <a href="#contact">კონტაქტი</a>
        </nav>

        <a className="headerBtn" href="#contact">დაგვიკავშირდით</a>
      </header>

      <section className="hero" id="top">
        <div className="heroText">
          <div className="kicker">Courts. Clubs. Community.</div>
          <h1>ვქმნით პადელის მომავალს საქართველოში</h1>
          <p>
            Padel Group არის პრემიუმ სპორტული ინფრასტრუქტურის კომპანია,
            რომელიც ავითარებს პადელის კორტებს, კლუბებს, აკადემიას და
            საერთაშორისო დონის padel ecosystem-ს საქართველოში.
          </p>
          <div className="buttons">
            <a className="btn green" href="#services">ჩვენი მიმართულებები</a>
            <a className="btn dark" href="#club">Padel Gldani</a>
          </div>
          <div className="stats">
            <div><b>360°</b><span>კორტისა და კლუბის სრული განვითარება</span></div>
            <div><b>GE</b><span>ქართული პადელის ინფრასტრუქტურა</span></div>
            <div><b>B2B</b><span>პარტნიორობა და მშენებლობა</span></div>
          </div>
        </div>

        <div className="visual">
          <div className="visualTop">
            <span>Premium Padel Infrastructure</span>
            <span>2026</span>
          </div>
          <div className="court">
            <div className="badge">
              <b>PADEL GROUP</b>
              <span>კორტები • კლუბები • საზოგადოება</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="sectionHead">
          <div>
            <span className="eyebrow">About</span>
            <h2>მეტი ვიდრე კლუბი</h2>
          </div>
          <p>
            ჩვენი მიზანია, პადელი საქართველოში ჩამოყალიბდეს როგორც თანამედროვე,
            კომერციულად ძლიერი და საზოგადოებაზე ორიენტირებული სპორტული ინფრასტრუქტურა.
          </p>
        </div>

        <div className="aboutGrid">
          <div className="panel big">
            <h3>Brand Position</h3>
            <p>
              Padel Group აერთიანებს სპორტს, არქიტექტურას და ბიზნეს ოპერირებას.
              ჩვენ ვქმნით სივრცეებს, სადაც ხარისხიანი ინფრასტრუქტურა, დიზაინი და
              community ერთ სისტემად მუშაობს.
            </p>
          </div>
          <div className="panel">
            <h3>Mission</h3>
            <p>
              საქართველოში საერთაშორისო დონის პადელის ეკოსისტემის განვითარება —
              კორტების მშენებლობით, კლუბების მართვით, მოთამაშეების გაზრდით და
              ძლიერი პარტნიორული ქსელის შექმნით.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="sectionHead">
          <div>
            <span className="eyebrow">What we do</span>
            <h2>მიმართულებები</h2>
          </div>
        </div>

        <div className="serviceGrid">
          {services.map((item, index) => (
            <div className="service" key={item.title}>
              <div className="number">0{index + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="club" className="section">
        <div className="showcase">
          <div className="showcaseVisual">PADEL GLDANI</div>
          <div>
            <span className="eyebrow">Flagship club</span>
            <h2>Padel Gldani</h2>
            <p>
              Padel Gldani არის ჩვენი მოქმედი კლუბი და Padel Group-ის ეკოსისტემის
              პრაქტიკული საფუძველი — ადგილი, სადაც ვითარდება მოთამაშეები,
              ტურნირები, აკადემია და პადელის კულტურა.
            </p>
            <a className="btn green" href="https://padelgldani.ge/booking/" target="_blank">ჯავშანი</a>
          </div>
        </div>
      </section>

      <section className="section partner">
        <div className="partnerLight">
          <h2>Fortune Group</h2>
          <p>სანდო საერთაშორისო პარტნიორობა, ხარისხიანი წარმოება და after-sales მხარდაჭერა.</p>
        </div>
        <div className="partnerDark">
          <h2>PG Standard</h2>
          <p>პრემიუმ დიზაინი, გამართული მშენებლობა, სწორი განათება და ოპერაციული გამოცდილება.</p>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="contact">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>ავაშენოთ ერთად</h2>
            <p>კორტის მშენებლობა, კლუბის განვითარება ან პარტნიორობა — დაგვიკავშირდით.</p>
          </div>
          <div className="contacts">
            <a href="tel:+995593958686">+995 593 958 686</a>
            <a href="mailto:padelgldani@gmail.com">padelgldani@gmail.com</a>
            <span>თბილისი, საქართველო</span>
          </div>
        </div>
      </section>

      <footer>© 2026 Padel Group • Courts. Clubs. Community. • padelgroup.ge</footer>
    </main>
  );
}

import { SocialLinks, ContactLinks } from "../data/ContactLinks";
import { NavLinks } from "../data/NavLinks";

export function Footer() {
	const year = new Date().getFullYear();

	return (
    <footer className="position-relative">
      <div className="mx-auto" >

        <div className="container py-4 border-start border-end">
          <div className="row g-4">
            <div className="col-12 col-md-6 d-flex flex-column">

              <p className="font-monospace text-white mb-2">
                Web Development That flows with you.
              </p>

              <ul className="d-flex gap-2 list-unstyled">
                  {SocialLinks.map((link, i) => {
                    const Icon = link.img;
                    return(
                    <li key={i}>
                      <a href={link.url} title={link.site} className="text-white">
                        <Icon size={30}/>
                      </a>
                    </li>
                    )
                  })}
              </ul>
            </div>

            <div className="col-6 col-md-4">
              <span className="h5 fw-bold d-block mb-1">Contact</span>
              <ul className="d-flex flex-column list-unstyled">
                {ContactLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.to} className="text-break small py-1 text-decoration-none text-light">
                      {link.method} {link.info}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-6 col-md-2">
              <h3 className="h5 fw-bold d-block mb-1">Quick Links</h3>
              <ul className="d-flex flex-column list-unstyled">
                {NavLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} className="small py-1 text-decoration-none text-light">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <div className="position-absolute start-0 end-0" style={{height: "1px"}}></div>
        <div className="d-flex flex-column align-items-center border-top">
        <div className="container border-start border-end py-3">
          <p className="text-center mb-0">
            © <a href="https://github.com/xJuanPablo" className="text-decoration-none text-light">TechTide</a>.
            All rights reserved {year}
          </p>
        </div>
        </div>

      </div>
    </footer>
	);
}

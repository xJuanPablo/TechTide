

export function Footer() {
	const year = new Date().getFullYear();

	const company = [
		{
			title: 'About Us',
			href: '#',
		},
		{
			title: 'Careers',
			href: '#',
		},
		{
			title: 'Brand assets',
			href: '#',
		},
		{
			title: 'Privacy Policy',
			href: '#',
		},
		{
			title: 'Terms of Service',
			href: '#',
		},
	];

	const resources = [
		{
			title: 'Blog',
			href: '#',
		},
		{
			title: 'Help Center',
			href: '#',
		},
		{
			title: 'Contact Support',
			href: '#',
		},
		{
			title: 'Community',
			href: '#',
		},
		{
			title: 'Security',
			href: '#',
		},
	];

	return (
    <footer className="position-relative">
      <div className="mx-auto" >

        <div className="container py-4 border-start border-end">
          <div className="row g-4">
            <div className="col-12 col-md-8 d-flex flex-column gap-3">
              <a href="#" className="opacity-25 d-inline-block">
              </a>

              <p className="font-monospace small text-white">
                A comprehensive financial technology platform.
              </p>

              <div className="d-flex gap-2">
                <a href="#" className="border rounded p-2 hover-bg-light">
                  icon
                </a>
              </div>
            </div>

            <div className="col-6 col-md-2">
              <span className="h1 small d-block mb-1">Resources</span>
              <div className="d-flex flex-column">
                <a href="#" className="small py-1 text-decoration-none link-underline-opacity-50-hover">Blog</a>
                <a href="#" className="small py-1 text-decoration-none link-underline-opacity-50-hover">Help Center</a>
                <a href="#" className="small py-1 text-decoration-none link-underline-opacity-50-hover">Support</a>
                <a href="#" className="small py-1 text-decoration-none link-underline-opacity-50-hover">Community</a>
              </div>
            </div>

            <div className="col-6 col-md-2">
              <span className="h1 small d-block mb-1">Company</span>
              <div className="d-flex flex-column">
                <a href="#" className="small py-1 text-decoration-none link-underline-opacity-50-hover">About</a>
                <a href="#" className="small py-1 text-decoration-none link-underline-opacity-50-hover">Careers</a>
                <a href="#" className="small py-1 text-decoration-none link-underline-opacity-50-hover">Privacy</a>
                <a href="#" className="small py-1 text-decoration-none link-underline-opacity-50-hover">Terms</a>
              </div>
            </div>

          </div>
        </div>

        <div className="position-absolute start-0 end-0" style={{height: "1px"}}></div>
        <div className="d-flex flex-column align-items-center border-top">
        <div className="container border-start border-end py-3">
          <p className="text-center mb-0">
            © <a href="https://github.com/xJuanPablo">TechTide</a>.
            All rights reserved {year}
          </p>
        </div>
        </div>

      </div>
    </footer>
	);
}

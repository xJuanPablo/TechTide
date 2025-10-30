import headshot from "../assets/images/hero-image.jpg"

const About: React.FC = () => {
  return (
    <section id="About" className='py-5'>
        <div className='container'>
            <div className="row">
              <div className="col-7">
                <h2>
                  Hello, My Name's <span>Pablo</span>.
                </h2>
                <p>
                  A native born Texan with a love for development and optimization. Currently working at Lubbock Christian University
                </p>
                <div>
                  <button className="btn btn-secondary me-5">Download CV</button>
                  <button className="btn btn-secondary">See my Work</button>
                </div>
              </div>
              <div className="col-5">
                <img src={headshot} alt="" className="border w-100 rounded-circle"/>
              </div>
            </div>
        </div>
    </section>
  )
}

export default About
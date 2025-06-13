const Footer: React.FC = () => {
  return (
    <footer className='border-top rounded-top-5 pb-3'>
      <div className='container'>
        <h4 className='mt-4'>Speak Soon, Stay Lucky!</h4>
        <div className='py-4 mb-3 mt-3 border rounded shadow'>
          <div className="grid">
            <div className="g-col-6">

            </div>
            <div className="g-col-6">
              <div className="d-block">
                <a href="/Resume.pdf" download={true}>Resume</a>
              </div>
              <div className="d-block">
                <p className="mb-1">
                  Connect:
                </p>
                <ul className='d-flex list-unstyled'>
                  <li className='me-3'>
                    <a href="">LinkedIn</a>
                  </li>
                  <li>
                    <a href="">GitHub</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center'>
          © 2025, TechTide
        </div>
      </div>
    </footer>
  )
}

export default Footer
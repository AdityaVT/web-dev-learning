import "bootstrap/dist/css/bootstrap.min.css"

const Headers = () => {
  return (
    <>
      <div className="container bg-primary">
        <header className="d-flex justify-content-center bg-dark py-3">
          <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" className="nav-link active">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
          </ul>
        </header>
      </div>
      <hr className="my-1 bg-white text-white" />
      <div className="container bg-primary">
        <nav className="navbar navbar-dark bg-dark border border-white d-flex flex-row justify-content-right">
          <ul className="nav nav-pills border border-primary">
            <li className="nav-item"><a href="#" className="nav-link active">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
          </ul>
        </nav>
      </div>
      <div className="container-sm bg-primary">
        <header className="d-flex flex-wrap justify-content-center bg-white">
          <h2 className="text-primary">Container SM</h2>
          <ul className="nav nav-pills">
            <li className="nav-item">Home</li>
            <li className="nav-item">Features</li>
            <li className="nav-item">Pricing</li>
            <li className="nav-item">FAQs</li>
            <li className="nav-item">About</li>
          </ul>
        </header>
      </div>
      <div className="container-sm bg-primary">
        <header className="d-flex flex-wrap justify-content-center bg-white">
          <h2 className="text-primary">Container MD</h2>
          <ul className="nav nav-pills">
            <li className="nav-item">Home</li>
            <li className="nav-item">Features</li>
            <li className="nav-item">Pricing</li>
            <li className="nav-item">FAQs</li>
            <li className="nav-item">About</li>
          </ul>
        </header>
      </div>
      <div className="container-lg bg-primary">
        <header className="d-flex flex-wrap justify-content-center bg-white">
          <h2 className="text-primary">Container LG</h2>
          <ul className="nav nav-pills">
            <li className="nav-item">Home</li>
            <li className="nav-item">Features</li>
            <li className="nav-item">Pricing</li>
            <li className="nav-item">FAQs</li>
            <li className="nav-item">About</li>
          </ul>
        </header>
      </div>
      <div className="container-xl bg-primary">
        <header className="d-flex flex-wrap justify-content-center bg-white">
          <h2 className="text-primary">Container XL</h2>
          <ul className="nav nav-pills">
            <li className="nav-item">Home</li>
            <li className="nav-item">Features</li>
            <li className="nav-item">Pricing</li>
            <li className="nav-item">FAQs</li>
            <li className="nav-item">About</li>
          </ul>
        </header>
      </div>
      <div className="container-xxl bg-primary">
        <header className="d-flex flex-wrap justify-content-center bg-white">
          <h2 className="text-primary">Container XXL</h2>
          <ul className="nav nav-pills">
            <li className="nav-item">Home</li>
            <li className="nav-item">Features</li>
            <li className="nav-item">Pricing</li>
            <li className="nav-item">FAQs</li>
            <li className="nav-item">About</li>
          </ul>
        </header>
      </div>
      <div className="container-fluid bg-primary">
        <header className="d-flex flex-wrap justify-content-center bg-white">
          <h2 className="text-primary">Container Fluid</h2>
          <ul className="nav nav-pills">
            <li className="nav-item">Home</li>
            <li className="nav-item">Features</li>
            <li className="nav-item">Pricing</li>
            <li className="nav-item">FAQs</li>
            <li className="nav-item">About</li>
          </ul>
        </header>
      </div>
    </>
  )
}

export default Headers

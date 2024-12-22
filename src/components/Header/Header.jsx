import './style.css';

export default function Header() {
  return (
    <>
      <nav id="nav-sec" className="navbar navbar-expand-lg navbar-light sticky-top">
        <div id="nav-options" className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <li id="logo-item" className="nav-item d-flex flex-row align-items-center justify-content-start">
            <img className="nav-link text-center rounded-4" src='https://fastly.picsum.photos/id/993/500/500.jpg?hmac=T4vqsTdp9yZeOvMq2nYr8gov1f9lek5m7W5wvE9IpEU' alt="" width={60} />
            <a className="nav-link text-center" href="">Cézar Bikes</a>
          </li>

          <div className="collapse navbar-collapse" id="navbarNav" style={{width: '100%'}}>
            <ul className="navbar-nav flex-column" id="principal-ul">

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tela inicial
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" style={{ color: '#71B59A' }} href="#">
                  Venda balcão
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Estoque
                </a>
              </li>


              <li className="nav-item">
                <a className="nav-link" href="#">
                  Emitir NFe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
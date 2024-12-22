import './style.css'

export default function InternNav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light p-3" id="nav">
        <div class="container-fluid">
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Procurar" aria-label="Procurar" />
            {/* <button class="btn btn-outline-success" type="submit">Procurar</button> */}
          </form>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 ms-3 mb-lg-0 gap-3">
              <li class="nav-item">
                <a id="txtA" class="nav-link active" aria-current="page" href="#">Filtro</a>
              </li>
              <li class="nav-item dropdown">
                <a id="txtA" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categoria
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Peças</a></li>
                  <li><a class="dropdown-item" href="#">Pneus</a></li>
                  <li><a class="dropdown-item" href="#">Capaçetes</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
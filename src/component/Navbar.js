import React from 'react'

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-secondary">
        <div class="container-fluid">
          <a class="text-white navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="text-white nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class=" nav-item">
                <a class="text-white nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="text-white nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                  <li><a class="text-warning dropdown-item" href="#">Action</a></li>
                  <li><hr class="text-warning dropdown-divider" /></li>
                  <li><a class="text-warning dropdown-item" href="#">Another action</a></li>
                  <li><hr class="text-warning dropdown-divider" /></li>
                  <li><a class="text-warning dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="text-white nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-info" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar;
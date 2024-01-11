<template>
    <div class="container">
    <div class="row mt-5">
        <!-- sidebar desktop -->
        <div class="col-md-3 my-sidebar">
            <h1 class="text-light ">Posts</h1>
            <div>
                <div class="card">
                <div class="card-body">
                    <div class="title d-flex align-items-center mb-3">
                        <img src="../../public/img/logo.png" alt="" class="img-fluid" style="width: 25px;">
                        <h3 class="ms-2 fs-3 card-title mb-0">Bubblink</h3>
                    </div>
                    <img src="../../public/img/profile.jpg" class="card-img-top" alt="...">
                    <h4 class="text-center">Pacifista</h4>
                    
                    <ul class="list-unstyled">
                        <li class="list-item">
                            <Router-link class="text-link p-1 fs-5 d-block rounded my-1" to="/home">Home</Router-link>
                        </li>
                        <li class="list-item">
                            <Router-link class="text-link p-1 fs-5 d-block rounded my-1" to="/account">Account</Router-link>
                        </li>
                        <li class="list-item">
                            <Router-link class="text-link p-1 fs-5 d-block rounded my-1" to="/logout">Create Post</Router-link>
                        </li>
                    </ul>
                    <a href="#" class="btn my-btn">Logout</a>
                </div>
                </div>
            </div>
        </div>

        <!-- sidebar phone -->
        <div class="phone-navbar">
            <div class="d-flex justify-content-evenly p-3">
                <i class="fa-regular fa-user fs-3"></i>
                |
                <i class="fa-solid fa-square-plus fs-3"></i>
                |
                <i class="fa-solid fa-house-chimney-user fs-3"></i>
                |
                <i class="fa-solid fa-right-from-bracket fs-3"></i>
            </div>
        </div>

        <!-- posts -->
        <div class="col-md-9">
            <form class="d-flex mb-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn my-btn2" type="submit">Search</button>
            </form>
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                        <img src="../../public/img/vbg.jpg" alt="" class="profile-picture">
                        <h3 class="ms-2 fs-5 card-title mb-0">Bubblink</h3>
                        <div class="ms-auto">
                            <div class="dropdown">
                                <button class="btn btn-link text-dark dropdown-toggle" type="button" id="optionsMenu" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v"></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="optionsMenu">
                                    <li><a class="dropdown-item" href="#">Edit</a></li>
                                    <li><a class="dropdown-item" href="#">Delete</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="mb-3">
                            <img class="post-image" src="../../public/img/vbg.jpg" alt="post-image">
                        </div>
                        <div class="interact d-flex">
                            <div class="like">
                                <i class="fa-regular fa-heart me-3"><span class="ms-1">0</span></i>
                            </div>
                            <div class="comment">
                                <i class="fa-regular fa-comment me-3"><span class="ms-1">0</span></i>
                            </div>
                        </div>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <h6 class="card-subtitle mb-2 text-body-secondary border-top border-secondary pt-2">26-Feb-2023</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
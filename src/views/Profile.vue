<template>
    <div class="container">
    <div class="row mt-3">
        <h1 class="text-light ">Profile</h1>
        <!-- sidebar -->
        <div class="col-md-3">
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

        <!-- profile -->
        <div class="col-md-9 text-center">
            <div class="card mb-3">
                <h3 class="card-header">Detail</h3>
                <div class="card-body">
                    <img src="../../public/img/profile.jpg" class="profile-picture-large img-thumbnail mb-3" alt="..." style="width:300px;">
                    <div class="row">
                        <div class="col-md-6 border-end">
                            <div class="text-end mx-auto">
                                <h3 class="mb-0">Pacifista</h3>
                                <p class="my-0">
                                    pacifista@gmail.com
                                </p>
                                <p class="text-link my-0">
                                    Admin
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="bio text-start">
                                <h4>Bio :</h4>
                                <p class="fs-5 text-secondary border rounded p-2">asdbiasdjasdjnasdbasjdbjasdjasddojasdbojjasdkijasdj asjdajs daj djasd kiasd a sdka sdjk askjdjk askdd asd aijsdboajusdbiuabd asidbasd asdiuabd asadiabdu</p>
                            </div>
                        </div>
                        <form action="">
                            <button type="submit" class="btn my-btn3 px-5">Edit</button>
                        </form>
                    </div>
                    

                </div>
            </div>
        </div>
        <!-- posts -->
        <div class="col-md-9 offset-md-3">
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                        <img src="../../public/img/vbg.jpg" alt="" class="profile-picture">
                        <h3 class="ms-2 fs-5 card-title mb-0">Bubblink</h3>
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
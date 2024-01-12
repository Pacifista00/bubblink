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
                    <h4 class="text-center">{{ userUsername }}</h4>
                    
                    <ul class="list-unstyled">
                        <li class="list-item">
                            <Router-link class="text-link p-1 fs-5 d-block rounded my-1" to="/home">Home</Router-link>
                        </li>
                        <li class="list-item">
                            <Router-link class="text-link p-1 fs-5 d-block rounded my-1" to="/account">Account</Router-link>
                        </li>
                        <li class="list-item">
                            <div type="button" class="text-link p-1 fs-5 d-block rounded my-1 border-none" data-bs-toggle="modal" data-bs-target="#modalpost">Create Post</div>
                        </li>
                    </ul>
                    <form @submit.prevent="logout">
                        <button type="submit" class="btn my-btn">Logout</button>
                    </form>
                </div>
                </div>
            </div>
        </div>

        <!-- sidebar phone -->
        <div class="phone-navbar">
            <div class="d-flex justify-content-evenly p-3">
                <button type="submit" class="btn phone-navbar-btn bg-transparent text-light"><i class="fa-regular fa-user fs-3"></i></button>
                |
                <button type="submit" class="btn phone-navbar-btn bg-transparent text-light"><i class="fa-solid fa-square-plus fs-3"></i></button>
                |
                <form @submit.prevent="logout">
                    <button type="submit" class="btn phone-navbar-btn bg-transparent text-light"><i class="fa-solid fa-house-chimney-user fs-3"></i></button>
                </form>
                |
                <form @submit.prevent="logout">
                    <button type="submit" class="btn phone-navbar-btn bg-transparent text-light"><i class="fa-solid fa-right-from-bracket fs-3 border-none" pointer></i></button>
                </form>
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
                        <h6 class="mb-2 text-body-secondary">26-Feb-2023</h6>
                        <button type="button" class="btn my-btn p-1 fs-5 d-block rounded my-1 border-none" data-bs-toggle="modal" data-bs-target="#postdetail">Detail</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

<!-- modal post -->
<div class="modal modal-lg fade" id="modalpost" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Post</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form>
            <div class="mb-2">
                <label for="image" class="col-form-label">Add image</label><br>
                <input type="file" id="image">
            </div>
            <div class="mb-2">
                <label for="username" class="col-form-label">Content:</label>
                <textarea class="form-control" id="username"></textarea>
            </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="submit" class="btn my-btn3">Save</button>
        </div>
        </div>
    </div>
</div>

<!-- modal detail post -->
<div class="modal modal-lg fade" id="postdetail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Detail</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
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

            <div class="comment p-3">
                <h2>Comments</h2>
                <ul class="list-group list-group-flush pt-3">
                    <li class="list-group-item border-0 pt-3">
                        <div class="commentator d-flex">
                            <img src="../../public/img/vbg.jpg" alt="" class="profile-picture">
                            <h3 class="ms-2 fs-5 card-title mb-0">Bubblink</h3>
                        </div>
                        <p class="m-2">Halo ngab</p>
                    </li>
                    <li class="list-group-item border-0">
                        <div class="commentator d-flex">
                            <img src="../../public/img/vbg.jpg" alt="" class="profile-picture">
                            <h3 class="ms-2 fs-5 card-title mb-0">Bubblink</h3>
                        </div>
                        <p class="m-2">Halo ngab</p>
                    </li>
                    <li class="list-group-item border-0">
                        <div class="commentator d-flex">
                            <img src="../../public/img/vbg.jpg" alt="" class="profile-picture">
                            <h3 class="ms-2 fs-5 card-title mb-0">Bubblink</h3>
                        </div>
                        <p class="m-2">Halo ngab</p>
                    </li>
                </ul>
            </div>

        </div>
        <div class="modal-footer">
            <button type="submit" class="btn my-btn3">Back</button>
        </div>
        </div>
    </div>
</div>

<!-- Modal Message -->
<div class="modal" id="showModal" tabindex="-1" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header my-modal">
                <h5 class="modal-title fw-bolder">{{ headerMessage }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p class="fs-6">{{ message }}.</p>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            headerMessage : '',
            message : '',
            userUsername: '',
            userRole: ''
        }
    },
    mounted(){        
        const token = localStorage.getItem('token');
        
        axios.get('http://127.0.0.1:8000/api/loggeduser',{
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
        .then(response => (
            this.userUsername = response.data.data.username,
            this.userRole = response.data.data.role,
            this.showModal('Welcome', `have a nice day ${this.userUsername}`)
            ))
        .catch(error => {
            localStorage.removeItem('token'),
            this.$router.push({ path: '/', query: { alertMessage : 'Your session has ended!' } });
        })
    },
    methods : {
        showModal(header, message) {
            this.headerMessage = header;
            this.message = message;
            $('#showModal').modal('show');
        },
        async logout(){
            try{
                const token = localStorage.getItem('token');
                await axios.post("http://127.0.0.1:8000/api/logout", {},{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                localStorage.removeItem('token');

                this.$router.push('/');
        
            }catch(err){
                console.error('Logout failed:', err);
            }
        }
    }
}
</script>
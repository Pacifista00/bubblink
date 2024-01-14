<template>
    <div class="container">
    <div class="mt-5 d-flex flex-row justify-content-evenly">
        <!-- sidebar desktop -->
        
        <div class="aside sidebar my-sidebar">
            <div class="card sidebar-card sticky-top bg-transparent">
                <div class="card-body">
                    <div class="title d-flex align-items-center mb-3">
                        <img src="../../public/img/logo.png" alt="" class="img-fluid" style="width: 25px;">
                        <h3 class="ms-2 fs-3 card-title mb-0 me-4 text-light">Bubblink</h3>
                    </div>                    
                    <ul class="list-unstyled">
                        <li class="list-item">
                            <Router-link class="text-light text-decoration-none p-1 fs-5 d-block rounded my-1" to="/home">HOME</Router-link>
                        </li>
                        <li class="list-item">
                            <Router-link class="text-light text-decoration-none p-1 fs-5 d-block rounded my-1" to="/profile">PROFILE</Router-link>
                        </li>
                        <li class="list-item">
                            <div type="button" class="text-light p-1 fs-5 d-block rounded my-1 border-none" data-bs-toggle="modal" data-bs-target="#modalpost">CREATE POST</div>
                        </li>
                    </ul>
                </div>
                </div>
        </div>

        <!-- sidebar phone -->
        <div class="phone-navbar">
            <div class="d-flex justify-content-evenly p-3">
                <button type="submit" class="btn phone-navbar-btn bg-transparent text-light"><i class="fa-regular fa-user fs-3"></i></button>
                <span class="strip">|</span>
                <button type="submit" class="btn phone-navbar-btn bg-transparent text-light"><i class="fa-solid fa-square-plus fs-3"></i></button>
                <span class="strip">|</span>
                <form @submit.prevent="logout">
                    <button type="submit" class="btn phone-navbar-btn bg-transparent text-light"><i class="fa-solid fa-house-chimney-user fs-3"></i></button>
                </form>
                <span class="strip">|</span>
                <form @submit.prevent="logout">
                    <button type="submit" class="btn phone-navbar-btn bg-transparent text-light"><i class="fa-solid fa-right-from-bracket fs-3 border-none" pointer></i></button>
                </form>
            </div>
        </div>

        <!-- main -->
        <div class="main">
            <form class="search-bar d-flex p-3 mb-3 sticky-top" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn my-btn2" type="submit">Search</button>
            </form>
            <div class="d-flex" role="search">
                <div class="card card-sidebar text-center bg-transparent text-white">
                    <div class="card-body d-flex flex-row">
                        <div class="">
                            <img :src="userImage" class="card-img-top rounded-circle mx-4 my-2" alt="profile" style="width:180px;">
                            <div type="button" class=" btn my-btn3 mx-auto text-light px-3 fs-5 d-block rounded my-1 border-none" data-bs-toggle="modal" data-bs-target="#modalEditProfile">Edit Profile</div>
                        </div>
                        <div class="text-start">
                            <p class="mb-0">Username : <span class="text-gray">{{ userUsername }}</span></p>
                            <p class="mb-0">Role : <span class="text-gray">{{ userRole }}</span></p>
                            <p class="mb-0">Email : <span class="text-gray">email</span></p>
                            <div class="">Bio : 
                                <p class="border p-2" style="width:200px;">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>


                    </div>
                    <div class="card-footer text-gray border-top">
                        Created at : 2 days ago
                    </div>
                </div>
            </div>

            <div v-for="item in posts" class="card mb-3">
                <div class="card-header my-0 py-0">
                    <div class="d-flex align-items-center">
                            <img :src="item.author_image" alt="" class="profile-picture">
                            <div class="m-0 p-0">
                                <h3 class="ms-2 mb-0 mt-3 fs-6 card-title">{{ item.author }}</h3>
                                <p class="ms-2 fs-6 text-body-secondary">{{ item.created_at }}</p>
                            </div>
                        
                        <div class="ms-auto">
                            <div class="dropdown">
                                <button class="btn btn-link text-dark dropdown-toggle" type="button" id="optionsMenu" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v"></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="optionsMenu">
                                    <li>
                                        <div @click="showModalEditPost(item.id)" type="button" class="dropdown-item my-dropdown" data-bs-toggle="modal" data-bs-target="#modalpost">Edit</div>
                                    </li>
                                    <li><a class="dropdown-item my-dropdown" href="#">Delete</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="item.image">
                    <img class="post-image image-fluid" :src="item.image" alt="post-image">
                </div>
                <div class="card-body pt-2">
                    <div class="container">
                        <p class="card-text fs-5 mb-0 pb-1">{{ item.content }}</p>
                        <div class="interact row mb-2 pt-2">
                            <div class="col-md-6">
                                <button type="button" class="btn my-btn-like rounded-pill">
                                    <i class="fa-regular fa-heart me-3"><span class="ms-1">0</span></i>
                                </button>
                            </div>
                            <div class="col-md-6">
                                <button type="button" class="btn my-btn-comment rounded-pill" data-bs-toggle="modal" data-bs-target="#postdetail">
                                    <i class="fa-regular fa-comment me-3"><span class="ms-1">{{ item.comment_count }}</span></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- profile card -->
        <div class="aside my-sidebar">
            <div class="card card-sidebar bg-transparent text-light sticky-top border-0">
                <div class="card-body">
                    <img :src="userImage" class="card-img-top rounded-circle m-4" alt="profile" style="width:150px;">
                    <h3 class="text-center py-0 my-0">{{ userUsername }}</h3>
                    <p class="text-center text-secondary">{{ userRole }}</p>
                </div>
                <form @submit.prevent="logout">
                    <button type="submit" class="my-btn py-2 fs-5">
                        {{ loading ? 'Please wait...' : 'Logout'}}
                    </button>
                </form>
            </div>
        </div>
    </div>
  </div>

<!-- modal post -->
<div class="modal modal-lg fade" id="modalpost" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <form @submit.prevent="getSubmitHandler">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Post</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
                <div class="mb-2">
                    <label for="image" class="col-form-label">Add image</label><br>
                    <input type="file" id="image" @change="imageHandler">
                </div>
                <div class="mb-2">
                    <label for="username" class="col-form-label">Content:</label>
                    <textarea v-model="content" class="form-control" id="username"></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn my-btn3">
                    {{ loading ? 'Please wait...' : 'Submit' }}
                </button>
            </div>
        </div>
    </form>
    </div>
</div>

<!-- modal post -->
<div class="modal modal-lg fade" id="modalEditProfile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <form @submit.prevent="editProfile">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Profile</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
                <div class="mb-2">
                    <label for="image" class="col-form-label">Profile Picture</label><br>
                    <input type="file" id="image" @change="imageHandler">
                </div>
                <div class="mb-2">
                    <label for="username" class="col-form-label">Username:</label>
                    <input type="text" v-model="content" class="form-control" id="username">
                </div>
                <div class="mb-2">
                    <label for="email" class="col-form-label">Email:</label>
                    <input type="text" v-model="content" class="form-control" id="email">
                </div>
                <div class="mb-2">
                    <label for="bio" class="col-form-label">Bio:</label>
                    <textarea v-model="content" class="form-control" id="bio"></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn my-btn3">
                    {{ loading ? 'Please wait...' : 'Submit' }}
                </button>
            </div>
        </div>
    </form>
    </div>
</div>

<!-- modal detail post -->
<div class="modal modal-lg fade" id="postdetail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel">Detail</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body mt-1 pt-1">
            <div class="d-flex align-items-center m-0">
                <img src="" alt="" class="profile-picture ">
                    <div class="">
                        <h3 class="ms-2 mb-0 mt-3 fs-6 card-title">Hayu</h3>
                        <p class="ms-2 fs-6 text-body-secondary">y</p>
                    </div>
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
                <p class="card-text mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>

            <div class="comment">
                <h2 class="ps-1 border-top pt-2">Comments</h2>
                <ul class="px-0 mx-0">
                    <li class="list-group-item bg-light px-3 pb-3">
                        <div class="d-flex align-items-center m-0">
                            <img src="" alt="" class="profile-picture ">
                                <div class="">
                                    <h3 class="ms-2 mb-0 mt-3 fs-6 card-title">Hayu</h3>
                                    <p class="ms-2 fs-6 text-body-secondary">y</p>
                                </div>
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
            userRole: '',
            userImage: '',
            posts:[],
            postImage:null,
            postId:'',
            content:'',
            loading:false,
            submitPreventModalName:'',
        }
    },
    mounted() {
        const token = localStorage.getItem('token');
        
        axios.get('http://127.0.0.1:8000/api/loggeduser',{
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
        .then(response => (
            this.userUsername = response.data.data.username,
            this.userRole = response.data.data.role,
            this.userImage = response.data.data.picture
            ))
        .catch(error => {
            console.log(error)
        })
    }
}
</script>
<template>
    <div class="container">
    <div class="mt-5 d-flex flex-row justify-content-evenly">
        <!-- sidebar desktop -->
        
        <div class="aside sidebar my-sidebar">
            <div class="card sidebar-card sticky-top bg-transparent">
                <div class="card-body">
                    <div class="title d-flex align-items-center mb-3">
                        <img src="../../public/img/logo.png" alt="" class="img-fluid" style="width: 25px;">
                        <h3 class="ms-2 fs-3 card-title mb-0 me-4 text-light web-title">BUBBLINK</h3>
                    </div>                    
                    <ul class="list-unstyled">
                        <li class="list-item">
                            <Router-link class="text-light text-decoration-none p-1 fs-6 d-block rounded my-1" to="/home">HOME</Router-link>
                        </li>
                        <li class="list-item">
                            <Router-link class="text-light text-decoration-none p-1 fs-6 d-block rounded my-1" :to="{ name: 'Profile', params: { userid: myUser.id }}" :key="myUser.id">PROFILE</Router-link>
                        </li>
                        <li class="list-item">
                            <div @click="showModalAddPost" type="button" class="text-light p-1 fs-6 d-block rounded my-1 border-none" data-bs-toggle="modal" data-bs-target="#modalpost">CREATE POST</div>
                        </li>
                    </ul>
                </div>
                </div>
        </div>

        <!-- sidebar phone -->
        <div class="phone-navbar">
            <div class="d-flex justify-content-evenly p-2">
                <Router-link v-if="user.id" class="text-light text-decoration-none p-1 fs-6 d-block rounded my-1" :to="{ name: 'Profile', params: { userid: user.id }}"><i class="fa-solid fa-user fs-3"></i></Router-link>
                |
                <div v-if="user.id" @click="showModalAddPost" type="button" class="text-light text-decoration-none p-1 fs-6 d-block rounded my-1 border-none" data-bs-toggle="modal" data-bs-target="#modalpost"><i class="fa-solid fa-square-plus fs-3"></i></div>
                |
                <Router-link v-if="user.id" class="text-light text-decoration-none p-1 fs-6 d-block rounded my-1" to="/home"><i class="fa-solid fa-house-chimney-user fs-3"></i></Router-link>                
                |
                <form v-if="user.id" @submit.prevent="logout">
                    <button type="submit" class="btn phone-navbar-btn bg-transparent text-red"><i class="fa-solid fa-right-from-bracket fs-3 border-none" pointer></i></button>
                </form>
            </div>
        </div>

        <!-- main -->
        <div class="main" style="width:470px;">
            <form @submit.prevent="search" class="search-bar d-flex p-3 mb-3 sticky-top" role="search" >
                <input v-model="keySearch" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn my-btn2" type="submit">Search</button>
            </form>
            <div class="">
                <div class="border-0 card mx-auto card-sidebar text-center my-bg-dark text-white mb-3">
                    <div class="card-body d-flex flex-row">
                        <div class="">
                            <div class="position-relative rounded-circle">
                                <img :src="user.picture" class="rounded-circle card-img-top mx-4 my-2" alt="profile" style="width:180px; height:180px; object-fit:cover;">
                                <div v-if="myUser.id == user.id" type="button" class="btn-edit-profile position-absolute p-2 rounded-circle" data-bs-toggle="modal" data-bs-target="#modalEditPicture"><i class="fa-solid fa-square-pen fs-3"></i></div>
                            </div>
                            <div v-if="myUser.id == user.id" type="button" class=" btn my-btn3 mx-auto text-light px-3 fs-5 d-block rounded my-1 border-none" data-bs-toggle="modal" data-bs-target="#modalEditProfile" style="display: none;">Edit Profile</div>
                        </div>
                        <div class="text-start">
                            <p class="mb-0">Username : <span class="text-gray">{{ user.username }}</span></p>
                            <p class="mb-0">Role : <span class="text-gray">{{ user.role }}</span></p>
                            <p class="mb-0">Email : <span class="text-gray">{{ user.email }}</span></p>
                            <div class="">Bio : 
                                <p class="border border-secondary rounded p-2" style="width:200px;">{{ user.bio }}</p>
                            </div>
                        </div>


                    </div>
                    <div class="card-footer text-gray border-top">
                        Created at : {{formatTimeAgo(user.created_at)}}
                    </div>
                </div>
            </div>

            <h1 class="text-light text-center">Post</h1>

            <div v-for="item in posts" class="card-sidebar card mb-3 bg-transparent text-light">
                <div class="card-header my-0 py-0">
                    <div class="d-flex align-items-center">
                            <img :src="item.author_image" alt="" class="profile-picture">
                            <div class="m-0 p-0">
                                <h3 class="ms-2 mb-0 mt-3 fs-6 card-title">{{ item.author }}<i v-if="item.author_role == 'admin'" class="ms-1 p-0 text-verified fa-solid fa-circle-check"></i></h3>
                                <p class="ms-2 fs-6 text-gray">{{ formatTimeAgo(item.created_at) }}</p>
                            </div>
                        
                        <div v-if="myUser.username == item.author" class="ms-auto">
                            <div class="dropdown" >
                                <button class="btn btn-link text-dark dropdown-toggle" type="button" id="optionsMenu" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v"></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="optionsMenu" >
                                    <li>
                                        <div @click="showModalEditPost(item.id)" type="button" class="dropdown-item my-dropdown" data-bs-toggle="modal" data-bs-target="#modalpost">Edit</div>
                                    </li>
                                    <li>
                                        <div @click="deletePost(item.id)" type="button" class="dropdown-item my-dropdown">Delete</div>
                                    </li>
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
                        <p class="card-text fs-6 mb-0 pb-1">{{ item.content }}</p>
                        <div class="interact mb-2 pt-2">
                            <button @click="openPost(item.id)" type="button" class="btn my-btn-comment rounded-pill mt-2" data-bs-toggle="modal" data-bs-target="#postdetail">
                                <i class="fa-regular fa-comment me-3"><span class="ms-1">{{ item.comment_count }}</span></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- profile card -->
        <div class="aside my-sidebar">
            <div class="card card-sidebar bg-transparent text-light sticky-top border-0">
                <div class="card-body my-bg-dark">
                    <img :src="myUser.picture" class="card-img-top rounded-circle m-4" alt="profile" style="width:150px; height:150px; object-fit:cover;">
                    <h3 class="text-center py-0 my-0">{{ myUser.username }}<i v-if="user.role == 'admin'" class="ms-1 p-0 text-verified fa-solid fa-circle-check"></i></h3>
                    <p class="text-center text-secondary">{{ myUser.role }}</p>
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
            <button @click="closePost" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                    {{ loadingModal ? 'Please wait...' : 'Submit' }}
                </button>
            </div>
        </div>
    </form>
    </div>
</div>

<!-- modal profile -->
<div class="modal modal-lg fade" id="modalEditProfile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <form @submit.prevent="editProfile(user.id)">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Profile</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
                <div class="mb-2">
                    <label for="username" class="col-form-label">Username:</label>
                    <input type="text" v-model="user.username" class="form-control" id="username">
                </div>
                <div class="mb-2">
                    <label for="email" class="col-form-label">Email:</label>
                    <input type="text" v-model="user.email" class="form-control" id="email">
                </div>
                <div class="mb-2">
                    <label for="bio" class="col-form-label">Bio:</label>
                    <textarea v-model="user.bio" class="form-control" id="bio"></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn my-btn3">
                    {{ loadingModal ? 'Please wait...' : 'Submit' }}
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
            <button @click="closePost" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body mt-1 pt-1">
            <div class="d-flex align-items-center m-0">
                <img :src="post.author_image" alt="" class="profile-picture ">
                    <div class="">
                        <h3 class="ms-2 mb-0 mt-3 fs-6 card-title">{{ post.author }}<i v-if="post.author_role == 'admin'" class="ms-1 p-0 text-verified fa-solid fa-circle-check"></i></h3>
                        <p class="ms-2 fs-6 text-body-secondary">{{ formatTimeAgo(post.created_at) }}</p>
                    </div>
            </div>
            <div class="container">
                <div v-if="post.image" class="mb-3">
                    <img class="post-image" :src="post.image" alt="post-image">
                </div>
                <p class="card-text my-2">{{ post.content }}</p>
            </div>

            <div class="comment">
                <h2 class="ps-1 border-top pt-2">Comments - {{ post.comment_count }}</h2>
                <ul class="px-0 mx-0">
                    <li v-for="comment in comments" class="list-group-item bg-light px-3 pb-3">
                        <div class="d-flex align-items-center m-0">
                            <img :src="comment.author_image" alt="" class="profile-picture-comment ">
                                <div class="">
                                    <h3 class="ms-2 mb-0 mt-3 fs-6 card-title">{{ comment.author }}<i v-if="comment.author_role == 'admin'" class="text-verified ms-1 p-0 tex-verified fa-solid fa-circle-check"></i></h3>
                                    <p class="ms-2 fs-6 text-body-secondary">{{ formatTimeAgo(comment.created_at) }}</p>
                                </div>
                            <div v-if="myUser.username == comment.author" class="ms-auto">
                                <div class="dropdown">
                                    <button class="btn btn-link text-dark dropdown-toggle" type="button" id="optionsMenu" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fas fa-ellipsis-v"></i>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="optionsMenu">
                                        <li><div @click="showModalEditComment(comment.id)" type="button" class="dropdown-item my-dropdown"  data-bs-toggle="modal" data-bs-target="#showModalEditComment">Edit</div></li>
                                        <li><div @click="deleteComment(comment.id)" type="button" class="dropdown-item my-dropdown" href="#">Delete</div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p class="m-2">{{ comment.content }}</p>
                    </li>
                </ul>
            </div>

        </div>
        <form @submit.prevent="addComment(post.id)" class="search-bar d-flex p-3 sticky-top" role="search" >
            <input v-model="commentText" class="form-control me-2" type="search" placeholder="Add comment!">
            <button type="" class="btn my-btn2">
                {{ loadingModal ? 'Please wait...' : 'Send' }}
            </button>
        </form>
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

<!-- Modal Edit Comment -->
<div class="modal modal-lg fade" id="showModalEditComment" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <form @submit.prevent="editComment(commentId)">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Comment</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
                <div class="mb-2">
                    <label for="comment" class="col-form-label">Content:</label>
                    <textarea v-model="commentTextModal" class="form-control" id="comment"></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn my-btn3">
                    {{ loadingModal ? 'Please wait...' : 'Submit' }}
                </button>
            </div>
        </div>
    </form>
    </div>
</div>
<!-- Modal Edit Picture -->
<div class="modal modal-lg fade" id="modalEditPicture" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <form @submit.prevent="editPicture(user.id)">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Picture</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
                <div class="mb-2">
                    <label for="picture" class="col-form-label">Picture:</label><br>
                    <input type="file" id="picture" @change="imageHandler">
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn my-btn3">
                    {{ loadingModal ? 'Please wait...' : 'Submit' }}
                </button>
            </div>
        </div>
    </form>
    </div>
</div>
</template>
<script>
import axios from 'axios';
import moment from 'moment';

export default {
    data(){
        return {
            headerMessage : '',
            message : '',
            user:'',
            myUser:'',
            post:[],
            posts:[],
            comments:[],
            file:null,
            postId:'',
            content:'',
            commentText:'',
            commentId:'',
            commentTextModal:'',
            loading:false,
            loadingModal:false,
            submitPreventModalName:'',
            keySearch:'',
        }
    },
    mounted() {
        const token = localStorage.getItem('token');
        if (this.$route.params.userid){
            this.idUser = this.$route.params.userid
        }
        if (this.$route.query.idUser){
            this.idUser = this.$route.query.idUser
        }
        
        axios.get('http://127.0.0.1:8000/api/loggeduser',{
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
        .then(response => (
            this.myUser = response.data.data
            ))
        .catch(error => {
            localStorage.removeItem('token'),
            this.$router.push({ path: '/', query: { alertMessage : 'Your session has ended!' } });
        })

        axios.get(`http://127.0.0.1:8000/api/user/${this.idUser}`,{
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
        .then(response => (
            this.user = response.data.data
        ))
        .catch(error => {
            console.log(error)
        })
        
        axios.get(`http://127.0.0.1:8000/api/peoplepost/${this.idUser}`,{
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
        .then(response => (
            this.posts = response.data.data.reverse()
            ))
    },methods : {
        formatTimeAgo(created_at) {
            const currentTime = moment();
            const postTime = moment(created_at);
            const diffMinutes = currentTime.diff(postTime, 'minutes');

            if (diffMinutes < 1) {
                return 'just now';
            } else if (diffMinutes < 60) {
                return `${diffMinutes} minutes ago`;
            } else {
                return postTime.fromNow();
            }
        },
        showModal(header, message) {
            this.headerMessage = header;
            this.message = message;
            $('#showModal').modal('show');
        },
        getSubmitHandler() {
            if (this.submitPreventModalName === 'addPost') {
                this.addPost();
            } else if (this.submitPreventModalName === 'editPost') {
                this.editPost(this.postId);
            }
        },
        imageHandler(event) {
            this.file = event.target.files[0];
        },
        showModalAddPost(){
            this.submitPreventModalName = "addPost"
        },
        async showModalEditPost(postId){
            try{
                this.submitPreventModalName = "editPost"
                this.postId = postId;
                
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://127.0.0.1:8000/api/post/${postId}`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                this.postId = response.data.data.id;
                this.content = response.data.data.content;
                this.file = response.data.data.image;
        
            }catch(err){
                console.error(err);
            }
        },
        async logout(){
            try{
                this.loading = true;
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
            }finally{
                this.loading = false;
            }
        },
        async addPost(){
            try{
                this.loadingModal=true;
                const formData = new FormData();

                formData.append("content", this.content);
                if(this.file){
                    formData.append("image", this.file)
                }

                const token = localStorage.getItem('token');
                await axios.post("http://127.0.0.1:8000/api/post", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`
                    }
                })

                window.location.reload();
                this.content = ''
                this.file = ''
        
            }catch(err){
                console.error('Add post failed:', err);
            }finally {
                this.loadingModal = false;
            }
        },
        async editPost(postId){
            try{
                this.loadingModal = true;
                const formData = new FormData();

                formData.append("content", this.content);
                if(this.file){
                    formData.append("image", this.file);
                }

                const token = localStorage.getItem('token');
                await axios.post(`http://127.0.0.1:8000/api/post/${postId}/update`, formData,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                window.location.reload();

        
            }catch(err){
                console.error('Edit post failed:', err);
            }finally{
                this.loadingModal = false;
                this.postId = '';
            }
        },
        async deletePost(postId){
            try{
                const token = localStorage.getItem('token');
                await axios.delete(`http://127.0.0.1:8000/api/post/${postId}/delete`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                window.location.reload();

        
            }catch(err){
                console.error('Delete post failed:', err);
            }
        },
        async postDetail(postId){
            try{
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://127.0.0.1:8000/api/post/${postId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                this.post = response.data.data;

        
            }catch(err){
                console.error('Query failed:', err);
            }
        },closePost(){
            this.post=[];
            this.comments=[];
            this.content=[];
        },
        async addComment(postId){
            try{
                this.loadingModal=true;

                const token = localStorage.getItem('token');
                await axios.post(`http://127.0.0.1:8000/api/comment/${postId}`, {
                    content: this.commentText
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                this.commentText = ''
                window.location.reload();
        
            }catch(err){
                console.error('Add coment failed:', err);
            }finally {
                this.loadingModal = false;
            }
        },
        async getComment(postId){
            try{
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://127.0.0.1:8000/api/comments/${postId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                this.comments = response.data.data;

        
            }catch(err){
                console.error('Query failed:', err);
            }
        },
        openPost(postId){
            this.postDetail(postId);
            this.getComment(postId);
        },
        async showModalEditComment(commentId){
            try{
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://127.0.0.1:8000/api/comment/${commentId}`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                this.commentTextModal = response.data.data.content;
                this.commentId = response.data.data.id;
        
            }catch(err){
                console.error(err);
            }
        },
        async editComment(commentId){
            try{
                this.loadingModal = true;

                const token = localStorage.getItem('token');
                await axios.post(`http://127.0.0.1:8000/api/comment/${commentId}/update`, {
                    content: this.commentTextModal
                },{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                this.commentTextModal='';
                this.commentId='';
                window.location.reload();

        
            }catch(err){
                console.error('Edit comment failed:', err);
            }finally{
                this.loadingModal = false;
            }
        },
        async deleteComment(commentId){
            try{
                const token = localStorage.getItem('token');
                await axios.delete(`http://127.0.0.1:8000/api/comment/${commentId}/delete`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                window.location.reload();

        
            }catch(err){
                console.error('Delete comment failed:', err);
            }
        },
        async editProfile(userId){
            try{
                this.loadingModal = true;

                const token = localStorage.getItem('token');
                await axios.post(`http://127.0.0.1:8000/api/user/${userId}/update`, {
                    username : this.myUser.username,
                    email : this.myUser.email,
                    bio : this.myUser.bio
                },{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                window.location.reload();

        
            }catch(err){
                console.error('Edit profile failed:', err);
            }finally{
                this.loadingModal = false;
                this.postId = '';
            }
        },
        async editPicture(userId){
            try{
                this.loadingModal=true;
                const formData = new FormData();

                formData.append("picture", this.file);

                const token = localStorage.getItem('token');
                await axios.post(`http://127.0.0.1:8000/api/user/${userId}/picture`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`
                    }
                })

                window.location.reload();
                this.file = ''
        
            }catch(err){
                console.error('Update profile failed:', err);
            }finally {
                this.loadingModal = false;
            }
        },
        search(){
            this.$router.push({ path: '/search', query: { key: this.keySearch } });
        } 
    }
}
</script>
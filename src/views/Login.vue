<template>
    <div class="container container-login">
        <div class="card card-login p-5 my-bg-light">
            <div class="logo mx-auto mb-3">
                <img src="../../public/img/logo.png" alt="" style="width:150px;">
            </div>
            <form @submit.prevent="login">
                <h3 class="text-center">Login</h3>
                <div class="mb-3">
                    <div class="my-input mb-3">
                        <i class="fa-solid fa-user"></i>
                        <input v-model="email" type="email" class="my-form-control bg-transparent" id="email" name="email" placeholder="email">
                    </div>
                    <div class="my-input mb-3">
                        <i class="fa-solid fa-key"></i>
                        <input v-model="password" type="password" class="my-form-control bg-transparent" id="password" name="password" placeholder="password">
                    </div>
                </div>
                <button type="submit" class="btn my-btn text-light my-2">LOGIN</button>
                <p>Don't have an account? <RouterLink to="/register" class="text-link">Register</RouterLink></p>
            </form>
        </div>
    </div>


    <!-- Error Modal -->
    <div class="modal" id="showModal" tabindex="-1" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{ headerMessage }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>{{ errorMessage }}.</p>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password:'',
      headerMessage:'',
      errorMessage: '',
    }
  },
  mounted(){
    if (localStorage.getItem('token')) {
      this.$router.push('/home');
    }
  },
  methods : {
    showModal(header, message) {
        this.headerMessage = header;
        this.errorMessage = message;
        $('#showModal').modal('show');
    },
    async login(){
        try{
            const response = await axios.post("http://127.0.0.1:8000/api/login", {
                email : this.email,
                password : this.password,
            })

            const token = response.data.token;
            
            if (!token) {
                this.showModal('Error','Login failed. Please try again.');
                return;
            }

            localStorage.setItem('token', token);

            this.$router.push('/home');
    
        }catch(err){
            this.showModal('Error','Login failed. Please try again.');
        }
    }
  }
}
</script>
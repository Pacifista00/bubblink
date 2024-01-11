<template>
        <div class="container container-login">
        <div class="card card-login p-5 my-bg-light">
            <form @submit.prevent="register">
                <h3 class="text-center mb-3">Register</h3>
                <div class="mb-3">
                    <div class="my-input mb-3">
                        <input v-model="email" type="email" class="my-form-control bg-transparent" id="email" name="email" placeholder="email">
                    </div>
                    <div class="my-input mb-3">
                        <input v-model="username" type="text" class="my-form-control bg-transparent" id="username" name="username" placeholder="username">
                    </div>
                    <div class="my-input mb-3">
                        <input v-model="password" type="password" class="my-form-control bg-transparent" id="password" name="password" placeholder="password">
                    </div>
                    <div class="my-input mb-3">
                        <input v-model="password_confirm" type="password" class="my-form-control bg-transparent" id="passwordconfirm" name="passwordconfirm" placeholder="confirm password">
                    </div>
                </div>
                <button type="submit" class="btn my-btn text-light my-2">REGISTER</button>
                <p>Already have an account? <RouterLink to="/" class="text-link">Login</RouterLink></p>
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

export default{
    data(){
        return {
            username: '',
            email: '',
            password:'',
            password_confirm:'',
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
        async register(){
            try{
                await axios.post("http://127.0.0.1:8000/api/register", {
                    username : this.username,
                    email : this.email,
                    password : this.password,
                    password_confirm : this.password_confirm,
                })

                this.$router.push('/');
        
            }catch(err){
                this.showModal('Error','Register failed. Please try again.');
            }
        }
    }
}
</script>
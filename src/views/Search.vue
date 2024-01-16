<template>
    <div class="container mt-5">
        <div class="row">
            <div v-for="item in users" class="col-md-4">
                <div class="card bg-transparent text-light mb-3">
                    <div class="card-body">
                        <img :src="item.picture" class="rounded-circle mb-2" style="width:50px; height:50px; object-fit: cover;">
                        <h5 class="card-title">{{ item.username }}<i v-if="item.role == 'admin'" class="ms-1 p-0 text-verified fa-solid fa-circle-check"></i></h5>
                        <a @click="goToProfile(item.id)" href="#" class="btn mt-2 my-btn3">See detail</a>
                    </div>
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
        key: '',
        users:[],
    }
  },
  mounted(){
    if (this.$route.query.key){
          this.key = this.$route.query.key
    }
        const token = localStorage.getItem('token');
        axios.post('http://127.0.0.1:8000/api/search',{
            key: this.key
        },{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            this.users = response.data.data;
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
  },
  methods :{
            goToProfile(id){
                this.$router.push({ name: 'Profile', params: { userid: id } });
            }
        }
}
</script>
<template>
    <div class="container">
    <h1 class="m-4">Register</h1>
    <form @submit.prevent="register">
        <!-- <input v-model="username" placeholder="username" /> -->
        <p class="col-5" v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li class="text-danger" v-for="error in errors">{{ error }}</li>
            </ul>
        </p>

        <div class="form-group col-5">
            <input v-model="name" type="text" class="form-control" placeholder="Enter your name">
        </div>
        <div class="form-group col-5">
            <input v-model="email" type="email" class="form-control" placeholder="Enter your email">
        </div>
        <div class="form-group col-5">
            <input v-model="password" type="password" class="form-control" placeholder="Enter your password">
        </div>
        <div class="form-group col-5">
            <input v-model="confirm_password" type="password" class="form-control" placeholder="Please confirm your password">
        </div>
        <div class="form-group col-5">
            <button class="btn btn-success" type="submit">Register</button>
            <span class="ml-2">Already Registered? <RouterLink to="/login">Login here</RouterLink></span>
        </div>
    </form>
    </div>
</template>
<script>
import axios from 'axios'
import router from '../router/index.js'
import { useStore } from '../stores/store'
const store = useStore()

export default {
  data: () => {
    return {
        name: null,
        email: null,
        password: null,
        confirm_password: null,
        errors: [],
    };
  },
  methods: {
    // console.log(this.username);
    // console.log(this.password);
    register() {
      this.errors = [];

      axios
        .post('http://localhost:8000/api/register', {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.confirm_password,
            headers: {
            //   "Content-Type": "application/json",
              "Accept": "application/json",
            },
        })
        .then(response => {
            store.accessToken = response.data['access_token']
            localStorage.setItem("accessToken", response.data['access_token'])
            location.href = '/dashboard';
        })
        .catch(e => {
            let errorOb = e.response.data.errors
            for (var key in errorOb) {
                    if (errorOb.hasOwnProperty(key)) {
                        // console.log(key + " -> " + errorOb[key]);
                        console.log(errorOb[key][0]);
                        this.errors.push(errorOb[key][0]);
                    }
                }
        });
    },


    //   fetch("http://localhost:8000/api/register", {
    //     method: "POST",
    //     headers: {
    //     //   "Content-Type": "application/json",
    //     //   "Accept": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name: this.name,
    //       email: this.email,
    //       password: this.password,
    //     }),
    //   })
    //   .then(response => { 
    //     if(response.ok){
    //         console.log('then');
    //         console.log(response)    
    //     } else{
    //         console.log(error);
    //         alert("Server returned " + response.status + " : " + response.statusText);
    //     }                
    //   })
    //   .catch(e => {
    //       this.errors = e.data.errors;
    //    });
    },
//   },

};
</script>
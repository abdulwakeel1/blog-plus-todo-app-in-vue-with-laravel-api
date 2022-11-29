<template>
    <div class="container">
    <h1 class="m-4">LOGIN</h1>
    <p class="col-5" v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
    </p>
    <!-- <p>From B: {{ store }}</p> -->
    <form @submit.prevent="login">
        <div class="form-group col-5">
            <input v-model="username" type="email" class="form-control" id="" placeholder="Email address">
        </div>
        <div class="form-group col-5">
            <input v-model="password" type="password" class="form-control" placeholder="Password">
        </div>
        <div class="form-group col-5">
            <button class="btn btn-success" type="submit">Login</button>
            <span class="ml-2">Not Registered Yet? <RouterLink to="/register">Register here</RouterLink></span>
        </div>
    </form>
    </div>
</template>
<script>
import axios from 'axios'

import { useAuthStore } from '@/stores/auth'

import router from '../router/index';


export default {
  data: () => {
    return {
      username: "",
      password: "",
      store: useAuthStore(),
      errors: [],
    };
  },
  methods: {
    login() {
      this.errors = [];
      axios
        .post('http://127.0.0.1:8000/api/login', {
            email: this.username,
            password: this.password,
            headers: {
            //   "Content-Type": "application/json",
              "Accept": "application/json",
            },
        })
        .then(response => {
            console.log(response.data['access_token']);
            this.store.accessToken = response.data['access_token']
            this.store.user = response.data['user']['name']
            localStorage.setItem("accessToken", response.data['access_token'])
            localStorage.setItem("user", response.data['user']['name'])
            router.push('/dashboard')
          
            // location.href = '/dashboard';
        })
        .catch(e => {
            console.log(e);
            // let errorOb = e.response.data.errors
            // for (var key in errorOb) {
            //     if (errorOb.hasOwnProperty(key)) {
            //         this.errors.push(errorOb[key][0]);
            //     }
            // }
        });
    },
  },
};
</script>
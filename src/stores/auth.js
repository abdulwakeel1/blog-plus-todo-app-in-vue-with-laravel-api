import router from '../router/index';
import axios from 'axios';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStoreId', {
  state: () => {
    return {
      accessToken: localStorage.getItem("accessToken"),
      user: localStorage.getItem("user"),
      returnUrl: null,
    }
  },
  
  actions: {
    async login() {

      await axios
        .post('http://localhost:8000/api/authenticate', {
            token: this.accessToken,
            headers: {
              'Authorization': 'Bearer '+ this.accessToken, 
              "Accept": "application/json",
            },
        })
        .then(response => {
            console.log(response);
            this.user = response.data['message']
            this.accessToken = response.data['access_token']
            // localStorage.setItem("accessToken", response.data['access_token'])
            // location.href = '/dashboard';
        })
        .catch(e => {
          if (e.response.status == 401) {
            router.push('/login');
          }
        });
      },

      logout() {
        console.log('logging out');
          this.user = null;
          this.accessToken = null;
          localStorage.removeItem('user');
          localStorage.removeItem('accessToken');
          router.push('/login');
      }
  },
})
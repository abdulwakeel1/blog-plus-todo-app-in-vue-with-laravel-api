import router from '../router/index';
import axios from 'axios';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStoreId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      accessToken: localStorage.getItem("accessToken"),
      user: localStorage.getItem("user"),
      returnUrl: null,
    }
  },
  
  actions: {
    async login() {

      if (this.user) {
        return true;
      } else {
        // const user = await fetchWrapper.post('http://localhost:8000/api/authenticate');

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
              // console.log(response.data['access_token']);
              this.accessToken = response.data['access_token']
              // localStorage.setItem("accessToken", response.data['access_token'])
              // // console.log(response);
              // location.href = '/dashboard';
          })
          .catch(e => {
            console.log('heee');
            console.log(e.response);
            if (e.response.status == 401) {
              alert(e.response.statusText)
              router.push('/login');

            }
            return
              // let errorOb = e.response.data.errors
              // for (var key in errorOb) {
              //     if (errorOb.hasOwnProperty(key)) {
              //         this.errors.push(errorOb[key][0]);
              //     }
              // }
          });

          // update pinia state
          // this.user = 'set by pinia';

          // // store user details and jwt in local storage to keep user logged in between page refreshes
          // localStorage.setItem('user', JSON.stringify(user));

          // // redirect to previous url or default to home page
          // router.push(this.returnUrl || '/');
          // router.push(this.returnUrl || '/');
      }
    },
    logout() {
      console.log('logging out');
        this.user = null;
        this.accessToken = null;
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
        router.push('/login');
    }
  }
})
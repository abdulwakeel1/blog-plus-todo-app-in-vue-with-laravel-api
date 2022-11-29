
  <template>
    <div class="container">
        <button @click="increment">
          {{ count }}
        </button>
        <p>{{ token }}</p>
    </div>


  </template>

<script>
import axios from 'axios'

import { useStore } from '../stores/store'
const store = useStore()

export default {
  // state
  data() {
    return {
      count: 0,
      token: store,
    }
  },
  // actions
  methods: {
    increment() {
      this.count++
    }
  }
}

// export default {
//   data: () => {
//     return {
//       blogs: null,
//     };
//   },
//   mounted () {
//       axios
//         .get('http://localhost:8000/api/blogs', {
//             headers: {
//             //   "Content-Type": "application/json",
//               'Authorization': 'Bearer '+localStorage.getItem("accessToken"), 
//               "Accept": "application/json",
//             },
//         })
//         .then(response => {
//           if (response.data.status == 'Token is Expired') {
//             alert('Your login session has been expire. Please Login again.');
//             location.href = '/login';
//           }
//             this.blogs = response.data.data
//             console.log(response.data.data);
           
//         })
//         .catch(e => {
//             let errorOb = e.response.data.errors
//             for (var key in errorOb) {
//                 if (errorOb.hasOwnProperty(key)) {
//                     this.errors.push(errorOb[key][0]);
//                 }
//             }
//         });
//   },
// };


// export default {
//   name: 'BlogVue',
//   data() {
//     return {
//       info: null
//     }
//   },
//   mounted () {
//     // axios
//     //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
//     //   .then(response => (this.info = response));

//     //   console.log(this.response);


//     // fetch("http://127.0.0.1:8000/api/blogs", {
//     //     method: "GET",
//     //     withCredentials: true,
//     //     headers: new Headers({
//     //         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjY1OTY5Nzc2LCJleHAiOjE2NjU5NzMzNzYsIm5iZiI6MTY2NTk2OTc3NiwianRpIjoiN04wZFJHMjluN0V6SVQwaiIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.z2tPEpSH4cSO8zQ-QzVrlAEZiqWR5kanDAAJOVjs598', 
//     //         'Content-Type': 'application/json'
//     //     }),
//     // })
//     // .then(response => { 
//     //     if(response.ok){
//     //         console.log('then');
//     //         return response.json()    
//     //     } else{
//     //         alert("Server returned " + response.status + " : " + response.statusText);
//     //     }                
//     // })
//     // .then(response => {
//     //     this.info = response.data; 
//     //     console.log(response);
//     // })
//     // .catch(err => {
//     //     console.log(err);
//     // });


//   }
// }


</script>
  
  <style scoped>

    button {
        font-weight: bold;
    }

    #customers {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    #customers td, #customers th {
      border: 1px solid #ddd;
      padding: 8px;
    }

    #customers tr:nth-child(even){background-color: #f2f2f2;}

    #customers tr:hover {background-color: #ddd;}

    #customers th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #04AA6D;
      color: white;
    }


  /* @media (min-width: 1024px) {
    .counter {
      min-height: 100vh;
      display: flex;
      align-items: center;
      color: green;
    }
  } */
  </style>
  
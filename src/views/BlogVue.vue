
  <template>
    <div class="container">
      <div class="container">
        <h3 class="p-3 text-center">All Blogs</h3>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Blog name</th>
                    <th>Author</th>
                    <th>Created at</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(blog, index) in blogs" :key="blog.id">
                    <td>{{ blog.title }}</td>
                    <td>{{ blog.author }}</td>
                    <td>{{ blog.created_at }}</td>
                    <td>
                        <RouterLink :to="'/blog/show/'+blog.id">View</RouterLink>
                        <RouterLink class="ml-2" :to="'/blog/edit/'+blog.id">Edit</RouterLink>
                        <a href="javascript:void(0);" @click="deleteBlog(blog.id, index)" class="ml-2">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div> 

    </div>


  </template>

<script>
import axios from 'axios'

import { useAuthStore } from '../stores/auth'
const authStore = useAuthStore()

export default {
  data: () => {
    return {
      blogs: null,
    };
  },
  mounted () {
      axios.get('http://localhost:8000/api/blogs', {
          headers: {
            //"Content-Type": "application/json",
            'Authorization': 'Bearer '+authStore.accessToken, 
            "Accept": "application/json",
          },
      })
      .then(response => {
        if (response.data.status == 'Token is Expired') {
          alert('Your login session has been expire. Please Login again.');
          location.href = '/login';
        }
          this.blogs = response.data.data
          console.log(response.data.data);
      })
      .catch(e => {
          let errorOb = e.response.data.errors
          for (var key in errorOb) {
              if (errorOb.hasOwnProperty(key)) {
                  this.errors.push(errorOb[key][0]);
              }
          }
      });
  },

  methods: {
    deleteBlog(id, index) {
      axios.delete('http://localhost:8000/api/blog/' + id, {
          headers: {
            //"Content-Type": "application/json",
            'Authorization': 'Bearer '+authStore.accessToken, 
            "Accept": "application/json",
          },
      })
      .then(response => {
        if (response.data.status == 'Token is Expired') {
          alert('Your login session has been expire. Please Login again.');
          location.href = '/login';
        }
        if (response.status == 200) {
            console.log(this.blogs[index]);
            alert('Blog deleted successfully')
            this.blogs.splice(index, 1);
            // router.push({ path: '/blogs' })
            // return
        }
      })
      .catch(e => {
          let errorOb = e.response.data.errors
          for (var key in errorOb) {
              if (errorOb.hasOwnProperty(key)) {
                  this.errors.push(errorOb[key][0]);
              }
          }
      });
    }
  }

};


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
  
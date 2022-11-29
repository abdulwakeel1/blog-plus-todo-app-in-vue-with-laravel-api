<template>
    <div class="container">
        <h3 v-if="blog" class="p-3 text-center">{{ blog.title }}</h3>

        <div v-if="blog" class="form-group">
            <label for="">Title</label>
            <input v-model="blog.title" name="title" class="form-control" id="title" placeholder="Enter blog title">
        </div>

        <div v-if="blog" class="form-group">
            <label for="">Description</label>
            <textarea v-model="blog.description" name="description" class="form-control" id="description" cols="30" rows="6" placeholder="Enter blog description"></textarea>
        </div>

        <button type="submit" class="btn btn-primary" @click="editBlog">Submit</button>
    </div>


</template>

<script>
import axios from 'axios'
import { useAuthStore } from '../stores/auth'
const authStore = useAuthStore()
import router from '../router/index'

export default {
  data: () => {
    return {
      blog: null,
    };
  },

  mounted() {

    axios.get('http://localhost:8000/api/blog/'+this.$route.params.id, {
        headers: {
        //"Content-Type": "application/json",
        'Authorization': 'Bearer '+authStore.accessToken, 
        "Accept": "application/json",
        },
    })
    .then(response => {
        if (response.data.status == 'Token is Expired') {
            // console.log(this.blog);
            alert('Your login session has been expire. Please Login again.');
            location.href = '/login';
        }

        if (response.status == 200) {
            // alert('Blog fetched successfully')
            // console.log(response);
            this.blog = response.data.blog;

            return;
            router.push({ path: '/blogs' })
            return
        }

        console.log(response);
        return
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
    editBlog()  {
            axios.put('http://localhost:8000/api/blog/' + this.blog.id, {title:this.blog.title, description:this.blog.description}, {
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
                    alert('Blog updated successfully')
                    router.push({ path: '/blogs' })
                    return
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



</script>

  
<template>

   <nav class="navbar navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">
                <!-- <img src="assets/imgs/logo.svg" alt=""> -->
            </a>
            <div class="socials">
                <a href="javascript:void(0)"><i class="ti-facebook"></i></a>
                <a href="javascript:void(0)"><i class="ti-twitter"></i></a>
                <a href="javascript:void(0)"><i class="ti-pinterest-alt"></i></a>
                <a href="javascript:void(0)"><i class="ti-instagram"></i></a>
                <a href="javascript:void(0)"><i class="ti-youtube"></i></a>
            </div>
        </div>
    </nav>
    
    <!-- <nav class="navbar custom-navbar navbar-expand-md navbar-light bg-primary sticky-top">
        <div class="container">
            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">                     
                    <li class="nav-item nav-link" :class="activeclass">
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li class="nav-item nav-link">
                        <RouterLink to="/about">About</RouterLink>
                    </li>
                    <li class="nav-item nav-link">
                        <RouterLink to="/blogs">Blogs</RouterLink>
                    </li>
                    <li class="nav-item nav-link">
                        <RouterLink to="/login">Login</RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <div class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="components.html" class="ml-4 btn btn-dark mt-1 btn-sm">Components</a>
                    </li>
                </div>
            </div>
        </div>
    </nav> -->
    

    <nav class="navbar custom-navbar navbar-expand-md navbar-light bg-primary sticky-top">
        <div class="container">
            <!-- <a class="navbar-brand" href="#">Home Page</a> -->
            <RouterLink to="/">Home Page</RouterLink>
            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto"> 
                    <li class="nav-item nav-link">
                        <RouterLink to="/blogs">Blogs</RouterLink>
                    </li>
                    <li class="nav-item nav-link">
                        <RouterLink to="/about">About</RouterLink>
                    </li>
                    <li class="nav-item nav-link">
                        <RouterLink to="/practice">Practice Concepts</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink v-if="store.user" class="ml-4 mt-1 btn btn-light btn-sm" to="/blog/create">Create New Blog</RouterLink>
                        <!-- <a v-if="user" href="#" class="ml-4 mt-1 btn btn-light btn-sm">Create New Blog</a> -->
                    </li>
                    <li v-if="!store.user" class="nav-item nav-link">
                        <RouterLink to="/login">Login</RouterLink>
                    </li>
                    <li v-if="!store.user" class="nav-item nav-link">
                        <RouterLink to="/register">Register</RouterLink>
                    </li>

                    <div v-if="store.user" class="dropdown d-inline-block btn-sm ml-4 mt-1">
                        <button class="btn btn-outline-secondary dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ store.user }}
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="javascript:void(0);" @click="logout">Logout</a>
                            <!-- <a class="dropdown-item" href="javascript:void(0);">Profile Setting</a> -->
                            <RouterLink class="dropdown-item" to="/profile">Profile Setting</RouterLink>

                        </div>
                    </div>

                    <input class="btn btn-primary rounded bg-white" type="search" name="" id="" placeholder="Search here">

                        
                    <!-- <a v-if="store.user" class="ml-4 mt-1 btn btn-secondary btn-sm" @click="logout">Logout</a> -->
                </ul>                       
            </div>
        </div>
    </nav>


</template>

<script>
import '@/assets/vendors/jquery/jquery-3.4.1.js';
import '@/assets/vendors/bootstrap/bootstrap.bundle.js';
import { useAuthStore } from '@/stores/auth'

export default {
  data: () => {
    return {
      store: useAuthStore()
    };
  },

  methods: {
    logout() {
        this.store.logout();
    }
  },

  props: {
        type: {
            type: String,
            default: 'primary',
        }
    },
};


</script>

<style>


    

    @import '@/assets/css/joeblog.css';

    @import '@/assets/vendors/themify-icons/css/themify-icons.css';

 

    .router-link-exact-active{
        background-color: rgb(72, 49, 175);
        padding: 7px;
        border-radius: 8px;
        color: white;
    }

    .router-link-exact-active:hover, nav-item:hover{
        background-color: rgb(34, 4, 165);
        padding: 7px;
        border-radius: 8px;
        color: white;
    }

    /* #nav a.router-link-exact-active {
        color: #0c2218;
    } */


 </style>

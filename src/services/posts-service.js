import axios from 'axios';

export default class PostsService {
    constructor(){
        axios.defaults.baseURL = "http://localhost:3000/api"
    }      

    getAllPosts(){
        return axios.get('posts')
    }

    getId(id){
        return axios.get(`/posts/${id}`)
    }

    addPost(post){
        return axios.post('posts', post)
    }
}

export const postsService = new PostsService();
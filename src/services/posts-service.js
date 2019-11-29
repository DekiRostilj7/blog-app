import axios from 'axios';

export default class PostsService {
    constructor(){
        axios.defaults.baseURL = "http://localhost:3000/api"
    }      

    getAllPosts(){
        return axios.get('posts')
    }
}

export const postsService = new PostsService();
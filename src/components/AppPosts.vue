<template>
    <div>
        <div class="title">
            <h1>Posts</h1>
        </div>
        <div>
            <ol>
                <li v-for="(post, index) in posts" :key="index">
                    {{  post }}
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
import { postsService } from '../services/posts-service';
export default {
    data(){
        return {
            posts: []
        }
    },
    created() {
        postsService.getAllPosts()
            .then(response => {
                console.log(response);
                this.posts = response.data;
            } )
    }
}
</script>
<template>
    <div>
        <div>
            <h1> {{post.title}} </h1>
        </div>
        <div>
            <p> {{post.text}} </p>
        </div>
    </div>
</template>

<script>
import { postsService } from '../services/posts-service'
export default {
    data(){
        return {
            post: {}
        }
    },

    created(){
        postsService.getId(this.$route.params.id)
            .then(response => {
                console.log(response);
                this.post = response.data;
            } )
    }
}
</script>
<template>
    <div>
        <form class='form' @sumbit.prevent>
            <input name='title' type='text' v-model="post.title" placeholder="Insert title" /><br>
            <input name='text' type='text' v-model="post.text" placeholder="Insert text" /><br>
            <input name='date' type='date' v-model="post.createdAt" /><br>            
            <input type="submit" value="submit" @click="handleSubmit()" />
        </form>
    </div>
</template>

<script>
import {postsService} from '../services/posts-service'
export default {
    data(){
        return{
            post: {}
        }
    },
    methods: {
        handleSubmit(){
            return postsService.addPost(this.post)
        }
    }
   
}
    

</script>
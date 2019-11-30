<template>
    <div>
        <form class='form' @sumbit.prevent>
            <input name='title' type='text' v-model="post.title" placeholder="Insert title" /><br>
            <input name='text' type='text' v-model="post.text" placeholder="Insert text" /><br>
            <input name='date' type='date' v-model="post.createdAt" /><br>            
            <input type="submit" value="submit" @click="handleSubmit()" />
            <input type="submit" value="reset" />

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
            if(!this.post.title || this.post.title.length < 2 || !this.post.text || this.post.text > 300 || !this.post.createdAt){
                return alert('All fields are required!')
            }
            return postsService.addPost(this.post)
                    .then(this.$router.push({ name: 'posts' }))
        }
    }
   
}
    

</script>
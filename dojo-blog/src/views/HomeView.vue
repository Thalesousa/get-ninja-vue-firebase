<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" v-if="showPost"/>
    <button @click="showPost = !showPost">toggle post</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import { ref } from 'vue'

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const posts = ref([
      { id: 1, title: 'Post 1', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam aliquid laboriosam dignissimos blanditiis officiis ea? Asperiores illum accusamus eveniet quasi, consequatur laborum accusantium placeat error vero atque laudantium omnis harum illo magni, sit delectus iusto itaque expedita! Id labore voluptas, autem, pariatur adipisci non quia nulla temporibus, illo doloribus at repellat quod provident placeat tenetur minus quos corporis voluptatem? Consequuntur veniam est ab saepe aperiam excepturi odio quaerat voluptatem consectetur expedita debitis suscipit ex velit quos, molestiae maiores odit corrupti facilis tenetur alias voluptate hic? Vel nulla officia omnis quae quibusdam amet asperiores, nam nemo porro recusandae vitae autem unde molestias nisi consectetur, perspiciatis iusto. Quo dolorum pariatur hic ullam dolores quas quis modi, totam qui sint tenetur illum facere asperiores libero aliquam recusandae, nostrum provident nam? At laudantium molestiae eos architecto, ducimus iure sed odio, dicta officia reiciendis odit dolore placeat quasi cupiditate debitis ex ipsa et. Temporibus, veniam.'},
      { id: 2, title: 'Post 2', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam aliquid laboriosam dignissimos blanditiis officiis ea? Asperiores illum accusamus eveniet quasi, consequatur laborum accusantium placeat error vero atque laudantium omnis harum illo magni, sit delectus iusto itaque expedita! Id labore voluptas, autem, pariatur adipisci non quia nulla temporibus, illo doloribus at repellat quod provident placeat tenetur minus quos corporis voluptatem? Consequuntur veniam est ab saepe aperiam excepturi odio quaerat voluptatem consectetur expedita debitis suscipit ex velit quos, molestiae maiores odit corrupti facilis tenetur alias voluptate hic? Vel nulla officia omnis quae quibusdam amet asperiores, nam nemo porro recusandae vitae autem unde molestias nisi consectetur, perspiciatis iusto. Quo dolorum pariatur hic ullam dolores quas quis modi, totam qui sint tenetur illum facere asperiores libero aliquam recusandae, nostrum provident nam? At laudantium molestiae eos architecto, ducimus iure sed odio, dicta officia reiciendis odit dolore placeat quasi cupiditate debitis ex ipsa et. Temporibus, veniam.'},
      { id: 3, title: 'Post 3', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam aliquid laboriosam dignissimos blanditiis officiis ea? Asperiores illum accusamus eveniet quasi, consequatur laborum accusantium placeat error vero atque laudantium omnis harum illo magni, sit delectus iusto itaque expedita! Id labore voluptas, autem, pariatur adipisci non quia nulla temporibus, illo doloribus at repellat quod provident placeat tenetur minus quos corporis voluptatem? Consequuntur veniam est ab saepe aperiam excepturi odio quaerat voluptatem consectetur expedita debitis suscipit ex velit quos, molestiae maiores odit corrupti facilis tenetur alias voluptate hic? Vel nulla officia omnis quae quibusdam amet asperiores, nam nemo porro recusandae vitae autem unde molestias nisi consectetur, perspiciatis iusto. Quo dolorum pariatur hic ullam dolores quas quis modi, totam qui sint tenetur illum facere asperiores libero aliquam recusandae, nostrum provident nam? At laudantium molestiae eos architecto, ducimus iure sed odio, dicta officia reiciendis odit dolore placeat quasi cupiditate debitis ex ipsa et. Temporibus, veniam.'}
    ])

    const showPost = ref(true)


    return { posts, showPost }
  }
}
</script>

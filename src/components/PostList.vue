<template>
  <div class="inner-posts" v-if="posts.length > 0">
    <h2>Список постов</h2>
    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @removePost="$emit('removePost', post)"
      />
    </transition-group>
  </div>
  <h2 class="subtitle-red" v-else>Список постов пуст</h2>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.inner-posts {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.post {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 15px;
  border: 1px solid teal;
}
.post-list-move, /* apply transition to moving elements */
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.post-list-move {
  transition: transform 0.5s easy;
}
</style>

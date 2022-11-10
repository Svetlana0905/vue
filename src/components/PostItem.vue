<template>
  <div class="post">
    <div class="post__column">
      <p><strong>id: </strong>{{ post.id }}</p>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post__button-block">
      <my-button class="post__button" @click="$emit('removePost', post)"
        >Удалить</my-button
      >
      <my-button class="post__button" @click="$router.push(`/posts/${post.id}`)"
        >Открыть</my-button
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.post {
  display: flex;
  padding: 15px;
  border: 1px solid teal;
}
.post__column {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.post__button-block {
  display: flex;
  gap: 10px;
}
.post__button {
  align-self: flex-end;
}
</style>

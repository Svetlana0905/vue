<template>
  <form action="" @submit.prevent class="form">
    <h4 class="form__subtitle">Создание поста</h4>
    <div class="form__row">
      <my-input
        v-focus
        v-model.trim="post.title"
        type="text"
        placeholder="Название"
      />
      <!-- v-focus-
        установка
        фокуса
        на
        инпуте
        через
        директиву -->
      <my-input v-model.trim="post.body" type="text" placeholder="Описание" />
      <my-button class="extra-button" @click="createPost">Создать</my-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding-bottom: 20px;
}
.form__subtitle {
  font-size: 22px;
  line-height: 29px;
  color: rgb(0, 66, 66);
}
.form__row {
  display: flex;
  flex-direction: column;
  gap: 19px;
}
</style>

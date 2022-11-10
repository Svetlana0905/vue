<template>
  <h2>Страница с постами</h2>
  <my-input v-model="searchQuery" />
  <div class="button-block">
    <my-button @click="showDialog">Создать пост</my-button>
    <my-select v-model="selectedSort" :options="sortOptions" />
  </div>

  <my-dialog v-model:show="dialogVisible">
    <post-form @create="createPost" />
  </my-dialog>
  <post-list
    v-if="!isPostsLoading"
    :posts="sortedSearchPosts"
    @removePost="removePost"
  />
  <my-loading v-else></my-loading>
  <div v-intersection="loadMorePosts" class="observer"></div>
  <!-- <div class="page__wrapper">
       <div
         v-for="pageNum in totalPage"
         :key="pageNum"
         class="page"
         :class="{
           'current-page': page === pageNum,
         }"
         @click="changePage(pageNum)"
       >
         {{ pageNum }}
       </div>
     </div> -->
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPage: 0,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    // changePage(num) {
    //   this.page = num;
    //   this.fetchPosts();
    // },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchPosts();
    //  const options = {
    //    rootMargin: "8px",
    //    threshold: 1.0,
    //  };
    //  const callback = (entries, observer) => {
    //    if (entries[0].isIntersecting && this.page < this.totalPage) {
    //      this.loadMorePosts();
    //    }
    //  };
    //  const observer = new IntersectionObserver(callback, options);
    //  observer.observe(this.$refs.observer);
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) =>
        a[this.selectedSort]?.localeCompare(b[this.selectedSort])
      );
    },
    sortedSearchPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style>
.button-block {
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  gap: 7px;
}
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 2px;
  border-radius: 50%;
  border: 1px solid rgb(4, 95, 95);
  cursor: pointer;
}
.current-page {
  border: 2px solid rgb(163, 62, 22);
}
.observer {
  height: 2px;
  width: 100%;
  background: rgb(112, 112, 112);
}
</style>

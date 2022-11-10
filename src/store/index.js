import { createStore } from "vuex";
import { postModule } from "./postModele";

export default createStore({
  modules: {
    post: postModule,
  },
});

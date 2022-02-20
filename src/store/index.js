import Vue from 'vue'
import Vuex from 'vuex'
import {chatModule} from "@/modules/chat/store/chat.module";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    chat: chatModule
  }
})

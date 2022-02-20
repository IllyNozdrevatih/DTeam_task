<template>
  <div class="row no-gutters chat-wrapper">
    <div class="col-lg-4 chat-loop-block overflow-auto d-flex flex-column">
      <template v-if="chatList.length">
        <ChatCard
            v-for="(chatItem, index) of chatList"
            :key="`chat-card-${index}`"
            :active="chatItem.id === activeChatId"
            :userName="chatItem.username"
            :avatar="chatItem.avatar"
            :lastMessage="chatItem.lastMessage"
            @click="chatCardClickHandler(chatItem)"
        />
      </template>
      <div v-else class="m-auto text-white">Нет активного чата</div>
    </div>
    <div class="col-lg-8 chat-block d-flex flex-column">
      <ChatBlock v-if="activeChat !== null" :chatInfo="activeChat" />
      <div v-else class="m-auto text-white">Нет активного чата</div>
    </div>
  </div>
</template>

<script>
import ChatCard from "@/modules/chat/components/ChatCard";
import ChatBlock from "@/modules/chat/components/СhatBlock";
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {ChatBlock, ChatCard},
  data() {
    return {
      activeChat: null,
      activeChatId: null
    }
  },
  mounted() {
    this.$store.dispatch('chat/getChatList')
  },
  methods: {
    chatCardClickHandler(selectedChat){
      this.activeChat = selectedChat
      this.activeChatId = selectedChat.id
    }
  },
  computed: {
    ...mapState('chat', ['chatList'])
  }
}
</script>

<style lang="scss" scoped>
.chat-block {
  background-color: #2c3e50;
}


.chat-block,
.chat-loop-block {
  min-height: 90vh;
  max-height: 90vh;

  margin-top: 5vh;
  margin-bottom: 5vh;

}

.chat-loop-block {
  background-color: #909090;
}
</style>

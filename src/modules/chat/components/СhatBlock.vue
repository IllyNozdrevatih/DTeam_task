<template>
  <div class="d-flex flex-column h-100">
    <div class="py-2 px-3 text-white chat-block-info">
      <div class="h5" v-text="chatInfo.username"/>
      <div class="h6" v-text="chatInfo.lastVisit" />
    </div>
    <div
        class="d-flex flex-column align-items-start text-white overflow-auto"
        ref="chatBlock"
    >
      <ChatTextBlock
        v-for="(messageItem, index) of chatInfo.messageList"
        :key="`chat-text-block-${index}`"
        :text="messageItem.text"
        :self-message="messageItem.self"
      />
    </div>
    <div class="mt-auto">
      <form>
        <div class="form-group mb-0">
          <textarea
            class="form-control chat-block-chat rounded-0"
            v-model="message"
            v-on:keyup.enter="sendMessage"
          />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
import ChatTextBlock from "@/modules/chat/components/ChatTextCard";
export default {
  name: 'ChatBlock',
  components: {ChatTextBlock},
  props: {
    chatInfo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    ...mapMutations('chat', ['PUSH_MESSAGE']),
    async sendMessage() {
      if (this.message.trim().length === 0) return

      this.PUSH_MESSAGE({id: this.chatInfo.id, text: this.message, self: true})

      this.message = ''
    },
    scrollChatDown() {
      const block = this.$refs.chatBlock
      block.scrollTop = block.scrollHeight
    }
  },
  mounted() {
    this.messageList = [...this.chatInfo.messageList]
  },
  updated() {
    this.scrollChatDown()
  }
}
</script>

<style lang="scss" scoped>


.chat-block-info {
  background-color: #aaa;
}

.chat-block-chat {
  border-color: transparent !important;
  box-shadow: none !important;
}
</style>

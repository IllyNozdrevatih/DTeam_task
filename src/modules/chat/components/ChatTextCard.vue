<template>
  <div
    class="chat-text-block p-3 m-3 rounded"
    :class="{'chat-text-block-self': selfMessage}"
  >
    <p class="mb-0" v-text="text"/>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    selfMessage: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-text-block {
  background-color: #909090;
}

.chat-text-block-self {
  background-color: #505050;
}
</style>

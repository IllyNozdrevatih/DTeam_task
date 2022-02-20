<template>
  <div
    @click="$emit('click')"
    class="card border-0 rounded-0 chat-card w-100 p-3"
    :class="{'chat-card--active': active}"
  >
    <div class="row text-left">
      <div class="col-lg-3">
        <img class="chat-card__avatar" :src="avatar" alt="chat-card-image">
      </div>
      <div class="col-lg-9">
        <div class="h5" v-text="userName"/>
        <div class="h6" v-text="lastMessage"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    userName: {
      type: String,
      required: true
    },
    lastMessage: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-card {
  background-color: #f4f4f4;
  cursor: pointer ;
  transition: all .3s ease-in-out;

  &--active {
    background-color: #cacaca;
  }

  &:hover {
    background-color: #dadada;
  }

  &__avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
}
</style>

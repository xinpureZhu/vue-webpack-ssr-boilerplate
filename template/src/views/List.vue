<template>
  <div class="list-view">
    <template v-if="list" v-for="(item, index) in list">
      <div class="item">{{ index }}</div>
    </template>
    <template v-else-if="!list.length">
      <h1>List is empty.</h1>
    </template>
  </div>
</template>

<script>

export default {
  name: 'list-view',

  computed: {
    list () {
      return this.$store.state.list
    }
  },

  asyncData ({ store }) {
    return store.dispatch('FETCH_LIST_DATA')
  },

  title () {
    return 'List'
  }
}
</script>

<style lang="stylus">
.list-view
  background-color #fff
  box-sizing border-box
  padding 2em 3em
</style>

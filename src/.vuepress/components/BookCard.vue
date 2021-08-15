<template>
    <div class="book-card theme-default-content mb-5 flex-wrap">
        <img :src="img" :alt="title">
        <div class="book-content mt-3">
            <h3 class="bg-dark-base d-flex align-items-center justify-content-center">
              <span class="text-success lighten-30">{{title}}</span>
            </h3>
            <div>
              <p>
                <slot />
              </p>
              <a class="text-uppercase hover-card bg-dark-base text-white rounded p-2" target="_blank" :href="link" v-if="link">More</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props:{
    title:{ type:String, required: true },
    img:{ type:String, required: true },
    link:{ type:String }
  }
}
</script>

<style lang="stylus" scoped>
.book-card
 display flex
 flex-grow 1
 align-items center 
 justify-content center
 img
  margin-right 2em
  width 150px
 h3 
  display flex
  margin 0
  border-bottom 3px solid var(--accent-color)

 
.book-content
 display flex
 flex-direction column
</style>
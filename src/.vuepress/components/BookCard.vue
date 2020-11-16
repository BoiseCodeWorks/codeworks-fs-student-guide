<template>
    <div class="book-card theme-default-content mb-5 flex-wrap">
        <img :src="img" :alt="title">
        <div class="book-content">
            <h3 class="text-uppercase">{{title}}</h3>
            <div>
              <p>
                <slot />
              </p>
              <a class="btn" target="_blank" :href="link" v-if="link">READ</a>
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
  text-transform uppercase
  border-bottom 1px solid var(--accent-color)

 
.book-content
 display flex
 flex-direction column
</style>
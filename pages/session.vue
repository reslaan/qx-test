<template>
  <div class="">

<div class="flex flex-col text-center space-y-4 justify-center items-center h-96 py-4 ">
  <iconsZoom  v-show=" zoom_link" class="w-16"></iconsZoom>
  <a :href=" zoom_link" class="hover:text-active bg-muted px-2 py-0.5 rounded-md">{{ zoom_link}}</a>
</div>
  </div>
</template>

<script >
export default{
  data(){
    return {
    }
  },
  computed:{
    zoom_link(){
      const zoomLink =  this.$route.params.zoom_link 
      if(zoomLink){
              localStorage.setItem('zoom_link',zoomLink)
              return zoomLink
      }
    
    return localStorage.getItem('zoom_link')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
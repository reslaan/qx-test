<template>
  <div>
<!-- display sessions -->
<div class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4 px-3 py-2 m-2">
        <!-- start card -->
        <div v-for="session in $store.state.sessions" :key="session.company_name"  class="flex flex-col space-y-2 rounded-xl bg-muted p-2 hover:border-primary">
          <div class="flex items-center space-x-2  leading-tight ">
            <div class="w-12 h-12 rounded-2xl  rtl:ml-2">
              <img :src="session.company_logo" alt="">
            </div>
            <div class="">
              <h3 class="text-base font-semibold">{{session.company_name}}</h3>
              <span class="text-xs">{{session.company_description}}</span>
            </div>
          </div>
          <div class="text-muted flex items-center">
            <IconsArrRight ></IconsArrRight>
            <span>{{moment(session.start_date).format('LT')}}</span>
            <span class="px-2">to</span> 
            <span>{{moment(session.end_date).format('LT')}}</span> 
          </div>
          <div class="flex space-x-3 border-t border-muted w-1/2 pt-2">
            <button
              class="inline-block rounded-xl bg-primary hover:bg-brightness-150 px-4 py-1.5 text-inverted font-semibold leading-7  shadow-sm ">Join</button>
            <button class="inline-block rounded-lg  px-4 py-1.5  font-semibold leading-7  ">Dismiss</button>
          </div>
        </div>
        <!-- end card -->
        <!-- start card -->
        <!-- <div class="flex flex-col space-y-2 rounded-xl border border-muted p-2 hover:bg-muted">
          <div class="flex items-center space-x-2  leading-tight ">
            <div class="w-12 h-12 rounded-2xl bg-c-p-blue">
            </div>
            <div class="">
              <h3 class="text-base font-semibold">Memorisely</h3>
              <span class="text-xs">E-learning</span>
            </div>
          </div>
          <div class="text-muted">
            <span>&RightArrow;</span> <span>01:00 PM to 02:00 PM</span>
          </div>
        </div> -->
        <!-- end card -->
        <!-- start card -->
        <!-- <div class="flex flex-col space-y-2 rounded-xl border border-muted p-2 hover:bg-muted">
          <div class="flex items-center space-x-2  leading-tight ">
            <div class="w-12 h-12 rounded-2xl bg-c-p-blue">
            </div>
            <div class="">
              <h3 class="text-base font-semibold">Swvl</h3>
              <span class="text-xs">The Evolution of Revolution</span>
            </div>
          </div>
          <div class="text-muted">
            <span>&RightArrow;</span> <span>02:30 PM to 03:00 PM</span>
          </div>
        </div> -->
        <!-- end card -->
      </div>
  </div>
</template>

<script >
import moment from 'moment';

export default{
   data(){
  return {
   moment
  }
   }
}
</script>

<style lang="scss" scoped>

</style>
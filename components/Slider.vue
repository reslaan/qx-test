<template>
  <div>
    <div class="flex justify-between items-center text-center px-3 py-2 m-2  rounded-lg">
        <button><IconsChevLeft ></IconsChevLeft></button>

        <div v-for="day in $store.state.days" :key="day.date"
          class="w-1/4 desktop:w-24 p-2 flex flex-col items-center justify-center  border-2 border-primary cursor-pointer rounded-xl ">
          <h4 class="text-active">{{day.name}}</h4>
          <span class="bg-primary w-1/2 mt-1 text-inverted rounded-lg ">{{day.date}}</span>
        </div>
        <!-- <div
          class="w-1/4 desktop:w-24 p-2 group flex flex-col font-medium items-center justify-center  border-2 border-muted hover:border-primary cursor-pointer rounded-xl">
          <h4 class="text-base group-hover:text-active">{{moment().add(1,'days').format('ddd')}}</h4>
          <span
            class="bg-muted group-hover:bg-primary text-muted group-hover:text-inverted w-1/2 mt-1  rounded-md ">{{moment().add(1,'days').format('DD')}}</span>
        </div>
        <div
          class="w-1/4 desktop:w-24 p-2 group flex flex-col font-medium items-center justify-center  border-2 border-muted hover:border-primary cursor-pointer rounded-xl">
          <h4 class="text-base group-hover:text-active">{{moment().add(2,'days').format('ddd')}}</h4>
          <span
            class="bg-muted group-hover:bg-primary text-muted group-hover:text-inverted w-1/2 mt-1  rounded-md ">{{moment().add(2,'days').format('DD')}}</span>
        </div> -->
        <button><IconsChevRight ></IconsChevRight></button>
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


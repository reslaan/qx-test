<template>

    <div
      class=" container mx-auto px-4 py-4 mt-4 w-full  bg-base border border-muted rounded-lg shadow mobile:rounded-lg  tablet:w-3/4 desktop:max-w-screen-desktop transition-all duration-300">
      <div class="flex justify-between items-center px-3 py-1.5  hover:bg-muted m-2 transition-all rounded-lg">
        <div class="leading-tight">
          <h3 class="font-semibold">{{$t('comming-sessions')}}</h3>
          <span class="text-xs">{{moment().format("dddd, MMMM DD, YYYY")}}</span>
        </div>
        <div>
          <button class="font-semibold cursor-pointer hover:bg-base py-0.5 px-2  rounded-md">
            <!-- <img class="w-5 h-5" src="../assets/icons/svg/zoomIcon.svg" alt=""> -->
           <IconsPlus></IconsPlus>
          </button>
        </div>
      </div>
      <slider @selectedDay="selected_day($event)"></slider>
      
      <LazySessions :day="selectedDay"/>
 
    </div>


  
</template>

<script>
import moment from 'moment';

export default {
  components: {
  },
  props: {},
  data() {
    return {
      moment,
      selectedDay:moment().format('DD')
     
    }
  },
  head: {},
  computed: {
   
  },
  watch: {},
  mounted() { },
  methods: {
    selected_day(day)
    {
      this.selectedDay = day;
    },
  },
}
</script>

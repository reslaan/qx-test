<template>
  <div> 
    <transition name="left">
 
 <div class="flex justify-between items-center text-center px-3 py-2 m-2  rounded-lg transition ease-in-out delay-150">
        <button @click="prev"  :class="currentSlides[0] === 0 ?'text-muted cursor-not-allowed':'active:-translate-x-0.5 rtl:active:translate-x-0.5'"><IconsChevLeft ></IconsChevLeft></button>

        <div v-for="(day,index) in $store.state.days" :key="day.date" v-show="currentSlides.includes(index)" 
         @click="selectDay"
          class="group w-1/4 desktop:w-24 p-2 flex flex-col items-center justify-center  border-2 border-muted hover:border-primary active:border-primary cursor-pointer rounded-xl ">
          <h4 class="text-base group-hover:text-active group-active:text-active active">{{day.name}} {{index}}</h4>
          <span class="bg-muted group-active:bg-primary group-hover:bg-primary w-1/2 mt-1 text-muted group-active:text-inverted group-hover:text-inverted rounded-lg ">{{day.date}}</span>
        </div>
       
        <button @click="next" :class="currentSlides[2] === 6 ?'text-muted cursor-not-allowed':'active:translate-x-0.5 rtl:active:-translate-x-0.5'"><IconsChevRight ></IconsChevRight></button>
      </div>

    
    </transition>
  </div>
</template>

<script >
import moment from 'moment';
export default{
  components: {
  
  },
   data(){
    return {
      moment,
      currentSlides:[0,1,2]
    }
   },
   methods:{
    next(){
      if(this.currentSlides.findLast(ele => ele === 6))
      return;
      this.currentSlides = this.currentSlides.map(i => i +1 )
      console.log(this.currentSlides)
    },
    prev(){
      if(this.currentSlides[0] === 0)
      return;
      this.currentSlides = this.currentSlides.map(i => i - 1 )
      console.log(this.currentSlides)
    },
    selectDay(){

    }
   }
}
</script>

<style>
.left-enter-active{
  animation: leftIn 4s ease-in-out;
}
.left-enter-leave{
  animation: leftOut 4s ease-in-out;
  
}

@keyframes leftIn{
  from{transform: translateX(100%);}
  to{transform: translateX(0);}
}

@keyframes leftOut{
  from {transform: translateX(0);}
  to{transform: translateX(-100);}
}
</style>
<template>
  <header class="" >
    <div class="container mx-auto tablet:w-3/4">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            
            <iconsQewamLogo class=""></iconsQewamLogo>
          </div>

          <div class="flex items-center justify-between space-x-2  ">
            <button class="rtl:ml-2" @click="changeMode">
                         <iconsMoon v-if="!darkMode"  class="text-base hover:text-muted" ></iconsMoon>
                          <iconsSun v-else  class="text-base hover:text-muted"></iconsSun>
            </button>

            <button class="whitespace-nowrap text-base font-medium  hover:text-muted"
              @click="changeLanguage">
              {{ $t('language') }}
            </button>
          </div>
        </div>
      </div>



    </div>



  </header>
</template>

<script >
// import moment from 'moment';

export default {

  data() {
    return {
      lang: this.$i18n.locale,
      darkMode: localStorage.getItem('dark_mode')
    }
  },

  mounted() {
    this.$i18n.locale = this.lang = localStorage.getItem('lang') ?? 'en';
    if(localStorage.getItem('dark_mode')){
        document.documentElement.classList.add('dark')
        this.darkMode = true;
    }
  
  },
  methods: {
    changeLanguage() {
      localStorage.setItem('lang', this.lang === 'ar' ? 'en' : 'ar')
      this.$i18n.locale = this.lang = localStorage.getItem('lang')
      const html = document.querySelector('html')  /// get html tag
      const dir = this.$i18n.locale === "en" ? "ltr" : "rtl";
      html.setAttribute('dir', dir)
      html.setAttribute('lang', this.$i18n.locale)
    },
    changeMode(){
       this.darkMode = ! this.darkMode;
       localStorage.setItem('dark_mode',this.darkMode)
    
       this.darkMode ? document.documentElement.classList.add('dark') : 
       document.documentElement.classList.remove('dark')
      
    }
  },
}
</script>



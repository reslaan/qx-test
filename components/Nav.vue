<template>
  <header class="" >
    <div class="container mx-auto tablet:w-3/4">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            
            <iconsQewamLogo></iconsQewamLogo>
          </div>


          <div class="flex items-center justify-between space-x-2  ">
            <button class="rtl:ml-2">
                          <!-- <iconsSun class="text-active"></iconsSun> -->
                          <iconsMoon class="text-base hover:text-muted" ></iconsMoon>
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
    }
  },

  mounted() {
    this.$i18n.locale = this.lang = localStorage.getItem('lang') ?? 'en';
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
  },
}
</script>



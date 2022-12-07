<template>
  <header>
    <div class="relative  z-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="">
            </a>
          </div>


          <div class=" items-center justify-end md:flex md:flex-1 ">
            <button class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              @click="changeLanguage">
              {{ $t('language') }}</button>
          </div>
        </div>
      </div>



    </div>



  </header>
</template>

<script >
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



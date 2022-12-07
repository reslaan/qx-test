<template>

    <div
      class=" container mx-auto px-4 py-4 mt-4 w-full overflow-hidden bg-white rounded-lg shadow mobile:rounded-lg  tablet:w-3/4 desktop:max-w-screen-desktop">
      <div class="flex justify-between items-center px-3 py-1.5  hover:bg-muted m-2 transition-all rounded-lg">
        <div class="leading-tight">
          <h3 class="font-semibold">Upcoming Sessions</h3>
          <span class="text-xs">Saturday; June 25, 2022</span>
        </div>
        <div>
          <button class="font-semibold cursor-pointer hover:bg-white py-0.5 px-2  rounded-md">
            <!-- <img class="w-5 h-5" src="../assets/icons/svg/zoomIcon.svg" alt=""> -->
           <IconsPlus></IconsPlus>
          </button>
        </div>
      </div>

      <div class="flex justify-between items-center text-center px-3 py-2 m-2  rounded-lg">
        <button><IconsChevLeft ></IconsChevLeft></button>

        <div
          class="w-1/4 desktop:w-24 p-2 flex flex-col items-center justify-center  border-2 border-primary cursor-pointer rounded-xl ">
          <h4 class="text-active">Today</h4>
          <span class="bg-primary w-1/2 mt-1 text-inverted rounded-lg ">25</span>
        </div>
        <div
          class="w-1/4 desktop:w-24 p-2 group flex flex-col font-medium items-center justify-center  border-2 border-muted hover:border-primary cursor-pointer rounded-xl">
          <h4 class="text-base group-hover:text-active">Mon</h4>
          <span
            class="bg-muted group-hover:bg-primary text-muted group-hover:text-inverted w-1/2 mt-1  rounded-md ">26</span>
        </div>
        <div
          class="w-1/4 desktop:w-24 p-2 group flex flex-col font-medium items-center justify-center  border-2 border-muted hover:border-primary cursor-pointer rounded-xl">
          <h4 class="text-base group-hover:text-active">Tue</h4>
          <span
            class="bg-muted group-hover:bg-primary text-muted group-hover:text-inverted w-1/2 mt-1  rounded-md ">27</span>
        </div>


        <button><IconsChevRight ></IconsChevRight></button>

      </div>

      <!-- display sessions -->
      <div class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4 px-3 py-2 m-2">
        <!-- start card -->
        <div class="flex flex-col space-y-2 rounded-xl bg-muted p-2 hover:border-primary">
          <div class="flex items-center space-x-2  leading-tight ">
            <div class="w-12 h-12 rounded-2xl bg-c-p-blue rtl:ml-2">
            </div>
            <div class="">
              <h3 class="text-base font-semibold">Baraka (YC S21)</h3>
              <span class="text-xs">Investing. Empowered</span>
            </div>
          </div>
          <div class="text-muted flex items-center">
            <span><IconsArrRight ></IconsArrRight></span> <span>11:00 PM to 11:30 PM</span>
          </div>
          <div class="flex space-x-3 border-t border-muted w-1/2 pt-2">
            <button
              class="inline-block rounded-xl bg-primary hover:bg-brightness-150 px-4 py-1.5 text-inverted font-semibold leading-7  shadow-sm ">Join</button>
            <button class="inline-block rounded-lg  px-4 py-1.5  font-semibold leading-7  ">Dismiss</button>
          </div>
        </div>
        <!-- end card -->
        <!-- start card -->
        <div class="flex flex-col space-y-2 rounded-xl border border-muted p-2 hover:bg-muted">
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
        </div>
        <!-- end card -->
        <!-- start card -->
        <div class="flex flex-col space-y-2 rounded-xl border border-muted p-2 hover:bg-muted">
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
        </div>
        <!-- end card -->
      </div>

    </div>


  
</template>

<script>
export default {
  components: {
  },
  props: {},
  data() {
    return {
      name: 'reslaan',
      sessions: [
        {
          company_name: 'Baraka (YC S21)',
          company_logo:
            'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png',
          company_description: 'Investing. Empowered.',
          start_date: '2022-12-07 11:00:06',
          end_date: '2022-12-07 11:30:06',

          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          company_name: 'Memorisely',
          company_logo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi16u9yD2j4H1UhDIEcw6JxbNjBvShnDRL6_-17iNKjiXbQgFQpM0yQzPa7SDNLU3JeVs&usqp=CAU',
          company_description: 'E-Learning',
          start_date: '2023-01-07 11:00:06',
          end_date: '2023-01-07 11:30:06',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          company_name: 'Memorisely',
          company_logo:
            'https://img.freepik.com/premium-vector/saudi-arabia-tour-travel-logo-umrah-hajj-company-icon_18099-3718.jpg',
          company_description: 'The Evolution of A Revolution',
          start_date: '2023-01-08 11:00:06',
          end_date: '2023-01-08 11:30:06',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          company_name: 'Swvl',
          company_logo:
            'https://miro.medium.com/max/936/1*dn6zull3VcGzGMVDdjYItA.jpeg',
          company_description: 'الشوبنغ لعبتنا - Shopping is our thing',
          start_date: '2023-01-10 11:00:06',
          end_date: '2023-01-10 11:30:06',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          company_name: 'Basket باسكت',
          company_logo:
            'https://cdn2.hubspot.net/hub/145335/file-407359001-png/blog-files/pepsi.png',
          company_description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
          start_date: '2023-01-10 11:00:06',
          end_date: '2023-01-10 11:30:06',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
      ],
    }
  },
  head: {},
  computed: {},
  watch: {},
  mounted() { },
  methods: {},
}
</script>

// const lang = localStorage.setItem('lang','ar')
import moment from 'moment';
export default {
  state:() => ({
  
    days: [
        {
          name:moment().calendar().split("at")[0],
          date:moment().format('DD')
        },
        {
          name:moment().add(1,'days').format('ddd'),
          date:moment().add(1,'days').format('DD')
        },
        {
          name:moment().add(2,'days').format('ddd'),
          date:moment().add(2,'days').format('DD')
        },
        {
          name:moment().add(3,'days').format('ddd'),
          date:moment().add(3,'days').format('DD')
        },
        {
          name:moment().add(4,'days').format('ddd'),
          date:moment().add(4,'days').format('DD')
        },
        {
          name:moment().add(5,'days').format('ddd'),
          date:moment().add(5,'days').format('DD')
        },
        {
          name:moment().add(6,'days').format('ddd'),
          date:moment().add(6,'days').format('DD')
        },
    ],
    sessions: [
      {
        company_name: 'Baraka (YC S21)',
        company_logo:
          'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png',
        company_description: 'Investing. Empowered.',
        start_date: moment().hours(11).minute(0),
        end_date: moment().hour(11).minute(30),
        current_date: moment(),

        zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
      },
      {
        company_name: 'Memorisely',
        company_logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi16u9yD2j4H1UhDIEcw6JxbNjBvShnDRL6_-17iNKjiXbQgFQpM0yQzPa7SDNLU3JeVs&usqp=CAU',
        company_description: 'E-Learning',
        start_date: moment().hours(11).minute(30),
        end_date: moment().hour(12).minute(0),
        zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
      },
      {
        company_name: 'Memorisely',
        company_logo:
          'https://img.freepik.com/premium-vector/saudi-arabia-tour-travel-logo-umrah-hajj-company-icon_18099-3718.jpg',
        company_description: 'The Evolution of A Revolution',
        start_date: moment().add(5,'d').hours(11).minute(0),
        end_date: moment().add(5,'d').hour(11).minute(30),
        zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
      },
      {
        company_name: 'Swvl',
        company_logo:
          'https://miro.medium.com/max/936/1*dn6zull3VcGzGMVDdjYItA.jpeg',
        company_description: 'الشوبنغ لعبتنا - Shopping is our thing',
        start_date: moment().add(6,'d').hours(13).minute(0),
        end_date: moment().add(6,'d').hour(13).minute(30),
        zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
      },
      {
        company_name: 'pepsi بيبسي',
        company_logo:
          'https://cdn2.hubspot.net/hub/145335/file-407359001-png/blog-files/pepsi.png',
        company_description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
          start_date: moment().add(2,'d').hours(11).minute(0),
          end_date: moment().add(2,'d').hour(11).minute(30),
        zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
      },
      {
        company_name: 'discord',
        company_logo:
          'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7',
        company_description:
          'Lorem ipsum dolor sit amet . ',
          start_date: moment().add(2,'d').hours(15).minute(0),
          end_date: moment().add(2,'d').hour(15).minute(30),
        zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
      },
      {
        company_name: 'windows',
        company_logo:
          'https://images.unsplash.com/photo-1633419461186-7d40a38105ec',
        company_description:
          'Lorem ipsum dolor sit amet  elit. ',
          start_date: moment().add(4,'d').hours(14).minute(0),
          end_date: moment().add(4,'d').hour(14).minute(30),
        zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
      },
      {
        company_name: 'mercedes benz',
        company_logo:
          'https://images.unsplash.com/photo-1601888221673-626d26f726cd',
        company_description:
          'Lorem ipsum dolor sit  adipisicing elit. ',
          start_date: moment().add(4,'d').hours(19).minute(0),
          end_date: moment().add(4,'d').hour(19).minute(30),
        zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
      },
      {
        company_name: 'spotify ',
        company_logo:
          'https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png',
        company_description:
          'Lorem ipsum dolor  adipisicing elit. ',
          start_date: moment().add(5,'d').hours(9).minute(0),
          end_date: moment().add(5,'d').hour(9).minute(30),
        zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
      },
      {
        company_name: 'Amazon',
        company_logo:
          'https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-icon-symbol-png-logo-21.png',
        company_description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
          start_date: moment().add(6,'d').hours(11).minute(0),
          end_date: moment().add(6,'d').hour(11).minute(30),
        zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
      },
    ],
  }),
  mutations:{
    REMOVE_SESSION(state, name) {
      state.sessions = state.sessions.filter((session) => session.company_name !== name);
    },
  },
  actions:{

  },
  

}

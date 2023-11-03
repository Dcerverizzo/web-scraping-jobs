const sites =
  [
    {
      name: 'weworkremotely',
      url: 'https://weworkremotely.com/categories/remote-front-end-programming-jobs',
      selectors: {
        list: 'li.feature',
        title: 'span.title',
        company: 'span.company',
        location: 'span.region.company',
        link: 'a'
      },
    },
    {
      name: 'remoteok',
      url: 'https://remoteok.com/remote-dev-jobs?location=Worldwide',
      selectors: {
        list: 'tr.job',
        title: 'td.company_and_position',
        company: 'h3[itemprop="name"]',
        location: 'div.location',
        link: 'a.preventLink'
      }
    },
    // {
    //   name: 'remote.co',
    //   url: 'https://remote.co/remote-jobs/developer',
    //   selectors: {
    //     list: 'a.card.m-0.border-left-0.border-right-0.border-top-0.border-bottom',
    //     title: 'p.m-0 .larger',
    //     company: 'p.m-0:nth-child(1)',
    //     location: 'p.m-0:nth-child(2)',
    //     link: 'a.card.m-0.border-left-0.border-right-0.border-top-0.border-bottom'
    //   }
    // },
    {
      name: 'himalayas',
      url: 'https://himalayas.app/jobs/software-engineer?keyword=node&experience=mid-level%2Csenior%2Cmanager&type=full-time%2Cpart-time%2Ccontractor%2Cother',
      selectors: {
        list: 'article.flex.flex-shrink-0',
        title: 'a.text-xl',
        company: 'a.inline-flex.items-center',
        location: 'div.items-center.border',
        link: 'a.text-xl'
      },
    },
    {
      name: 'remotive',
      url: 'https://remotive.com/remote-jobs/software-dev',
      selectors: {
        list: 'li.tw-cursor-pointer',
        title: 'a.tw-block > span',
        company: 'span.tw-block',
        location: 'span.job-tile-location',
        link: 'a.tw-block'
      },
    }
  ]



module.exports = sites
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/docs-demo/",
  head: [["link", { rel: "icon", href: "docs-demo/logo.jpg" }]],
  title: "天成集团",
  description: "A VitePress Site",
  themeConfig: {
    logo:'/logo.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link:'/'},
      { text: '介绍', link: '/markdown-examples' },
      { text: '话术专栏', link: '/markdown-examples' },
      { text: '关于', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '初聊日程案例',
        items: [
          { text: '第一天初聊', link: '/markdown-examples' },
          { text: '第一天话题', link: '/api-examples' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: '话术专栏', link: '/markdown-examples' },
          { text: 'Runtime API 话术专栏', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/tcyx888' }
    ],
    footer:{
      copyright:"Copyright © 2019 天成集团"
    },
       // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
  
})

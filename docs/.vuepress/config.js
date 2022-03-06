module.exports = {
  lang: 'zh-CN',
  title: 'I-Mall-Docs',
  description: '一个简单的商城，持续开发中！',
  base: '/I-Mall-Docs/',
  themeConfig: {
    repo: 'codewld/I-Mall',
    sidebar: [
      {text: '介绍', link: '/'},
      {text: '技术栈', link: '/technology-stack/'},
      {text: '更新日志', link: '/change-log/'},
      {
        text: '技术要点',
        children: [
          {text: '身份验证及访问控制', link: '/technology-point/身份验证及访问控制.md'}
        ]
      }
    ],
    sidebarDepth: 0,
    editLink: false,
    contributors: false
  }
}

/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx8ece531fdfe72fd4',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8ac17714795e812f374bf18d40fcb304',

  PROVINCE: '甘肃',
  CITY: '兰州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小猪',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRjXM6VD-ejeufmTfTH494dUptA0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ySr-2CURLuaiuO1Fu3yco7XD-AH9FGroObr17N9fynU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-10',
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-06-17' },
      ],
    },
  ],
  
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'oRjXM6ZNnqhmS4puXn-nFjvAJFDo',

  CALLBACK_USERS: [oRjXM6VD-ejeufmTfTH494dUptA0
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRjXM6ZNnqhmS4puXn-nFjvAJFDo',
    }
  ],

}

module.exports = USER_CONFIG


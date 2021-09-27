const BASE_URL = 'https://www.youtube.com/premium'
;(async () => {
  await test()
    .then((unlock) => {
      if (unlock == 1) {
        $done({
          title: 'Youtube Premium 解锁检测',
          style: 'good',
          content: '您的出口 IP 解锁 Youtube Premium',
        })
        return new Promise(() => {})
      } else {
        $done({
          title: 'Youtube Premium 解锁检测',
          style: 'error',
          content: '您的出口 IP 未解锁 Youtube Premium',
        })
        return new Promise(() => {})
      }

    })
    .catch((error) => {
      $done({
        title: 'Youtube Premium 解锁检测',
        style: 'error',
        content: '检测失败，请重试',
      })
    })
})()

function test() {
  return new Promise((resolve, reject) => {
    let option = {
      url: BASE_URL,
      headers: {
        'Accept-Language': 'en',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
      },
    }
    $httpClient.get(option, function (error, response, data) {
      if (error != null) {
        reject('Error')
        return
      }

      if (response.status !== 200) {
        resolve('Not Available')
        return
      }
      let unlock = 0
      if(data.indexOf('YouTube and YouTube Music ad-free') > -1){
        unlock = 1
      }
      resolve(unlock)
    })
  })
}

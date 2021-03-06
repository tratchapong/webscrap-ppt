const ppt = require('puppeteer')

const url = "https://eatigo.com/th/bangkok/th";

(async () => {
  const browser = await ppt.launch()
  const page = await browser.newPage()

  await page.goto(url, {waitUntil: 'load'})
  // await page.goto(url, {waitUntil: 'domcontentloaded'})
  // await page.goto(url, {waitUntil: 'networkidle0'})
  // await page.goto(url, {waitUntil: 'networkidle2'})

  // await page.screenshot({ path: 'tratchapong.png'})
  const output = await page.evaluate( ()=> {

    return document.querySelector('.swiper-wrapper').innerHTML
  })
  
  console.log(output)
  browser.close() 
})()

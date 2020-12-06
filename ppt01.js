const ppt = require('puppeteer')

const url = "https://tratchapong.github.io";

(async () => {
  const browser = await ppt.launch()
  const page = await browser.newPage()

  await page.goto(url)
  // await page.screenshot({ path: 'tratchapong.png'})
  await page.waitForSelector('.card-body b')
  const output = await page.evaluate( ()=> {

    return document.querySelector('body').innerHTML
  })
  
  console.log(output)
  browser.close() 
})()

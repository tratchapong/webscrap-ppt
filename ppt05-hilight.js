const ppt = require('puppeteer')

const target_url = "https://sport.trueid.net/football/highlights/premier-league/"

async function startBrowser() {
  const browser = await ppt.launch()
  const page = await browser.newPage()

  return {browser, page}
}

async function closeBrowser(browser) {
  return browser.close
}

async function playTest(url) {
  const {browser, page} = await startBrowser()
  // await page.setViewport( {width:1280, height:1600})
  // await page.goto(url, {waitUntil: 'load'})
  await page.goto(url)
  // await page.waitForSelector('div.sc-bxivhb Column__ColumnStyle-vsqrnx-0 jzjRuZ')
  const output = await page.evaluate( () => {
    const sel1 = Array.from(document.querySelectorAll('h4')).map( x=> x.textContent)
    const sel2 = Array.from(document.querySelectorAll('h4~div')).map( x=> x.innerText)
    return {sel1, sel2}
  })
  let {sel1, sel2} = output
  console.log(sel1)
  console.log('-------------------')
  console.log(sel2)

  // await page.screenshot({path: 'screenshot.png'});
  closeBrowser(browser)
}

(async () => {
  await playTest(target_url)
  process.exit(1)
})()


// a Link of highlight
// CSS Selector style :
// #__next > div.sc-bxivhb.Wrapper-bxke0v-0.cPqBNz > div > div > div > div.sc-bxivhb.sc-ifAKCX.Row__Flex-sc-19o4deh-0.khqQeR > div:nth-child(1) > div.sc-bxivhb.Wrapper-bxke0v-0.jKiyLg > a

// Xpath style :
// *[@id="__next"]/div[2]/div/div/div/div[2]/div[1]/div[1]/a


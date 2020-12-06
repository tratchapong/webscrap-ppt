const ppt = require('puppeteer')

const url = "https://www.example.com"

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
  await page.goto(url, {waitUntil: 'load'})
  //..
  //.. play with any command here
  //.. 
  closeBrowser(browser)
}

(async () => {
  await playTest(target_url)
  process.exit(1)
})()



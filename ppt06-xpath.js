// Resource from : https://dev.to/sonyarianto/practical-puppeteer-how-to-use-waitforxpath-and-evaluate-xpath-expression-15cp
    // https://devdocs.io/puppeteer/index#pagewaitforxpathxpath-options


const puppeteer = require('puppeteer');

const target_url = "https://sport.trueid.net/football/highlights/premier-league/";

(async () => {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // set viewport and user agent (just in case for nice viewing)
    await page.setViewport({width: 1366, height: 768});
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');

    // go to the target web
    await page.goto(target_url);

    // wait for element defined by XPath appear in page
    const xp_out = await page.waitForXPath("//*[@id=\"__next\"]/div[2]/div/div/div/div[2]/div[1]/div[1]/a");

    // evaluate XPath expression of the target selector (it return array of ElementHandle)
    // let elHandle = await page.$x("(//span[@class='CountTitle-number'])[1]");

    // prepare to get the textContent of the selector above (use page.evaluate)
    // let lamudiNewPropertyCount = await page.evaluate(el => el.textContent, elHandle[0]);
    
    //

    

    console.log({xp_out});

    // close the browser
    await browser.close();
})();


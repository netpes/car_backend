const fs = require("fs/promises")
const userAgent = require('user-agents');
const puppeteer = require('puppeteer')


async function Libra(req){
  try {
    const input = req
    console.log(input)
    const browser = await puppeteer.launch({
      headless: true
    });
    const page = await browser.newPage();
    await page.goto("https://rb.gy/fob7e4", { timeout: 60000 });
    await page.type('#CarNumber-0', input)
    await Promise.all([
      page.$eval(`body > div.bg-strip.form-strip.form-strip-with-bg > form > div.form-row.second-row > button`, element =>
          element.click()
      ),
      await page.waitForXPath("/html/body/div[5]/form/div")
    ]);
    await page.waitForXPath("/html/body/div[5]/form/div")
    const data = await page.$eval("form.form-container > div.third-party-check-response", e => e.textContent)
    console.log(data)
    await browser.close();
    return data
  } catch (e) {
    return "Error Not Found"
  }
}

async function Migdal(req){
  try {

    const input = req
    console.log(input)
    const browser = await puppeteer.launch({
      headless: true
    });
    const page = await browser.newPage();
    await page?.goto("https://www.migdal.co.il/car-insurance/support/third-party-policy-examination", { timeout: 60000 })
    await page.type("#eventDate", "01052022")
    await page.type("#licenseNum", input)
    const submit = await page.waitForXPath("/html/body/div[5]/div[2]/div/app/car-policy-check/div/div/form/button")
    await submit.click()
    await page.waitForXPath("/html/body/div[5]/div[2]/div/app/car-policy-check/div/div/div/div/span")
    const data = await page.$eval("body > div.miniWizardsNoBackgroud.contentExplanation > div:nth-child(2) > div > app > car-policy-check > div > div > div > div > span", e => e.textContent)
    await console.log(data)
    await browser.close();
    return data
  } catch (e) {
    return "Error Not Found"
  }
}
async function Aylon(req){
  try {
    const input = req
    console.log(input)
    const browser = await puppeteer.launch({
      headless: true
    });
    const page = await browser.newPage();
    await page?.goto("https://www.ayalon-ins.co.il/third_party/", { timeout: 60000 })
    await page.type("#ctl00_ctl00_MainPageContentPlaceHolder_SVSrvPrezZoneHolder0_ctl00_txtDate", "01052022")
    await page.type("#ctl00_ctl00_MainPageContentPlaceHolder_SVSrvPrezZoneHolder0_ctl00_txtCarLicensing", input)
    await page.click("#ctl00_ctl00_MainPageContentPlaceHolder_SVSrvPrezZoneHolder0_ctl00_cmdCheck")
    await page.waitForXPath("//*[@id=\"ctl00_ctl00_MainPageContentPlaceHolder_SVSrvPrezZoneHolder0_ctl00_ctl00\"]/div/ul/li")
    const data = await page.$eval("#ctl00_ctl00_MainPageContentPlaceHolder_SVSrvPrezZoneHolder0_ctl00_ctl00 > div > ul > li", e => e.textContent)
    await console.log(data)
    await browser.close();
    return data;
  } catch (e) {
    return "Error Not Found"
  }
}
async function Haklai(req){
  try {
    const input = req
    console.log(input)
    const browser = await puppeteer.launch({
      headless: true
    });
    const page = await browser.newPage();
    await page?.goto("https://www.bth.co.il/check-insurance/", {waitUntil: 'networkidle0'})
    await page.click("#search-date")
    const todate = await page.waitForXPath("//*[@id=\"ui-datepicker-div\"]/table/tbody/tr[3]/td[3]/a", {timeout: 30000})
    await todate.click()
    await page.type("#license-number", input)
    await page.click("#check-sub")
    let data1;
    try {
      await page.waitForSelector('#form-check > div > div.error-msg.msg-form', {
        visible: true,
      })
      data1 = await page.$eval("#form-check > div > div.error-msg.msg-form", el => el.textContent)
    } catch (err) {
      await page.waitForSelector('#form-check > div > div.success-msg.msg-form', {
        visible: true,
      })
      data1 = await page.$eval("#form-check > div > div.success-msg.msg-form", el => el.textContent)
    }
    await console.log(data1)
    await browser.close();
    return data1
  } catch (e) {
    return "Error Not Found"
  }
}
async function Wesure(req){
  try {
    const input = req
    console.log(input)
    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: null
    });
    const page = await browser.newPage();
    await page?.goto("https://we-sure.co.il/%D7%91%D7%93%D7%99%D7%A7%D7%AA-%D7%AA%D7%95%D7%A7%D7%A3-%D7%94%D7%91%D7%99%D7%98%D7%95%D7%97/",{ timeout: 60000 })
    await page.type("#accDate", "01/02/2022")
    await page.type("#carId", input)

    await page.click("#insExpForm > label > span.checkmark")
    await page.click("#submitInsExp")
    await page.waitForXPath("//*[@id=\"result-container\"]/p[2]")
    const data = await page.$eval("#result-container > p.exp-response.ins-negative", el => el.textContent)
    await console.log(data)
    await browser.close();
    return data
  } catch (e) {
    return "Error Not Found"
  }
}

async function Menora(req){
  try {
    const input = req
    console.log(input)
    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: null
    });
    const page = await browser.newPage();
    await page?.goto("https://www.menoramivt.co.il/checkclaimstatus/", { timeout: 60000 })
    await page.setUserAgent(userAgent?.random().toString())
    await page.type("#insuredId", "211814686")
    await page.type("#carNumber", input)
    await page.type("#year", "2022")
    await page.type("#month", "08")
    await page.type("#day", "22")
    await page.click("#terms")
    const sub = await page.waitForXPath("//*[@id=\"page-content\"]/div/div/div[2]/div[3]/div/div/form/div[4]/button")
    await sub.click()
    await page.waitForSelector("#page-content > div > div > div.ResultsPage__PageStyle-g84tt4-0.fiiBLh > div > div > div")

    const data = await page.$eval("#result-subtitle", el => el.textContent)
    await console.log(data)
    await browser.close();
    return data
  } catch (e) {
    return "Error Not Found"
  }
}




module.exports = {

  Hash:async (req,res)=>{

    const {input} = req.body
    console.log(input)
    const browser = await puppeteer.launch({
      headless: true
    });
    try {
      const page = await browser.newPage();
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36');
      await page?.goto("https://www.hcsra.co.il/Pages/covercheckthirdparty.aspx", { timeout: 60000 })

      await page.type('#licensing_number', input);
      await page.click("#accidentDate")
      // await page.click("body > div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-top > div.datepicker-days > table > tbody > tr:nth-child(3) > td.active.day")
      const submit = await page.waitForXPath("//*[@id=\"coverage_check_middle\"]/div[2]/div[1]/div/div[2]/div/div[3]/button")
      await submit.click()
      await page.click("#coverage_check_middle > div.banner_wrapper.row.popupOpen > div.bgImg.popupOpen > div > div.event_details_form_wrapper.col-xs-12 > div > div.buttonDiv.col-xs-12.col-sm-2 > button")
      await page.waitForXPath("//*[@id=\"coverage_check_middle\"]/div[2]/div[1]/div/div[4]/div")

      const q = await page.$eval("#coverage_check_middle > div.banner_wrapper.row.popupOpen > div.bgImg.popupOpen > div > div.coverage_popup_not.col-xs-12 > div", e => e.textContent)
      await console.log(q)
      await browser.close();
      const services = {
        Hash: q,
        Haklai: Haklai(input),
        Libra: await Libra(input),
        Migdal: await Migdal(input),
        Aylon: await Aylon(input),
        Wesure: await Wesure(input),
        Menora: await Menora(input),
      }
      res.status(200).json({
        services
      })
    } catch(e){
      console.log(e)
      res.status(200).json({e})
    }
  },


};





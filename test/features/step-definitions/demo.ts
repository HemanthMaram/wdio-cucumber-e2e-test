import { Given, When, Then } from "@cucumber/cucumber";
import chai from 'chai'

Given(/^Lauch the Google webpage$/,async ()=>{
  await  browser.url("https://google.com")

}
)

When(/^enter the (.*)$/,async (searchText)=>{
    console.log(`>> search Item: ${searchText}`)
   let ele =  $(`[title=Search]`)
   await ele.setValue(searchText)
   await browser.keys("Enter")
   
})


Then(/^click on search button$/, async ()=>{
    let ele =  $(`<h3>`)
   await ele.click()


})
Then(/^Url should match (.*)$/, async (expectedURL)=>{
  

    console.log(`ur1:${expectedURL}`)

      let url = await browser.getUrl()
    chai.expect(url).to.equal(expectedURL)
    

})
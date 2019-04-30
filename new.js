var fs = require("fs")
const chai = require('chai');
const expect = chai.expect;
const chrome = require('selenium-webdriver/chrome');
const { Builder, By, until } = require('selenium-webdriver');
let o = new chrome.Options();
o.addArguments('--headless');
var driver = new Builder()
    .setChromeOptions(o)
    .forBrowser('chrome')
    .build();


(async function program() {
    var fileContents = fs.readFileSync('./data.json');
    const data = JSON.parse(fileContents)


    const keys = Object.entries(data)
    describe('Testing for checkbox', function () {
        for (const [id, myvalues] of keys) {
            if (myvalues.Action == "Checked") {
                it(myvalues.Data, async () => {
                    console.log()
                    await driver.get(myvalues.Page);
                    var image = await driver.findElement(By[myvalues.SelectorType](myvalues.Identifier))
                    var path_before
                    var path_after
                    path_before= await image.getAttribute("src").then(function (result) {
                        return result

                    });

                    path_after = await driver.findElement(By.xpath(myvalues.Identifier)).click();
                    image.getAttribute("src").then(function (result) {
                        return result
                    });
                    expect(path_before).not.to.equal(path_after)
                })
            } else if (myvalues.Action == "Hyperlinks") {

                    it(myvalues.Data, async () => {
                        await driver.get(myvalues.Page);
                        var link = await driver.findElement(By[myvalues.SelectorType](myvalues.Identifier))
                        var data = await link.getText().then(function(result){
                             return (result)
                           
                        }
                        
                        );
                        expect(data).to.equal(myvalues.Data)
                    });

            }
        }
    })

}());












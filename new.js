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
var checkboxtest = require("./subtests/checkbox")
var hyperlinkstest = require("./subtests/hyperlinks")
var assertelementcheck = require("./subtests/assertElement")


    (async function program() {
        var fileContents = fs.readFileSync('./data.json');
        const data = JSON.parse(fileContents)


        const keys = Object.entries(data)
        describe('Testing for checkbox', function () {
            for (const [id, myvalues] of keys) {
                if (myvalues.Action == "Checked") {
                    checkboxtest(myvalues)
                } else if (myvalues.Action == "Hyperlinks") {
                    hyperlinkstest(myvalues)
                }
                else if (myvalues.Action == "AssertElement") {
                    assertelementcheck(myvalues)
                }
            }
        })
    }());












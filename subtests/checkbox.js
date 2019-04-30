"use strict"

(function(){
    exports.checkboxtest = function(myvalues){
        it(myvalues.Data, async () => {
            console.log()
            await driver.get(myvalues.Page);
            var image = await driver.findElement(By[myvalues.SelectorType](myvalues.Identifier))
            var path_before
            var path_after
            path_before = await image.getAttribute("src").then(function (result) {
                return result
    
            });
            path_after = await driver.findElement(By.xpath(myvalues.Identifier)).click();
            image.getAttribute("src").then(function (result) {
                return result
            });
            expect(path_before).not.to.equal(path_after)
        })
    }
}())
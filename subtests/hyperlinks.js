"use strict"

    (function () {
        exports.hyperlinkstest = function (myvalues) {
            it(myvalues.Data, async () => {
                await driver.get(myvalues.Page);
                var link = await driver.findElement(By[myvalues.SelectorType](myvalues.Identifier))
                var data = await link.getText().then(function (result) {
                    return (result)
                }
                );
                expect(data).to.equal(myvalues.Data)
            });
        }
    }())
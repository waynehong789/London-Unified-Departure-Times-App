import {browser, by, ElementFinder, element } from "protractor";
export class Selector {
    // dropdown
    dropdown:ElementFinder;
    //constructor  accepts dropdown as element
    constructor(dropdownElement:ElementFinder) {
		// assign block variable to the global variable
       this.dropdown = dropdownElement;
       // click the dropdown
       //dropdownElement.click()
       //browser.sleep(1000)
    }
    public selectByIndex(index:number){
        index = index + 1;
        console.log("Selecting element based index : "+index)
        // select the option
        this.dropdown.element(by.css("option:nth-child("+index+")")).click()
    }

    public selectByName(selectName: string, totalNumber: number): Promise<number>{
        return new Promise<number>((resolveAll, rejectAll) => {
            let id = 0;
            let options = element.all(by.tagName('mat-option'));
            //console.log("options:  " , options);
            let promiseChain: Promise<any> = Promise.resolve(null);
            for (let i = 0; i < totalNumber; i++) {
              promiseChain = promiseChain.then(() => {
                return new Promise<any>((resolve, reject) => {
                  options.get(i).getText().then((name) => {
                    //console.log("option name: ", name);
                    if (name === selectName) {
                      id = i;
                      resolve();
                    } else {
                      resolve();
                    }
                  }).catch(err => {
                    reject(err);
                  })
                })
              })
            }//for
            promiseChain.then(() => {
              options.get(id).click();
              resolveAll(id);
            }).catch(err => {
              rejectAll("Finding option failed " + err);
            });
        })
    }
 }
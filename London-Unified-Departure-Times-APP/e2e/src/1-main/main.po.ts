import { browser, by, element } from 'protractor';
import { Selector } from '../materials/selector';

export class MainPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getBusLineSelector() {
    return element(by.name('busLine'));
  }

  selectBusLine(){
    return new Promise<any>((resolveAll, rejectAll) => {
      this.getBusLineSelector().click().then(()=>{
        let selector: Selector = new Selector(this.getBusLineSelector());
        selector.selectByName("No.469 Bus",3);
        resolveAll();
      }).catch(err=>{
        rejectAll("Select bus line failed" + err);
      })
    })
  }
}

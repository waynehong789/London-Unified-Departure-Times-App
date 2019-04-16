import { MainPage } from './main.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: MainPage;

  beforeEach(() => {
    page = new MainPage();
  });

  it('should display welcome message', () => {
    page.navigateTo()
    expect(page.getTitleText()).toEqual('Welcome to London Unified Departure Times APP');
  });

  it('Select bus line - should navigate to bus line stations list view', async () => {
    await page.selectBusLine();
    browser.sleep(5000);
    let _url = await browser.driver.getCurrentUrl();
    expect(_url).toEqual("http://localhost:5000/stations");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

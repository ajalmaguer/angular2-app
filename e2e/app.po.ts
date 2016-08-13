export class DevicemanagerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dm-root h1')).getText();
  }
}

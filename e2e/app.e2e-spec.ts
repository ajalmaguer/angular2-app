import { DevicemanagerPage } from './app.po';

describe('devicemanager App', function() {
  let page: DevicemanagerPage;

  beforeEach(() => {
    page = new DevicemanagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dm works!');
  });
});

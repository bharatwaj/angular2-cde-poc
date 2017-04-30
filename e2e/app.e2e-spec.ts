import { AngularPentahoPage } from './app.po';

describe('angular-pentaho App', () => {
  let page: AngularPentahoPage;

  beforeEach(() => {
    page = new AngularPentahoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

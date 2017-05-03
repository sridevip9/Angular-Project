import { MyshopPage } from './app.po';

describe('myshop App', () => {
  let page: MyshopPage;

  beforeEach(() => {
    page = new MyshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

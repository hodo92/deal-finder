import { DealFinderPage } from './app.po';

describe('deal-finder App', () => {
  let page: DealFinderPage;

  beforeEach(() => {
    page = new DealFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

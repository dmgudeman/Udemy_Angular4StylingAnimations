import { BApplicationWideStylesPage } from './app.po';

describe('b-application-wide-styles App', () => {
  let page: BApplicationWideStylesPage;

  beforeEach(() => {
    page = new BApplicationWideStylesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

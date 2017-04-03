import { DCssTransitionsPage } from './app.po';

describe('d-css-transitions App', () => {
  let page: DCssTransitionsPage;

  beforeEach(() => {
    page = new DCssTransitionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

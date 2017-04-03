import { ECssTransitionsPage } from './app.po';

describe('e-css-transitions App', () => {
  let page: ECssTransitionsPage;

  beforeEach(() => {
    page = new ECssTransitionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

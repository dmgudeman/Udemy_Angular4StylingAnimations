import { CComponentScopedStylesPage } from './app.po';

describe('c-component-scoped-styles App', () => {
  let page: CComponentScopedStylesPage;

  beforeEach(() => {
    page = new CComponentScopedStylesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

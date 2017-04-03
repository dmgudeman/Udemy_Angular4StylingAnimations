import { FAngularAnimationsPage } from './app.po';

describe('f-angular-animations App', () => {
  let page: FAngularAnimationsPage;

  beforeEach(() => {
    page = new FAngularAnimationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

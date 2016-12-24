import { TroutPage } from './app.po';

describe('trout App', function() {
  let page: TroutPage;

  beforeEach(() => {
    page = new TroutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

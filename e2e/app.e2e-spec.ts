import { HimankAngularPage } from './app.po';

describe('himank-angular App', function() {
  let page: HimankAngularPage;

  beforeEach(() => {
    page = new HimankAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

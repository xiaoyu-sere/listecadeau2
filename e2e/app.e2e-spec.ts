import { ListecadeauPage } from './app.po';

describe('listecadeau App', function() {
  let page: ListecadeauPage;

  beforeEach(() => {
    page = new ListecadeauPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

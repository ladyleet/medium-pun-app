import { MediumPunAppPage } from './app.po';

describe('medium-pun-app App', () => {
  let page: MediumPunAppPage;

  beforeEach(() => {
    page = new MediumPunAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

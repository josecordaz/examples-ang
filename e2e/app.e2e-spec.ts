import { ExamplesAngPage } from './app.po';

describe('examples-ang App', () => {
  let page: ExamplesAngPage;

  beforeEach(() => {
    page = new ExamplesAngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

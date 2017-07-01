import { MyheroesPage } from './app.po';

describe('myheroes App', () => {
  let page: MyheroesPage;

  beforeEach(() => {
    page = new MyheroesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

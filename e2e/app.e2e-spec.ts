import { Ang2UsersPage } from './app.po';

describe('ang2-users App', () => {
  let page: Ang2UsersPage;

  beforeEach(() => {
    page = new Ang2UsersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { CMSPortalPage } from './app.po';

describe('cmsportal App', function() {
  let page: CMSPortalPage;

  beforeEach(() => {
    page = new CMSPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

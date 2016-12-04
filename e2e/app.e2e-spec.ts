import { VotingappPage } from './app.po';

describe('votingapp App', function() {
  let page: VotingappPage;

  beforeEach(() => {
    page = new VotingappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

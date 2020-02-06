const { I } = inject();
// Add in your custom step files

Given('I am on example.com', () => {
  // From "features/pageLoad1.feature" {"line":6,"column":3}
  I.amOnPage('http://example.com/')
});

Then('I should see Example Domain in the page', () => {
  // From "features/pageLoad1.feature" {"line":7,"column":3}
  I.see('Example Domain')
});

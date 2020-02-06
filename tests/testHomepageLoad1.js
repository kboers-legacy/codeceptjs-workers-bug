Feature('Homepage loads 1');

Scenario('The homepage displays 1', (I) => {
    I.amOnPage('http://example.com/')
    I.see('Example Domain')
});

Scenario('The homepage displays 2', (I) => {
    I.amOnPage('http://example.com/')
    I.see('Example Domain')
});

Scenario('The homepage displays 3', (I) => {
    I.amOnPage('http://example.com/')
    I.see('Example Domain')
});

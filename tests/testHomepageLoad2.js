Feature('Homepage loads 2');

Scenario('The homepage displays 4', (I) => {
    I.amOnPage('http://example.com/')
    I.see('Example Domain')
});

Scenario('The homepage displays 5', (I) => {
    I.amOnPage('http://example.com/')
    I.see('Example Domain')
});

Scenario('The homepage displays 6', (I) => {
    I.amOnPage('http://example.com/')
    I.see('Example Domain')
});

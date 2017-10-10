describe('gmail login', function() {
    it('should load form', function() {
       // browser.ignoreSynchronization = false;

        browser.waitForAngularEnabled(false);
        // Load the gmail login page.
        //browser.driver.manage().timeouts().implicitlyWait(100000);

        browser.get('https://mail.google.com');


        browser.wait(element(by.css('input[type="email"]')).isDisplayed());

        element(by.css('input[type="email"]')).sendKeys('may.flowwwer@gmail.com');


        element(by.id('identifierNext')).click();


        //browser.wait(function() { element(by.css('input[name="password"]')).isPresent() == true},10000, 'WTF')

        browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css('input[name="password"]'))));

        element(by.css('input[name="password"]')).sendKeys('Morrigan8939240*');

        //browser.waitForAngular();
        browser.wait(element(by.id('passwordNext')).isPresent());
        element(by.id('passwordNext')).click();

        browser.sleep(5000);

        //browser.waitForAngular();

        //browser.driver.manage().timeouts().implicitlyWait(2000);

        browser.close();
        //browser.get("http://localhost:4444/extra/LifecycleServlet?action=shutdown");

    });
});
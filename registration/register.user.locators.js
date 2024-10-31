function getUserInformation(page) {
    return {
        userSignUp: page.locator('//*[@href="/login"]'),
        userName: page.locator('input[placeholder="Name"]'),
        userEmailAddress: page.locator('input[type="email"][data-qa="signup-email"]'),
        userButton: page.locator('button[data-qa="signup-button"]'),
        userTitle: page.locator('input[id="id_gender1"]'),
        userName1: page.locator('input[type="text"][id="name"]'),
        userPassword: page.locator('input[data-qa="password"]'),
        userBirthDay: page.locator('select[name="days"]'),
        userBirthMonth: page.locator('select[data-qa="months"]'),
        userBirthYear: page.locator('select[class="form-control"][id="years"]'),
        userNewsletter: page.locator('input[type="checkbox"][name="newsletter"]'),
        userSpecialOffers: page.locator('input[id="optin"]'),
        userFirstName: page.locator('input[id="first_name"]'),
        userLastName: page.locator('input[id="last_name"]'),
        userCompany: page.locator('input[id="company"]'),
        userAddressOne: page.locator('input[id="address1"]'),
        userAddressTwo: page.locator('input[id="address2"]'),
        userCountry: page.locator('select[id="country"]'),
        userState: page.locator('input[type="text"][id="state"]'),
        userCity: page.locator('input[id="city"]'),
        userZipcode: page.locator('input[id="zipcode"]'),
        userMobileNumber: page.locator('input[id="mobile_number"]'),
        userCreateAccount: page.locator('button[data-qa="create-account"]')
    };
}

module.exports = getUserInformation;


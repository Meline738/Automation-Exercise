const getUserInformation = require('./register.user.locators');


async function register(page, userData){
    await getUserInformation(page).userSignUp.click();
    await getUserInformation(page).userName.fill(userData.name);
    await getUserInformation(page).userEmailAddress.fill(userData.email);
    await getUserInformation(page).userButton.click();

}

async function enterAccountInformation(page, accountData) {
    await getUserInformation(page).userTitle.click();
    await getUserInformation(page).userName1.fill(accountData.name);
    // await getUserInformation(page).userEmailAddress.fill(accountData.email);
    await getUserInformation(page).userPassword.fill(accountData.password);
    await getUserInformation(page).userBirthDay.selectOption(accountData.birthDay);
    await getUserInformation(page).userBirthMonth.selectOption(accountData.birthMonth);
    await getUserInformation(page).userBirthYear.selectOption(accountData.birthYear);
    await getUserInformation(page).userNewsletter.click();
    await getUserInformation(page).userSpecialOffers.click();
    await getUserInformation(page).userFirstName.fill(accountData.firstName);
    await getUserInformation(page).userLastName.fill(accountData.lastName);
    await getUserInformation(page).userCompany.fill(accountData.company);
    await getUserInformation(page).userAddressOne.fill(accountData.address1);
    await getUserInformation(page).userAddressTwo.fill(accountData.address2);
    await getUserInformation(page).userCountry.selectOption(accountData.country);
    await getUserInformation(page).userState.fill(accountData.state);
    await getUserInformation(page).userCity.fill(accountData.city);
    await getUserInformation(page).userZipcode.fill(accountData.zipcode);
    await getUserInformation(page).userMobileNumber.fill(accountData.mobileNumber);
    await getUserInformation(page).userCreateAccount.click();
}

module.exports = { register, enterAccountInformation };
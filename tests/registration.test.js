import { test, expect } from '@playwright/test';
import {register, enterAccountInformation} from '../registration/register.user.methods';

test("User Registration", async ({ page }) => {
    await page.goto('/');

    const randomNum = Math.floor(Math.random() * 10000);
    const email = `testuser${randomNum}@example.com`;

    const userData = {
        name: "Test User",
        email: email
    };


    const accountData = {
        name: "Test user",
        email: email,
        password: "password123",
        birthDay: "1",
        birthMonth: "1",
        birthYear: "1990",
        firstName: "Test",
        lastName: "User",
        company: "Test Company",
        address1: "123 Test St",
        address2: '',
        country: "United States",
        state: "California",
        city: "Los Angeles",
        zipcode: "90001",
        mobileNumber: "1234567890"
    };

    await register(page, userData);
    await page.waitForTimeout(6000);
    await enterAccountInformation(page, accountData);
    await page.waitForTimeout(4000);
    await expect(page.locator('h2[data-qa="account-created"]')).toContainText("Account Created!");
    await page.close();

});
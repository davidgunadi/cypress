/// <reference types="cypress" />

import { LoginPage } from "../page-objects/tms/loginPage"

const loginPage = new LoginPage()

describe('Login', () => {

    it('Open the Login Page', () => {
        loginPage.navigate()
      })

    it('Enter Credential and Login - Verify User is Logged In', () => {
    loginPage.enterCredentialAndLogin()
    loginPage.verifyDashboardSideMenu()
    })
})
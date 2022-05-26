export class LoginPageConstant{
    url = 'https://release.vsms.co.id/ftms/'
    credentials = {
        username: 'automation@mail.com',
        password: '123456'
    }
}
const con = new LoginPageConstant()

export class LoginPageSelector{
    css = {
        username: 'input[name=email]',
        password: '#password',
        loginButton: '#login',
        sideMenu: '#sidemenu'
    }
    xpath = {
        a: 'http://todomvc-app-for-testing.surge.sh/'
    }
}
const sel = new LoginPageSelector()

export class LoginPage {

    generateRandomNumber() {
        const random = () => Cypress._.random(1000,9999)
        const uniqueId = random()
        const uniqueName = `name${id}`
    }

    navigate() {
        cy.visit(con.url)
    }

    enterCredentialAndLogin() {
        cy.get(sel.css.username).type(con.credentials.username)
        cy.get(sel.css.password).type(con.credentials.password)
        cy.get(sel.css.loginButton).click()
    }

    verifyDashboardSideMenu() {
        cy.get(sel.css.sideMenu).should('be.visible')
    }
}
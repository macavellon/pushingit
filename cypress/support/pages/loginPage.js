export class LoginPage {
    login(usuario,contraseña){
        cy.get('#user').type(usuario);
        cy.get('#pass').type(contraseña);
        cy.get('#submitform').click()
    }
}
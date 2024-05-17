import {LoginPage} from "../support/pages/loginPage";
import {OnlineShopPage} from "../support/pages/onlineShopPage";

describe ('Page object model',  ()=> {
    //para poder usar la clase que cree en loginPage.js necesito inicializarla asignandola a una variable, esa variable tendra todo el contenido de LoginPage
    let data;
    const loginpage = new LoginPage();
    const onlineShopPage = new OnlineShopPage();
    before('Before' , ()=> {
        cy.fixture('datosFixture').then(datos => {
            data= datos;
        })
    })

    beforeEach('BeforeEach' , ()=> {
        cy.visit('');
        cy.get('#registertoggle').dbclick()
        loginpage.login(Cypress.env().usuario, Cypress.env().contraseña); //aca lo paso por los datos que tengo en el cypress.config dentro del env
        cy.get('#todolistlink').click();
        cy.get('#removeAll').click()
    })  

    it('Prueba 1', ()=> {
        cy.get('#task').type(data.tarea.tarea1);
        cy.get('#sendtask').click();
        cy.contains('p', data.tareas.tarea1)
        onlineShopPage.productsPage.agregarProducto()
    })
})
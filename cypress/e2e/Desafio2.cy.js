
describe ('Desafio2' , () => {
    let data;
    before('Before' , () => { 
        cy.fixture("datos").then (dato => {
        data = dato });
        });

    beforeEach('BeforeEach' , () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(data.login.username);
        cy.xpath('//input[@type="password"]').type(data.login.password);
        cy.get('button[type="submit"]').click();
        cy.contains('a', "To Do List");
        cy.xpath('//a[text()="To Do List"]').should('exist').click();
        cy.wait(2000);
        cy.get('#removeAll').click();
        cy.wait(3000)
})

    it('1.Ingresar las tareas' , ()=> {
        cy.xpath('//input[@id="task"]').type(data.tareas.tarea1);
        cy.get('#sendTask').click();
        cy.wait(2000)
        cy.xpath('//input[@id="task"]').type(data.tareas.tarea2);
        cy.get('#sendTask').click();
        cy.contains('p', data.tareas.tarea2);
        cy.get('#task').type(data.tareas.tarea3);
        cy.get('#sendTask').click();
        cy.contains('p', data.tareas.tarea3);
        cy.get('#task').type(data.tareas.tarea4);
        cy.get('#sendTask').click();
        cy.wait(2000)
        cy.get('#task').type(data.tareas.tarea5);
        cy.get('#sendTask').click();
        cy.wait(2000)
    });

    it('2.Verificar botones' , ()=> {
        cy.get('#all').should('exist');
        cy.get('#completed').should('exist');
        cy.get('#active').should('exist');
        cy.get('#removeAll').should('exist');
    });

    it('3.Agregar y borrar tarea2' , ()=> {
        cy.get('#task').type(data.tareas.tarea1);
        cy.get('#sendTask').click();
        cy.wait(2000)
        cy.get('#task').type(data.tareas.tarea2);
        cy.get('#sendTask').click();
        cy.wait(2000)
        cy.contains('p', data.tareas.tarea2).siblings('button').click();
        cy.get('#removeAll').click();
        cy.wait(3000)
    });

    it('4.Agregar y borrar tarea1' , ()=> {
        cy.xpath('//input[@id="task"]').type(data.tareas.tarea1);
        cy.get('#sendTask').click();
        cy.wait(2000)
        cy.get('#task').type(data.tareas.tarea2);
        cy.xpath('//button[@id="sendTask"]').click();
        cy.wait(2000)
        cy.contains('p', data.tareas.tarea1).siblings('button').click();
    });
})
/// <reference types="cypress" />

describe('Listagem', () => {
    it('Quando não houver cadastros, então a listagem deve estar vazia', () => {

        cy.fixture('listagem-vazia').then(result => {
            window.localStorage.setItem('data', JSON.stringify(result))
        })

        cy.visit("https://form-agilizei.netlify.app/listagem.html")
        
        cy.get('.table tbody tr').should('have.length', 0)
    });

    it('Quando houver um ou mais cadastros, então a listagem deve ser exibida', () => {
        
        cy.fixture('listagem-com-itens').then(result => {
            window.localStorage.setItem('data', JSON.stringify(result))
        })
        cy.visit("https://form-agilizei.netlify.app/listagem.html")

        cy.get('.table tbody tr').should('have.length', 2)
    });     
});
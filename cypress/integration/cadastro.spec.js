/// <reference types="cypress" />

var Chance = require('chance')
var chance = new Chance()

describe('Cadastro', () => {

    it ('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app/index.html')

        //gera dados aleatórios atraves da biblioteca chance
        cy.get('input[name=firstName]').type(chance.first()) 
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())

        cy.get('input[type=radio][value=n]').check()
        cy.get('input[type=checkbox]').check('Netflix')  //preenche com o value

        cy.get('select#countries').select('Hong Kong', {force:true})
        cy.get('select#years').select('1990', {force:true})
        cy.get('select#months').select('Junho', {force:true})
        cy.get('select#days').select('23', {force:true})

        cy.get('input#firstpassword').type('Jubil&u123')
        cy.get('input#secondpassword').type('Jubil&u123')
        cy.get('button#submitbtn').click()

        //verificar se a url é a da tela de listagem
        cy.url().should('contain', 'listagem') 
    })
})
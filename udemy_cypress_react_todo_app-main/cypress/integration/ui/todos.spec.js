/// <reference types="Cypress" />

describe('Todo UI testing', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should be able to toggle the status of todo', () => {
    cy.addNewTodo('First Todo');
    
    cy.get('.todo-checkbox').should('not.be.checked');
    cy.get('.todo-checkbox').check().should('be.checked');
    cy.get('.todo-checkbox').uncheck().should('not.be.checked');
  });
  
  it('should add a new todo correctly', () => {
    cy.addNewTodo('Second Todo');
    cy.get('.todo-item').last().should('contain.text', 'Second Todo');
  }); 
  
  afterEach(() => {
    cy.get('.delete-item').click({ multiple: true });
  });
});

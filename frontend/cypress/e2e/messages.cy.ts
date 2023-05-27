import {CypressIds} from "../../src/constants/cypress/CypressIds";
const {
  MESSAGE_LIST
} = CypressIds
describe('basic test demo', () => {
  it('data table visible', () => {
    cy.visit('http://localhost:3000');
    //add todo
    cy.get(`[data-cy-id=${MESSAGE_LIST}]`).should('be.visible')
  })
})

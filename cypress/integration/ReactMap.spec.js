context('Actions', () => {
  beforeEach(() => {
    cy.viewport(920, 950)
  })

  it('visit the app', () => {
    cy.visit('http://localhost:1234')
  })
  it('search Barcelo', () => {
    cy.get('input').type('Barcelo')
  })
  it('select first suggestion', () => {
    cy.get('div.pac-item').eq(0).click()
  })
  it('mark must be added', () => {
    cy.get('map').should('have.length', 1)
  })

  it('search Viladec', () => {
    cy.get('input').type('Viladec')
  })
  it('select first suggestion', () => {
    cy.get('div.pac-item').eq(0).click()
  })
  it('mark must be added', () => {
    cy.get('map').should('have.length', 2)
  })

  it('search Cornell', () => {
    cy.get('input').clear()
    cy.get('input').type('Cornell')
  })
})

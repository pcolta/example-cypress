describe('Web search engine', () => {
  context('Given I access the search engine page', () => {
    beforeEach(() => {
      cy.visit('https://pl.wikipedia.org')
    })


    context('When I type React.js to searchBox and click searchButton', () => {
      beforeEach(() => {
        cy.get('.vector-search-box-input')
            .type('React.js')
        cy.get('#searchButton')
            .click()
      })

      it('Then I see a list of results about the term I was looking for', () => {
        cy.get('.mw-page-title-main')
            .contains("React.js")
      })
    })
  })
})

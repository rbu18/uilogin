    describe('Login to Rancher web UI and verify page ', () => {
        let exampleData;
        before(() => {
            cy.visit('https://172.17.0.2/dashboard')
            cy.fixture('testdata.json').then(function (testdata) {
                exampleData = testdata
            })
    })

        it('Login and search for Rancher', () => {
            // login to rancher UI
            cy.get('#username').type(exampleData.username)
            cy.get('#password').type(exampleData.password)
            cy.get('button[type="submit"]').click()
            cy.wait(10)
            // check if the webpage loaded and has the expected Title
            cy.get('header').should('be.visible');
            cy.title().should('eq', 'Rancher')

        })

    })
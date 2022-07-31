///<reference types = 'Cypress'/>

describe('Drag And Drop', function () {
    it('Validate the drag and Drop by using ( DRAG & DROP Method )', function () {
        // ------------- We use this method only if the element have Attribute ==>>> draggable="true" -----------------
        let dataTransfer = new DataTransfer()
        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
        cy.get('#menu-fried-chicken').trigger('dragstart', { dataTransfer })
        cy.get('#plate-items').trigger('drop', { dataTransfer })
        cy.get('#menu-fried-chicken').trigger('dragend', { dataTransfer })
        cy.get('#plate-fried-chicken').should('have.text', 'Fried Chicken')
    })

    it('Validate the drag and Drop  by using ( DRAG & DROP Method )', function () {
        // ------------- We use this method only if the element have Attribute ==>>> draggable="true" -----------------
        let dataTransfer = new DataTransfer()
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.get('#column-a').trigger('dragstart', { dataTransfer })
        cy.get('#column-b').trigger('drop', { dataTransfer })
        cy.get('#column-a').trigger('dragend', { dataTransfer })
        cy.get('#column-b').should('have.text', 'A')
    })

    it('Validate the drag and Drop  by using ( Mousedown , Mousemove & Mouseup Method )', function () {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
        cy.get('#draggable').trigger('mousedown',{which : 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable').find('p').find('b').should('have.text','Dropped!')
    })
})




















//  ****************************** Traversar Method *************************************
describe('tranverse method in cypress', function () {
    // 1 .Children
    it('To get children of DOM elements, use the .children() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')                                               // .children()
        cy.get('[class="traversal-food-list"]').children().should('have.length', 11)
    })

    // 2  .Closest
    it('To get the closest ancestor DOM element, use the .closest() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')                                               // .closest()
        cy.get('[class="traversal-food-list"]').closest().should('have.text','Apple')                                  // Not running
    })

    // 3 .eq(0)
    it('To get a DOM element at a specific index, use the .eq() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')                                                // .eq()
        cy.get('[class="traversal-food-list"]').children().eq(0).should('have.text', 'Fruits')
    })

    // 4 .eq(5)
    it('To get a DOM element at a specific index, use the .eq() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')                                                // .eq()
        cy.get('[class="traversal-food-list"]').children().eq(5).should('have.text', 'Figs')
    })

    // 5 .first()
    it('To get the first DOM element within elements, use the .first() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')                                                 // .first()
        cy.get('[class="traversal-food-list"]').children().first().should('have.text', 'Fruits')
    })

    // 6 .last()
    it('To get the last DOM element within elements, use the .last() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')                                                 // .last()
        cy.get('[class="traversal-food-list"]').children().last().should('have.text', 'Lentils')
    })

    // 7 .next()
    it('To get the next sibling DOM element within elements, use the .next() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')                                                  // .next()
        cy.get('[id="veggie"]').next().should('have.text', 'Asparagus')
    })

    // 8 .nextAll()
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')                                                   // .nextAll()
        cy.get('[id="veggie"]').nextAll().should('have.length', 4)
    })

    // 9 .nextUntil()
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')                                                   // .nextUntil()
        cy.get('[id="veggie"]').nextUntil('Kidney beans').should('have.length', 4)
    })

    // 10 .not()
    it('To remove DOM element(s) from the set of elements, use the .not() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')                                                    //  .not()
        cy.get('[class="traversal-food-list"]').not().should('not.contain', 'gja')
    })


    // 11 .parent()
    it('To get parent DOM element of elements, use the .parent() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')                                                   // .parent()
        cy.get('[id="veggie"]').parent().should('have.text', 'Fruits')                                                       // Not running
    })


    // 12 .parents()
    it('To get parents DOM element of elements, use the .parents() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')                                                    //  .parents()
        cy.get('[id="veggie"]').parents().should('have.text', 'not')                                                          // Not Running
    })


    // 13 .parentsUntil()
    it('To get parents DOM element of elements until other element, use the .parentsUntil() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')                                                    //  .parentsUntil()                  
        cy.get('[id="veggie"]').parentsUntil().should('have.text', 'not')                                                     // Not Running 
    })


    // 14 .prev()
    it('To get the previous sibling DOM element within elements, use the .prev() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')                                                    //  .prev()
        cy.get('[id="veggie"]').prev().should('have.text', 'Figs')
    })


    // 15 .prevAll()
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')                                                    //  .prevAll()
        cy.get('[id="veggie"]').prevAll().should('have.text', 'FigsCherriesBlackberriesBananaAppleFruits')
    })


    // 16 .prevUntil()
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')                                                    //  .prevUntil()
        cy.get('[id="veggie"]').prevUntil('Apple').should('have.length', 6)
    })


    // 17 .siblinds()
    it('To get all sibling DOM elements of elements, use the .siblings() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')                                                    //  .siblings()
        cy.get('[id="veggie"]').siblings().should('have.length', 10)
    })

})
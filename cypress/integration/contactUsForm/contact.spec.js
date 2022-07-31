


describe('verify the contact us form along with navigation',function(){

    it('verify the contact us form',function(){
        cy.visit('https://webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('.section_header').should('have.text','CONTACT US')
        cy.get('.section_header').invoke('text').then(function(str){
            expect(str).to.eql('CONTACT US')
        })
        
        cy.get('[name="first_name"]').type('chinmay')
        cy.get('[name="last_name"]').type('deshpande')
        cy.get('[name="email"]').type('chinmaydeshpande010@gmail.com')
        cy.get('[name="message"]').type('I am learing javascript')
        cy.get('[value="SUBMIT"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })


    it('verify contact us form',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('[class="section_header"]').should('have.text','CONTACT US')
        cy.get('[class="section_header"]').invoke('text').then(function(str){
            expect(str).to.eql('CONTACT US')
        })

        cy.get('[name="first_name"]').type('chinmay')
        cy.get('[name="last_name"]').type('deshpande')
        cy.get('[name="email"]').type('chinmaydeshpande010@gmail.com')
        cy.get('[name="message"]').type('I am learning Javascript')
        cy.get('[value="RESET"]').click()
        cy.get('[name="first_name"]').should('have.text','')
        cy.get('[name="last_name"]').should('have.text','')
        cy.get('[name="email"]').should('have.text','')
        cy.get('[name="message"]').should('have.text','')
    })

    it('verify contact us form',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('[class="section_header"]').should('have.text','CONTACT US')
        cy.get('[class="section_header"]').invoke('text').then(function(str){
            expect(str).to.eql('CONTACT US')
        })

        cy.get('[name="first_name"]').type('chinmay')
        cy.get('[name="last_name"]').type('deshpande')
        cy.get('[name="email"]').type('chinmaydeshpande010gmail.com')
        cy.get('[name="message"]').type('I am learning Javascript')
        cy.get('[value="SUBMIT"]').click()
        cy.get('html').should('contain','Invalid')   
    })

    it('verify contact us form',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('[id="contact-us"]').invoke('removeAttr','target').click()
        cy.get('.section_header').should('have.text','CONTACT US')
        cy.get('.section_header').invoke('text').then(function(str){
            expect(str).to.eql('CONTACT US')
        })
        cy.get('[name="first_name"]').type('chinmay')
        cy.get('[name="last_name"]').type('deshpande')
        cy.get('[name="email"]').type('chinmaydeshpande010@gmail.com')
        cy.get('[type="submit"]').click()
        cy.get('html').should('contain',' Error: all fields are required')
    })
})



















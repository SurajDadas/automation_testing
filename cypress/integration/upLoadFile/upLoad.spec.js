///<reference types="Cypress"/>


/*  for this upLoad File 

    We have to install plugins 
    1. run commanad in terminal                              ===>       npm install --save-dev cypress-file-upload
    2. add  plugin  to cypress/support/commands.js           ===>       import 'cypress-file-upload';
    For more information refer                               ===>      https://www.npmjs.com/package/cypress-file-upload
    
    To select element for attachFile always use --- input  tag -----
*/


describe('file Upload from UI',function(){
    let fileName  = 'karn.jpg'
    let fileName2 = 'contactus.json'
    it('verify the basic file upload and validate Example No 1',function(){
        cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myFile').attachFile(fileName)
        cy.get('#submit-button').click()
        cy.url().should('contain',fileName)
    })

    it('verify the basic file upload and validate Example No 2',function(){
        cy.visit('http://automationpractice.com/index.php?controller=contact%27')
        cy.get('#contact-link').click()
        cy.contains('send a message').should('be.visible')
        cy.get('#fileUpload').attachFile(fileName)
        cy.get('#uniform-fileUpload').invoke('text').should('contain',fileName)
    })


    it('verify the basic file upload and validate Example No 3',function(){
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        cy.get('#file').attachFile(fileName)
        cy.get('.box__success').should('contain','Done! ')
    })


    it('verify the basic file upload and validate Example No 4',function(){
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(fileName)
        cy.get('#fileList').children().should('have.length',1)
    })
                     // To Attach Multiple files
    it('verify the basic file upload and validate Example No 4',function(){
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile([fileName,fileName2])
        cy.get('#fileList').children().should('have.length.greaterThan',1)
    })


})





























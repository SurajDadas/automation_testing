/// <reference types = "cypress"/>                           

const datajson = require('../../fixtures/postuser.json')     //  Get Json file from Fixture method 2

describe('POST API user test', function () {

    let accessToken = "56f28721e6d50c23fe81eaf2d2b7d5fc3b0f69bd6f409b756d4f2c196f24e829"  // define token and in future use variable instead of token
    let randomText = ""                                     // Make random Variables for making email variable
    let randomEmail = ""

    it("POST API user test", function () {

        let pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"        // for making random variables use this type of pattern
        randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));   // formula for making random variable
        randomEmail = randomText + "@gmail.com"

        cy.fixture('postuser').then(function(payload){                             // Get Json file from Fixtures method 3


            cy.request({
                method: "POST",                                // Request Method
                url: "https://gorest.co.in/public/v2/users",   // Request URL
                headers: {                                     // Request Headers
                    "Authorization": "Bearer " + accessToken
                },
                body: {                                        // Body Of user tobe created
                    "name": payload.name,
                    "gender": payload.gender,
                    "email": randomEmail,                      // instead of this use hard-coded values method 1
                    "status": payload.status
                }
            }).then(function (res) {                         
                cy.log(JSON.stringify(res))                   // to show/print data in JSON format
                expect(res.status).to.eqls(201)
                expect(res.body.name).to.eqls(payload.name)   // validate the properties and parameters
                expect(res.body.gender).to.eqls(payload.gender)
                expect(res.body.status).to.eqls(payload.status)
                expect(res.body).has.property("email", randomEmail)
                expect(res.body).has.property("name", payload.name)
                expect(res.body).has.property("gender", payload.gender)
                expect(res.body).has.property("status", payload.status)



            })


        })


    })








})



























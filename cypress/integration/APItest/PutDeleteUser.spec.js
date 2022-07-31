/// <reference types ="Cypress"/>

describe('PUT API User Test', function () {
    let accessToken = '56f28721e6d50c23fe81eaf2d2b7d5fc3b0f69bd6f409b756d4f2c196f24e829'

    let randomText = ''
    let randomEmail = ''
    let pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
    randomEmail = `${randomText}ce@gmail.com`


    it('POST API User Test', function () {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": "Shree Kadam",
                "email": randomEmail,
                "gender": "male",
                "status": "active"
            }
        }).then(function (response) {
            expect(response.status).to.eql(201)
            expect(response.body.name).to.eql("Shree Kadam")
            expect(response.body.email).to.eql(randomEmail)
            expect(response.body.gender).to.eql("male")
            expect(response.body.status).to.eql("active")
            cy.log(response.body.id)
        }).then(function (res) {
            const Id = res.body.id
            //cy.log(Id)
            return Id
        })
            .then(function (Id) {
                // cy.log(Id)
                cy.request({
                    method: 'GET',
                    url: `https://gorest.co.in/public/v2/users/${Id}`,
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    }
                }).then(function (response) {
                    expect(response.status).to.eql(200)
                    expect(response.body.name).to.eql("Shree Kadam")
                    expect(response.body.email).to.eql(randomEmail)
                    expect(response.body.gender).to.eql("male")
                    expect(response.body.status).to.eql("active")
                    cy.log(response.body)
                }).then(function (resp) {
                    const ID = resp.body.id
                    return ID
                }).then(function (ID) {
                    cy.request({
                        method: 'PUT',
                        url: `https://gorest.co.in/public/v2/users/${ID}`,
                        headers: {
                            'Authorization': 'Bearer ' + accessToken
                        },
                        body: {
                            "name": "Sham Jagtap",
                            "email": `Sham${randomEmail}`,
                            "gender": "male",
                            "status": "active"
                        }
                    })
                        .then(function (respo) {
                            expect(respo.status).to.eql(200)
                            expect(respo.body.name).to.eql("Sham Jagtap")
                            expect(respo.body.email).to.eql(`Sham${randomEmail}`)
                            expect(respo.body.gender).to.eql("male")
                            expect(respo.body.status).to.eql("active")
                            cy.log(respo.body)
                        }).then(function (response1) {
                            const userID = response1.body.id
                            return userID
                        }).then(function (userID) {
                            cy.request({
                                method: 'DELETE',
                                url: `https://gorest.co.in/public/v2/users/${userID}`,
                                headers: {
                                    'Authorization': 'Bearer ' + accessToken
                                }
                            }).then(function (response2) {
                                expect(response2.status).to.eql(204)
                            })
                        })


                })

            })

    })

})

























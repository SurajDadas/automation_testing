///<reference types ="cypress"/>

describe('Verify Request Chaining', function () {

    let accessToken = "56f28721e6d50c23fe81eaf2d2b7d5fc3b0f69bd6f409b756d4f2c196f24e829";
    let randomText = "";
    let randomEmail = "";

    it('Verify Request chaining', function () {

        let pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
        randomEmail = randomText + "@gmail.com"

        cy.fixture('postuser').then(function (payload) {


            cy.request({
                method: "POST",
                url: "https://gorest.co.in/public/v2/users",
                headers: {
                    "Authorization": "Bearer " + accessToken
                },
                body: {
                    "name": payload.name,
                    "gender": payload.gender,
                    "email": randomEmail,
                    "status": payload.status
                }
            }).then(function (res) {
                expect(res.status).to.eqls(201)
                expect(res.body).has.property('name', payload.name)
                expect(res.body).has.property('email', randomEmail)
            }).then(function (res) {
                const dataID = res.body.id
                cy.log('The ID is : ' + dataID)

                cy.request({
                    method: "GET",
                    url: "https://gorest.co.in/public/v2/users/" + dataID,
                    headers: {
                        "Authorization": "Bearer " + accessToken
                    }
                }).then(function (resp) {
                    expect(resp.status).to.eqls(200)
                    expect(resp.body).has.property('name', payload.name)
                    expect(resp.body).has.property('email', randomEmail)
                })


            })




        })

    })




})






























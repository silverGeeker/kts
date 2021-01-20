const express = require('express')
const router = express.Router()
const contactTemplateCopy = require('../models/contactModels')

router.post('/contact', (request, response) => {
    /*console.log(request.body,"rigdsjfidfijht")*/
    const contactUser = new contactTemplateCopy({
        fullName:request.body.fullName,
        email:request.body.email,
        message:request.body.message
    })
    contactUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router
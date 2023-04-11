const User = require('../Models/user')

class UserController{
    
    static async registerUser(req, res, next) {
        try {
            const user = new User({name: req.body.name, email: req.body.email, password: req.body.password, terms: req.body.terms})
            await user.save()
        } catch(e) {
            return next(e)
        }
        return res.json({success: true})
    }

    static async authenticateUser(req, res, next) {
        console.log(req.body.email, req.body.password)
        try {
            
            if (req.body.email === 'super@gmail.com' && req.body.password === 'Super123$') {
                return res.json({success: true, role: 'admin'})
            }

            const user = await User.findOne({email: req.body.email, password: req.body.password})
            if (user === null) {
                return res.json({success: false})
            }

            return res.json({success: true, user: user, role: 'user'})

        } catch(e) {
            return next(e)
        }
    }
}

module.exports = UserController
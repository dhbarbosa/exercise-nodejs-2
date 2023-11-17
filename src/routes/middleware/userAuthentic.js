const authentication = (req, res, next) => {
    if (req.session.username) {
        console.log(req.session.username)
        return next()
    }
    req.session.returnTo = req.originalUrl
    res.redirect('/')
}

export default authentication

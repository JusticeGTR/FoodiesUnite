const withAuth = (req, res, next) => {
    // If user not logged in, redirect to login page
    if (!req.session.logged_in) {
        res.redirect('/login');
    }
    else {
        next();
    }
};

module.exports = withAuth;
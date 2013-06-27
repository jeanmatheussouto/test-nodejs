
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.render('users', { title: 'Users', jean: "Jean Matheus" });
};
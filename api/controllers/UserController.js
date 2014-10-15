/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  assignToGroup: function (req, res) {
    var userId = req.params.id;
    var groupId = req.param('group');
    User.findOne(userId)
      .exec(function (err, user) {
        sails.log(user);
        sails.log(groupId);
        user.groups.add(groupId);
        user.save(function (err) {
          sails.log("ERROR", err);
        })
      });
    res.json(true);
  }

};


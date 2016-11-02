var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];


module.exports = {
  login: function(req, res) {
    var userName = req.body.name;
    var userPass = req.body.password;
    var currentUser = false;

    for (var i = 0; i < users.length; i++) {
      if (users[i].name === userName && users[i].password === userPass) {
        users[i] = req.session.currentUser;
        currentUser = true;
      }
    }
    if (currentUser) {
      res.send({userFound: true});
    } else {
      res.send({userFound: false});
    }
  }
}

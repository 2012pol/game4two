OpenGames = new Mongo.Collection("opengames");
Games = new Mongo.Collection("games");
Scores = new Mongo.Collection("scores");


Games.allow({
  insert: function (arg1) {
    return true;
  },

  update: function (userId, party, fields, modifier) {
    return userId && party.owner === userId;
  },

  remove: function (userId, party) {
    return userId && party.owner === userId;
  }

});


Scores.allow({
  insert: function (arg1) {
    return true;
  },

  update: function (ag1) {
    return true;
  },

  remove: function (userId, party) {
    return userId && party.owner === userId;
  }

});


OpenGames.allow({
  insert: function (arg1) {
    return true;
  },

  update: function (ag1) {
    return true;
  },

  remove: function (arg1) {
    return true;
  }

});


module.exports = {
  getData: function(subredditName) {
    return fetch('https://bobrbot.azurewebsites.net/api/ScrapeReddit?code=TatsfZk3o6fK46jlYPFeILieULa7idTq6WgjLX5wtrN6X75ExavvWA==&subreddit=' + subredditName, {mode: 'cors'});
  }
}


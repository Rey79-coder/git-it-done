window.alert("This is an alert! JavaScript is running!");

var getUserRepos = function() {
  fetch("https://api.github.com/users/octocat/repos");
  };
  
  getUserRepos();
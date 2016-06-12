app.factory("suggestions", [function() {
  var demoSuggestions = {
    posts: [
      {
        title: 'Free pizza at club meetings',
        upvotes: 15,
        comments: [{
            body: "I love it!",
            upvotes: 3
          },
          {
            body: "Not bad",
            upvotes: 5
          }],
      },
      {
        title: 'End all club emails with Laffy Taffy jokes',
        upvotes: 5,
        comments: [{
            body: "Seen better",
            upvotes: 3
          }],
      },
      {
        title: 'Retrofit water fountain with Gatorade',
        upvotes: 17,
        comments: [{
            body: "DRINK DRINK!!",
            upvotes: 6
          },
          {
            body: "BEEN THERE DONE THAT",
            upvotes: 2
          }],
      },
      {
        title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
        upvotes: 7,
        comments: [{
            body: "Whatevs",
            upvotes: 2
          },
          {
            body: "I don't care",
            upvotes: 3
          },
          {
            body: "U stupid",
            upvotes: 1
          }],
      },
    ]
  };
  return demoSuggestions;
}]);
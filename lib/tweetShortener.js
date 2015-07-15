'use strict';

var subs = {
  'hello': 'hi',
  'to': '2',
  'two': '2',
  'too': '2',
  'for': '4',
  'four': '4',
  'become': '4',
  'be': 'b',
  'you': 'u',
  'at': '@',
  'and': '&'
};

var tweetShortener = {
  wordSubstituter: function(tweet){
    var tweetArr = [], word_normalized;

    tweet.split(" ").forEach(function(word, i) {
      word_normalized = word.toLowerCase();
      if (subs[word_normalized] !== undefined) {
        tweetArr[i] = subs[word_normalized];
      }
      else {
        tweetArr[i] = word;
      }
    });
    return tweetArr.join(" ");
  },
  bulkShortener: function(tweets){
    for (var i = 0; i < tweets.length; i++) {
      tweets[i] = this.wordSubstituter(tweets[i]);
    }
    debugger;
    return tweets;
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return this.wordSubstituter(tweet);
    }
    else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    var shortened_tweet = this.selectiveShortener(tweet);
    if (shortened_tweet.length > 140) {
      return shortened_tweet.slice(0, 137) + "...";
    }
    else {
      return shortened_tweet;
    }
  },
};

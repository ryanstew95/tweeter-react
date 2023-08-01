import React from 'react';

const Tweet = () => {
  const tweet = {
    avatar: "https://i.imgur.com/73hZDYK.png",
    firstName: "Isaac",
    lastName: "Newton",
    handle: "@SirIsaac",
    body: "If I have seen further it is by standing on the shoulders of giants",
    age: "10 days ago"
  };

  return (
    <article>
      <img src={tweet.avatar} alt="Avatar" />
      <div>
        <span>{tweet.firstName} {tweet.lastName}</span>
        <span>{tweet.handle}</span>
        <p>{tweet.body}</p>
        <span>{tweet.age}</span>
      </div>
    </article>
  );
};

export default Tweet;

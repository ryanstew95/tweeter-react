import React from 'react'; //optional

const formMessage = "What are you humming about?"

const handleSubmit = (event) => {

  event.preventDefault();
 
};


function TweetForm(){
  return (
    <section className="newtweet">
    <form method="post" action="/tweets" className="newtweet__form" onSubmit={handleSubmit}>
      <textarea className="form__textarea" name="text" placeholder={formMessage}></textarea>
      <input type="submit" value="Tweet" className="form__input"/>
      <span className="form__counter">140</span>
    </form>
  </section>
  );
}

export default TweetForm;
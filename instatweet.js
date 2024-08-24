async function getInstaPost() {
    try {
      const Response = await fetch(
        "https://p2pclouds.up.railway.app/v1/learn/get_instagram_posts",
        { method: "GET" }
      );
  
      const Instapost = await Response.json();
      console.log(Instapost);
  
      const maindiv = document.body.querySelector(".posts");
  
      for (let postItem of Instapost["tweets"]) {
        console.log(postItem);
        const postdiv = document.createElement("div");
        postdiv.innerHTML = `
    <p>${postItem["tweetId"]}</p>
    <p>${postItem["tweetDescription"]}</p>
    <img src=${postItem["tweetImage"]} />`;
        maindiv.appendChild(postdiv);
      }
    } catch (err) {
      console.log(err);
    }
  }
  
  async function UpdateInsta() {
    try {
      const tweetid = document.querySelector(".textid").value;
      const tweetimage = document.querySelector(".textimage").value;
      const tweetdescription = document.querySelector(".textdescription").value;
  
      const response = await fetch(
        "https://p2pclouds.up.railway.app/v1/learn/tweet/update",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            tweetId: tweetid,
            tweetImage: tweetimage,
            tweetDescription: tweetdescription,
          }),
        }
      );
      const Instapost = await response.json();
      console.log(Instapost);
      alert("Tweet Updated Successfully!");
    } catch (err) {
      console.log(err);
    }
  }
  
  async function SaveInsta() {
    try {
      const tweetid = document.querySelector(".textid").value;
      const tweetimage = document.querySelector(".textimage").value;
      const tweetdescription = document.querySelector(".textdescription").value;
  
      const response = await fetch(
        "https://p2pclouds.up.railway.app/v1/learn/tweet/save",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            tweetImage: tweetimage,
            tweetDescription: tweetdescription,
          }),
        }
      );
      const Instapost = await response.json();
      console.log(Instapost);
      alert("Tweet Saved Successfully");
    } catch (err) {
      console.log(err);
    }
  }
  
  async function deleteTweet() {
    try {
      const tweetId = document.querySelector(".textid").value;
  
      const res = await fetch(
        "https://p2pclouds.up.railway.app/v1/learn/tweet/delete",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tweetId: tweetId,
          }),
        }
      );
      const response = await res.json();
      console.log(response);
      alert("Tweet Deleted Successfully");
    } catch (err) {
      console.log(err);
    }
  }
  
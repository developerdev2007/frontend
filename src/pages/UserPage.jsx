import React from "react";
import UserHeader from "../componenets/UserHeader";
import UserPost from "../componenets/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={323}
        postImg="/post1.png"
        postTitle="
        Lets
        talk
        about
        MERN
        stack"
      />
      <UserPost
        likes={534}
        replies={423}
        postImg="/post2.png"
        postTitle="
        Lets
        talk
        about
        spacex"
      />
      <UserPost
        likes={2323}
        replies={123}
        postImg="/post3.png"
        postTitle="
        Lets
        talk
        about
        shit"
      />
    </>
  );
};

export default UserPage;

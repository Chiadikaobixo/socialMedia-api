# Overview
This API performs basic CRUD operation and more functionality of a Social Media web-application which includes :

Create user, post, conversation, message
Read user, post, conversation, message, followers
Update user, post
Delete user, post
Follow and unfollow user
Logout a singleUser and allUser
This API also implements Authentication and Authorization of users and admin.

Try it out For a demo check this link https://chiadi-socialmedia-api.herokuapp.com

# create user
Make a post request to :
/users/signup Input the following data:
username
email
password

# Login user
Make a post request to :
/users/login Input the following data:
email
password

# Read user
Make a get request to:
    *By userId*
/user?userId=:userId
    *By username*
/user?username=:username

# Read All users
Make a get request to:
/allUsers

# Update user
Make a get request to:
/users/:userId Input the following data:
name(optional)
email(optional)
password(optional)
city(optional)
from(optional)
relationship(optional)

# delete user
Make a delete request to :
/users/:userId

# create post
Make a post request to :
/users/posts Input the following data:
userId
desc

# Read post
Make a get request to:
/posts/:postId

# Read your timelinepost
Make a get request to:
/posts/timeline/:userId

# delete post
Make a delete request to :
/posts/:postId
userId

# create conversation
Make a post request to :
/conversations Input the following data:
senderId
recieverId

# read conversation
Make a get request to:
/conversations/:userId

# read conversation between two users
Make a get request to:
/find/:firstUserId/:secondUserId

# create message
Make a post request to :
/messages Input the following data:
conversationId
sender
text

# read message
/messages/:conversationId

# follow user
make a put request to:
/users/:userId/follow Input the following data:
userId

# unFollow user
make a put request to:
/users/:userId/unfollow Input the following data:
userId
# Authentication VS Authorization

Authentication means verification about who are you. Therefore, we have to login in the system and needs to be verify our identification.

Once we have logged in we can perform some actions. But the point is in the application what are the permission we have to do called Authorization. To be more precise Authorization states does a user is eligible to do the action or not?

Ex:- In a whatsapp group there could be lots of members but only few people are admins. The question is do a regular member who not actually an admin does the user perform the delete operation of the whatsapp group?

The answe is _no_. Because a regular member does not have that kind of permission.

Hence,

- Authentication ===> Initial verification
- Authorization ===> Authentication is required + Permissions

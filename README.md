# My Address Book

My address book is a personalized, interactive contact list to keep your contacts organized.

## How to Install and Run

This application runs using a json server. You can run the application by first running the json-server using the command 'json-server --watch db.json' in terminal, followed by "npm start" in a separate terminal window.

## Project Use

To use this application, contacts must first be loaded into the db.json file. Then, you can use the links located in the navigation bar to access contacts more quickly (such as by group, or by favorites). Favorite contacts show up in green, and all contacts have a hyperlink that will take you to the groups page when clicked. You also have the option to add a new contact by clicking on the "Add Contact" link in the navigation bar and filling in the requested contact information.

## Future Development

For ongoing development of this app I plan to implement the following improvements:
* Add a search functionality to pull up a specific contact, either by name or by nickname
* Allow the user to create a new group title rather than placing contacts that don't fit into an existing category in "other"
* Include input fields for additional contact information such as address and e-mail address
* Include the option to delete contacts

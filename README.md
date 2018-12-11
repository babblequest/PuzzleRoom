# PuzzleRoom
Escape room or puzzle room single page app

This is a single webpage app created for the Cornel Elementary Advanced math group. 

Features:
* Simple setup using single method
* Validation by regular expression
* Immediate feedback for each sub puzzle solved
* Seperate actions for failure and success
* Form caching disabled by appending random strings to form field names
* Large countdown timer

Dependencies:
* flipclock.js
* Bootstrap-validator

![Sample Image](images/Sample.jpg "Sample Page")

Custom fields are added in index.js with method addField
*  randomString is generated for you in the code
*  addField(fieldName, label, prompt, regex, errorMessage, randomString)
  
Example:
*  addField("location", "Location:", "Please provide location",
            /^[ ]*greenland[ ]*$/i, "Wrong Location", randomString);
            
Regular Expression Tutorial:
*    ^ - means start of string
*    [ ]* - means zero of more spaces
*    $ - means end of string
*    i - means letter case is not important
*    / - delimites the regular expression

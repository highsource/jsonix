Jsonix Browserify Example
=========================

Usage:

* Run `npm install` - installs the scripts and generates XML/JSON mappings in the the `PO.js` file.
* Run `browserify main.js -o bundle.js` - generates the `bundle.js` file.
* Open `index.html` - includes the `bundle.js` script to unmarshal the `po.xml` file and set values in HTML elements.

*Note for the Chrome users.*

This example, when run locally, accesses a local xml file.
This does not work in Chrome, you have to start Chrome with a special option:

````
chrome --allow-file-access-from-files
````

This is not a bug in Jsonix, this is a [feature](https://code.google.com/p/chromium/issues/detail?id=40787) in Chrome.
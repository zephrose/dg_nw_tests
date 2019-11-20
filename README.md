# DG_NW_TESTS

This sample uses Nightwatchjs framework. The framework uses the Selenium Standalone Server, Chromedriver and Gekodriver(Firefox) to drive the browsers tests. Mocha/Chai test libraries are used within Nightwatch to handle test assertion and verification. 

This Framework is highly extendable and customizable.

Installation instructions below...

## How to run : 
### Selenium Jar and Chromedriver executable
* Both of these packages are already stored within this project.

### Global Install
* Java
  * Ensure you have the latest Java JDK installed on the test machine, be it local or remote.
  * http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

* Nodejs/Npm
  * Ensure you have the latest NodeJS binary installed on the test machine, be it local or remote.
  * https://nodejs.org/en/download/ - Download OS relevant binary

* Nightwatch
  * Once NodeJS is installed, NPM can be used to install the nightwatch package globally.
  * http://nightwatchjs.org/gettingstarted for reference
  * `npm install -g nightwatch`

* Browsers
  * Ensure you have the latest Chrome and Firefox browser. Version 66+ supported by this projects chromedriver.exe.
  * https://www.google.com/chrome/
  * https://www.mozilla.org/en-US/firefox/new/

### Execution
* From the root directory, where 'nightwatch.json'/'nightwatch.conf.js' are located, execute the following command
  * `node nightwatch tests/smoke/`

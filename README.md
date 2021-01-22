# Tutorial: Using Unit Testing, ESLint, Github with Travis and Heroku for CI/CD
## (README IN PROGRESS, INSTRUCTIONS MAY NOT BE CORRECT)
## (Updated 2020)

This repository demonstrates the following:

* Syntax Checking using eslint
* Unit testing with Mocha / Chai
* Using Github for version control
* Using Travis for Continuous Integration / Continuous Delivery (CI/CD)
* Using Heroku with Travis for Continuous Deployment (CD)

## Requirements
* Node 14.x
* NPM / NPX 6.x

## Node Libraries used
* Dotenv
* Mocha
* Chai
* Express
* ESLint
* ESlint Plugin Support
* ESLint AirBnB Support



## Install with NPM -i
* dotenv
* mocha
* chai
* express

## Install with NPM --save-dev
* eslint
* eslint rules (airbnb)

## Windows Users
* You will be required to install Ruby (Version 2.6.3 or higher) to
  install the Travis CLI along with Ruby GEMS - https://rubyinstaller.org/

## Travis CLI

https://github.com/travis-ci/travis.rb#installation

You may need to install the Travis CLI with administrator permissions,
whether you are a MAC user or a WIN user.

* Mac Users -

`gem install travis --no-document --user-install`

or (if you need admin access)

`sudo su ` then enter your mac password, then

`gem install travis --no-document --user-install`

then `exit` if there are no errors.


* Windows Users -

`gem install travis` should be good, as long as you are logged inan
_administrator_ for your machine, and perhaps your terminal or git bash
shell.

For Mac or Windows, you will need to make sure that Ruby GEMS is added
to your PATH environment variable

* MAC - read "I INSTALLED GEMS WITH --user-install AND THEIR COMMANDS ARE
NOT AVAILABLE" at https://guides.rubygems.org/faqs/
* WIN - when using the Ruby Installer, if asked for checking 'Add Ruby
  executables to your path' then CHECK THAT OPTION. in fact, check all
  the options (Install TCL/TK Support and associate .rb and .rbw files
  with the the ruby install)


additional sources:
* https://stackify.com/install-ruby-on-windows-everything-you-need-to-get-going/


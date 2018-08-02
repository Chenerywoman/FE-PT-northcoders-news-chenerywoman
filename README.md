## Northcoders News

https://chenerywoman-nc-news-frontend.herokuapp.com/

Northcoders News ('NCNews')is a social news aggregation, web content rating, and discussion website.  

NCNews has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article. Comments can also be up or down voted. A user can add comments and remove any comments which they have added.

The frontend of NCNews uses javascript, React and CSS. It is a single page application with various views which fetch data from the Northcoders News backend /api endpoints. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

1.  Node 

2.  NPM (Node Package Manager)

### Installing

Below is a step by step guide on how to get the app running in a development environment.

#### 1. Download the project from Github
1. On the command line, from the folder where you wish to store the repository, enter:

```bash
git clone https://NEED url
```

2. Fork the project from Github by clicking on the Fork button on the top right-hand side of the screen.

#### 2. Install node 

1. To check if you already have node installed, run this command in your terminal:

```bash 
node -v
```

2. If node is not installed, follow the instructions at https://nodejs.org/en/

#### 3. Use NPM

1. Npm is distributed with Node.js- which means that when you download Node.js, you automatically get npm installed on your computer.

2. To confirm you have npm installed, run the following command in your terminal:

```bash 
npm -v
```

#### 5. Run NPM install

1. To install all the necessary npm packages to run the project, run this command in your terminal from the root of your project:

```bash 
npm install
```

#### 6. Set up a .env file

1. Set up a .env file in the root of the project

```bash 
touch .env
```
2. Add the following code to the .env file:

**either** (if using the hosted NCNews backend )
```js
REACT_APP_API_URL=https://chenerywoman-northcoders-news.herokuapp.com/api
```

**or** (if using the Spelling Bee backend project on your local machine)
```js
module.exports = 'http://localhost:3000/api';
```

#### 7. Use NPM scripts to run the project

The following script (from the package.json scripts section) can be used in the command line to run the project:

  * To launch the project in a web browser: 
  ```bash 
  npm start
  ```

  * In the browser:
  ```bash 
  http://localhost:3001 
  ```

## Built With

Create React App (https://github.com/facebookincubator/create-react-app)

Node: version 9.9.0

NPM: 5.6.0

## Authors
Rachel Chenery 
@Chenerywoman

## Acknowledgments
Massive thanks to my tutors @northcoders, Jac Darby @JacDarby and Anat Dean @AnatDean.

# Basic-React-Setup
Boilerplate class-based react started using babel and webpack and served through a super basic express server. 
This is designed to help people, like myself, who were/are new to web programming and react but who don't 
want all the complications of create-react-app

To Use.
clone the repo, run 'npm i' in a terminal inside the repo directory to install all the project dependencies. 
Once it has finished create a file called ".babelrc" and add the following code inside. 
```
{
	"presets": ["@babel/preset-env", "@babel/preset-react"],
	"plugins": ["@babel/plugin-transform-async-to-generator", "@babel/plugin-transform-regenerator"]
}
```

Now run 'npm run build' to trigger webpack and babel to do their thing. The Frontend/src folder now have index.html file and main.js file (the output from babel and webpack)
(note that only the main.js file will change, the html file will not be touched).
You can now start the express server using 'npm start' click on the link in the terminal output. You should 
see hello world displayed on the webpack.

side-note: once you have started the server you do not need to restart it everytime you rebuild a simple refresh 
of the webpage will re-request the html/js from the server.


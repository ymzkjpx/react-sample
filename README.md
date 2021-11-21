# What's this?
The purpose of this project are...
- Training React.
- Lean how to build a minimal React working environment.
- Lean how to use a props.
- Understanding the difference between ClassComponents and FunctionalComponents

# Setup

```
$ cd workingDir
$ npx create-react-app react-sample
$ cd react-sample
$ npm start
```
Open a browser and check `localhost:3000`

When you run the command, a small server will run on your local PC. 


#### How do I terminate it?
To quit the server, you can press Ctrl + c on the shell to quit it.


# Shape up
Cut the configuration of this project down to the minimum settings necessary for it work.
1. remove other files. 
1. Describe the contents of public/index.html as follows.


#### Remove other files.
```
$ rm -fr README.md
$ rm -fr src/logo.svg src/reportWebVitals.js src/setupTests.js src/App.test.js src/App.css src/App.js 
$ rm -fr public/*
$ touch public/index.html
```

#### Describe the contents of public/index.html as follows.
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>React App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

##### File structure after processing
When the work is complate, you should have the following status.
```
$ tree -I 'node_modules'
.
├── package.json
├── package-lock.json
├── public
│   └── index.html
└── src
    ├── index.css
    └── index.js
```

# After that...
If you have the above configuration, you are done.
The minimum required operating environment is now in place. Start learning your React.
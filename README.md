#Large Scale Web Apps

This is a talk I gave at Strasbourg-Web meetup: http://www.meetup.com/Strasbourg-Web/

The presentation is located in the keynote folder. 
If you don't have keynote installed, you can also view the HTML export of the presentation by launching the index.html that is located in the same folder.
It's also available online at this address: http://podefr.github.com/presentation-large-scale-apps

##How to run the gruntfile?

Given you have node.js and npm installed:

```bash
npm install -g grunt
```

To sequentially execute all tasks:

```bash
grunt
```

The gruntfile is composed of the following subtasks:

```bash
grunt lint #runs JsHint on the src/ folder
grunt test #runs the tests in the test/ folder with JsTestDriver
grunt jsDoc #generates the JsDoc documentation
grunt concat #concatenates all files into dist/MyApp.js
grunt min #minifies the dist/MyApp.js file into dist/MyApp.min.js
```

###How to execute the JsTestDriver task:

First, you have to launch the web server:

```bash
java -jar tools/JsTestDriver/JsTestDriver-1.3.4.b.jar --port 4224 &
```

Then, point the browsers you want to test to:

```bash
http://localhost:4224
```

And click on "capture this browser".

And finallly:

```bash
grunt test
```

##Questions/Comments

You can use GitHub's issues!


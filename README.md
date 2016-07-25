![alt text](https://github.com/idea42co/images/blob/master/FullLogo-Colored-2000x779.jpg "Logo Title Text 1")

#Installation

```sh
npm install quick-survey-generator
```
Then include the following files:
```html
	<script type="text/javascript" src = "node_modules/quick-survey-directive/dist/quick-survey.js"></script>
	<link rel="stylesheet" type="text/css" href="node_modules/quick-survey-directive/dist/main.css">
```

#Directive Survey
An animated survey built with an Angular directive. Quicky build a survey with cool animations and reponsiveness.

##Usage
- To use just include `quickSurveyDirective` as a dependency in your angular module
```javascript
	angular.module('Example', ['quickSurveyDirective'])
```

##Example UI
![alt text](https://github.com/idea42co/images/blob/master/Screen%20Shot%202016-07-21%20at%203.50.17%20PM.png)

- Define all questions within your controller in an array in this structure
```javascript
    $scope.questionSet = [
        {Q: "test1", A: ""},
        {Q: "test2", A: ""},
        {Q: "test3", A: ""},
        {Q: "Is Jon the man?", A: ""}
    ]
```

- Initiate the survey by placing this custom html template:
```html
    <survey ng-attr-questions = "questionSet"></survey>
```



##Saving to a database
- To save to a database simply set up a $watch on the $scope.questionSet and save to the database 
everytime the answer is updated since it is two way bound. This is also a good tool to use so you don't lose information
on a page refresh.


##Custom Configuration
- All styling custom configuration can be found in the `main.css`file in the app folder

##Testing
- While this project was created in a short amount of time frame. Tests haven't fully been written yet. However, I hope to have them done in the next week or so!


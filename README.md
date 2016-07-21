![alt text](https://github.com/idea42co/images/blob/master/FullLogo-Colored-2000x779.jpg "Logo Title Text 1")

#Directive Survey
An animated survey built with an Angular directive. Quicky build a survey with cool animations and reponsiveness.

##Usage
- To use just include 'quickSurveyGenerator' as a dependency in your angualr module

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
    <survey ng-attr-questions = "questionSet></survey>
```



##Saving to a database
- To save to a databas simply set up a $watch on the $scope.questionSet and save to the database 
everytime the answer is updated since it is two way bound.


##Custom Configuration
-All styling custom configuration can be found in the main.css file in the app folder


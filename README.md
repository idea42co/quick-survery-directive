![alt text](https://github.com/idea42co/images/blob/master/FullLogo-Colored-2000x779.jpg "Logo Title Text 1")

#Directive Survey
An animated survey built with an Angular directive. Quicky build a survey with cool animations and reponsiveness.

##Usage
- Define all questions in the array
```javascript
    $scope.qSet = [];
```
and seperate them by commas

- Initiate the survey by placing this custom html template:
```html
    <survey></survey>
```

- All answers to the survey will be stored in the object
```javascript
    $scope.questions = {};
```
along with the question. 

- Here's an example of the data structure the answers are stored in.
```javascript
    {
    "1":{Q:"example question", A: "test"},
    "2":{Q:"another example", A: "testing"},
    "3":{Q:"You understand now?", A: "Yes!"}
    }
```




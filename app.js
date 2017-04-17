(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.inputText = "input lunch list";
  $scope.returnMessage = "";

  $scope.checkInput = function() {
    var returnMessage = "";
    var inputTextList = $scope.inputText.split(",");
    var inputTextListLength = updateListLengthIfContainsEmptyString(inputTextList);
    $scope.returnMessage = getMessage(inputTextListLength);
  };

  function updateListLengthIfContainsEmptyString(inputTextList) {
    var inputTextListLength = inputTextList.length;
    var newLength = inputTextListLength;
    var index = 0;
    while(index < inputTextListLength) {
      if(inputTextList[index].trim() === "") {
        newLength--;
      }
      index++;
    }
    return newLength;
  }

  function getMessage(inputTextListLength) {
    var returnMessage = "";
    if(inputTextListLength === 0) {
      returnMessage = "Please enter data first";
    }
    else if(inputTextListLength <= 3 && inputTextListLength > 0) {
      returnMessage = "Enjoy!";
    }
    else {
      returnMessage = "Too Much!";
    }
    return returnMessage;
  }

}

})();

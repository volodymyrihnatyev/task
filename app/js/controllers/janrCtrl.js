var app = angular.module('BookApp');

app.controller('janrCtrl', function($scope, $state, Books) {

     $scope.currentJanrId = $state.params.janrId;
     
 $scope.required=[];
    $scope.showBook = function (book) {
    	$state.go('book', {bookId: book.id});
    };
    
    $scope.showAuthor = function (book) {
    	$state.go('author', {authorId: book.author.ida});
    };
    
    for (var i = 0; i < Books.length; i++) {
		if (Books[i].janr == $scope.currentJanrId){
			$scope.required.push(Books[i]);
		}
	}

});
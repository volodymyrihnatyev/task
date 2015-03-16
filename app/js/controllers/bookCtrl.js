var app = angular.module('BookApp');

app.controller('bookCtrl', function($scope, $state, Books) {

	var currentBookId = $state.params.bookId;


  $scope.showAuthor = function (book) {
    	$state.go('author', {authorId: book.author.ida});
    };
    $scope.showJanr = function (book) {
    	$state.go('janr', {janrId: book.janr});
    };
	// Books.forEach(function (curentValue, index, array) {
	// 	if (curentValue.id == currentBookId){
	// 		$scope.book = curentValue;
	// 		console.log(index);
	// 	}
	// });

	for (var i = 0; i < Books.length; i++) {
		if (Books[i].id == currentBookId){
			$scope.book = Books[i];
		}
	}

});
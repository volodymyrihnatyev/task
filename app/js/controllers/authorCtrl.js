var app = angular.module('BookApp');

app.controller('authorCtrl', function($scope, $state, Books) {

var currentAuthorId = $state.params.authorId;
 $scope.writenBooks = [];
    $scope.showBook = function (book) {
    	$state.go('book', {bookId: book.id});
    };

    
    
    for (var i = 0; i < Books.length; i++) {
		if (Books[i].author.ida == currentAuthorId){
			 $scope.writenBooks.push(Books[i]);
		}
	}
	// Books.forEach(function (curentValue, index, array) {
	// 	if (curentValue.id == currentBookId){
	// 		$scope.book = curentValue;
	// 		console.log(index);
	// 	}
	// });

	for (var i = 0; i < Books.length; i++) {
		if (Books[i].author.ida == currentAuthorId){
			$scope.book = Books[i];
		}
	}

});
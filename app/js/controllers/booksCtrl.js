var app = angular.module('BookApp');

app.controller('booksCtrl', function($scope, $state, Books) {

    $scope.books = Books;

    $scope.showBook = function (book) {
    	$state.go('book', {bookId: book.id});
    };
    
    $scope.showAuthor = function (book) {
    	$state.go('author', {authorId: book.author.ida});
    };

});
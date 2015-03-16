var app = angular.module('BookApp');

app.controller('authorListCtrl', function($scope, $state, Books) {
	$scope.books = Books;
    
$scope.click=0;


    $scope.unique =[];
    $scope.unique.push($scope.books[0]);
    $scope.unique[0].click = false;
    

    for(var i=1;i<$scope.books.length;i++){
    	k=0;
    	
    		for(var j=0;j<$scope.unique.length;j++){
                 if($scope.unique[j].author.fio==$scope.books[i].author.fio)
                 	k++;
    		}
    			if(k==0){
    				$scope.unique.push($scope.books[i]);
    			}
    }




     


    $scope.showBook = function (book) {
    	$state.go('book', {bookId: book.id});
    };
    
    $scope.showAuthor = function (book) {
    	$state.go('author', {authorId: book.author.ida});
    };
    $scope.showMenu = function (book) {
            if ($scope.click==book.author.ida){
            	$scope.click=0;
            }
else
            {$scope.click=book.author.ida;}
    };
});
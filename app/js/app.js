(function () {
    var app = angular.module('BookApp',[
        'ui.router'
    ]);

    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("main");

        $stateProvider
            .state('main', {
                url: "/main",
                views: {
                    "books": { templateUrl: 'js/views/books.html' }
                }
            })
            .state('book', {
                url: "/main/book-:bookId",
                views: {
                    "book": { templateUrl: 'js/views/book.html' }
                }
            })
              .state('author', {
                url: "/main/author-:authorId",
                views: {
                    "author": { templateUrl: 'js/views/author.html' }
                }
            })
               .state('janr', {
                url: "/main/janr-:janrId",
                views: {
                    "janr": { templateUrl: 'js/views/janr.html' }
                }
            })
                .state('authorList', {
                url: "/main/authorList",
                views: {
                    "authorList": { templateUrl: 'js/views/authorList.html' }
                }
            })
            });
    })();


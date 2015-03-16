var app = angular.module('BookApp');

app.value('Books', 
		[{	
            id:1,
			name:"Palata #6",
         	janr:"Realizm",
            descr:"Description",
        	author: {
                ida:1,
        		fio:"Anton Pavlovish Schehov",
        		bio:"1860—1904"
        	}
        }


        ,{
            id:2,
			name:"Perehresni stejku",
         	janr:"Detective",
            descr:"Description",
        	author: {
                ida:2,
        		fio:"Ivan Yakovlevish Franko",
        		bio:" 1856—1916"
        	}
        },

        {
            id:3,
			name:" The Good Soldier Švejk",
         	janr:"Satire",
            descr:"Description",
        	author: {
                ida:3,
        		fio:"Yaroslav_Hašek",
        		bio:"1883-1923"
        	}
        },

        {
            id:4,
		 	name:"The Count of Monte Cristo ",
         	janr:"Romanticism",
            descr:"Description",
        	author: {
                ida:4,
        		fio:"Alexandre Dumas",
        		bio:"1829–1870"
        	}

        },
            { id:5,
            name:"The Three Musketeers ",
            janr:"Romanticism",
            descr:"Description",
            author: {
                ida:4,
                fio:"Alexandre Dumas",
                bio:"1829–1870"
            }
        },
             
           { id:6,
            name:"Karamazovy brothers",
            janr:"Realizm",
            descr:"Description",
            author: {
                ida:5,
                fio:"Fedor Michalovish Dostoesvsky",
                bio:"1860—1904"
            }},
            { 
            id:7,
            name:"Idiot",
            janr:"Realizm",
            descr:"Description",
            author: {
                ida:5,
                fio:"Fedor Michalovish Dostoesvsky",
                bio:"1860—1904"
            }
            }
            ,
            {
            id:7,
            name:"Prestuplenie i nakazanie",
            janr:"Realizm",
            descr:"Description",
            author: {
                ida:5,
                fio:"Fedor Michalovish Dostoesvsky",
                bio:"1860—1904"
            }
        }
        ,{
            id:2,
            name:"Perehresni stejku",
            janr:"Historiahar Berkut",
            descr:"Description",
            author: {
                ida:2,
                fio:"Ivan Yakovlevish Franko",
                bio:" 1856—1916"
            }
        }]
    );



var myBook = {
	title : null,
	cover : null,
	pages : null,
	owned : null,


}

//YOUR CODE HERE

myBook.title = "My Autobiography";
myBook.cover = " paperback";
myBook.pages = 320;
myBook.owned = 'true';
myBook.inStories = 'false';

for (var key in myBook){

	console.log(key);
}















//YOUR CODE ENDS HERE

//Uncomment code below to check if you have properly assigned the values.
//console.log(myBook);
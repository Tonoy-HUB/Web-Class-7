const messages = [
	{
		id: 1,
		text: 'Going to varsity',
		isCompleted: false
	},
	{
		id: 2,
		text: 'Dinner with all',
		isCompleted: false
	},
	{
		id: 3,
		text: 'Web practice',
		isCompleted: true
	}
];

//forEach, map, filter


messages.forEach( function(message){
	console.log(message.text);
});
//map
let messageMap = messages.map( function(message){
	return message.text;
});

//filter
let messageFilter = messages.filter( function (message){
	return message.isCompleted == false;
});



//filter + map
let messageFM = messages.filter( function (message){
	return message.isCompleted == false;
}).map(function (message){
	return message.text;
});

console.log(messageFM);














/*for(let a of messages){
	console.log(a.text);
}*/



/*for 
for( let i=0; i < messages.length; i++){
	console.log(messages[i].text);
}*/


/*while
let i = 0;
while( i < messages.length ){
	console.log(messages[i].text);
	i++;
}*/

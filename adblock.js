var array =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const fs = require('graceful-fs')
var final = []
for (var a=0; a<52; a++){
	for (var b=0; b<52; b++){
		for (var c=0; c<52; c++){
			final.push('igg-games.com##DIV[id="'+array[a]+array[b]+array[c]+'"]'+'\n')
			fs.writeFile('Output.txt',final,(err) =>{
				if (err) throw err;
			})
		}
	}
}
console.log("done")

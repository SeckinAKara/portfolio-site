import { PoemMap, Full_Poem, poem_map } from "src/app/poem/poem_classes";

var new_index = new PoemMap();
var poem_index:poem_map = new_index.poem_map

var scandir = require('../lib/scandir').create();
scandir.on('file', function(file, stats) {
	poem_index[stats.] = file;
});

scandir.on('error', function(err){
	console.error(err);
});

scandir.on('end', function(){
	console.log('Done');
});
scandir.scan({
	dir: '.',
	recursive: true,
	filter: /.*\.ts/
});

return new_index;
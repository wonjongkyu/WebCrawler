var url = "http://www.ppomppu.co.kr/zboard/zboard.php?id=ppomppu";

var savepath = "test.html";


var http = require('http');
var fs = require('fs');

var outfile = fs.createWriteStream(savepath);

http.get(url, function(res) {
  res.pipe(outfile);
  res.on('end', function () {
    outfile.close();
    console.log("ok");
  })
})

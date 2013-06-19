var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  //var sql = require('node-sqlserver');
var conn_str = "Driver={SQL Server Native Client 10.0};Server=tcp:hmkszo8clf.database.windows.net,1433;Database=appFramAkRXFwnG7;Uid=appFramework@hmkszo8clf;Pwd=6858ABcd;Encrypt=yes;Connection Timeout=30;";

res.end("hello world");
//var stmt = sql.query(conn_str, "SELECT * FROM Languages");

//stmt.on('meta', function (meta) { res.write("We've received the metadata"); });
//stmt.on('row', function (idx) { res.write("We've started receiving a row"); });
//stmt.on('column', function (idx, data, more) { res.write(idx + ":" + data);});
//stmt.on('done', function () { res.end("All done!"); });
//stmt.on('error', function (err) { res.write("We had an error: " + err); });

}).listen(port);
var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.get("/(:date)?", function(request, response) {

    if(request.params) {

        var rawDate = request.params.date, date;
        if(time = parseInt(rawDate))
            date = new Date(time*1000);
        else
            date = new Date(rawDate);

        response.send(JSON.stringify({

            unix: date.getTime()/1000,
            natural: date.toDateString()
        }));
    }
});

app.listen(process.env.PORT || 1337);
// INITIALIZATION
// we have to tell the server that we need the express

const express = require('express');   //we call the the express and stoer it in a variable   OR we call the instance
const app = express();    // we call express as function  and stroe it in app      // express me server bn chuka ha

//App Routes

//     home page route
app.get("/", function(req , res){   // handleer gis us 2 things in aurgument the request and the response   // req sent on server / when we reach "/" then
    res.send("This is the homepage");
});

app.get("/notes", function(req , res){   // handleer gis us 2 things in aurgument the request and the response   // req sent on server / when we reach "/" then
    res.send("This is the nodespage");
});
// Starting the server on a port
app.listen(5000, function(){      // this is a port number to hamari app port 5000 pr run hojaegi it also give optional callback function // app 5000 pr run hojati ha to ye wala function auto run hojaega
    console.log("server started at server 5000")
} );
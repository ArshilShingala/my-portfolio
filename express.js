const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compress = require('compression')
const methodOverride = require ('method-override');

 module.exports = ()=>{
        
    const app = express();
    
    if (process.env.NODE_ENV === 'devlpoment')
    {
          app.use(morgan('dev'));
    }
    else if (process.env.NODE_ENV === 'production')
    {
        app.use(compress());
    }

    app.use (bodyParser.urlencoded({
        extended:true
    }))

    app.use(bodyParser.json());

    app.use(methodOverride());
    app.set('views','./app/views');
    app.set('view engine' , 'ejs');
    
    const path = require('path');
//app.use(express.static(path.join('./app/public', 'public')));


    app.use(express.static('./public'));
    app.use(express.static('./node_modules'));

    app.use('/',require('../app/routes/index.server.routes'))
    return app;

  };

  
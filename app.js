const express = require('express'),
    port = process.env.PORT || 3001,
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    router = express();

mongoose.connect("mongodb+srv://test:test@demo-yvblj.mongodb.net/demo?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true });

//import routes

const userRoute = require('./routes/user.route');

//get route (localhost:3001/api/users)
router.use(bodyParser.json({ extended: true }));
router.use(cors());
router.use('/api', userRoute);

router.get('*', (req, res) => {
    res.send("Error 404 not found!");
});

router.listen(port, () => {
    console.log("Running...");
});
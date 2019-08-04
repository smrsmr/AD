/**
 * 弹幕接口
 */
module.exports = function (app, Ms) {
	const jsonParser = Ms.bodyParser.urlencoded({ extended: false });
	app.get('/getBarrage', (req, res) => {
		Ms.Barrage.find({}, (err, result) => {
			if (err) throw err;
			res.json({status:1,data:result});
		}); 
	});
	app.post('/postBarrage', jsonParser, (req, res) => {
		Ms.Barrage(req.body).save().then((result) => {
			res.json({status:1,data:result});
		}).catch((err) => {
			res.json({status:0,data:'addBarrage err:'+err});
		});
	});
};
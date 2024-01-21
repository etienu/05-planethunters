const ssi = require('./node_modules/browsersync-ssi');

module.exports = {
	"files": "./dist/assets/css/*.css, ./dist/assets/js/*.js, ./dist/*.html",
	"server": {
		baseDir: "./dist/",
		index: "index.html"
	},
	"proxy": false,
	"port": 3000,
	"middleware": ssi({
		baseDir: "./dist",
		ext: ".html",
		version: "1.4.0"
	})
}
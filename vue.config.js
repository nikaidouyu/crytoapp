module.exports = {
	transpileDependencies: ["vuetify"],
	devServer: {
	    proxy: "https://api.coin.z.com/public",
	}
    };
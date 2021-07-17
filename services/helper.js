const axios = require('axios'); 

// this helper service has action called trigger which helps to trigger web hook to single target url
module.exports = {
	name: "helper",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello' action.
		 *
		 * @returns
		 */
        trigger: {
			params:{
				ipAddress:'string',
				target:'string'
			},
			async handler(ctx) {
				return await axios.post(ctx.params.target,{
					ipAddress:ctx.params.ipAddress,
					UNIXTimeStamp:Math.round((new Date()).getTime() / 1000) 
				});
			}
		}

    }
}
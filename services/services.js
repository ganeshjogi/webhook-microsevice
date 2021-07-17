"use strict";
const Hook = require("./../model");
const axios = require('axios')
/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

// This is the web hooks service class
module.exports = {
	name: "webhooks",

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
        // this action helps to retrieve the webhooks from the database
		list:{
			async handler(ctx){
				return await Hook.find().select("-__v");
			}
		},
        // this action helps to register new webhook
        register:{
            params:{
                targetUrl:'string'
            },
            async handler(ctx){
				return await Hook.create({
                    targetUrl: ctx.params.targetUrl
                  });
			}
        },
        // this action helps to update the webhook
        update:{
            params:{
                id:'string',
                newTargetUrl:'string'
            },
            async handler(ctx){
                return await Hook.findByIdAndUpdate(ctx.params.id, ctx.params.newTargetUrl);
            }
        },
        // this action helps to delete the webhook
        delete:{
            params:{
                id:'string'
            },
            async handler(ctx){
                return await Hook.findByIdAndDelete(ctx.params.id);
            }
        },
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
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};

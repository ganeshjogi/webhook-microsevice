const concatLimit = require('async/concatLimit');

const Hook = require("./../model");
const broker = require("./../services/broker");

// Loading services to the broker
broker.loadService("./services/services.js");
broker.loadService("./services/helper.js");


// This function helps to trigger the all the target urls
exports.trigger = async(req,res) =>{
    const hooks = await Hook.find();
    const n = hooks.length;
    // concatLimit helps to send 20 parllel requests at a time
    await concatLimit(hooks, 20, async(hook)=>{
        await broker.call('webhooks.trigger',{ipAddress:req.body.ipAddress,target:hook.targetUrl})
    })
    // if(n>10){
    //     m = n/10
    //     k=0
    //     for(let i=0;i<m;i++){
    //         broker.start();
    //         for(let j=0;j<10;j++){
    //         await broker.call('webhooks.trigger',{ipAddress:req.body.ipAddress,target:hooks[i].targetUrl})
    //         }
    //     }
    // }
    // else{
    //     for(let i=0;i<n;i++){
    //         await broker.call('webhooks.trigger',{ipAddress:req.body.ipAddress,target:hooks[i].targetUrl})
    //     }
    // }
    res.end()
}
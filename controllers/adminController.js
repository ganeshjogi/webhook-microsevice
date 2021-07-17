const broker = require("./../services/broker");

// Loading services to the broker
broker.loadService("./services/services.js");
broker.loadService("./services/helper.js");
broker.start();

// this function helps to register the web hook by taking url
exports.register = async (req, res) => {
  console.log(req.body);
  const newHook = await broker.call('webhooks.register',{targetUrl:req.body.targetUrl})
  if (newHook) {
    res.status(201).json({
      status: "sucess",
      message: "registration sucessfull",
    });
  } else {
    res.status(401).json({
      status: "fail",
      msg: "registration Failed",
    });
  }
};

// This function helps to view all registered webhooks
exports.list = async (req, res) => {
  const hooks = await broker.call('webhooks.list');
  if (hooks) {
    res.status(200).json({
      status: "sucess",
      data: {
        hooks,
      },
    });
  } else {
    res.status(400).json({
      status: "fail",
      message: "no hooks found",
    });
  }
};

// This function helps to update the webhook target url by takng the ID
exports.update = async (req, res) => {
  const hook = await broker.call('webhooks.update',{id:req.body.id,newTargetUrl:req.body.newTargetUrl});
  if (hook) {
    res.status(200).json({
      status: "success",
      message: "sucessfully updated"
    });
  } else {
    res.status(400).json({
      status: "fail",
      message: "hook not found",
    });
  }
};

// This function helps to delete the webhook by taking the ID
exports.delete = async(req, res)=>{
    const hook = await broker.call('webhooks.delete',{id:req.body.id})
    if (hook) {
        res.status(200).json({
          status: "success",
          msg: "sucessfully deleted"
        });
      } else {
        res.status(400).json({
          status: "fail",
          msg: "hook not found",
        });
      }
}

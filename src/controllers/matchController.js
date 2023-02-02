const services = require("../services/storeAgents");
exports.addAgents= async (req,res)=>{
  const agentInfo = await services.storeAgents();
  const matchInfo = await services.storeMatches();    
  res.status(201).json({agentInfo,matchInfo});

};

exports.checkAssociation=async(req,res)=>{
  const result=await services.getBoth();
  res.send(result);
};

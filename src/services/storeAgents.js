const axios = require("axios");
const db = require("../models");
exports.storeAgents = async() => {

  const agentInfo = await axios.get("https://valorant-api.com/v1/agents?isPlayableCharacter=true");
  const agentDetails = agentInfo.data.data.map(agent => {
    return {
      "name": agent.displayName,
      "ability1": agent.abilities[0].displayName,
      "ability2": agent.abilities[1].displayName
    };
  });
  console.log(agentDetails);
    
  const result = await db.Agents.bulkCreate(agentDetails);
  return result;
//   const agents = await axios.get("https://valorant-api.com/v1/agents");
//   const agentList = agents.data.data;
//   const agentArray = [];
//    for (let i = 0; i < agentList.length; i++) {
//     const agent = {
//       name: agentList[i].displayName,
//       ability1: agentList[i].abilities[0].displayName,
//       ability2: agentList[i].abilities[1].displayName
//     };
//     agentArray.push(agent);
//   }
//   const agentModel = require("../models/agents");
//   agentModel.bulkCreate(agentArray);
//   return agentArray;
};

exports.storeMatches = async() => {
  const matchInfo = await axios.get("https://promit-revar.github.io/db.json");
  const matchDetails = matchInfo.data.map((match) => {
    return {
      "playername":match.playerName,"playertag":match.playerTag,"agentname":match.agentPlayed,"gunkills":match.gunKills,"ability1kills":match.abilityImpact[0].kills,"ability2kills":match.abilityImpact[1].kills};
  });
  const result = await db.Match.bulkCreate(matchDetails);
  return result;
};

exports.getBoth=async()=>{
  return await db.Agents.findAll({
    include:db.Match
  });
};
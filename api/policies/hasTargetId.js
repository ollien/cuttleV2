/**
 * hasTargetId
 *
 * @module      :: Policy
 * @description :: Only allows requests that contain a 'targetId' parameter, which is a number
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {
	
  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  if (req.body.hasOwnProperty('targetId')) {
  		if (typeof(req.body.targetId) === 'number') return next();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.badRequest({message: 'Error: request missing required param targetId'});
};
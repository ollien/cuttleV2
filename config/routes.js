/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': {
  //   view: 'homepage'
  // },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

  // '/'                             :   'userController.homepage',
  '/user/signup'                  :   'userController.signup',
  '/user/login'                   :   'userController.login',
  '/user/reLogin'                 :   'userController.reLogin',
  '/user/logout'                  :   'userController.logout',

  '/game/create'                  :   'gameController.create',
  '/game/getList'                 :   'gameController.getList',
  '/game/subscribe'               :   'gameController.subscribe',
  '/game/reconnect'               :   'gameController.reconnect',
  '/game/ready'                   :   'gameController.ready',
  '/game/leaveLobby'              :   'gameController.leaveLobby',
  '/game/draw'                    :   'gameController.draw',
  '/game/pass'                    :   'gameController.pass',
  '/game/points'                  :   'gameController.points',
  '/game/faceCard'                :   'gameController.faceCard',
  '/game/scuttle'                 :   'gameController.scuttle',
  '/game/jack'                    :   'gameController.jack',
  '/game/untargetedOneOff'        :   'gameController.untargetedOneOff',
  '/game/targetedOneOff'          :   'gameController.targetedOneOff',
  '/game/counter'                 :   'gameController.counter',
  '/game/resolve'                 :   'gameController.resolve',
  '/game/resolveFour'             :   'gameController.resolveFour', 
  '/game/resolveThree'            :   'gameController.resolveThree',
  // Resolving Sevens
  '/game/seven/points'            :   'gameController.sevenPoints',
  '/game/seven/faceCard'          :   'gameController.sevenFaceCard',
  '/game/seven/scuttle'           :   'gameController.sevenScuttle',
  '/game/seven/jack'              :   'gameController.sevenJack',
  '/game/seven/untargetedOneOff'  :   'gameController.sevenUntargetedOneOff',
  '/game/seven/targetedOneOff'    :   'gameController.sevenTargetedOneOff',
  '/game/over'                    :   'gameController.gameOver',
  '/game/concede'                 :   'gameController.concede',
  '/game/chat'                    :   'gameController.chat',
  '/game/gameData'                :   'gameController.gameData',
  '/game/lobbyData'               :   'gameController.lobbyData',
  // DEVELOPMENT ONLY
  '/game/stackDeck'               :   'gameController.stackDeck',
  '/game/deleteDeck'              :   'gameController.deleteDeck',
  '/game/loadFixture'              :   'gameController.loadFixture',
  '/game/clear'                   :   'gameController.clearGame',
  
  // Testing helpers
  '/test/wipeDatabase'           :   'TestController.wipeDatabase'
};

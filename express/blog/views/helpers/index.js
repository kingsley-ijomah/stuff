
/**
 * Method helpers
 *
 * @return {Function}
 * @api public
*/

	function helpers (appName) {
		return function (req, res, next) {
			res.locals.appName = appName || 'App'
			res.locals.excerpt = excerpt
			next()
		}
	}

	module.exports = helpers

/**
 * Excerpt helper
 *
 * @param {String} content
 * @param {Number} length
 * @return {String}
 * @api private
*/

  function excerpt(content, length) {
	  return content.split(/\s+/).slice(0, length).join(" ");
  }

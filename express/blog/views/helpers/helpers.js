
/**
 * Method helpers
 *
 * @return {Function}
 * @api public
*/

	function helpers() {
		return function(req, res, next) {
			res.locals.excerpt = excerpt;
			next()
		}
	}

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

  module.exports = helpers;
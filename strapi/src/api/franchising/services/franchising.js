'use strict';

/**
 * franchising service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::franchising.franchising');

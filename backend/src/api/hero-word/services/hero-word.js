'use strict';

/**
 * hero-word service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-word.hero-word');

const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: '{https://dev-373429.oktapreview.com}',
  token: '{00SjSMdk6FPRZbONdOO8k38KABi4b5dqqZNoK3_-8j}'
});

module.exports = client;
var Immutable = require('immutable');
require('core-js/es5');

var projectContext = require.context('./src', true, /\.test\.js$/);
var projectModuleIds = Immutable.Set(
    projectContext.keys().map(module => String(projectContext.resolve(module)))
);

beforeEach(() => {
    var cache = require.cache;
    projectModuleIds.forEach(id => delete cache[id]);
});

var context = require.context('./src', true, /\.test\.js$/);
context.keys().forEach(context);

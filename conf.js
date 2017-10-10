// conf.js
exports.config = {
    framework: 'jasmine',
    specs: ['spec.js'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            'args': ['--start-maximized']
        }
    }
};
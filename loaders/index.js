const expressLoader = require('./express');

module.exports = async ({app}) => {
    /**
     * Laods express essentials
     */
    await expressLoader({app});

};

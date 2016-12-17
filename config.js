exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://localhost/shopping-list' :
                            'mongodb://serenity4eternity786:2loveany1@ds159507.mlab.com:59507/shopping-list');
exports.PORT = process.env.PORT || 8080;
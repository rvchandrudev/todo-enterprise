const dev = {
    app:{
        port: process.env.DEV_PORT || 3000
    },
    db:{
        MONGO_URI: process.env.MONGO_URI_DEV
    }
}

const staging = {
    app:{
        port: process.env.STAGING_PORT || 3001
    },
    db:{
        MONGO_URI: process.env.MONGO_URI_STAGING
    }
}

const production = {
    app:{
        port: process.env.PRODUCTION_PORT || 3002
    },
    db:{
        MONGO_URI: process.env.MONGO_URI_PRODUCTION
    }
}

const environment = {
    dev,
    staging,
    production
}

console.log(process.env.NODE_ENV)

module.exports = environment[process.env.NODE_ENV]
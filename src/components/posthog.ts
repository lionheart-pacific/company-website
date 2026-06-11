import posthog from 'posthog-js'

const projectTokens = {
    production: 'phc_mc9pMBmjrDAouwUpxiFxB5vxi6xYmtD6Bdp2cEZLNZqT',
    development: 'phc_kmY74sqkf7hPaaDv89dYBzU9sQ56dUjzW4WySqZ3qfrY'
}

const isProduction = import.meta.env.PROD && import.meta.env.CONTEXT === 'production';

if (!isProduction) {
    console.info('Initializing analytics with development project token.')
}

const projectToken = isProduction
    ? projectTokens.production
    : projectTokens.development

if (projectToken) {
    posthog.init(projectToken, {
        api_host: 'https://us.i.posthog.com',
        defaults: '2026-05-30',
    })
}

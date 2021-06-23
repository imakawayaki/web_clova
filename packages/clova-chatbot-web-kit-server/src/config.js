const env = {
  development: {
    SECRET_KEY: 'SkhGZ0RJc2NjRnJVY3d0V01walJCWk1QcVVsR1liYlY=',
    INVOKE_URL: 'https://26c2ab84c6684b359f21df72a9448977.apigw.ntruss.com/custom/v1/368/1d4d5867da5f93f80b46c528a8e517afc003cc2e097f6ca3f3c7ddba919adcee',
    ALLOW_URL: [],
  },
  production: {
    SECRET_KEY: '',
    INVOKE_URL: '',
    ALLOW_URL: [],
  },
}

if (process.env.CLOVA_SECRET_KEY && process.env.CLOVA_INVOKE_URL) {
  const venv = {
    SECRET_KEY: process.env.CLOVA_SECRET_KEY,
    INVOKE_URL: process.env.CLOVA_INVOKE_URL,
    ALLOW_URL: process.env.ALLOW_URL,
  }
  module.exports = venv
  console.log('credential : using environment variable')
  console.log(venv.SECRET_KEY)
  console.log(venv.INVOKE_URL)
} else {
  module.exports = process.env.NODE_ENV
    ? env[process.env.NODE_ENV]
    : env.development
  console.log('credential : using static')
}

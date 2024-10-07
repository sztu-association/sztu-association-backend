const { cpus } = require('node:os')

const cpuLen = cpus().length

module.exports = {
  apps: [
    {
      name: 'sztu-assoction-server',
      script: './dist/main.js',
      autorestart: true,
      exec_mode: 'cluster',
      watch: false,
      instances: cpuLen,
      max_memory_restart: '1G',
      args: '',
      env: {
        NODE_ENV: 'production',
        PORT: process.env.APP_PORT,
      },
    },
  ],
}

module.exports = {
	apps: [
		{
			name: 'main cms',
			script: './prod_server.js',
			instances: 'max',
			exec_mode: 'cluster',
			restart_delay: 3000,
			listen_timeout: 4500,
			error_file: '../LOGS/err.log', // create this LOGS folder after install
			out_file: '../LOGS/out.log',
			log_file: '../LOGS/combined.log',
			max_memory_restart: '990M',
			source_map_support: true,
			env: {
				NODE_ENV: 'production',
				STRAPI_DEBUG_LEVEL: 'DEBUG', // get the correct variable name
			},
		},
	],
};
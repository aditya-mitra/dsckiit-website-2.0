const productionConfig = ({ env }) => {
	return {
		defaultConnection: 'default',
		connections: {
			default: {
				connector: 'bookshelf',
				settings: {
					client: 'postgres',
					host: env('DATABASE_HOST', 'localhost'),
					database: env('DATABASE_NAME', 'dsc_strapi_db'),
					port: env.int('DATABASE_PORT', 5432),
					username: env('DATABASE_USERNAME', 'dsc_strapi_user'),
					password: env('DATABASE_PASSWORD', 'dsc_strapi_webdev'),
					ssl: false,
				},
				options: {
					autoMigration: true, // this option is required in dbs other than sqlite so that tables can be created autuomatically
				},
			},
		},
	};
};

const fastConfig = () => ({
	defaultConnection: 'default',
	connections: {
		default: {
			connector: 'bookshelf',
			settings: {
				client: 'sqlite',
				filename: '.tmp/data.db',
			},
			options: {
				useNullAsDefault: true,
			},
		},
	},
});

const testingConfig = () => ({
	defaultConnection: 'default',
	connections: {
		default: {
			connector: 'bookshelf',
			settings: {
				client: 'sqlite',
				filename: '.tmp/test.db',
			},
			options: {
				useNullAsDefault: true,
				pool: {
					min: 0,
					max: 1,
				},
			},
		},
	},
});

const config =
	process.env.FAST === 'TRUE'
		? fastConfig
		: process.env.TESTING === 'TRUE'
		? testingConfig
		: productionConfig;

module.exports = config;

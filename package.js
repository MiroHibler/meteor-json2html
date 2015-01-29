Package.describe( {
	name         : 'miro:json2html',
	version      : '1.0.1',
	summary      : 'A Meteor Wrapper for json2html',
	git          : 'https://github.com/MiroHibler/meteor-json2html.git',
	documentation: 'README.md'
});

Package.onUse( function ( api ) {
	api.versionsFrom( 'METEOR@1.0' );

	api.addFiles([
		'lib/both/_json2html.js',
		'lib/both/json2html.js'
	], ['server', 'client'] );

	api.addFiles( 'lib/client/json2html_template.js', 'client' );

	api.export( 'json2html' );
});

Package.onTest( function ( api ) {
	api.use( 'tinytest' );
	api.use( 'miro:json2html' );

	api.addFiles( 'json2html_tests.js' );
});

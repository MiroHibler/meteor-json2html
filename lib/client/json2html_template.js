Meteor.startup( function () {
	Template.registerHelper( 'json2html', function ( json ) {
		var html = ( json ) ? json2html.transform( json ) : json;

		return new Spacebars.SafeString( html );
	});
});

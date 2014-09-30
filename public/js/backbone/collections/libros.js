var app = app || {};

var LibrosCollection = Backbone.Collection.extend({
	model: app.Libro,
	url: '/libros'
});

app.libros = new LibrosCollection();
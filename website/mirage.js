const mirage = require('miragejs');

mirage.createServer({
    routes() {
        this.namespace = 'api';
        this.get('/movies', () => {
            return new Response(200, { 'Content-Type': 'application/json' }, JSON.stringify({ movies: [] }));
        })
    }
});
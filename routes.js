module.exports = {
    name: 'ApiRoutes',
    register: async(server, options) => {
        server.route([{
            method: 'GET',
            path: '/',
            handler: async(req, res) => {
                return 'Servidor de Hapi - Adrián Gutiérrez';
            }
        }]);
    }
}
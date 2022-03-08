const Contenedor = require('./contenedor');
const { optionsSQLite } = require( '../options/databases' );

const messageContenedor = new Contenedor(optionsSQLite, 'tabla_mensaje')

const saveMessages = async (newMessage) => {
    const mensajeNuevo = await messageContenedor.save(newMessage)
    return mensajeNuevo
}

const getMessages = async () => {
    const listadoMensajes = await messageContenedor.getAll()
    return listadoMensajes
};

module.exports = {
    saveMessages,
    getMessages
}
const knex = require('knex');

class Contenedor {

    constructor (config, table){
        this.table = table
        this.conexion = knex(config)
    }

    async save(newProduct){
        try{
            const [id] = await this.conexion(this.table).insert(newProduct)
            return id
        } catch (error) {console.error(error); throw error;}
    }   

    async getById(number){
        try{
            const contenido = this.conexion.from(this.table)
            .select('*').where('id', '=', number)
            if (contenido.lenght === 0){
                return null
            } else{
                return contenido
            }
        } catch (error){
            console.error('Error de lectura',error)
        }
        
    }

    async getAll(){
        try {
            const listado = await this.conexion.from(this.table)
            .select('*')
            return listado;
        } catch (error) {console.error(error); throw error;}
    }

    async deleteById(id){
        try{
            const productoAEliminar = await this.conexion.from(this.table).where('id', '=', id).del()
            if (!productoAEliminar){
                return null
            } else{
                productoAEliminar
            }
        } catch (error) {console.error(error); throw error;}
    }

    async deleteAll(){
        try {
            const eliminarTodo = this.conexion.from(this.table).del()
            console.log('Se eliminaron todos los productos')
            return eliminarTodo
        }
        catch (error){console.error('Error de lectura',error)}
    }

    async update(id, producto){
        try {
            const productoUpdated = this.conexion.from(this.table).where('id', id).update({producto})
    
            if (!productoUpdated){
                console.log(`Error con el Id: ${id} no fue encontrado`)
                return null
            } else {
                console.log('Producto modificado de forma satisfactoria')
            }
        } catch (error){console.error('Error de lectura',error)}
    }
}

module.exports = Contenedor;
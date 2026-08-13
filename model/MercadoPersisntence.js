import DataBase from "../config/Database.js";

export default class MercadoPersistence {

    constructor() {
    }

    async crearPersistencia(nombre_cliente,access_token){
        try {
            const conexion = DataBase.getInstance();
            const query = `
            INSERT INTO mercadoPago_persistence(nombre_cliente,access_token)
            VALUES (?,?)
            `;

            const param = [
                nombre_cliente,
                access_token
            ];



          return  await conexion.ejecutarQuery(query, param);

        }catch(error){
            throw error;
        }
    }



    async actualizarPersistencia(nombre_cliente,access_token,id_mercadoPago_persistence ){
        try {
            const conexion = DataBase.getInstance();
            const query = `
            UPDATE mercadoPago_persistence
            SET nombre_cliente = ?, access_token = ?
            WHERE id_mercadoPago_persistence = ?
            `;
            const param = [
                nombre_cliente,
                access_token,
                id_mercadoPago_persistence
            ];
            return  await conexion.ejecutarQuery(query, param);
        }catch(error){
            throw error;
        }
    }




    async actualizarEstado(estado_pasarela, id_mercadoPago_persistence){

        try {
            const conexion = DataBase.getInstance();

            const query = `
            UPDATE mercadoPago_persistence
            SET estado_pasarela = ?
            WHERE id_mercadoPago_persistence = ?
            `;

            const param = [
                estado_pasarela,
                id_mercadoPago_persistence
            ];

            return  await conexion.ejecutarQuery(query, param);

        }catch(error){

            throw error;
        }
    }






    async seleccionarMercadoPagoPersistence(){

        try {
            const conexion = DataBase.getInstance();

            const query = `
            SELECT * FROM mercadoPago_persistence
            `;

            return  await conexion.ejecutarQuery(query);

        }catch(error){

            throw error;
        }
    }



    async seleccionarTOKEN(){

        try {
            const conexion = DataBase.getInstance();

            const query = `
            SELECT mercadoPago_persistence.access_token FROM mercadoPago_persistence;
            `;

            return  await conexion.ejecutarQuery(query);

        }catch(error){

            throw error;
        }
    }




}
import {Router} from "express";
import mercadoPagoPersistenceController from "../controller/MercadoPagoPersistenceController.js"

const router = Router();
router.post("/insertarPersistencia", mercadoPagoPersistenceController.insertarPersistencia);
router.post("/actualizarEstado", mercadoPagoPersistenceController.actualizarEstado);
router.post("/actualizar", mercadoPagoPersistenceController.actualizarPersistencia);
router.get("/obtenerPersistencia", mercadoPagoPersistenceController.seleccionarMercadoPagoPersistence);


export default router;

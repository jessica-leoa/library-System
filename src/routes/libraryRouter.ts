import express from "express";
import { autenticar } from '../shared/middlewares/authMiddlewares';
import { createBook, listBooks, welcomeLibrary, getBookById, deleteBook, updateBook } from '../controllers/libraryController';


const libraryRouter = express.Router();

// Rotas públicas
libraryRouter.get("/book/:id", getBookById);
libraryRouter.get("/", welcomeLibrary);
libraryRouter.get("/books", listBooks);

// Rotas protegidas
libraryRouter.post("/book", autenticar,  createBook);
libraryRouter.delete("/book/:id", autenticar, deleteBook);
libraryRouter.patch("/book/:id", autenticar, updateBook);

export default libraryRouter;
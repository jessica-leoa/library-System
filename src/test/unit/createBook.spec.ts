import { LibraryService } from "../../services/libraryService";
import { FakeBookRepository } from "../mocks/FakeBookRepository";

describe('POST libraryService', () => {
    let libraryService: LibraryService;

    beforeEach(() => {
        const fakeRepo = new FakeBookRepository();
        libraryService = new LibraryService(fakeRepo);
    });

    it('deverá adicionar um novo livro e retornar suas informações', async () => {
        const book = await libraryService.createBook({
            title: 'Dom Casmurro',
            content: 'romance clássico da literatura brasileira',
            status: 'emprestado',
            author: 'Machado de Assis'
        });

        expect(book).toBeDefined();
        expect(book.status).toBe('emprestado');
        expect(book.id).toBeTruthy();
        expect(book).toEqual(expect.objectContaining({
            title: 'Dom Casmurro',
            content: 'romance clássico da literatura brasileira',
            status: 'emprestado',
            author: 'Machado de Assis'
        }));
    });

});

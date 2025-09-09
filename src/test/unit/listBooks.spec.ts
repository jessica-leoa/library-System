import { LibraryService } from "../../services/libraryService";
import { FakeBookRepository } from "../mocks/FakeBookRepository";

describe('GET libraryService', () => {
    let libraryService: LibraryService;

    beforeEach(() => {
        const fakeRepo = new FakeBookRepository();
        libraryService = new LibraryService(fakeRepo);
    });

    it('deverá listar todos os livros cadastrados', async () => {
        await libraryService.createBook({
            title: 'Memórias Póstumas de Brás Cubas',
            content: 'romance satírico da literatura brasileira',
            status: 'em estoque',
            author: 'Machado de Assis'
        });

        const books = await libraryService.listBooks();

        expect(books[0].title).toBe('Memórias Póstumas de Brás Cubas');
    });
});

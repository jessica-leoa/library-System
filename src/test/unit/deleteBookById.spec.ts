import { LibraryService } from "../../services/libraryService";
import { FakeBookRepository } from "../mocks/FakeBookRepository";

describe('DELETE libraryService', () => {
    let libraryService: LibraryService;

    beforeEach(() => {
        const fakeRepo = new FakeBookRepository();
        libraryService = new LibraryService(fakeRepo);
    });

    it('deverá remover um livro existente pelo ID', async () => {
        const book = await libraryService.createBook({
            title: 'O Alienista',
            content: 'conto da literatura brasileira',
            status: 'disponível',
            author: 'Machado de Assis'
        });

        const deletedBook = libraryService.deleteBookById(book.id);
        expect(deletedBook).resolves.toBeUndefined();

        await expect(libraryService.getBookById(book.id)).resolves.toBeNull();
    });
});

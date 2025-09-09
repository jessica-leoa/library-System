import { LibraryService } from "../../services/libraryService";
import { FakeBookRepository } from "../mocks/FakeBookRepository";
import { BookData } from "../../core/entities/Book";

describe('UPDATE libraryService', () => {
  let libraryService: LibraryService;

  beforeEach(() => {
    const fakeRepo = new FakeBookRepository();
    libraryService = new LibraryService(fakeRepo);
  });

  it('deverá atualizar as informações de um livro pelo ID', async () => {
    const bookData: BookData = {
      title: 'Capitães da Areia',
      content: 'romance da literatura brasileira',
      status: 'emprestado',
      author: 'Jorge Amado'
    };

    const book = await libraryService.createBook(bookData);

    const updatedData: Partial<BookData> = {
      title: 'Capitães da Areia - Nova Edição',
      content: 'romance clássico revisado',
    };

    const updatedBook = await libraryService.updateBook(book.id, updatedData);

    expect(updatedBook).toEqual({
      id: book.id,
      title: 'Capitães da Areia - Nova Edição',
      content: 'romance clássico revisado',
      created_at: book.created_at,
      status: 'emprestado',
      author: 'Jorge Amado'
    });
  });
});

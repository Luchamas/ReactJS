import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../services/api";
import { Link } from "react-router-dom";

interface Book {
  id: string;
  title: string;
  author: string;
  yr_pub: number;
  genre: string;
  pg_num: number;
}
function BookList() {
  const [Books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    loadBooks();
  }, []);
  const loadBooks = async () => {
    const response = await getBooks();
    setBooks(response.data);
  };
  const handleDelete = async (id: string) => {
    await deleteBook(id);
    loadBooks();
  };
  return (
    <div>
      <h1>Lista de Livros</h1>
      <Link to="/add" className="botaoAdd">Adicionar</Link>
      <ul>
        {Books.map((Book) => (
          <li key={Book.id}>
            {Book.title} - {Book.author} - {Book.yr_pub} - {Book.genre} - {Book.pg_num}
            <Link to={`/edit/${Book.id}`} className="botaoEdit">Editar</Link>
            <button className="botaoDelete" onClick={() => handleDelete(Book.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default BookList;

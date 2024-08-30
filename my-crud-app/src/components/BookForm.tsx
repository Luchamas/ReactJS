import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createBook, getBookById, updateBook } from "../services/api";
interface Book {
  title: string;
  author: string;
  yr_pub: number;
  genre: string;
  pg_num: number;
}
function BookForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [Book, setBook] = useState<Book>({
    title: "",
    author: "",
    yr_pub: 0,
    genre: "",
    pg_num: 0,
  });
  useEffect(() => {
    if (id) {
      loadBook();
    }
  }, [id]);
  const loadBook = async () => {
    try {
      const response = await getBookById(id as string);
      setBook(response.data);
    } catch (error) {
      console.error("Error loading Book data", error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook({
      ...Book,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await updateBook(id, Book);
      } else {
        await createBook(Book);
      }
      navigate("/");
    } catch (error) {
      console.error("Error saving Book", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título</label>
        <input
          type="text"
          name="title"
          value={Book.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Autor</label>
        <input
          type="text"
          name="author"
          value={Book.author}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Ano de Publicação</label>
        <input
          type="number"
          name="yr_pub"
          value={Book.yr_pub}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gênero</label>
        <input
          type="text"
          name="genre"
          value={Book.genre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Número de páginas</label>
        <input
          type="number"
          name="pg_num"
          value={Book.pg_num}
          onChange={handleChange}
        />
      </div>
      <button className="button-primary" type="submit">Save</button>
    </form>
  );
}
export default BookForm;

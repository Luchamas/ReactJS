import { useEffect } from 'react';
import BookList from "../components/BookList";

const Home = () => {
  useEffect(() => {
    document.title = 'Gerenciamento de Livros';
  }, []);

  return (
    <div className="home">
      <h1>Gerenciamento de Livros</h1>
      <BookList />
    </div>
  );
};

export default Home;
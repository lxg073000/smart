import useCollection from "../hooks/useCollection";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";

export default function Home() {
  //update collection ref with logged in user
  const { documents: books } = useCollection("users/demo/goals");

  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}

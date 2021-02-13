import logo from './logo.svg';
import './App.css';
import { Blog, books, posts, courses } from './Components/Blogger';

function App() {
  return (
    <div className="App">
      <Blog courses={courses} posts={posts} books={books} />
    </div>
  );
}

export default App;

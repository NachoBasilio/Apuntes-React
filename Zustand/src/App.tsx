import { shallow } from "zustand/shallow";
import { useCounterStore } from "./store/counterStore";

function App() {
  const { title, count } = useCounterStore((state) => ({
    count: state.count,
    title: state.title,
  }), shallow)
  const increment = useCounterStore((state) => state.increment)
  const posts = useCounterStore((state) => state.posts)
  const getPosts = useCounterStore((state) => state.getPosts)

  return (
    <div>
      <h1>{title}: {count}</h1>
      <button onClick={() => {
        increment(1)
      }} >Agregar</button>
      <hr />
      <button onClick={getPosts}>Obtener posts</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;

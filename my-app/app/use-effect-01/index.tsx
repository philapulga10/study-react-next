import { useState, useEffect } from "react";

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("mounted");

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => setPosts(posts));
  }, []);

  return (<div>
    <input value={title} onChange={e => setTitle(e.target.value)} />
    <ul>
      {
        posts.map(({ id, title }) => {
          return (
            <li key={id}>{title}</li>
          )
        })
      }
    </ul>
  </div>);
}

export default Content;
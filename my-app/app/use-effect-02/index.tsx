import { useState, useEffect } from "react";

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  useEffect(() => {
    console.log("mounted");

    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, [type]);

  return (
    <div>
      {tabs.map((tab) => {
        return (
          <button
            style={
              type === tab ? { color: "#fff", backgroundColor: "#333" } : {}
            }
            onClick={() => setType(tab)}
            key={tab}
          >
            {tab}
          </button>
        );
      })}

      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <ul>
        {posts.map(({ id, title, name }) => {
          return <li key={id}>{title || name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Content;

const tabs = ["posts", "comments", "albums"];

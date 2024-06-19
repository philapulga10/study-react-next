import { useState, useEffect } from "react";

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    console.log("mounted");

    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll); // KHI UNMOUNTED THÌ EVENT NÀY VẪN CÒN => BỊ RÒ RỈ BỘ NHỚ (ĐỂ TRONG BỘ NHỚ VÀ KHÔNG DÙNG ĐƯỢC NỮA)

    // CLEANUP FUNCTION
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

      {showGoToTop && (
        <button style={{ position: "fixed", right: "20px", bottom: "20px" }}>
          Go to top
        </button>
      )}
    </div>
  );
}

export default Content;

const tabs = ["posts", "comments", "albums"];

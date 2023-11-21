import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { Menu } from "./pages/Menu";
// import { Profile } from "./pages/Profile";
import { useQuery } from "@tanstack/react-query";
const POSTS = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
];
function App() {
  // return (
  //   <div className="App">
  //     {/* <Router>
  //       <div>
  //         <Link to="/">HOME </Link>
  //         <Link to="/menu">MENU </Link>
  //         <Link to="/profile">PROFILE </Link>
  //       </div>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/menu" element={<Menu />} />
  //         <Route path="/profile" element={<Profile />} />
  //       </Routes>
  //     </Router> */}

  //   </div>
  // );
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });
  if (postsQuery.isLoading) {
    return <h1>lodding.....</h1>;
  }
  if (postsQuery.isError) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  }
  return (
    <div>
      {postsQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;

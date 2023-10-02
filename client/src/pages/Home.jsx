import { Link } from "react-router-dom";
const Home = () => {
  const posts = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, officiis.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia, fuga deserunt repudiandae vel voluptate quis quo molestias iste autem? Sunt ut dolore sapiente dolorem nisi corporis earum, labore voluptas?",
      img: "https://images.unsplash.com/photo-1688362378188-264c2d01ae9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, officiis.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia, fuga deserunt repudiandae vel voluptate quis quo molestias iste autem? Sunt ut dolore sapiente dolorem nisi corporis earum, labore voluptas?",
      img: "https://images.unsplash.com/photo-1688362378188-264c2d01ae9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, officiis.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia, fuga deserunt repudiandae vel voluptate quis quo molestias iste autem? Sunt ut dolore sapiente dolorem nisi corporis earum, labore voluptas?",
      img: "https://images.unsplash.com/photo-1688362378188-264c2d01ae9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, officiis.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia, fuga deserunt repudiandae vel voluptate quis quo molestias iste autem? Sunt ut dolore sapiente dolorem nisi corporis earum, labore voluptas?",
      img: "https://images.unsplash.com/photo-1688362378188-264c2d01ae9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={post.img} alt='' />
            </div>
            <div className='content'>
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

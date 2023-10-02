import React from 'react'

const Menu = () => {
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
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post =>(
            <div className="post">
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}</div>

  )
}

export default Menu
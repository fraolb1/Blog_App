import {Link} from 'react-router-dom'
import Menu from '../components/Menu';
const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://images.unsplash.com/photo-1688362378188-264c2d01ae9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
          alt=''
        />
        <div className='user'>
          <img
            src='https://images.unsplash.com/photo-1688362378188-264c2d01ae9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
            alt=''
          />
          <div className='info'>
            <span>John</span>
            <p>posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link className='link' to={`/write?edit=2`}>
              <span className='E'>E</span>
            </Link>
            <Link className='link' to={`/write?edit=2`}>
              <span className='D'>D</span>
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, aperiam?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda magnam earum eligendi explicabo. Sequi maxime soluta perspiciatis deleniti minus. Accusamus modi voluptatibus quaerat aut quasi quis ad iste illo.
        Cum in tempore voluptatem impedit dolor suscipit magnam repellat quas nemo iste. Quibusdam, laboriosam reprehenderit tenetur provident ad laudantium nihil quisquam atque quidem fugit facere molestias libero magnam fugiat accusamus!
        Aspernatur provident cum a veritatis, aperiam fugit? Repudiandae recusandae commodi, blanditiis similique magni atque culpa sint voluptatem fugiat autem alias reiciendis quis quos aliquid itaque libero voluptas voluptatibus facere doloremque.
        Omnis, mollitia a? Animi sit illum pariatur voluptatem inventore nulla vitae quas, ratione explicabo neque harum fuga cum totam cumque! Sunt in magni voluptatibus inventore cumque consequuntur excepturi qui reprehenderit.
        Ipsum, quibusdam harum quasi corporis delectus reprehenderit asperiores recusandae debitis dolor officiis necessitatibus atque possimus suscipit a quam sapiente nostrum accusamus animi obcaecati et iste, temporibus fugit quia expedita? Reiciendis.
        Maxime sit nihil nemo esse totam doloribus, magnam unde tempore consequatur quo assumenda repudiandae officiis quia laudantium sequi. <br />  <br /> <br /> <br />Consequuntur ullam aperiam quas natus quos ad possimus. Tempora dolorum nemo minima.
        Similique perspiciatis non, maxime eum veniam quidem? Omnis nobis, nostrum quas perferendis dolorum repudiandae optio, fuga nam nemo molestias dolor laboriosam consequatur perspiciatis praesentium vel! Temporibus vel numquam odio at?
        Blanditiis assumenda doloremque animi consequatur hic voluptatum, perspiciatis quae, aperiam et cum deserunt sit consectetur laborum dolores facilis, vel reiciendis iste recusandae suscipit nisi cumque neque architecto. Sed, illo voluptas.
        Nisi voluptatem esse et repellat aut cumque rerum cum corrupti nemo vel odit labore quisquam earum officia dicta porro recusandae, expedita reprehenderit accusamus. Corporis dolorum, possimus neque voluptates quod porro?
        Veniam vero laboriosam voluptate ducimus aperiam quae dolor libero pariatur earum animi vel sint iure suscipit ipsum corporis cum, adipisci nobis necessitatibus saepe enim magnam nam eaque? Nihil, veritatis excepturi.</p>
      </div>
      <div className='menu'><Menu/></div>
    </div>
  );
}

export default Single
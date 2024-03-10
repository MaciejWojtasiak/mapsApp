import style from './Product.module.css';

function Product() {
  return (
    <main className={style.product}>
      <section>
        <img src="https://images.unsplash.com/photo-1707697686797-888124a68c01?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="productImage" />
          <div className={style.info}>
          <h1>About MapsApp</h1>
          <p>Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Veniam 
            dolorum dignissimos obcaecati molestiae
             nihil, vitae minus odit assumenda corporis lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cum possimus doloribus laboriosam assumenda vero dignissimos impedit nobis voluptate vel!</p>
             <p>
              porro quibusdam asperiores quae qui nostrum harum!
               Provident totam porro deserunt quisquam! Totam vero
                corporis soluta natus. Qui, repellendus delectus 
                voluptatem placeat cupiditate eum ad quo molestias,
                 illum, quaerat reprehenderit tempore?</p>
          </div>          
      </section>
    </main>
  )
}

export default Product
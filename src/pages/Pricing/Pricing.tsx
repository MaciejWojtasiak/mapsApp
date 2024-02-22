import style from './Pricing.module.css';

function Pricing() {
  return (
    <main className={style.pricing}>
      <section>        
          <div className={style.info}>
          <h2>Simple pricing.
            <br />
            Just $10/month.</h2>
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
          <img src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="pricingImage" /> 
      </section>
    </main>
  )
}

export default Pricing
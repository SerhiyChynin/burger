import { useState } from 'react';
import './App.css';
import Menu from './menu/Menu';

function App() {
  const [menuActive, setMenuActive] = useState(false);
      const items = [{ value: 'Главная', href: '/main', icon: 'done' },
                    { value: 'Услуги', href: '/service', icon: 'add' },
                    { value: 'Магазин', href: '/shop', icon: 'key' },
                    { value: 'О нас', href: '/about', icon: 'shop' },
                ];
  return (
    
    <div className="App">
      <nav>
        <div className="burger-btn" onClick={()=> setMenuActive(!menuActive)}>
          <span/>
        </div>
      </nav>
      <main>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse ex quia ullam laboriosam magnam, odio voluptates excepturi nihil repudiandae? Neque culpa illum rerum enim delectus eligendi atque cumque reprehenderit!
        Ad expedita necessitatibus eius quibusdam totam assumenda quo quae itaque similique, et tempore, officia, maiores corporis animi hic excepturi qui amet rerum debitis neque! Consequatur itaque maxime aspernatur eligendi nobis.
        Minus nihil magnam cum, repellendus aspernatur velit nobis nemo aut vel atque tempore enim error maiores magni itaque officiis doloremque quam! A dolor eligendi temporibus accusantium dignissimos nulla expedita aliquid.
        Cumque necessitatibus, odio magni sunt eligendi quasi praesentium vel eius quae doloribus ex eveniet beatae, voluptatibus aperiam. Dolores repellendus, odio illum placeat excepturi pariatur aliquid quia similique dolorum cum velit.
        Error perspiciatis culpa, iure dolorum maxime a repellat minima commodi cum delectus aliquid recusandae. Officia, accusamus nam. Aperiam laborum eveniet ipsum! Quaerat ipsa dolore aut eum corrupti laboriosam esse suscipit?
        Autem expedita repudiandae explicabo numquam rem dolor, perferendis modi quae voluptate! A cum neque consequuntur odio beatae ratione totam labore corporis. Non cum nisi libero similique iure rerum ad suscipit?
        Eum autem nam laudantium porro sint ex commodi vero non, rerum eligendi veritatis excepturi mollitia reiciendis natus distinctio incidunt sunt, maxime quas ullam voluptates tempora quae adipisci dolor deserunt? Earum.
        Sapiente labore nostrum eum, placeat minima nisi sint cumque delectus, illo voluptatum iste a dicta nihil quibusdam odit voluptate inventore velit voluptates alias ab repellat pariatur. Unde ab ratione consequuntur.
        Recusandae aut, tempore totam dolor iusto eligendi molestias voluptatem laboriosam culpa consectetur eum accusamus ab qui similique perspiciatis. Cupiditate at temporibus sequi! Voluptate impedit quam maiores sit ratione voluptatem cum?
        Voluptatibus omnis cum, dolores dolorum possimus numquam mollitia blanditiis sapiente iusto similique ducimus minus repudiandae eum modi inventore quasi illum quam deserunt labore. Qui maxime velit totam facere. Deserunt, blanditiis!
        Voluptates reprehenderit soluta nesciunt ducimus. Quae enim, esse assumenda libero praesentium delectus minus iure architecto velit laboriosam blanditiis. Atque officiis voluptatem veniam dolorem beatae amet eos provident vel sint qui.
        Dolor suscipit cumque, placeat voluptate optio velit quas reiciendis. Porro sed nostrum consectetur, dolor nobis, consequuntur ea nisi officia voluptatum nulla magnam repellat similique culpa. Accusantium sed debitis vero quia!
        Officia vitae mollitia numquam, sit, odit perspiciatis aperiam blanditiis vel accusamus quisquam reiciendis dolore dicta aspernatur a cupiditate libero! Rerum ab dolore consequuntur doloremque tenetur veritatis soluta voluptate? Provident, placeat!
        Quos sit quis ad nobis recusandae eum error pariatur ea vel. Dignissimos tenetur doloribus inventore quo earum officiis, libero quis molestias architecto debitis distinctio at iure enim similique! Molestias, sunt?
        Officiis quibusdam ratione est reprehenderit, facilis maxime at, exercitationem, libero placeat voluptates minus quo culpa obcaecati dolorum repudiandae a neque? Recusandae laudantium fugit tempore, assumenda dolorum atque aspernatur voluptatibus dolores.
        Dicta magnam officia veritatis repellendus ducimus sint alias, nesciunt, cupiditate sequi dolorum, est deleniti. Asperiores voluptates ab iure et a deleniti quibusdam ratione voluptatem possimus ea. Quod id voluptatem ipsa.
        Odit similique tenetur quis recusandae iste qui culpa dicta! Nihil possimus neque laborum voluptatibus numquam unde suscipit ullam sit molestiae, iure rem repudiandae quisquam fuga voluptates delectus nobis. Ea, beatae.
        Quidem minima, earum aperiam, veritatis mollitia dolor voluptatibus facere magnam eos praesentium ab adipisci porro vel voluptatum quasi asperiores! Quo at, maiores odit sed quam neque! Cupiditate consequuntur minima nobis!
        Nesciunt, quibusdam? Numquam reiciendis iste voluptatem sapiente, exercitationem veritatis rem adipisci. Facere vitae dolor, aut quibusdam eum vel. Aspernatur iste neque dolore dignissimos, ab aperiam enim sint expedita deleniti ducimus?
        Cupiditate quidem quo explicabo nihil neque vel maxime impedit modi, nam vitae nemo facere animi culpa quas quisquam quae unde et possimus eos rem, dolore exercitationem eveniet qui. Quo, possimus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse ex quia ullam laboriosam magnam, odio voluptates excepturi nihil repudiandae? Neque culpa illum rerum enim delectus eligendi atque cumque reprehenderit!
        Ad expedita necessitatibus eius quibusdam totam assumenda quo quae itaque similique, et tempore, officia, maiores corporis animi hic excepturi qui amet rerum debitis neque! Consequatur itaque maxime aspernatur eligendi nobis.
        Minus nihil magnam cum, repellendus aspernatur velit nobis nemo aut vel atque tempore enim error maiores magni itaque officiis doloremque quam! A dolor eligendi temporibus accusantium dignissimos nulla expedita aliquid.
        Cumque necessitatibus, odio magni sunt eligendi quasi praesentium vel eius quae doloribus ex eveniet beatae, voluptatibus aperiam. Dolores repellendus, odio illum placeat excepturi pariatur aliquid quia similique dolorum cum velit.
        Error perspiciatis culpa, iure dolorum maxime a repellat minima commodi cum delectus aliquid recusandae. Officia, accusamus nam. Aperiam laborum eveniet ipsum! Quaerat ipsa dolore aut eum corrupti laboriosam esse suscipit?
        Autem expedita repudiandae explicabo numquam rem dolor, perferendis modi quae voluptate! A cum neque consequuntur odio beatae ratione totam labore corporis. Non cum nisi libero similique iure rerum ad suscipit?
        Eum autem nam laudantium porro sint ex commodi vero non, rerum eligendi veritatis excepturi mollitia reiciendis natus distinctio incidunt sunt, maxime quas ullam voluptates tempora quae adipisci dolor deserunt? Earum.
        Sapiente labore nostrum eum, placeat minima nisi sint cumque delectus, illo voluptatum iste a dicta nihil quibusdam odit voluptate inventore velit voluptates alias ab repellat pariatur. Unde ab ratione consequuntur.
        Recusandae aut, tempore totam dolor iusto eligendi molestias voluptatem laboriosam culpa consectetur eum accusamus ab qui similique perspiciatis. Cupiditate at temporibus sequi! Voluptate impedit quam maiores sit ratione voluptatem cum?
        Voluptatibus omnis cum, dolores dolorum possimus numquam mollitia blanditiis sapiente iusto similique ducimus minus repudiandae eum modi inventore quasi illum quam deserunt labore. Qui maxime velit totam facere. Deserunt, blanditiis!
        Voluptates reprehenderit soluta nesciunt ducimus. Quae enim, esse assumenda libero praesentium delectus minus iure architecto velit laboriosam blanditiis. Atque officiis voluptatem veniam dolorem beatae amet eos provident vel sint qui.
        Dolor suscipit cumque, placeat voluptate optio velit quas reiciendis. Porro sed nostrum consectetur, dolor nobis, consequuntur ea nisi officia voluptatum nulla magnam repellat similique culpa. Accusantium sed debitis vero quia!
        Officia vitae mollitia numquam, sit, odit perspiciatis aperiam blanditiis vel accusamus quisquam reiciendis dolore dicta aspernatur a cupiditate libero! Rerum ab dolore consequuntur doloremque tenetur veritatis soluta voluptate? Provident, placeat!
        Quos sit quis ad nobis recusandae eum error pariatur ea vel. Dignissimos tenetur doloribus inventore quo earum officiis, libero quis molestias architecto debitis distinctio at iure enim similique! Molestias, sunt?
        Officiis quibusdam ratione est reprehenderit, facilis maxime at, exercitationem, libero placeat voluptates minus quo culpa obcaecati dolorum repudiandae a neque? Recusandae laudantium fugit tempore, assumenda dolorum atque aspernatur voluptatibus dolores.
        Dicta magnam officia veritatis repellendus ducimus sint alias, nesciunt, cupiditate sequi dolorum, est deleniti. Asperiores voluptates ab iure et a deleniti quibusdam ratione voluptatem possimus ea. Quod id voluptatem ipsa.
        Odit similique tenetur quis recusandae iste qui culpa dicta! Nihil possimus neque laborum voluptatibus numquam unde suscipit ullam sit molestiae, iure rem repudiandae quisquam fuga voluptates delectus nobis. Ea, beatae.
        Quidem minima, earum aperiam, veritatis mollitia dolor voluptatibus facere magnam eos praesentium ab adipisci porro vel voluptatum quasi asperiores! Quo at, maiores odit sed quam neque! Cupiditate consequuntur minima nobis!
        Nesciunt, quibusdam? Numquam reiciendis iste voluptatem sapiente, exercitationem veritatis rem adipisci. Facere vitae dolor, aut quibusdam eum vel. Aspernatur iste neque dolore dignissimos, ab aperiam enim sint expedita deleniti ducimus?
        Cupiditate quidem quo explicabo nihil neque vel maxime impedit modi, nam vitae nemo facere animi culpa quas quisquam quae unde et possimus eos rem, dolore exercitationem eveniet qui. Quo, possimus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse ex quia ullam laboriosam magnam, odio voluptates excepturi nihil repudiandae? Neque culpa illum rerum enim delectus eligendi atque cumque reprehenderit!
        Ad expedita necessitatibus eius quibusdam totam assumenda quo quae itaque similique, et tempore, officia, maiores corporis animi hic excepturi qui amet rerum debitis neque! Consequatur itaque maxime aspernatur eligendi nobis.
        Minus nihil magnam cum, repellendus aspernatur velit nobis nemo aut vel atque tempore enim error maiores magni itaque officiis doloremque quam! A dolor eligendi temporibus accusantium dignissimos nulla expedita aliquid.
        Cumque necessitatibus, odio magni sunt eligendi quasi praesentium vel eius quae doloribus ex eveniet beatae, voluptatibus aperiam. Dolores repellendus, odio illum placeat excepturi pariatur aliquid quia similique dolorum cum velit.
        Error perspiciatis culpa, iure dolorum maxime a repellat minima commodi cum delectus aliquid recusandae. Officia, accusamus nam. Aperiam laborum eveniet ipsum! Quaerat ipsa dolore aut eum corrupti laboriosam esse suscipit?
        Autem expedita repudiandae explicabo numquam rem dolor, perferendis modi quae voluptate! A cum neque consequuntur odio beatae ratione totam labore corporis. Non cum nisi libero similique iure rerum ad suscipit?
        Eum autem nam laudantium porro sint ex commodi vero non, rerum eligendi veritatis excepturi mollitia reiciendis natus distinctio incidunt sunt, maxime quas ullam voluptates tempora quae adipisci dolor deserunt? Earum.
        Sapiente labore nostrum eum, placeat minima nisi sint cumque delectus, illo voluptatum iste a dicta nihil quibusdam odit voluptate inventore velit voluptates alias ab repellat pariatur. Unde ab ratione consequuntur.
        Recusandae aut, tempore totam dolor iusto eligendi molestias voluptatem laboriosam culpa consectetur eum accusamus ab qui similique perspiciatis. Cupiditate at temporibus sequi! Voluptate impedit quam maiores sit ratione voluptatem cum?
        Voluptatibus omnis cum, dolores dolorum possimus numquam mollitia blanditiis sapiente iusto similique ducimus minus repudiandae eum modi inventore quasi illum quam deserunt labore. Qui maxime velit totam facere. Deserunt, blanditiis!
        Voluptates reprehenderit soluta nesciunt ducimus. Quae enim, esse assumenda libero praesentium delectus minus iure architecto velit laboriosam blanditiis. Atque officiis voluptatem veniam dolorem beatae amet eos provident vel sint qui.
        Dolor suscipit cumque, placeat voluptate optio velit quas reiciendis. Porro sed nostrum consectetur, dolor nobis, consequuntur ea nisi officia voluptatum nulla magnam repellat similique culpa. Accusantium sed debitis vero quia!
        Officia vitae mollitia numquam, sit, odit perspiciatis aperiam blanditiis vel accusamus quisquam reiciendis dolore dicta aspernatur a cupiditate libero! Rerum ab dolore consequuntur doloremque tenetur veritatis soluta voluptate? Provident, placeat!
        Quos sit quis ad nobis recusandae eum error pariatur ea vel. Dignissimos tenetur doloribus inventore quo earum officiis, libero quis molestias architecto debitis distinctio at iure enim similique! Molestias, sunt?
        Officiis quibusdam ratione est reprehenderit, facilis maxime at, exercitationem, libero placeat voluptates minus quo culpa obcaecati dolorum repudiandae a neque? Recusandae laudantium fugit tempore, assumenda dolorum atque aspernatur voluptatibus dolores.
        Dicta magnam officia veritatis repellendus ducimus sint alias, nesciunt, cupiditate sequi dolorum, est deleniti. Asperiores voluptates ab iure et a deleniti quibusdam ratione voluptatem possimus ea. Quod id voluptatem ipsa.
        Odit similique tenetur quis recusandae iste qui culpa dicta! Nihil possimus neque laborum voluptatibus numquam unde suscipit ullam sit molestiae, iure rem repudiandae quisquam fuga voluptates delectus nobis. Ea, beatae.
        Quidem minima, earum aperiam, veritatis mollitia dolor voluptatibus facere magnam eos praesentium ab adipisci porro vel voluptatum quasi asperiores! Quo at, maiores odit sed quam neque! Cupiditate consequuntur minima nobis!
        Nesciunt, quibusdam? Numquam reiciendis iste voluptatem sapiente, exercitationem veritatis rem adipisci. Facere vitae dolor, aut quibusdam eum vel. Aspernatur iste neque dolore dignissimos, ab aperiam enim sint expedita deleniti ducimus?
        Cupiditate quidem quo explicabo nihil neque vel maxime impedit modi, nam vitae nemo facere animi culpa quas quisquam quae unde et possimus eos rem, dolore exercitationem eveniet qui. Quo, possimus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse ex quia ullam laboriosam magnam, odio voluptates excepturi nihil repudiandae? Neque culpa illum rerum enim delectus eligendi atque cumque reprehenderit!
        Ad expedita necessitatibus eius quibusdam totam assumenda quo quae itaque similique, et tempore, officia, maiores corporis animi hic excepturi qui amet rerum debitis neque! Consequatur itaque maxime aspernatur eligendi nobis.
        Minus nihil magnam cum, repellendus aspernatur velit nobis nemo aut vel atque tempore enim error maiores magni itaque officiis doloremque quam! A dolor eligendi temporibus accusantium dignissimos nulla expedita aliquid.
        Cumque necessitatibus, odio magni sunt eligendi quasi praesentium vel eius quae doloribus ex eveniet beatae, voluptatibus aperiam. Dolores repellendus, odio illum placeat excepturi pariatur aliquid quia similique dolorum cum velit.
        Error perspiciatis culpa, iure dolorum maxime a repellat minima commodi cum delectus aliquid recusandae. Officia, accusamus nam. Aperiam laborum eveniet ipsum! Quaerat ipsa dolore aut eum corrupti laboriosam esse suscipit?
        Autem expedita repudiandae explicabo numquam rem dolor, perferendis modi quae voluptate! A cum neque consequuntur odio beatae ratione totam labore corporis. Non cum nisi libero similique iure rerum ad suscipit?
        Eum autem nam laudantium porro sint ex commodi vero non, rerum eligendi veritatis excepturi mollitia reiciendis natus distinctio incidunt sunt, maxime quas ullam voluptates tempora quae adipisci dolor deserunt? Earum.
        Sapiente labore nostrum eum, placeat minima nisi sint cumque delectus, illo voluptatum iste a dicta nihil quibusdam odit voluptate inventore velit voluptates alias ab repellat pariatur. Unde ab ratione consequuntur.
        Recusandae aut, tempore totam dolor iusto eligendi molestias voluptatem laboriosam culpa consectetur eum accusamus ab qui similique perspiciatis. Cupiditate at temporibus sequi! Voluptate impedit quam maiores sit ratione voluptatem cum?
        Voluptatibus omnis cum, dolores dolorum possimus numquam mollitia blanditiis sapiente iusto similique ducimus minus repudiandae eum modi inventore quasi illum quam deserunt labore. Qui maxime velit totam facere. Deserunt, blanditiis!
        Voluptates reprehenderit soluta nesciunt ducimus. Quae enim, esse assumenda libero praesentium delectus minus iure architecto velit laboriosam blanditiis. Atque officiis voluptatem veniam dolorem beatae amet eos provident vel sint qui.
        Dolor suscipit cumque, placeat voluptate optio velit quas reiciendis. Porro sed nostrum consectetur, dolor nobis, consequuntur ea nisi officia voluptatum nulla magnam repellat similique culpa. Accusantium sed debitis vero quia!
        Officia vitae mollitia numquam, sit, odit perspiciatis aperiam blanditiis vel accusamus quisquam reiciendis dolore dicta aspernatur a cupiditate libero! Rerum ab dolore consequuntur doloremque tenetur veritatis soluta voluptate? Provident, placeat!
        Quos sit quis ad nobis recusandae eum error pariatur ea vel. Dignissimos tenetur doloribus inventore quo earum officiis, libero quis molestias architecto debitis distinctio at iure enim similique! Molestias, sunt?
        Officiis quibusdam ratione est reprehenderit, facilis maxime at, exercitationem, libero placeat voluptates minus quo culpa obcaecati dolorum repudiandae a neque? Recusandae laudantium fugit tempore, assumenda dolorum atque aspernatur voluptatibus dolores.
        Dicta magnam officia veritatis repellendus ducimus sint alias, nesciunt, cupiditate sequi dolorum, est deleniti. Asperiores voluptates ab iure et a deleniti quibusdam ratione voluptatem possimus ea. Quod id voluptatem ipsa.
        Odit similique tenetur quis recusandae iste qui culpa dicta! Nihil possimus neque laborum voluptatibus numquam unde suscipit ullam sit molestiae, iure rem repudiandae quisquam fuga voluptates delectus nobis. Ea, beatae.
        Quidem minima, earum aperiam, veritatis mollitia dolor voluptatibus facere magnam eos praesentium ab adipisci porro vel voluptatum quasi asperiores! Quo at, maiores odit sed quam neque! Cupiditate consequuntur minima nobis!
        Nesciunt, quibusdam? Numquam reiciendis iste voluptatem sapiente, exercitationem veritatis rem adipisci. Facere vitae dolor, aut quibusdam eum vel. Aspernatur iste neque dolore dignissimos, ab aperiam enim sint expedita deleniti ducimus?
        Cupiditate quidem quo explicabo nihil neque vel maxime impedit modi, nam vitae nemo facere animi culpa quas quisquam quae unde et possimus eos rem, dolore exercitationem eveniet qui. Quo, possimus?</p>
      </main>
      <Menu active={menuActive} setActive={setMenuActive} header={'Бургер меню'} items={items} />
    </div>
  );
}

export default App;

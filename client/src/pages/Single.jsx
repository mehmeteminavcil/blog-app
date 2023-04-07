import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/571169/pexels-photo-571169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />

        <div className="user">
          <img
            src="https://media.istockphoto.com/id/1152776973/tr/foto%C4%9Fraf/ekstra-i%C5%9F-uzun-bir-yol-gidecek.jpg?s=612x612&w=0&k=20&c=UvBJ8_6E0nd217IQz-SeEFX2O_aDlZw2Ui3fXd_dtjc="
            alt=""
          />
          <div className="info">
            <span>Emin</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write/?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, ipsum? Error odio accusamus voluptatum. Officiis, est
          ullam. Sint, autem, unde culpa esse corrupti velit perspiciatis, non
          dolor illum repudiandae magni reprehenderit veniam. Voluptatem rem
          tempore deserunt, minus quisquam dignissimos maxime qui officiis
          cumque eos commodi! Nostrum autem, velit vitae praesentium tenetur
          harum expedita nihil aperiam quod, facere ullam recusandae unde est,
          distinctio consectetur perferendis reprehenderit amet? Earum, fugit
          minima! Dolorum, aliquam? Beatae, illum. Explicabo, quas? Deleniti
          eius ea veniam blanditiis, repellendus quisquam facere placeat velit
          voluptas molestias cupiditate neque modi dicta quam at voluptate quos
          iste vero ratione? Dignissimos reiciendis, vero labore itaque quaerat
          porro molestiae minus nemo distinctio beatae doloribus nobis aliquid
          expedita quasi iusto, molestias adipisci quia nostrum, quidem eveniet
          enim voluptate! Laborum at alias libero! Totam, officia rerum debitis
          amet veniam voluptatem iure, deserunt expedita veritatis error natus
          quis autem aliquid dolore molestiae deleniti, eligendi minima
          praesentium corrupti ab delectus? Natus, veritatis. Quam dolorum,
          placeat incidunt culpa nostrum sapiente repudiandae, totam corporis
          maiores voluptatum, sequi distinctio ab similique officiis sunt velit.
          Aliquid sapiente cum eveniet repellendus beatae voluptatibus tenetur
          laborum, blanditiis fuga voluptate sint est minus harum perferendis
          neque praesentium ex odit ipsum iure doloribus aperiam numquam nisi!
          Magni incidunt harum voluptatum voluptas. Cumque, recusandae veniam
          eveniet ex, odit voluptates minima, ullam exercitationem nisi officiis
          dicta. Hic sed repellat officiis consequuntur assumenda doloremque
          repellendus nihil aperiam adipisci accusantium? Dolor quae nemo vitae
          ad officiis modi. Quis illum minima tempora earum cum necessitatibus
          cupiditate temporibus eos veniam fugiat ducimus, perspiciatis
          voluptatem. Incidunt voluptatum animi officiis quia nobis, itaque aut
          maiores similique ab! Error veritatis officiis nulla veniam tempora!
          Unde praesentium error quae assumenda reiciendis expedita voluptate
          maxime qui velit. Delectus voluptatibus doloremque quisquam, harum
          magni dolores minus nesciunt quas cumque fugiat, quo eligendi totam
          laudantium provident beatae magnam?
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;

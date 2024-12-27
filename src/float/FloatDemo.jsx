import { Link } from "react-router-dom";
import potato from "../assets/potato.png";

export function FloatDemo() {
  const PotatoImage = ({ floatClass }) => {
    return (
      <img
        src={potato}
        alt="potato image"
        className={`w-24 h-auto ${floatClass} outline`}
      />
    );
  };

  return (
    <div className="m-4">
      <div className="p-4 border">
        <h1 className="text-red-600 text-center">(image)float: float-none</h1>
        <PotatoImage floatClass="float-none" />
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          illo magnam illum numquam sint quidem adipisci atque id, beatae
          aliquid est repellat similique itaque, labore tempora minus?
          Temporibus obcaecati ex mollitia rem optio, id similique amet.
          Perferendis ullam in natus praesentium a, distinctio alias tenetur
          sapiente nostrum voluptates quisquam. Dolores?
        </span>
      </div>
      <div className="p-4 border">
        <h1 className="text-red-600 text-center">(image)float: float-left</h1>
        <PotatoImage floatClass="float-left" />
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni natus
          ullam fugit reiciendis temporibus corrupti debitis commodi illo
          officiis sequi perspiciatis at itaque a facilis sed ratione illum,
          cumque odit eos quam recusandae amet reprehenderit. Nesciunt nostrum
          eos sit unde nam molestias, totam, modi porro distinctio tempora enim
          assumenda eveniet.
        </span>
      </div>
      <div className="p-4 border">
        <h1 className="text-red-600 text-center">(image)float: float-right</h1>
        <PotatoImage floatClass="float-right" />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facere
          itaque quisquam odio aperiam repellendus qui, magni animi quasi
          similique ut aliquid minima autem veniam perspiciatis, assumenda
          voluptatem nam? Impedit, voluptas. Voluptatibus non vel ex facere
          obcaecati vero aliquam, eveniet doloremque reiciendis dignissimos
          officiis doloribus iure, natus at odit voluptate!
        </span>
      </div>
      <div className="p-4 border">
        <h1 className="text-red-600 text-center">(image)float: float-left</h1>
        <h1 className="text-red-600 text-center">(span)block clear-left</h1>
        <PotatoImage floatClass="float-left" />
        <span className="block clear-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint
          sit consequatur illo adipisci natus ipsam, reprehenderit recusandae
          eius, voluptatem eveniet incidunt atque, asperiores quae numquam cum
          odit. Totam natus ullam laboriosam provident voluptates consectetur ut
          quod aliquid nobis facere nostrum, expedita quisquam autem. Natus vero
          adipisci impedit inventore earum!
        </span>
      </div>
      <div className="p-4 border overflow-auto">
        <h1 className="text-red-600 text-center">(container)overflow-auto</h1>
        <h1 className="text-red-600 text-center">(image)float-right</h1>
        <PotatoImage floatClass="float-right" />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          quam velit unde dignissimos beatae magni perspiciatis consectetur
          numquam quas perferendis cupiditate amet minima fugiat maxime, animi
          sapiente eaque. Laudantium maxime officiis praesentium commodi
          dignissimos libero impedit est. Optio maxime magni vel harum
          inventore. Ullam distinctio commodi tempore illo atque enim.
        </span>
      </div>
      <div className="p-4 border after:content-[''] after:table after:clear-both">
        <h1 className="text-red-600 text-center">(container)after:content-[&apos;&apos;] after:table after:clear-both</h1>
        <h1 className="text-red-600 text-center">(image)float-left</h1>
        <PotatoImage floatClass="float-left" />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
          reprehenderit omnis earum beatae deleniti quia possimus atque
          assumenda dicta fugiat! Vel tenetur quas quasi ipsum officiis minus
          quos consectetur, laborum repellat ipsam magni corrupti inventore
          error praesentium, amet alias necessitatibus architecto repudiandae
          accusantium illum ipsa, doloremque blanditiis voluptatem! Natus, amet!
        </span>
      </div>
      <div className="p-4 afer:content-[''] after:table after:clear-both">
        <h1 className="text-red-600 text-center">(image)float-left</h1>
        <PotatoImage floatClass='float-left' />
        <PotatoImage floatClass='float-left' />
        <PotatoImage floatClass='float-left' />
        <PotatoImage floatClass='float-left' />
      </div>

      <div className="text-center">
        <Link to="/" className="hover: underline text-blue-400 ">
          Home
        </Link>
      </div>
    </div>
  );
}

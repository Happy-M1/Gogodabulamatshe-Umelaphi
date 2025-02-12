import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* --left section-- */}
        <div>
          <img className="mb-5 size-8" src={assets.special5} alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla qui
            sequi quos ducimus! Harum, error. Ab amet autem beatae et iure.
            Explicabo voluptates pariatur sunt enim atque illum quae eligendi.
          </p>
        </div>
        {/* --center section-- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* --right section-- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+27-810-80-4516</li>
            <li>dumidesign@gmail.com</li>
          </ul>
        </div>
      </div>
      {/*--Copyright text-- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025@ Umlaphi - all Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

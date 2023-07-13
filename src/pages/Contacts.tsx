//Others
import ContactImage from "../assets/contact.png";

export default function Contacts(): JSX.Element {
  return (
    <div className="flex flex-grow items-center">
      <div className="flex w-full justify-evenly align-center bg-[#fdf4ff]">
        <div className="relative">
          <div className="flex flex-col items-center justify-center my-16">
            <h2 className="text-2xl noto mb-8">CONTACTS</h2>
            <h4 className="mb-2 noto">Address:</h4>
            <p className="mb-4 text-sm text-gray-800 noto">Dirección: 123 Calle Principal</p>
            <h4 className="mb-2 noto">Phone number:</h4>
            <p className="mb-4 text-sm text-gray-800 noto">+(555) 123-4567</p>
            <h4 className="mb-2 noto">E-mail:</h4>
            <p className="mb-4 text-sm text-gray-800 noto">quietform@example.com</p>
          </div>
        </div>
        <div className="relative hidden md:block md:w-[350px] lg:w-[400px]">
          <img src={ContactImage} alt="contact-image" className="absolute top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
}
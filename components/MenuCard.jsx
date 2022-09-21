import Link from 'next/link';
import { AiFillHeart } from 'react-icons/ai';
import { BsChatSquareFill } from "react-icons/bs";

const MenuCard = ({ menu }) => {
  console.log(menu.attributes.slug);
  const imagen = menu.attributes.images.data[0].attributes.url;
  console.log(imagen);
  return(
    <Link href={`/menu/${menu.attributes.slug}`}>
      <div className="
        bg-gray-200 hover:bg-gray-250 shadow-xl hover:shadow-none cursor-pointer w-80 rounded-3xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out;
        "
      >
        <div className="
          relative mt-2 mx-2"
        >
          <div className="
            h-56 rounded-2xl overflow-hidden"
          >
            <img src={`${process.env.NEXT_STRAPI_URL_UPLOADS}${imagen}`} className="object-cover w-full h-full" alt=""
            />
          </div>
          <div className="
            absolute bottom-0 left-0 -mb-4 ml-3 flex flex-row"
          >
            <div className="
              h-10 w-10 flex items-center justify-center text-xl bg-white hover:bg-red-500 text-red-500 hover:text-white rounded-2xl shadow-xl transform-gpu translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <AiFillHeart />
            </div>
            <div className="
              h-10 w-16 ml-2 bg-white hover:bg-blue-600 flex items-center justify-center font-medium text-blue-600 hover:text-white rounded-2xl shadow-xl transform-gpu translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-in-out group"
            >
              <BsChatSquareFill />
              <span className="text-gray-700 ml-2 group-hover:text-white">
                xx
              </span>
            </div>
          </div>
        </div>
        <div className="pt-10 pb-6 w-full px-4">
          <h1 className="font-medium leading-none text-base tracking-wider text-gray-500">
            {menu.attributes.title}
          </h1>
          <p className="my-3 leading-none text-base tracking-wider text-gray-400">
            {menu.attributes.description}
          </p>
        </div>
      </div>
    </Link>
  )
};

export default MenuCard;
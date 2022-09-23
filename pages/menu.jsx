import Layout from '../components/Layout';
// import client from '../apollo-client';
// import { GET_ALL_MENU_ITEMS } from '../graphql/queries';
import MenuCard from '../components/MenuCard';
import { fetchUrl } from '../services/api';
import { useFetchUser } from '../services/authContext';

const MenuList = ({ menuList }) => {
  const { user, loading } = useFetchUser;

  return(
  <Layout user={user}>
    <main className="bg-gray-100 h-full md:h-screen w-full">
      <section className="container mx-auto px-0 md:px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4">
          {menuList.data.map((menu) => (
            <MenuCard menu={menu} key={menu.id} />
          ))}
        </div>
      </section>
    </main>
  </Layout>
  );
};

export default MenuList;

// export const getStaticProps = async () => {
//   const apolloClient = client

//   const { data } = await apolloClient.query({ query: GET_ALL_MENU_ITEMS });
//   console.log(data.menus.data);
//   return {
//     props: {
//       menuList: data.menus.data
//     }
//   }
// }

export async function getStaticProps(){
  const menuResponse = await fetchUrl(`${process.env.NEXT_STRAPI_PUBLIC_URL}menus?populate=*`);
  return {
    props: {
      menuList: menuResponse
    }
  }
}
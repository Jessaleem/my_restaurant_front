import { fetchUrl } from '../../graphql/api';
import { useRouter } from 'next/router';

const MenuItem = () => {

  const router = useRouter()
  console.log(router);
  return(
    <>
      <span>
        from Slug
      </span>
      <div>
        Menú Item. param ID: {router.query.slug}
      </div>
    </>
  )
}

export default MenuItem;

// export async function getServerSideProps({ params }) {
//   const { slug } = params;
//   const menuResponse = await fetchUrl(`${process.env.process.env.NEXT_STRAPI_URL}/menus/${slug}`);
//   console.log(menuResponse);
//   return {
//     props:{
//       menuIt: menuResponse.data
//     }
//   }
// }
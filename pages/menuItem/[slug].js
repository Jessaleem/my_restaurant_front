import { fetchUrl } from '../../graphql/api';

const Menu = ({ menuIt }) => {
  return(
    <span>
      { menuIt }

    </span>
  )
}

export default Menu;

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const menuResponse = await fetchUrl(`${process.env.process.env.NEXT_STRAPI_URL}/menus/${slug}`);
  console.log(menuResponse);
  return {
    props:{
      menuIt: menuResponse.data
    }
  }
}
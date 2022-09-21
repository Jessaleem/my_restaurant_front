import { gql } from '@apollo/client';

const GET_ALL_MENU_ITEMS = gql`
  query menus {
    menus {
      data{
        id
        attributes{
          title
          description
          price
          images{
            data{
              attributes{
                url
              }
            }
          }
          category{
            data{
              attributes{
                type
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_ALL_MENU_ITEMS }
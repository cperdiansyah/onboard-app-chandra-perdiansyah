import NavItem from '@/src/components/Atoms/NavItem';
import { Nav } from '@/src/types';
interface INavItem {
  items?: Nav.NavItem[];
}
const NavList = ({ items }: INavItem) => {
  return items?.map(
    (item, index) => item.href && <NavItem key={index} item={item} />
  );
};

export default NavList;

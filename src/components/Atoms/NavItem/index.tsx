import { Icons } from '@components/icons';
import { cn } from '@/src/lib/utils';
import { Nav } from '@/src/types';

interface INavItem {
  item: Nav.NavItem;
}
const NavItem = ({ item }: INavItem) => {
  return (
    <a
      href={item.href}
      className={cn(
        'nav-parent',
        item.disabled && 'cursor-not-allowed opacity-80',
        item.external && 'w-10/12 !px-0 !py-0 hover:bg-inherit'
      )}
      target={item?.external ? '_blank' : '_self'}
      rel={item?.external ? 'noreferrer' : ''}
    >
      <div
        className={cn(
          'flex justify-between items-center text-sm font-medium text-muted-foreground',
          item.disabled && 'cursor-not-allowed opacity-80'
        )}
      >
        <span className="">{item.title}</span>
        {item.external && <Icons.newPage className="w-3 h-3" />}
      </div>
    </a>
  );
};

export default NavItem;

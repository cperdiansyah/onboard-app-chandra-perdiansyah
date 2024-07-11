import { Nav } from '@/src/types';
import DropdownLink from '@components/Atoms/DropdownLink';
import NavList from '@components/Molecules/NavList';

interface MainNavProps {
  items?: Nav.NavItem[];
  externalLinks?: Nav.DropdownLinkType;
}

export function MainNav({ items, externalLinks }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <nav className="flex items-center gap-6">
        <NavList items={items} />
        <DropdownLink externalLink={externalLinks} />
      </nav>
    </div>
  );
}

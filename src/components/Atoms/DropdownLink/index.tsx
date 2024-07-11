import NavItem from '@/src/components/Atoms/NavItem';
import { Nav } from '@/src/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';

interface IDropdownLink {
  externalLink?: Nav.DropdownLinkType;
}

const DropdownLink = (props: IDropdownLink) => {
  const { externalLink } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="nav-parent">
        {externalLink?.title}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {externalLink?.links?.map((item, index) => (
          <DropdownMenuItem key={index}>
            <NavItem item={item} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownLink;

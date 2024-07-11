import { Nav } from '@/src/types';
import { cn } from '@src/lib/utils';

interface MainNavProps {
  items?: Nav.NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <NavItem items={items} />
    </div>
  );
}

export function NavItem({ items }: MainNavProps) {
  return (
    <nav className="flex gap-6">
      {items?.map(
        (item, index) =>
          item.href && (
            <a
              key={index}
              href={item.href}
              className={cn(
                'flex items-center text-sm font-medium text-muted-foreground',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </a>
          )
      )}
    </nav>
  );
}

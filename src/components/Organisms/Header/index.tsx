import { siteConfig } from '@config/site';
import { MainNav } from '@components/Molecules/MainNav';
import { ThemeToggle } from '@components/Molecules/ThemeToggle';

export function SiteHeader() {
  return (
    <header className="top-0 z-40 sticky bg-background border-b w-full">
      <div className="flex sm:justify-between items-center space-x-4 sm:space-x-0 h-16 container">
        <MainNav
          items={siteConfig.mainNav}
          externalLinks={siteConfig.externalLinks}
        />
        <div className="flex flex-1 justify-end items-center space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}

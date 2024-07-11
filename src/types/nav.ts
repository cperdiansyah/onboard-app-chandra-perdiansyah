export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
};

export type DropdownLinkType = {
  title: string;
  links: NavItem[];
};

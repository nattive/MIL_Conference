export interface RegisterProps {
  name: string;
  email: string;
  gender?: string;
  subject?: string;
  content?: string;
}

export interface SideBarNavProps {
  style?: string;
  scrolled?: boolean;
}

export type HeaderProps = {
  ShowHeader: boolean;
};

export interface SIDEBAR_LINK_PROPS {
  [key: string]: string | boolean;
}

export interface MINISTERS_PROPS {
  []: string;
}

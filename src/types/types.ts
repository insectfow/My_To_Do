export interface LayoutProps extends HeaderProps {
  children: React.ReactNode;
}

export interface HeaderProps {
  title: string;
  subTitle?: string;
}

export interface TodoProps {
  title: string;
  content: string;
  dueDate: string;
  completed: boolean;
}

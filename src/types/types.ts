export interface LayoutProps extends HeaderProps {
  children: React.ReactNode;
}

export interface HeaderProps {
  title: string;
  subTitle?: string;
}

export interface TodoProps {
  id: string;
  title: string;
  content: string;
  dueDate: string;
  completed: boolean;
}

export interface WeatherData {
  date: string;
  weather: string;
  temperature: string;
}

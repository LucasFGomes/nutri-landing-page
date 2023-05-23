interface MenuItemProps {
  children: string;
  url: string;
  onClick?: () => void;
  className?: string;
}

export default function MenuItem({ children, url }: MenuItemProps) {
  return (
    <a
      href={url}
      title={children}
      className="text-second hover:text-primary block px-3 py-2 rounded-md text-base font-medium scroll-smooth"
    >
      {children}
    </a>
  );
}

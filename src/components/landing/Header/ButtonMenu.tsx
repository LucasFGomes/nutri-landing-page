interface ButtonMenuProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

export function ButtonMenu({ toggleMenu, isOpen }: ButtonMenuProps) {
  return (
    <button
      onClick={toggleMenu}
      type="button"
      className="
        inline-flex items-center justify-center 
        p-2 rounded-md text-greenLight
        focus:outline-none focus:text-second 
        transition duration-150 ease-in-out"
    >
      <svg
        className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

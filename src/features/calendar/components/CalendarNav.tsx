import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const links = [
  {
    to: "",
    text: "Exams",
  },
  {
    to: "tests",
    text: "Tests",
  },
];

export default function CalendarNav() {
  return (
    <ul className="flex w-full items-center justify-between gap-2 rounded-lg border-2 border-primary bg-secondary p-1 sm:w-min sm:justify-normal">
      {links.map(({ to, text }) => (
        <li key={to} className="w-full">
          <NavLink
            to={`${to}`}
            className={({ isActive }) =>
              twMerge(
                "inline-block w-full rounded-lg px-4 py-1.5 text-center font-medium text-primary transition-colors hover:bg-white",
                isActive && "bg-white",
              )
            }
          >
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

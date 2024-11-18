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
    <ul className="flex w-min items-center gap-2 rounded-lg border-2 border-primary bg-secondary p-1">
      {links.map(({ to, text }) => (
        <li key={to}>
          <NavLink
            to={`/${to}`}
            className={({ isActive }) =>
              twMerge(
                "inline-block rounded-lg px-4 py-1 font-medium text-primary transition-colors",
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

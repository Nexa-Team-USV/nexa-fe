import Logo from "../components/Logo";
import CalendarLink from "../features/authentication/components/CalendarLink";
import LoginForm from "../features/authentication/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="m-auto grid h-screen max-w-screen-xl grid-rows-[min-content_90fr] p-4 xsm:p-8">
      <div className="flex items-center justify-between">
        <Logo />
        <CalendarLink />
      </div>

      <div className="m-auto w-full space-y-4 rounded-lg border-2 border-primary p-4 xsm:w-96 sm:p-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Login</h2>
          <p>Enter your email and password.</p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}

import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";

export default function LoginPage() {
  return (
    <div>
      <div className="p-4 max-w-xs mx-auto">
        <h1 className="text-6xl text-white font-bold text-center mb-8">
          Sign In
        </h1>
        <p className="text-center text-xl mb-12 text-gray-200">
          Sign in to your account using one of our providers below
        </p>
        <LoginWithGoogle />
      </div>
    </div>
  );
}

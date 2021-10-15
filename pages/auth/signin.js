import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

function Signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-start mt-10 min-h-screen py-10 px-14 text-center">
        <img
          className="w-80 object-contain"
          src="https://links.papareact.com/ocw"
          alt="instagram"
        />
        <p className="text-xs italic">
          This is not a REAL app, it is built for educational purposes only!
        </p>
        <div className="flex items-center pt-20">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
export default Signin;

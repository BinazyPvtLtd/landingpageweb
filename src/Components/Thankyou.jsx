import { CheckCircle2, Home, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/BinazyLogo.jpg";
import Navbar from "./Navbar";

const ThankYou = () => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
        <section className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xl shadow-slate-950/10 sm:p-10">
          <Link
            to="/"
            aria-label="Go to Binazy home page"
            className="mx-auto inline-flex items-center gap-3">
            <img
              src={logo}
              alt="Binazy logo"
              className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
            />
            <span className="text-2xl font-bold text-blue-700">Binazy</span>
          </Link>

          <div className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
            <CheckCircle2
              aria-hidden="true"
              className="h-10 w-10 text-green-600"
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-950 sm:text-4xl">
            Thank you!
          </h1>

          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-600 sm:text-lg">
            Your submission has been received. Our team will review your details
            and get back to you shortly.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <Home aria-hidden="true" className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default ThankYou;

import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const LeadForm = ({ className = "" }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await emailjs.send(
      "service_nmi7t37",
      "template_njc19ad",
      data,
      "pnt8rbEFplKw7tstC",
    );
    reset();
    navigate("/submit-success");
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="w-full rounded-2xl border border-white/25 bg-slate-950/80 p-4 shadow-2xl backdrop-blur-xl sm:p-6 lg:p-7">
        <h2 className="mb-2 text-center text-xl font-bold leading-tight text-white sm:text-3xl">
          Get a Free Consultation
        </h2>

        <p className="mb-5 text-center text-sm leading-6 text-gray-300 sm:mb-8 sm:text-base">
          Fill out the form and our team will get back to you.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-5">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName", { required: "Full name is required" })}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-300 focus:border-blue-400 sm:text-base"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-400">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: "Email is required" })}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-300 focus:border-blue-400 sm:text-base"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-300 focus:border-blue-400 sm:text-base"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-400">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <select
              {...register("service", { required: "Please select a service" })}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400 sm:text-base">
              <option value="" className="text-black">
                Select Service
              </option>
              <option value="Web App" className="text-black">
                Web App
              </option>
              <option value="Mobile App" className="text-black">
                Mobile App
              </option>
              <option value="Custom" className="text-black">
                Custom
              </option>
              <option value="Other" className="text-black">
                Other
              </option>
            </select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-400">
                {errors.service.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-blue-800 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-900 disabled:opacity-50 sm:text-base">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;

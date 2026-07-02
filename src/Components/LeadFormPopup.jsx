import { useEffect, useState } from "react";
import { X } from "lucide-react";
import LeadForm from "./LeadForm";

export default function LeadFormPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
      onClick={(event) => event.target === event.currentTarget && setShow(false)}>
      <div className="relative w-full max-w-md">
        <button
          type="button"
          onClick={() => setShow(false)}
          aria-label="Close popup"
          className="absolute -right-3 -top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-white hover:bg-slate-600">
          <X className="h-4 w-4" />
        </button>
        <LeadForm />
      </div>
    </div>
  );
}

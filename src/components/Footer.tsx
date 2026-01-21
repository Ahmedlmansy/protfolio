
export default function Footer() {
  return (
    <footer className="mt-20 pt-8 border-t border-slate-800 container mx-auto py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          © 2023 Ahmed Mahmoud. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

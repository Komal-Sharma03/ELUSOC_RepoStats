import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} GitHub Repo Contribution Analytics. Powered by Next.js</p>
          
          <p className="mt-2">
            Analyze repository contributions, track development activity, and gain insights.
          </p>
          
          {/* Added the Policy links here */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-500">
            <Link 
              href="/cookie-policy" 
              className="hover:text-white transition-colors underline"
            >
              Cookie Policy
            </Link>
            <span>•</span>
            <Link 
              href="/terms" 
              className="hover:text-white transition-colors underline"
            >
              Terms of Service
            </Link>
          </div>

          <p className="mt-4">
            Developed by <a href="https://github.com/HarshYadav152" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">HarshYadav152</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
"use client"

import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

const DiscordIconSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

const TwitterIconSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-transparent relative overflow-hidden text-slate-600 dark:text-slate-400">
      
      {/* Top Border Glow Divider */}
      <div className="w-full relative h-px bg-slate-200 dark:bg-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-linear-to-r from-transparent via-blue-500/80 dark:via-blue-400/70 to-transparent"></div>
        {/* Added a subtle ambient glow emitting from the border itself */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1/3 max-w-xs h-8 bg-blue-500/10 dark:bg-blue-400/20 blur-2xl rounded-full pointer-events-none"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 flex flex-col gap-16">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Logo Brand Area - Takes 2 cols on Large */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Invest<span className="text-blue-600 dark:text-blue-500">X</span>
              </span>
            </Link>

            <div className="flex items-center gap-4 mt-auto pt-8">
              <Link href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <span className="sr-only">Discord</span>
                <DiscordIconSVG className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <TwitterIconSVG className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Nav Links Grid - Takes 3 cols on Large */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-slate-900 dark:text-slate-200 mb-2">Product</h3>
              <Link href="#" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors">Features</Link>
              <Link href="#" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors">Integrations</Link>
              <Link href="#" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</Link>
              <Link href="#" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors">Changelog</Link>
              <Link href="#" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors">Roadmap</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-slate-900 dark:text-slate-200 mb-2">Company</h3>
              <Link href="#" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors">Our team</Link>
              <Link href="#" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors">Our values</Link>
              <Link href="#" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors">Blog</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-slate-900 dark:text-slate-200 mb-2">Resources</h3>
              <Link href="#" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors">Downloads</Link>
              <Link href="#" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors">Documentation</Link>
              <Link href="#" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-200 dark:bg-white/5"></div>

        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-4">
          <div className="flex flex-col gap-2 max-w-sm">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-200">Join our newsletter</h3>
            <p className="text-sm">Keep up to date with everything InvestX.</p>
          </div>
          <form className="flex w-full max-w-md items-center gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full rounded-lg md:rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-3 md:py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-600 dark:focus:ring-slate-200 focus:border-transparent transition-all"
              required
            />
            <Button 
              type="submit" 
              className="shrink-0 h-10 rounded-lg md:rounded-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-white/90 px-4 py-3 md:py-2.5 text-sm font-medium text-slate-100 dark:text-slate-900 transition-colors border border-slate-100 dark:border-white/5 shadow-sm"
            >
              Subscribe
            </Button>
          </form>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-200 dark:bg-white/5"></div>

        {/* Footer Base */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-slate-300 dark:text-slate-700 mx-1">&middot;</span>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Conditions</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} InvestX, LLC. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

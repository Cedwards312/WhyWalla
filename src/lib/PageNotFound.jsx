import { Link, useLocation } from 'react-router-dom';

export default function PageNotFound() {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-deep font-body">
            <div className="max-w-md w-full text-center">
                <Link to="/" className="inline-flex flex-col leading-none no-underline mb-10">
                    <span className="font-display font-extrabold text-[1.6rem] text-teal tracking-tight leading-none">walla!</span>
                    <span className="font-display font-semibold text-[0.62rem] text-teal-lt tracking-[0.18em] uppercase leading-none mt-1">HEALTH</span>
                </Link>
                <p className="font-display font-extrabold text-7xl text-teal leading-none mb-4">404</p>
                <h1 className="font-display font-bold text-2xl text-white mb-3">Page not found</h1>
                <p className="text-white/75 leading-relaxed mb-8">
                    We couldn't find <span className="font-medium text-white">"{pageName}"</span>. It may have moved, or the link may be out of date.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center bg-teal text-deep font-display text-[0.9rem] font-semibold px-6 py-3 rounded-[6px] no-underline hover:bg-teal-dk transition-colors focus:outline-none focus:ring-2 focus:ring-teal-lt focus:ring-offset-2 focus:ring-offset-deep"
                >
                    Back to home
                </Link>
            </div>
        </div>
    )
}

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// export default function AuthRequiredPage() {
//     const router = useRouter();
//     const [countdown, setCountdown] = useState(5);
//     const searchParams = useSearchParams();
//     const from = searchParams.get('from') || '/';

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCountdown((prev) => {
//                 if (prev <= 1) {
//                     clearInterval(interval);
//                     // window.location.href = `/sign-in?callbackUrl=${from}`
//                     // router.push(`/sign-in?callbackUrl=${from}`)
//                 }
//                 return prev - 1;
//             });
//         }, 1000);

//         return () => clearInterval(interval);
//     }, [router, from]);

//     useEffect(() => {
//         if (countdown <= 0) {
//             router.push(`/sign-in?callbackUrl=${from}`)
//         }
//     }, [countdown, router, from])

//     return (
//         <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
//             <div className="bg-[#1c1c1e] border border-orange-500/30 rounded-2xl p-8 max-w-md w-full text-center shadow-xl">
//                 {/* Icon */}
//                 <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <svg className="w-7 h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                             d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
//                     </svg>
//                 </div>

//                 <h2 className="text-white text-xl font-semibold mb-2">Sign in required</h2>
//                 <p className="text-zinc-400 text-sm mb-6">
//                 Redirecting you to sign in...
//                 </p>

//                 {/* Countdown */}
//                 <div className="flex items-center justify-center gap-2 mb-6">
//                     <span className="text-3xl font-bold text-orange-500">{countdown}</span>
//                     <span className="text-zinc-500 text-sm">seconds</span>
//                 </div>

//                 {/* Progress bar */}
//                 <div className="w-full bg-zinc-800 rounded-full h-1.5 mb-6">
//                     <div
//                         className="bg-orange-500 h-1.5 rounded-full transition-all duration-1000"
//                         style={{ width: `${(countdown / 5) * 100}%` }}
//                     />
//                 </div>

//                 <button
//                     onClick={() => router.push(`/sign-in?callbackUrl=${from}`)}
//                     className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 rounded-xl transition-colors text-sm"
//                 >
//                     Sign in now
//                 </button>
//             </div>
//         </div>
//     );
// }

import React, { Suspense } from 'react';
import AuthRequiredPage from './Comp';

const page = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <AuthRequiredPage />
        </Suspense>
    );
};

export default page;
import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getUserSession } from '@/lib/core/session'
import { addSubscription } from '@/lib/actions/plans'

export default async function Success({ searchParams }) {
    const { session_id } = await searchParams

    if (!session_id)
        throw new Error('Please provide a valid session_id (`cs_test_...`)')

    const {
        status,
        customer_details: { email: customerEmail },
        metadata
    } = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent']
    })

    if (status === 'open') {
        return redirect('/')
    }

    if (status === 'complete') {
        // update user's plan status
        const subInfo = {
            email: customerEmail,
            planId: metadata.planId
        }
        const res = await addSubscription(subInfo);

        return (
            <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
                <div className="bg-[#1c1c1e] border border-white/6 rounded-2xl p-10 max-w-md w-full flex flex-col items-center text-center">

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center mb-6">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M6 14l6 6 10-10" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {/* Heading */}
                    <h1 className="text-2xl font-bold text-white tracking-tight mb-2">
                        You&apos;re all set!
                    </h1>
                    <p className="text-sm text-white/45 mb-1">
                        Your subscription is now active.
                    </p>
                    <p className="text-sm text-white/30 mb-8">
                        A confirmation has been sent to{' '}
                        <span className="text-white/60">{customerEmail}</span>.
                    </p>

                    {/* CTA */}
                    <Link
                        href="/dashboard"
                        className="w-full py-2.5 rounded-xl bg-[#F97316] hover:bg-orange-500 text-white text-sm font-medium transition-colors text-center"
                    >
                        Go to Dashboard
                    </Link>

                    {/* Support */}
                    <p className="text-xs text-white/25 mt-6">
                        Questions?{' '}
                        <a href="mailto:support@hireloop.com" className="text-white/45 hover:text-white/70 transition-colors underline underline-offset-2">
                            support@hireloop.com
                        </a>
                    </p>
                </div>
            </div>
        )
    }
}
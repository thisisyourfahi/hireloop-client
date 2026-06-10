import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro' : 'price_1TgoJ3BQIJMZ2T55aZF0Zdqu',
    'seeker_premium' : 'price_1Tgou4BQIJMZ2T55q1Le6EWc',
    'recruiter_growth' : 'price_1TgouUBQIJMZ2T55fX2rjVeN',
    'recruiter_enterprise' : 'price_1TgouoBQIJMZ2T55cuQiD7ld',
}
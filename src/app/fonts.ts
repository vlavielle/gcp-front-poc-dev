import { Barlow } from 'next/font/google'

const barlow = Barlow({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-barlow',
})

export const fonts = {
  barlow,
}
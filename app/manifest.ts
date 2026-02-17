import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Ruhan Pacolli Portfolio',
        short_name: 'RP Portfolio',
        description: 'Personal portfolio of Ruhan Pacolli, Software Engineer and Founder of EliteDev Agency.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a0a',
        theme_color: '#7c3aed',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}

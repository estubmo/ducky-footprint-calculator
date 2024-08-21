import { Auth0Provider } from "@auth0/auth0-react"

export const Providers({ children }: { children: React.ReactNode }) {
    return (



        <Auth0Provider
            domain="YOUR_DOMAIN"
            clientId={process.env.NEXT_PUBLIC_DUCKY_CLIENT_ID}
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            {children}
        </Auth0Provider>
    )

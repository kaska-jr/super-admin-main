import { ReduxProvider } from "../redux/provider"
export default function LoginLayout({

    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <ReduxProvider>
       
        {children}
        </ReduxProvider>
      </section>
    )
  }
import "@/app/globals.css"
export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className="flex h-screen items-center justify-center w-full   sm:max-w-md ">{children}</section>
  }
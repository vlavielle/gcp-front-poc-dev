

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (    
      <section className='bg-root min-h-screen flex-center'>
        <section className="backdrop-blur-sm min-w-[100%] min-h-screen md:min-w-[80%] flex-center">
          {children}         
        </section>
      </section>    
  );
}

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({
  children,
}: HomeLayoutProps) {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      {children}
    </main>
  );
}
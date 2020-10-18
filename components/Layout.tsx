export default function Layout({ children }) {
  return (
    <main className="antialiased text-gray-900 flex items-center justify-center min-h-screen">
      {children}
    </main>
  );
}

export default function StickyCTA({ children }) {
  return (
    <div className="bg-white p-4 w-24 min-w-full shadow-xs fixed bottom-0 flex items-center justify-center">
      {children}
    </div>
  );
}

export default function Banner({ children }) {
  return (
    <div className="w-24 min-w-full bg-pastel text-base p-4 fixed top-0 z-20">
      {children}
    </div>
  );
}

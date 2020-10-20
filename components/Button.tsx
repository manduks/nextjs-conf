export default function Button({ children, ...rest }) {
  return (
    <a
      href="https://github.com/manduks/nextjs-conf" 
      className="bg-groovy p-4 text-white text-xl font-bold rounded-lg"
      {...rest}
    >
      {children}
    </a>
  );
}

export default function Button({ children, ...rest }) {
  return (
    <button
      className="bg-groovy p-4 text-white text-xl font-bold rounded-lg"
      {...rest}
    >
      {children}
    </button>
  );
}

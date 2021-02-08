export default function ALink({ children, url }) {
  return (
    <a
      className="text-purple-500 underline"
      href={`${url}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
}

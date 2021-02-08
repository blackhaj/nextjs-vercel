const CenteredColumn = ({ children }) => {
  return (
    <main className="flex flex-col w-full max-w-screen-sm mx-auto justify-content mt-12 select-auto px-3">
      {children}
    </main>
  );
};

export default CenteredColumn;

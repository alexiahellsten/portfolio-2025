function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className='markdown inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2  bg-black/40 text-accent-light'>
      {children}
    </span>
  );
}

export default Pill;

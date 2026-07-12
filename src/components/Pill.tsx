function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className='markdown inline-flex items-center rounded-full border border-brand-border bg-transparent px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted mr-2 mb-2'>
      {children}
    </span>
  );
}

export default Pill;

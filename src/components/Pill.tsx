function Pill({ children }: { children: React.ReactNode }) {

  return (
    <span className="markdown inline-block bg-[#172025] text-white px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
      {children}
    </span>
  )
}

export default Pill;
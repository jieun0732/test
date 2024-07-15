export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="h-full w-full min-w-[320px] max-w-[450px] overflow-y-auto text-black01">
        {children}
      </div>
    </>
  );
}

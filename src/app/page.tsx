export default function Home() {
  return (
    <>
      <header className="w-full flex items-center justify-center fixed top-0 text-black">
        <div className="w-full md:w-4/5 flex items-center justify-between px-4 py-2 md:px-0 md:py-3">
          <h2 className="text-2xl md:text-4xl font-bold">MIYUKI</h2>

          <ul className="flex items-center gap-8">
            <li className="text-xs md:text-base font-bold">Home</li>
            <li className="text-xs md:text-base">Gallery</li>
            <li className="text-xs md:text-base">About</li>
          </ul>
        </div>
      </header>

      <main className="h-screen w-full p-4 mt-[12%]">
        <div className="flex flex-col gap-2">
          <div className="grid gap-1">
            <span className="text-[10px] font-bold text-[#CD5FF8]">Fotos Excepcionais Sempre</span>
            <h1 className="text-5xl font-bold">Capture os Momentos Preciosos Para Você</h1>
          </div>

          <span className="font-bold text-xs text-[#BDBDBD]">
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and \
            scrambled it to make a type specimen book"
            }
          </span>
        </div>
      </main>
    </>
  );
}

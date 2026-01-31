export const App = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] h-screen w-full bg-emerald-400 overflow-hidden text-center">
      {/* Lateral Izquierdo - Solo se muestra en pantallas mas grandes que una tablet */}
      <aside className="hidden lg:flex p-4 items-center justify-center">
        About, sinopsis, instrucciones
      </aside>

      {/* Contenedor Central */}
      <main className="grid grid-rows-[1fr_auto_1fr] h-full w-full lg:w-[70vw] bg-emerald-500">
        <header className="bg-slate-100 flex items-center justify-center py-2">
          Pollada Pe!
        </header>

        {/* Contenedor del juego: Mantiene el ratio 3/2 */}
        <div className="flex items-center justify-center p-4">
          <section className="aspect-3/2 w-full max-w-[95dvw] lg:max-w-none bg-white flex items-center justify-center shadow-xl">
            Soy el juegop
          </section>
        </div>

        <footer className="bg-slate-100 flex items-center justify-center py-2">
          Soy la patita
        </footer>
      </main>

      {/* Lateral Derecho - Solo se muestra en pantallas mas grandes que una tablet */}
      <aside className="hidden lg:flex p-4 items-center justify-center">
        Publicidad
      </aside>
    </div>
  );
};

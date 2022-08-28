import '../css/MainPage.css'
function MainPage(){

    (function(d, m){
        var kommunicateSettings = 
            {"appId":"29d447682b603508d12e8b712522f4983","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */

    return(

<div className="drawer bg-gray-900">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
    <div className="drawer-content flex flex-col">

            <div className="w-full navbar bg-gray-900">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
                <div className="flex-1 px-2 mx-2 ml-8"><p className="text-xl font-bold text-yellow-300">RomAcademy</p>
                </div>
                    <div className="flex-none hidden lg:block mr-12">
                        <ul className="menu menu-horizontal">
                        <li><a className="font-medium text-sm text-white">CURSOS</a></li>
                        <li><a className="font-medium text-sm text-white">PRECIOS</a></li>
                        <li><a className="font-medium text-sm text-white">FAQS</a></li>
                        <li><a className="font-medium text-sm text-white">TRABAJA CON NOSOTROS</a></li>
                        <li><a className="font-medium text-sm text-white">INICIAR SESIÓN</a></li>
                        </ul>
                    </div>
            </div>
            

            <div className="hero min-h-screen main">
                <div className="hero-overlay bg-opacity-60">
                </div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        {/* <h1 >APRENDE <br> ALGO NUEVO <br> CADA DÍA/> */}
                        <h1 className="mb-5 text-5xl font-bold text-white">APRENDE<br></br> ALGO NUEVO <br></br> CADA DÍA</h1>
                        <p className="mb-5 font-bold text-white">Sin salir de tu casa. Cancela cuando quieras</p>
                        <button className="btn btn-active btn-sm btn-secondary">
                            <p className="pl-4 pr-4">¡Suscribete!</p>
                        </button>
                        <button className="btn btn-outline btn-sm btn-error ml-4">
                            <p className="pl-4 pr-4">Saber más</p>
                        </button>
                    </div>
                </div>
            </div>


          <div className="flex justify-center mt-12 mb-12 bg-gray-900">
            <p className="font-bold text-4xl text-white">Últimos cursos publicados</p>
          </div>

        <div className="flex justify-center bg-gray-900">

            <div className="card w-96 bg-zinc-900 shadow-xl m-3">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-lg font-medium text-white mb-2">Aprende React desde 0</h2>
                    <p className="text-center text-sm font-bold text-white">Romario Quispe RomCode</p>
                    <p className="text-center text-xs font-bold text-white">Programador</p>
                    <div className="flex justify-between mt-2 mb-2">
                        <div><p className="text-sm text-white font-bold">34 Lecciones</p></div>
                        <div><p className="text-sm text-white font-bold">8 horas</p></div>
                        <div><p className="text-sm text-white font-bold">Ciberseguridad</p></div>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-zinc-900 shadow-xl m-3">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-lg font-medium text-white mb-2">Aprende Vue Js desde 0</h2>
                    <p className="text-center text-sm font-bold text-white">Diego Billy WA4X</p>
                    <p className="text-center text-xs font-bold text-white">Programador</p>

                    <div className="flex justify-between mt-2 mb-2">
                        <div><p className="text-sm text-white font-bold">34 Lecciones</p></div>
                        <div><p className="text-sm text-white font-bold">8 horas</p></div>
                        <div><p className="text-sm text-white font-bold">Ciberseguridad</p></div>
                    </div>
                <div className="card-actions justify-end">
            </div>
            
            </div>
            </div>

            <div className="card w-96 bg-zinc-900 shadow-xl m-3">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="text-center text-lg font-medium text-white mb-2">Aprendiendo Node Js</h2>
              <p className="text-center text-sm font-bold text-white">Rike Ronaldo Rouwnaldo</p>
              <p className="text-center text-xs font-bold text-white">Programador</p>

              <div className="flex justify-between mt-2 mb-2">
                <div><p className="text-sm text-white font-bold">34 Lecciones</p></div>
                <div><p className="text-sm text-white font-bold">8 horas</p></div>
                <div><p className="text-sm text-white font-bold">Ciberseguridad</p></div>
              </div>
              <div className="card-actions justify-end">
              </div>
            </div>
            </div>

        </div>
          
        <div className="flex justify-center mt-24 mb-12">
          <p className="font-bold text-4xl text-white">Los cursos mejor valorados</p>
        </div>

        <div className="flex justify-center">
          <div className="card lg:card-side bg-base-300 shadow-xl h-80 mb-8">
            <div className="card-body w-auto">
              <h2 className="text-lg text-center font-medium text-white mt-4 mb-4">Aprende a programa con Python (Edición 2022)</h2>
                <p className="mb-20 text-center">¿No sabes programar? Mejor, porue en este curso vamos a empezar <br></br>desde cero. Un curso pensado para todos
                    las personas de todas las <br></br> edades, independientemente de su nivel.</p>
                  <div className="flex justify-evenly mt-2 mb-2">
                    <div><p className="text-sm text-white font-bold">34 Lecciones</p></div>
                    <div><p className="text-sm text-white font-bold">8 horas</p></div>
                    <div><p className="text-sm text-white font-bold">Ciberseguridad</p></div>
                  </div>
            </div>
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Album" className="h-full"></img>
                </figure>
          </div>
    </div>

        



    </div>


    <div className="drawer-side">
      <label for="my-drawer-3" className="drawer-overlay"></label> 
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
        {/* <!-- Sidebar content here --> */}
        <li><a className="font-medium text-base text-white">CURSOS</a></li>
        <li><a className="font-medium text-base text-white">PRECIOS</a></li>
        <li><a className="font-medium text-base text-white">FAQS</a></li>
        <li><a className="font-medium text-base text-white">TRABAJA CON NOSOTROS</a></li>
        <li><a className="font-medium text-base text-white">INICIAR SESIÓN</a></li>
      </ul>
    </div>
</div>

    )
}

export default MainPage;
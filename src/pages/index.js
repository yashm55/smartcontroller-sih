import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-row items-center justify-between ${inter.className}`}
    >
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
         <aside id="default-sidebar" className="top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-white">
               <ul className="space-y-2 font-medium">
                  <li>
                     <div className="flex items-center p-2 text-gray-600 rounded-lg group">
                     <Image src="/sih.png" alt="logo" height={40} width={40}/>
                        <span className="ml-3 font-bold ">Microgrid Controller</span>
                     </div>
                  </li>
                  <li><hr></hr><br></br></li>
                  <li className="text-sm text-gray-900">Working Space</li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-orange-100 group">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                           <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap text-gray-800 transition duration-75 group-hover:text-orange-500">Dashboard Overview</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-orange-100 group">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-circle flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-orange-500"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap text-gray-800 transition duration-75 group-hover:text-orange-500">Intrusion Detection</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-orange-100 group">
                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"/><line x1="96" y1="128" x2="160" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20"/><line x1="96" y1="160" x2="160" y2="160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20"/><path d="M56,40H200a8,8,0,0,1,8,8V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V48A8,8,0,0,1,56,40Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20"/><line x1="80" y1="24" x2="80" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20"/><line x1="128" y1="24" x2="128" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20"/><line x1="176" y1="24" x2="176" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20"/>
                        </svg>
                        
                        <span className="flex-1 ml-3 whitespace-nowrap text-gray-800 transition duration-75 group-hover:text-orange-500">Audits</span>
                     </a>
                  </li>
                  <li className="text-sm text-gray-900"><br></br>Admin Space</li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-orange-100 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-orange-500" viewBox="0 0 24 24"><path d="M1,1V11H23V1ZM13,7H4V5h9Zm3,0a1,1,0,1,1,1-1A1,1,0,0,1,16,7Zm3,0a1,1,0,1,1,1-1A1,1,0,0,1,19,7Z"/><path d="M22.69,18.37l1.14-1-1-1.73-1.45.49a3.64664,3.64664,0,0,0-1.08-.63L20,14H18l-.3,1.49a3.64645,3.64645,0,0,0-1.08.63l-1.45-.49-1,1.73,1.14,1a3.33714,3.33714,0,0,0,0,1.26l-1.14,1,1,1.73,1.45-.49a3.64535,3.64535,0,0,0,1.08.63L18,24h2l.3-1.49a3.64645,3.64645,0,0,0,1.08-.63l1.45.49,1-1.73-1.14-1A3.38931,3.38931,0,0,0,22.69,18.37ZM19,21a2,2,0,1,1,2-2A2.00591,2.00591,0,0,1,19,21Z"/><path d="M12,19H4V17h8.2937A7.00761,7.00761,0,0,1,15.408,13H1V23H13.26A6.96194,6.96194,0,0,1,12,19Z"/></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap text-gray-800 transition duration-75 group-hover:text-orange-500">Management</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-orange-100 group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-circle-2 flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-orange-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" /> <line x1="12" y1="12" x2="12" y2="12.01" /> <line x1="8" y1="12" x2="8" y2="12.01" /> <line x1="16" y1="12" x2="16" y2="12.01" /> </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap text-gray-800 transition duration-75 group-hover:text-orange-500">Messeges</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-orange-100 group">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-orange-500" viewBox="0 0 512 512"><title>ionicons-v5-q</title><path d="M256,176a80,80,0,1,0,80,80A80.24,80.24,0,0,0,256,176Zm172.72,80a165.53,165.53,0,0,1-1.64,22.34l48.69,38.12a11.59,11.59,0,0,1,2.63,14.78l-46.06,79.52a11.64,11.64,0,0,1-14.14,4.93l-57.25-23a176.56,176.56,0,0,1-38.82,22.67l-8.56,60.78A11.93,11.93,0,0,1,302.06,486H209.94a12,12,0,0,1-11.51-9.53l-8.56-60.78A169.3,169.3,0,0,1,151.05,393L93.8,416a11.64,11.64,0,0,1-14.14-4.92L33.6,331.57a11.59,11.59,0,0,1,2.63-14.78l48.69-38.12A174.58,174.58,0,0,1,83.28,256a165.53,165.53,0,0,1,1.64-22.34L36.23,195.54a11.59,11.59,0,0,1-2.63-14.78l46.06-79.52A11.64,11.64,0,0,1,93.8,96.31l57.25,23a176.56,176.56,0,0,1,38.82-22.67l8.56-60.78A11.93,11.93,0,0,1,209.94,26h92.12a12,12,0,0,1,11.51,9.53l8.56,60.78A169.3,169.3,0,0,1,361,119L418.2,96a11.64,11.64,0,0,1,14.14,4.92l46.06,79.52a11.59,11.59,0,0,1-2.63,14.78l-48.69,38.12A174.58,174.58,0,0,1,428.72,256Z"/></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap text-gray-800 transition duration-75 group-hover:text-orange-500">Settings</span>
                     </a>
                  </li>
               </ul>
            </div>
         </aside>
         <div className="bg-white flex-grow h-screen">
            <div className="rounded border-2 m-3 grid grid-cols-3 gap-1 justify-evenly p-3">
               <p className="text-gray-800 font-bold text-lg h-7">Admin Dashboard</p>
               <button className="mx-auto bg-red-500 text-sm hover:bg-red-400 text-white font-semibold py-1 px-auto border border-red-300 rounded shadow h-7 w-20 inline-flex items-center">
               <svg className="mx-1" width="20" height="20" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.1336 11C18.7155 16.3755 21 18 21 18H3C3 18 6 15.8667 6 8.4C6 6.70261 6.63214 5.07475 7.75736 3.87452C8.88258 2.67428 10.4087 2 12 2C12.3373 2 12.6717 2.0303 13 2.08949" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/> <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/> <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/> </svg>
                  Alerts
               </button>
               <div className="mb-3 h-7">
                  <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                     <input
                        type="search"
                        className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-gray-800 hover:bg-orange-50 hover:border-orange-500 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-gray-800 outline-none transition duration-200 ease-in-out focus:text-gray-700 focus:outline-none"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2" />=
                     <span
                        className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-700"
                        id="basic-addon2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                           fillRule="evenodd"
                           d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                           clipRule="evenodd" />
                        </svg>
                     </span>
                  </div>
               </div>
               <div className="text-black">Overview</div>
               <div className="col-span-2">



               </div>
               <div className="h-52 flex-grow rounded-lg bg-blue-100 border border-blue-300 m-2">
                  <p className="m-2 text-blue-500">Cybersecurity Status</p>


               </div>
               <div className="h-52 flex-grow rounded-lg bg-purple-100 border border-purple-300 m-2">
                  <p className="m-2 text-purple-500">Secure Communication Status</p>


               </div>
               <div className="h-52 flex-grow rounded-lg bg-green-100 border border-green-300 m-2">
                  <p className="m-2 text-green-500">System Health</p>


               </div>
               <div className="flex flex-grow h-80 rounded-lg bg-gray-100 border border-gray-300 m-2 col-span-3">
                  <p className="m-2 text-gray-500">Statistics</p>


               </div>
            </div>
         </div>

      
    </main>
  )
}

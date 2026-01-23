import React from 'react'

const page = () => {
  return (
    
<aside className="h-screen bg-gray-900 text-white \n              w-20 sm:w-64 \n              flex flex-col items-center sm:items-start \n              py-6">

  { /* Logo */ }
  <div className="mb-10">
    <img src="https://via.placeholder.com/40" alt="Logo" className="mx-auto" />
  </div>

  { /* Menu */ }
  <nav className="flex flex-col gap-4 w-full px-2 sm:px-4">

    { /* Item 1 */ }
    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 justify-center sm:justify-start">
      <span className="text-xl">🏠</span>
      <span className="hidden sm:block">الرئيسية</span>
    </a>

    { /* Item 2 */ }
    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 justify-center sm:justify-start">
      <span className="text-xl">📋</span>
      <span className="hidden sm:block">المهام</span>
    </a>

    { /* Item 3 */ }
    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 justify-center sm:justify-start">
      <span className="text-xl">⚙️</span>
      <span className="hidden sm:block">الإعدادات</span>
    </a>

  </nav>
</aside>


  )
}

export default page

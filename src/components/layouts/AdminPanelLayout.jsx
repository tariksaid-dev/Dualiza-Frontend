import React from "react";

function AdminPanelLayout({ children }) {
  return (
    <main className="bg-default text-default text-base selection:text-foreground w-full h-screen flex justify-center items-center pt-24 pb-12">
      {/* pt-[55px]"> */}
      {/* mx-4 md:mx-48 lg:mx-56 xl:mx-80 2xl:mx-96"> */}
      {/* <h1 className="text-2xl text-center m-20 font-bold">
        ADMINSITRACIÓN DUALIZA
      </h1> */}
      {children}
    </main>
  );
}

export default AdminPanelLayout;

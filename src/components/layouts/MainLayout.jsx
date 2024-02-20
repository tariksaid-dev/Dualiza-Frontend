import {Button} from "@/components/ui/button"

function MainLayout({ children }) {
  return (
    // <div className="h-full bg-skin-dark-blue text-white text-base selection:bg-skin-orange-lanze selection:text-white">
        <div className="min-h-screen bg-background text-primary-foreground font-sans antialiased theme-orange dark">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter ">Hello there</h1>
          <h2 className="text-muted-foreground">Hi!</h2>
          <Button className="bg-primary">Button</Button>
      {children}
    </div>
  );
}

export default MainLayout;

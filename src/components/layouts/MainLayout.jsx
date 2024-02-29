import { Button } from "@/components/ui/button";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-background-foreground font-sans antialiased theme-orange">
      {/* <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter ">
        Hello there
      </h1>
      <h2 className="text-muted-foreground">Hi!</h2>
      <Button className="bg-primary">Button</Button> */}
      {children}
      {/* <div className="min-h-[250vh]"></div> */}
    </div>
  );
}

export default MainLayout;

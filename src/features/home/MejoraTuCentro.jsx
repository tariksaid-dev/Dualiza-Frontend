import React from 'react'
import CustomButton from './CustomButton'
import { Button } from "@/components/ui/button";


const MejoraTuCentro = () => {

  const handleClickVisit = () => {
    window.open("https://www.ieshlanz.es/documentos/", "_blank")
  }

  return (
    <section className="flex flex-col items-center justify-between space-y-4 h-screen relative pt-24">
      <div className="container px-4 md:px-6 p">
        <div className="space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Mejora tu centro</h2>
            <p className="text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed  text-pretty ">
              Accede a los recursos que te ayudarán a mejorar la calidad de tu centro educativo.
            </p>
          </div>
          <div class="space-y-3 w-[250px]">
            <span data-state="closed">
              <div class="overflow-hidden rounded-md">
                <img alt="React Rendezvous" loading="lazy" width="250" height="330" decoding="async" data-nimg="1" class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]" srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75" />
              </div>
            </span>
            <div class="space-y-1 text-sm">
              <h3 class="font-medium leading-none">React Rendezvous</h3>
              <p class="text-xs text-muted-foreground">Ethan Byte</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MejoraTuCentro
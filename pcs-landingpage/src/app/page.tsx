import Image from "next/image";
import CardLink from "./components/custom/cardLink";

export default function Home() {
  return (
    <div className="w-full bg-white min-h-screen py-[30px]">
      <div className="flex flex-col gap-y-4 justify-center items-center w-full">
        <Image
          className="dark:invert"
          src="/logoPCSaja.png"
          alt="Logo PCS"
          width={150}
          height={38}
          priority
        />
        <div className="flex flex-col w-full justify-center items-center">
          <span className="font-inter text-[25px] text-primary-900 font-bold">
            Petrokopindo Cipta Selaras
          </span>
          <span className="font-inter text-[16px] text-secondary-400 font-semibold">
            “Langkah pertama menuju experience seru dimulai dari sini - pilih
            aplikasinya dan jelajahi!”
          </span>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-10">
          <div className="grid grid-cols-3 gap-10">
          <CardLink logo="/dof.svg" title="DOF" subtitle="Digital Office" link="https://google.com"/>
          <CardLink logo="/dof.svg" title="DOF" subtitle="Document Office" link="https://google.com"/>
          <CardLink logo="/dof.svg" title="DOF" subtitle="Document Office" link="https://google.com"/>
          </div>

          <div className="grid grid-cols-2 gap-10">
          <CardLink logo="/dof.svg" title="DOF" subtitle="Document Office" link="https://google.com"/>
          <CardLink logo="/dof.svg" title="DOF" subtitle="Document Office" link="https://google.com"/>
            
          </div>
        </div>
      </div>
    </div>

  );
}

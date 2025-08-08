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
        <div className="flex flex-col w-full justify-center items-center text-center px-4">
          <span className="font-inter text-[25px] text-primary-900 font-bold">
            Petrokopindo Cipta Selaras
          </span>
          <span className="font-inter text-[16px] text-secondary-400 font-semibold">
            “Langkah pertama menuju experience seru dimulai dari sini - pilih aplikasinya dan jelajahi!”
          </span>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-10 px-4">
       
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-width-[1200px]">
            <CardLink logo="/dof.svg" title="DOF" subtitle="Document Office" link="http://dof.petrokopindo.com"/>
            <CardLink logo="/erp.svg" title="ERP" subtitle="Enterprise Resource Planning" link="http://pcs-vpn.avolut.com"/>
            <CardLink logo="/kms.svg" title="KMS" subtitle="Knowledge Management System" link="http://kms.petrokopindo.com"/>
          </div>
     
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <CardLink logo="/dms.svg" title="DMS" subtitle="Dashboard Management System" link="http://dms.petrokopindo.com"/>
            <CardLink logo="/haloIT.svg" title="HALO IT" subtitle="Help Desk" link="http://haloit.petrokopindo.com"/>
          </div>
        </div>
      </div>
    </div>
  );
}

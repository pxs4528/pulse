import Image from "next/image";
import pulseLogo from "@/public/pulse-logo.svg";
import InitPatientForm from "@/components/forms/InitPatientForm";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO Verify somehow */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex items-center flex-wrap gap-4 mb-12 header">
            <Image src={pulseLogo} width={1000} height={1000} alt="logo" className="h-20 w-fit" />
            <h1 className="italic text-red-700">pulse</h1>
          </div>
          <InitPatientForm></InitPatientForm>

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 pulse
            </p>
            <Link href="/?admin=true" className="text-green-500"> Admin </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

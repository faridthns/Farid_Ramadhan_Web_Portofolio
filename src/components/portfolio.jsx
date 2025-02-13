import React from "react"
import Projects from "./projects"

export default function Portfolio() {
  return (
    <div id="portofolio" className="section">
      <div className="container mx-auto max-w-[1000px] px-3 pt-3 pb-[20px]">
        <div className="flex flex-col lg:align-center lg:flex-row justify-between mb-[50px]">
          <div
            className="order-2 lg:order-1 mt-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4 className="text-secondary text-[24px]">
              Projek yang telah saya selesikan
            </h4>
            <div className="text-gradient max-w-[700px] mx-auto text-[24px]">
              Dibawah ini adalah beberapa projek yang telah saya selesaikan.
            </div>
          </div>
          <div
            className="order-1 lg:order-2 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[50px]">
              03
            </h2>
            <h2>Completed Projects</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <Projects
            type="NFT Mint"
            desc="NFT Mint Page"
            img="/images/seikeleton.png"
            link="https://seikeleton.vercel.app/"
          />
          <Projects
            type="Guest Registration"
            desc="PT. Riscon Victory Guest Management & Attendance Website"
            img="/images/tamu.riscon.png"
            link="https://tamu.riscongroup.id/"
          />
          <Projects
            type="E-Commerce"
            desc="CV. Ginsadv Official Website"
            img="/images/ginsadv.jpg"
            link="https://ginsadv.id/"
          />
        </div>
      </div>
    </div>
  )
}

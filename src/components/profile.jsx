import React from "react"
import Skill from "./skill"

export default function Profile() {
  return (
    <div id="profile" className="section">
      <div className="container mx-auto max-w-[1000px] p-3 overflow-hidden ">
        <div
          className="font-secondary text-center font-bold"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <h4 className="text-secondary mb-3 text-[18px]">Skill Yang Saya Kuasai</h4>
          <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[18px]">
            Saya memiliki beberapa skill pemrograman yang telah saya pelajari di perkuliahan dan beberapa pengalaman magang saya. 
            <br />
            Seperti berikut.
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between ">
          <div
            className="text-center w-full max-w-[400px] mx-auto mb-[50px] "
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="w-[300px] h-[300px] bg-gradient pt-[50px] rounded-full overflow-hidden mx-auto">
              <img src="/images/profile.png" alt="" />
            </div>
            <h2 className="text-gradient text-[50px]">Farid Ramadhan</h2>
          </div>
          <div
            className="w-[80vw] lg:w-full lg:pt-[50px] lg:ml-5 mx-auto"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 text-center justify-center">
              <Skill lang="Jquery" img="/images/1.png" />
              <Skill lang="BS5" img="/images/2.png" />
              <Skill lang="CSS3" img="/images/3.png" />
              <Skill lang="HTML5" img="/images/4.png" />
              <Skill lang="PHP" img="/images/php.png" />
              <Skill lang="CI4" img="/images/ci.svg" />
              <Skill lang="React" img="/images/react.png" />
              <Skill lang="Tailwind" img="/images/tailwind.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

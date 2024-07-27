import React from "react"

export default function Skill(props) {
  return (
    <div className="w-[25vw] lg:w-[10vw] mx-auto">
      <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group ">
        <img src={props.img} alt={props.lang} />
        <div className="absolute p-5 backdrop-blur-xl  bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
          <div className="text-center w-full text-white ">
            <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
              <h4 className="text-gradient">{props.lang}</h4>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

const Head = (data) => {
const info=data.data
console.log(info.classname)
  return (
        <hgroup className={` mt-2 text-center  ${info.classname?'info.classname':'sm:text-right'} `}>
          <h1 className="font-semibold text-xl lg:text-3xl">{info?.h}</h1>
          <p className="text-lg lg:text-xl  text-[#54585bdd] mt-2">
            {info?.p}
          </p>
        </hgroup>
  )
}

export default Head

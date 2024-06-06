import React from 'react'

const ClassicMenCard = ({imgURL, bigClassicMan, changeBigClassicMan}) => {
    const handleClick = () => {
        if(bigClassicMan !== imgURL){
            changeBigClassicMan(imgURL)
        }
    }
  return (
    <div onClick={handleClick}>
        <div className={`rounded-full flex items-center p-4 border border-white-400 ${bigClassicMan==imgURL && 'bg-white-400'}`}>

        </div>
    </div>
  )
}

export default ClassicMenCard;
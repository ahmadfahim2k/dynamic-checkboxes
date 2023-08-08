function ToggleSlider({ isToggled = false, onToggle }) {
  //change colors

  return (
    <div className='my-auto mx-0'>
      <label className='switch relative inline-block w-[60px] h-[34px] select-none'>
        <input 
            className={`opacity-0 w-0 h-0`}
            type='checkbox' 
            checked={isToggled} 
            onChange={() => onToggle(true)} 
            />
        <span 
          className={`slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] transition-[0.15s] rounded-[34px] 
          before:absolute before:h-[26px] before:w-[26px] before:left-1 before:bottom-1 before:bg-white before:transition-[0.15s] before:rounded-[34px] before:content-[""]  ${isToggled? 'bg-[#2196f3] cursor-not-allowed before:translate-x-[26px]' : ''}`}/>
      </label>
    </div>
  )
}

export default ToggleSlider;
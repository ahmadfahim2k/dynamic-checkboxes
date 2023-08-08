function Checkbox({ label, check, toggleCheck }) {

    function handleCheckboxChange() {
        toggleCheck(label);
    }

    return (
        <label className='m-3 bg-white rounded-lg basis-1/5 flex justify-start select-none'>
            <input
                className='w-5 h-5 ml-5 mx-0 my-auto select-none'
                type="checkbox"
                checked={check}
                onChange={handleCheckboxChange}
            />
            <span className='mx-5 my-1 text-[2rem] select-none cursor-pointer'>{label}</span>
        </label>
    )
}

export default Checkbox;
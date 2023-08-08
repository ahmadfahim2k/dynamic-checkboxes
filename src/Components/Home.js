import Control from './Control';
import Checkbox from './Checkbox';
import { useRecoilState } from 'recoil';
import { itemsAtom } from '../Recoil';

function Home() {

    //state of all the checkboxes
    const [items, setItems] = useRecoilState(itemsAtom);

    function setAllActive(key) {
        //handle logic to change state of all related strings
        const newItems = {...items};
        newItems[key] = newItems[key].map(obj => {return {...obj, check: true}});
        setItems(newItems);
    }

    function toggleCheck(label) {
        //finds the checkbox being changed.
        const newItems = {};
        Object.keys(items).forEach(key => {
            newItems[key] = items[key].map(obj => {
                if(obj.str === label)
                    return {...obj, check: !obj.check};
                else return {...obj};
            })
        });
        setItems(newItems);
    }

    function checkSliderState(key) {
        const res = items[key].every(obj => obj.check);
        return res;
    }

    return (
        <>
            <h1 className='p-4 text-4xl'>Role Assignment</h1>
            <section className='my-5 mx-auto bg-white w-full flex flex-row justify-around flex-wrap'>
                {Object.keys(items).map((key) => {
                    return <Control key={key} keyText={key} active={checkSliderState(key)} setAllActive={setAllActive} />
                })}
            </section>
            <section className='flex flex-row justify-around flex-wrap'>
                {Object.keys(items).map(key => items[key].map(obj => {
                    return <Checkbox key={obj.str} label={obj.str} check={obj.check} toggleCheck={toggleCheck} />
                }))}
            </section>
        </>
    )
}

export default Home;
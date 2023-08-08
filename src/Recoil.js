import { atom } from "recoil";

export const itemsAtom = atom({
    key: 'items',
    default: {
        'Tests': [
            {str: 'Test 1', check: false}, 
            {str: 'Test 2', check: false}, 
            {str: 'Test 3', check: false}, 
            {str: 'Test 4', check: false}
        ],
        'Plants': [
            {str: 'Plant 1', check: false}, 
            {str: 'Plant 2', check: false}, 
            {str: 'Plant 3', check: false}, 
            {str: 'Plant 4', check: false}
        ],
        'Animals': [
            {str: 'Animal 1', check: false}, 
            {str: 'Animal 2', check: false}, 
            {str: 'Animal 3', check: false}, 
            {str: 'Animal 4', check: false}
        ],
        'Birds': [
            {str: 'Bird 1', check: false}, 
            {str: 'Bird 2', check: false}, 
            {str: 'Bird 3', check: false}, 
            {str: 'Bird 4', check: false}
        ],
    }
})
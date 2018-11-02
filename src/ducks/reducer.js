const initialState = {
    houses : []
}

const ADD_HOUSE = 'ADD_HOUSE';
const DELETE_HOUSE = 'DELETE_HOUSE';


//should be dumb and a mail carrier
export default function reducer(state = initialState, action){
    switch(action.type){
        case ADD_HOUSE:
         return {...state, houses: [...state.houses, action.payload] };
         case DELETE_HOUSE:
         let list = [...state.houses];
         list.splice(action.payload, 1);
         return{...state, houses: list}
         default:
         return state;
    }
}
//action builders return objects
export function addHouse(value){
    return {
        type: ADD_HOUSE,
        payload: value
    }
}

export function deleteHouse(index){
    return{
        type: DELETE_HOUSE,
        payload: index
    }
}
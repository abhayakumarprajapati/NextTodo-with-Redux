import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { createAppSlice } from "@/lib/createAppSlice";


// Define a type for the slice state
interface TodoState {
    task: string,
    isCompleted: boolean,


}



// Define the initial state using that type
// const initialState: CounterState = {
//   value: 0,
// }

const initialState = {

    task: '',

    taskList: [] as TodoState[]
}

export const todosSlice = createAppSlice({
    name: 'todos',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        onchangeText: (state, action) => {

            state.task = action.payload ?? ''

        },
        listItem: (state, action) => {

            const { id, data } = action.payload

            state.taskList[id].task = data;

        },
        toggleTaskCompletion: (state, action) => {

            const index = action.payload;

            state.taskList[index].isCompleted = !state.taskList[index].isCompleted

        },

        addTask: (state) => {
            let obj = {
                task: state.task,
                isCompleted: false
            } as TodoState
            state.taskList = [...state.taskList, obj];
            state.task = ' '
        },
        deleteTask: (state, action) => {

            

                let id = action.payload;

                state.taskList =  state.taskList.filter((item, i) => i !== id)


            

        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },

        updateTask: (state, action) => {

        }
    },
})

export const { addTask, deleteTask, updateTask, onchangeText, listItem, toggleTaskCompletion } = todosSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default todosSlice.reducer
Here I am learning `useEffect()` , `useReducer()` and `Context API` .



`useEffect()`

useEffect(()=>{
    //some codes
},[dependencies])

useEffect runs when there is change in its dependencies, if no dependencies are provided the useEffect runs once

`useReducer()`

const[state,dispatchFn] = useReducer(reducerFn,initial value)

const dispatchFn=(state,value)=>{
    return updated state;
}

initial values like {value: "", property2 : ""}

`contextAPI`

my understanding is that this is used for the shortening the props and managing it by making a new file and storing objects there...
and we can use

context API like example here:

    AuthContext = React.createContext({property:value})

    <AuthContext.Provider value = {{
        property: value
    }} ></AuthContext.Provider>
    
    
    <AuthContext.Consumer >
        {(ctx)=>{
            return jsx code goes here..
        }}
    </AuthContext.Consumer>


alternative way is to use built-hook i.e`useContext()`

const variable = useContext(ContextName);

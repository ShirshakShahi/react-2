Here I am learning `useEffect()` , `useReducer()` and `Context API` .



`useEffect()`

useEffect(()=>{
    //some codes
},[dependencies])

useEffect runs when there is change in its dependencies, if no dependencies are provided the useEffect runs once

`useReducer()`

syntax:

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


`note that : we use Context only if the prop is forwarded, if it is directly passed then we simply pass the value as props  and  use Context when we have to pass props to alot of Components and that part does the same work always like inside homepage the logout button always logs the user out so.`

alternative way is to use built-hook i.e `useContext()`

const variable = useContext(ContextName);



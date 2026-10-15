// export function TabButton(props){
//     return(
//         <li>
//             <button>
//                 {props.children}
//             </button>
//         </li>
//     );
// }

// vagy

export function TabButton({children}){
    function handleClick(){
        console.log(`Meg lett nyomva a ${children} gomb`)
    }
    
    return(
        <li>
            <button onClick={handleClick}>
                {children}
            </button>
        </li>
    );
}
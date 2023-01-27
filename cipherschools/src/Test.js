import React, {Component} from "react";

// const Test = () => {
//   return (
//     <div>
//     <h1>HelloWorld</h1>
//     </div>
//   );
// };
// export default Test;

class Test extends Component{
    render() {
        console.log("Hello");
        return (
            <div>
                <h1 
                id="testId"
                style={{
                    color : "red",
                }}
                >
                Hello World
                </h1>
            </div>
        );
    }
}



export default Test;
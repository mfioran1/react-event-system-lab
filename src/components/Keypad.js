import React from 'react' 

class Keypad extends React.Component {
    
    output(){
        console.log('Entering password...')
    }
    render(){
        return (
            <div>
                <input onKeyUp={this.output} type="password"></input>
            </div>
        )
    }

}
export default Keypad
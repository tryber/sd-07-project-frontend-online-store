import React from 'react';


class CampoDeBusca  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search:''
        };
        this.handlerChange = this.handlerChange.bind(this);
        }

        handlerChange({target}) {
            const {value} = target;

            this.setState ({
                search : value,
            });
        }
    render(){
        const {search} = this.props
        return (
            <div>
                <input type="text" value={search} onChange={this.handlerChange}/>
            </div>
        )}

   }



export default CampoDeBusca;

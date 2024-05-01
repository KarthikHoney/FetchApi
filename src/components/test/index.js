import React, { Component } from "react";
import ApiItems from "./testAction";

class MyReact extends Component {
    state = { valueStored: [] };

    componentDidMount() {
        this.apiFetchMethod();
    }

     apiFetchMethod = async () => {
        const response = await fetch('https://www.boredapi.com/api/activity');
        const data = await response.json();
        this.setState(prevState=>({valueStored:[...prevState.valueStored,data
        ]}));
    }

    render() {
        const { valueStored } = this.state;
        return (
            <div>
                <ul>
                    {
                      valueStored.map((each)=>(<ApiItems key={each.id} apiItems={each}/>))
                    }
                </ul>
            </div>
        );
    }
}

export default MyReact;

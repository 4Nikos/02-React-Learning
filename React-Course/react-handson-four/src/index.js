import React from "react";
import ReactDOM from "react-dom";

const App = props => {
    return <NumberOfStudents />;
};

class NumberOfStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allEnrolled: 0,
            allWaitListed: 0,
            // optional start - I understand the these two fields are not necessary, but if initial value is not set and user clicks on a button to increase Students it results in error. Setting initial value to 0 prevents the error.
            addEnrolled: 0,
            addWaitlisted: 0,
            // optional end
        };
    }
    enrolledStudents() {
        this.setState({
            allEnrolled: this.state.allEnrolled + parseInt(this.state.addEnrolled)
        });
    }
    enrolledIncrement() {
        this.setState({ allEnrolled: this.state.allEnrolled + 1 });
    }

    waitlistedStudents() {
        this.setState({
            allWaitListed: this.state.allWaitListed + parseInt(this.state.addWaitlisted)
        });
    }
    waitlistedIncrement() {
        this.setState({ allWaitListed: this.state.allWaitListed + 1 });
    }

    render() {
        return (
            <div>
                <h2>Enrolled Students: {this.state.allEnrolled}</h2>
                <button onClick={this.enrolledIncrement.bind(this)}>Add 1 Enrolled Student</button>
                <br />
                <h4>Add Multiple Enrolled Students:</h4>
                <input
                    type="number" placeholder='type a number'
                    onChange={event => this.setState({ addEnrolled: event.target.value })}
                    value={this.state.addEnrolled}
                />
                <button onClick={this.enrolledStudents.bind(this)}>Increase Students</button>

                <h2>Waitlisted Students: {this.state.allWaitListed}</h2>
                <button onClick={this.waitlistedIncrement.bind(this)}>Add 1 Waitlisted Student</button>
                <br />
                <h4>Add Multiple Waitlisted Students:</h4>
                <input
                    type="number" placeholder='type a number'
                    onChange={event => this.setState({ addWaitlisted: event.target.value })}
                    value={this.state.addWaitlisted}
                />
                <button onClick={this.waitlistedStudents.bind(this)}>Increase Students</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
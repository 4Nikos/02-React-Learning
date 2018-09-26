import React from "react";
import ReactDOM from "react-dom";

const tableData = (state1, population1, capital1, state2, population2, capital2, state3, population3, capital3, state4, population4, capital4) => {
    return (
        <table id="tableStorm">
            <tr>
                <th>State</th>
                <th>Population</th>
                <th>Capital</th>
            </tr>
            <tr>
                <td>{state1}</td>
                <td>{population1}</td>
                <td>{capital1}</td>
            </tr>
            <tr>
                <td>{state2}</td>
                <td>{population2}</td>
                <td>{capital2}</td>
            </tr>
            <tr>
                <td>{state3}</td>
                <td>{population3}</td>
                <td>{capital3}</td>
            </tr>
            <tr>
                <td>{state4}</td>
                <td>{population4}</td>
                <td>{capital4}</td>
            </tr>
        </table>
    );
};
ReactDOM.render(
    tableData("Idaho", "1.753 million", "Boise", "Tennessee", "6.651 million", "Nashville", "Maine", "1.331 million", "Agusta", "Wisconsin", "5.779 million", "Madison"),
    document.getElementById('root')
);

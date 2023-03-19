import './App.css';
import React from 'react';
import Split from "react-split";
import TableComponent from "./components/TableComponent/TableComponent";
import OptionsComponent from "./components/OptionsComponent/OptionsComponent";
import FormComponent from "./components/FormComponent/FormComponent";
import DummyComponent from "./components/DummyComponent/DummyComponent";
import HeaderModule from './components/header/header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            panelSizes: [],
        };
    }

    componentDidMount() {
        this.loadPanelSizesFromStorage();
    }

    onDragEvent(paneIdentifier, sizes) {
        localStorage.setItem(paneIdentifier, sizes);

        this.loadPanelSizesFromStorage();
    }

    render() {
        return (
            <div>
                <HeaderModule />
                <Split
                    className="split"
                    direction="vertical"
                    sizes={this.state.panelSizes.slice(0, 2)}
                    onDragEnd={(sizes) => {
                        this.onDragEvent('main', sizes);
                    }}
                >
                    <Split
                        className="split-memet"
                        direction="horizontal"
                        sizes={this.state.panelSizes.slice(2, 4)}
                        onDragEnd={(sizes) => {
                            this.onDragEvent('child1', sizes);
                        }}
                    >
                        <TableComponent />
                        <OptionsComponent data={this.state.panelSizes} />
                    </Split>

                    <Split
                        className="split-memet"
                        direction="horizontal"
                        sizes={this.state.panelSizes.slice(4, 6)}
                        onDragEnd={(sizes) => {
                            this.onDragEvent('child2', sizes);
                        }}
                    >
                        <FormComponent />
                        <DummyComponent />
                    </Split>
                </Split>
            </div>
        );
    }

    loadSinglePanelSize(paneIdentifier) {
        const panelSizes = localStorage.getItem(paneIdentifier);

        if (panelSizes != null) {
            return panelSizes.split(',').map((i) => parseFloat(i));
        } else {
            return [50, 50];
        }
    }

    loadPanelSizesFromStorage() {
        const panelSizes = [];
        panelSizes.push(this.loadSinglePanelSize('main'));
        panelSizes.push(this.loadSinglePanelSize('child1'));
        panelSizes.push(this.loadSinglePanelSize('child2'));

        this.setState({panelSizes: panelSizes.flat()});
    }
}

export default App;

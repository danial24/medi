import ContainerBase from './ContainerBase';
import React from 'react';
import { InstantSearch, SearchBox, Hits, Highlight, RefinementList, Pagination, CurrentRefinements, ClearAll } from 'react-instantsearch/dom';
function Product({ hit }) {
    return (
        <div>
            <div style={{ marginTop: '10px' }}>
                <span className="hit-name">
                    <Highlight attributeName="name" hit={hit} />
                </span>
            </div>
        </div>
    );
};

export default class HomeScreen extends ContainerBase {

    constructor(props) {
        super(props);
    }
    componentWillMount() {
        super.componentWillMount();
    }
    componentDidMount() {
        super.componentDidMount();
    }
    componentWillUnmount() {
        super.componentWillUnmount();
    }
    render() {
        return (
            <div>
                <div>
                    <InstantSearch
                        appId="01OQ7GEEOR"
                        apiKey="1b66df875a6a370c8177ecb8473acdb5"
                        indexName="getstarted_actors"
                    >
                        <CurrentRefinements />
                        <ClearAll />
                        <SearchBox />
                        <RefinementList attributeName="rating" />
                        <Hits hitComponent={Product} />
                        <Pagination />
                    </InstantSearch>
                </div>
            </div>);
    }

}
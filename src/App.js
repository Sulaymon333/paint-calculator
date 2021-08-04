import AmountCost from './components/AmountCost';
import CostSummary from './components/CostSummary';
import SpaceInfo from './components/SpaceInfo';
import Form from './components/Form';
import Nav from './components/Nav';

function App() {
    return (
        <div className="bg-gray-50 pb-40">
            <Nav />
            <main className="max-w-screen-2xl mx-auto mt-10">
                <div className="grid grid-flow-row-dense md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 mb-20">
                    <Form />
                    <AmountCost />
                </div>
                <div className="grid grid-flow-row-dense md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 mb-10">
                    <CostSummary />
                    <SpaceInfo />
                </div>
            </main>
        </div>
    );
}

export default App;

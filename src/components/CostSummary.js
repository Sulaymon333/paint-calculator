import React from 'react';
import SpanModifier from './SpanModifier';

const CostSummary = () => {
    return (
        <div className="rounded-md overflow-hidden shadow-lg p-5 mb-4 bg-indigo-200 mx-32">
            <h2 className="text-xl font-semibold mb-3">Overall Cost Summary</h2>
            <p className="text-md font-medium">
                - Total area to be painted: <SpanModifier value="364.00 m²" />
            </p>
            <p className="text-md font-medium">
                - Total area using surface modifier: <SpanModifier value="564.00 m²" />
            </p>
            <p className="text-md font-medium">
                - Total litres needed: <SpanModifier value="169.811" />
            </p>
            <p className="text-md font-medium">
                - Total cost for the building: <SpanModifier value="1000.00 €" />
            </p>
        </div>
    );
};

export default CostSummary;

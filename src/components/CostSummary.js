import { useContext } from 'react';
import { FormContext } from '../store/contextProvider';
import { currencyFormatter } from '../utils';
import SpanModifier from './SpanModifier';
import spaceInfo from '../spaceInfo.json';

const CostSummary = () => {
    const formCtx = useContext(FormContext);
    const { pricePerLitre, sqmPerLitre, levels } = formCtx.formContext;
    let totalArea = 0;
    let totalCost = 0;
    let totalLitre = 0;
    let totalSurfaceArea = 0;
    const totalSummary = spaceInfo.reduce((total, accum) => {
        totalArea += accum.area;
        totalSurfaceArea += accum.area * accum.surfaceRoughness;

        {
            return { totalSurfaceArea: totalSurfaceArea, totalArea: totalArea };
        }
    }, {});
    console.log(totalSummary);
    const totalLitreValue = ((totalSummary.totalSurfaceArea * levels) / sqmPerLitre).toFixed(2);
    totalLitre = levels === undefined ? 'No data yet!' : `${totalLitreValue} m²`;

    totalCost =
        levels === undefined
            ? 'No data yet!'
            : currencyFormatter(((totalSummary.totalSurfaceArea * levels) / sqmPerLitre) * pricePerLitre);
    return (
        <div className="rounded-md overflow-hidden shadow-lg p-5 bg-indigo-200 mb-4 mx-8 text-gray-800">
            <h2 className="text-xl font-semibold mb-3">Overall Cost Summary</h2>
            <p className="text-md font-medium">
                <span className="text-2xl text-yellow-400">&#8226;</span> Total area to be painted:{' '}
                <SpanModifier value={`${totalSummary.totalArea} m²`} />
            </p>
            <p className="text-md font-medium">
                <span className="text-2xl text-pink-600">&#8226;</span> Total area using surface modifier:{' '}
                <SpanModifier value={`${totalSummary.totalSurfaceArea.toFixed(2)} m²`} />
            </p>
            <p className="text-md font-medium">
                <span className="text-2xl text-green-500">&#8226;</span> Total litres needed:{' '}
                <SpanModifier value={`${totalLitre}`} />
            </p>
            <p className="text-md font-medium">
                <span className="text-2xl text-purple-500">&#8226;</span> Total cost for the building:{' '}
                <SpanModifier value={totalCost} />
            </p>
        </div>
    );
};

export default CostSummary;

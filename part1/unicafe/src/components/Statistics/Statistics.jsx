import { StatsLine } from "../StatsLine/StatsLine"
import { useState, useEffect } from 'react';
import './Statistics.css'

export const Statistics = ({ goodCount, neutralCount, badCount }) => {
    const [average, setAverage] = useState(0);
    const [positive, setPositive] = useState(0);

    useEffect(() => {
        const neto = goodCount - badCount
        const total = goodCount + neutralCount + badCount
        setAverage(neto / total)
        setPositive(goodCount * 100 / total)
    }, [goodCount, neutralCount, badCount]);

    if (goodCount + neutralCount + badCount === 0) {
        return (
            <p>No feedback given</p>
        )
    } else {
        return (
            <>
                <h2>Statistics</h2>
                <table>
                    <tbody>
                        <tr>
                            <StatsLine text='good' value={goodCount} />
                        </tr>
                        <tr>
                            <StatsLine text='neutral' value={neutralCount} />
                        </tr>
                        <tr>
                            <StatsLine text='bad' value={badCount} />
                        </tr>
                        <tr>
                            <StatsLine text='all' value={goodCount + neutralCount + badCount} />
                        </tr>
                        <tr>
                            <StatsLine text='average' value={Number(average)} />
                        </tr>
                        <tr>
                            <StatsLine text='positive' value={positive} />
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}
import { Doughnut, Line } from 'react-chartjs-2'; import React from 'react'
import { faker } from '@faker-js/faker';


type insight_props = {
    title: string,
    graphType: string,
    textLong: string,
    data: number[]
}
const Insight = ({ title, graphType, textLong, data }: insight_props) => {
    const Graph = () => {
        if (graphType === "circle") {

            const data = {
                datasets: [
                    {
                        label: 'Robots',
                        data: [8, 2],
                        backgroundColor: [
                            'rgba(182, 96, 18, 0.2)',
                            'rgb(240, 9, 9, 0.2)'
                        ],
                        borderColor: [
                            'rgba(182, 96, 18)',
                            'rgb(240, 9, 9)'
                        ],
                        borderWidth: 1,
                    },
                ],
            };
            return (
                <Doughnut data={data} />
            )
        }
        else if (graphType == "line") {
            const options = {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top' as const,
                    },
                    title: {
                        display: true,
                        text: 'Insight',
                    },
                },
            };
            const labels = ['January', 'February', 'March', 'April']; // FIXME: to be substituted by real data

            const data = { // FIXME: to be substituted by real data
                labels,
                datasets: [
                    {
                        label: 'Some heading',
                        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
                        borderColor: 'rgba(182, 96, 18)',
                        backgroundColor: 'rgba(182, 96, 18)',
                    },
                ],
            };

            return (
                <Line options={options} data={data} />
            )

        }
        else {
            return (
                <div>More insights coming soon!</div>
            )
        }
    }
    return (
        <div className="py-1 px-4 bg-surface rounded-2xl shadow-md border-2 border-primary">
            <div className="h-[300px] w-[250px] flex flex-col">
                <div className="flex flex-col justify-between flex-grow items-center">
                    <div className="mb-2">{title}</div>
                    <Graph />
                    <div className="flex justify-center text-xs">{textLong}</div>
                </div>
            </div>
        </div>
    );


}

export default Insight
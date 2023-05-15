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
                        borderWidth: 2,
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
        <div className="py-1 px-4 bg-surface rounded-2xl shadow-md border-2 border-primary" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className=" flex flex-col" style={{ flexGrow: 1 }}>
                <div className="flex flex-col justify-between items-center" style={{ flexGrow: 1 }}>
                    <div className="mb-2 text-lg">{title}</div>
                    <Graph />
                    <div className="m-2 flex justify-center text-sm lg:text-base">{textLong}</div>
                </div>
            </div>
        </div>
    );




}

export default Insight
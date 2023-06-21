
interface points {
    id: number;
    point1: string;
    point2: string;
    point3: string;
    point4: string;
    point5: string;
    point6: string;
}

export default function ContentCard({ project }: any) {

    const content: any = project?.content ;

    return (
        <>
            <h4>Main points:</h4>
            {content.map((points:points) => {
                return (
                    <ul className="contentCard-container">
                        {points.point1 && (
                            <li key={1}>{points.point1}</li>
                        )}
                        {points.point2 && (
                            <li key={2}>{points.point2}</li>
                        )}
                        {points.point3 && (
                            <li key={3}>{points.point3}</li>
                        )}
                        {points.point4 && (
                            <li key={4}>{points.point4}</li>
                        )}
                        {points.point5 && (
                            <li key={5}>{points.point5}</li>
                        )}
                        {points.point6 && (
                            <li key={6}>{points.point6}</li>
                        )}
                    </ul>
                );
            })}
        </>
    );
}
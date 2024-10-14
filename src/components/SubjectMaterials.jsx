import ResourceCard from './ResourceCard';

const resources = [
    {
        title: "Chemistry Model Set",
        desc: "This is the question paper for Chemistry. It includes various topics such as organic chemistry, inorganic chemistry, and physical chemistry that you will need to study.",
        link: "https://drive.google.com/file/d/your-file-id/view"
    },
    {
        title: "Physics Model Set",
        desc: "This resource includes question papers covering classical mechanics, electromagnetism, and thermodynamics.",
        link: "https://drive.google.com/file/d/your-file-id/view"
    },
    {
        title: "Mathematics Model Set",
        desc: "This question paper contains problems from algebra, calculus, and statistics to help you practice.",
        link: "https://drive.google.com/file/d/your-file-id/view"
    },
    {
        title: "Biology Model Set",
        desc: "This includes various topics in biology such as cell biology, genetics, and ecology that are crucial for your studies.",
        link: "https://drive.google.com/file/d/your-file-id/view"
    }
];

export default function App() {
    return (
        <div className="flex flex-col items-center p-6">
            <h1 className="text-2xl font-bold mb-6">Resources</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                    <ResourceCard
                        key={index}
                        title={resource.title}
                        desc={resource.desc}
                        link={resource.link}
                    />
                ))}
            </div>
        </div>
    );
}

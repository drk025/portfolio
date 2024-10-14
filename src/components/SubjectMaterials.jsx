import ResourceCard from './ResourceCard';

export default function App() {
    return (
        <div>
            <ResourceCard
                title="Chemistry Model Set"
                desc="This is the question paper for Chemistry. It includes various topics such as organic chemistry, inorganic chemistry, and physical chemistry that you will need to study."
                link="https://drive.google.com/file/d/your-file-id/view"
            />
            <ResourceCard
                title="Chemistry Model Set"
                desc="Description here"
                link="https://drive.google.com/file/d/your-file-id/view"
            />

        </div>
    );
}

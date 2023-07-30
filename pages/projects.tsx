import Card from "@components/Card";
import BasePageLayout from "@components/BasePageLayout";
import projects from "@data/projects.json";

const ProjectsPage = () => {
    return (
        <BasePageLayout
            title="Tapnisu - Projects"
            description="Projects I made"
        >
            <h1 className="text-3xl font-bold p-2">My projects</h1>

            {projects?.map(
                ({ name, image, url, description, language, theme }) => (
                    <Card
                        title={name}
                        image={image}
                        url={url}
                        description={description}
                        comments={`Written in ${language}`}
                        theme={theme}
                        key={name}
                    />
                ),
            )}
        </BasePageLayout>
    );
};

export default ProjectsPage;

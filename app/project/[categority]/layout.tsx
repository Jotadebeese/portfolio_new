export default function ProjectCategoryLayaout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {

    return (
        <div className="projects-container">
            {children}
        </div>
    )
  }
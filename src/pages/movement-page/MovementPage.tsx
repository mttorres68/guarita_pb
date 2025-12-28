import type { Category, MovementType } from "@/lib/types";

interface MovementPageProps {
  typeMovement: MovementType;
  category: Category;
  title: string;
}

const MovementPage: React.FC<MovementPageProps> = ({
  typeMovement,
  category,
  title,
}) => {
  return (
    <div className="d">
      {title} - {category}
    </div>
  );
};

export default MovementPage;

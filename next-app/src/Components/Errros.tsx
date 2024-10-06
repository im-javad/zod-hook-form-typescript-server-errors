type props = {
  errors: string[];
};

const Errros: React.FC<props> = ({ errors }) => {
  const preparedErrors = errors.map((error) => {
    return <li>{error}</li>;
  });

  return (
    <div>
      {errors.length > 0 && (
        <ul className="flex flex-col bg-red-900 p-2 rounded-lg mt-3">
          {preparedErrors}
        </ul>
      )}
    </div>
  );
};

export default Errros;

// Internal Dependencies
import { Text } from "@components/atoms";

const Feedback = () => {
  return (
    <div className="flex flex-col gap-4 text-center">
      <Text className="font-bold">Felicitaciones!</Text>
      <Text className="">La película fue correctamente subida.</Text>
    </div>
  );
};

export default Feedback;

export const progress = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-base font-medium">Dark</div>
      <Progress progress={45} color="dark" />
      <div className="text-base font-medium text-blue-700">Blue</div>
      <Progress progress={45} color="blue" />
      <div className="text-base font-medium text-red-700">Red</div>
      <Progress progress={45} color="red" />
      <div className="text-base font-medium text-green-700">Green</div>
      <Progress progress={45} color="green" />
      <div className="text-base font-medium text-yellow-700">Yellow</div>
      <Progress progress={45} color="yellow" />
      <div className="text-base font-medium text-indigo-700">Indigo</div>
      <Progress progress={45} color="indigo" />
      <div className="text-base font-medium text-purple-700">Purple</div>
      <Progress progress={45} color="purple" />
    </div>
  );
};

export const badge = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge color="info">Default</Badge>
      <Badge color="gray">Dark</Badge>
      <Badge color="failure">Failure</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="indigo">Indigo</Badge>
      <Badge color="purple">Purple</Badge>
      <Badge color="pink">Pink</Badge>
    </div>
  );
};

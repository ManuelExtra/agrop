export const alerts = () => {
  return (
    <Alert
      color="success"
      onDismiss={function onDismiss() {
        return alert('Alert dismissed!');
      }}
    >
      <span>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </span>
    </Alert>
  );
};

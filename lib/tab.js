export const tab = () => {
  return (
    <Tabs.Group aria-label="Tabs with underline" style="underline">
      <Tabs.Item title="Profile">Profile content</Tabs.Item>
      <Tabs.Item active={true} title="Dashboard">
        Dashboard content
      </Tabs.Item>
      <Tabs.Item title="Settings">Settings content</Tabs.Item>
      <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
      <Tabs.Item disabled={true} title="Disabled">
        Disabled content
      </Tabs.Item>
    </Tabs.Group>
  );
};

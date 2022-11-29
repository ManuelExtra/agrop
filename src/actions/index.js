export const keyType = (key) => {
  return {
    type: key.type,
    _wallet: key._wallet,
    _projects: key.projects,
    _project: key.project,
    _web3: key.web3,
    _error: key.error,
    loader: key.loader,
  };
};

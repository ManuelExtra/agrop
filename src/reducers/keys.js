const keysReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_APP_SETUP':
      return {
        type: action.type,
        _wallet: action._wallet,
        _projects: action._projects,
        _project: action._project,
        _web3: action._web3,
        _error: action._error,
        loader: action.loader,
      };

    default:
      return {
        type: 'APP_SETUP',
        CONFIG: {
          INFURA_ID: '4885e870e57a4b27b8b80466b0be302d',
          NETWORK: 'goerli',
          SOFINAHUB_CONTRACT_ADDRESS:
            '0x26fF6E0c94c2fb0951a6FD23d734CF428C4D4825',
        },
        walletconnect: {
          is_connected: false,
          provider: {},
          accounts: [],
          web3: {},
          // getAccount
          address: '',
          balance: '',
          company: {
            projects: {
              total: 0,
              data: [],
            },
          },
          backer: {
            projects: {
              total: 0,
              data: [],
            },
          },
          backed: {
            projects: {
              total: 0,
              data: [],
            },
          },
        },
        web3: {},
        projects: {
          total: 0,
          data: [],
        },
        project: {
          data: {},
          contributors: {},
        },
        error: {},
        _wallet: {
          is_connected: false,
          address: '',
          balance: '',
          company: {
            projects: {
              total: 0,
              data: [],
            },
          },
          backer: {
            projects: {
              total: 0,
              data: [],
            },
          },
          backed: {
            projects: {
              total: 0,
              data: [],
            },
          },
          web3: {},
        },
        _projects: {},
        _project: {},
        _web3: {},
        _error: {},
        loader: true,
      };
  }
};

export default keysReducer;

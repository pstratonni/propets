const InitialState = {
  users: {
    user: {},
    tokenIsValid: false,
  },
  foundsPets: {
    list: [],
    petById: {},
  },
  lostsPets: {
    list: [],
    petById: {},
  },
  posts: {
    list: [],
    postById: {},
  },
  articles: {
    hotels: {
      list: [],
      hotelById: {},
    },
    walking: {
      list: [],
      walkingById: {},
    },
    fostering: {
      list: [],
      fosteringById: {},
    },
    vetHelp: {
      list: [],
      vetHelpgById: {},
    },
  },
};
export default InitialState;

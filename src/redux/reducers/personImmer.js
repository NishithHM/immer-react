import produce from "immer";
const INITIAL_STATE = {
  name: "Abc",
  occupations: {
    sureify: {
      designation: "Software Engineer",
      role: "Front end developer",
    },
    abc: {
      designation: "Trainee",
      role: "Fresher",
    },
  },
  residence: {
    permanent: "Bangalore",
    temporary: "Hyderabad",
  },
};

export default function personImmer(state = INITIAL_STATE, action) {
  const { type } = action;
  return produce(state, (draft) => {
    switch (type) {
      case "PROMOTE_IMMER":
        draft.occupations.sureify.designation = "Senior Software Engineer";
        break;
      case "TRANSFER_IMMER":
        draft.occupations.sureify.designation = "Senior Software Engineer";
        draft.residence.temporary='Noida'
        break;
      default:
        break;
    }
  });
}



const INITIAL_STATE = {
    name:'Abc',
    occupations:{
        sureify:{
            designation: 'Software Engineer',
            role:'Front end developer',
        },
        abc:{
            designation: "Trainee",
            role:'Fresher'
        }
    },
    residence:{
        permanent:'Bangalore',
        temporary:'Hyderabad'
    }
}

export default function allReducer(state = INITIAL_STATE, action) {
    
    const { type } = action;
    switch (type) {       
        case "PROMOTE":   
            return { ...state,
                occupations:{
                    ...state.occupations,
                    sureify:{
                        ...state.occupations.sureify,
                        designation: 'Senior Software Engineer'
                    }
                },
            };
            case "TRANSFER":   
            return { ...state,
                occupations:{
                    ...state.occupations,
                    sureify:{
                        ...state.occupations.sureify,
                        designation: 'Senior Software Engineer'
                    }
                },
                residence:{
                    ...state.residence,
                    temporary:'Noida'
                }
            }; 
        default:
            return {...state};
    }
}
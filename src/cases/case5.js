import React from "react";
import { connect } from "react-redux";
import {promotionImmer, transferImmer} from '../redux/actions'
const Case5 = (props) => {
  const { dispatch, person } = props;
  console.log(person)

  const promote = () => {
    dispatch(promotionImmer())
  };

  const promoteAndTransfer = () => {
    dispatch(transferImmer())
  };

  return (
    <>
      <p>Person Details</p>
      <br />
      <p>{person.name}</p>
      <br />
      <p>{person.occupations.sureify.designation}</p>
      <br />
      <p>{person.occupations.sureify.role}</p>
      <p>{person.residence.temporary}</p>
      <br />
      <button title="Add Hello" onClick={promote}>
        Promote Person
      </button>
      <button title="Add Hello" onClick={promoteAndTransfer}>
        Promote And Transfer
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
    console.log(state)
  return {
    person: state.personImmer,
  };
};

export default connect(mapStateToProps)(Case5);

import React from "react";
import { connect } from "react-redux";
import {promotion, transfer} from '../redux/actions'
const Case4 = (props) => {
  const { dispatch, person } = props;
  console.log(person)

  const promote = () => {
    dispatch(promotion())
  };

  const promoteAndTransfer = () => {
    dispatch(transfer())
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
  return {
    person: state.person,
  };
};

export default connect(mapStateToProps)(Case4);

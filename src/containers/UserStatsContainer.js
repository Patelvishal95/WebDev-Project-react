import UserStats from "../components/UserStats";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    // functions to be written
});
const stateToPropsMapper = state => ({
    username: state.username
});
const UserStatsContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(UserStats);
export default UserStatsContainer;
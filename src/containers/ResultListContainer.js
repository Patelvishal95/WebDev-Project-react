import ResultList from "../components/ResultList";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    selectedTrack: (artist, track) =>
        actions.selectedTrack(dispatch, artist, track)
});
const stateToPropsMapper = state => ({
    albumResults: state.albumResults,
    trackResults: state.trackResults,
    artistResults: state.artistResults,
    eventResults: state.eventResults,
    details: state.details,
    flag: state.searchFlag
});
const ResultListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(ResultList);
export default ResultListContainer;
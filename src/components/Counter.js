import { connect, useDispatch, useSelector } from "react-redux";
import {inc, dec, rnd} from '../actions';

const Counter = () => {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <div className="jumbtron">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">DEC</button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">INC</button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary">RND</button>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         counter: state.value
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch)
// }

export default Counter;
import React, { Component } from 'react' ;
import { connect } from 'react-redux' ;
import Counter from '../components/Counter' ;
// 카운터 화면표시
import { increment, decrement } from '../store/modules/counter' ;
// 카운터 동작

class CounterContainer extends Component {
    handleIncrement = () => {
        this.props.increment() ;
    } ;
    handleDecrement = () => {
        this.props.decrement() ;
    } ;
    render() {
        const { number } = this.props ;
        return (
            <Counter
                value={number} 
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
            />
        ) ;
    }
}

// props로 넣어줄 스토어 상태값 
const mapStateToProps = ({ counter }) => ({
    number: counter.number,
}) ;

// props로 넣어줄 액션 생성 함수
const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
}) ;

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect함수 사용
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer) ;
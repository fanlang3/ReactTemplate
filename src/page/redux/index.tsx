import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreators';
interface propsType {
  myData: string;
  setData: any;
}
const ReduxTest = (props: propsType) => {
  const { myData, setData } = props;
  console.log('AAAAAAAAA', myData);
  return (
    <div>
      我是Redux组件
      <p
        onClick={() => {
          setData('123456');
        }}
      >
        {process.env.NODE_ENV}
        {myData}
      </p>
    </div>
  );
};

// 把store中的数据映射到组件的props
const mapStateToProps = (state: any) => {
  return {
    // 数组第一个元素的login，对应的是src/store/reducer.js中定义的login分库名称
    myData: state.myData
  };
};
// 把store的Dispatch映射到组件的props
const mapDispatchToProps = (dispatch: any) => ({
  setData(data: any) {
    const action = actionCreators.setData(data);
    dispatch(action);
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);

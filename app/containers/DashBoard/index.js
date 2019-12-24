/**
 *
 * Tasks
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import { Grid, Box } from '@material-ui/core';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Tasks from 'components/Tasks/Loadable';
import { useStyle } from './styles';
import makeSelectY from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Status } from './constants';
import * as taskActions from './actions';
// import messages from './messages';

export function TaskLists(props) {
  const classes = useStyle();
  useInjectReducer({ key: 'tasks', reducer });
  useInjectSaga({ key: 'tasks', saga });
  const { taskActionsCreator, tasks } = props;
  const itemTodos = tasks.data;

  useEffect(() => {
    taskActionsCreator.getListTask();
  }, [taskActionsCreator]);

  function renderDashBoard() {
    const handeleDelete = id => {
      taskActionsCreator.editTaskRequest(id);
    };

    const handleEdit = () => {
      console.log('edit');
    };

    let xhtml = null;
    xhtml = (
      <Grid container direction="row" spacing={0}>
        {Status.map(status => (
          <Grid key={status.value} className={classes.root} item xs={12} md={4}>
            <Box className={classes.box}>{status.label}</Box>
            <Tasks
              col={status.value}
              itemTodos={itemTodos}
              handeleDelete={handeleDelete}
              handleEdit={handleEdit}
            />
          </Grid>
        ))}
      </Grid>
    );
    return xhtml;
  }
  return <div>{renderDashBoard()}</div>;
}

TaskLists.propTypes = {
  tasks: PropTypes.object,
  taskActionsCreator: PropTypes.shape({
    getListTask: PropTypes.func,
  }),
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tasks: makeSelectY(),
});

function mapDispatchToProps(dispatch) {
  return {
    taskActionsCreator: bindActionCreators(taskActions, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TaskLists);

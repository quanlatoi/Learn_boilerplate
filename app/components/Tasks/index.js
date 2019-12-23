/**
 *
 * Tasks
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Fab,
  Icon,
} from '@material-ui/core';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function Tasks(props) {
  const { col, itemTodos } = props;
  let tasks = [];
  if (itemTodos) {
    tasks = itemTodos.filter(item => item.status === col);
  }
  const handeleDelete = () => {
    console.log('delete');
  };
  const handleEdit = () => {
    console.log('edit');
  };
  return tasks.map(task => (
    <div key={task.id}>
      <Card>
        <CardContent>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography component="h2">{task.title}</Typography>
              {task.description ? <p>{task.description}</p> : null}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Fab
            color="primary"
            aria-label="Edit"
            size="small"
            onClick={handleEdit}
          >
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab
            color="primary"
            aria-label="Delete"
            size="small"
            onClick={handeleDelete}
          >
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    </div>
  )
}

Tasks.propTypes = {
  col: PropTypes.string,
  itemTodos: PropTypes.array,
};

export default memo(Tasks);

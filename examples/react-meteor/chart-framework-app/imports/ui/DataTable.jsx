import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare'
import Immutable from 'immutable'

import {AutoSizer, Column, Table, SortDirection, SortIndicator} from 'react-virtualized';
import Incident from './Incident';
import tableStyles from '../../node_modules/react-virtualized/styles.css';

export default class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disableHeader: false,
      headerHeight: 30,
      height: 270,
      hideIndexRow: false,
      overscanRowCount: 10,
      rowHeight: 40,
      rowCount: 0,
      scrollToIndex: undefined,
      useDynamicRowHeight: false,
    };

    this._getRowHeight = this._getRowHeight.bind(this);
    this._headerRenderer = this._headerRenderer.bind(this);
    this._noRowsRenderer = this._noRowsRenderer.bind(this);
    this._onRowCountChange = this._onRowCountChange.bind(this);
    this._onScrollToRowChange = this._onScrollToRowChange.bind(this);
    this._rowClassName = this._rowClassName.bind(this);

    this.styles = {
      th: {
        textAlign: 'center',
      },
      tableStyles: tableStyles,
    };
  }

  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({rowCount: nextProps.data.size})
  }

  render() {
    const {
      disableHeader,
      headerHeight,
      height,
      hideIndexRow,
      overscanRowCount,
      rowHeight,
      rowCount,
      scrollToIndex,
      useDynamicRowHeight
    } = this.state;
    const list = this.props.data;
    const rowGetter = ({ index }) => this._getDatum(list, index);
    return (
      <div>
        <header>
          <h1>DataTable</h1>
        </header>
        <AutoSizer disableHeight>
            {({ width }) => (
              <Table
                ref='Table'
                disableHeader={disableHeader}
                headerClassName={this.styles.tableStyles.headerColumn}
                headerHeight={headerHeight}
                height={height}
                noRowsRenderer={this._noRowsRenderer}
                overscanRowCount={overscanRowCount}
                rowClassName={this._rowClassName}
                rowHeight={useDynamicRowHeight ? this._getRowHeight : rowHeight}
                rowGetter={rowGetter}
                rowCount={rowCount}
                scrollToIndex={scrollToIndex}
                width={width}
              >
                {!hideIndexRow &&
                  <Column
                    dataKey=''
                    label='Num'
                    cellRenderer={
                      ({rowIndex}) => { return rowIndex+1 }
                    }
                    disableSort={true}
                    width={60}
                  />
                }
                <Column
                  dataKey='_id'
                  disableSort={true}
                  label='id'
                  width={180}
                />
                <Column
                  width={75}
                  disableSort={true}
                  dataKey='x1'
                  label='x1'
                  className={this.styles.tableStyles.exampleColumn}
                  cellRenderer={this._localeDateRenderer}
                  flexGrow={1}
                />
                <Column
                  width={75}
                  dataKey='x2'
                  disableSort={true}
                  label='x2'
                  className={this.styles.tableStyles.exampleColumn}
                  cellRenderer={this._localeDateRenderer}
                  flexGrow={1}
                />
                <Column
                  width={50}
                  disableSort={true}
                  dataKey='y1'
                  label='y1'
                  className={this.styles.tableStyles.exampleColumn}
                  cellRenderer={({ cellData }) => cellData}
                  flexGrow={1}
                />
                <Column
                  width={100}
                  disableSort={true}
                  dataKey='type'
                  label='type'
                  className={this.styles.tableStyles.exampleColumn}
                  cellRenderer={({ cellData }) => cellData}
                  flexGrow={1}
                />
              </Table>
            )}
          </AutoSizer>
      </div>
    );
  }

  _localeDateRenderer({ cellData, columnData, dataKey, rowData, rowIndex }) {
    if (cellData) {
      return new Date(cellData).toLocaleDateString();
    } else {
      return ''
    }
  }

  _getDatum (list, index) {
    return list.get(index % list.size)
  }

  _getRowHeight ({ index }) {
   const list = this.props.data;
   return this._getDatum(list, index).size
 }

 _headerRenderer ({
   columnData,
   dataKey,
   disableSort,
   label,
   sortBy,
   sortDirection
 }) {
   return (
     <div>
       Full Name
       {sortBy === dataKey &&
         <SortIndicator sortDirection={sortDirection} />
       }
     </div>
   )
 }

 _noRowsRenderer () {
   return (
     <div className={this.styles.tableStyles.noRows}>
       No rows
     </div>
   )
 }

 _onRowCountChange (event) {
   const rowCount = parseInt(event.target.value, 10) || 0;
   this.setState({ rowCount });
 }

 _onScrollToRowChange (event) {
   const { rowCount } = this.state
   let scrollToIndex = Math.min(rowCount - 1, parseInt(event.target.value, 10))

   if (isNaN(scrollToIndex)) {
     scrollToIndex = undefined
   }

   this.setState({ scrollToIndex })
 }

 _rowClassName ({ index }) {
   if (index < 0) {
     return this.styles.tableStyles.headerRow
   } else {
     return index % 2 === 0 ? this.styles.tableStyles.evenRow : this.styles.tableStyles.oddRow
   }
 }

 _sort ({ sortBy, sortDirection }) {
   this.setState({ sortBy, sortDirection })
 }

}

DataTable.propTypes = {
  data: PropTypes.instanceOf(Immutable.List).isRequired,
};

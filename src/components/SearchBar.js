import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

import { search } from '../redux/actions';

class SearchBar extends Component {
    render() {
        const { search, value } = this.props;

        return (
            <TextField
                onChange={(e) => search(e.target.value)}
                value={value}
                placeholder="Procurar Champion"
                id="input-search"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
            />
        );
    }
}

function mapStateToProps({ filteredList }) {
    return { value: filteredList.value };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
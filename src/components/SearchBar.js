import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Paper, IconButton} from '@mui/material';
import {Search} from '@mui/icons-material';

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }
    }

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #E3E3E3',
                p: '0',
                pl: '10px',
                boxShadow: 'none',
                d: 'flex'
            }}
        >
            <input
                className="search-bar"
                style={{height: '32px'}}
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value) }
            />

            <IconButton type="submit" sx={{p:'10px', color:'red'}}>
                <Search />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;
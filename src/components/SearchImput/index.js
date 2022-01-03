import SearchIcon from '@mui/icons-material/Search';
import { OutlinedInput } from '@mui/material';

export default function SearchInput(props) {

    const {onSearchChanged} =props

    return (
        <div>
       <OutlinedInput
                placeholder="Search products"
                endAdornment={
                    <SearchIcon/>
                }
                onChange={onSearchChanged}
            />
        </div>
    );
}

